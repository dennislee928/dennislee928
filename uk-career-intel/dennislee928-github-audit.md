# GitHub 個人技能／作品集稽核 — `dennislee928`

**稽核時間：** 2026-09-05 14:31 UTC+08:00 (UTC+8)  
**資料來源：** user-Github MCP（唯讀）+ 公開 GitHub REST API fallback  
**身分確認：** `get_me` → login `dennislee928`（id 55692615）  
**寫入操作：** 無（本稽核完全唯讀）

---

## 執行摘要（Executive summary）

- **Profile：** hireable=true；company `mitake.com.tw`；location Taipei；blog `https://www.dennisleehappy.org/`；bio 自稱 fullstack／cybersecurity／CI-CD／crypto；聯絡 `security-admin@dennisleehappy.org`。
- **顯示名稱是英國履歷／ATS 篩選的致命風險：** 目前 GitHub `name` = `Dildo Baggins(假屌巴金斯，中土世界第一巨屌)` — 會直接觸發 HR 名稱過濾與專業第一印象崩壞。**投遞前必須改回正式姓名（例如 Pei-Chen Lee / Dennis Lee）。**
- **規模：** `public_repos=192`（`get_me` 與 `/users/.../repos` 一致）→ **非 fork 139**、**fork 53**。Followers **360**／following **550**。帳號建立於 2019-09-23。
- **星標訊號集中：** 旗艦 `Ethic-Latex` **53★**；其餘個人庫多半 **3–11★**。非 fork 星標合計 **697**（大量 4–6★ 群聚，訊號偏弱）。
- **真實深度集中在少數庫：** ERH 研究 monorepo（`Ethic-Latex`）、HITL agent（`erh-guardian-agent`）、Go+Next SaaS（`LiveHouseAAS`）、韌體逆向 demo、polyglot scaffold（`AscendOS`）、獎學金自動化（`Smart_Zone`）。
- **廣度 ≫ 深度：** 大量 scaffold、GitHub Skills forks、成人產業主題 org 庫、WIP 會稀釋英國 junior–mid 履歷觀感。
- **Org 足跡：** `quantumworld-dpdns-io`（60）、`Jest-Test-Team`（39）、`cyber-security-dev-dep-mitake-com-tw`（12）、`BabyGrootCICD`（13）。未發現其他新公開 org（`/users/dennislee928/orgs` 回傳空陣列＝公開 membership 未曝光）。
- **Open PRs：** **31**（BabyGrootCICD 原型爆發、JuliaLang、taipei-doit、Jest PQC、BanklessDAO 等）。
- **Closed PRs：** search `author:dennislee928 is:closed` **total_count=2171**（含自有庫 churn 與 org 工作；數字不可當「協作貢獻量」直接引用）。
- **英國定位（SOC 2134 軟體／資安後轉 MSc）：** 主打 **生產型 fullstack（Go/TS）**、**DevSecOps／韌體**、**AI-agent + 可度量安全（ERH）** — 不要用成人主題或玩笑命名當入口。

---

## 身分（get_me）與顯示名稱風險

| 欄位 | API 值 |
|------|--------|
| login | dennislee928 |
| name | Dildo Baggins(假屌巴金斯，中土世界第一巨屌) |
| company | mitake.com.tw |
| location | taipei |
| hireable | true |
| public_repos | 192 |
| followers / following | 360 / 550 |
| blog | https://www.dennisleehappy.org/ |
| bio | NCCU Student; Metal guitar; Full stack / Cybersecurity platform / CI / CD; Crypto lover |
| profile_url | https://github.com/dennislee928 |
| created_at | 2019-09-23T10:15:57Z |
| updated_at | 2026-08-27T14:13:18Z |

**風險評級：CRITICAL（投遞英國職缺前必須處理）**
- 顯示名稱會出現在 commit author、公開 profile、部分 PR UI。
- 本次稽核亦在 `Jest-Test-Team/Dastacenter_Builder_Simulator`、`cyber-security-dev-dep-mitake-com-tw/boss-s_dyson_clear` 等 commit 中觀察到同一 vulgar display name 與 `Dennislee:)` 交錯出現。
- **建議：** 立刻改為正式姓名；歷史 commit 無法全部改寫，但 profile + 新 commit 必須乾淨。

`get_teams` → **null**（此 token 看不到 team membership，或尚未配置）。

---

## 個人倉庫庫存統計（API）

