# GitHub 組織深度盤點 — `dennislee928`

**稽核時間：** 2026-09-05 14:31 UTC+08:00 (UTC+8)  
**資料來源：** user-Github MCP（唯讀）+ 公開 GitHub REST／raw.githubusercontent.com fallback  
**身分：** `get_me` → `dennislee928`（id 55692615）；company `mitake.com.tw`；location Taipei  
**範圍：** 指定 org + 可見相關實體。無 GitHub 寫入。

---

## 1. 執行摘要

| Org | 公開庫 | dennislee928 角色（推斷） | 主題 | 品質 | UK CV 立場 |
|-----|-------:|------------------------|------|------|------------|
| **quantumworld-dpdns-io** | **60** | 創辦／主作者（solo；自合 PR；org README WIP） | 太空／資安／PQC **+ ~20 成人產業 scaffold** | 不均：1–2 個深 demo（ZK-XDR），多 stub + auto-commit 噪音 | **Hide org 整體**；頂多具名引用 1–2 非成人 cyber 庫 |
| **Jest-Test-Team** | **39** | 旗艦庫主要 committer；**78** authored PRs；近期 Datacenter WebMCP | AI 安全（ADM）、機房模擬、inclusive AI gateway、XDR/PQC K8s、IELTS 噪音 | **組織中實質最高**（測試、infra、活 demo） | **Cite carefully** — 具名旗艦，少提 org 品牌「John Sladek ,inc.」 |
| **cyber-security-dev-dep-mitake-com-tw** | **12** | 樣本庫主作者；對齊雇主 `mitake.com.tw` | 硬體資安、ESP32、ChipWhisperer、磁碟清理、工具集 | **最強雇主對齊證據** | **Safe**（精選）；避開 SCP 玩笑名 |
| **BabyGrootCICD** | **13** | MEMBER；**31** authored PRs | CI/CD 產品原型 + NSFW 遊戲歷史 | 混雜；2026-08-23 draft PR 爆發像原型 spam | **Cite carefully**（CI）／**Hide** Sext-Adventure |
| **taipei-doit**（外部） | N/A | Contributor（2 open security/CI PRs） | 市政儀表板 DevSecOps | 好的協作訊號（若合併） | **Safe**（合併後） |

**跨組織英國風險（SOC 2134 等）：**
1. Profile 顯示名稱仍低俗 — 與 org 無關也能擋篩選。
2. 成人品牌集中在 quantumworld（~20/60）與 BabyGroot `Sext-Adventure`。
3. AI co-authorship（`Co-Authored-By: Claude…`）可坦白為工具；勿過度「solo genius」。
4. 部分 commit-search `total_count` 可能膨脹；以「每庫結構／近期 PR」為準。
5. 自有 org 多為 **solo**；外部 PR 才是多人訊號。

### CAP／權限（本次重試 — **未清除**）

| 檢查項 | 結果 |
|--------|------|
| MCP `search_repositories org:Jest-Test-Team` | **仍 CAP block** |
| MCP `search_repositories org:BabyGrootCICD` | **仍 CAP block** |
| MCP `get_file_contents` on Jest-Test-Team | **403**：org 禁止 lifetime >366 天的 fine-grained PAT |
| 公開 REST `GET /orgs/Jest-Test-Team/repos` | **成功列出 39** |
| 公開 REST `GET /orgs/BabyGrootCICD/repos` | **成功列出 13** |
| MCP PR/commit search on 兩 org | **可用** |
| `get_teams` | **null** |
| `GET /users/dennislee928/orgs` | **[]**（公開 membership 未列） |
| 新出現的 org | **無**（相對於既有四個） |

**解讀：** 「all repos read」若只改了 repo 權限，**無法解除 org-level Conditional Access**，也無法放寬 Jest 的 PAT lifetime 政策。盤點已用公開 API 補齊，但 MCP 認證路徑仍受限。

---

## 2. 各 Org 深度

### 2.1 `quantumworld-dpdns-io`

