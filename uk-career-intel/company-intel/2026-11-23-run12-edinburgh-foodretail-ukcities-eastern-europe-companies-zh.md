# 第十二輪組織（Run 12）：Edinburgh／Lothians 新產業（遊戲、healthtech、太空資料、公部門數位、零售 HQ）＋ 蘇格蘭食品飲料／威士忌／零售 HQ 與大學 spin-out 重試 ＋ 英國未覆蓋城市（Guildford、Bournemouth／Poole、Swindon、Basingstoke、Sunderland、Bradford／Harrogate、Wrexham、Derry~Londonderry，及 Northampton 最後重試）＋ 東歐（Kaunas、Košice、Maribor、Plovdiv、Podgorica）——適配度與申請難度評級報告

- **核實檢查日**：2026-11-23（Asia/Taipei；verified12 的查核日）。**分析／編纂日**：2026-11-28（Asia/Taipei；本報告日期與天數快照）。檔名沿用 brief 指定的 2026-11-23。
- 資料來源：`brief.md`（Run 12 參數）、`scout12.tsv`（33 列）、`scout12-handoff.md`、`audit.md`、`covered-clean.txt`、`verified12.md`（33 列，檢查日 2026-11-23；含 verified12_A（#1–16）／verified12_B（#17–33）與 verified12.json）、`sponsors_latest.csv`（GOV.UK 持牌贊助登記冊 **2026-11-19 版**，2026-11-23 09:27 Asia/Taipei 取回，本地 142,946 行含表頭＝142,945 資料列；見 `sponsor_source.txt`）、Run 11 報告（格式、跨輪 Top 10 基準）、Run 9 報告（評級規則 A–W 原文）。
- **登記冊重查**：本報告用 `sponsors_latest.csv` 以法定名／交易名（不分大小寫、去除前後空白、完全比對）獨立重查（`gen/regcheck.py`），不只引用 verified12。
- **分析者補查（只讀，2026-11-28）**：重讀或首次讀取下列官方頁，用來確認分析日仍開放、以及 SC／工作權／贊助字樣：SSTL 2147 JD 與 jobs.json、Current Health careers、NEC Security Architect 與 Senior Software Developer JD、William Grant Cloud Platform Engineer、Hello Games Build Engineer、Hostinger career、ESTEN career、Elitnet careers；並以 HTTP 狀態確認 YBS DevOps（404）、Arnold Clark Cyber Security Consultant（410）、LV= Cloud Operations Lead（200）、Coinis（200）。未聯絡公司、未申請、未提交任何表單；其餘一律依 verified12。
- 原則：只用上述檔案與補查頁面中的資料；沒有資料的標「未驗證」；頁面無法載入的標「未檢查」（不等於沒有職缺）；只有官方頁面明寫時，才引原文說目前沒有職缺，且只當作當日快照。Taiwan passport 的雇主層級資格一律「未驗證」（本輪沒有任何官方原文可判定）。時程適配另列（規則 3-3、F），不併入難度。**本輪沒有聯絡任何公司。**
- Dennis：Cloud & Security Platform Engineer（Go/Next.js/Python/PostgreSQL、SIEM、gRPC、AWS/Cloudflare），約 5–6 年，IELTS 7.5；UofG MSc Software Development (Conversion) 假設 2027-09-01 開學、2028-09-01 畢業；Taiwan passport；畢業後走 Graduate visa，再轉 Skilled Worker；入學前在台灣。
- 本輪範圍（brief）：A Edinburgh／Lothians 新產業約 8；B 蘇格蘭食品飲料／威士忌／零售 HQ＋spin-out 重試約 8；C 英國未覆蓋城市＋Northampton 最後重試約 11；D 東歐約 7；目標約 34（實際 33：A 7、B 8、C 11、D 7；V1 Technologies 因 Run 6 已收錄由 scout 刪除）。
- 產生方式：`gen/entries.py`（逐家資料）、`gen/parts.py`、`gen/parts2.py`（各節文字）、`gen/regcheck.py`（登記冊重查）、`gen/build.py`（輸出本檔；`python3 /workspace/uk-career-intel-run12/gen/build.py`）。

---

## 一、摘要

- **規模**：33 列＝33 個本輪不重複雇主。**評級 33 家**（英國 26、歐洲非英國 7），**排除 0 家**（規則 V 沒有觸發；Speech Graphics 的 confirmation statement overdue、Hello Games 的 accounts overdue 都不是停業證據，見第五節）。
- **分組**：A（#1–7）7 家；B（#8–15）8 家；C（#16–26）11 家；D（#27–33）7 家。scout handoff 初稿寫 34 列；V1 Technologies（Livingston）因 Run 6 已收錄（同 FTID）由 scout 刪除，**不在本輪 33 列，也不評級**（第八節）。本輪 33 家與 Run 1–11 都沒有重複品牌（Sony 只在 Run 8 以 Firesprite／Sony Interactive 出現，法人不同）。
- **登記冊重查結果**：verified12 宣稱的 17 個同一法人命中（#1, 2, 3, 5, 9, 10, 11, 12, 13, 16, 17, 19, 21, 22, 23, 24, 25）**全部成立**，共 **17 個不重複雇主、26 筆登記列**（全部 A rating；沒有完全重複列，26 個「名稱＋路線」組合）。verifier 判為條件式／集團的 #4、#8、#14、#20 **同樣確認不計**；#6、#7、#15、#18、#26 本名查無；#27–#33 英國登記冊不適用。**與 verifier 沒有命中結論的分歧**；只有 #23 Unit4 的標記方式（命中但附 conditional 備註）與 #3 的名稱寫法需要注意（第九節）。
- **分布**：見第四節末。本輪有 **3 個 高／低**（Current Health、SSTL、Hostinger），是 Run 10 之後第一次。
- **最佳**：
  1. **Current Health**（Edinburgh／UK Remote，高／低，有條件）：本名在冊＋官方 Software Engineer II（AWS、Python／TypeScript、backend microservices），JD 沒有 SC 或工作權字樣。
  2. **Surrey Satellite Technology（SSTL）**（Guildford，高／低，有條件）：本名在冊＋官方 Security Infrastructure Systems Engineer（cloud security、SIEM、Terraform、K8s），本職 JD 沒有 SC；同公司另一資安職要求 SC（規則 T 只套該職）。
  3. **Hostinger**（Kaunas，高／低）：官方資安與系統工程職、明寫英語、每則工程職都寫可在「anywhere in the world」工作；但 visa／relocation 原文只在 C-level 職，依規則 Q 不進歐洲 Top 10。
  4. **ESTEN**（Košice，高／中）：DevOps Engineer 核心技能是 Kubernetes＋Go＋Helm，技術棧最直接。
  5. **Coinis**（Podgorica，高／中）、**Elitnet**（Kaunas，高／中）、**SiteGround**（Plovdiv，高／中）。
- **分析日已失效的職缺**：YBS DevOps Engineer（11-23 開放 → 11-28 404）與 Arnold Clark Cyber Security Consultant（11-23 開放 → 11-28 410），依規則 P 不再計為開放，兩家因此由 中／低 降為 中／中。
- **明文限制**：LV= Cloud Operations Lead 明寫不提供 Skilled Worker sponsorship（規則 E／K，中／高）；NEC Software Solutions 三則已讀對口 JD 全部要求既有工作權（含 SC＋NPPV 一則；規則 T，中／高）；SSTL 2145 要求 SC＋5 年居英（只套該職）。
- **Top 10 變動**：
  - 英國：**有變動**。Current Health（Run 12，高／低，有條件）依規則 W 進第 10 名；**Starling Bank 退出**成為候補。SSTL（高／低，有條件）是第一候補，Starling 第二、Version 1 第三（第七節、第十節）。
  - 歐洲：**不變**（規則 Q：本輪 7 家的工程職都沒有官方 relocation／visa 字樣）。Hostinger（高／低）列第一候補；ESTEN、Coinis、Elitnet、SiteGround 接在 Vega IT 之後。
- **截止日**：分析日仍開放、有官方截止日的對口職缺只有 **William Grant Cloud Platform Engineer（2026-11-30，距今 2 天）**；聘用法人屬條件式（規則 C），Dennis 入學前在台灣，實際上不可行動（四之二）。LV= 的 Internal Advertising End Date（2026-11-25）已過且明文不擔保，只作參考。

---

### 登記冊逐列重查（sponsors_latest.csv，2026-11-19 版）

| # | 雇主（登記名） | 城市 | 路線（登記列數） | 結果 |
|---:|---|---|---|---|
| 1 | Speech Graphics Ltd | Edinburgh | Skilled Worker（1） | 命中 |
| 2 | Current Health Limited | Edinburgh | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 命中（JD 未點名法人；verifier 以 CH／官網對應） |
| 3 | Space Intelligence | Edinburgh | Skilled Worker（1） | 命中（登記名無 Ltd；verifier 以官網公司編號對應） |
| 5 | Schuh Ltd | Livingston | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 命中 |
| 9 | The Edrington Group | Glasgow | Skilled Worker；Global Business Mobility: Graduate Trainee；Global Business Mobility: Senior or Specialist Worker（3） | 命中 |
| 10 | Arnold Clark Automobiles Limited | Glasgow | Skilled Worker（1） | 命中 |
| 11 | A.G. Barr PLC | Cumbernauld | Skilled Worker（1） | 命中 |
| 12 | SMARTER GRID SOLUTIONS LTD | Glasgow | Global Business Mobility: Graduate Trainee；Global Business Mobility: Senior or Specialist Worker；Skilled Worker（3） | 命中 |
| 13 | Whyte and Mackay Limited | Glasgow | Skilled Worker（1） | 命中 |
| 16 | Hello Games Ltd | Guildford | Skilled Worker（1） | 命中 |
| 17 | Surrey Satellite Technology Ltd | Guildford | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 命中 |
| 19 | Nationwide Building Society | Swindon | Skilled Worker（1） | 命中 |
| 21 | Asset55 Limited | Sunderland | Skilled Worker（1） | 命中 |
| 22 | Yorkshire Building Society | Bradford | Skilled Worker（1） | 命中 |
| 23 | Unit4 Business Software Ltd | Harrogate | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 命中（Harrogate 站點現況部分未驗證） |
| 24 | NEC Software Solutions UK Ltd | Hemel Hempstead | Skilled Worker（1） | 命中（Wrexham 為同一法人官方站點） |
| 25 | Allstate Northern Ireland | Belfast | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 命中（Derry 為同一法人官方站點） |
| 4 | （CGI AXIS LTD／Concert (CGI) Limited／Logica Ltd t/a CGI） | London | Skilled Worker；Skilled Worker；Global Business Mobility: Senior or Specialist Worker；Skilled Worker（4） | 姊妹／集團法人；CGI IT UK Limited 本名不在冊，不計 |
| 8 | （William Grant & Sons Ltd） | Dufftown | Creative Worker；Skilled Worker；Global Business Mobility: Senior or Specialist Worker（3） | 職缺只寫 William Grant & Sons，未點名 SC131772／SC134248；Distillers Limited 不在冊，規則 S 不成立，條件式，不計 |
| 12 | （Mitsubishi Electric Air Conditioning Systems Europe Ltd／Mitsubishi Electric Corporation - UK office／Mitsubishi Electric Europe B.V.） | Livingston／London／Hatfield | Global Business Mobility: Senior or Specialist Worker；Skilled Worker；Global Business Mobility: UK Expansion Worker；Global Business Mobility: Senior or Specialist Worker；Global Business Mobility: Senior or Specialist Worker；Skilled Worker（6） | 母集團其他法人，與本列命中無關，不另計 |
| 14 | （Diageo plc） | London | Global Business Mobility: Graduate Trainee；Global Business Mobility: Senior or Specialist Worker；Skilled Worker（3） | 母公司 London；Edinburgh Park 據點法人 Diageo Scotland Limited 不在冊，不計 |
| 18 | （LV Care Ltd） | Bournemouth | Skilled Worker（1） | 同字首的無關公司（CH 11797907，醫療照護），不計 |
| 20 | （Sony Europe B.V／Sony Europe Limited） | Weybridge | Skilled Worker；Global Business Mobility: Senior or Specialist Worker；Global Business Mobility: Senior or Specialist Worker；Global Business Mobility: Graduate Trainee；Skilled Worker（5） | 兩法人皆在 Weybridge；Basingstoke 站點與招聘法人未獨一確定，條件式，不計 |
| 24 | （NEC Europe Ltd／NEC Telecom MODUS, Ltd） | Uxbridge／Leatherhead | Global Business Mobility: Senior or Specialist Worker；Skilled Worker；Global Business Mobility: Senior or Specialist Worker；Skilled Worker（4） | 同集團不同法人，與本列命中無關，不另計 |

合計：17 個不重複雇主、26 筆登記列（沒有完全重複列，26 個名稱＋路線組合；不含上表 7 列集團／條件式／無關同名；全部 A rating）。與 verified12 的 17 個命中完全一致。持牌不等於個別職缺會擔保。本名查無：#6（Desana）、#7（Robotical）、#15（Scotmid／Scottish Midland）、#18（Liverpool Victoria／LV=／LVFS）、#26（Crick Software／Cricksoft）；#4 CGI IT UK Limited、#14 Diageo Scotland Limited 本名也不在冊；歐洲品牌 Hostinger、Elitnet、NFQ、ESTEN、Tridens、SiteGround、Coinis 也查無（英國登記冊本來不適用）。

---

## 二、簽證與聘僱路徑（本輪查核範圍）

- **英國**：本輪以 2026-11-19 版登記冊重查（17 雇主／26 列）。Graduate visa 18 個月與 New Entrant 門檻已在 Run 6 第二節以 gov.uk 原文確認，本輪沿用結論，不重複引述：2028-09 畢業 → Graduate visa 約 18 個月 → 轉 Skilled Worker；New Entrant 有 4 年上限（含 Graduate 期間）。
- **職缺上的贊助／限制字樣**：
  - 明示不贊助（規則 E／K）：LV= Cloud Operations Lead——「we are unable to offer Skilled Worker Visa Sponsorship for this role」，須已有英國工作權。LV= 本來就不在冊。
  - 既有工作權（規則 T）：NEC Software Solutions 的 Networks Cyber Security Engineer、Security Architect、Senior Software Developer 都寫「pre-existing right to work」（Senior Software Developer 原文寫「within the EU」）。
  - SC／居英年限（規則 T）：NEC Networks Cyber Security Engineer（入職後申請 SC，並須取得 SC 與 NPPV）；SSTL Information & Cybersecurity Assurance Manager（SC 以上，至少 5 年不間斷居英；DV 加分需 10 年）。
  - 沒有 SC／工作權字樣（正反皆無）：Current Health Software Engineer II、SSTL Security Infrastructure Systems Engineer、William Grant Cloud Platform Engineer、Hello Games Build Engineer（分析者 2026-11-28 讀全文）；YBS DevOps 與 Arnold Clark Cyber 的 11-23 版也沒有（verifier），但兩職分析日已下架。
  - Arnold Clark 的「reference and disclosure checks」不是 SC。
  - 其餘英國職缺都沒有贊助字樣；個別 CoS 一律未驗證。
- **歐洲**：
  - 立陶宛（#27–29）、斯洛伐克（#30）、斯洛文尼亞（#31）、保加利亞（#32）屬 EU：EU Blue Card 只標「相關」（規則 J），不算已證實路徑。
  - 黑山（#33）非 EU：**不適用 EU Blue Card，但這不等於不能合法工作**。官方工作許可頁（Montenegro Investment Agency）本輪是驗證牆、gov.me 超時＝未檢查，不轉述申請步驟。Taiwan passport 能否取得：未驗證。
  - 官方 relocation／visa 字樣：**只有 Hostinger 的 Chief Revenue & Analytics Officer** 一則（「In case you move, we handle it in person: visas, somewhere to live…」），verifier 明說不得推及工程職，本報告同意。Hostinger 工程職有「anywhere in the world」遠端選項（是遠端，不是簽證支援）；Coinis 是「Remote (EU timezones) or Podgorica」。其餘 5 家沒有任何搬遷／簽證字樣。

