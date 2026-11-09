# 第十輪組織（Run 10）：蘇格蘭北部與東部（Highlands／Islands、Moray、Fife、Perth）＋ 蘇格蘭大學 IT／RSE／HPC、資料中心、電信 ＋ 英國未覆蓋城市（Warwick／Leamington、Leicester、Norwich、Hull、Cheltenham、Martlesham）＋ 希臘／羅馬尼亞／北馬其頓／波士尼亞——適配度與申請難度評級報告

- 報告日期：2026-11-09（Asia/Taipei）
- 資料來源：`brief.md`（Run 10 參數）、`scout10.tsv`（34 筆）、`audit.md`、`scout10-handoff.md`、`verified10.md`（34 列，檢查日 2026-11-09；含 verified10_A／B 與 verified10.json）、`sponsors_latest.csv`（GOV.UK 持牌贊助登記冊 **2026-11-06 版**，2026-11-09 Asia/Taipei 下載，本地 143,053 資料列；見 `sponsor_source.txt`）、Run 9 報告（評級規則 A–W、跨輪 Top 10 基準）。
- **登記冊重查**：本報告用 `sponsors_latest.csv` 以法定名／交易名（不分大小寫、完全比對）獨立重查（`gen/regcheck.py`），不只引用 verified10。
- **分析者補查**：Ripjar 三則 JD（Workable API）、Next 兩則 JD、Epos Now 職缺列表，於 2026-11-09 由分析者直接讀取（只讀，未聯絡公司），用來檢查 SC／工作權／贊助字樣與日期；其餘一律依 verified10。
- 原則：只用上述檔案與補查頁面中的資料；沒有資料的標「未驗證」；頁面無法載入的標「未檢查」（不等於沒有職缺）；只有官方頁面明寫時，才引原文說目前沒有職缺。Taiwan passport 的雇主層級資格一律「未驗證」，除非有官方原文（本輪只有 GCHQ）。時程適配另列（規則 3-3、F），不併入難度。**本輪沒有聯絡任何公司。**
- Dennis：Cloud & Security Platform Engineer（Go/Next.js/Python/PostgreSQL、SIEM、gRPC、AWS/Cloudflare），約 5–6 年，IELTS 7.5；UofG MSc Software Development (Conversion) 假設 2027-09-01 開學、2028-09-01 畢業；Taiwan passport；畢業後走 Graduate visa，再轉 Skilled Worker；入學前在台灣。
- 本輪範圍（brief）：A 蘇格蘭北部與東部（Run 9 延續：Inverness／Highlands & Islands、Moray、Shetland／Orkney、Fife／St Andrews／Dunfermline、Perth）約 9；B 蘇格蘭大學 IT／RSE／HPC、資料中心、電信／ISP 約 7；C 英國未覆蓋城市（Coventry/Warwick/Leamington、Leicester、Norwich、Hull、Cheltenham/Gloucester、Ipswich/Martlesham）約 10；D 歐洲未覆蓋（Athens／Thessaloniki、Iași／Timișoara、Skopje、Sarajevo）約 8；目標約 34（實際 34）。
- 產生方式：`gen/entries.py`（逐家資料）、`gen/parts.py`、`gen/parts2.py`（各節文字）、`gen/regcheck.py`（登記冊重查）、`gen/build.py`（輸出本檔；`python3 /workspace/uk-career-intel-run10/gen/build.py`）。

---

## 一、摘要

- **規模**：34 列＝34 個本輪不重複雇主（#10 EPCC 的法定雇主 University of Edinburgh 已在 Run 8 以 The Data Lab 計過，跨輪不重複計）。**評級 33 家**（英國 25、歐洲非英國 8），**排除 1 家**（#26 Coderus，法人 CDR Realisations 2024 Limited 清算中），依規則 V 移到第五節，只給參考評級。
- **分組**：A（#1–9）9 家；B（#10–16）7 家；C（#17–26）10 家；D（#27–34）8 家，與 brief 目標（9／7／10／8）一致。Run 9 缺的 Inverness、Fife／St Andrews、Perth、Shetland／Orkney、Moray 本輪都有列，但幾乎都是非 IT 雇主（見第八節）。
- **登記冊重查結果**：verified10 宣稱的 16 個命中（#2, 4, 5, 8, 10, 11, 12, 13, 14, 16, 17, 19, 20, 22, 24, 25）**全部成立**，共 **16 個不重複雇主、26 筆登記列**（全部 A rating）。verifier 判為集團／條件式的 #3（Lifescan U.K. Limited）、#15（中央 UHI）、#18（Electronic Arts Limited）、#21（Aviva plc）**同樣確認不計**。其餘本名（#1、#3 Scotland 法人、#6、#7、#9、#15 Inverness 成員校、#18、#21 AESL、#23、#26）以本名查詢都查無。**與 verifier 沒有分歧**。
- **分布**：見第四節末。本輪出現 **1 個 高／低（Ripjar，有條件）** 與 **1 個 中／低（Next，有條件）**。
- **最佳**：
  1. **Ripjar**（Cheltenham，高／低，有條件）：本名在冊＋官方 Workable 確認 DevOps Engineer（Terraform/K8s/AWS/SIEM）；分析者讀 JD 全文，未見 SC 或工作權條款。
  2. **Epos Now**（Norwich，高／中）：本名在冊＋官方列表有 Senior Software Engineer IC5、Staff Engineer；JD 未開，所以不評低。
  3. **Connexin**（Hull，高／中）：本名在冊＋Lead Software Specialist（Cloudflare Workers/TS），但只來自第三方。
  4. **Endava Timișoara**（高／中）：官方 Senior DevOps Engineer with Azure。
  5. **Next Head Office**（Leicester，中／低，有條件）：Next Retail Ltd 在冊＋官方開放 Senior Full Stack (Cloud) 與 Developer – Finance Technology（截止 2026-11-17）。
- **明示不贊助／國籍限制**：Highland Spring（低／高，明示不贊助）；GCHQ（中／高，官方要求 British citizen，規則 T）。
- **Top 10 變動**：
  - 英國：**Ripjar 依規則 W 進入第 9 位，Version 1 退出**（成為第一候補）。Next 加入中／低候補。
  - 歐洲：**不變**（規則 Q：本輪歐洲列都沒有官方 relocation／visa 證據）。Endava Timișoara、OPSWAT、Workable 加入候補。
- **截止日**：本輪唯一仍開放、有官方截止日的對口職缺是 Next Developer – Finance Technology（2026-11-17）；Dennis 入學前在台灣，實際上不可行動（四之二）。

---

### 登記冊逐列重查（sponsors_latest.csv，2026-11-06 版）

| # | 雇主（登記名） | 城市 | 路線（登記列數） | 結果 |
|---:|---|---|---|---|
| 2 | The European Marine Energy Centre Ltd | Stromness | Skilled Worker（1） | 命中 |
| 4 | Optos Plc | Dunfermline | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 命中 |
| 5 | AJ Engineering & Construction Services Limited | Forres | Skilled Worker（1） | 命中 |
| 8 | Shetland Islands Council | Shetland | Skilled Worker（1） | 命中 |
| 10 | University of Edinburgh | Edinburgh | Government Authorised Exchange；Charity Worker；Skilled Worker；International Sportsperson（4） | 命中（EPCC 以法定雇主 UoE 計；與 Run 8 同雇主） |
| 11 | Heriot-Watt University | EDINBURGH | Government Authorised Exchange；Skilled Worker（2） | 命中 |
| 12 | University of Stirling | Scotland／Stirling | Skilled Worker；Government Authorised Exchange（2） | 命中 |
| 13 | University of Aberdeen | Aberdeen | Skilled Worker；Government Authorised Exchange（2） | 命中 |
| 14 | University of St Andrews | St Andrews | Skilled Worker；Government Authorised Exchange（2） | 命中 |
| 16 | Pulsant Limited | Maidenhead | Skilled Worker（1） | 命中 |
| 17 | Playground Games | Leamington Spa | Skilled Worker（1） | 命中（登記名無 Limited） |
| 19 | Tata Technologies Europe Limited | Warwick | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 命中 |
| 20 | Next Retail Ltd | Leicester | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 命中（Help Centre／CH 04521150 同法人） |
| 22 | Connexin Ltd | Hull | Skilled Worker（1） | 命中 |
| 24 | Ripjar Ltd | Cheltenham | Skilled Worker（1） | 命中（Top 10 新進） |
| 25 | Epos Now Ltd | Norwich | Skilled Worker（1） | 命中 |
| 3 | （Lifescan U.K. Limited） | Uxbridge | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 只有集團，不計 |
| 15 | （University of the Highlands and Islands） | Inverness | Government Authorised Exchange；Skilled Worker（2） | 中央 UHI，條件式，不計 |
| 18 | （Electronic Arts Limited） | Guildford | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 只有集團，不計 |
| 21 | （Aviva plc） | London | Global Business Mobility: Senior or Specialist Worker；Global Business Mobility: Graduate Trainee；Skilled Worker（3） | 集團 plc，職缺法人未確認，不計 |
| 27 | （Workable Software Limited） | London | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 非英國列的同品牌英國法人，不適用、不計 |
| 31 | （Endava UK Ltd） | London | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 非英國列的同品牌英國法人，不適用、不計 |

合計：16 個不重複雇主、26 筆登記列（不含 4 家集團／條件式與 2 家非英國列的英國法人；全部 A rating）。與 verified10 的 16 個命中完全一致。持牌不等於個別職缺會擔保。本名查無：#1、#3（LifeScan Scotland）、#6、#7、#9、#15（Inverness 成員校）、#18（Codemasters）、#21（AESL）、#23、#26。

---

## 二、簽證與聘僱路徑（本輪查核範圍）

- **英國**：本輪以 2026-11-06 版登記冊重查（16 雇主／26 列）。Graduate visa 18 個月與 New Entrant 門檻已在 Run 6 第二節以 gov.uk 原文確認，本輪沿用結論，不重複引述：2028-09 畢業 → Graduate visa 約 18 個月 → 轉 Skilled Worker；New Entrant 有 4 年上限（含 Graduate 期間）。
- **職缺上的贊助字樣**：
  - 明示不贊助：Highland Spring（「we cannot offer sponsorship at this time」，且不在冊）。
  - 國籍／居留限制：GCHQ（官方 How to apply：British citizen、通常近 10 年中 7 年在英居住、DV 等審查；規則 T）。
  - 「可能」字樣：University of Aberdeen 的 Senior Analyst 第三方轉載寫「may be eligible for sponsorship under the Skilled Worker route…dependent on factors」——不是保證，且該職不是對口職。
  - Ripjar 三則 JD、Next 兩則 JD：分析者讀全文，**沒有**贊助、SC 或工作權字樣（正反皆無）。
  - 其餘英國對口職缺都沒有贊助字樣；個別 CoS 一律未驗證。
- **大學與在學工作**：大學 IT／RSE／HPC 職是畢業後走 Graduate visa 的可能管道；MSc 期間兼職屬時程備註（Student visa 工時限制本輪未重新引述，校方是否聘用在學生未驗證），不改難度。
- **歐洲**：
  - 希臘、羅馬尼亞屬 EU：EU Blue Card 只標「相關」（規則 J），不算已證實路徑。
  - 北馬其頓（#32–33）、波士尼亞與赫塞哥維納（#34）非 EU：**不適用 EU Blue Card**。verifier 附了官方來源：北馬其頓一般需 Work Permit＋Residence Permit（Invest North Macedonia）；波赫由雇主向就業主管機關申請工作許可、效期通常不超過一年（BiH 民政部 FAQ）。Taiwan passport 能否取得：未驗證。
  - 本輪所有歐洲列都**沒有官方 relocation／visa 說明**；Workable 的 Relocation Bonus 只見於第三方轉載的已關閉職缺，不算。Taiwan passport 資格一律未驗證。

---

## 三、評級標準（與 Run 1–9 相同，規則 A–W 全文沿用；本輪無新增規則）

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