#### Org 檔案
| 欄位 | 值 |
|------|-----|
| Display name | quantumworld.dpdns.io |
| Created | 2025-12-16 |
| Public repos | **60** |
| Open intro PR | [#1 WIP README](https://github.com/quantumworld-dpdns-io/.github/pull/1) by dennislee928 |
| Authored PRs（org） | **16** |

#### 角色
- 推斷 **owner／founder／primary**：authored org intro PR；多「Dev」自合 PR；樣本 commit 作者為 dennislee928。
- 官方 owner 角色無法經 `get_teams`／collaborators 確認。

#### 主題切分（依名稱／描述關鍵字）
- **成人／創作者／親密合規：** **20**
- **太空／PQC／Zero Trust／資安：** 其餘多數（ZK-XDR、GNSS、satellite ZT、pqc-migration…）
- **Tiny scaffolds（size < 200）：** **23**

成人相關庫名（Hide）：`adult-ad-network-compliance-scoring`, `adult-content-licensing-marketplace`, `adult-content-provenance-anti-deepfake`, `adult-creator-deplatforming-insurance`, `adult-creator-reputation-passport`, `adult-creator-royalty-split-protocol`, `adult-creator-tax-accounting-copilot`, `adult-event-access-control`, `adult-platform-trust-safety-os`, `ai-companion-compliance-layer`, `anonymous-adult-market-research-panel`, `consent-ledger-content-production`, `decentralized-proof-of-contact-network`, `escort-compliance-crm`, `nft-gated-adult-fan-club-compliance`, `onchain-consent-intimacy-agreements`, `privacy-preserving-kyc-vault`, `sex-worker-safety-dao-toolkit`, `sexual-wellness-commerce-platform`, `web3-adult-industry-ca`

#### 實質較高的庫

| Repo | ★ | Lang | Size | Pushed | 說明 |
|------|--:|------|-----:|--------|------|
| gnss-spoofing-jamming-early-warning | 2 | Makefile | 285823 | 2026-05-25 | GNSS spoofing and jamming early warning SaaS – crowdsourced detection network aggregating  |
| KSN-AI-RWA-Civilization-Stack | 1 | Move | 417142 | 2026-08-09 | Kardashev–Sagan–Nakamoto + Autonomous Real-World Assets - 將文明級的「能源—算力—機器資產」轉化為程式化、可治理的自主基礎 |
| escort-compliance-crm | 1 | Go | 630 | 2026-06-10 | Legal escort/companion compliance CRM – jurisdiction-aware CRM with selective-disclosure c |
| decentralized-proof-of-contact-network | 0 | Rust | 1010218 | 2026-08-17 | Decentralized proof-of-contact network – generates signed proofs verifying that nodes comm |
| Life_3.0_doomsday_clock | 0 | Makefile | 234657 | 2026-06-01 | a **polyglot monorepo** that tracks how close the world is to Max Tegmark's **12 AI-evolut |
| satellite-zero-trust-access-broker | 0 | Makefile | 213758 | 2026-06-04 | Satellite zero trust access broker – hardware-backed MFA and JIT access gateway for satell |
| decentralized-ground-station-network | 0 | Makefile | 205902 | 2026-07-15 | Decentralized ground station network – coordinates private/university ground stations usin |
| web3-adult-industry-ca | 0 | Makefile | 193489 | 2026-05-23 | Web3 adult industry certification authority – issues Verifiable Credentials (Verified adul |
| privacy-preserving-kyc-vault | 0 | TypeScript | 109895 | 2026-05-24 | Privacy-preserving KYC vault for adult platforms – reusable DID/KYC vault for cryptographi |
| ZK-XDR-Graph-Agentless-XDR-ZK-Device-Trust-Federated-CTI-Lakehouse | 0 | Go | 53236 | 2026-07-15 | 用 ZK device identity 當 endpoint / IoT / VDI / OT asset 的 trust root，再把 DNS、WAF、Email、AD、CV |
| off-planet-cdn-simulator | 0 | TypeScript | 44691 | 2026-05-23 | Off-planet CDN simulator – priority-aware caching simulator for Moon/Mars habitats where b |
| decentralized-rescue-beacon-network | 0 | Makefile | 27348 | 2026-05-23 | Decentralized rescue beacon network – secure distress-signal system utilizing multi-hop em |

**深度焦點 — `ZK-XDR-Graph-Agentless-XDR-ZK-Device-Trust-Federated-CTI-Lakehouse`**
- 公開 root（MCP `get_file_contents`）：`services/`、`apps/`、`circuits/`、`detections/`、`playbooks/`、`infra/`、`tests/`、`docker/`、大型 README（Zero-Knowledge Extended Detection 敘事）
- **UK：** 若一定要提，用**完整 repo URL**，不要掛 org 行銷文案；並標 demo／research。

**品質訊號**
- 真深度：ZK-XDR 類多階段結構。
- 噪音：GNSS 等大型 Makefile monorepo + 歷史 auto-commit 模式；大量模板 README。
- NSFW 風險：**高**（銀行／公部門／大廠 ATS）。

**協作：** 公開證據為 solo。

**引用建議：** **Hide org 名稱**；必要時只 cite 1 個非成人 cyber repo。

### 2.2 `Jest-Test-Team`（顯示名：John Sladek ,inc.）

#### Org 檔案
| 欄位 | 值 |
|------|-----|
| Created | 2025-04-28 |
| Public repos | **39** |
| Email（公開） | support-jsdk@jsdk-tech.io |
| MCP org search | **CAP 仍擋**；改以公開 REST + PR/commit |
| Authored PRs | **78** |

#### 角色
- `Dastacenter_Builder_Simulator` 近期密集 commit（WebMCP、undo/redo、測試）。
- `author_association: MEMBER`；推斷旗艦庫 primary committer。

#### 語言分佈（公開）
TypeScript 7、Go 7、Python 6、None 14、Makefile 2、Shell 2、HTML 1

#### 旗艦／建議引用

| Repo | ★ | Lang | Size | Pushed | 說明 |
|------|--:|------|-----:|--------|------|
| Dastacenter_Builder_Simulator | 2 | TypeScript | 10327 | 2026-08-30 | Build a Lego-style data center, run it in a SimCity-like simulation, score it against inte |
| Ielts | 1 | HTML | 129822 | 2025-11-24 | Ielts |
| OSINT-Pharma-Radar-Deep-Web-Forum-Price-Index | 1 | Python | 33 | 2026-03-03 |  |
| SDR | 0 | Makefile | 452418 | 2026-06-26 |  |
| redis-lab | 0 | Python | 115481 | 2026-05-23 |  |
| On-chain-Casino-Arb-Bot- | 0 | Makefile | 87711 | 2026-05-23 |  |
| fast_arch_os_inmac | 0 | — | 59809 | 2026-06-06 |  |
| XDevice-infocard | 0 | Go | 36561 | 2026-05-23 |  |
| kaspersky-cloud-integration | 0 | Go | 32887 | 2026-06-22 |  |
| Devloh-Artificial-intelligence-ESG-analysis | 0 | Go | 9148 | 2025-08-23 |  |
| software-poe | 0 | Go | 3897 | 2026-07-29 | Software POE — 架構承諾、ADR 假設與非功能需求是否在正式營運後真正實現 |
| Agentic-Defense-Matrix-ADM | 0 | Go | 2778 | 2026-08-25 | 一個針對具備自主規劃與工具調用（Tool-calling）能力的 Agentic AI 所設計的縱深防禦系統。本專案屏棄傳統僅依賴「提示詞過濾」的無效防護，透過作業系統底層遙測（T |
| remote-mcp-server | 0 | TypeScript | 2071 | 2025-10-24 |  |
| inclusive-ai-trust-gateway | 0 | Python | 970 | 2026-08-23 | Inclusive AI public-service trust gateway combining fairness auditing and agent safety con |
| Agentless-Monitoring-and-EDR-HIDS-integration | 0 | Shell | 670 | 2026-05-29 |  |
| next-js-project | 0 | TypeScript | 601 | 2026-05-03 | next-js-project |
| those_forgotten | 0 | Go | 406 | 2026-08-07 |  |
| XDR-OAR-Hybrid-Infrastructure_K8S | 0 | Python | 313 | 2026-05-08 | 建構一個高度隔離、自動化且具備機器學習偵測能力的 **擴展偵測與回應 (XDR)** 平台。架構結合了 **VMware ESXi** 的硬體虛擬化優勢與 **Kubernetes |

**`Agentic-Defense-Matrix-ADM`（Go）** — Cite carefully（cmd/pkg/agents/dashboard/tests；Blue/Green agentic defense）

**`Dastacenter_Builder_Simulator`（TS★2）** — Cite carefully（Next/Cloudflare/WebMCP/Robot；2026-08 高品質工程 commit）

**`inclusive-ai-trust-gateway`** — Cite carefully（turbo monorepo；data.gov.tw + ERH audit）

避開主打：`Ielts`、Casino bot 類。協作偏 solo，但完整度高於其他自有 org。

### 2.3 `cyber-security-dev-dep-mitake-com-tw`

#### Org 檔案
| 欄位 | 值 |
|------|-----|
| Display | cyber-security-dev-dep-mitake.com.tw |
| Created | 2025-09-25 |
| Public repos | **12** |
| 對齊 | profile company `mitake.com.tw` |

#### 庫清單

| Repo | ★ | Lang | Size | Pushed | 說明 |
|------|--:|------|-----:|--------|------|
| SCP-2317 | 0 | Makefile | 47432 | 2026-07-17 |  |
| mitake-eat | 0 | TypeScript | 6961 | 2026-05-13 |  |
| boss-s_dyson_clear | 0 | TypeScript | 4750 | 2026-08-09 |  |
| chip_whisper_lab | 0 | TypeScript | 3887 | 2026-08-04 |  |
| local-connection-gui-inspector | 0 | TypeScript | 702 | 2026-07-05 |  |
| pbx_ivr | 0 | Python | 366 | 2026-06-01 |  |
| ESP32_atk_def_proxy_logger | 0 | Rust | 157 | 2026-08-04 |  |
| Security-and-Infrastructure-tools-Set | 0 | Shell | 142 | 2025-10-17 |  |
| scp-1003-ko-main | 0 | PowerShell | 98 | 2026-07-28 |  |
| BLE-off-seat-Presence-Lock | 0 | Rust | 89 | 2026-07-23 |  |
| local-stt | 0 | Swift | 49 | 2026-06-30 |  |
| .github | 0 | — | 6 | 2025-10-01 | Description |

**Safe 精選：** `chip_whisper_lab`、`ESP32_atk_def_proxy_logger`、`BLE-off-seat-Presence-Lock`、`Security-and-Infrastructure-tools-Set`、`boss-s_dyson_clear`（履歷寫 SweepDeck）

**Hide／低調：** `SCP-2317`、`scp-1003-ko-main`

Commit search total_count=564（可能膨脹；以具體 CI／SweepDeck 訊息為準）。

### 2.4 `BabyGrootCICD`（顯示名：Matrix-Anti-Architecture-Lab）

#### Org 檔案
| 欄位 | 值 |
|------|-----|
| Created | 2024-08-23 |
| Public repos | **13** |
| Blog | https://www.dennisleehappy.org/ |
| Location（API） | Afghanistan |
| Email | pcleegood@gmail.com |
| MCP org search | **CAP 仍擋**；公開 REST 可用 |
| Authored PRs | **31** |

#### 庫清單

| Repo | ★ | Lang | Size | Pushed | 說明 |
|------|--:|------|-----:|--------|------|
| Sext-Adventure | 3 | HTML | 380 | 2026-09-01 | 一個搞笑瑟瑟文字冒險遊戲 |
| hermes_agent_setup_guide | 1 | Shell | 461 | 2026-05-24 | A local-first setup and orientation repository for running **Hermes Agent** with local Oll |
| IAC-CICD-LAB | 1 | — | 2 | 2025-07-31 |  |
| modern_hospital_information_system | 0 | Go | 40364 | 2026-04-27 |  |
| graph-engineering-ref | 0 | Python | 6841 | 2026-08-03 |  |
| product_maker | 0 | Go | 5145 | 2026-08-31 |  |
| quant-trading-bot | 0 | Python | 336 | 2026-08-27 |  |
| Di-taxis | 0 | TypeScript | 269 | 2025-12-26 | 可執行的黃金曝險多通道資產路由與危機預案 |
| Efficient-Learning-and-Sustainable-Recovery | 0 | TypeScript | 175 | 2026-07-07 |  |
| depin-service-integration-research | 0 | — | 106 | 2026-07-19 |  |
| PulseGrid-AegisLink | 0 | TypeScript | 103 | 2026-07-19 |  |
| B2B-sex-Routing-Semantic-Aggregation-Engine | 0 | Go | 32 | 2026-07-17 |  |
| Claude_Devboard_Pet | 0 | — | 0 | 2026-08-25 |  |

MEMBER；2026-08-23 `product_maker` 同日多個 draft「solution prototype」— 像自動化批量。

**`product_maker`（Go）** — Cite carefully（cmd/internal/testdata）；勿強調 draft PR 數。

**Hide：** `Sext-Adventure`、`B2B-sex-Routing-Semantic-Aggregation-Engine`

### 2.5 外部 PR
| 目標 | 訊號 | UK |
|------|------|-----|
| JuliaLang/julia #62423 | SIGINT 測試 | Safe／高價值 |
| taipei-doit（Dashboard / ORB） | Security+CI | Safe（合併後更佳） |
| BanklessDAO 等 | Cloudflare/Cypress 等 | Cite carefully |

## 3. UK 引用矩陣
| 等級 | 內容 |
|------|------|
| **Safe** | mitake 精選；個人 Ethic-Latex／erh-guardian／LiveHouse／firmware；JuliaLang／taipei-doit |
| **Cite carefully** | Jest ADM／Datacenter／inclusive-ai-trust-gateway／XDR-OAR；BabyGroot product_maker；quantumworld 單一非成人 cyber URL |
| **Hide** | quantumworld 品牌與成人庫；Sext-Adventure；SCP 玩笑；IELTS 當代表作；低俗 display name |

## 4. Red flags（組織面）
1. MCP CAP **未清除**
2. Jest PAT lifetime >366d 被拒
3. 成人垂直／玩笑命名
4. BabyGroot draft PR 批量
5. Org location Afghanistan／個人 Gmail 不專業
6. Solo org ≠ tech lead 敘事

## 5. 建議行動
1. 立刻改 display name
2. Pin 4–6 乾淨旗艦
3. 履歷只列 Safe + 精選 Cite carefully
4. 解除 CAP 需 Conditional Access／PAT 政策（非僅 repo read）
5. 最佳非成人作品可鏡射到個人中性命名

---
*檔案路徑：`/workspace/uk-career-intel/dennislee928-orgs-deepdive.md`*