---

## 三、評級標準（與 Run 1–11 相同，規則 A–W 全文沿用；本輪無新增規則）

**適配度（Fit）**（與 Run 1–5 完全相同）：以 Dennis 的目標職類與技術背景對照該公司的業務與已知職缺。
- 高：業務屬軟體／雲端／AI／資安產品或工程，且與 Dennis 的 Go／TS／Python、雲端平台、資安背景直接對口。
- 中：屬軟體或雲端／資安相關，但偏顧問、合規或支援，或技術棧／職缺方向未驗證，或規模很小。
- 低：主要為管理式 IT／ERP 導入／非技術職，或業務內容在 verified 檔中沒有足夠資料。
- Run 2 補充（沿用）：非 IT 核心機構依其已知 IT／軟體職缺是否對口判斷。

**申請難度（Difficulty）**（高＝較難；英國公司，與 Run 1–4 相同）：綜合贊助狀態、現有職缺、公司規模與其他門檻。
- 中：有贊助資格但缺職缺，或有招聘管道但無贊助。
- 高：無贊助且無職缺／無招聘管道，或有明確限制（如僅限英國公民／永居、規模極小、明示不受理招聘詢問）。
- 低：需同時「有贊助」且「有確認開放的對口職缺」。（Run 1–3 無；Run 4 FanDuel 為第一個；本輪英國條目無，荷蘭 Hadrian 依規則 H 為第一個非英國的低。）

**非英國公司（Run 2 量表，英國簽證贊助不適用）**：依「初階／對口職缺」「語言要求」「遠端／搬遷可能性」「Dennis 為台灣身分」四點判斷；本輪依 brief 把當地簽證路線併入（規則 H–J）。
- 低：有確認開放的初階或對口職缺，且英語可應徵，並有明確的遠端或搬遷（或簽證）路徑。
- 中：有初階／對口職缺或入口，但至少一項條件缺失（例如須到辦公室、搬遷資訊未找到、遠端僅限特定國家）。
- 高：無初階職缺或無招聘管道，或需要 Dennis 個人檔未列出的語言，或僅限到辦公室且搬遷資訊未找到。
- 「Dennis 為台灣身分」是否影響僱用資格：各公司頁面均未說明，一律「**未驗證**」。

**排序**（沿用）：先依適配度，再依難度；同級再看「有確認開放的對口職缺」，其次「英國贊助資格」；英國與非英國同級時，英國且有贊助者在前（Run 2 做法）。

### Run 3 規則（沿用，全文照列）

1. 「未檢查」不影響適配度的事實基礎，也不降低難度的贊助判斷：入口無法載入時，職缺欄寫「未檢查」；難度仍依登記冊狀態與已知管道判斷。
2. 公部門／機構的適配度：只看有**證據**的 IT／軟體職缺或團隊；完全沒有證據者判「低」，理由是「資料不足」而不是「確認沒有 IT 職缺」。
3. 大型雇主的難度以公司層級判斷；畢業生計畫與 Dennis 入學時間的衝突**另設「時程適配」欄與專節**，不混進難度等級。
4. 截止日就是檢查日的職缺視為「不可行動」，同級排序時不算「有確認開放的對口職缺」。
5. 同級排序的先後屬判斷，差距不大。
6. 適配度「高」門檻：軟體／雲端產品或顧問公司且有工程類職稱證據者判高；證據只涉及顧問或非工程職者判中。

### Run 4 規則 A–G（沿用，全文照列）

A. **歸屬規則**：集團層級職缺（LBG）無法證明屬某個品牌時，不歸屬給該品牌。該品牌的適配度以「資料不足」判低，難度依該品牌自身的贊助與招聘管道判斷。
B. **資格不符的職缺不算「對口職缺」**：頁面明列的資格條件（例：Baillie Gifford 實習的「倒數第二年學生」）Dennis 明顯不符時，該職缺不計入「確認開放的對口職缺」。這是**資格**問題，與規則 3 的**時程**問題不同。
C. **登記冊法人與職缺僱主的對應未證實時，不評難度「低」**（Tesco；比照 Run 3 對 ScottishPower「實際雇主實體未確認」的處理）。
D. **東歐量表中「非初階但屬 Dennis 目標職類的職缺」視為入口**：Run 2 對 Atta（僅 Mid Level 職缺）、TestDevLab（僅 Intermediate／Senior）、Atea 的實際做法是判「中」，雖然量表文字寫「無初階職缺＝高」。本輪沿用該實際做法；無任何對口職缺與入口者（Nortal、Starship、Cybernetica）才判高。
E. **職缺廣告明文排除擔保**時，沿用 Run 3 對 ORE Catapult 的做法：公司層級仍依登記冊判中，並在說明標註（University of Dundee、4J Studios）。若實際對口職缺帶同樣限制，應改為高。
F. **時程假設**：MSc 開學暫定 2027-09-01、畢業暫定 2028-09-01（assessment／brief：12 個月全職、九月開學、預計 2027–28 入學），日期差距皆為由此推算的天數。
G. **薪資旁註**：僅在 Tesco 一列引用 assessment 檔的新人門檻（約 £38,300）作旗標，不據此改評級。

### Run 5 規則 H–Q（沿用，全文照列）

H. **荷蘭：IND 認可雇主名單視同英國登記冊**。列內法人（且與職缺／官網法人一致，規則 C）在 IND 名單時，難度改用英國量表：IND＋確認開放的對口職缺＝低；IND 但缺對口職缺＝中；明文排除（規則 K）或語言限制（規則 M）照常加重。理由：兩者都是官方的「雇主可擔保」名單；IND 認可同樣**不代表**個別職缺會擔保。
I. **愛爾蘭：Critical Skills Occupations List 不算已證實的簽證路徑**。CSOL 列有 2136／2137／2139 等，但 cloud／DevOps／security 職稱的 SOC 歸類與 Dennis 是否符合皆未驗證，故只作背景；只有職缺／招聘頁明文的 relocation／immigration support 才算「路徑」。愛爾蘭（與丹麥）不適用 EU Blue Card（EC 頁面）。
J. **其他 EU 國家：EU Blue Card 只標「相關」，不算已證實路徑**（資格與薪資門檻比較未驗證）；職缺或招聘頁明文的 relocation 才算。挪威非 EU、不適用 Blue Card，本國許可未查證。
K. **明文不提供簽證／搬遷**：若多數或全部對口職缺明寫不提供 visa sponsorship、relocation，或要求已在當地，判高（套用規則 E 的第二句）：Unity、Booking.com。僅非對口職缺有此字樣時（sennder），只標註。
L. **安全審查條款**：要求安全許可＋公民／永居的職缺不計入對口職缺（ICEYE 部分職缺）；適用全部職缺、但台灣是否受影響未驗證的國家條款（Isar 的 §13 SÜG）阻止評「低」。
M. **語言**：職缺明文要求 Dennis 個人檔未列的語言時，該職缺不計入對口；若所有對口職缺都要求，判高（Visma、Zscaler）。職缺只以當地語言撰寫但未明示要求（Coolblue）時，不當作要求（避免臆測），但阻止評「低」。
N. **適配度「本業非軟體」的上限**：沿用 Run 4 對 Tesco Bank／Baillie Gifford（金融本業判中）的處理——銀行（JPMorgan、Barclays、NatWest）、醫材製造（Medtronic、Boston Scientific）、能源服務（Enpal）即使有對口職缺，適配度最高判中。科技公司（含航太、衛星、半導體、資料中心）依職缺判斷：有對口軟體／雲端／資安職者判高（Isar、ICEYE），只有硬體／嵌入式／設施職者判中（比照 Run 4 Cirrus Logic、Starship）。線上平台／電商／marketplace 視為軟體（比照 Run 4 FanDuel、Bolt、Vinted）。
O. **以 Java／Kotlin／PHP 多年資為核心要求的職缺**：適配度依 FanDuel 先例可判高；但難度「低」所需的「確認開放的對口職缺」不計入這類職缺——個人檔只把 Java 列為技能、無 Java 職務年資，也未列 PHP（Picnic、bol、Myra、Kry）。FanDuel 的職缺只要求「some experience」，與此不同。
P. **職缺效期**：JSON-LD validThrough 已過或 ATS 顯示 active=false 者不計（bol Platform Engineer、Glovo Platform Engineer）；刊登已久但仍在板上者照計並標註天數（Talkdesk SOC 203 天、Cabify SRE 271 天）。
Q. **歐洲（非英國）跨輪 Top 10 的排序**：同級時依序看 (1) 列內法人在官方擔保名單（IND）或職缺／招聘頁明文 relocation／immigration support；(2) 確認開放、層級接近 Dennis 年資的對口職缺；(3) 明文只需英語；(4) 技術棧直接度。trainee 級職缺（低於 Dennis 年資）排在後面。這改變了 Run 4「波羅的海／東歐另表」把 GlobalLogic、Honeycomb 排前的做法（第六節）。

### Run 6 新增規則 R–W（本輪新增，第十節揭露理由）

R. **Fintech／數位銀行的適配度**：產品本身就是自家軟體平台的公司（Monzo、Starling、Revolut、Wise、GoCardless、Checkout.com）視為**軟體業**，不套規則 N 的「銀行本業適配度上限 中」。規則 N 照舊適用於傳統銀行與資產管理（Lloyds、JPMorgan、Barclays、NatWest、Tesco Bank、Baillie Gifford）。**邊界案例**：Monzo 與 Starling 的 SIC 是 64191 Banks——若改依 SIC 套規則 N，兩者會變成 中／低，排在所有 高／中 之後。

S. **「封閉集合」法人規則**：規則 C 要求職缺法人確認在冊。若證據已列出某雇主所有可能的英國聘用法人，且**每一個都在登記冊上**，則不論實際是哪一個聘用，都視為規則 C 已滿足（評「低」時註明「有條件」）。本輪套用：Version 1（Version 1 Technology Limited 與 Version 1 Solutions Limited 皆在冊）；跨輪套用：Barclays（GPG 2025 列出的 Barclays Execution Services Limited、Barclays Bank UK PLC、Barclays Bank PLC 皆在冊）。**不適用**：JPMorgan（可能的聘用法人如 J.P. Morgan Asset Management (UK) Limited 不在冊）、Lloyds（職缺法人未列出）。

T. **SC 與既有工作權限制**：職缺要求 UK SC vetting（原文如「normally includes 5 years UK residency」）、Active SC，或「unconditional right to work」／「must have the right to live and work in the UK」，該職缺**不算對口現行職缺**。若一家公司所有對口職缺都屬此類，依規則 E 第二句評難度 高。Taiwan 國民能否取得 SC：未驗證；但以 Dennis 2027-09 才入境、2028-09 畢業的時程，「5 年英國居住」在 Graduate visa 期間不可能滿足（本報告推論）。

U. **薪資旁註**：用官方 going rates 表依 SOC 計算 New Entrant 下限（max〔£33,400，70% going rate〕，第二節 2.2），對照職缺薪資。**只作旗標，不改評級**；每個職缺的實際 SOC：未驗證。

V. **排除條目**：疑似停業或營運不確定的列不進主表與 Top 10，另列一表，附「僅供參考」的評級與理由（第五節）。

W. **Top 10 插入規則**：本輪新的 高／低 條目排在前幾輪的 高／中 之前；同為 高／低 時，依證據強度排序（明寫可擔保 > 有條件的低）；前幾輪條目之間的相對順序不變。

**本輪如何適用（不是新規則）**：威士忌／飲料／零售／汽車零售／建屋互助會／保險依規則 N 與 3-2；衛星製造（SSTL）、太空資料、電網軟體依規則 N 以職缺判斷；healthtech 與 hosting 平台視為軟體業；NEC 的既有工作權與 SC、SSTL 2145 的 SC 依規則 T；LV= 的明文不擔保依規則 E／K；集團與條件式持牌依 A/C（William Grant 不套 S）；未檢查依 3-1；職缺效期依 P（以分析日 2026-11-28 計）；PHP／Java 核心職依 O；歐洲依 Run 2 量表與規則 D、J、M、Q；Top 10 插入依 W。

---

## 四、排名表（33 個不重複雇主＝33 列；第五節無排除列）

「未檢查」＝入口無法載入，不等於沒有職缺。時程另見四之二，不併入難度。英國列用英國難度量表，非英國列用 Run 2 量表。