**本輪如何適用（不是新規則）**：大學 IT／RSE／HPC、資料中心、電信、醫材、製造、地方政府依規則 N 與 3-2（RSE／HPC／cloud 職可算對口）；明示不贊助依規則 E／K；GCHQ 國籍與 SC 依規則 T；集團與條件式持牌依 A/C；未檢查依 3-1；職缺年齡依 P；歐洲依 Run 2 量表與規則 D、J、M、Q；清算中的 Coderus 依規則 V；Top 10 插入依 W。

---

## 四、排名表（33 個不重複雇主＝33 列；另 1 列見第五節）

「未檢查」＝入口無法載入，不等於沒有職缺。時程另見四之二，不併入難度。英國列用英國難度量表，非英國列用 Run 2 量表。

| 排名 | 組織（#） | 國家／城市 | 適配 | 適配理由（一句） | 難度 | 難度理由（一句） | 簽證／搬遷（簡） | 對口開放職缺（2026-11-09） | 時程 |
|---:|---|---|:-:|---|:-:|---|---|---|---|
| 1 | Ripjar (Ripjar Ltd)（#24） | UK／Cheltenham（UK remote-first） | 高 | 金融犯罪偵測／資料融合 SaaS（規則 3-6）；DevOps Engineer 要求 Linux、Terraform／Ansible／Helm、AWS／Azure、Kubernetes、Python、SAST 與 SIEM，與 Dennis 的 cloud & security platform 背景直接對口。 | 低 | 有條件的低：登記冊直接命中 Ripjar Ltd（Skilled Worker, A），且官方 Workable 確認開放對口職缺（DevOps Engineer、Data Engineer、Staff Engineer）；分析者 2026-11-09 讀三則 JD 全文，未見 SC／clearance、right-to-work 或不贊助字樣（規則 T 不觸發），但也沒有任何贊助承諾，個別 CoS 未驗證。 | 登記冊命中 Ripjar Ltd, Cheltenham（Skilled Worker, A）；JD 未見贊助字樣（正反皆無）；個別 CoS 未驗證 | DevOps Engineer（F3990011C2，published 2026-04-21，remote UK-wide）；Data Engineer（49A3854970，published 2026-02-24，2+ 年，Python/Node.js）；Staff Engineer - Labyrinth Screening（590FC0749E，published 2026-08-04，EKS/Kubernetes/Kafka）；Engineering Manager（2026-10-15，Director 級，不計） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 2 | Epos Now (Epos Now Ltd)（#25） | UK／Norwich | 高 | POS／商務 SaaS 產品公司（規則 3-6）；官方 open-positions 列 Engineering：Senior Software Engineer IC5、Staff Engineer（Norwich）。 | 中 | 登記冊直接命中 Epos Now Ltd；職稱在官方列表確認，但 JD 未開（深頁未檢查），技術棧與層級未知，可能觸發規則 O，所以不算「確認開放的對口職缺」＝中。 | 登記冊命中 Epos Now Ltd, Norwich（Skilled Worker, A）；職缺贊助字樣未驗證 | Senior Software Engineer IC5（Norwich）；Staff Engineer（Norwich）——官方列表可見、日期未示、JD 未檢查；另 Product Dev IC5 在 Sofia（不計） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 3 | Connexin (Connexin Limited)（#22） | UK／Hull | 高 | 電信／ISP 兼智慧城市平台；規則 N 對電信依職缺判斷：Lead Software Specialist（JS/TS、React、Cloudflare Workers、MongoDB）與 Dennis 的 Cloudflare／TS 背景直接對口，但證據只來自第三方／搜尋摘要。 | 中 | 登記冊直接命中 Connexin Ltd；對口職缺只來自第三方，官方 careers 為 SPA、深頁未檢查，不算「確認開放」（比照 Run 9 Aiimi）＝中。 | 登記冊命中 Connexin Ltd, Hull（Skilled Worker, A）；職缺贊助字樣未驗證 | Lead Software Specialist（Hull／hybrid，≥5 年；第三方，現況未驗證）；NOC Analyst（路徑未驗證）；官方 careers：未檢查（SPA） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 4 | Endava Timișoara（#31） | RO／Timișoara, RO | 高 | IT 服務／軟體工程公司（規則 3-6）；Senior DevOps Engineer with Azure（Azure/Terraform/Kubernetes/CI/CD）直接對口 platform 路線。 | 中 | 官方 SmartRecruiters 確認開放、地點為 Timișoara（formattedAddress）；但語言要求未從 JS 抽出、Visa「Not specified」（第三方）、搬遷／工作許可未驗證（Run 2 量表＝中）。 | 非英國；搬遷／簽證：官方未見；EU Blue Card：相關（規則 J，未驗證）；Taiwan passport 資格：未驗證；Endava UK Ltd 在英國登記冊，但與本列無關（規則 A） | Senior DevOps Engineer with Azure（744000144344639，Timișoara；第三方轉載約 2026-08-29）；Junior DevOps 一例實為 Ho Chi Minh City（不計） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 5 | OPSWAT Timișoara（#30） | RO／Timișoara, RO | 高 | 資安產品公司（規則 3-6，資安產品）；Timișoara 有 Cyber Security Lab；目前確認的是 Machine Learning Engineer（Python/AWS），與 Dennis 部分重疊。 | 中 | ML Engineer 官方確認開放（on-site，明寫英語），但不是 Dennis 目標職類；完整職缺列表 504（未檢查，規則 3-1 不因此加重）；搬遷／工作許可未驗證＝中（屬判斷，第十節）。 | 非英國；搬遷／簽證：官方未見；EU Blue Card：相關（規則 J，未驗證）；Taiwan passport 資格：未驗證 | Machine Learning Engineer（on-site，Romania Product Engineering，gh_jid 4691113005，日期未示）；DevOps／SRE／platform：未檢查（列表 504） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 6 | Workable Software（Athens）（#27） | GR／Marousi (Athens), GR | 高 | HR SaaS 產品公司；曾有 Senior Site Reliability Data Engineer（Kubernetes/cloud，英語），證明有 SRE／平台職能。 | 中 | 唯一對口職已關閉（第三方標 Closed，規則 P 不計）；官方職缺列表 JS 未解析（未檢查，規則 3-1 不加重）；所以沒有確認開放職缺，但有入口＝中。 | 非英國；關閉職缺曾列 Relocation Bonus（第三方，不算官方，規則 Q）；EU Blue Card：相關（未驗證）；Taiwan passport 資格：未驗證；Workable Software Limited 在英國登記冊（London），與 Athens 列無關（規則 A） | 已關閉：Senior Site Reliability Data Engineer（Athens，2026-04 刊登紀錄）；現行：未檢查（jobs.workable.com 列表 JS） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 7 | Next Head Office (Next Retail Ltd)（#20） | UK／Enderby (Leicester) | 中 | 零售本業（Run 2 補充：非 IT 核心依 IT 職缺判斷）；Tech 有 Senior Full Stack Developer – MVC \| Cloud（Java/C#/Node.js「or equivalent」、Azure CI/CD、Docker/Kubernetes）與 Developer – Finance Technology（C#/.NET、Azure），技術棧只部分重疊＝中。 | 低 | 有條件的低：登記冊直接命中 Next Retail Ltd，且官方 Help Centre／CH 04521150 確認同一法人（規則 C 滿足）；官方 careers 確認開放對口職缺；職缺未見贊助字樣，個別 CoS 未驗證。 | 登記冊命中 Next Retail Ltd, Leicester（Skilled Worker；GBM Senior or Specialist）；職缺未見贊助字樣 | Developer – Finance Technology（78003，Posting 2026-11-03，Apply Before 2026-11-17，£42,124 起，C#/.NET＋Azure）；Senior Full Stack Developer – MVC \| Cloud（76519，Posting 2026-08-27，頁面未列 Apply Before，£51,400–£55,400）；已截止：Computer Operations Analyst（2026-11-06） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 8 | Pulsant (Pulsant Limited)（#16） | UK／Edinburgh（South Gyle 辦公室；DC SC-1/2/3） | 中 | 資料中心／colocation／managed cloud（規則 N 依職缺判斷）：業務屬雲端基礎設施，但目前沒有任何職缺可看技術棧＝中。 | 中 | 登記冊直接命中 Pulsant Limited（Maidenhead）；ATS（Pinpoint）目前未列職缺（已檢查）＝有贊助缺職缺＝中。 | 登記冊命中 Pulsant Limited, Maidenhead（Skilled Worker, A） | 未找到（careers.pulsant.com 目前無列出職缺，可 Register interest）；careers FAQ 提到可能需 basic／enhanced criminal record check | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 9 | Heriot-Watt University（Edinburgh Campus）（#11） | UK／Edinburgh | 中 | 大學（規則 3-2／N 依證據）：Information Services 有 Research Computing Support Manager；第三方曾見 Senior Azure Cloud Engineer、Software Development Lead（現況未驗證），有 cloud 職能證據＝中。 | 中 | 登記冊直接命中 Heriot-Watt University；官方 vacancy portal 連線失敗（未檢查，規則 3-1）＝中。 | 登記冊命中 Heriot-Watt University, Edinburgh（Skilled Worker；GAE） | 未檢查（vacancies.hw.ac.uk 連線失敗）；第三方：Senior Azure Cloud Engineer（第三方稱 2025-06 已截止）、Software Development Lead、Digital Solutions Analyst（現況未驗證） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 10 | University of Stirling（#12） | UK／Stirling | 中 | 大學（規則 3-2）：Information Services 有 Development Operations（含 Infrastructure、Information Security）與 Product Development 團隊頁，有 infra／security 職能證據＝中。 | 中 | 登記冊直接命中；職缺列表為 JS「Loading…」（未檢查）＝中。 | 登記冊命中 University of Stirling（Skilled Worker；GAE） | 未檢查（work-at-stirling 列表 JS） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 11 | University of St Andrews（#14） | UK／St Andrews (Fife) | 中 | 大學（規則 3-2／N）：IT Services 有 Research Computing Team（RSE；2026 年仍辦 ScotRSE／Software Carpentry），RSE 屬可對口職能＝中。 | 中 | 登記冊直接命中；vacancies 首頁可見職缺都非 IT（Chef、Cleaner 等），cloud／RSE 未找到＝有贊助缺職缺＝中。 | 登記冊命中 University of St Andrews（Skilled Worker；GAE） | 未找到（現行多為 Chef／Cleaner／Nursery／Research Technician）；已過期：Computing Officer (Academic Computing)、Applications Developer、Enterprise Architect | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 12 | EPCC（雇主 University of Edinburgh）（#10） | UK／Edinburgh (Bayes Centre) | 中 | HPC／研究運算中心（規則 N：HPC／RSE 可算對口職能）；但本輪沒有任何職缺可看技術棧＝中。 | 中 | 法定雇主 University of Edinburgh 在冊；EPCC Vacancies 官方寫「No current vacancies.」（已檢查）＝有贊助缺職缺＝中。 | 登記冊命中 University of Edinburgh（Skilled Worker；GAE；Charity Worker；International Sportsperson） | 官方原文「No current vacancies.」（僅代表檢查當下） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 13 | University of Aberdeen（#13） | UK／Aberdeen | 中 | 大學（規則 3-2）：Digital Research 提供 HPC、Trusted Research Environment、Data Safe Haven，有研究運算職能證據＝中。 | 中 | 登記冊直接命中；現行 Digital & Information Services 職缺是 Senior Analyst（臨床試驗資料／SQL），不是 cloud／platform 對口；典型 DevOps／RSE 未找到＝中。 | 登記冊命中 University of Aberdeen（Skilled Worker；GAE）；第三方轉載稱「may be eligible for sponsorship…dependent on factors」（非保證） | Senior Analyst (Commercial Clinical Trial Delivery)，ITS304A（截止 2026-11-10，£48,337–£57,666；資料／資訊治理，不計對口）；platform／DevOps／RSE：未找到 | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 14 | Tata Technologies Europe (Tata Technologies Europe Limited)（#19） | UK／Warwick (EIDC) | 中 | 工程顧問／汽車軟體（規則 3-6）：可見職缺多為汽車機械、HIL、MES、Logistics Lead Engineer，沒有 cloud／platform 證據＝中。 | 中 | 登記冊直接命中；官網 403（職缺列表未檢查，規則 3-1）＝中。 | 登記冊命中 Tata Technologies Europe Limited, Warwick（Skilled Worker；GBM Senior or Specialist） | 未檢查（官網 403）；第三方：Logistics Lead Engineer（2026-11）等非目標職 | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 15 | Playground Games（#17） | UK／Leamington Spa | 中 | 遊戲工作室（Forza Horizon）：有 Gameplay Engineer、Senior UI Engineer 等工程職，但沒有 cloud／platform／backend／security＝中（比照 Run 9 Outfit7）。 | 中 | 登記冊直接命中（名稱 Playground Games）；對口職缺未找到＝有贊助缺職缺＝中。 | 登記冊命中 Playground Games, Leamington Spa（Skilled Worker, A） | Gameplay Engineer；Senior UI Engineer；Experienced UI Engineer（Hybrid Remote，日期未示）；cloud／platform：未找到 | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 16 | Optos (Optos Plc)（#4） | UK／Dunfermline (Fife) | 中 | 醫材製造（規則 N 上限中）：有軟體工程證據（Senior Software Engineer – Medical Imaging & UI，C#），但已填補＝中。 | 中 | 登記冊直接命中 Optos Plc；IT 分類沒有職缺、R&D 只有 Principal Hardware Engineer＝有贊助缺職缺＝中。 | 登記冊命中 Optos Plc, Dunfermline（Skilled Worker；GBM Senior or Specialist） | Principal Hardware Engineer（2026-11-05，非對口）；已填補：Senior Software Engineer – Medical Imaging & UI（C#，頁面 2026-10-19）；cloud／DevOps：未找到 | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 17 | Aviva（Norwich）（#21） | UK／Norwich | 中 | 保險本業（規則 N 比照傳統金融上限中）：搜尋索引曾見 Principal Cloud Engineer、Application Security Manager、Full Stack Software Engineer（含 Norwich），職能對口但現況未檢查＝中。 | 中 | 常見聘用法人 Aviva Employment Services Limited 不在冊；Aviva plc 在冊但職缺法人未確認（規則 C，不計命中）；careers 403（未檢查）＝中。 | 本名（AESL）查無；集團 Aviva plc（London；Skilled Worker／GBM Senior／GBM Graduate Trainee）在冊但不計 | 未檢查（careers.aviva.co.uk 403）；第三方：Principal Cloud Engineer（已關閉）；Technology and Change Delivery Graduate pathway（含 Norwich，須 2027 夏前取得學位等） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 18 | Thorntons (Thorntons Law LLP)（#6） | UK／Perth（總部 Dundee） | 中 | 律師事務所（規則 3-2）：歷史／第三方職缺有 Cyber Security Analyst、Platforms Networking & Cloud Lead 等，有 cloud／security 職能證據，但日期未驗證＝中（屬判斷）。 | 中 | 本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；careers 現行清單未取得（未檢查），沿用 Run 8／9「無贊助但職缺未檢查判中」＝中。 | 本名登記冊查無（sponsors_latest.csv，2026-11-06 版） | 未檢查（careers 具體清單未取得）；歷史／第三方：IT Service Desk Analyst、Desktop Support、Cyber Security Analyst、Platforms Networking & Cloud Lead（日期未驗證） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 19 | Centric IT Solutions Romania（#29） | RO／Iași, RO | 中 | IT 服務公司；唯一工程證據是 Software Architect（.NET、Azure、Kubernetes 加分），以 .NET 為核心，與 Dennis 只部分重疊＝中。 | 中 | 官方確認開放且明寫 Strong English；但只有一則架構職、搬遷／工作許可未驗證（Run 2 量表＝中）。 | 非英國；搬遷／簽證：官方未見；EU Blue Card：相關（未驗證）；Taiwan passport 資格：未驗證 | Software Architect（Iași，日期未示）；另 AI Lead、Marketing Specialist（非對口） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 20 | GCHQ Cheltenham（#23） | UK／Cheltenham | 中 | 政府情報／網路安全機構（規則 3-2）：搜尋可見 Senior Software Engineers（Ref. 3667），但 JD 頁未載入（未檢查）＝中。 | 高 | 官方 How to apply 原文要求 British citizen（雙重國籍其一為英國可考慮），通常需近 10 年中 7 年在英居住，並有 DV 等安全審查；依規則 T 所有職缺都不算對口現行職缺＝高。 | 不適用 Skilled Worker 持牌推論（登記冊查無）；**依官方原文需英國國籍**；Taiwan passport：依官方原文目前不符（eligibility-changes 頁未摘要） | 未檢查（個別 JD 頁導向通用頁）；Senior Software Engineers（Ref. 3667，只見搜尋） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 21 | Codemasters（The Codemasters Software Company Limited）（#18） | UK／Southam | 中 | 賽車遊戲工作室（EA 旗下）：屬軟體業，但 Southam 的 cloud／platform／backend 職缺未找到＝中。 | 高 | 本名不在登記冊；只有集團 Electronic Arts Limited（Guildford）在冊，依規則 A/C 不計；無對口職缺＝高。 | 本名查無；集團 Electronic Arts Limited（Skilled Worker／GBM Senior，不計） | 未找到（EA Careers 篩選未完整列出 Southam 工程職） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 22 | EPSILONNET（Epsilon Net）（#28） | GR／Pilea (Thessaloniki), GR | 中 | 希臘會計／ERP 軟體產品公司；只見第三方 .NET Software Engineer，cloud／DevOps 未見＝中。 | 高 | 官方職缺深頁未完整列出（未檢查）；第三方職缺為 .NET 且希臘語是否必要未驗證（規則 M 阻止評低）；無確認開放的對口職缺＝高（Run 2 量表）。 | 非英國；搬遷／簽證：官方未見；EU Blue Card：相關（未驗證）；Taiwan passport 資格：未驗證 | 未檢查（官方 Job Vacancies 深頁）；第三方：.NET Software Engineer（solid English） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 23 | Sorsix（#32） | MK／Skopje, MK | 中 | 醫療資訊軟體公司；沒有職缺可看技術棧＝中。 | 高 | 官方寫「currently do not have any open positions」；北馬其頓非 EU、無 Blue Card；當地 work＋residence permit 路徑有官方來源，但 Taiwan 資格與公司協助未驗證＝高。 | 非英國；非 EU（無 EU Blue Card）；當地需 Work Permit＋Residence Permit（Invest North Macedonia）；Taiwan passport 資格：未驗證 | 官方原文：currently do not have any open positions（接受一般申請） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 24 | G+D Netcetera（Skopje）（#33） | MK／Skopje, MK | 中 | 支付／數位軟體公司；Skopje 有 Senior Android Engineer、IT Infrastructure Project Manager，都不是 platform／DevOps＝中。 | 高 | 無對口職缺（Android、PM 不屬 Dennis 目標職類，規則 D 不視為入口）；非 EU、無 Blue Card＝高。 | 非英國；非 EU（無 EU Blue Card）；當地 Work／Residence Permit（Invest North Macedonia）；Taiwan passport 資格：未驗證 | Senior Android Engineer（明寫英語流利）；IT Infrastructure Project Manager；platform／DevOps：未找到 | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 25 | Ministry of Programming（#34） | BA／Sarajevo, BA | 中 | 軟體工作室（自述 React/Node/Java/.NET/AWS/Azure）；只有 General Application，沒有具名職缺＝中。 | 高 | 無具名對口職缺；波赫非 EU、無 Blue Card；工作許可由雇主申請、效期通常不超過一年（BiH 民政部 FAQ），Taiwan 資格未驗證＝高。 | 非英國；非 EU（無 EU Blue Card）；工作許可由雇主申請（BiH 民政部 FAQ）；Taiwan passport 資格：未驗證 | 未找到（只有 General Application） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 26 | Lifescan Scotland (LifeScan Scotland Limited)（#3） | UK／Inverness | 低 | 醫材製造（規則 N）：只見第三方 Database Support Systems Analyst（SQL Server／製造系統，日期未驗證），屬管理式 IT＝低。 | 中 | 本名登記冊查無（sponsors_latest.csv，2026-11-06 版）（只有集團 Lifescan U.K. Limited 在冊，規則 A/C 不計）；官方職缺清單未檢查（JS），依規則 3-1 不寫沒有職缺＝中（比照 Rareloop）。 | 本名查無；集團 Lifescan U.K. Limited（Uxbridge；Skilled Worker／GBM Senior，不計） | 未檢查（lifescan.com/careers 未渲染清單）；第三方：Database Support Systems Analyst（日期與現況未驗證） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 27 | Shetland Islands Council（#8） | UK／Lerwick (Shetland) | 低 | 地方政府（規則 3-2）：IT 證據只有 ICT Analyst – Computer Centre、ICT Assistant（都已截止），屬管理式 IT＝低。 | 中 | 登記冊直接命中；myjobscotland 現行清單未解析（未檢查）＝中。 | 登記冊命中 Shetland Islands Council（Skilled Worker, A） | 未檢查（myjobscotland 清單）；已截止：ICT Analyst – Computer Centre（2026-10-22）、ICT Assistant（2026-09-07） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 28 | EMEC (The European Marine Energy Centre Ltd)（#2） | UK／Stromness (Orkney) | 低 | 海洋能源測試中心（規則 N）：沒有任何 IT／軟體職缺或團隊證據＝低（資料不足）。 | 中 | 登記冊直接命中；官方 Vacancies 頁目前「No vacancies」＝有贊助缺職缺＝中。 | 登記冊命中 The European Marine Energy Centre Ltd, Stromness（Skilled Worker, A） | 官方原文「No vacancies」（僅代表檢查當下） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 29 | AJ Engineering (AJ Engineering & Construction Services Limited)（#5） | UK／Forres (Moray) | 低 | 工程製造（規則 N）：歷史職缺都是 Fabricator／Welder／Estimating Manager，沒有 IT 團隊證據＝低。 | 中 | 登記冊直接命中；官方「No Current Vacancies」＝有贊助缺職缺＝中。 | 登記冊命中 AJ Engineering & Construction Services Limited, Forres（Skilled Worker, A） | 官方原文「No Current Vacancies」 | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 30 | UHI Inverness（Board of Management of Inverness College；中央 UHI 為條件式）（#15） | UK／Inverness | 低 | 高教（規則 3-2）：沒有公開 IT／RSE 團隊頁，現行只有 Academic Administration Officer＝低（資料不足）。 | 高 | Maps 雇主 UHI Inverness（OSCR SC021197）本名不在冊；中央 University of the Highlands and Islands（SC148203）在冊，但職缺雇主未確認，依規則 A/C 不計；無對口職缺＝高。 | 本名查無；中央 UHI 在冊（Skilled Worker；GAE）但為條件式，不計；UHI Shetland 亦在冊（姊妹 partner，不計） | 未找到；UHI Inverness：Academic Administration Officer（截止 2026-11-22，非 IT） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 31 | Gordon & MacPhail (Speymalt Whisky Distributors Limited)（#9） | UK／Elgin (Moray) | 低 | 威士忌製造／經銷：唯一 IT 職是 Deputy IT Manager（管理式 IT，已截止）＝低。 | 高 | 本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；Deputy IT Manager 已於 2026-10-30 截止，無對口職缺＝高。 | 本名登記冊查無（sponsors_latest.csv，2026-11-06 版） | 已截止：Deputy IT Manager（2026-10-30 中午，第三方；官網仍掛） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 32 | Highland Spring Group (Highland Spring Limited)（#7） | UK／Blackford (Perthshire) | 低 | 瓶裝水製造：只見 Production Operator，IT 未找到＝低。 | 高 | 本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；careers 明寫「you must have the right to work in the UK as we cannot offer sponsorship at this time」（規則 E／K／T）＝高。 | 本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；**明示不贊助** | Production Operator（The Ochils，約 12 天前）；IT：未找到 | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |
| 33 | SaxaVord Spaceport (Shetland Space Centre Limited)（#1） | UK／Unst (Shetland) | 低 | 太空發射場營運（規則 N：只有設施／營運職）：沒有軟體／雲端證據＝低。 | 高 | 本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；唯一近期職缺 Range Operations Assistant 已截止＝高。 | 本名登記冊查無（sponsors_latest.csv，2026-11-06 版） | 已截止：Range Operations Assistant（官網 2026-10-22；LinkedIn 截止 2026-11-06）；cloud／platform：未找到；SC：未見（未驗證） | 無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天 |

