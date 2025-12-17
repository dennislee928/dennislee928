| 手法/概念                                      | 保護目標             | 具體怎麼落地                                                              | 參考                                                                                 |
| ------------------------------------------ | -------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **CODEOWNERS + 強制 Code Owner Review**      | 避免高風險變bypass，責任邊界清楚    | 對 `auth/`, `policy/`, `infra/` 設 owner；搭配保護分支要求 code owner approval | GitHub Code Owners 說明。([GitHub Docs][1]) GitLab Code Owners 也支援。([GitLab Docs][2]) |
| **Rulesets：指定 team 必審**                    | 把「誰能放行」變成平台規則        | 用 rulesets 要求特定 team review（比純 CODEOWNERS 更偏治理）                     | GitHub changelog（rulesets required review）。([The GitHub Blog][3])                  |
| **Separation of Duties / Four-eyes（雙人覆核）** | 防甩鍋：風險非個人扛；也降低內控風險 | 生產環境敏感操作、權限調整、放量等要求 2 人同意                                           | SoD 定義。([Wikipedia][4]) Four-eyes 概念。([t2informatik GmbH][5])                      |

[1]: https://docs.github.com/articles/about-code-owners?utm_source=chatgpt.com "About code owners"
[2]: https://docs.gitlab.com/user/project/codeowners/?utm_source=chatgpt.com "Code Owners"
[3]: https://github.blog/changelog/2025-11-03-required-review-by-specific-teams-now-available-in-rulesets/?utm_source=chatgpt.com "Required review by specific teams now available in rulesets"
[4]: https://en.wikipedia.org/wiki/Separation_of_duties?utm_source=chatgpt.com "Separation of duties"
[5]: https://t2informatik.de/en/smartpedia/four-eyes-principle/?utm_source=chatgpt.com "What is the Four-Eyes Principle? - Smartpedia"


| 手法/概念                                  | 保護目標                    | 具體怎麼落地                                             | 參考                                                                                     |
| -------------------------------------- | ------------------------ | -------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **ADR（Architecture Decision Records）** | 防甩鍋：當初為何這樣選、有何替代方案、風險誰同意 | 每個架構/安全重大決策寫 ADR：Context/Decision/Consequences     | Nygard 普及 ADR 的文章。([Cognitect.com][1]) ADR 社群彙整站。([Architectural Decision Records][2]) |
| **PR Template + Checklist（含安全/回滾/測試）** | 讓每次變更都有「已提醒、已要求驗證」的紀錄   | PR 必填：變更描述、測試步驟、風險、回滾、監控                           | PR checklist 範例。([Pull Checklist][3])                                                  |
| **Postmortem（Blameless）**              | 把「個人責任」轉成「系統學習」，避免政治化    | 事故後：impact、timeline、root causes、action items、owner | Google SRE postmortem culture。([Google SRE][4])                                        |

[1]: https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions?utm_source=chatgpt.com "Documenting Architecture Decisions - Cognitect.com"
[2]: https://adr.github.io/?utm_source=chatgpt.com "Architectural Decision Records (ADRs) | Architectural ..."
[3]: https://www.pullchecklist.com/posts/github-pull-request-template-checklist?utm_source=chatgpt.com "GitHub Pull Request Template Checklist: Must-Haves"
[4]: https://sre.google/sre-book/postmortem-culture/?utm_source=chatgpt.com "Blameless Postmortem for System Resilience"

| 手法/概念                       | 保護目標                                | 具體怎麼落地                           | 參考                                                                                          |
| --------------------------- | ------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| **Runbook（操作手冊）**           | 防「只有你會救火」：降低 bus factor，也降低你被 24/7 綁架 | 每個高頻事故/操作有 runbook：診斷→止血→復原→驗證   | PagerDuty 對 runbook 的定義。([PagerDuty][1]) AWS 也將 runbook 作為事故回應重要資產。([AWS Documentation][2]) |
| **On-call / Escalation 機制** | 防燃燒：確保你不是永遠第一線、能升級處理                  | 明確 escalation（超時→第二線→TL/Manager） | SRE 對 on-call 與 escalation 的觀點。([Google SRE][3])                                            |
| **Toil 管理**                 | 防止你被無止盡瑣事吞掉（讓你能做工程改善）                 | 定義 toil、追蹤比例、用自動化消除              | Google SRE 對 toil 定義與消除。([Google SRE][4])                                                   |