| 排名 | 組織（#） | 國家／城市 | 適配 | 適配理由（一句） | 難度 | 難度理由（一句） | 簽證／搬遷（簡） | 對口開放職缺（核實 2026-11-23；效期以 2026-11-28 計） | 時程 |
|---:|---|---|:-:|---|:-:|---|---|---|---|
| 1 | Current Health (Current Health Limited)（#2） | UK／Edinburgh（職缺 UK Remote） | 高 | 健康科技軟體平台（遠端病人監測；規則 N：產品本身是自家軟體平台＝軟體業）；官方 Software Engineer II 是 Product Engineering 全端職：backend microservices、AWS、Java／Python／TypeScript 任一、部署與 production troubleshooting、on-call，與 Dennis 的 Python／TS／AWS 背景直接對口。 | 低 | Current Health Limited 本名在冊（Skilled Worker＋GBM Senior or Specialist）＋官方確認開放的對口職缺（verifier 2026-11-23；分析者 2026-11-28 讀 careers 頁仍列出）＝低（有條件：JD 未點名法人，verifier 以 CH 與官網對應；個別 CoS 未驗證）。 | 本名在冊（2 列）；JD 未見贊助、SC、right-to-work 字樣（正反皆無；分析者 2026-11-28 讀全文） | Software Engineer II（UK Remote；Full-stack Product Engineering；刊登／截止日頁面未示） | Software Engineer II 刊登日未示、無截止日；Dennis 入學前在台灣，現職不可行動；快照距開學 277 天、距畢業 643 天 |
| 2 | Surrey Satellite Technology (Surrey Satellite Technology Limited, SSTL)（#17） | UK／Guildford（Surrey Research Park） | 高 | 衛星製造商；規則 N 對航太／衛星科技公司依職缺判斷：官方 Security Infrastructure Systems Engineer 要求 cloud platform（AWS／Azure／GCP）安全、SIEM／EDR、IAM、Terraform／Ansible／Python、Docker／Kubernetes、Linux hardening、CSIRT，與 Dennis 的 Cloud & Security Platform 背景直接對口。 | 低 | Surrey Satellite Technology Ltd 本名在冊＋官方確認開放的對口職缺（Teamtailor 2026-09-04 刊登，2026-11-28 仍列出，規則 P：已刊登 85 天，照計並標註）＝低（有條件：同公司另一資安職要求 SC＋5 年居英；本職 JD 全文沒有 SC／vetting／國籍字樣，但太空／國防業者的後續審查未驗證）。 | 本名在冊（2 列）；Security Infrastructure Systems Engineer JD 未見贊助、SC、right-to-work 字樣（verifier 2026-11-23；分析者 2026-11-28 重讀全文同） | Security Infrastructure Systems Engineer（Job Ref 2147，Guildford Hybrid，2026-09-04 刊登，無截止日）；Information & Cybersecurity Assurance Manager（Job Ref 2145，要求可持 SC 且至少 5 年不間斷居英，規則 T，不計） | 2147 已刊登 85 天、無截止日；Dennis 入學前在台灣，現職不可行動；快照距開學 277 天、距畢業 643 天 |
| 3 | Hostinger (HOSTINGER, UAB／HOSTINGER operations, UAB)（#27） | LT／Kaunas（官方辦公室；法律地址 Vilnius） | 高 | web hosting／AI 網站平台（線上平台＝軟體，規則 N）；官方開放 Offensive Cyber Security Engineer（hosting platform／cloud infrastructure 攻擊面測試）、System Engineer \| Email Team、Linux Systems Engineering Lead 等，與 Dennis 的資安與平台背景直接對口。 | 低 | Run 2 量表三項皆有官方原文：確認開放的對口職缺、英語（Offensive Cyber「Clear written English」）、明確遠端路徑（每則工程職都寫「our offices in Vilnius, Kaunas, Jakarta, or Luxembourg, your home, or anywhere in the world」）＝低。 | 立陶宛屬 EU：EU Blue Card 只標「相關」（規則 J）；官方 visas／relocation 原文只出現在 Chief Revenue & Analytics Officer 一則（「In case you move, we handle it in person: visas…」），verifier 明說不得推及工程職；Taiwan passport 資格：未驗證 | Offensive Cyber Security Engineer；System Engineer \| Email Team；Linux Systems Engineering Lead \| Web Hosting Team；Junior System Engineer \| Network Team（皆無獨立日期） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 4 | ESTEN (ESTEN s. r. o.)（#30） | SK／Košice | 高 | 客製軟體開發公司（規則 3-6）；官方 DevOps Engineer 核心技能是 Kubernetes、Golang (Go)、Helm、Infrastructure Automation、Networking & Storage，是本輪與 Dennis 技術棧（Go＋雲端平台）最直接的職缺。 | 中 | 官方確認開放的 DevOps Engineer（Onset ASAP，Workplace「Office / Remote」，mid-level and above）；但語言要求未寫、遠端範圍未說明、搬遷／簽證字樣未找到（Run 2 量表＝中）。 | 斯洛伐克屬 EU：EU Blue Card 只標「相關」（規則 J）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證 | DevOps Engineer（Košice，Office / Remote，Permanent employment / Self employment，Onset ASAP；刊登日未示） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 5 | Coinis (Coinis DOO)（#33） | ME／Podgorica | 高 | AI 行銷平台（線上平台＝軟體）；官方 Senior AI Platform Engineer, Agentic Workflows 與 Senior Full-Stack AI Engineer（React 19／TypeScript＋Cloudflare Workers、D1、R2、Queues）與 Dennis 的 Next.js／Cloudflare 平台背景直接對口。 | 中 | 官方確認開放的 Senior 平台職；但遠端只限「Remote (EU timezones) or Podgorica」（量表：遠端限特定範圍＝缺一項），語言未寫，搬遷／工作許可字樣未找到（Run 2 量表＝中）。 | 黑山非 EU，不適用 EU Blue Card（≠不能合法工作）；官方工作許可頁（mia.gov.me）本輪驗證牆／gov.me 超時＝未檢查；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證 | Senior AI Platform Engineer, Agentic Workflows；Senior Full-Stack AI Engineer, Creative Platform（皆 Remote (EU timezones) or Podgorica；日期未示） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 6 | Elitnet (UAB ELITNET)（#28） | LT／Kaunas | 高 | 電信軟體產品與網路安全公司（規則 3-6）；官方 DevOps Engineer（Linux、Kubernetes basics、monitoring、IT security／operating concepts）屬 Dennis 目標職類。 | 中 | 官方確認開放的 DevOps Engineer，同頁其他工程職明寫英語；但須到 Kaunas 辦公室、搬遷／簽證字樣未找到（Run 2 量表＝中）；「Kubernetes basics」顯示層級可能低於 Dennis 年資（只影響規則 Q 排序）。 | 立陶宛屬 EU：EU Blue Card 只標「相關」（規則 J）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證 | DevOps Engineer（Kaunas；以 email 投遞；日期未示） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 7 | SiteGround (Plovdiv office)（#32） | BG／Plovdiv | 高 | web hosting／網站平台（線上平台＝軟體）；官方 careers 有 Platform & DevOps 團隊介紹與 Google Cloud 基礎設施描述，與 Dennis 的平台背景對口。 | 中 | 官方 careers 現況文字提到 Plovdiv 辦公室並有「View open roles in Platform & DevOps」入口，但職缺列表是 JS＝未檢查；沒有確認開放職缺但有入口＝中（比照 Run 10／11 的 JS 職缺板）。 | 保加利亞屬 EU：EU Blue Card 只標「相關」（規則 J）；搬遷／簽證字樣未找到（FAQ 只談辦公室／混合）；Taiwan passport 資格：未驗證 | 未檢查（Platform & DevOps 職缺列表為 JS） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 8 | William Grant & Sons（#8） | UK／Cumbernauld（Arete，科技團隊）／Bellshill（Maps） | 中 | 烈酒集團（規則 N：本業非軟體，適配上限中）；官方 Cloud Platform Engineer（Microsoft Azure、Terraform、PowerShell、cloud governance）是對口雲端平台職。 | 中 | 對口職確認開放（截止 2026-11-30）；但職缺只寫 William Grant & Sons，未點名 SC131772 或 SC134248，在冊的是 William Grant & Sons Ltd（Dufftown），Distillers Limited 不在冊，規則 S 不成立；依規則 C 不評低＝中。 | 條件式：William Grant & Sons Ltd（Dufftown）3 列在冊（Skilled Worker、GBM Senior or Specialist、Creative Worker），職缺法人未定；JD 未見贊助、SC、right-to-work 字樣（分析者 2026-11-28 讀全文） | Cloud Platform Engineer（wgrant/TP/157442/4113，Cumbernauld，每週 4 天進辦公室；2026-09-21 刊登，**截止 2026-11-30**） | Cloud Platform Engineer 截止 2026-11-30（距今 2 天）；Dennis 入學前在台灣，不可行動；快照距開學 277 天、距畢業 643 天 |
| 9 | Hello Games (Hello Games Ltd)（#16） | UK／Guildford | 中 | 遊戲工作室（軟體業，規則 3-6）；官方職缺以 C++ 遊戲程式為主，最接近的是 Build Engineer（分散式 CI、Jenkins、Docker、Python／C# 加分），屬 DevOps 鄰近但不是 Dennis 的雲端／資安主軸＝中。 | 中 | 本名在冊；Build Engineer 要求「4+ years of professional build engineer experience」，Graduate／Junior Programmer 要求 C++ 與 CS 成績，Dennis 個人檔都沒有直接對應（規則 B 類似情況），不算確認對口＝中。 | 本名在冊（1 列）；已讀 JD 未見贊助、SC 字樣 | Build Engineer；Graduate / Junior Programmer（Guildford；皆無日期；分析者 2026-11-28 確認仍可開啟） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 10 | Yorkshire Building Society（#22） | UK／Bradford（Head Office） | 中 | 建屋互助會（傳統金融，規則 N：適配上限中）；verifier 2026-11-23 讀到 DevOps Engineer - Enterprise（CI/CD、monitoring、DevSecOps），證明有對口職能。 | 中 | 本名在冊；但 DevOps 職頁在分析日 2026-11-28 回 HTTP 404（規則 P：不再計為開放）＝有贊助資格但缺確認開放的對口職缺＝中。 | 本名在冊（1 列）；DevOps JD（11-23 版）未見贊助、SC 字樣（verifier） | DevOps Engineer - Enterprise（010236；verifier 11-23 開放，**2026-11-28 已 404**）；其他 Technology 職缺：未檢查 | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 11 | Arnold Clark (Arnold Clark Automobiles Limited)（#10） | UK／Glasgow（Kilbirnie St／Hillington HQ） | 中 | 汽車零售集團（規則 N：本業非軟體，適配上限中）；有自家數位團隊（AC Digital），verifier 11-23 讀到 Cyber Security Consultant（NIST CSF、CIS v8、CE+，5 年資安經驗），偏 GRC 顧問而非平台工程。 | 中 | 本名在冊；但 Cyber Security Consultant 頁在分析日 2026-11-28 回 HTTP 410（規則 P：不再計為開放）；careers 首頁只見 Security Guard＝缺確認開放的對口職缺＝中。 | 本名在冊（1 列）；JD（11-23 版）只寫 reference and disclosure checks，不是 SC（verifier） | Cyber Security Consultant（92933；verifier 11-23 開放，**2026-11-28 已 410**） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 12 | Allstate Northern Ireland (ALLSTATE NORTHERN IRELAND LIMITED)（#25） | UK／Derry~Londonderry（Catalyst） | 中 | Allstate 的軟體開發中心（SIC 62012）；屬軟體工程雇主，但 verifier 沒有讀到任何官方 JD，技術棧／職缺方向未驗證（規則 3-6）＝中。 | 中 | 本名在冊（Belfast 法人，Derry 為同一法人官方站點）；Workday 職缺列表未檢查＝有贊助資格但缺確認職缺＝中。 | 本名在冊（2 列）；職缺層級贊助字樣未檢查 | 未檢查（Allstate Workday）；第三方所列 IaC／Platform Consultant 等不列為開放（verifier） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 13 | Speech Graphics (Speech Graphics Ltd)（#1） | UK／Edinburgh | 中 | 遊戲／臉部動畫 AI 軟體產品公司；官方 Workable 沒有職缺，技術棧／職缺方向未驗證（規則 3-6）＝中。 | 中 | 本名在冊；Workable API 的 jobs 陣列是空的（不是官方明寫沒有職缺）＝有贊助資格但缺職缺＝中。 | 本名在冊（1 列）；未見 SC／國籍要求 | 未找到（Workable jobs 陣列為空） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 14 | Space Intelligence (SPACE INTELLIGENCE LTD)（#3） | UK／Edinburgh | 中 | 衛星遙測資料（EO mapping）軟體公司；規則 N 對衛星科技公司依職缺判斷，但 verifier 沒有讀到工程職缺＝技術棧未驗證＝中。 | 中 | 登記冊名「Space Intelligence」（無 Ltd）在 Edinburgh，verifier 以官網公司編號對應為同一法人；沒有確認職缺＝中。 | 本名在冊（1 列，名稱寫法無 Ltd）；careers 頁未見 SC／國籍要求（不沿用 scout 的國防推論） | 未找到（careers 頁只寫 Edinburgh 混合辦公 60% 到辦公室與福利） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 15 | Smarter Grid Solutions (Smarter Grid Solutions Limited)（#12） | UK／Glasgow | 中 | 電網 DERMS 軟體公司（Strathclyde spin-out，Mitsubishi Electric 子公司）；軟體產品，但偏能源 OT，cloud／security 職務未驗證＝中。 | 中 | 本名在冊（3 列）；官方 JazzHR 明寫「There are no open positions at this time」（2026-11-23 快照）＝有贊助資格但缺職缺＝中。 | 本名在冊（3 列，含 GBM Graduate Trainee）；無 JD 可引 | 無（官方 JazzHR 2026-11-23 原文：There are no open positions at this time；只作當日快照） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 16 | Unit4 (UNIT4 BUSINESS SOFTWARE LIMITED)（#23） | UK／Harrogate | 中 | ERP／企業軟體產品商（產品公司，不是 ERP 導入顧問）；官方 API 的 Cloud Operations Engineer 在 Lisbon，英國可見職缺是業務／策略類＝英國的對口方向未驗證＝中。 | 中 | 本名在冊（2 列）；英國沒有確認開放的對口職缺；Harrogate 站點現況部分未驗證（CH 註冊地已改 London）＝中。 | 本名在冊（2 列）；英國職缺無 SC 原文 | 英國：未找到對口職（Cloud Operations Engineer 在 Lisbon，不計） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 17 | Nationwide Building Society（#19） | UK／Swindon（Nationwide House） | 中 | 建屋互助會（傳統金融，規則 N：適配上限中）；官方職缺首頁未見 cloud／DevOps／security 職，先前索引的 Lakehouse Platform Operations、Penetration Tester 都已 404＝中（有職能證據，無現職）。 | 中 | 本名在冊；官方 jobs 站是 SPA，只讀到首頁，深頁未檢查＝有贊助資格但缺確認職缺＝中。 | 本名在冊（1 列）；無現行 JD 可引 | 未找到（首頁可見職缺不對口；深頁與職系篩選未檢查） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 18 | Asset55 (ASSET55 LTD)（#21） | UK／Sunderland | 中 | 小型軟體公司；技術棧與職缺方向未驗證、規模小（規則 3-6）＝中。 | 中 | 本名在冊；官方職缺頁可見文字「No current vacancies」（2026-11-23 快照）＝有贊助資格但缺職缺＝中。 | 本名在冊（1 列） | 無（官方原文：No current vacancies；只作當日快照） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 19 | CGI IT UK (CGI IT UK Limited)（#4） | UK／Edinburgh（40 Princes St） | 中 | IT 服務／公部門數位交付顧問（規則 3-6：顧問屬中）；官方 2027 Technical Graduate 有 Software, Cloud & Infrastructure 與 Cyber Security 兩條線。 | 中 | CGI IT UK Limited 本名不在冊（只有 Logica Ltd t/a CGI 等姊妹法人，規則 A/C 不計）；有官方招聘管道＝有管道無贊助＝中。 | sponsors_latest.csv（2026-11-19 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中（Logica Ltd t/a CGI、CGI AXIS LTD、Concert (CGI) Limited）；njoyn JD 被擋，SC 未驗證 | Technical Graduate - Technology Engineer - Software, Cloud & Infrastructure 2027（J1026-0240）；Technical Graduate - Cyber Security 2027（J1026-0229）；個別地點與 JD 未檢查 | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 20 | NFQ Technologies (UAB NFQ Technologies)（#29） | LT／Kaunas | 中 | 數位產品／平台工程服務公司；官方職缺是 Senior Software Engineer (PHP) 等，沒有 DevOps／SRE／security 職（規則 O：PHP 為核心）＝中。 | 中 | 有確認開放的後端職作為入口（規則 D），但 PHP 職不算 Dennis 的確認對口（規則 O），語言與搬遷字樣未找到＝中。 | 立陶宛屬 EU：EU Blue Card 只標「相關」（規則 J）；搬遷／簽證字樣未找到（個別 Lever JD 未全開）；Taiwan passport 資格：未驗證 | Senior Software Engineer (PHP)（Vilnius/Kaunas Hybrid）；Senior Software Engineer & Team Lead、Team Lead Engineering、Head of Engineering | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 21 | Tridens (Tridens d.o.o.)（#31） | SI／Maribor | 中 | billing／EV-charging 平台軟體公司；官方職缺是 Java Spring Boot、Angular、Oracle BRM，沒有 DevOps／SRE／security 職（規則 O：Java 為核心）＝中。 | 中 | 有確認開放的後端職作為入口（規則 D），英語明寫（Communication level English），但不算 Dennis 確認對口、搬遷字樣未找到＝中。 | 斯洛文尼亞屬 EU：EU Blue Card 只標「相關」（規則 J）；搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證 | Java Spring Boot Developer（Maribor；AWS／Docker／Jenkins 為加分）；Angular Developer；Oracle BRM Developer | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 22 | NEC Software Solutions UK (NEC SOFTWARE SOLUTIONS UK LIMITED)（#24） | UK／Wrexham（官方據點）／Hemel Hempstead（登記） | 中 | 公部門軟體公司（警政、救護、地方政府）；可讀的對口職偏資安架構治理與 Oracle PL/SQL 開發，與 Dennis 的 Go／雲端平台棧不直接＝中。 | 高 | 本名在冊，但三則已讀對口 JD 全部要求既有工作權：Networks Cyber Security Engineer（入職後申請 SC＋NPPV，且「pre-existing right to work」）、Security Architect（「pre-existing right to work and travel within the UK」）、Senior Software Developer（同句，原文寫「within the EU」）；依規則 T 全部不算對口，再依規則 E 第二句＝高。 | 本名在冊（1 列，Hemel Hempstead；Wrexham 為同一法人官方站點）；所有已讀對口 JD 都要求既有工作權＝實際上不擔保 | Networks Cyber Security Engineer（2026-11-02 刊登，SC＋NPPV＋既有工作權，規則 T，不計）；Security Architect（Remote UK，2026-10-23，既有工作權，不計）；Senior Software Developer（Bracknell，2026-11-06，Oracle PL/SQL，既有工作權，不計）；Wrexham 本地只有 Customer Service Advisor（非對口） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 23 | LV= (Liverpool Victoria Financial Services Limited)（#18） | UK／Bournemouth／Poole（County Gates） | 中 | 人壽／退休金互助保險（傳統金融，規則 N：適配上限中）；官方 Cloud Operations Lead（Azure PaaS、AKS、SRE、Terraform、Azure DevOps）是對口職。 | 高 | 本名與集團名都不在冊（LV Care Ltd 是無關公司）；唯一對口職明寫「we are unable to offer Skilled Worker Visa Sponsorship for this role」（規則 E／K）＝無贊助且對口職明文排除＝高。 | 不在冊；Cloud Operations Lead 明文不提供 Skilled Worker sponsorship、須已有英國工作權 | Cloud Operations Lead（1164，Bournemouth／Hitchin hybrid，2026-11-11 刊登；官方欄位 Internal Advertising End Date 25 Nov 2026；明文不擔保，不計）；Solution Architect（20 hours per week，兼職，不計） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 24 | Crick Software (CRICK SOFTWARE LIMITED)（#26） | UK／Northampton | 中 | 教育軟體公司（edtech）；技術棧未驗證、規模小（規則 3-6）＝中。 | 高 | 本名不在冊＋官方原文「We do not have any current vacancies」（2026-11-23 快照）＝無贊助且無職缺＝高。 | 不在冊 | 無（官方原文：We do not have any current vacancies；只作當日快照） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 25 | Desana (Desana Network Limited)（#6） | UK／Edinburgh | 中 | workspace booking 軟體平台（scout 的 edtech 定位未由官網證實）；技術棧與職缺方向未驗證＝中。 | 高 | 本名不在冊；官方 Notion careers 只取得殼頁（未檢查，依規則 3-1 不寫沒有職缺）＝無贊助且無確認職缺＝高。 | 不在冊 | 未檢查（Notion careers 本文未載入） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 26 | Robotical (Robotical Ltd.)（#7） | UK／Edinburgh | 中 | 教育機器人硬體＋軟體公司（規則 N：以硬體為主者判中）；verifier 未讀到對口職。 | 高 | 本名不在冊＋官方 careers 沒有對口職缺＝高。 | 不在冊；careers 頁未見 SC／國籍要求 | 未找到（官方 careers 已檢查） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 27 | Edrington (The Edrington Group Limited)（#9） | UK／Glasgow（100 Queen St） | 低 | 烈酒集團（規則 N）；官方 ATS 22 筆中沒有 Glasgow 對口 IT 職，IT Service Desk 在 Singapore，IT Graduate 頁 403（未檢查）＝Glasgow IT 職證據不足，依規則 3-2 判低（資料不足）。 | 中 | 本名在冊（3 列）；有官方 ATS 但缺對口職缺＝中。 | 本名在冊（3 列，含 GBM Graduate Trainee） | 未找到 Glasgow 對口職；IT Graduate 頁未檢查 | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 28 | Whyte & Mackay (Whyte and Mackay Limited)（#13） | UK／Glasgow（St Vincent Plaza） | 低 | 威士忌公司（規則 N）；唯一 IT 職 Network Administrator 已 410（規則 P），屬管理式 IT＝低。 | 中 | 本名在冊；有官方 Teamtailor 但缺對口職缺＝中。 | 本名在冊（1 列） | 無對口開放職（Network Administrator 已 410） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 29 | AG Barr (A.G. BARR P.L.C.)（#11） | UK／Cumbernauld | 低 | 飲料製造（規則 N）；官方 vacancies 沒有 IT／cloud／security 職（Cyber Engineer 只見於聚合站，不計）＝資料不足，判低。 | 中 | 本名在冊；有官方職缺頁但缺對口職缺＝中。 | 本名在冊（1 列） | 未找到（官方 vacancies 已檢查；Head of Engineering 疑為工廠工程，未核實） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 30 | schuh (SCHUH LIMITED)（#5） | UK／Livingston | 低 | 鞋類零售／電商（規則 N）；Head Office 職缺清單未載入，第三方的 Senior Infrastructure Engineer 不計＝IT 職證據不足，判低（資料不足，規則 3-2）。 | 中 | 本名在冊（2 列）；Dayforce 清單 JS／API 403（未檢查）＝有贊助資格但缺確認職缺＝中。 | 本名在冊（2 列） | 未檢查（Dayforce Head Office 清單為 JS） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 31 | Diageo (Diageo Scotland Limited)（#14） | UK／Edinburgh（Edinburgh Park） | 低 | 烈酒集團（規則 N）；Edinburgh 現有 3 筆職缺都非技術職，OT Cyber Resilience Lead 已下架（postingAvailable=false），官方 D&T 據點寫 Budapest／Bangalore＝Edinburgh IT 職證據不足，判低。 | 中 | Diageo Scotland Limited 不在冊、只有母公司 Diageo plc（London）在冊（規則 A/C 不計）；有官方 Workday＝有管道無贊助＝中。 | sponsors_latest.csv（2026-11-19 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中（Diageo plc） | 無對口開放職（OT Cyber Resilience Lead 已下架；Operational Technology Lead 在 Alloa，不計） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 32 | Sony Europe (Basingstoke, Viables)（#20） | UK／Basingstoke | 低 | 電子產品企業辦公室；Basingstoke 的工程職缺未讀到（Workday 清單未檢查），IT 職證據不足，判低（規則 3-2）。 | 中 | Sony Europe Limited 與 Sony Europe B.V 都在冊但都在 Weybridge，Basingstoke 招聘法人未獨一確定（規則 C，條件式）；有官方 Workday＝中。 | sponsors_latest.csv（2026-11-19 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中（Sony Europe Limited 3 列、Sony Europe B.V 2 列，Weybridge） | 未檢查（Workday API 400、列表為 SPA） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |
| 33 | Scotmid Co-operative (Scottish Midland Co-operative Society Limited)（#15） | UK／Newbridge（Edinburgh） | 低 | 零售合作社（規則 N）；官方 Head Office 頁只證實有 IT 部門，沒有具體 IT 職＝資料不足，判低。 | 高 | 本名（含 Scotmid Holdings）不在冊＋申請入口清單未檢查＝無贊助且無確認職缺＝高。 | 不在冊 | 未檢查（myscotmid.coop 申請入口為 JS） | 無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天 |

