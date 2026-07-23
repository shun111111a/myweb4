(function () {
  const AI_STYLE = `
    .info {
      grid-template-rows: auto auto 1fr;
    }

    .ai-tabs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      padding: 0 16px 12px;
    }

    .ai-tab {
      border: 1px solid var(--line, #d7e3f2);
      background: #fff;
      color: #174170;
      border-radius: 8px;
      padding: 9px 10px;
      cursor: pointer;
      font-weight: 900;
      min-height: 40px;
    }

    .ai-tab.active {
      background: var(--blue, #1f63d8);
      color: #fff;
      border-color: var(--blue, #1f63d8);
    }

    .info.ai-mode .info-body > .section:not(#aiAssistant) {
      display: none;
    }

    .info:not(.ai-mode) #aiAssistant {
      display: none;
    }

    .info.ai-mode .info-body {
      display: grid;
      min-height: 0;
      padding-top: 0;
    }

    .info.ai-mode #aiAssistant {
      display: grid;
      grid-template-rows: auto minmax(150px, 0.35fr) auto auto minmax(180px, 1fr);
      gap: 10px;
      min-height: 0;
      border-top: 0;
      padding-top: 0;
    }

    .ai-question {
      width: 100%;
      min-height: 110px;
      resize: vertical;
      border: 1px solid var(--line, #d7e3f2);
      border-radius: 8px;
      padding: 10px 11px;
      outline: none;
      color: var(--text, #102a43);
      background: #fff;
      line-height: 1.55;
    }

    .info.ai-mode .ai-question {
      height: 100%;
      min-height: 150px;
      resize: none;
    }

    .ai-question:focus {
      border-color: #78a9ff;
      box-shadow: 0 0 0 3px rgba(31, 99, 216, 0.13);
    }

    .ai-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .ai-answer {
      min-height: 110px;
      max-height: 260px;
      overflow: auto;
      padding: 11px 12px;
      border: 1px solid var(--line, #d7e3f2);
      border-radius: 8px;
      background: #f8fbff;
      color: #17385f;
      line-height: 1.62;
      white-space: pre-wrap;
    }

    .info.ai-mode .ai-answer {
      min-height: 0;
      max-height: none;
    }

    .ai-answer.error {
      color: #a82020;
      background: #fff7f7;
      border-color: #f0c5c5;
    }

    .ai-status {
      min-height: 20px;
      color: var(--muted, #60708a);
      font-size: 0.88rem;
    }

    body.ai-dock-page {
      padding-right: 340px;
    }

    .ai-dock {
      position: fixed;
      z-index: 20;
      top: 16px;
      right: 16px;
      bottom: 16px;
      width: 312px;
      display: grid;
      grid-template-rows: auto minmax(150px, .35fr) auto auto minmax(180px, 1fr);
      gap: 10px;
      border: 1px solid rgba(139, 196, 255, .28);
      border-radius: 8px;
      background: rgba(13, 19, 31, .94);
      box-shadow: 0 18px 45px rgba(0, 0, 0, .28);
      padding: 14px;
      color: #f6fbff;
      backdrop-filter: blur(14px);
    }

    .ai-dock h3 {
      margin: 0;
      color: #f6fbff;
      font-size: 1.05rem;
    }

    .ai-dock .ai-question {
      height: 100%;
      min-height: 150px;
      resize: none;
      background: rgba(255, 255, 255, .08);
      color: #f6fbff;
      border-color: rgba(139, 196, 255, .28);
    }

    .ai-dock .ai-question::placeholder {
      color: rgba(246, 251, 255, .62);
    }

    .ai-dock .ai-answer {
      min-height: 0;
      max-height: none;
      background: rgba(255, 255, 255, .07);
      color: #f6fbff;
      border-color: rgba(139, 196, 255, .28);
    }

    .ai-dock .ai-status {
      color: #9fb2c3;
    }

    .ai-dock .btn {
      border: 1px solid rgba(139, 196, 255, .28);
      background: rgba(255, 255, 255, .08);
      color: #f6fbff;
      border-radius: 8px;
      min-height: 42px;
      cursor: pointer;
      font-weight: 800;
    }

    @media (max-width: 1180px) {
      body.ai-dock-page {
        padding-right: 0;
      }

      .ai-dock {
        position: static;
        width: auto;
        height: 560px;
        margin: 12px;
      }
    }

    @media (max-width: 980px) {
      .ai-actions {
        grid-template-columns: 1fr;
      }

      .info.ai-mode #aiAssistant {
        grid-template-rows: auto 150px auto auto minmax(180px, 1fr);
      }
    }
  `;

  function addStyle() {
    const style = document.createElement("style");
    style.textContent = AI_STYLE;
    document.head.appendChild(style);
  }

  function addInfoTabs() {
    const infoPanel = document.querySelector(".info");
    const title = infoPanel?.querySelector(".panel-title");
    if (!infoPanel || !title || document.getElementById("aiTabs")) return false;

    const tabs = document.createElement("div");
    tabs.id = "aiTabs";
    tabs.className = "ai-tabs";
    tabs.innerHTML = `
      <button id="showTipsTab" class="ai-tab active" type="button">观察提示</button>
      <button id="showAiTab" class="ai-tab" type="button">AI 助手</button>
    `;
    title.insertAdjacentElement("afterend", tabs);

    document.getElementById("showTipsTab").addEventListener("click", () => setMode("tips"));
    document.getElementById("showAiTab").addEventListener("click", () => setMode("ai"));
    return true;
  }

  function addInfoPanel() {
    const infoBody = document.querySelector(".info .info-body");
    if (!infoBody || document.getElementById("aiAssistant")) return false;

    const section = document.createElement("div");
    section.className = "section";
    section.id = "aiAssistant";
    section.innerHTML = aiPanelMarkup("切换到 AI 助手后，可以一边观察中间的分子模型，一边让 DeepSeek 讲解共线、共面和易错点。");
    infoBody.appendChild(section);
    wireButtons();
    return true;
  }

  function addDockPanel() {
    if (document.getElementById("aiAssistant")) return;

    document.body.classList.add("ai-dock-page");
    const dock = document.createElement("aside");
    dock.className = "ai-dock";
    dock.id = "aiAssistant";
    dock.innerHTML = aiPanelMarkup("可以一边观察轨道模型，一边让 DeepSeek 解释杂化方式、轨道重叠和成键特点。");
    document.body.appendChild(dock);
    wireButtons();
  }

  function aiPanelMarkup(initialText) {
    return `
      <h3>DeepSeek AI 助手</h3>
      <textarea id="aiQuestion" class="ai-question" placeholder="输入你的问题，例如：sp3 杂化轨道为什么呈四面体分布？"></textarea>
      <div class="ai-actions">
        <button id="aiExplain" class="btn" type="button">讲解当前模型</button>
        <button id="aiAsk" class="btn" type="button">发送问题</button>
      </div>
      <div id="aiStatus" class="ai-status"></div>
      <div id="aiAnswer" class="ai-answer">${initialText}</div>
    `;
  }

  function wireButtons() {
    document.getElementById("aiExplain")?.addEventListener("click", () => requestAi("explain"));
    document.getElementById("aiAsk")?.addEventListener("click", () => requestAi("ask"));
  }

  function setMode(mode) {
    const infoPanel = document.querySelector(".info");
    const tipsTab = document.getElementById("showTipsTab");
    const aiTab = document.getElementById("showAiTab");
    const isAi = mode === "ai";

    infoPanel?.classList.toggle("ai-mode", isAi);
    tipsTab?.classList.toggle("active", !isAi);
    aiTab?.classList.toggle("active", isAi);
    if (isAi) {
      setTimeout(() => document.getElementById("aiQuestion")?.focus(), 0);
    }
  }

  function selectedMolecule() {
    if (typeof current === "function") {
      const molecule = current();
      if (molecule) {
        let statsText = "";
        if (typeof planeStats !== "undefined" && planeStats[molecule.id]) {
          const stats = planeStats[molecule.id];
          statsText = `最多 ${stats[0]} 个原子共面；最多 ${stats[1]} 个碳原子共面`;
        }
        return {
          id: molecule.id,
          name: molecule.name,
          formula: molecule.formula,
          condensed: molecule.condensed,
          tags: molecule.tags || [],
          units: molecule.units || [],
          mainPoint: molecule.mainPoint || "",
          hint: molecule.hint || "",
          planeLine: molecule.planeLine || "",
          planeStats: statsText,
        };
      }
    }

    const orbitalApp = window.__hybridOrbitalApp;
    if (orbitalApp) {
      const topic = orbitalApp.topic || orbitalApp.currentTopic || {};
      const topicId = orbitalApp.currentTopicId || orbitalApp.topicId || "";
      const model = orbitalApp.getExplorerModel?.() || {};
      return {
        id: topicId || model.id || "orbital-model",
        name: topic.title || model.title || model.name || document.querySelector("h1")?.textContent || "当前轨道模型",
        formula: model.formula || "",
        condensed: model.subtitle || "",
        tags: ["杂化轨道", "轨道重叠", "分子结构"],
        units: [topic.description || model.description || "轨道与成键模型"].filter(Boolean),
        mainPoint: document.getElementById("status")?.textContent || "观察轨道形状、空间取向与成键方式。",
        hint: "请结合当前轨道模型解释杂化类型、轨道重叠和分子构型。",
        planeLine: "",
        planeStats: "",
      };
    }

    return {
      name: document.getElementById("molName")?.textContent || document.querySelector("h1")?.textContent || "当前模型",
      formula: document.getElementById("molFormula")?.textContent || "",
    };
  }

  function setAnswer(text, isError) {
    const answer = document.getElementById("aiAnswer");
    if (!answer) return;
    answer.textContent = text;
    answer.classList.toggle("error", Boolean(isError));
  }

  function setBusy(isBusy, text) {
    const status = document.getElementById("aiStatus");
    if (status) status.textContent = text || "";
    ["aiExplain", "aiAsk"].forEach(id => {
      const button = document.getElementById(id);
      if (button) button.disabled = isBusy;
    });
  }

  function apiUrl(path) {
    return path;
  }

  function friendlyFetchError(error) {
    const message = error?.message || "";
    if (message === "Failed to fetch" || error instanceof TypeError) {
      return "无法连接云端 AI 接口。请确认网站已经部署到 EdgeOne Pages，并且已经在 EdgeOne 项目环境变量中配置 DEEPSEEK_API_KEY。";
    }
    return message || "DeepSeek 请求失败。";
  }

  async function requestAi(mode) {
    setMode("ai");
    const question = document.getElementById("aiQuestion")?.value.trim() || "";
    if (mode === "ask" && !question) {
      setAnswer("请先输入你想问 DeepSeek 的问题。", true);
      return;
    }

    setBusy(true, "正在请求 DeepSeek...");
    setAnswer("思考中...", false);

    try {
      const response = await fetch(apiUrl("/api/deepseek"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          question,
          molecule: selectedMolecule(),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || data.detail || "DeepSeek 请求失败。");
      }
      setAnswer(data.answer || "DeepSeek 没有返回内容。", false);
      setBusy(false, data.model ? `模型：${data.model}` : "");
    } catch (error) {
      setAnswer(friendlyFetchError(error), true);
      setBusy(false, "");
    }
  }

  addStyle();
  if (addInfoTabs()) {
    addInfoPanel();
  } else {
    addDockPanel();
  }
})();