| 指標 | 數值 | 來源 |
|------|------|------|
| public_repos | 192 | `get_me` |
| `/users/dennislee928/repos` 列舉 | 192 | 公開 REST |
| 非 fork | **139** | 同上 |
| forks | **53** | 同上 |
| 非 fork 星標合計 | **697** | 同上 |
| 非 fork、`pushed_at` ≥ 2026-06-01 | **20** | 同上 |
| 非 fork、`size` < 50 | **44** | 同上（多為 stub／skills／教學） |
| Archived（樣本） | 0 | 公開列舉 |
| Private | 不可見於公開 inventory | — |

### 主要語言（非 fork，GitHub primary language）

| 語言 | 倉庫數 |
|------|-------:|
| （未標）None | 29 |
| TypeScript | 23 |
| Python | 20 |
| Go | 16 |
| JavaScript | 13 |
| Vue | 10 |
| HTML | 5 |
| Shell | 5 |
| Makefile / C / Rust | 各 3 |
| Java | 2 |
| Julia / Q# / YARA / APL / Dockerfile 等 | 各 1 |

### Topics 頻率（非 fork，前 20）

| Topic | 次數 |
|-------|-----:|
| api | 25 |
| python | 15 |
| react | 13 |
| go | 12 |
| typescript | 12 |
| nextjs | 11 |
| vue | 11 |
| vercel | 10 |
| automation | 9 |
| github-actions | 8 |
| javascript | 8 |
| quantum-computing | 6 |
| rust | 5 |
| cloudflare-pages | 5 |
| portfolio | 3 |
| fintech | 3 |
| nuxt3 | 3 |
| vue3 | 3 |
| nuxt | 3 |
| web3 | 3 |

---

## 亮點展示庫（Deep sample）

### 1. `Ethic-Latex` — 旗艦（53★，TypeScript／polyglot）
- URL: https://github.com/dennislee928/Ethic-Latex
- **主題：** Ethical Riemann Hypothesis（ERH）模擬／引擎／安全產品 monorepo
- **結構證據（`get_file_contents`）：** `erh_engine/`、`erh_core/`、`erh/`、`frontend/`、`services/`、`tests/`、`docker/`、`infra/`、`julia/`、`js-sdk/`、`hackathon/`、`docs/`、`pyproject.toml`、`uv.lock`、大型 `readme.md`（~28KB）
- **近期活動：** 2026-09 仍有 merged PRs（Bedrock provider、over-refusal scoring、hackathon agents）
- **UK 引用：** **Safe** — 以「可測試的 AI safety / scoring engine + fullstack 產品面」敘述；避免過度學術吹噓

### 2. `erh-guardian-agent` — HITL agent 產品（Python，近期抽出）
- URL: https://github.com/dennislee928/erh-guardian-agent
- **結構：** `src/`、`tests/`、`mcp-worker/`、`ui/`、`docs/`、MIT LICENSE、`pyproject.toml`
- **定位：** values-aligned Strands agent，ERH 評分 + human-in-the-loop gate
- **UK 引用：** **Safe** — 與 `Ethic-Latex` 成套展示 agent + measurable safety

### 3. `LiveHouseAAS` — Go + Next SaaS
- URL: https://github.com/dennislee928/LiveHouseAAS
- **結構：** `backend/`、`frontend/`、`docker-compose.dev.yml`、`docker-compose.prod.yml`、`Makefile`、`.github/`、大型 README
- **UK 引用：** **Safe** — 生產形 fullstack／SaaS 故事

### 4. `firmware-research-demo` — 韌體逆向／YARA（7★）
- URL: https://github.com/dennislee928/firmware-research-demo
- **結構：** `binwalk-analysis/`、`ghidra-notes.md`、`yara-rules/`、`Dockerfile`、`docker-compose.yml`、`webapp/`、分析腳本
- **UK 引用：** **Safe** — DevSecOps／firmware／RE 興趣證明（標明 demo）