分布（不重複雇主）：適配 高 7／中 19／低 7；難度 低 3／中 24／高 6。組合：高／低 3、高／中 4、高／高 0、中／低 0、中／中 14、中／高 5、低／中 6、低／高 1。

---

## 四之二、時程與截止日（與難度分開，規則 3-3／F）

基準：分析日 2026-11-28（核實檢查日 2026-11-23）；MSc 開學 2027-09-01（距今 277 天）；畢業 2028-09-01（距今 643 天）。天數以 Python 計算（`gen/build.py`）。

**仍開放、有官方截止日的對口職缺**（1 則；法人條件式，不可行動）：

| 職缺 | 截止日 | 距今 | 距開學 | 距畢業 |
|---|---|---:|---:|---:|
| William Grant & Sons Cloud Platform Engineer（wgrant/TP/157442/4113；法人條件式，規則 C） | 2026-11-30 | 2 | 275 | 641 |

**仍開放、只有刊登日（沒有截止日）的對口或接近職缺**，只作新鮮度參考（「距今」為負＝已刊登天數）：

| 職缺 | 日期（類型） | 距今 | 距開學 | 距畢業 |
|---|---|---:|---:|---:|
| NEC Senior Software Developer（Bracknell，Oracle PL/SQL；既有工作權，規則 T，不計） | 2026-11-06（SmartRecruiters released，Asia/Taipei） | -22 | 299 | 665 |
| NEC Networks Cyber Security Engineer（SC＋NPPV＋既有工作權，規則 T，不計） | 2026-11-02（SmartRecruiters released，Asia/Taipei） | -26 | 303 | 669 |
| NEC Security Architect（Remote UK；既有工作權，規則 T，不計） | 2026-10-23（SmartRecruiters released，Asia/Taipei） | -36 | 313 | 679 |
| LV= Cloud Operations Lead（明文不擔保，規則 E／K，不計；Internal Advertising End Date 2026-11-25 已過） | 2026-11-11（官方 Posted） | -17 | 294 | 660 |
| William Grant & Sons Cloud Platform Engineer（另見上表截止日） | 2026-09-21（官方 Posted on） | -68 | 345 | 711 |
| SSTL Security Infrastructure Systems Engineer（2147） | 2026-09-04（Teamtailor date_published） | -85 | 362 | 728 |
| SSTL Information & Cybersecurity Assurance Manager（2145；SC＋5 年居英，規則 T，不計） | 2026-08-19（Teamtailor date_published） | -101 | 378 | 744 |
| Current Health Software Engineer II（UK Remote） | 日期未示 | — | — | — |
| Hello Games Build Engineer／Graduate・Junior Programmer（Guildford；非確認對口） | 日期未示 | — | — | — |
| CGI Technical Graduate 2027（Software, Cloud & Infrastructure／Cyber Security；2027 入職，與畢業時程不合） | 日期未示 | — | — | — |
| Hostinger Offensive Cyber Security Engineer／System Engineer \| Email Team（Kaunas 或遠端） | 日期未示 | — | — | — |
| ESTEN DevOps Engineer（Košice，Office / Remote，Onset ASAP） | 日期未示 | — | — | — |
| Elitnet DevOps Engineer（Kaunas） | 日期未示 | — | — | — |
| Coinis Senior AI Platform Engineer／Senior Full-Stack AI Engineer（Remote EU timezones 或 Podgorica） | 日期未示 | — | — | — |
| NFQ Senior Software Engineer (PHP)（Vilnius/Kaunas；規則 O） | 日期未示 | — | — | — |
| Tridens Java Spring Boot Developer（Maribor；規則 O） | 日期未示 | — | — | — |

**已過期／已下架／已 404，不可申請（規則 3-4／P），只作為職能證據**：

| 職缺 | 確認下架日 | 距開學 | 距畢業 |
|---|---|---:|---:|
| YBS DevOps Engineer - Enterprise（010236；11-23 開放，11-28 HTTP 404） | 2026-11-28 | 277 | 643 |
| Arnold Clark Cyber Security Consultant（92933；11-23 開放，11-28 HTTP 410） | 2026-11-28 | 277 | 643 |
| Whyte & Mackay Network Administrator（官方頁 410，verifier 11-23） | 日期未驗證 | — | — |
| Diageo OT Cyber Resilience Lead JR1130656（Workday postingAvailable=false） | 日期未驗證 | — | — |
| Nationwide Engineer E2 – Lakehouse Platform Operations／Penetration Tester／Technology Development Programme（官方 URL 404，verifier 11-23） | 日期未驗證 | — | — |
| Asset55 Delivery Engineer（2024-11-22，頁面隱藏；官方可見文字 No current vacancies） | 日期未驗證 | — | — |

**時程結論**：
- 所有現行職缺在 MSc 期間或畢業時都不會仍開放；Dennis 入學前在台灣，現在實際上沒有可行動的職缺。
- 對 Dennis 有用的是「這家公司會招此類職能」與持牌狀態：Current Health（Python／TS／AWS 產品工程）、SSTL（雲端資安基礎設施）、William Grant（Azure 平台，法人條件式）、YBS（DevOps，已下架）、Arnold Clark（資安 GRC，已下架）。
- CGI 2027 Technical Graduate 屬 2027 年入職，與 Dennis 2028-09 畢業不合（規則 3-3）。
- 實際申請窗口：MSc 期間的 graduate 招募季（約 2027-09 至 2028-06，各公司日期未驗證），或畢業後走 Graduate visa。
- 歐洲職缺若在 MSc 前申請，與 2027-09 入學衝突（規則 F）；Hostinger、Coinis 的遠端選項在 MSc 期間是否可兼職或受學生簽證限制：未驗證。

---

## 五、排除／存疑（規則 V；僅供參考評級，不進主表與 Top 10）

本輪**沒有**排除列。verified12 33 列全部「已確認營運」，分析者也沒有找到停業或解散證據。以下幾列看起來像存疑，但都不符合規則 V：

| # | 組織 | 看起來的疑點 | 本報告判定 |
|---:|---|---|---|
| 1 | Speech Graphics Ltd | CH confirmation statement（到期 2026-11-19）顯示 overdue | CH Active，官網 2026-10-28 仍發布產品新聞、Workable 入口仍在；逾期申報不是停業，照常評級（中／中）。 |
| 16 | Hello Games Ltd | CH accounts overdue（原到期 2026-10-31） | CH Active，Join Us 與職缺頁仍在；照常評級（中／中）。 |
| 20 | Sony Europe Limited | 舊 SONY EUROPE LIMITED（02422874）2019-04-09 轉換關閉 | 現行法人是 15698470（2024 設立，Active）與 Sony Europe B.V.（FC035527）；照常評級（低／中）。 |
| 28／30 | Elitnet／ESTEN | 頁尾 © 2023／© 2024 | 官網與職缺仍在線（分析者 2026-11-28 也確認）；過期頁尾不是停業證據。 |

- 判定依 CH／官網，不依 Maps 名稱或分類。
- **V1 Technologies（Livingston）** 不是排除列：它在 scout 階段就因 Run 6 已收錄（同 FTID）被刪，沒有進入 verified12，本報告不為它建立評級列（第八節）。
- scout 另記 Lenus Health、Sopra Steria Edinburgh、Motorola Solutions Basingstoke 在 Maps 顯示 Permanently closed，都沒有進入 TSV，不評級。

---

## 六、逐家說明（依排名）


### 1. Current Health (Current Health Limited)（#2）｜Edinburgh（職缺 UK Remote）

- **公司簡介**：Edinburgh 起家的遠端病人監測公司，CH SC481544 Active；2025-06-23 Best Buy Co., Inc. 停止為 PSC，改由 Christopher McCann 控股；註冊地址 2025-07-10 改為 Level 5, 9 Haymarket Square（Maps 仍是 10 Waterloo Place）。
- **適配度：高**：健康科技軟體平台（遠端病人監測；規則 N：產品本身是自家軟體平台＝軟體業）；官方 Software Engineer II 是 Product Engineering 全端職：backend microservices、AWS、Java／Python／TypeScript 任一、部署與 production troubleshooting、on-call，與 Dennis 的 Python／TS／AWS 背景直接對口。
- **申請難度：低**：Current Health Limited 本名在冊（Skilled Worker＋GBM Senior or Specialist）＋官方確認開放的對口職缺（verifier 2026-11-23；分析者 2026-11-28 讀 careers 頁仍列出）＝低（有條件：JD 未點名法人，verifier 以 CH 與官網對應；個別 CoS 未驗證）。
- **簽證／搬遷**：本名在冊（2 列）；JD 未見贊助、SC、right-to-work 字樣（正反皆無；分析者 2026-11-28 讀全文）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Software Engineer II（UK Remote；Full-stack Product Engineering；刊登／截止日頁面未示）
- **語言**：英語；未見非英語要求
- **時程**：Software Engineer II 刊登日未示、無截止日；Dennis 入學前在台灣，現職不可行動；快照距開學 277 天、距畢業 643 天
- **備註**：職缺標 UK Remote，不是明示 Edinburgh 據點；但雇主是同一英國法人，依規則 3-3 以公司層級判斷。
- **備註**：同頁其他職缺（Rochester, NY 的 Operator I、Purchasing Lead，US Remote 的 Director）不是英國職，不計。
- **備註**：verifier 引的 application-software-engineer-ii 頁只有申請表；職缺全文在 currenthealth.com/careers/（分析者 2026-11-28 只讀，未申請）。
- **來源**：verified12.md #2；currenthealth.com/careers/（分析者 2026-11-28 讀取）；currenthealth.com/application-software-engineer-ii/；CH SC481544；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 2. Surrey Satellite Technology (Surrey Satellite Technology Limited, SSTL)（#17）｜Guildford（Surrey Research Park）