分布（不重複雇主）：適配 高 6／中 19／低 8；難度 低 2／中 21／高 10。組合：高／低 1、高／中 5、高／高 0、中／低 1、中／中 12、中／高 6、低／中 4、低／高 4。

---

## 四之二、時程與截止日（與難度分開，規則 3-3／F）

基準：檢查日 2026-11-09；MSc 開學 2027-09-01（距今 296 天）；畢業 2028-09-01（距今 662 天）。天數以 Python 計算（`gen/build.py`）。

**仍開放、有官方截止日的對口職缺**：

| 職缺 | 截止日 | 距今 | 距開學 | 距畢業 |
|---|---|---:|---:|---:|
| Next Developer – Finance Technology（C#/.NET＋Azure；Leicester） | 2026-11-17 | 8 | 288 | 654 |

參考（非對口，不計）：University of Aberdeen Senior Analyst ITS304A 截止 2026-11-10（距今 1 天）；UHI Inverness Academic Administration Officer 截止 2026-11-22。

**仍開放、只有刊登日（沒有截止日）的對口或接近職缺**，只作新鮮度參考（「距今」為負＝已刊登天數）：

| 職缺 | 日期（類型） | 距今 | 距開學 | 距畢業 |
|---|---|---:|---:|---:|
| Ripjar Engineering Manager（Director 級，不計對口） | 2026-10-15（published_on） | -25 | 321 | 687 |
| Endava Senior DevOps Engineer with Azure（Timișoara） | 2026-08-29（第三方轉載） | -72 | 368 | 734 |
| Next Senior Full Stack Developer – MVC \| Cloud | 2026-08-27（Posting Date） | -74 | 370 | 736 |
| Ripjar Staff Engineer - Labyrinth Screening | 2026-08-04（published_on） | -97 | 393 | 759 |
| Ripjar DevOps Engineer | 2026-04-21（published_on） | -202 | 498 | 864 |
| Ripjar Data Engineer | 2026-02-24（published_on） | -258 | 554 | 920 |
| Epos Now Senior Software Engineer IC5／Staff Engineer（官方列表，日期未示） | 日期未驗證 | — | — | — |
| Centric Software Architect（Iași，日期未示） | 日期未驗證 | — | — | — |
| OPSWAT Machine Learning Engineer（Timișoara，日期未示） | 日期未驗證 | — | — | — |
| Playground Games Gameplay／UI Engineer（日期未示，非對口） | 日期未驗證 | — | — | — |