### 5. 其他可釘選
| Repo | ★ | Lang | 一句話 | 釘選？ |
|------|--:|------|--------|--------|
| `Smart_Zone` | 4 | Makefile | GitHub Actions 獎學金提醒／Telegram | 建議 pin（自動化） |
| `AscendOS` | 4 | Makefile | 多階段 self-improvement 平台 scaffold | 可選 |
| `Carbon_Trading_For_Individuals` | 8 | TypeScript | 碳交易個人平台（Next/Supabase） | 可選（需確認完成度） |
| `next_js_portfolio` | 6 | TypeScript | portfolio 網站 | 建議整理後 pin |
| `ETH_GATEWAY_DEMO` | 7 | JavaScript | React+Web3 DApp demo | Cite carefully（crypto） |
| `Claude_Devboard_Pet` | 0 | C | 硬體／嵌入式實驗 | 可選 |
| `academy-central` | 4 | Shell | 學習筆記彙整 | 不 pin |

### 星標前 15（非 fork）

| Repo | ★ | Lang | Size | Pushed | 說明 |
|------|--:|------|-----:|--------|------|
| Ethic-Latex | 53 | TypeScript | 31277 | 2026-09-05 | Simulations of the Ethical Riemann Hypothesis (ERH), which states that in a "healthy" mora |
| thesis | 11 | Python | 107238 | 2026-05-03 |  |
| QASM | 10 | Python | 96 | 2026-05-03 | For IBM QASM Demo. |
| APL_Demo | 9 | APL | 10 | 2025-03-07 | 這個專案包含用於分析 Cloudflare Spectrum 流量的 Axiom APL (Axiom 查詢語言) 檔案。 |
| Qikit-practice | 9 | Python | 95450 | 2024-09-23 | Qikit-practice(qubit) |
| Carbon_Trading_For_Individuals | 8 | TypeScript | 35688 | 2026-05-03 | This project provides a carbon offset trading platform targeting individual users in Taiwa |
| CySECurity_Example | 7 | Q# | 8 | 2026-05-05 |  |
| ETH_GATEWAY_DEMO | 7 | JavaScript | 545 | 2026-07-28 | 一個基於 React 和 Web3.js 的以太坊 DApp 示範專案，提供多種區塊鏈互動功能。. |
| firmware-research-demo | 7 | YARA | 46379 | 2026-05-03 | 🧩 binwalk hexdump 進行韌體解包 🧠 Ghidra 進行靜態字串和模式分析 🧪 使用 YARA 進行規則檢測 🐳 Docker 容器化與自動化分析流程. |
| npm_packages | 7 | JavaScript | 102018 | 2024-10-27 |  |
| -V1 | 6 | Java | 2 | 2020-04-06 | TEST V1 |
| 104_open_api | 6 | TypeScript | 412 | 2026-05-03 |  |
| 1st_mac_app | 6 | TypeScript | 302192 | 2026-05-03 |  |
| 2024_portfolio | 6 | Vue | 15026 | 2026-05-03 |  |
| BTC_Rise_Calling | 6 | Vue | 14763 | 2026-05-03 |  |

### 2026-06 以降活躍非 fork（前 20，依 pushed_at）

| Repo | ★ | Lang | Size | Pushed | 說明 |
|------|--:|------|-----:|--------|------|
| dennislee928 | 6 | HTML | 1557 | 2026-09-05 | Full-stack Developer & Cloud Engineer with a passion for building scalable systems, automa |
| Ethic-Latex | 53 | TypeScript | 31277 | 2026-09-05 | Simulations of the Ethical Riemann Hypothesis (ERH), which states that in a "healthy" mora |
| Smart_Zone | 4 | Makefile | 629107 | 2026-09-04 | This repository automates scholarship reminder pushes (lunch, evening, weekend) via GitHub |
| erh-guardian-agent | 0 | Python | 2360 | 2026-09-03 | A values-aligned Strands agent whose every consequential action is ERH-scored, with a huma |
| Claude_Devboard_Pet | 0 | C | 383 | 2026-08-26 |  |
| academy-central | 4 | Shell | 393056 | 2026-08-23 | sth I've learn. |
| pbx_estimation | 5 | HTML | 44523 | 2026-08-05 | PBX Market Estimation & VoIP Trend Forecasting |
| rapid_saas | 4 | HTML | 31030 | 2026-08-04 |  |
| NVIDIA_DLI_KPI_Accelerator | 4 | JavaScript | 24 | 2026-07-29 | 擴充功能（Manifest V3），用於在 NVIDIA DLI 課程頁面自動掃描未完成節點並透過 API 完成標記。專為資安／API 交互測試情境設計，預設於課程內頁注入腳本並搭 |
| ETH_GATEWAY_DEMO | 7 | JavaScript | 545 | 2026-07-28 | 一個基於 React 和 Web3.js 的以太坊 DApp 示範專案，提供多種區塊鏈互動功能。. |
| LiveHouseAAS | 3 | Go | 82254 | 2026-07-28 | A full-stack SaaS platform for Taiwanese Live House venues and independent musicians. Buil |
| architec-julia | 0 | Julia | 470 | 2026-07-19 |  |
| Julia-Core---Compile-architect-guideline | 0 | — | 0 | 2026-07-17 |  |
| next_js_portfolio | 6 | TypeScript | 24169 | 2026-07-16 | my portfolio website. |
| AscendOS | 4 | Makefile | 40297 | 2026-07-03 | This repository contains a multi-phase implementation of the AscendOS self-improvement pla |
| skills-publish-packages | 5 | HTML | 63 | 2026-07-01 | Use GitHub Actions to publish your project to a Docker image. |
| skills-hello-github-actions | 5 | — | 54 | 2026-07-01 | Create and run a GitHub Actions workflow. |
| github_ci_action_program | 6 | — | 114 | 2026-07-01 | Create workflows that enable you to use Continuous Integration (CI) for your projects. |
| skills-test-with-actions | 5 | — | 43 | 2026-07-01 | Create workflows that enable you to use Continuous Integration (CI) for your projects. |
| skills-write-javascript-actions | 5 | — | 39 | 2026-07-01 | Write your own GitHub JavaScript Action and automate customized tasks unique to your workf |