- **公司簡介**：英國小型衛星製造商，CH 01916260 Active，Tycho House, Surrey Research Park。
- **適配度：高**：衛星製造商；規則 N 對航太／衛星科技公司依職缺判斷：官方 Security Infrastructure Systems Engineer 要求 cloud platform（AWS／Azure／GCP）安全、SIEM／EDR、IAM、Terraform／Ansible／Python、Docker／Kubernetes、Linux hardening、CSIRT，與 Dennis 的 Cloud & Security Platform 背景直接對口。
- **申請難度：低**：Surrey Satellite Technology Ltd 本名在冊＋官方確認開放的對口職缺（Teamtailor 2026-09-04 刊登，2026-11-28 仍列出，規則 P：已刊登 85 天，照計並標註）＝低（有條件：同公司另一資安職要求 SC＋5 年居英；本職 JD 全文沒有 SC／vetting／國籍字樣，但太空／國防業者的後續審查未驗證）。
- **簽證／搬遷**：本名在冊（2 列）；Security Infrastructure Systems Engineer JD 未見贊助、SC、right-to-work 字樣（verifier 2026-11-23；分析者 2026-11-28 重讀全文同）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Security Infrastructure Systems Engineer（Job Ref 2147，Guildford Hybrid，2026-09-04 刊登，無截止日）；Information & Cybersecurity Assurance Manager（Job Ref 2145，要求可持 SC 且至少 5 年不間斷居英，規則 T，不計）
- **語言**：英語；未見非英語要求
- **時程**：2147 已刊登 85 天、無截止日；Dennis 入學前在台灣，現職不可行動；快照距開學 277 天、距畢業 643 天
- **備註**：**規則 T 只套在 2145**：verifier 明說不得因公司屬太空／國防而推論 2147 需要 SC；本報告照辦（比照 Run 11 Rolls-Royce 不推及）。
- **備註**：職缺板保留很久的職缺（最舊 2026-04-08 仍列出），2147 已刊登 85 天，是否仍積極招募：未驗證。
- **備註**：職責含「3rd line support to the Service Desk」，屬內部 IT 基礎設施安全，不是產品平台工程；適配仍判高（資安／雲端平台對口）。
- **備註**：2026-11-27 新刊登 Corporate Security Manager（分析者只見職稱，未讀 JD，不計）。
- **來源**：verified12.md #17；jobs.sstl.co.uk/jobs/8323642-security-infrastructure-systems-engineer、jobs.sstl.co.uk/jobs.json（分析者 2026-11-28 讀取）；jobs.sstl.co.uk/jobs/8241556-information-cybersecurity-assurance-manager；CH 01916260；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 3. Hostinger (HOSTINGER, UAB／HOSTINGER operations, UAB)（#27）｜Kaunas（官方辦公室；法律地址 Vilnius）

- **公司簡介**：2004 年在 Kaunas 創立的 hosting 公司，現在法律地址在 Vilnius；官方 privacy policy 列 HOSTINGER, UAB（302710386）與 HOSTINGER operations, UAB（306308157）。
- **適配度：高**：web hosting／AI 網站平台（線上平台＝軟體，規則 N）；官方開放 Offensive Cyber Security Engineer（hosting platform／cloud infrastructure 攻擊面測試）、System Engineer \| Email Team、Linux Systems Engineering Lead 等，與 Dennis 的資安與平台背景直接對口。
- **申請難度：低**：Run 2 量表三項皆有官方原文：確認開放的對口職缺、英語（Offensive Cyber「Clear written English」）、明確遠端路徑（每則工程職都寫「our offices in Vilnius, Kaunas, Jakarta, or Luxembourg, your home, or anywhere in the world」）＝低。
- **簽證／搬遷**：立陶宛屬 EU：EU Blue Card 只標「相關」（規則 J）；官方 visas／relocation 原文只出現在 Chief Revenue & Analytics Officer 一則（「In case you move, we handle it in person: visas…」），verifier 明說不得推及工程職；Taiwan passport 資格：未驗證
- **對口開放職缺**：Offensive Cyber Security Engineer；System Engineer \| Email Team；Linux Systems Engineering Lead \| Web Hosting Team；Junior System Engineer \| Network Team（皆無獨立日期）
- **語言**：Offensive Cyber Security Engineer 官方要求「Clear written English」；未見立陶宛語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：**不進歐洲 Top 10**：規則 Q 要官方 relocation／visa 字樣；Hostinger 的字樣只在 C-level 職（第七節、第十節）。若官方日後把同句寫進工程職或公司層級頁，會依規則 W 進前段。
- **備註**：「anywhere in the world」是遠端選項，不是簽證或工作許可支援；從英國或台灣遠端受僱的法律安排：未驗證。
- **備註**：Run 8 覆蓋 Vilnius，但 covered-clean 與 Run 1–11 報告都沒有 Hostinger，本輪當作新雇主。
- **來源**：verified12.md #27；hostinger.com/career（分析者 2026-11-28 讀取）；hostinger.com/legal/privacy-policy；hostinger.com/about

### 4. ESTEN (ESTEN s. r. o.)（#30）｜Košice

- **公司簡介**：Košice 的軟體開發公司（OfficePoint, Južná trieda 8）；官網自述 ISO 9001／ISO/IEC 27001（未驗證）；斯洛伐克 ORSR 登記未查（verifier 請求失敗）。
- **適配度：高**：客製軟體開發公司（規則 3-6）；官方 DevOps Engineer 核心技能是 Kubernetes、Golang (Go)、Helm、Infrastructure Automation、Networking & Storage，是本輪與 Dennis 技術棧（Go＋雲端平台）最直接的職缺。
- **申請難度：中**：官方確認開放的 DevOps Engineer（Onset ASAP，Workplace「Office / Remote」，mid-level and above）；但語言要求未寫、遠端範圍未說明、搬遷／簽證字樣未找到（Run 2 量表＝中）。
- **簽證／搬遷**：斯洛伐克屬 EU：EU Blue Card 只標「相關」（規則 J）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證
- **對口開放職缺**：DevOps Engineer（Košice，Office / Remote，Permanent employment / Self employment，Onset ASAP；刊登日未示）
- **語言**：career 頁有 Sk／En 切換；職缺未寫語言要求（language not verified）
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：官方職缺欄另寫「Salary: €3,000+ gross/month (depending on experience; mid-level and above)」（分析者 2026-11-28 讀取，原文照錄，不作評級依據）。
- **備註**：「Self employment」選項代表可能以承包方式聘用；對工作許可的影響未驗證。
- **來源**：verified12.md #30；esten.solutions/career（分析者 2026-11-28 讀取）

### 5. Coinis (Coinis DOO)（#33）｜Podgorica

- **公司簡介**：Podgorica 的 AI 行銷軟體公司；官網並列 Coinis DOO（Montenegro）、Coinis Ltd（USA）、Coinis Limited（Dubai）。
- **適配度：高**：AI 行銷平台（線上平台＝軟體）；官方 Senior AI Platform Engineer, Agentic Workflows 與 Senior Full-Stack AI Engineer（React 19／TypeScript＋Cloudflare Workers、D1、R2、Queues）與 Dennis 的 Next.js／Cloudflare 平台背景直接對口。
- **申請難度：中**：官方確認開放的 Senior 平台職；但遠端只限「Remote (EU timezones) or Podgorica」（量表：遠端限特定範圍＝缺一項），語言未寫，搬遷／工作許可字樣未找到（Run 2 量表＝中）。
- **簽證／搬遷**：黑山非 EU，不適用 EU Blue Card（≠不能合法工作）；官方工作許可頁（mia.gov.me）本輪驗證牆／gov.me 超時＝未檢查；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證
- **對口開放職缺**：Senior AI Platform Engineer, Agentic Workflows；Senior Full-Stack AI Engineer, Creative Platform（皆 Remote (EU timezones) or Podgorica；日期未示）
- **語言**：職缺以英文撰寫，未見語言要求；實際工作語言未驗證
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：福利寫「Equity in the SaaS spinout」，實際招聘法人未獨一確定（verifier）。
- **備註**：黑山商業登記號碼未驗證。
- **來源**：verified12.md #33；coinis.com/careers、coinis.com/careers/senior-ai-platform-engineer-agentic-workflows（分析者 2026-11-28 確認仍可開啟）、…/senior-full-stack-ai-engineer-creative-platform；coinis.com/contact

### 6. Elitnet (UAB ELITNET)（#28）｜Kaunas

- **公司簡介**：Kaunas 的電信軟體／網路安全產品公司（Pasiles 102）；立陶宛公司代碼未查（verifier）。
- **適配度：高**：電信軟體產品與網路安全公司（規則 3-6）；官方 DevOps Engineer（Linux、Kubernetes basics、monitoring、IT security／operating concepts）屬 Dennis 目標職類。
- **申請難度：中**：官方確認開放的 DevOps Engineer，同頁其他工程職明寫英語；但須到 Kaunas 辦公室、搬遷／簽證字樣未找到（Run 2 量表＝中）；「Kubernetes basics」顯示層級可能低於 Dennis 年資（只影響規則 Q 排序）。
- **簽證／搬遷**：立陶宛屬 EU：EU Blue Card 只標「相關」（規則 J）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證
- **對口開放職缺**：DevOps Engineer（Kaunas；以 email 投遞；日期未示）
- **語言**：同頁 Java／C++ Developer 官方要求「English skills (reading, writing, speaking)」；DevOps 職未重複寫；未見立陶宛語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：申請方式是寄履歷到官方信箱；本輪沒有寄送、沒有聯絡公司。
- **備註**：頁尾 © 2023 視為過期頁尾，不當作停業證據（verifier）。
- **來源**：verified12.md #28；elitnet.eu/about/careers/（分析者 2026-11-28 確認 DevOps Engineer 仍列出）

### 7. SiteGround (Plovdiv office)（#32）｜Plovdiv

- **公司簡介**：SiteGround 官方自述是在美國、英國、西班牙、塞浦路斯、保加利亞註冊的集團；Plovdiv 是 Office Park Plovdiv 內的辦公室。
- **適配度：高**：web hosting／網站平台（線上平台＝軟體）；官方 careers 有 Platform & DevOps 團隊介紹與 Google Cloud 基礎設施描述，與 Dennis 的平台背景對口。
- **申請難度：中**：官方 careers 現況文字提到 Plovdiv 辦公室並有「View open roles in Platform & DevOps」入口，但職缺列表是 JS＝未檢查；沒有確認開放職缺但有入口＝中（比照 Run 10／11 的 JS 職缺板）。
- **簽證／搬遷**：保加利亞屬 EU：EU Blue Card 只標「相關」（規則 J）；搬遷／簽證字樣未找到（FAQ 只談辦公室／混合）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（Platform & DevOps 職缺列表為 JS）
- **語言**：職缺以英文撰寫，未見語言要求；實際工作語言未驗證
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：Plovdiv 招聘法人未點名；街道地址未在官方頁找到（verifier）。
- **備註**：依規則 3-1，未檢查不寫成沒有職缺。
- **來源**：verified12.md #32；careers.siteground.com；siteground.com/company

### 8. William Grant & Sons（#8）｜Cumbernauld（Arete，科技團隊）／Bellshill（Maps）

- **公司簡介**：蘇格蘭家族烈酒集團（Glenfiddich 等）；SC131772 與 SC134248 皆 Active，註冊於 Dufftown；SWA 名錄列 Bellshill 客服中心。
- **適配度：中**：烈酒集團（規則 N：本業非軟體，適配上限中）；官方 Cloud Platform Engineer（Microsoft Azure、Terraform、PowerShell、cloud governance）是對口雲端平台職。
- **申請難度：中**：對口職確認開放（截止 2026-11-30）；但職缺只寫 William Grant & Sons，未點名 SC131772 或 SC134248，在冊的是 William Grant & Sons Ltd（Dufftown），Distillers Limited 不在冊，規則 S 不成立；依規則 C 不評低＝中。
- **簽證／搬遷**：條件式：William Grant & Sons Ltd（Dufftown）3 列在冊（Skilled Worker、GBM Senior or Specialist、Creative Worker），職缺法人未定；JD 未見贊助、SC、right-to-work 字樣（分析者 2026-11-28 讀全文）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Cloud Platform Engineer（wgrant/TP/157442/4113，Cumbernauld，每週 4 天進辦公室；2026-09-21 刊登，**截止 2026-11-30**）
- **語言**：英語；未見非英語要求
- **時程**：Cloud Platform Engineer 截止 2026-11-30（距今 2 天）；Dennis 入學前在台灣，不可行動；快照距開學 277 天、距畢業 643 天
- **備註**：Maps 列是 Bellshill（分類 Distillery），科技職在 Cumbernauld Arete；兩地並陳。
- **備註**：舊的 Information Security／Cyber 職（record 4119）已過期，不列開放。
- **備註**：**敏感度**：若職缺法人確認是 William Grant & Sons Ltd，會是 中／低（規則 N 上限），仍不進英國 Top 10。
- **來源**：verified12.md #8；careerssearch.williamgrant.com/jobs/job/Cloud-Platform-Engineer/4113（分析者 2026-11-28 讀取）；CH SC131772、SC134248；sponsors_latest.csv（2026-11-19 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 9. Hello Games (Hello Games Ltd)（#16）｜Guildford

- **公司簡介**：《No Man's Sky》開發商，CH 06663645 Active（accounts overdue，不單獨視為停業）。
- **適配度：中**：遊戲工作室（軟體業，規則 3-6）；官方職缺以 C++ 遊戲程式為主，最接近的是 Build Engineer（分散式 CI、Jenkins、Docker、Python／C# 加分），屬 DevOps 鄰近但不是 Dennis 的雲端／資安主軸＝中。
- **申請難度：中**：本名在冊；Build Engineer 要求「4+ years of professional build engineer experience」，Graduate／Junior Programmer 要求 C++ 與 CS 成績，Dennis 個人檔都沒有直接對應（規則 B 類似情況），不算確認對口＝中。
- **簽證／搬遷**：本名在冊（1 列）；已讀 JD 未見贊助、SC 字樣；Taiwan passport 資格：未驗證
- **對口開放職缺**：Build Engineer；Graduate / Junior Programmer（Guildford；皆無日期；分析者 2026-11-28 確認仍可開啟）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：若把 Build Engineer 視為 DevOps 對口職，會是 中／低（第十節）。
- **來源**：verified12.md #16；hellogames.org/join-us；hellogames.org/jobs/build-engineer/、/junior-programmer/（分析者 2026-11-28 讀取）；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 10. Yorkshire Building Society（#22）｜Bradford（Head Office）

- **公司簡介**：Mutuals Public Register 66B，總部 Yorkshire House, Bradford BD5 8LJ。
- **適配度：中**：建屋互助會（傳統金融，規則 N：適配上限中）；verifier 2026-11-23 讀到 DevOps Engineer - Enterprise（CI/CD、monitoring、DevSecOps），證明有對口職能。
- **申請難度：中**：本名在冊；但 DevOps 職頁在分析日 2026-11-28 回 HTTP 404（規則 P：不再計為開放）＝有贊助資格但缺確認開放的對口職缺＝中。
- **簽證／搬遷**：本名在冊（1 列）；DevOps JD（11-23 版）未見贊助、SC 字樣（verifier）；Taiwan passport 資格：未驗證
- **對口開放職缺**：DevOps Engineer - Enterprise（010236；verifier 11-23 開放，**2026-11-28 已 404**）；其他 Technology 職缺：未檢查
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：**敏感度**：若 DevOps 職重新上架或另有對口職，會是 中／低（規則 N 上限），接在英國候補的 中／低 群。
- **來源**：verified12.md #22；ybscareers.co.uk/job/devops-engineer-enterprise-in-bradford.1618（分析者 2026-11-28：404）；mutuals.fca.org.uk 13195；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 11. Arnold Clark (Arnold Clark Automobiles Limited)（#10）｜Glasgow（Kilbirnie St／Hillington HQ）

- **公司簡介**：蘇格蘭汽車零售集團，CH SC036386 Active，Hillington head office，Kilbirnie Street 為營運支援辦公室。
- **適配度：中**：汽車零售集團（規則 N：本業非軟體，適配上限中）；有自家數位團隊（AC Digital），verifier 11-23 讀到 Cyber Security Consultant（NIST CSF、CIS v8、CE+，5 年資安經驗），偏 GRC 顧問而非平台工程。
- **申請難度：中**：本名在冊；但 Cyber Security Consultant 頁在分析日 2026-11-28 回 HTTP 410（規則 P：不再計為開放）；careers 首頁只見 Security Guard＝缺確認開放的對口職缺＝中。
- **簽證／搬遷**：本名在冊（1 列）；JD（11-23 版）只寫 reference and disclosure checks，不是 SC（verifier）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Cyber Security Consultant（92933；verifier 11-23 開放，**2026-11-28 已 410**）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：即使該職仍開放，也偏 GRC／顧問（規則 3-6 判中）；若重新上架，會是 中／低（有條件）。
- **來源**：verified12.md #10；careers.arnoldclark.com/job/cyber-security-consultant-92933.aspx（分析者 2026-11-28：410）；arnoldclark.com/careers/head-office；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 12. Allstate Northern Ireland (ALLSTATE NORTHERN IRELAND LIMITED)（#25）｜Derry~Londonderry（Catalyst）