**已過期／已填補，不可申請（規則 3-4／P），只作為職能證據**：

| 職缺 | 截止／頁面日期 | 距開學 | 距畢業 |
|---|---|---:|---:|
| SaxaVord Range Operations Assistant（LinkedIn 截止） | 2026-11-06 | 299 | 665 |
| Next Computer Operations Analyst | 2026-11-06 | 299 | 665 |
| Gordon & MacPhail Deputy IT Manager | 2026-10-30 | 306 | 672 |
| Shetland Islands Council ICT Analyst – Computer Centre | 2026-10-22 | 314 | 680 |
| Optos Senior Software Engineer – Medical Imaging & UI（已填補，頁面日期） | 2026-10-19 | 317 | 683 |
| Shetland Islands Council ICT Assistant | 2026-09-07 | 359 | 725 |
| Workable Senior Site Reliability Data Engineer（Athens，第三方標 Closed，2026-04 刊登紀錄） | 截止日未驗證 | — | — |
| Heriot-Watt Senior Azure Cloud Engineer（第三方稱 2025-06 截止） | 只有年月 | — | — |

**時程結論**：
- 所有現行職缺在 MSc 期間或畢業時都不會仍開放；Next 的 2026-11-17 截止日離開學還有 288 天，Dennis 入學前在台灣，實際上不可行動。
- 對 Dennis 有用的是「這家公司會招此類職能」與持牌狀態：Ripjar（DevOps／Data／Staff）、Next（Cloud full stack）、Connexin（Cloudflare Workers）屬此類。
- 實際申請窗口：MSc 期間的 graduate 招募季（約 2027-09 至 2028-06，各公司日期未驗證；Aviva Technology and Change Delivery Graduate pathway 屬此類，但頁面寫須在 2027 夏前取得學位，Dennis 是否符合與開始日期未驗證，規則 B），或畢業後走 Graduate visa。
- 大學 IT／RSE／HPC（Heriot-Watt、Stirling、St Andrews、Aberdeen、EPCC）：MSc 期間兼職或畢業後的研究運算職屬時程備註，不改難度。
- 歐洲職缺若在 MSc 前申請，與 2027-09 入學衝突（規則 F）。

---

## 五、排除／存疑（規則 V；僅供參考評級，不進主表與 Top 10）

| # | 組織 | verified10 判定 | 參考適配 | 參考難度 | 理由 |
|---:|---|---|:-:|:-:|---|
| 26 | Coderus（CH 03532269，現名 CDR REALISATIONS 2024 LIMITED） | 疑似已停業 | 中 | 高 | 法人狀態 **Liquidation**，Gazette 4755479（2024-11-19 winding-up）；曾用名 CODERUS LIMITED 至 2025-12-22。coderus.com 仍 200，careers 有 Android／Embedded／iOS／QA 等敘述型職缺（無日期），但沒有找到 Active 的承繼法人，網站存在不等於可合法雇用；本名不在登記冊。參考適配中（行動／嵌入式軟體，與 cloud／security 部分重疊）。 |

- 判定依 CH 與 Gazette，不依網站文案；verifier 也明寫「不定言品牌已關」。若之後找到 Active 承繼法人，可在後續輪次以新法人重評。
- Coderus 是本輪 Ipswich／Martlesham 唯一的列；BT Adastral Park 本身 scout 未能以雇主身分建立（audit），所以 **Martlesham 實際上沒有可評的雇主**（第八節）。

---

## 六、逐家說明（依排名）


### 1. Ripjar (Ripjar Ltd)（#24）｜Cheltenham（UK remote-first）

- **公司簡介**：Cheltenham 的金融犯罪情資軟體公司，CH 08217339 Active，註冊地址 Hub8（共用大樓不是反證）；JD 自述由前 GCHQ 人員創立、remote-first。
- **適配度：高**：金融犯罪偵測／資料融合 SaaS（規則 3-6）；DevOps Engineer 要求 Linux、Terraform／Ansible／Helm、AWS／Azure、Kubernetes、Python、SAST 與 SIEM，與 Dennis 的 cloud & security platform 背景直接對口。
- **申請難度：低**：有條件的低：登記冊直接命中 Ripjar Ltd（Skilled Worker, A），且官方 Workable 確認開放對口職缺（DevOps Engineer、Data Engineer、Staff Engineer）；分析者 2026-11-09 讀三則 JD 全文，未見 SC／clearance、right-to-work 或不贊助字樣（規則 T 不觸發），但也沒有任何贊助承諾，個別 CoS 未驗證。
- **簽證／搬遷**：登記冊命中 Ripjar Ltd, Cheltenham（Skilled Worker, A）；JD 未見贊助字樣（正反皆無）；個別 CoS 未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：DevOps Engineer（F3990011C2，published 2026-04-21，remote UK-wide）；Data Engineer（49A3854970，published 2026-02-24，2+ 年，Python/Node.js）；Staff Engineer - Labyrinth Screening（590FC0749E，published 2026-08-04，EKS/Kubernetes/Kafka）；Engineering Manager（2026-10-15，Director 級，不計）
- **語言**：英語；JD 未見非英語或 clearance 要求（分析者讀 JD 全文）
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：規則 P：DevOps 已在板上 202 天、Data Engineer 258 天（仍 published），照計並標註天數。
- **備註**：「This position is open to UK wide candidates」是地點範圍，不是工作權條款；但 remote-first 對入境前的 Dennis 沒有幫助（需已在英國並取得 Graduate／Skilled Worker 身分）。
- **備註**：Cheltenham cyber cluster：本列 JD 沒有 SC 字樣；若日後 JD 加入 SC／DV 要求，依規則 T 改判。
- **來源**：verified10.md #24；apply.workable.com/api/v1/widget/accounts/ripjar；apply.workable.com/api/v2/accounts/ripjar/jobs/F3990011C2、49A3854970、590FC0749E（分析者 2026-11-09 讀取）；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 2. Epos Now (Epos Now Ltd)（#25）｜Norwich

- **公司簡介**：Norwich 的 POS SaaS 公司，CH 10784763 Active（前名 Epos Now Holdings Limited）。
- **適配度：高**：POS／商務 SaaS 產品公司（規則 3-6）；官方 open-positions 列 Engineering：Senior Software Engineer IC5、Staff Engineer（Norwich）。
- **申請難度：中**：登記冊直接命中 Epos Now Ltd；職稱在官方列表確認，但 JD 未開（深頁未檢查），技術棧與層級未知，可能觸發規則 O，所以不算「確認開放的對口職缺」＝中。
- **簽證／搬遷**：登記冊命中 Epos Now Ltd, Norwich（Skilled Worker, A）；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：Senior Software Engineer IC5（Norwich）；Staff Engineer（Norwich）——官方列表可見、日期未示、JD 未檢查；另 Product Dev IC5 在 Sofia（不計）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：敏感度：若 JD 確認技術棧非 Java／PHP 為核心（規則 O），依規則 C／3-6 可升為 高／低（有條件），將依規則 W 進英國 Top 10 討論。
- **來源**：verified10.md #25；eposnow.com/uk/careers/open-positions（分析者 2026-11-09 再讀一次列表）；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 3. Connexin (Connexin Limited)（#22）｜Hull

- **公司簡介**：Hull 的光纖 ISP／智慧城市公司，CH 05823408 Active（London 註冊地址）；careers 頁寫「We're hiring」。
- **適配度：高**：電信／ISP 兼智慧城市平台；規則 N 對電信依職缺判斷：Lead Software Specialist（JS/TS、React、Cloudflare Workers、MongoDB）與 Dennis 的 Cloudflare／TS 背景直接對口，但證據只來自第三方／搜尋摘要。
- **申請難度：中**：登記冊直接命中 Connexin Ltd；對口職缺只來自第三方，官方 careers 為 SPA、深頁未檢查，不算「確認開放」（比照 Run 9 Aiimi）＝中。
- **簽證／搬遷**：登記冊命中 Connexin Ltd, Hull（Skilled Worker, A）；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：Lead Software Specialist（Hull／hybrid，≥5 年；第三方，現況未驗證）；NOC Analyst（路徑未驗證）；官方 careers：未檢查（SPA）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：敏感度：若官方頁確認 Lead Software Specialist 仍開放，可升為 高／低（有條件），會進英國 Top 10 討論（見第七節）。
- **備註**：電信列：規則 N 以職缺為準；本列的軟體職證據讓適配給高，但屬判斷（第十節）。
- **來源**：verified10.md #22；connexin.co.uk/careers；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 4. Endava Timișoara（#31）｜Timișoara, RO