---

## 技能矩陣（High / Med / Low）

依據**可驗證的公開倉庫結構與近期 commit／PR**，非自我宣稱。

| 技能域 | 等級 | 證據（公開） |
|--------|------|--------------|
| TypeScript / Next.js / Vue 前端 | **High** | 大量 TS/Vue 庫；`LiveHouseAAS` frontend、portfolio、多個 API demo |
| Python（研究／agent／自動化） | **High** | `Ethic-Latex` erh_engine、`erh-guardian-agent`、thesis／Qiskit 相關 |
| Go 後端／服務 | **High** | `LiveHouseAAS` backend；org 端 ZK-XDR、ADM、product_maker |
| CI/CD · GitHub Actions | **High** | 多庫 `.github/`；Skills 系列；`Smart_Zone`；BabyGrootCICD 原型 |
| Docker / Compose | **High** | LiveHouse、firmware demo、多 org monorepo |
| AI agent / MCP / HITL | **High** | erh-guardian（mcp-worker）、Datacenter WebMCP（Jest）、Claude co-author 常見 |
| 資安／DevSecOps（應用層） | **Med–High** | firmware RE、taipei-doit security PRs、mitake 硬體資安庫、PQC nginx PR |
| Cloudflare / Workers / Pages | **Med** | Cloudflare labs、portfolio／Pages 部署痕跡 |
| Rust | **Med** | 少量個人 Rust；org 端 proof-of-contact／ESP32 |
| 量子／Qiskit／Q# | **Med–Low** | QASM、Qikit-practice、CySECurity_Example（多為練習規模） |
| Julia | **Low–Med** | 個人 Julia 實驗 + JuliaLang 開源 PR（SIGINT test） |
| K8s / 企業 XDR 營運 | **Med（宣稱高於證據）** | Jest `XDR-OAR-…` 等有架構敘事；需面試驗證實際運維深度 |
| 成人產業垂直產品 | **存在但 UK 應隱藏** | quantumworld / BabyGroot 命名與描述 |

---

## 組織足跡總覽

| Org | 公開庫數 | 角色（推斷） | UK 引用策略 |
|-----|--------:|--------------|------------|
| quantumworld-dpdns-io | 60 | 創辦／主要作者 | **Hide citation**（org 名）；最多挑 1 個非成人 cyber 庫 |
| Jest-Test-Team | 39 | 主要 committer（78 PRs） | **Cite carefully**（具名旗艦庫） |
| cyber-security-dev-dep-mitake-com-tw | 12 | 雇主對齊主要作者 | **Safe**（精選；避開 SCP 玩笑名） |
| BabyGrootCICD | 13 | MEMBER；31 PRs | **Cite carefully**（CI）／**Hide** Sext-Adventure |

詳見姊妹檔：`dennislee928-orgs-deepdive.md`。

### CAP／權限狀態（本次重試結果）