- **公司簡介**：CH NI034636 Active（前名 Northbrook Technology of Northern Ireland），註冊於 Belfast；Derry 據點 Catalyst Building, Bay Road。
- **適配度：中**：Allstate 的軟體開發中心（SIC 62012）；屬軟體工程雇主，但 verifier 沒有讀到任何官方 JD，技術棧／職缺方向未驗證（規則 3-6）＝中。
- **申請難度：中**：本名在冊（Belfast 法人，Derry 為同一法人官方站點）；Workday 職缺列表未檢查＝有贊助資格但缺確認職缺＝中。
- **簽證／搬遷**：本名在冊（2 列）；職缺層級贊助字樣未檢查；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（Allstate Workday）；第三方所列 IaC／Platform Consultant 等不列為開放（verifier）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：Run 6 覆蓋 Belfast，但 covered-clean 與 Run 1–11 報告都沒有 Allstate，本輪當作新雇主。
- **備註**：Maps 郵編 BT48 7SH 與官方 BT48 7TG 略有差異（verifier）。
- **來源**：verified12.md #25；allstateni.com/careers.aspx；allstateni.com/connect/northwest.aspx；CH NI034636；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 13. Speech Graphics (Speech Graphics Ltd)（#1）｜Edinburgh

- **公司簡介**：Edinburgh 的 audio-driven facial animation 公司（SG Com），CH SC388915 Active；confirmation statement 2026-11-19 到期顯示 overdue（不單獨視為停業）。
- **適配度：中**：遊戲／臉部動畫 AI 軟體產品公司；官方 Workable 沒有職缺，技術棧／職缺方向未驗證（規則 3-6）＝中。
- **申請難度：中**：本名在冊；Workable API 的 jobs 陣列是空的（不是官方明寫沒有職缺）＝有贊助資格但缺職缺＝中。
- **簽證／搬遷**：本名在冊（1 列）；未見 SC／國籍要求；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（Workable jobs 陣列為空）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：LinkedIn／Indeed／Otta／Wellfound 未檢查（verifier）。
- **來源**：verified12.md #1；apply.workable.com/speech-graphics；CH SC388915；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 14. Space Intelligence (SPACE INTELLIGENCE LTD)（#3）｜Edinburgh

- **公司簡介**：Edinburgh 的衛星資料新創，CH SC595836 Active，Henry Duncan House（服務式建築）。
- **適配度：中**：衛星遙測資料（EO mapping）軟體公司；規則 N 對衛星科技公司依職缺判斷，但 verifier 沒有讀到工程職缺＝技術棧未驗證＝中。
- **申請難度：中**：登記冊名「Space Intelligence」（無 Ltd）在 Edinburgh，verifier 以官網公司編號對應為同一法人；沒有確認職缺＝中。
- **簽證／搬遷**：本名在冊（1 列，名稱寫法無 Ltd）；careers 頁未見 SC／國籍要求（不沿用 scout 的國防推論）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（careers 頁只寫 Edinburgh 混合辦公 60% 到辦公室與福利）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：登記冊名稱與 CH 名稱差一個 Ltd；本報告接受 verifier 的同一法人判定，但列入第八節。
- **來源**：verified12.md #3；space-intelligence.com/careers/；CH SC595836；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 15. Smarter Grid Solutions (Smarter Grid Solutions Limited)（#12）｜Glasgow

- **公司簡介**：Glasgow Optima Building，CH SC344695 Active；PSC 自 2021-08-19 為 Mitsubishi Electric Corporation。
- **適配度：中**：電網 DERMS 軟體公司（Strathclyde spin-out，Mitsubishi Electric 子公司）；軟體產品，但偏能源 OT，cloud／security 職務未驗證＝中。
- **申請難度：中**：本名在冊（3 列）；官方 JazzHR 明寫「There are no open positions at this time」（2026-11-23 快照）＝有贊助資格但缺職缺＝中。
- **簽證／搬遷**：本名在冊（3 列，含 GBM Graduate Trainee）；無 JD 可引；Taiwan passport 資格：未驗證
- **對口開放職缺**：無（官方 JazzHR 2026-11-23 原文：There are no open positions at this time；只作當日快照）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：官方 careers 仍介紹與 University of Glasgow Software Engineering 合辦的 Graduate Apprentice Scheme，但不是現有職缺。
- **備註**：Mitsubishi Electric 集團其他在冊法人不另計（第一節附表）。
- **來源**：verified12.md #12；smartergridsolutions.applytojob.com；strath.ac.uk spin-out 名錄；CH SC344695；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 16. Unit4 (UNIT4 BUSINESS SOFTWARE LIMITED)（#23）｜Harrogate

- **公司簡介**：CH 01737985 Active（前名 Agresso Limited），SIC 62020／62090；註冊處現為 London 5 Churchill Place。
- **適配度：中**：ERP／企業軟體產品商（產品公司，不是 ERP 導入顧問）；官方 API 的 Cloud Operations Engineer 在 Lisbon，英國可見職缺是業務／策略類＝英國的對口方向未驗證＝中。
- **申請難度：中**：本名在冊（2 列）；英國沒有確認開放的對口職缺；Harrogate 站點現況部分未驗證（CH 註冊地已改 London）＝中。
- **簽證／搬遷**：本名在冊（2 列）；英國職缺無 SC 原文；Taiwan passport 資格：未驗證
- **對口開放職缺**：英國：未找到對口職（Cloud Operations Engineer 在 Lisbon，不計）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：verified12 把 #23 計命中但另附 conditional 備註（Harrogate 站點）；本報告計命中（法人名完全一致），站點列入第八節。
- **來源**：verified12.md #23；api.smartrecruiters.com/v1/companies/unit44/postings；unit4.com/our-locations/uk-ireland；CH 01737985；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 17. Nationwide Building Society（#19）｜Swindon（Nationwide House）

- **公司簡介**：Mutuals Public Register 355B，總部 Nationwide House, Pipers Way, Swindon。
- **適配度：中**：建屋互助會（傳統金融，規則 N：適配上限中）；官方職缺首頁未見 cloud／DevOps／security 職，先前索引的 Lakehouse Platform Operations、Penetration Tester 都已 404＝中（有職能證據，無現職）。
- **申請難度：中**：本名在冊；官方 jobs 站是 SPA，只讀到首頁，深頁未檢查＝有贊助資格但缺確認職缺＝中。
- **簽證／搬遷**：本名在冊（1 列）；無現行 JD 可引；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（首頁可見職缺不對口；深頁與職系篩選未檢查）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：已 404 的舊職只作職能證據（規則 P）。
- **來源**：verified12.md #19；nationwide-jobs.co.uk/jobs/；mutuals.fca.org.uk 6023；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 18. Asset55 (ASSET55 LTD)（#21）｜Sunderland

- **公司簡介**：CH 08335379 Active，The Beam, Sunderland。
- **適配度：中**：小型軟體公司；技術棧與職缺方向未驗證、規模小（規則 3-6）＝中。
- **申請難度：中**：本名在冊；官方職缺頁可見文字「No current vacancies」（2026-11-23 快照）＝有贊助資格但缺職缺＝中。
- **簽證／搬遷**：本名在冊（1 列）；Taiwan passport 資格：未驗證
- **對口開放職缺**：無（官方原文：No current vacancies；只作當日快照）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：頁面 HTML 藏有 2024-11-22 的 Delivery Engineer 連結（CSS 全斷點隱藏），不列開放（verifier）。
- **來源**：verified12.md #21；assetfiftyfive.com/career/；CH 08335379；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 19. CGI IT UK (CGI IT UK Limited)（#4）｜Edinburgh（40 Princes St）

- **公司簡介**：CGI 的英國主要法人，CH 00947968 Active，註冊於 London；Edinburgh 只出現在 technical graduate 地點清單。
- **適配度：中**：IT 服務／公部門數位交付顧問（規則 3-6：顧問屬中）；官方 2027 Technical Graduate 有 Software, Cloud & Infrastructure 與 Cyber Security 兩條線。
- **申請難度：中**：CGI IT UK Limited 本名不在冊（只有 Logica Ltd t/a CGI 等姊妹法人，規則 A/C 不計）；有官方招聘管道＝有管道無贊助＝中。
- **簽證／搬遷**：sponsors_latest.csv（2026-11-19 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中（Logica Ltd t/a CGI、CGI AXIS LTD、Concert (CGI) Limited）；njoyn JD 被擋，SC 未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：Technical Graduate - Technology Engineer - Software, Cloud & Infrastructure 2027（J1026-0240）；Technical Graduate - Cyber Security 2027（J1026-0229）；個別地點與 JD 未檢查
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：2027 graduate 屬 2027 年入職，與 Dennis 2028-09 畢業不合（規則 3-3，時程另列）。
- **備註**：同頁 Belfast Cloud Engineer graduate 屬 CGI Space, Defence & Intelligence，不是 Edinburgh 職，也不是 SC 明文。
- **來源**：verified12.md #4；cgi.com/uk/en-gb/careers/early-careers/graduates/technical-graduates；CH 00947968、01631639；sponsors_latest.csv（2026-11-19 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 20. NFQ Technologies (UAB NFQ Technologies)（#29）｜Kaunas

- **公司簡介**：Kaunas 的軟體服務公司，UAB NFQ Technologies（135867375，Brastos g. 15）；部分業務改用 Gradion 品牌，法人關係未驗證。
- **適配度：中**：數位產品／平台工程服務公司；官方職缺是 Senior Software Engineer (PHP) 等，沒有 DevOps／SRE／security 職（規則 O：PHP 為核心）＝中。
- **申請難度：中**：有確認開放的後端職作為入口（規則 D），但 PHP 職不算 Dennis 的確認對口（規則 O），語言與搬遷字樣未找到＝中。
- **簽證／搬遷**：立陶宛屬 EU：EU Blue Card 只標「相關」（規則 J）；搬遷／簽證字樣未找到（個別 Lever JD 未全開）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Senior Software Engineer (PHP)（Vilnius/Kaunas Hybrid）；Senior Software Engineer & Team Lead、Team Lead Engineering、Head of Engineering
- **語言**：language not verified（Lever 個別 JD 未全開）
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **來源**：verified12.md #29；nfq.com/career/；jobs.lever.co/nfq/；nfq.com/terms-conditions/

### 21. Tridens (Tridens d.o.o.)（#31）｜Maribor

- **公司簡介**：2024 年在 Maribor 設新 HQ（Titova cesta 2a）；AJPES 登記未查。
- **適配度：中**：billing／EV-charging 平台軟體公司；官方職缺是 Java Spring Boot、Angular、Oracle BRM，沒有 DevOps／SRE／security 職（規則 O：Java 為核心）＝中。
- **申請難度：中**：有確認開放的後端職作為入口（規則 D），英語明寫（Communication level English），但不算 Dennis 確認對口、搬遷字樣未找到＝中。
- **簽證／搬遷**：斯洛文尼亞屬 EU：EU Blue Card 只標「相關」（規則 J）；搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證
- **對口開放職缺**：Java Spring Boot Developer（Maribor；AWS／Docker／Jenkins 為加分）；Angular Developer；Oracle BRM Developer
- **語言**：官方 Java 職要求「Communication level English」；未見斯洛文尼亞語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **來源**：verified12.md #31；tridenstechnology.com/careers/；…/career/java-spring-boot-developer/

### 22. NEC Software Solutions UK (NEC SOFTWARE SOLUTIONS UK LIMITED)（#24）｜Wrexham（官方據點）／Hemel Hempstead（登記）

- **公司簡介**：NEC Corporation 的英國公部門軟體法人，CH 00968498 Active；官方 contact 列 Wrexham Office 3D, Redwither Business Park。
- **適配度：中**：公部門軟體公司（警政、救護、地方政府）；可讀的對口職偏資安架構治理與 Oracle PL/SQL 開發，與 Dennis 的 Go／雲端平台棧不直接＝中。
- **申請難度：高**：本名在冊，但三則已讀對口 JD 全部要求既有工作權：Networks Cyber Security Engineer（入職後申請 SC＋NPPV，且「pre-existing right to work」）、Security Architect（「pre-existing right to work and travel within the UK」）、Senior Software Developer（同句，原文寫「within the EU」）；依規則 T 全部不算對口，再依規則 E 第二句＝高。
- **簽證／搬遷**：本名在冊（1 列，Hemel Hempstead；Wrexham 為同一法人官方站點）；所有已讀對口 JD 都要求既有工作權＝實際上不擔保；Taiwan passport 資格：未驗證
- **對口開放職缺**：Networks Cyber Security Engineer（2026-11-02 刊登，SC＋NPPV＋既有工作權，規則 T，不計）；Security Architect（Remote UK，2026-10-23，既有工作權，不計）；Senior Software Developer（Bracknell，2026-11-06，Oracle PL/SQL，既有工作權，不計）；Wrexham 本地只有 Customer Service Advisor（非對口）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：Security Architect 與 Senior Software Developer 的 JD 由分析者 2026-11-28 讀取（verifier 未展開），只讀、未申請。
- **備註**：Senior Software Developer 的 ATS 薪資欄單位顯示異常（「monthly」），本報告不引用。
- **備註**：既有工作權條款是否適用 NEC 所有職缺：未驗證；本報告只依三則已讀 JD 判斷。
- **來源**：verified12.md #24；jobs.smartrecruiters.com/NECSWS/744000159073119、/744000157423635、/744000159909691（後兩則分析者 2026-11-28 讀取）；necsws.com/contact/；CH 00968498；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 23. LV= (Liverpool Victoria Financial Services Limited)（#18）｜Bournemouth／Poole（County Gates）

- **公司簡介**：LV= 集團主體，CH 12383237 Active，County Gates, Bournemouth BH1 2NF。
- **適配度：中**：人壽／退休金互助保險（傳統金融，規則 N：適配上限中）；官方 Cloud Operations Lead（Azure PaaS、AKS、SRE、Terraform、Azure DevOps）是對口職。
- **申請難度：高**：本名與集團名都不在冊（LV Care Ltd 是無關公司）；唯一對口職明寫「we are unable to offer Skilled Worker Visa Sponsorship for this role」（規則 E／K）＝無贊助且對口職明文排除＝高。
- **簽證／搬遷**：不在冊；Cloud Operations Lead 明文不提供 Skilled Worker sponsorship、須已有英國工作權；Taiwan passport 資格：未驗證
- **對口開放職缺**：Cloud Operations Lead（1164，Bournemouth／Hitchin hybrid，2026-11-11 刊登；官方欄位 Internal Advertising End Date 25 Nov 2026；明文不擔保，不計）；Solution Architect（20 hours per week，兼職，不計）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：Internal Advertising End Date 不一定是對外截止日（verifier）；分析日 2026-11-28 頁面仍可開啟。
- **來源**：verified12.md #18；jobsportal.lv.com/vacancies/1164/cloud-operations-lead.html；lv.com 公司治理頁；CH 12383237、11797907；本名登記冊查無（sponsors_latest.csv，2026-11-19 版）

### 24. Crick Software (CRICK SOFTWARE LIMITED)（#26）｜Northampton

- **公司簡介**：Northampton Moulton Park 的 edtech 公司，CH 03263172 Active。
- **適配度：中**：教育軟體公司（edtech）；技術棧未驗證、規模小（規則 3-6）＝中。
- **申請難度：高**：本名不在冊＋官方原文「We do not have any current vacancies」（2026-11-23 快照）＝無贊助且無職缺＝高。
- **簽證／搬遷**：不在冊；Taiwan passport 資格：未驗證
- **對口開放職缺**：無（官方原文：We do not have any current vacancies；只作當日快照）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：Northampton 最後一次重試只產出這一列；brief 要求之後停止重試（第八節）。
- **來源**：verified12.md #26；cricksoft.com/about-us/careers/；CH 03263172；本名登記冊查無（sponsors_latest.csv，2026-11-19 版）