- **公司簡介**：Endava 的 Timișoara 據點；羅馬尼亞法人（ONRC）未查。與 OPSWAT 雖同在 UBC0 附近，分列。
- **適配度：高**：IT 服務／軟體工程公司（規則 3-6）；Senior DevOps Engineer with Azure（Azure/Terraform/Kubernetes/CI/CD）直接對口 platform 路線。
- **申請難度：中**：官方 SmartRecruiters 確認開放、地點為 Timișoara（formattedAddress）；但語言要求未從 JS 抽出、Visa「Not specified」（第三方）、搬遷／工作許可未驗證（Run 2 量表＝中）。
- **簽證／搬遷**：非英國；搬遷／簽證：官方未見；EU Blue Card：相關（規則 J，未驗證）；Taiwan passport 資格：未驗證；Endava UK Ltd 在英國登記冊，但與本列無關（規則 A）
- **對口開放職缺**：Senior DevOps Engineer with Azure（744000144344639，Timișoara；第三方轉載約 2026-08-29）；Junior DevOps 一例實為 Ho Chi Minh City（不計）
- **語言**：官方頁語言要求未抽出（未驗證）；未見羅馬尼亞語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：Endava 的同名 DevOps 職缺有多個城市，只計 Timișoara。
- **來源**：verified10.md #31；jobs.smartrecruiters.com/endava/744000144344639；eurodevhub.com

### 5. OPSWAT Timișoara（#30）｜Timișoara, RO

- **公司簡介**：美國資安公司 OPSWAT 的 Timișoara 據點；Maps 沒有網站，官網 opswat.com 由 verifier 查得；法人未查。
- **適配度：高**：資安產品公司（規則 3-6，資安產品）；Timișoara 有 Cyber Security Lab；目前確認的是 Machine Learning Engineer（Python/AWS），與 Dennis 部分重疊。
- **申請難度：中**：ML Engineer 官方確認開放（on-site，明寫英語），但不是 Dennis 目標職類；完整職缺列表 504（未檢查，規則 3-1 不因此加重）；搬遷／工作許可未驗證＝中（屬判斷，第十節）。
- **簽證／搬遷**：非英國；搬遷／簽證：官方未見；EU Blue Card：相關（規則 J，未驗證）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Machine Learning Engineer（on-site，Romania Product Engineering，gh_jid 4691113005，日期未示）；DevOps／SRE／platform：未檢查（列表 504）
- **語言**：明寫「Clear written and spoken English」；未見羅馬尼亞語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **來源**：verified10.md #30；opswat.com/jobs/4691113005；opswat.com/careers/open-positions（504）

### 6. Workable Software（Athens）（#27）｜Marousi (Athens), GR

- **公司簡介**：希臘 HR SaaS 公司的 Athens（Marousi）辦公室；GEMH 未查。
- **適配度：高**：HR SaaS 產品公司；曾有 Senior Site Reliability Data Engineer（Kubernetes/cloud，英語），證明有 SRE／平台職能。
- **申請難度：中**：唯一對口職已關閉（第三方標 Closed，規則 P 不計）；官方職缺列表 JS 未解析（未檢查，規則 3-1 不加重）；所以沒有確認開放職缺，但有入口＝中。
- **簽證／搬遷**：非英國；關閉職缺曾列 Relocation Bonus（第三方，不算官方，規則 Q）；EU Blue Card：相關（未驗證）；Taiwan passport 資格：未驗證；Workable Software Limited 在英國登記冊（London），與 Athens 列無關（規則 A）
- **對口開放職缺**：已關閉：Senior Site Reliability Data Engineer（Athens，2026-04 刊登紀錄）；現行：未檢查（jobs.workable.com 列表 JS）
- **語言**：關閉職缺要求 excellent written English；希臘語要求：未找到
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：Relocation Bonus 只見於第三方轉載的已關閉職缺，不能當作公司層級政策。
- **來源**：verified10.md #27；jobs.workable.com/company/9LVq3duEZzKuCqiHPntTuh；jobsfordevelopers.com

### 7. Next Head Office (Next Retail Ltd)（#20）｜Enderby (Leicester)

- **公司簡介**：Next plc 的 Enderby 總部，法人 Next Retail Ltd（CH 04521150 Active）。
- **適配度：中**：零售本業（Run 2 補充：非 IT 核心依 IT 職缺判斷）；Tech 有 Senior Full Stack Developer – MVC \| Cloud（Java/C#/Node.js「or equivalent」、Azure CI/CD、Docker/Kubernetes）與 Developer – Finance Technology（C#/.NET、Azure），技術棧只部分重疊＝中。
- **申請難度：低**：有條件的低：登記冊直接命中 Next Retail Ltd，且官方 Help Centre／CH 04521150 確認同一法人（規則 C 滿足）；官方 careers 確認開放對口職缺；職缺未見贊助字樣，個別 CoS 未驗證。
- **簽證／搬遷**：登記冊命中 Next Retail Ltd, Leicester（Skilled Worker；GBM Senior or Specialist）；職缺未見贊助字樣；Taiwan passport 資格：未驗證
- **對口開放職缺**：Developer – Finance Technology（78003，Posting 2026-11-03，Apply Before 2026-11-17，£42,124 起，C#/.NET＋Azure）；Senior Full Stack Developer – MVC \| Cloud（76519，Posting 2026-08-27，頁面未列 Apply Before，£51,400–£55,400）；已截止：Computer Operations Analyst（2026-11-06）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：規則 U 旗標：兩職薪資都高於一般門檻 £41,700；SOC 未驗證，不改評級。
- **備註**：Developer – Finance Technology 以 C#/.NET 為核心（個人檔未列 C#）；規則 O 只寫 Java／Kotlin／PHP，本報告不擴張規則，「低」主要依 Senior Full Stack（接受 Node.js 或同等）成立（第十節）。
- **來源**：verified10.md #20；careers.next.co.uk/jobs/78003、76519（分析者 2026-11-09 讀取）；zendesk.next.co.uk Head office information；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 8. Pulsant (Pulsant Limited)（#16）｜Edinburgh（South Gyle 辦公室；DC SC-1/2/3）

- **公司簡介**：英國區域資料中心業者，CH 03625971 Active；Edinburgh 有 SC-1（South Gyle）、SC-2（Medway）、SC-3（Newbridge）官方頁，Maps pin 是辦公室不是 DC。
- **適配度：中**：資料中心／colocation／managed cloud（規則 N 依職缺判斷）：業務屬雲端基礎設施，但目前沒有任何職缺可看技術棧＝中。
- **申請難度：中**：登記冊直接命中 Pulsant Limited（Maidenhead）；ATS（Pinpoint）目前未列職缺（已檢查）＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 Pulsant Limited, Maidenhead（Skilled Worker, A）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（careers.pulsant.com 目前無列出職缺，可 Register interest）；careers FAQ 提到可能需 basic／enhanced criminal record check
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：criminal record check 不是 SC，不套規則 T。
- **來源**：verified10.md #16；careers.pulsant.com；pulsant.com/colocation/edinburgh/sc-1；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 9. Heriot-Watt University（Edinburgh Campus）（#11）｜Edinburgh

- **公司簡介**：Edinburgh Riccarton 校區；IS Research support 頁列研究運算職位。
- **適配度：中**：大學（規則 3-2／N 依證據）：Information Services 有 Research Computing Support Manager；第三方曾見 Senior Azure Cloud Engineer、Software Development Lead（現況未驗證），有 cloud 職能證據＝中。
- **申請難度：中**：登記冊直接命中 Heriot-Watt University；官方 vacancy portal 連線失敗（未檢查，規則 3-1）＝中。
- **簽證／搬遷**：登記冊命中 Heriot-Watt University, Edinburgh（Skilled Worker；GAE）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（vacancies.hw.ac.uk 連線失敗）；第三方：Senior Azure Cloud Engineer（第三方稱 2025-06 已截止）、Software Development Lead、Digital Solutions Analyst（現況未驗證）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：大學 IT／RSE 兼職（MSc 期間）是否可行屬時程備註，不改難度；Student visa 工時限制與校方是否聘用在學生：未驗證
- **備註**：Trusted Research／Secure Innovation 類職缺曾出現，現況未驗證；若要求 SC，依規則 T 不計。
- **來源**：verified10.md #11；hw.ac.uk/about/professional-services/information-services/research-support；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 10. University of Stirling（#12）｜Stirling

- **公司簡介**：Stirling 大學；IS 團隊目錄公開。
- **適配度：中**：大學（規則 3-2）：Information Services 有 Development Operations（含 Infrastructure、Information Security）與 Product Development 團隊頁，有 infra／security 職能證據＝中。
- **申請難度：中**：登記冊直接命中；職缺列表為 JS「Loading…」（未檢查）＝中。
- **簽證／搬遷**：登記冊命中 University of Stirling（Skilled Worker；GAE）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（work-at-stirling 列表 JS）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：大學 IT／RSE 兼職（MSc 期間）是否可行屬時程備註，不改難度；Student visa 工時限制與校方是否聘用在學生：未驗證
- **來源**：verified10.md #12；stir.ac.uk/about/professional-services/information-services-and-library/about-is/teams；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 11. University of St Andrews（#14）｜St Andrews (Fife)

- **公司簡介**：Fife 的大學；Research Computing Team 在 Walter Bower House（Eden Campus）。
- **適配度：中**：大學（規則 3-2／N）：IT Services 有 Research Computing Team（RSE；2026 年仍辦 ScotRSE／Software Carpentry），RSE 屬可對口職能＝中。
- **申請難度：中**：登記冊直接命中；vacancies 首頁可見職缺都非 IT（Chef、Cleaner 等），cloud／RSE 未找到＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 University of St Andrews（Skilled Worker；GAE）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（現行多為 Chef／Cleaner／Nursery／Research Technician）；已過期：Computing Officer (Academic Computing)、Applications Developer、Enterprise Architect
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：大學 IT／RSE 兼職（MSc 期間）是否可行屬時程備註，不改難度；Student visa 工時限制與校方是否聘用在學生：未驗證
- **備註**：本列同時補了 brief A 組延續的 Fife／St Andrews 區域。
- **來源**：verified10.md #14；researchcomputing.wp.st-andrews.ac.uk；vacancies.st-andrews.ac.uk；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 12. EPCC（雇主 University of Edinburgh）（#10）｜Edinburgh (Bayes Centre)

- **公司簡介**：University of Edinburgh 的 HPC／研究運算中心（Bayes Centre）；與 Run 8 The Data Lab 同一法定雇主。
- **適配度：中**：HPC／研究運算中心（規則 N：HPC／RSE 可算對口職能）；但本輪沒有任何職缺可看技術棧＝中。
- **申請難度：中**：法定雇主 University of Edinburgh 在冊；EPCC Vacancies 官方寫「No current vacancies.」（已檢查）＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 University of Edinburgh（Skilled Worker；GAE；Charity Worker；International Sportsperson）；Taiwan passport 資格：未驗證
- **對口開放職缺**：官方原文「No current vacancies.」（僅代表檢查當下）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：大學 IT／RSE 兼職（MSc 期間）是否可行屬時程備註，不改難度；Student visa 工時限制與校方是否聘用在學生：未驗證
- **備註**：跨輪：University of Edinburgh 已在 Run 8 計過一次雇主；本列是不同單位，評級各自成立，但跨輪不重複計雇主（第七節）。
- **來源**：verified10.md #10；epcc.ed.ac.uk/about-us/vacancies；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 13. University of Aberdeen（#13）｜Aberdeen

