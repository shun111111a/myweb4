const DEFAULT_MODEL = "deepseek-v4-flash";
const MAX_BODY_BYTES = 64 * 1024;

function readEnv(context, key, fallback = "") {
  return (
    context?.env?.[key] ||
    globalThis?.process?.env?.[key] ||
    fallback
  );
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

async function parsePayload(request) {
  const length = Number(request.headers.get("content-length") || "0");
  if (length > MAX_BODY_BYTES) {
    throw new Error("REQUEST_TOO_LARGE");
  }

  try {
    return await request.json();
  } catch {
    throw new Error("BAD_JSON");
  }
}

function buildMessages(payload) {
  const molecule = payload.molecule && typeof payload.molecule === "object" ? payload.molecule : {};
  const mode = payload.mode || "explain";
  const question = (payload.question || "").trim();

  const name = molecule.name || "当前模型";
  const formula = molecule.formula || "";
  const condensed = molecule.condensed || "";
  const tags = (molecule.tags || []).join("、");
  const units = (molecule.units || []).join("、");
  const mainPoint = molecule.mainPoint || "";
  const hint = molecule.hint || "";
  const planeLine = molecule.planeLine || "";
  const planeStats = molecule.planeStats || "";

  const finalQuestion =
    mode === "ask" && question
      ? question
      : `请讲解${name}的空间结构、杂化类型、共线共面判断和常见易错点。`;

  const userText = [
    `当前模型：${name}`,
    `分子式：${formula}`,
    `结构简式：${condensed}`,
    `结构标签：${tags}`,
    `结构单元：${units}`,
    `页面观察重点：${mainPoint}`,
    `页面提示：${hint}`,
    `共线/共面信息：${planeStats} ${planeLine}`.trim(),
    `学生问题：${finalQuestion}`,
  ].join("\n");

  return [
    {
      role: "system",
      content:
        "你是一位高中有机化学教师，擅长解释有机物空间结构、杂化轨道、共线共面判断和学生易错点。回答要准确、简洁、适合课堂展示。不要编造页面没有提供的精确数值；如果只能依据高中化学模型近似判断，要明确说明。",
    },
    { role: "user", content: userText },
  ];
}

async function handleDeepSeek(request, context) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (request.method !== "POST") {
    return json({ error: "只支持 POST 请求。" }, 405);
  }

  const apiKey = readEnv(context, "DEEPSEEK_API_KEY", "").trim();
  if (!apiKey || apiKey === "sk-your-deepseek-api-key" || apiKey.startsWith("sk-your-")) {
    return json(
      {
        error: "云端还没有配置 DeepSeek API Key。请在 EdgeOne Pages 项目环境变量中设置 DEEPSEEK_API_KEY。",
      },
      500
    );
  }

  let payload;
  try {
    payload = await parsePayload(request);
  } catch (error) {
    return json(
      {
        error: error.message === "REQUEST_TOO_LARGE" ? "请求内容太长。" : "请求格式不是有效 JSON。",
      },
      error.message === "REQUEST_TOO_LARGE" ? 413 : 400
    );
  }

  const model = readEnv(context, "DEEPSEEK_MODEL", DEFAULT_MODEL);
  const baseUrl = readEnv(context, "DEEPSEEK_BASE_URL", "https://api.deepseek.com").replace(/\/+$/, "");

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: buildMessages(payload),
        temperature: 0.4,
        max_tokens: 900,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return json(
        {
          error: "DeepSeek API 返回错误。",
          detail: data.error?.message || data.message || JSON.stringify(data),
        },
        response.status
      );
    }

    const answer = data.choices?.[0]?.message?.content?.trim();
    return json({
      answer: answer || "DeepSeek 没有返回可显示的回答。",
      model: data.model || model,
      usage: data.usage,
    });
  } catch (error) {
    return json(
      {
        error: "无法连接 DeepSeek API。",
        detail: error.message,
      },
      502
    );
  }
}

export default async function onRequest({ request, env }) {
  return handleDeepSeek(request, { env });
}

export async function onRequestPost({ request, env }) {
  return handleDeepSeek(request, { env });
}

export async function onRequestOptions({ request, env }) {
  return handleDeepSeek(request, { env });
}