### 25. Desana (Desana Network Limited)（#6）｜Edinburgh

- **公司簡介**：Edinburgh 的工作空間平台，CH SC527495 Active，14 Albany Street。
- **適配度：中**：workspace booking 軟體平台（scout 的 edtech 定位未由官網證實）；技術棧與職缺方向未驗證＝中。
- **申請難度：高**：本名不在冊；官方 Notion careers 只取得殼頁（未檢查，依規則 3-1 不寫沒有職缺）＝無贊助且無確認職缺＝高。
- **簽證／搬遷**：不在冊；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（Notion careers 本文未載入）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **來源**：verified12.md #6；desana.notion.site/careers-at-desana；CH SC527495；本名登記冊查無（sponsors_latest.csv，2026-11-19 版）

### 26. Robotical (Robotical Ltd.)（#7）｜Edinburgh

- **公司簡介**：Edinburgh 的教育機器人公司（Marty the Robot），CH SC524016 Active。
- **適配度：中**：教育機器人硬體＋軟體公司（規則 N：以硬體為主者判中）；verifier 未讀到對口職。
- **申請難度：高**：本名不在冊＋官方 careers 沒有對口職缺＝高。
- **簽證／搬遷**：不在冊；careers 頁未見 SC／國籍要求；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（官方 careers 已檢查）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **來源**：verified12.md #7；robotical.io/careers/；CH SC524016；本名登記冊查無（sponsors_latest.csv，2026-11-19 版）

### 27. Edrington (The Edrington Group Limited)（#9）｜Glasgow（100 Queen St）

- **公司簡介**：Macallan、Highland Park 的母集團，CH SC036374 Active，註冊於 Glasgow 100 Queen Street。
- **適配度：低**：烈酒集團（規則 N）；官方 ATS 22 筆中沒有 Glasgow 對口 IT 職，IT Service Desk 在 Singapore，IT Graduate 頁 403（未檢查）＝Glasgow IT 職證據不足，依規則 3-2 判低（資料不足）。
- **申請難度：中**：本名在冊（3 列）；有官方 ATS 但缺對口職缺＝中。
- **簽證／搬遷**：本名在冊（3 列，含 GBM Graduate Trainee）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到 Glasgow 對口職；IT Graduate 頁未檢查
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：Maps 列「Edrington Distillery」（Drumchapel，分類 Distillery）與招聘地（G1 3DN）不同，兩者並陳。
- **備註**：若 IT Graduate 頁可讀且有 Glasgow cyber／cloud 職，適配可升為中。
- **來源**：verified12.md #9；careers.edrington.com；CH SC036374；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 28. Whyte & Mackay (Whyte and Mackay Limited)（#13）｜Glasgow（St Vincent Plaza）

- **公司簡介**：CH SC014456 Active，Glasgow Head Office。
- **適配度：低**：威士忌公司（規則 N）；唯一 IT 職 Network Administrator 已 410（規則 P），屬管理式 IT＝低。
- **申請難度：中**：本名在冊；有官方 Teamtailor 但缺對口職缺＝中。
- **簽證／搬遷**：本名在冊（1 列）；Taiwan passport 資格：未驗證
- **對口開放職缺**：無對口開放職（Network Administrator 已 410）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：scout 引的搜尋摘錄說舊職要求 UK right to work，但官方頁已 410，本報告不引用。
- **來源**：verified12.md #13；careers.whyteandmackay.com；CH SC014456；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 29. AG Barr (A.G. BARR P.L.C.)（#11）｜Cumbernauld

- **公司簡介**：IRN-BRU 製造商，CH SC005653 Active。
- **適配度：低**：飲料製造（規則 N）；官方 vacancies 沒有 IT／cloud／security 職（Cyber Engineer 只見於聚合站，不計）＝資料不足，判低。
- **申請難度：中**：本名在冊；有官方職缺頁但缺對口職缺＝中。
- **簽證／搬遷**：本名在冊（1 列）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（官方 vacancies 已檢查；Head of Engineering 疑為工廠工程，未核實）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **來源**：verified12.md #11；agbarr.co.uk/careers/vacancies；CH SC005653；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 30. schuh (SCHUH LIMITED)（#5）｜Livingston

- **公司簡介**：蘇格蘭鞋類零售商，CH SC125327 Active，Livingston Deans Industrial Estate。
- **適配度：低**：鞋類零售／電商（規則 N）；Head Office 職缺清單未載入，第三方的 Senior Infrastructure Engineer 不計＝IT 職證據不足，判低（資料不足，規則 3-2）。
- **申請難度：中**：本名在冊（2 列）；Dayforce 清單 JS／API 403（未檢查）＝有贊助資格但缺確認職缺＝中。
- **簽證／搬遷**：本名在冊（2 列）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（Dayforce Head Office 清單為 JS）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：schuh.co.uk 被 Cloudflare 擋（未檢查，不視為停業）。
- **來源**：verified12.md #5；careers.schuh.co.uk；CH SC125327；sponsors_latest.csv（2026-11-19 版，本報告重查命中）

### 31. Diageo (Diageo Scotland Limited)（#14）｜Edinburgh（Edinburgh Park）

- **公司簡介**：Edinburgh Park 據點法人 Diageo Scotland Limited（SC000750 Active）；母公司 Diageo plc（00023307）。
- **適配度：低**：烈酒集團（規則 N）；Edinburgh 現有 3 筆職缺都非技術職，OT Cyber Resilience Lead 已下架（postingAvailable=false），官方 D&T 據點寫 Budapest／Bangalore＝Edinburgh IT 職證據不足，判低。
- **申請難度：中**：Diageo Scotland Limited 不在冊、只有母公司 Diageo plc（London）在冊（規則 A/C 不計）；有官方 Workday＝有管道無贊助＝中。
- **簽證／搬遷**：sponsors_latest.csv（2026-11-19 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中（Diageo plc）；Taiwan passport 資格：未驗證
- **對口開放職缺**：無對口開放職（OT Cyber Resilience Lead 已下架；Operational Technology Lead 在 Alloa，不計）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **來源**：verified12.md #14；diageo.wd3.myworkdayjobs.com/en-US/Diageo_Careers；CH SC000750、00023307；sponsors_latest.csv（2026-11-19 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 32. Sony Europe (Basingstoke, Viables)（#20）｜Basingstoke

- **公司簡介**：SONY EUROPE LIMITED（15698470，2024 設立）與 SONY EUROPE B.V.（FC035527／BR020612）；舊 02422874 已於 2019 轉換關閉。
- **適配度：低**：電子產品企業辦公室；Basingstoke 的工程職缺未讀到（Workday 清單未檢查），IT 職證據不足，判低（規則 3-2）。
- **申請難度：中**：Sony Europe Limited 與 Sony Europe B.V 都在冊但都在 Weybridge，Basingstoke 招聘法人未獨一確定（規則 C，條件式）；有官方 Workday＝中。
- **簽證／搬遷**：sponsors_latest.csv（2026-11-19 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中（Sony Europe Limited 3 列、Sony Europe B.V 2 列，Weybridge）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（Workday API 400、列表為 SPA）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **備註**：Run 8 的 Firesprite（Sony Interactive Entertainment 體系）是不同法人；本列當作新雇主。
- **來源**：verified12.md #20；sonyglobal.wd1.myworkdayjobs.com/en-US/Sony_Europe_Careers；CH 15698470、FC035527；sponsors_latest.csv（2026-11-19 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 33. Scotmid Co-operative (Scottish Midland Co-operative Society Limited)（#15）｜Newbridge（Edinburgh）

- **公司簡介**：Mutuals Public Register 2059RS，Hillwood House, Newbridge；子公司 SCOTMID HOLDINGS LIMITED（SC812599）。
- **適配度：低**：零售合作社（規則 N）；官方 Head Office 頁只證實有 IT 部門，沒有具體 IT 職＝資料不足，判低。
- **申請難度：高**：本名（含 Scotmid Holdings）不在冊＋申請入口清單未檢查＝無贊助且無確認職缺＝高。
- **簽證／搬遷**：不在冊；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（myscotmid.coop 申請入口為 JS）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-28）距開學 277 天、距畢業 643 天
- **來源**：verified12.md #15；scotmid.coop/careers/head-office/；mutuals.fca.org.uk 7648；本名登記冊查無（sponsors_latest.csv，2026-11-19 版）

---

## 七、跨輪比較：Run 1–Run 12

### 十二輪規模

| 輪次 | 名單（列） | 已評級 | 排除／存疑 | 代表 |
|---|---:|---:|---:|---|
| Run 1 | 30 | 21 | 9 | Bellrock、Texaport（高／中） |
| Run 2 | 38 | 35 | 3 | Spire、Clyde Space（高／中） |
| Run 3 | 40 | 33 | 7 | Scott Logic、Made Tech（高／中） |
| Run 4 | 39 | 36 | 3 | FanDuel（高／低） |
| Run 5 | 41 | 41 | 0 | Hadrian NL（高／低） |
| Run 6 | 38 | 33 | 5 | Monzo 等 5 家高／低 |
| Run 7 | 35 | 32 列／31 雇主 | 3 | Elliptic、Darktrace、Chainalysis（高／低） |
| Run 8 | 36 | 36 列／36 雇主 | 0 | ENSEK（高／低，有條件） |
| Run 9 | 32 | 29 列／29 雇主 | 3 | Aiimi、Bloomreach、ESET、Infobip（高／中） |
| Run 10 | 34 | 33 列／33 雇主（UoE 與 Run 8 重複） | 1 | Ripjar（高／低，有條件） |
| Run 11 | 32 | 32 列／32 雇主 | 0 | DataVita（高／中，未持牌）；Levi9、Hornbill、Vega IT（高／中） |
| **Run 12** | **33** | **33 列／33 雇主** | **0** | **Current Health、SSTL（高／低，有條件）；Hostinger（高／低）** |
| 合計 | 428 列 | — | — | 以列計，不是不重複雇主數 |

**英國難度「低」累計**：
- Run 4：FanDuel
- Run 6：五家
- Run 7：三家
- Run 8：ENSEK（高／低）、OQC（中／低）
- Run 9：無
- Run 10：Ripjar（高／低，有條件）、Next（中／低，有條件）
- Run 11：無
- **Run 12：Current Health、SSTL（皆 高／低，有條件）**。YBS 與 Arnold Clark 在核實日（11-23）會是 中／低，但兩職在分析日（11-28）已下架，依規則 P 判中。

### 更新後英國 Top 10（十二輪合併，英國且有贊助者）

方法：沿用 Run 2–11。適配優先，同級看贊助與確認開放的對口職缺；規則 W：本輪新的 高／低 排在前幾輪的 高／中 之前；同為 高／低 時依證據強度排序（明寫可擔保 > 有條件的低）；前幾輪條目之間的相對順序不變。

本輪兩個新的 高／低 都是「本名在冊＋官方 JD 全文確認的對口職」，證據強度與 ENSEK、Ripjar 同級（同級時新條目排在舊條目之後，比照 Run 10 Ripjar 排在 ENSEK 之後），但都**強於 Starling Bank**（「Engine 法人未驗證」）。因此兩者都排在 Starling 之前；Top 10 只剩一個位置，給 Current Health，SSTL 與 Starling 進候補。

| 總排名 | 公司 | 輪次 | 適配／難度 | 理由 |
|---:|---|---|:-:|---|
| 1 | Monzo | Run 6 | 高／低 | 職缺明寫「We can sponsor visas」 |
| 2 | FanDuel | Run 4 | 高／低 | 法人一致＋初階後端職，有條件 |
| 3 | GoCardless | Run 6 | 高／低 | SRE II，有條件 |
| 4 | Checkout.com | Run 6 | 高／低 | Cloud Security/SIEM/Golang，有條件 |
| 5 | Elliptic | Run 7 | 高／低 | Lead DevOps＋Senior SWE-Data，有條件 |
| 6 | Darktrace | Run 7 | 高／低 | Platform Engineer (Kubernetes)，有條件 |
| 7 | Chainalysis UK | Run 7 | 高／低 | Senior SWE (UK Remote)，有條件 |
| 8 | ENSEK | Run 8 | 高／低 | Senior Platform Engineer，Ensek Ltd 直接命中，有條件 |
| 9 | Ripjar | Run 10 | 高／低 | DevOps Engineer（Terraform/K8s/AWS/SIEM），Ripjar Ltd 直接命中，有條件 |
| 10 | **Current Health** | **Run 12** | **高／低** | **Software Engineer II（AWS、Python／TS），Current Health Limited 直接命中，有條件（JD 未點名法人）** |

- **進出**：**進** Current Health（第 10）；**出** Starling Bank（Run 6，高／低，有條件）→ 第二候補。前 9 名不變。
- **為什麼 Current Health 排在 SSTL 之前**（判斷，差距不大，規則 3-5；第十節）：兩者都有條件。SSTL 是太空／國防相關製造商，同公司另一資安職明寫 SC＋5 年居英，本職是否會在錄取後追加國安審查無法排除（規則 L 的精神），且 2147 已刊登 85 天、職缺板保留很舊的職缺；Current Health 是純軟體平台，JD 沒有任何審查字樣。若讀者更重視技術棧直接度（SIEM／IaC／K8s），SSTL 會排在 Current Health 之前，結果是 SSTL 第 10、Current Health 第一候補。
- **候補（節錄）**：
  - 第一候補：**SSTL**（Run 12，高／低，有條件）。
  - 第二候補：**Starling Bank**（Run 6，高／低，Engine 法人未驗證，有條件）。
  - 第三候補：**Version 1**（Run 6，高／低，規則 S 封閉集合，有條件）。
  - 其後依序（高／中）：Texaport、Spire、Proofpoint、Bellrock、AAC Clyde Space、Skyscanner、Scott Logic、Waracle、Made Tech、Wise、Rapid7、Pulsion、Encompass、Revolut、Kainos、Datactics、Data Intellect、Copper、Crypto Facilities、Amazon Development Centre Scotland、Aiimi、Epos Now、Connexin。
  - 再其後：OQC（中／低）、Barclays（中／低）、Next（Run 10，中／低，有條件）、JPMorgan／Lloyds（中／中）、Scottish Water、Met Office（中／中）、Run 10 的 Pulsant 與大學列（中／中）、Run 11 的 Siemens Energy、Rolls-Royce、Capgemini UK、Huawei R&D、Double Eleven、STAR-Dundee（中／中）。
  - **Run 12 新增（中／中，本名在冊）**，接在最後，依證據強度：Hello Games（有確認開放的接近職）、YBS（DevOps 11-23 開放、11-28 下架）、Arnold Clark（資安職 11-28 下架）、Allstate NI、Speech Graphics、Space Intelligence、Smarter Grid、Unit4、Nationwide、Asset55。
  - **不列候補**：NEC Software Solutions（中／高，規則 T，比照 Thales）；LV=（中／高，未持牌且明文不擔保）；William Grant（中／中，規則 C 條件式，比照 BGL／bet365）；CGI、Diageo、Sony（集團／條件式）。
- **敏感度**：
  - **SSTL**：若 Current Health 的 Software Engineer II 下架，SSTL 會補進第 10（反之亦然）。
  - **William Grant**：若 JD 點名 William Grant & Sons Ltd，會是 中／低（規則 N 上限），不進 Top 10。
  - **YBS／Arnold Clark**：若對口職重新上架，會是 中／低，接在 Next 之後。
  - **DataVita**（Run 11）：若 HFD DATAVITA LIMITED 日後出現在登記冊（本版仍查無），規則 W 討論仍待續。
  - Epos Now、Connexin、Aiimi 的敏感度（Run 9–10）仍未解決。
  - 本報告不推論。

### 歐洲（非英國）Top 10（十二輪合併）