- **公司簡介**：Aberdeen 大學；Digital Research 服務頁運作中。
- **適配度：中**：大學（規則 3-2）：Digital Research 提供 HPC、Trusted Research Environment、Data Safe Haven，有研究運算職能證據＝中。
- **申請難度：中**：登記冊直接命中；現行 Digital & Information Services 職缺是 Senior Analyst（臨床試驗資料／SQL），不是 cloud／platform 對口；典型 DevOps／RSE 未找到＝中。
- **簽證／搬遷**：登記冊命中 University of Aberdeen（Skilled Worker；GAE）；第三方轉載稱「may be eligible for sponsorship…dependent on factors」（非保證）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Senior Analyst (Commercial Clinical Trial Delivery)，ITS304A（截止 2026-11-10，£48,337–£57,666；資料／資訊治理，不計對口）；platform／DevOps／RSE：未找到
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：大學 IT／RSE 兼職（MSc 期間）是否可行屬時程備註，不改難度；Student visa 工時限制與校方是否聘用在學生：未驗證
- **來源**：verified10.md #13；abdn.ac.uk/jobs/vacancies；abdn.ac.uk/research/digital；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 14. Tata Technologies Europe (Tata Technologies Europe Limited)（#19）｜Warwick (EIDC)

- **公司簡介**：Warwick EIDC，CH 02016440 Active。
- **適配度：中**：工程顧問／汽車軟體（規則 3-6）：可見職缺多為汽車機械、HIL、MES、Logistics Lead Engineer，沒有 cloud／platform 證據＝中。
- **申請難度：中**：登記冊直接命中；官網 403（職缺列表未檢查，規則 3-1）＝中。
- **簽證／搬遷**：登記冊命中 Tata Technologies Europe Limited, Warwick（Skilled Worker；GBM Senior or Specialist）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（官網 403）；第三方：Logistics Lead Engineer（2026-11）等非目標職
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：另有 Tata AutoComp Systems Limited（Leamington Spa）在冊，是不同法人，不計。
- **來源**：verified10.md #19；tatatechnologies.com/nd/contact-us；jobs.co.uk；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 15. Playground Games（#17）｜Leamington Spa

- **公司簡介**：CH 07057499 Active（London 註冊地址），工作室在 Leamington Spa。
- **適配度：中**：遊戲工作室（Forza Horizon）：有 Gameplay Engineer、Senior UI Engineer 等工程職，但沒有 cloud／platform／backend／security＝中（比照 Run 9 Outfit7）。
- **申請難度：中**：登記冊直接命中（名稱 Playground Games）；對口職缺未找到＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 Playground Games, Leamington Spa（Skilled Worker, A）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Gameplay Engineer；Senior UI Engineer；Experienced UI Engineer（Hybrid Remote，日期未示）；cloud／platform：未找到
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：登記冊名稱沒有 Limited；verifier 以 CH 名對應，本報告同意。
- **來源**：verified10.md #17；jobs.jobvite.com/playground-games/jobs；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 16. Optos (Optos Plc)（#4）｜Dunfermline (Fife)

- **公司簡介**：Fife Dunfermline 的視網膜影像設備公司，CH SC139953 Active。
- **適配度：中**：醫材製造（規則 N 上限中）：有軟體工程證據（Senior Software Engineer – Medical Imaging & UI，C#），但已填補＝中。
- **申請難度：中**：登記冊直接命中 Optos Plc；IT 分類沒有職缺、R&D 只有 Principal Hardware Engineer＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 Optos Plc, Dunfermline（Skilled Worker；GBM Senior or Specialist）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Principal Hardware Engineer（2026-11-05，非對口）；已填補：Senior Software Engineer – Medical Imaging & UI（C#，頁面 2026-10-19）；cloud／DevOps：未找到
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **來源**：verified10.md #4；careers.optos.com；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 17. Aviva（Norwich）（#21）｜Norwich

- **公司簡介**：Aviva 的 Norwich 據點；AESL CH 03280551、Aviva plc CH 02468686 皆 Active。
- **適配度：中**：保險本業（規則 N 比照傳統金融上限中）：搜尋索引曾見 Principal Cloud Engineer、Application Security Manager、Full Stack Software Engineer（含 Norwich），職能對口但現況未檢查＝中。
- **申請難度：中**：常見聘用法人 Aviva Employment Services Limited 不在冊；Aviva plc 在冊但職缺法人未確認（規則 C，不計命中）；careers 403（未檢查）＝中。
- **簽證／搬遷**：本名（AESL）查無；集團 Aviva plc（London；Skilled Worker／GBM Senior／GBM Graduate Trainee）在冊但不計；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（careers.aviva.co.uk 403）；第三方：Principal Cloud Engineer（已關閉）；Technology and Change Delivery Graduate pathway（含 Norwich，須 2027 夏前取得學位等）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：敏感度：若職缺明列 Aviva plc 為雇主，依規則 C 可計命中；仍需確認開放職缺才可能更低。
- **備註**：Graduate pathway：Dennis 是否符合學位條件、開始日期與 MSc 是否衝突，未驗證（四之二）。
- **來源**：verified10.md #21；careers.aviva.co.uk/early-careers/graduates/technology-and-change-delivery-graduate-pathway；sponsors_latest.csv（集團列）

### 18. Thorntons (Thorntons Law LLP)（#6）｜Perth（總部 Dundee）

- **公司簡介**：蘇格蘭律師事務所，LLP SO300381 Active；Perth 是多據點之一。
- **適配度：中**：律師事務所（規則 3-2）：歷史／第三方職缺有 Cyber Security Analyst、Platforms Networking & Cloud Lead 等，有 cloud／security 職能證據，但日期未驗證＝中（屬判斷）。
- **申請難度：中**：本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；careers 現行清單未取得（未檢查），沿用 Run 8／9「無贊助但職缺未檢查判中」＝中。
- **簽證／搬遷**：本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（careers 具體清單未取得）；歷史／第三方：IT Service Desk Analyst、Desktop Support、Cyber Security Analyst、Platforms Networking & Cloud Lead（日期未驗證）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：本列補了 brief A 組延續的 Perth 區域。
- **來源**：verified10.md #6；thorntons-law.co.uk/careers

### 19. Centric IT Solutions Romania（#29）｜Iași, RO

- **公司簡介**：荷蘭 Centric 集團的 Iași 據點（Palas）；ONRC 未查；與已覆蓋的 Opencentric 不同雇主。
- **適配度：中**：IT 服務公司；唯一工程證據是 Software Architect（.NET、Azure、Kubernetes 加分），以 .NET 為核心，與 Dennis 只部分重疊＝中。
- **申請難度：中**：官方確認開放且明寫 Strong English；但只有一則架構職、搬遷／工作許可未驗證（Run 2 量表＝中）。
- **簽證／搬遷**：非英國；搬遷／簽證：官方未見；EU Blue Card：相關（未驗證）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Software Architect（Iași，日期未示）；另 AI Lead、Marketing Specialist（非對口）
- **語言**：明寫 Strong English skills；未列羅馬尼亞語必要
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **來源**：verified10.md #29；careers.centric.eu/ro/open-positions/software-architect

### 20. GCHQ Cheltenham（#23）｜Cheltenham

- **公司簡介**：英國政府通訊總部；非 CH 公司。
- **適配度：中**：政府情報／網路安全機構（規則 3-2）：搜尋可見 Senior Software Engineers（Ref. 3667），但 JD 頁未載入（未檢查）＝中。
- **申請難度：高**：官方 How to apply 原文要求 British citizen（雙重國籍其一為英國可考慮），通常需近 10 年中 7 年在英居住，並有 DV 等安全審查；依規則 T 所有職缺都不算對口現行職缺＝高。
- **簽證／搬遷**：不適用 Skilled Worker 持牌推論（登記冊查無）；**依官方原文需英國國籍**；Taiwan passport：依官方原文目前不符（eligibility-changes 頁未摘要）
- **對口開放職缺**：未檢查（個別 JD 頁導向通用頁）；Senior Software Engineers（Ref. 3667，只見搜尋）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：Taiwan passport：依官方 How to apply 原文，Dennis 目前不符合國籍條件；verifier 附的 eligibility-changes 新聞頁內容未摘要，若有放寬需另查。這是本報告少數有官方來源可判斷資格的列。
- **來源**：verified10.md #23；gchq-careers.co.uk/how-to-apply.html；gchq.gov.uk/news/eligibility-changes

### 21. Codemasters（The Codemasters Software Company Limited）（#18）｜Southam

- **公司簡介**：CH 02044132 Active（Guildford 註冊），工作室在 Southam。
- **適配度：中**：賽車遊戲工作室（EA 旗下）：屬軟體業，但 Southam 的 cloud／platform／backend 職缺未找到＝中。
- **申請難度：高**：本名不在登記冊；只有集團 Electronic Arts Limited（Guildford）在冊，依規則 A/C 不計；無對口職缺＝高。
- **簽證／搬遷**：本名查無；集團 Electronic Arts Limited（Skilled Worker／GBM Senior，不計）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（EA Careers 篩選未完整列出 Southam 工程職）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：若職缺實際由 Electronic Arts Limited 聘用，需逐職確認（規則 C）。
- **來源**：verified10.md #18；careers.ea.com/ea-studios/codemasters/studio

### 22. EPSILONNET（Epsilon Net）（#28）｜Pilea (Thessaloniki), GR

- **公司簡介**：Thessaloniki 都會區的軟體集團，官網頁尾 GEMH 038383705000（政府資料庫未核）。
- **適配度：中**：希臘會計／ERP 軟體產品公司；只見第三方 .NET Software Engineer，cloud／DevOps 未見＝中。
- **申請難度：高**：官方職缺深頁未完整列出（未檢查）；第三方職缺為 .NET 且希臘語是否必要未驗證（規則 M 阻止評低）；無確認開放的對口職缺＝高（Run 2 量表）。
- **簽證／搬遷**：非英國；搬遷／簽證：官方未見；EU Blue Card：相關（未驗證）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（官方 Job Vacancies 深頁）；第三方：.NET Software Engineer（solid English）
- **語言**：希臘語是否必要：未驗證
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **來源**：verified10.md #28；epsilonnet.gr/en/human-resources；jobs.workable.com/company/670e64f7d8b91d268925dcf4

### 23. Sorsix（#32）｜Skopje, MK

- **公司簡介**：Skopje 的醫療軟體公司；當地公司登記未查。
- **適配度：中**：醫療資訊軟體公司；沒有職缺可看技術棧＝中。
- **申請難度：高**：官方寫「currently do not have any open positions」；北馬其頓非 EU、無 Blue Card；當地 work＋residence permit 路徑有官方來源，但 Taiwan 資格與公司協助未驗證＝高。
- **簽證／搬遷**：非英國；非 EU（無 EU Blue Card）；當地需 Work Permit＋Residence Permit（Invest North Macedonia）；Taiwan passport 資格：未驗證
- **對口開放職缺**：官方原文：currently do not have any open positions（接受一般申請）
- **語言**：工作語言未驗證
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **來源**：verified10.md #32；sorsix.com/company/careers；investnorthmacedonia.gov.mk/work-visas-and-permits

### 24. G+D Netcetera（Skopje）（#33）｜Skopje, MK

- **公司簡介**：瑞士 Netcetera 的 Skopje 據點；當地法人未查。
- **適配度：中**：支付／數位軟體公司；Skopje 有 Senior Android Engineer、IT Infrastructure Project Manager，都不是 platform／DevOps＝中。
- **申請難度：高**：無對口職缺（Android、PM 不屬 Dennis 目標職類，規則 D 不視為入口）；非 EU、無 Blue Card＝高。
- **簽證／搬遷**：非英國；非 EU（無 EU Blue Card）；當地 Work／Residence Permit（Invest North Macedonia）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Senior Android Engineer（明寫英語流利）；IT Infrastructure Project Manager；platform／DevOps：未找到
- **語言**：Android 職明寫 fluent English；未列馬其頓語必要
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **來源**：verified10.md #33；netcetera.com/careers/open-positions

### 25. Ministry of Programming（#34）｜Sarajevo, BA

