<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>有机结构与杂化轨道可视化平台</title>
  <style>
    :root {
      --bg: #f4f8fd;
      --panel: #ffffff;
      --text: #102a43;
      --muted: #60708a;
      --line: #d7e3f2;
      --blue: #1f63d8;
      --cyan: #0ea5b7;
      --soft: #eef5ff;
      --shadow: 0 16px 34px rgba(31, 72, 126, 0.10);
    }

    * {
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
    }

    body {
      overflow: hidden;
      color: var(--text);
      font-family: "Microsoft YaHei", "PingFang SC", system-ui, sans-serif;
      background: var(--bg);
    }

    button {
      font: inherit;
    }

    .shell {
      height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr;
      min-height: 0;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      padding: 12px 18px;
      border-bottom: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.96);
      box-shadow: 0 8px 22px rgba(44, 86, 139, 0.06);
      backdrop-filter: blur(14px);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .logo {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      display: grid;
      place-items: center;
      color: #fff;
      font-weight: 900;
      background: linear-gradient(145deg, var(--blue), var(--cyan));
      box-shadow: 0 10px 24px rgba(31, 99, 216, 0.22);
      flex: 0 0 auto;
    }

    h1 {
      margin: 0;
      font-size: clamp(1.15rem, 2.2vw, 1.7rem);
      line-height: 1.15;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .subtitle {
      margin: 3px 0 0;
      color: var(--muted);
      font-size: 0.92rem;
    }

    .view-tabs {
      display: inline-grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      padding: 5px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--soft);
      flex: 0 0 auto;
    }

    .view-tabs button {
      min-width: 132px;
      min-height: 40px;
      border: 0;
      border-radius: 7px;
      background: transparent;
      color: #174170;
      padding: 8px 12px;
      cursor: pointer;
      font-weight: 900;
    }

    .view-tabs button.active {
      background: var(--blue);
      color: #fff;
      box-shadow: 0 8px 18px rgba(31, 99, 216, 0.22);
    }

    .workspace {
      min-height: 0;
      padding: 12px;
    }

    .module {
      height: 100%;
      min-height: 0;
      display: none;
      grid-template-rows: auto 1fr;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--panel);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    body[data-view="structure"] .structure-module,
    body[data-view="orbital"] .orbital-module {
      display: grid;
    }

    .module-title {
      min-height: 42px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 8px 12px;
      border-bottom: 1px solid var(--line);
      color: #123865;
      font-weight: 900;
      background: rgba(255, 255, 255, 0.96);
    }

    .module-title span:last-child {
      color: var(--muted);
      font-size: 0.84rem;
      font-weight: 700;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: 0;
      background: #fff;
    }

    @media (max-width: 760px) {
      body {
        overflow: auto;
      }

      .shell {
        min-height: 100vh;
        height: auto;
      }

      header {
        align-items: stretch;
        flex-direction: column;
      }

      h1 {
        white-space: normal;
      }

      .view-tabs {
        width: 100%;
      }

      .view-tabs button {
        min-width: 0;
      }

      .workspace {
        height: calc(100vh - 142px);
        min-height: 680px;
      }
    }
  </style>
</head>
<body data-view="structure">
  <div class="shell">
    <header>
      <div class="brand">
        <div class="logo">3D</div>
        <div>
          <h1>有机结构与杂化轨道可视化平台</h1>
          <p class="subtitle">有机物空间结构与轨道成键两个模块独立切换</p>
        </div>
      </div>
      <nav class="view-tabs" aria-label="页面切换">
        <button class="active" type="button" data-view="structure">有机结构</button>
        <button type="button" data-view="orbital">杂化轨道</button>
      </nav>
    </header>

    <main class="workspace">
      <section class="module structure-module" aria-label="有机结构可视化">
        <div class="module-title">
          <span>有机物结构</span>
          <span>共线 · 共面 · 空间构型</span>
        </div>
        <iframe src="./structure.html" title="有机物结构认知与共线共面可视化平台"></iframe>
      </section>

      <section class="module orbital-module" aria-label="杂化轨道可视化">
        <div class="module-title">
          <span>杂化轨道</span>
          <span>轨道取向 · 重叠 · 成键</span>
        </div>
        <iframe src="./orbital.html" title="杂化轨道与分子结构可视化"></iframe>
      </section>
    </main>
  </div>

  <script>
    const viewButtons = document.querySelectorAll("[data-view]");
    viewButtons.forEach(button => {
      button.addEventListener("click", () => {
        const view = button.dataset.view;
        document.body.dataset.view = view;
        viewButtons.forEach(item => {
          item.classList.toggle("active", item === button);
        });
      });
    });
  </script>
</body>
</html>