方法：規則 Q（第 1 點：列內法人在官方擔保名單，或職缺／招聘頁明文 relocation／immigration support）。本輪最佳的 **Hostinger 是 高／低**（官方遠端「anywhere in the world」＋英語＋確認開放的對口職），但官方 visas／relocation 原文只在 C-level 職、不及於工程職；其餘 6 家沒有任何字樣；Taiwan 資格也未驗證。依規則 Q，它們不足以擠下已有 relocation 或官方名單證據的條目。**Top 10 與 Run 11 完全相同。**

| 排名 | 公司 | 輪次 | 地點 | 適配／難度 |
|---:|---|---|---|:-:|
| 1 | Hadrian Security | Run 5 | Amsterdam, NL | 高／低 |
| 2 | Picnic | Run 5 | Amsterdam, NL | 高／中 |
| 3 | bol | Run 5 | Utrecht, NL | 高／中 |
| 4 | ICEYE | Run 5 | Espoo, FI | 高／中 |
| 5 | Isar Aerospace | Run 5 | Ottobrunn, DE | 高／中 |
| 6 | Bolt | Run 4 | Tallinn, EE | 高／中 |
| 7 | Vinted | Run 4 | Vilnius, LT | 高／中 |
| 8 | Coolblue | Run 5 | Rotterdam, NL | 高／中 |
| 9 | Group-IB | Run 5 | Amsterdam, NL | 高／中 |
| 10 | Veriff | Run 4 | Tallinn, EE | 高／中 |

**候補**：
- **第一候補：Hostinger**（Run 12，Kaunas，高／低）：規則 W 會把新的 高／低 排在 高／中 之前，但規則 Q 的門檻（官方 relocation／visa 字樣）沒有達到，所以只列候補第一位。若 Hostinger 官方把 visa／relocation 句寫進工程職或公司層級頁，會依規則 W 進第 2 名，Veriff 退出。
- 現有：Synerise、Kentico、Nord Security、Bitdefender、Tresorit、UiPath、Bloomreach SK、ESET、Infobip Zagreb、Endava Timișoara、OPSWAT Timișoara、Workable Athens、Levi9、Hornbill、Vega IT。
- **Run 12 新增（高／中）**，接在 Vega IT 之後（規則 Q 第 2–4 點）：
  1. **ESTEN**（Košice）：DevOps Engineer 開放、mid-level and above（第 2 點），Go＋Kubernetes＋Helm（第 4 點最直接）；語言未寫。
  2. **Coinis**（Podgorica）：Senior 平台職開放（第 2 點），Cloudflare Workers／TS 棧；遠端限 EU timezones，非 EU。
  3. **Elitnet**（Kaunas）：DevOps 開放、同頁明寫英語（第 3 點），但「Kubernetes basics」顯示層級可能低於 Dennis 年資（規則 Q 排序備註）。
  4. **SiteGround**（Plovdiv）：Platform & DevOps 入口存在，但職缺列表未檢查。
- 之後依序：OpenText Cork、Einride、OutSystems、Talkdesk、Glovo、Myra、Feedzai、sennder、Zalando Dublin、Pipedrive、GlobalLogic、Honeycomb、Qualcomm Cork、Medtronic Galway；Accedia、Ciklum、GoTo Hungary（中／中）、Centric Iași（Run 10，中／中）、Run 11 的 Deutsche Telekom IT Solutions Debrecen、Amdaris Chișinău、DualSOFT Niš（中／中）、**Run 12 的 NFQ Technologies Kaunas、Tridens Maribor（中／中）**、Printful（中／高）、Comtrade、Cosylab、Outfit7（中／高）；Run 10 的 EPSILONNET、Sorsix、G+D Netcetera、Ministry of Programming 與 Run 11 的 Profico（中／高）接在最後。

### 與 Run 11 相比：本輪改變了什麼

1. **英國 Top 10 有變動**：Current Health 進第 10，Starling Bank 退為第二候補；SSTL 是第一候補。這是 Run 10 以來第一次有新的英國 高／低。
2. **歐洲 Top 10 不變**，但第一次在東歐找到 高／低（Hostinger，官方遠端＋英語）；規則 Q 的官方 relocation／visa 字樣仍然只出現在非工程職。
3. 登記冊更新為 2026-11-19 版並獨立重查：17 雇主／26 列；verifier 的 17 個命中與 4 個條件式／集團判定全部正確。
4. 第一次覆蓋 Guildford（遊戲、衛星）、Bournemouth（保險）、Swindon／Bradford（建屋互助會）、Wrexham、Derry：在冊比例高（C 組 11 家有 8 家本名命中），但兩則對口職在 5 天內下架，顯示快照效期短（規則 P）。
5. 蘇格蘭食品飲料／零售 HQ（B 組）第一次有官方雲端平台職（William Grant），但規則 N 與 C 使它停在 中／中；其餘威士忌／飲料／零售列都是 低。
6. **沒有新增規則**。

---

## 八、未驗證／缺口

1. **個別職缺贊助**：只有 LV= 明寫不擔保、NEC 明寫既有工作權；其他英國職缺沒有贊助字樣，CoS 一律未驗證。
2. **官方職缺未確認或未讀**：
   - Current Health、Hello Games、Hostinger、Elitnet、ESTEN、Coinis、NFQ、Tridens 的職缺頁沒有刊登日（規則 P 無法計天數）。
   - Current Health 與 SSTL 的 高／低 都「有條件」：Current Health 的 JD 未點名法人；SSTL 的後續國安審查未驗證。
   - YBS 與 Arnold Clark 的對口職 11-28 已下架；兩家其他 Technology 職缺未完整列舉（未檢查）。
   - NEC 的既有工作權條款是否適用所有職缺：未驗證（只讀三則）。
3. **JS／被擋的職缺板（未檢查）**：
   - 英國：schuh Dayforce、Desana Notion、Scotmid 申請入口、Edrington IT Graduate 頁（403）、Nationwide 深頁、Sony Workday、Allstate Workday、CGI njoyn、LV= 第 2 頁、unit4.com（429）。
   - 歐洲：SiteGround Platform & DevOps 列表、NFQ 個別 Lever JD、黑山官方工作許可頁（驗證牆／超時）。
4. **聘用法人與登記**：
   - 條件式（規則 C）：William Grant（SC131772／SC134248 未點名；Distillers Limited 不在冊）、Sony Europe（Basingstoke 法人未定）。
   - 集團（規則 A）：CGI（Logica Ltd t/a CGI 等）、Diageo（Diageo plc）。
   - #3 Space Intelligence：登記冊名稱沒有「Ltd」，依 verifier 以 Edinburgh 與官網公司編號對應。
   - #23 Unit4：CH 註冊地已改 London，Harrogate 站點現況部分未驗證。
   - #25 Allstate NI：登記冊城鎮 Belfast；Derry 為同一法人官方站點。
   - 歐洲各列的國家登記（立陶宛 Registrų centras、斯洛伐克 ORSR、斯洛文尼亞 AJPES、保加利亞、黑山）全部未查；Hostinger（兩個 UAB）、SiteGround、Coinis 的招聘法人未定；NFQ 與 Gradion 的關係未驗證。
5. **歐洲**：
   - 搬遷、工作許可、EU Blue Card、實際工作語言、Taiwan passport 資格全部未驗證。
   - brief 要求「找明文 relocation／visa 字樣」：只有 Hostinger 的 C-level 職有；工程職都沒有。
   - Brașov 沒有產出列（Miele Software Technology 無明確 Maps place，以 NFQ Kaunas 替補，Kaunas 因此 3 列）；Varna 沒有產出列。
6. **範圍：B 組名錄（最後一次重試）**：
   - St Andrews 與 Stirling spin-out 名錄再次為空 → **依 brief 停止重試**。Heriot-Watt 只有 geo-energy spin-out（非 cloud／security）。Strathclyde 只產出 Smarter Grid Solutions；Lupovis 在 Maps 無 place。
   - BrewDog Ellon HQ 無 place page；Perth 沒有有 IT 證據的食品飲料／零售總部。
7. **範圍：C 組**：
   - **V1 Technologies（Livingston）**：scout 因 Run 6 已收錄（同 FTID）刪除，不在 33 列，本報告**不評級**。
   - **Northampton 最後重試**只產出 Crick Software（中／高，官方無職缺）；依 brief 之後不再重試。
   - Atom bank Durham 無匹配；Huddersfield 未搜；AA Basingstoke、Web Alliance 為 scout 備選未用。
8. **其他**：
   - LinkedIn、Indeed、Otta、Wellfound 本輪都未登入深查。
   - 各公司 2027–28 的 graduate 招募日期全部未驗證。
   - SSTL 所有權細節頁 404（verifier），所有權與國安敏感性本報告不推論。

---

## 九、verified12 的不一致與需注意之處

1. **列數**：scout12-handoff「檔案」段寫 scout12.tsv 34 列（A8），同檔「更新」段與 verified12 寫 33 列（A7，V1 Technologies 已刪）。TSV 實際 33 列，本報告以 33 為準。
2. **verified12.md 的兩套計數**：開頭「總覽」是全 33 列（17 命中）；結尾「計數（by-id）」只涵蓋 #17–#33（17 列已確認營運、7 命中），沒有標明是 B 批次範圍，容易誤讀為全表。本報告以 verified12.json 全 33 列重算，結論一致。
3. **#23 Unit4 的標記**：sponsor_hit 為 true，但 conditional 欄另有 Harrogate 站點備註；本報告計命中（法人名完全一致），站點列入第八節。
4. **#22 YBS DevOps Engineer - Enterprise**：verifier 2026-11-23 開放；分析日 2026-11-28 該 URL 回 HTTP 404。依規則 P 不計開放，YBS 由（核實日的）中／低改判中／中。
5. **#10 Arnold Clark Cyber Security Consultant**：verifier 2026-11-23 開放；分析日 2026-11-28 該 URL 回 HTTP 410，careers 首頁只見 Security Guard。同上，改判中／中。
6. **#24 NEC 未展開的 JD**：verifier 說 Security Architect 與 Senior Software Developer 的 JD 未展開；分析者 2026-11-28 讀取，兩則都寫「pre-existing right to work」（Senior Software Developer 原文是「within the EU」，疑為範本誤植，照錄不解釋），且 Senior Software Developer 是 Oracle PL/SQL 職。因此 NEC 判 中／高（規則 T／E）。
7. **#2 Current Health 的來源 URL**：verifier 引的 application-software-engineer-ii 頁只有申請表；職缺全文在 currenthealth.com/careers/（分析者 2026-11-28 讀取，內容與 verifier 描述一致）。
8. **#17 SSTL**：verifier 的 2147 描述與分析者 2026-11-28 重讀一致（沒有 SC）；jobs.json 另有 2026-11-27 新刊的 Corporate Security Manager（核實日之後，未讀）。職缺板保留 2026-04 的舊職，刊登天數只能照計（規則 P）。
9. **#3 Space Intelligence 的登記名**：登記冊是「Space Intelligence」（無 Ltd）；verifier 已在 gaps 註明。本報告同意命中，但列入第八節。
10. **登記冊版本與列數**：verified12 註明 2026-11-19 版但沒有記列數；本報告計得 142,945 資料列（142,946 行含表頭）。Run 11 用的 2026-11-12 版是 142,998 資料列，兩版不同，跨輪比較列數時要注意。
11. **scout 與 verifier 對 Whyte & Mackay 舊職的狀態**：scout 記 404，verifier 記 410；兩者都表示已下架，不影響評級。scout 引的「UK right to work」只是搜尋摘錄，本報告不引用。

---

## 十、判斷與揭露（無新增規則）

1. **Current Health 判 高／低（有條件）**：
   - 適配高：產品本身是自家軟體平台（比照規則 R 對 fintech 的處理，healthtech 平台也視為軟體業）；Software Engineer II 要求 AWS 與 Java／Python／TypeScript 任一，Dennis 的 Python／TS／AWS 可直接對應（規則 O 不適用，因為 Java 不是唯一核心）。
   - 難度低：本名在冊＋確認開放的對口職；「有條件」是因為 JD 沒有點名法人（比照 FanDuel、ENSEK）。
2. **SSTL 判 高／低（有條件）**：
   - 適配高：規則 N 對衛星科技公司依職缺判斷，2147 是雲端資安基礎設施職（比照 Run 5 ICEYE、Isar）。
   - 規則 T 只套 2145（SC＋5 年居英），不推及 2147（比照 Run 11 Rolls-Royce）。
   - 「有條件」：太空／國防相關業者的錄取後審查未驗證；2147 已刊登 85 天。
3. **英國 Top 10 的第 10 名給 Current Health 而不是 SSTL**：屬判斷（規則 3-5），理由見第七節；另一合理排法是 SSTL 第 10。兩者都強於 Starling（Engine 法人未驗證），所以 Starling 不論哪種排法都會退出。
4. **Hostinger 判 高／低 但不進歐洲 Top 10**：Run 2 量表三項（對口職、英語、遠端或搬遷路徑）都有官方原文，所以判低；但規則 Q 的 Top 10 門檻是官方 relocation／visa 字樣，Hostinger 的字樣只在 C-level 職，verifier 也明說不可推及。「anywhere in the world」是遠端選項，不是簽證支援；從台灣或英國遠端受僱的法律安排未驗證。
5. **YBS 與 Arnold Clark 依分析日判 中／中**：核實日兩職都開放，若以 11-23 計會是 中／低（Arnold Clark 有條件，因為職缺偏 GRC 顧問）。本報告依 Run 11 做法，職缺效期以分析日計（規則 P）。
6. **NEC 判 中／高**：三則已讀對口 JD 都要求既有工作權（規則 T），依規則 E 第二句判高；適配只給中，因為可讀的職缺是資安架構治理與 Oracle PL/SQL，不是 Dennis 的 Go／雲端平台棧。若其他未讀 JD 沒有該條款，會改為 中／中。
7. **LV= 判 中／高**：未持牌已是高的條件之一；唯一對口職又明文不擔保（規則 E／K）。適配受規則 N 限制為中（傳統保險互助）。
8. **William Grant 判 中／中**：規則 N 上限中；規則 S 不成立（SC134248 不在冊），規則 C 阻止評低。這是本輪唯一有官方截止日的對口職。
9. **Hello Games 判 中／中**：Build Engineer 要求 4 年以上專職 build engineer 經驗、Junior Programmer 要求 C++，Dennis 個人檔沒有直接對應（規則 B 的精神）；若把 Build Engineer 視為 DevOps 對口，會是 中／低。
10. **純軟體但沒有職缺證據的公司判中**（Speech Graphics、Space Intelligence、Smarter Grid、Asset55、Allstate NI、Desana、Crick）：依規則 3-6，沒有工程職稱證據者判中（比照 Run 11 Double Eleven、STAR-Dundee）。
11. **食品飲料／零售 HQ 判低**（Edrington、Whyte & Mackay、AG Barr、schuh、Diageo、Scotmid、Sony）：本業非軟體（規則 N），沒有已核實的對口 IT 職，依規則 3-2 以「資料不足」判低；職缺清單未檢查者依規則 3-1 不寫沒有職缺。
12. **ESTEN、Coinis、Elitnet、SiteGround 判 高／中**：都有官方對口職或入口，但至少缺一項（語言未寫、遠端範圍受限或未說明、搬遷字樣未找到）。ESTEN 的「Office / Remote」沒有說明遠端範圍，不當作明確遠端路徑。
13. **NFQ、Tridens 判 中／中**：職缺以 PHP／Java 為核心（規則 O），只算入口（規則 D）。
14. **英國列與歐洲列混排**：第四節排名表把英國與歐洲列放在同一張表（同 Run 7–11），但兩者適用不同的難度量表，跨區比較只供參考。
15. **分析者補查**：見檔頭清單（2026-11-28，只讀、未聯絡公司、未申請）；結果已寫入第六節與第九節。
16. **日期**：核實檢查日 2026-11-23，分析日 2026-11-28；職缺「已過期」與天數一律以 2026-11-28 計。

本輪所有判斷都能用 Run 1–11 的規則（3-1～3-6、A–W）處理，**沒有新增規則**（若需要，會從 X 開始編號並揭露）。