- **公司簡介**：Sarajevo 的軟體工作室；公司登記未查；獎項為自述。
- **適配度：中**：軟體工作室（自述 React/Node/Java/.NET/AWS/Azure）；只有 General Application，沒有具名職缺＝中。
- **申請難度：高**：無具名對口職缺；波赫非 EU、無 Blue Card；工作許可由雇主申請、效期通常不超過一年（BiH 民政部 FAQ），Taiwan 資格未驗證＝高。
- **簽證／搬遷**：非英國；非 EU（無 EU Blue Card）；工作許可由雇主申請（BiH 民政部 FAQ）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（只有 General Application）
- **語言**：網站英文；波士尼亞語要求未驗證
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **來源**：verified10.md #34；ministryofprogramming.com/careers；mcp.gov.ba FAQ

### 26. Lifescan Scotland (LifeScan Scotland Limited)（#3）｜Inverness

- **公司簡介**：Inverness 的血糖儀製造廠，CH SC154012 Active；地方新聞稱 2026 夏季裁員後廠區仍運作（第三方）。
- **適配度：低**：醫材製造（規則 N）：只見第三方 Database Support Systems Analyst（SQL Server／製造系統，日期未驗證），屬管理式 IT＝低。
- **申請難度：中**：本名登記冊查無（sponsors_latest.csv，2026-11-06 版）（只有集團 Lifescan U.K. Limited 在冊，規則 A/C 不計）；官方職缺清單未檢查（JS），依規則 3-1 不寫沒有職缺＝中（比照 Rareloop）。
- **簽證／搬遷**：本名查無；集團 Lifescan U.K. Limited（Uxbridge；Skilled Worker／GBM Senior，不計）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（lifescan.com/careers 未渲染清單）；第三方：Database Support Systems Analyst（日期與現況未驗證）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：本列補了 brief A 組延續的 Inverness 區域。
- **來源**：verified10.md #3；lifescan.com/careers；inverness-courier.co.uk

### 27. Shetland Islands Council（#8）｜Lerwick (Shetland)

- **公司簡介**：Shetland 地方政府（非 CH 公司）；官網 https 失敗、http 500（不是停業證據）。
- **適配度：低**：地方政府（規則 3-2）：IT 證據只有 ICT Analyst – Computer Centre、ICT Assistant（都已截止），屬管理式 IT＝低。
- **申請難度：中**：登記冊直接命中；myjobscotland 現行清單未解析（未檢查）＝中。
- **簽證／搬遷**：登記冊命中 Shetland Islands Council（Skilled Worker, A）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（myjobscotland 清單）；已截止：ICT Analyst – Computer Centre（2026-10-22）、ICT Assistant（2026-09-07）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **來源**：verified10.md #8；myjobscotland.gov.uk/councils/shetland-islands-council/jobs；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 28. EMEC (The European Marine Energy Centre Ltd)（#2）｜Stromness (Orkney)

- **公司簡介**：Orkney 的海洋能源測試中心，CH SC249331 Active（guarantee company）。
- **適配度：低**：海洋能源測試中心（規則 N）：沒有任何 IT／軟體職缺或團隊證據＝低（資料不足）。
- **申請難度：中**：登記冊直接命中；官方 Vacancies 頁目前「No vacancies」＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 The European Marine Energy Centre Ltd, Stromness（Skilled Worker, A）；Taiwan passport 資格：未驗證
- **對口開放職缺**：官方原文「No vacancies」（僅代表檢查當下）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：低評論數不是反證（verifier 同意）。
- **來源**：verified10.md #2；emec.org.uk/join-our-team/vacancies；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 29. AJ Engineering (AJ Engineering & Construction Services Limited)（#5）｜Forres (Moray)

- **公司簡介**：Moray Forres 的工程公司，CH SC188199 Active（Glasgow 註冊地址）。
- **適配度：低**：工程製造（規則 N）：歷史職缺都是 Fabricator／Welder／Estimating Manager，沒有 IT 團隊證據＝低。
- **申請難度：中**：登記冊直接命中；官方「No Current Vacancies」＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 AJ Engineering & Construction Services Limited, Forres（Skilled Worker, A）；Taiwan passport 資格：未驗證
- **對口開放職缺**：官方原文「No Current Vacancies」
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：持牌很可能用於製造技工，與 Dennis 無關（推論，不影響評級）。
- **來源**：verified10.md #5；ajengineering.co.uk；sponsors_latest.csv（2026-11-06 版，本報告重查命中）

### 30. UHI Inverness（Board of Management of Inverness College；中央 UHI 為條件式）（#15）｜Inverness

- **公司簡介**：UHI 的 Inverness 成員學院；中央 UHI 法人 SC148203 Active。
- **適配度：低**：高教（規則 3-2）：沒有公開 IT／RSE 團隊頁，現行只有 Academic Administration Officer＝低（資料不足）。
- **申請難度：高**：Maps 雇主 UHI Inverness（OSCR SC021197）本名不在冊；中央 University of the Highlands and Islands（SC148203）在冊，但職缺雇主未確認，依規則 A/C 不計；無對口職缺＝高。
- **簽證／搬遷**：本名查無；中央 UHI 在冊（Skilled Worker；GAE）但為條件式，不計；UHI Shetland 亦在冊（姊妹 partner，不計）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到；UHI Inverness：Academic Administration Officer（截止 2026-11-22，非 IT）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：敏感度：若職缺明列中央 UHI 為雇主，難度可回到中（規則 C）。
- **備註**：大學 IT／RSE 兼職（MSc 期間）是否可行屬時程備註，不改難度；Student visa 工時限制與校方是否聘用在學生：未驗證
- **來源**：verified10.md #15；oscr.org.uk SC021197；uhi.ac.uk/en/staff/vacancies；sponsors_latest.csv（中央 UHI 列）

### 31. Gordon & MacPhail (Speymalt Whisky Distributors Limited)（#9）｜Elgin (Moray)

- **公司簡介**：Elgin 的威士忌公司，CH SC037522 Active，交易名 Gordon & MacPhail。
- **適配度：低**：威士忌製造／經銷：唯一 IT 職是 Deputy IT Manager（管理式 IT，已截止）＝低。
- **申請難度：高**：本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；Deputy IT Manager 已於 2026-10-30 截止，無對口職缺＝高。
- **簽證／搬遷**：本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；Taiwan passport 資格：未驗證
- **對口開放職缺**：已截止：Deputy IT Manager（2026-10-30 中午，第三方；官網仍掛）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：官網 Open Positions 仍顯示已過期職缺，以截止日為準（規則 P）。
- **來源**：verified10.md #9；gordonandmacphail.com/career-opportunities；hire.moi

### 32. Highland Spring Group (Highland Spring Limited)（#7）｜Blackford (Perthshire)

- **公司簡介**：Perthshire Blackford 的瓶裝水公司，CH SC067339 Active；Maps 沒有網站，官網 highlandspring.com 由 verifier 以公司號對照查得。
- **適配度：低**：瓶裝水製造：只見 Production Operator，IT 未找到＝低。
- **申請難度：高**：本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；careers 明寫「you must have the right to work in the UK as we cannot offer sponsorship at this time」（規則 E／K／T）＝高。
- **簽證／搬遷**：本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；**明示不贊助**；Taiwan passport 資格：未驗證
- **對口開放職缺**：Production Operator（The Ochils，約 12 天前）；IT：未找到
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **來源**：verified10.md #7；highlandspring.com/careers

### 33. SaxaVord Spaceport (Shetland Space Centre Limited)（#1）｜Unst (Shetland)

- **公司簡介**：Shetland Unst 的太空港，法人 SC575537 Active（註冊地 Grantown-on-Spey）；住宿是發射場附屬設施。
- **適配度：低**：太空發射場營運（規則 N：只有設施／營運職）：沒有軟體／雲端證據＝低。
- **申請難度：高**：本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；唯一近期職缺 Range Operations Assistant 已截止＝高。
- **簽證／搬遷**：本名登記冊查無（sponsors_latest.csv，2026-11-06 版）；Taiwan passport 資格：未驗證
- **對口開放職缺**：已截止：Range Operations Assistant（官網 2026-10-22；LinkedIn 截止 2026-11-06）；cloud／platform：未找到；SC：未見（未驗證）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-09）距開學 296 天、距畢業 662 天
- **備註**：本列補了 brief A 組延續的 Shetland 太空區域；Orbex 因 Maps 顯示 Permanently closed 被 scout 排除（不代表公司解散），本輪沒有列。
- **來源**：verified10.md #1；saxavord.com/recruitment；CH SC575537

---

## 七、跨輪比較：Run 1–Run 10

### 十輪規模

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
| **Run 10** | **34** | **33 列／33 雇主**（UoE 與 Run 8 重複） | **1** | **Ripjar（高／低，有條件）** |
| 合計 | 363 列 | — | — | 以列計，不是不重複雇主數 |

**英國難度「低」累計**：
- Run 4：FanDuel
- Run 6：五家
- Run 7：三家
- Run 8：ENSEK（高／低）、OQC（中／低）
- Run 9：無
- Run 10：**Ripjar（高／低，有條件）**、**Next（中／低，有條件）**

### 更新後英國 Top 10（十輪合併，英國且有贊助者）

方法：沿用 Run 2–9。適配優先，同級看贊助與確認開放的對口職缺；規則 W：本輪新的 高／低 排在前幾輪的 高／中 之前；同為 高／低 時依證據強度排序；前幾輪條目之間的相對順序不變。

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
| 9 | **Ripjar（新）** | Run 10 | 高／低 | DevOps Engineer（Terraform/K8s/AWS/SIEM），Ripjar Ltd 直接命中，JD 無 SC／工作權條款，有條件 |
| 10 | Starling Bank | Run 6 | 高／低 | Engine 法人未驗證，有條件 |

- **進出**：**Ripjar 進（第 9）**；**Version 1 出**（第一候補）。
- **Ripjar 的位置**：與 ENSEK 同屬「本名直接命中＋官方確認對口職＋有條件」。依規則 W，前幾輪條目的相對順序不變，ENSEK 在前；DevOps 已刊登 202 天，新鮮度也比較弱。Ripjar 的法人與職缺雇主一致，JD 也讀過全文，證據強於 Starling（Engine 法人未驗證）與 Version 1（規則 S 封閉集合），所以排在兩者之前。
- **候補（節錄）**：
  - 第一候補：**Version 1**（Run 6，高／低，規則 S 封閉集合，有條件；因 Ripjar 插入而退出）。
  - 其後依序（高／中）：Texaport、Spire、Proofpoint、Bellrock、AAC Clyde Space、Skyscanner、Scott Logic、Waracle、Made Tech、Wise、Rapid7、Pulsion、Encompass、Revolut、Kainos、Datactics、Data Intellect、Copper、Crypto Facilities、Amazon Development Centre Scotland、Aiimi。
  - **Run 10 新增 高／中**，接在 Aiimi 之後：
    1. **Epos Now**：本名在冊，官方列表確認職稱，但 JD 未開。
    2. **Connexin**：本名在冊，但對口職只見第三方。
  - 再其後：OQC（中／低）、Barclays（中／低）、**Next（Run 10，中／低，有條件）**、JPMorgan／Lloyds（中／中）、Scottish Water、Met Office（中／中）；本輪的 Pulsant、Heriot-Watt 等大學列（中／中）接在最後。
  - GCHQ（中／高）**不列候補**：官方要求英國國籍（規則 T）。
- **敏感度**：
  - Epos Now 或 Connexin 若官方 JD 確認對口且開放，會成為 高／低（有條件），依規則 W 可能與 Ripjar 同層競爭第 9–10 位，Starling 可能退出。
  - Aiimi（Run 9）的敏感度仍未解決。
  - 本報告不推論。

### 歐洲（非英國）Top 10（十輪合併）