[1]: https://www.pagerduty.com/resources/automation/learn/what-is-a-runbook/?utm_source=chatgpt.com "What is a Runbook?"
[2]: https://docs.aws.amazon.com/IDR/latest/userguide/idr-workloads-dev-runbook.html?utm_source=chatgpt.com "Develop runbooks and response plans for responding to an ..."
[3]: https://sre.google/sre-book/being-on-call/?utm_source=chatgpt.com "On Call Engineer Best Practices for IT Services"
[4]: https://sre.google/sre-book/eliminating-toil/?utm_source=chatgpt.com "What is Toil in SRE: Understanding Its Impact"


| 手法/概念                  | 保護目標                       | 具體怎麼落地                             | 參考                                                         |
| ---------------------- | -------------------------- | ---------------------------------- | ---------------------------------------------------------- |
| **SLO / Error Budget** | 防「需求無限上綱」：用客觀指標決定該做新功能或穩定性 | 訂 SLO；當 error budget 用盡→凍結功能、先修穩定性 | Google SRE workbook 的 error budget 定義與做法。([Google SRE][1]) |

[1]: https://sre.google/workbook/error-budget-policy/?utm_source=chatgpt.com "Error Budget Policy for Service Reliability"


| 手法/概念                                                                 | 保護目標                     | 具體怎麼落地                                                       | 參考                                                                                                                                                                                                                  |
| --------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **OWASP Secure Coding / Logging / Input Validation / Error Handling** | 防資安事故背鍋：有標準可依循、稽核可對齊    | 以 OWASP checklist 當 DoD；落地 logging、validation、error handling | OWASP Input Validation。([OWASP Cheat Sheet Series][1]) OWASP Logging。([OWASP Cheat Sheet Series][2]) OWASP Error Handling。([OWASP Cheat Sheet Series][3]) OWASP Secure Coding Practices（總表）。([OWASP Foundation][4]) |
| **Break-glass（緊急權限）**                                                 | 防「沒權限又要你負責」：緊急處置有流程、有稽核 | 至少 2 個 emergency access account；使用時全程監控與審計                   | Microsoft 建議建立 emergency access / break-glass 流程。([Microsoft Learn][5])                                                                                                                                             |

[1]: https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html?utm_source=chatgpt.com "Input Validation - OWASP Cheat Sheet Series"
[2]: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html?utm_source=chatgpt.com "Logging - OWASP Cheat Sheet Series"
[3]: https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html?utm_source=chatgpt.com "Error Handling - OWASP Cheat Sheet Series"
[4]: https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/stable-en/?utm_source=chatgpt.com "OWASP Secure Coding Practices - Quick Reference Guide"
[5]: https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices?utm_source=chatgpt.com "Azure identity & access security best practices"


下面整理你列的概念，並補上更多「同族群」術語與較常被引用的文獻/來源，便於你後續寫內訓、風險說明或對內溝通時引用。

> 註：同一概念常同時出現在 **軟體工程（anti-pattern/maintainability）**、**組織行為（knowledge hiding/hoarding）**、**風險管理（bus factor/key person risk）**、**資安（logic bomb）** 四個脈絡。

---

## 相關概念與文獻對照表