| 管道 | Jest-Test-Team | BabyGrootCICD | quantumworld | mitake |
|------|----------------|---------------|--------------|--------|
| MCP `search_repositories org:…` | **仍 CAP 阻擋** | **仍 CAP 阻擋** | OK | OK |
| MCP `get_file_contents` | **403 PAT lifetime>366d 政策** | 公開 REST 可用 | OK（ZK-XDR） | OK（樣本） |
| 公開 REST `/orgs/…/repos` | **可用（39）** | **可用（13）** | 可用（60） | 可用（12） |
| MCP `search_pull_requests` / `search_commits` | OK | OK | OK | OK |

**結論：使用者所稱「已開 all repos read」後，MCP org search CAP 仍未清除。** 本次改以公開 REST + PR/commit search 完成 org 盤點（非捏造）。

---

## 開源／對外 PR 訊號

- **Open：** 31（BabyGrootCICD/product_maker ×14 draft prototypes；JuliaLang/julia SIGINT；taipei-doit ×2；Jest PQC nginx；BanklessDAO Cloudflare；Hexstrike；moda-gov-tw；nics-tw；StreetVoice；等）
- **Closed search total：** 2171（含大量自有庫；**勿直接寫上 CV 數字**）
- **高價值外部訊號：** `JuliaLang/julia`、`taipei-doit`（若合併）、安全依賴／DevSec 類 PR
- **低價值／需節制：** 大量同時開的「solution prototype」draft、部分 drive-by README／docs PR

---

## UK CV：Safe / Cite carefully / Hide

| 等級 | 項目 |
|------|------|
| **Safe** | `Ethic-Latex`、`erh-guardian-agent`、`LiveHouseAAS`、`firmware-research-demo`、`Smart_Zone`、mitake 精選（`chip_whisper_lab`、`ESP32_atk_def_proxy_logger`、`BLE-off-seat-Presence-Lock`、`Security-and-Infrastructure-tools-Set`）、JuliaLang／taipei-doit（合併後） |
| **Cite carefully** | Jest 旗艦：`Agentic-Defense-Matrix-ADM`、`Dastacenter_Builder_Simulator`、`inclusive-ai-trust-gateway`、`XDR-OAR-Hybrid-Infrastructure_K8S`（具名 repo URL，少提 org 品牌）；BabyGroot `product_maker`（CI 主題）；crypto／Web3 demos |
| **Hide** | 顯示名稱現況；`quantumworld-dpdns-io` org 品牌與成人庫；`BabyGrootCICD/Sext-Adventure`、`B2B-sex-Routing-…`；SCP 玩笑庫名；IELTS 噪音庫當主打 |

---

## Red flags

1. **Profile display name 低俗** — 投遞 blocker。
2. **成人產業公開品牌**（quantumworld ~1/3 庫、BabyGroot Sext-Adventure）。
3. **廣度膨脹：** 192 公開庫中大量 stub／skills／bulk update（2026-05 前後大量 touched）。
4. **Auto-commit／scaffold 噪音**（尤其 GNSS 等 org 庫）— 面試官可能質疑「專案數量敘事」。
5. **Claude／AI co-author 密集** — 可誠實說 AI-assisted；勿裝成全程純手寫巨量產出。
6. **BabyGroot 14 個同日 draft PR** — 看起來像自動化原型轰炸，非協作品質訊號。
7. **Org 多為 solo self-merge** — 真正多人協作訊號主要在外部 PR。

---

## 建議 Pin 清單（個人帳號）

1. `Ethic-Latex`
2. `erh-guardian-agent`
3. `LiveHouseAAS`
4. `firmware-research-demo`
5. `Smart_Zone`（或整理後的 `next_js_portfolio`）
6. （可選）`Carbon_Trading_For_Individuals` — 僅在 README／demo 可運行時

**Unpin／低調：** 玩笑名、空壳、GitHub Skills 練習 fork、成人相關、未完成大量同質 Vue API demos。

---

## 方法與限制

- 唯讀：`get_me`、`search_repositories`、`search_pull_requests`、`search_commits`、`get_file_contents`、`get_teams`；公開 REST fallback。
- **未**使用任何 GitHub write tool。
- CAP／PAT 政策阻擋處已標明；統計皆來自 API `total_count` 或完整分頁列舉，**無捏造**。
- 私人庫不可見；org owner 角色無法被 `get_teams` 正式確認。

---

*檔案路徑：`/workspace/uk-career-intel/dennislee928-github-audit.md`*