方法：規則 Q。本輪最佳的 Endava Timișoara、OPSWAT、Workable 都是 高／中，但都**沒有官方 relocation、visa 或 Blue Card 說明**，Taiwan 資格也未驗證。依規則 Q，它們不足以擠下已有 relocation 或官方名單證據的條目。**Top 10 與 Run 9 完全相同。**

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
- 現有：Synerise、Kentico、Nord Security、Bitdefender、Tresorit、UiPath、Bloomreach SK、ESET、Infobip Zagreb，接著 OpenText Cork、Einride、OutSystems、Talkdesk、Glovo、Myra、Feedzai、sennder、Zalando Dublin、Pipedrive、GlobalLogic、Honeycomb、Qualcomm Cork、Medtronic Galway。
- **Run 10 新增**，接在 Infobip Zagreb 之後（規則 Q 第 2–4 點）：
  1. **Endava Timișoara**（高／中）：官方確認開放 Senior DevOps Engineer with Azure，層級接近 Dennis。
  2. **OPSWAT Timișoara**（高／中）：官方確認 ML Engineer，明寫只需英語，但不是目標職類。
  3. **Workable Athens**（高／中）：SRE 職已關閉；曾有 Relocation Bonus，但只見於第三方，不符合規則 Q 第 1 點。
- 之後依序：Accedia、Ciklum、GoTo Hungary（中／中）、**Centric Iași（Run 10，中／中）**、Printful（中／高）、Comtrade、Cosylab、Outfit7（中／高）；本輪 EPSILONNET、Sorsix、G+D Netcetera、Ministry of Programming（中／高；後三家非 EU）接在最後。

### 與 Run 9 相比：本輪改變了什麼

1. **英國 Top 10 換一家**：Ripjar 進第 9，Version 1 退為第一候補；歐洲 Top 10 **不變**。
2. 登記冊更新為 2026-11-06 版並獨立重查：16 雇主／26 列，verifier 的 16 個命中與 4 個集團／條件式判定全部正確。
3. 第一次覆蓋大學 IT／RSE／HPC：五所大學（含 EPCC）都在冊，也都有團隊證據，但本輪沒有任何確認開放的 cloud／RSE 職缺，全部判 中／中。
4. 第一次覆蓋 Cheltenham cyber cluster：同一城市分成兩種情況——GCHQ 有國籍限制（規則 T），Ripjar 的 JD 則沒有任何 SC 條款。
5. Run 9 缺的蘇格蘭北部與東部區域（Inverness、Shetland／Orkney、Moray、Fife、Perth）本輪都有列，但 9 家 A 組雇主沒有任何確認開放的對口職缺。
6. **沒有新增規則**。

---

## 八、未驗證／缺口

1. **個別職缺贊助**：除 Highland Spring 明示不贊助、GCHQ 國籍限制外，所有英國職缺都沒有贊助字樣，CoS 一律未驗證；Ripjar 與 Next 的「低」都是「有條件」。
2. **官方職缺未確認或未讀**：
   - Connexin Lead Software Specialist 只來自第三方；Epos Now 兩則 JD 未開。
   - Aviva Norwich 的科技職缺（careers 403）未檢查。
   - Thorntons 歷史 IT／cloud 職缺日期未驗證。
3. **JS／被擋的職缺板（未檢查）**：
   - 英國：Lifescan careers、Shetland Islands Council（myjobscotland 清單）、Heriot-Watt vacancy portal（連線失敗）、Stirling（JS）、Tata Technologies（403）、Aviva（403）、Connexin（SPA）、GCHQ 個別 JD。
   - 歐洲：Workable 職缺列表、EPSILONNET 深頁、OPSWAT 列表（504）。
4. **聘用法人與登記**：
   - UHI：Inverness 成員校與中央 UHI 是不同雇主，實際聘用法人依職缺而定。
   - Aviva：AESL 與 plc 的對應未確認（規則 C）。
   - Codemasters：EA 聘用法人未確認。
   - 歐洲各列的國家登記（GEMH、ONRC、北馬其頓與波赫公司登記）全部未查。
5. **歐洲**：
   - 搬遷、工作許可、EU Blue Card、實際工作語言、Taiwan passport 資格全部未驗證。
   - brief 要求「找明文 relocation／visa 字樣」：本輪 8 家都沒有官方明文（Workable 只有第三方、已關閉職缺）。
   - 北馬其頓與波赫已有官方工作許可來源，但 Taiwan 能否取得、公司是否協助都未驗證。
6. **範圍：A 組延續區域是否真的補上**：
   - **有列**：Inverness（Lifescan、UHI Inverness）、Shetland（SaxaVord、Shetland Islands Council）、Orkney（EMEC）、Moray（AJ Engineering、Gordon & MacPhail）、Fife（Optos、St Andrews）、Perth（Thorntons、Highland Spring）。
   - **仍缺**：brief 指名的 Inverness Campus 科技公司、Highlands & Islands Enterprise portfolio 軟體公司、St Andrews spin-out、Perth／Dunfermline 有內部 IT 團隊的大型雇主，scout 都沒有產出。
   - Orbex 因 Maps 標 Permanently closed 被排除（不代表法人解散，未查 CH）；H2 Green、Brightsolid Perth 搜尋無結果（audit）。
   - 結論：**地理上已覆蓋，但產業上沒有補到軟體／雲端雇主**；下一輪若再做北蘇格蘭，應改用 HIE／Inverness Campus 名錄而非 Maps。
7. **B 組缺口**：除 Pulsant 外，沒有其他蘇格蘭資料中心或 ISP（audit「Additional Scottish ISP brands」未開）；Pulsant 的 Edinburgh DC 職缺目前為零。University of Dundee 因父雇主重複被排除。
8. **C 組缺口**：Ipswich／Martlesham 只有已清算的 Coderus，BT Adastral Park 未能以雇主建立；Gloucester 沒有列；Coventry 市區沒有列（Warwick／Leamington／Southam 有）。
9. **其他招聘管道**：LinkedIn、Indeed、Otta 大多未逐一查證。
10. **Graduate 招募季**：各公司 2027–28 的 graduate 招募日期全部未驗證（含 Aviva Technology pathway）。

---

## 九、verified10 的不一致與需注意之處

1. **#23 GCHQ 的資格寫法**：verifier 一方面引官方 How to apply「必須是 British citizen」，一方面把 Taiwan passport 資格寫成「未驗證」。本報告認為這正是「有官方來源」的情況：依原文，Dennis 目前不符合。verifier 附的 `eligibility-changes` 新聞頁沒有摘要內容；若有放寬，需另查（第十節）。
2. **#13 Aberdeen 被列在「主要相符／接近職缺」**：總覽把 Senior Analyst（臨床試驗資料）列為相符或接近，但表格自己說「非典型 cloud/DevOps/platform」。本報告不計為對口。
3. **#24 Ripjar 的職缺年齡**：總覽列 DevOps Engineer 為主要相符，沒有標出已刊登 202 天（Data Engineer 258 天）；JD 的語言／clearance「未在本次打開的 JD 全文驗證」——分析者補讀三則 JD，未見 SC 或工作權條款（第十節）。
4. **#20 Next Senior Full Stack 的 Apply Before**：verifier 寫「本次未解析」；分析者讀取頁面，頁面本身只有 Posting Date（2026-08-27），沒有 Apply Before 欄位（不是解析失敗）。
5. **#10 的登記列數**：總覽寫「#10（University of Edinburgh, University of Edinburgh）」看似 2 列；表格與重查都是 4 列（Skilled Worker、GAE、Charity Worker、International Sportsperson）。其他命中的括號也是列名重複，不代表列數。
6. **#27 Workable 的 relocation**：Relocation Bonus 來自第三方轉載的已關閉職缺；verifier 已標「公司政策未驗證」，本報告同意，不當作規則 Q 證據。
7. **英國登記冊上的同品牌英國法人**：Workable Software Limited（London）與 Endava UK Ltd（London）都在冊，verifier 沒有提到。它們與 Athens／Timișoara 列無關（規則 A），本報告只在第一節附表揭露，不計命中。
8. **UHI Shetland**：登記冊另有 UHI Shetland（Lerwick），verifier 已在 #15 標為姊妹 partner、不計，本報告同意。
9. **#16 Pulsant 的 clearance 欄**：verifier 寫「可能要求 basic criminal record／enhanced」，這是 DBS 類背景查核，不是 SC；本報告不套規則 T。
10. **#6 Thorntons 官網**：同一欄同時寫「403／封鎖頁」與「WebFetch HTTP 成功」；本報告以「careers 清單未取得＝未檢查」處理。

---

## 十、判斷與揭露（無新增規則）

1. **Ripjar 判 高／低（有條件）並進英國 Top 10 第 9**：
   - 依據：本名直接命中，官方 Workable 確認開放；分析者讀 JD 全文，沒有 SC、工作權或不贊助條款，所以規則 T／K 不觸發。
   - 「有條件」：JD 沒有贊助承諾，個別 CoS 未驗證；DevOps 已刊登 202 天（規則 P 照計）。
   - Ripjar 由前 GCHQ 人員創立，屬 Cheltenham cyber cluster；若日後職缺加入 SC 要求，依規則 T 改判。
2. **Next 判 中／低（有條件）**：
   - 適配中：零售本業，Run 2 補充依 IT 職缺判斷；技術棧以 .NET／MVC 為主，只部分重疊。
   - 難度低：法人一致（規則 C）且官方職缺開放。Developer – Finance Technology 以 C#/.NET 為核心，規則 O 只列 Java／Kotlin／PHP，本報告**不擴張規則 O**；「低」主要依據 Senior Full Stack（接受 Node.js 或同等）。若讀者認為 C# 也應比照規則 O，Next 仍可依 Senior Full Stack 維持「低」，差別不大。
3. **Epos Now 判 高／中，不判低**：官方列表確認職稱，但 JD 未開，技術棧未知，可能觸發規則 O；比照 Run 9 Aiimi「未確認就不評低」的精神。
4. **Connexin 判 高／中**：電信公司依規則 N 以職缺判斷。Lead Software Specialist（Cloudflare Workers/TS）技能高度對口，所以適配給高；但只見第三方，難度不評低。
5. **GCHQ 判 中／高**：官方國籍要求依規則 T 判高；適配因 JD 未檢查只給中。本輪少數以官方原文判定 Taiwan passport 不符的列。
6. **大學列（Heriot-Watt、Stirling、St Andrews、Aberdeen、EPCC）都判 中／中**：
   - 適配：都有 IT／RSE／HPC 團隊證據（規則 3-2），但沒有現行對口職缺，所以不給高。
   - 難度：都在冊，但缺職缺或職缺列表未檢查。
   - 兼職或在學工作的意義只寫在時程，不改難度（brief 要求）。
7. **UHI 判 低／高**：Maps 雇主（Inverness 成員校）不在冊；中央 UHI 在冊但屬條件式，依規則 A/C 不計。
8. **Pulsant 判 中／中**：資料中心依規則 N 以職缺判斷；沒有職缺，所以適配只給中（業務屬雲端基礎設施，不判低）。
9. **Thorntons 判 中／中**：律師事務所，但有歷史 cloud／security 職能證據（日期未驗證）；沿用「無贊助但職缺未檢查判中」。
10. **OPSWAT 判 高／中**：資安產品公司、ML Engineer 確認開放且明寫英語；ML 不屬目標職類，依規則 D 本來不算入口，但完整列表 504（規則 3-1 不加重），給中屬判斷，差距不大。
11. **Workable 判 高／中**：唯一對口職已關閉，列表未檢查；依規則 3-1 不加重，給中屬判斷。
12. **Coderus 移到第五節**：法人清算中（規則 V），網站仍在不改判定。
13. **EPCC 跨輪計數**：University of Edinburgh 已在 Run 8 計過，本輪列仍評級，但第七節合計以列計，不重複算雇主。
14. **英國列與歐洲列混排**：第四節排名表把英國與歐洲列放在同一張表（同 Run 7–9），但兩者適用不同的難度量表，跨區比較只供參考。
15. **分析者補查**：Ripjar、Next、Epos Now 的頁面由分析者在 2026-11-09 直接讀取（只讀、未聯絡公司），結果已寫入第九節與第六節；其餘依 verified10。

本輪所有判斷都能用 Run 1–9 的規則（3-1～3-6、A–W）處理，**沒有新增規則**（若需要，會從 X 開始編號並揭露）。