| 概念（延伸別名）                                              | 定義/範圍                                                                                                | 典型手法/訊號（你列的那些多在這）                                                                | 代表性文獻/來源（可引用）                                                                                                | 合規替代（同樣能「自保」但不踩線）                                                      |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| 代碼混淆（Code Obfuscation）                                | 將程式轉成**功能等價但更難理解/逆向**的形式；常用於保護商業機密與防逆向（尤其在可反編譯分發型態，如 bytecode）。 ([Semantic Scholar][1])              | 變數/函數改名、控制流扭曲、字串加解密、插入 dead code 等 ([Semantic Scholar][1])                       | Collberg/Thomborson/Low 的混淆轉換分類（taxonomy） ([Semantic Scholar][1])                                            | 若目標是「你主導標準」：改做平台化（internal SDK / Golden Path）與 code ownership，而不是讓人看不懂 |
| 可證明安全的混淆（理論脈絡）                                        | 對「一般程式」的強混淆在理論上存在重大限制（黑盒模擬式 general obfuscation 的不可能性結果常被引用）。 ([Springer Link][2])                   | 這類文獻主要用來界定「混淆不是萬靈丹」                                                              | Barak 等：On the (Im)possibility of obfuscating programs ([Springer Link][2])                                  | 安全上更可靠的是：金鑰與信任邊界設計、硬體信任根、服務端機密管理，而不是靠「看不懂」                             |
| 安全靠隱蔽（Security through obscurity）                     | 依賴「隱藏機制細節」來達成安全；普遍不建議作為唯一防線。 ([Schneier on Security][3])                                             | 用非標準路徑/埠號/隱藏規則，或把安全邏輯藏在難讀的程式裡                                                    | Schneier 討論「隱蔽會增加你依賴的秘密數量」 ([Schneier on Security][3])；概念總覽 ([Wikipedia][4])                                 | 可用「隱蔽」當補充層，但要有可審計的正式控制（RBAC、MFA、密鑰輪替、監控）                               |
| 「如何寫出不可維護的程式」（satire / 反教材）                           | 以諷刺方式列舉如何讓程式難以維護，常被拿來當反面教材（也常被你提的「職業保障」語境挪用）。 ([cs.fit.edu][5])                                      | 魔數、隱晦命名、混亂結構、難懂併發、反文件化等 ([cs.fit.edu][5])                                        | Roedy Green：How To Write Unmaintainable Code ([cs.fit.edu][5])                                               | 把「不可替代」轉成「不可或缺的角色」：用 ADR + CODEOWNERS + Runbook，而非把程式搞爛                |
| 反面模式（Anti-pattern）                                    | 「看似可行但長期造成問題」的反覆出現解法；可涵蓋程式、架構、管理層。 ([Wiley][6])                                                      | Spaghetti、Big Ball of Mud、Hero culture、tribal knowledge 等可視作反面模式族群的一部分           | Brown 等《AntiPatterns》 ([Wiley][6])                                                                           | 引入「可驗收的工程門檻」：可觀測性、測試、變更管理、風險分級                                         |
| 義大利麵式代碼 / 大泥球（Spaghetti Code / Big Ball of Mud）       | 系統結構混亂、以權宜修補堆疊，導致耦合擴散、理解與變更成本急遽上升。 ([hillside.net][7])                                               | 全域狀態氾濫、跨層直接呼叫、缺邊界、修修補補越修越難                                                       | Foote & Yoder：Big Ball of Mud ([hillside.net][7])                                                            | 透過模組邊界/契約（API/事件）、重構節奏（strangler fig）與 SLO 驅動治理                        |
| 技術債（Technical Debt）                                   | 用「債務」隱喻描述內部品質缺陷造成的未來成本；常用於治理而非責難。 ([martinfowler.com][8])                                            | 快交付、少測試、缺重構 → 未來改一點就很痛                                                           | Fowler 技術債條目 ([martinfowler.com][8])；SEI 對技術債實務研究 ([sei.cmu.edu][9])                                         | 把債務納入產品化排程（debt budget / quality gates），讓風險「被批准」而不是「被隱藏」               |
| Code Smell（代碼異味）                                      | 程式表層徵兆，通常對應更深層設計問題（不是 bug，但常是未來 bug 的溫床）。 ([martinfowler.com][10])                                   | 長函式、重複、過度耦合、命名不清等                                                                | Martin Fowler：Code Smell ([martinfowler.com][10])                                                            | 用自動化檢測（lint、complexity、duplication）與重構準則把討論客觀化                         |
| 知識隱藏（Knowledge Hiding）                                | 個體**刻意**對他人請求「迴避/裝傻/合理化拒絕」等隱藏行為；屬可研究且被明確定義的組織行為。 ([Wiley Online Library][11])                        | evasive hiding / playing dumb / rationalized hiding ([Wiley Online Library][11]) | Connelly et al., 2012（定義與三構面） ([Wiley Online Library][11])                                                   | 建立文件與交接的「制度化激勵/要求」，並把關鍵模組 ownership 明確化                                |
| 知識囤積（Knowledge Hoarding）                              | 更偏「把知識留在自己手上」的行為描述，與 knowledge hiding 相近但不完全同義；在近年的組織研究中常與 donation/hiding 並列。 ([ScienceDirect][12]) | 只口頭講、拒寫文件、拒 mentor、關鍵資訊不落地                                                       | 近年研究討論 donation/hoarding/hiding ([ScienceDirect][12])；囤積之文獻回顧 ([ResearchGate][13])                           | 用「可追溯交付物」保護你：ADR、設計審查紀錄、Runbook、SLO 報表（可談績效/升遷）                        |
| 知識孤島（Knowledge Silos / Information Silos）             | 關鍵知識只在少數人/單一團隊可得，形成瓶頸與風險。 ([Growth Engineering][14])                                                 | 特定模組只有一人懂；新人大量靠問人                                                                | 定義型資料（KM） ([Growth Engineering][14])；關於 silo mentality 的研究與案例討論 ([cora.ucc.ie][15])                          | 以平台工程/內部開發者平台（IDP）把知識變成工具與流程，而不是口傳                                     |
| 口耳相傳知識（Tribal Knowledge）                              | 未文件化、靠資歷與人脈才能取得的「部落知識」，常被視為反 DevOps 文化的來源之一。 ([Microsoft for Developers][16])                        | 「某某才知道怎麼修」、「只有他有密碼/路徑/眉角」                                                        | Microsoft DevBlogs 對 tribal knowledge 定義 ([Microsoft for Developers][16])                                    | 以 runbook、docs-as-code、內部訓練與演練把知識外顯化（你反而更能主導標準）                        |
| 巴士因子/卡車因子（Bus factor / Truck factor / Lottery factor） | 衡量專案「失去少數關鍵人後是否癱瘓」的指標；bus factor=1 即人員單點故障。 ([Wikipedia][17])                                        | 關鍵模組只由一人維護；缺文件；無替代方案                                                             | bus factor 定義概覽 ([Wikipedia][17])；Avelino 等對 truck factor 的研究 ([arXiv][18])                                  | 你若想「合理提升話語權」：把自己定位成 owner（Accountable），而不是讓 bus factor 變 1             |
| 關鍵人風險（Key person risk / key man risk）                 | 組織過度依賴特定個人導致的營運風險（更廣義，不限技術）。 ([Forbes][19])                                                          | 「沒有他就不行」的流程與決策依賴                                                                 | 風險管理角度說明 ([Nationwide][20])                                                                                  | 用 RACI 與審批規則把你變成「制度上的當責者」                                              |
| Hero culture / Brent bottleneck（瓶頸英雄）                 | 團隊依賴少數「救火英雄/超級專家」導致持續性瓶頸與風險（DevOps/SRE 常談）。 ([mesoform.com][21])                                     | 大量 unplanned work 都丟給同一人；知識無法複製                                                  | 以 Phoenix Project 的「Brent」現象延伸討論 ([Mark Rendell][22])                                                        | 把你的專業「產品化」：內部工具、標準流程、訓練與輪值（你可升級成平台/架構角色）                               |
| 雪花系統/雪花伺服器（Snowflake server/system）                   | 每台機器都靠手工改到「獨一無二」，造成不可重現與維運風險（DevOps 常用語）。 ([Sumo Logic][23])                                         | 只能在特定人手上修；IaC 缺失；環境漂移                                                            | 對 snowflake 的實務定義（自動化以外的特殊對待） ([Sumo Logic][23])                                                             | IaC + 影像化/不可變基礎設施（bake not fry），避免「人肉手感」變成權力來源                         |
| Logic bomb（可被濫用的“deadman switch”類）                    | 被刻意植入、在特定條件觸發**惡意行為**的程式碼；屬資安/惡意碼範疇。 ([NIST Computer Security Resource Center][24])                  | 依時間/帳號狀態/離職條件觸發刪檔、停機等                                                            | NIST 對 logic bomb 的定義 ([NIST Computer Security Resource Center][24])；CMU/CERT 對內部破壞與防護建議 ([sei.cmu.edu][25]) | 合規替代是 kill switch（止血、降級）+ break-glass（緊急權限）+ 稽核，而非綁定特定人離線就爆炸           |
| Deadman switch | 條件式 - 若用於 fail-safe（失去操作/心跳就進入安全狀態，如降級/停止危險操作），屬於防禦性設計思路的延伸；但若用於「失聯就觸發傷害/刪資料/癱瘓」就會落入 fail-deadly/logic bomb 的語境。|  | | 

---


* **bus factor / truck factor**（可量化、可評估） ([Wikipedia][17])
* **knowledge hiding**（有明確定義與量表研究） ([Wiley Online Library][11])
* **AntiPatterns / Big Ball of Mud / technical debt**（工程治理語境容易買單） ([hillside.net][26])
* **logic bomb**（若涉及“deadman switch”式破壞，這就是資安事件語彙） ([NIST Computer Security Resource Center][24])

---


[1]: https://www.semanticscholar.org/paper/A-Taxonomy-of-Obfuscating-Transformations-Collberg-Thomborson/162ab36477962d47c9b2578478364b2e81c6e19a?utm_source=chatgpt.com "A Taxonomy of Obfuscating Transformations"
[2]: https://link.springer.com/chapter/10.1007/3-540-44647-8_1?utm_source=chatgpt.com "On the (Im)possibility of Obfuscating Programs - SpringerLink"
[3]: https://www.schneier.com/blog/archives/2008/06/security_throug_1.html?utm_source=chatgpt.com "Security Through Obscurity"
[4]: https://en.wikipedia.org/wiki/Security_through_obscurity?utm_source=chatgpt.com "Security through obscurity"
[5]: https://cs.fit.edu/~kgallagher/Schtick/How%20To%20Write%20Unmaintainable%20Code.html?utm_source=chatgpt.com "How To Write Unmaintainable Code"
[6]: https://www.wiley.com/en-us/AntiPatterns%3A%2BRefactoring%2BSoftware%2C%2BArchitectures%2C%2Band%2BProjects%2Bin%2BCrisis-p-9780471197133?utm_source=chatgpt.com "AntiPatterns: Refactoring Software, Architectures, and ..."
[7]: https://hillside.net/plop/plop97/Proceedings/foote.pdf?utm_source=chatgpt.com "Big Ball of Mud"
[8]: https://martinfowler.com/bliki/TechnicalDebt.html?utm_source=chatgpt.com "Technical Debt"
[9]: https://www.sei.cmu.edu/blog/a-field-study-of-technical-debt/?utm_source=chatgpt.com "A Field Study of Technical Debt - Software Engineering Institute"
[10]: https://martinfowler.com/bliki/CodeSmell.html?utm_source=chatgpt.com "Code Smell"
[11]: https://onlinelibrary.wiley.com/doi/abs/10.1002/job.737?utm_source=chatgpt.com "Knowledge hiding in organizations - Connelly - 2012"
[12]: https://www.sciencedirect.com/science/article/pii/S2444883425000087?utm_source=chatgpt.com "Knowledge donation, hoarding, and hiding behaviors of ..."
[13]: https://www.researchgate.net/publication/373765430_Knowledge_Hoarding_A_Literature_Review?utm_source=chatgpt.com "Knowledge Hoarding: A Literature Review"
[14]: https://www.growthengineering.co.uk/knowledge-silos/?utm_source=chatgpt.com "Knowledge Silos: The Causes, Impact, and Solutions"
[15]: https://cora.ucc.ie/bitstreams/47677e8f-f288-4862-9069-bbe1e7335652/download?utm_source=chatgpt.com "Silo mentality in teams: emergence, repercussions ... - CORA"
[16]: https://devblogs.microsoft.com/premier-developer/tribal-knowledge-the-anti-devops-culture/?utm_source=chatgpt.com "Tribal Knowledge – The Anti-DevOps Culture"
[17]: https://en.wikipedia.org/wiki/Bus_factor?utm_source=chatgpt.com "Bus factor"
[18]: https://arxiv.org/abs/1604.06766?utm_source=chatgpt.com "[1604.06766] A Novel Approach for Estimating Truck Factors"
[19]: https://www.forbes.com/councils/forbesbusinesscouncil/2024/01/10/key-person-risk-what-is-it-costing-your-business/?utm_source=chatgpt.com "Key Person Risk: What Is It Costing Your Business?"
[20]: https://www.nationwide.com/business/solutions-center/risk-management/key-person-risks?utm_source=chatgpt.com "Navigating Key Person Risks"
[21]: https://www.mesoform.com/resources/blog/athena/taming-devops-chaos-how-platform-engineering-and-developer-platforms-combat-anti-patterns?utm_source=chatgpt.com "Taming DevOps Chaos: How Platform Engineering and ..."
[22]: https://markosrendell.wordpress.com/2019/10/03/what-they-actually-did-in-the-phoenix-project-and-will-it-work-for-you/?utm_source=chatgpt.com "What they actually did in the Phoenix Project and will it work ..."
[23]: https://www.sumologic.com/blog/snowflake-configurations-and-devops-automation?utm_source=chatgpt.com "Snowflake configurations and devops automation"
[24]: https://csrc.nist.gov/glossary/term/logic_bomb?utm_source=chatgpt.com "logic bomb - Glossary | CSRC"
[25]: https://www.sei.cmu.edu/news/secret-service-and-cert-release-report-analyzing-acts-of-insider-sabotage-via-computer-systems-in-critical-infrastructure-sectors-2/?utm_source=chatgpt.com "Secret Service and CERT Release Report Analyzing Acts of ..."
[26]: https://hillside.net/antipatterns-book?utm_source=chatgpt.com "AntiPatterns: Refactoring Software, Architectures, and ..."
