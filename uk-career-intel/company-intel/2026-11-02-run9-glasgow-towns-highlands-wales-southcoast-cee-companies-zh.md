# 第九輪組織（Run 9）：Glasgow 周邊城鎮 ＋ 蘇格蘭體育／觀光 ＋ 威爾斯／南岸／Milton Keynes／York／Exeter ＋ 中東歐（斯洛伐克／斯洛維尼亞／克羅埃西亞／塞爾維亞）——適配度與申請難度評級報告

- 報告日期：2026-11-02（Asia/Taipei）
- 資料來源：`brief.md`（Run 9 參數）、`scout9.tsv`（32 筆）、`verified9.md`（32 列，檢查日 2026-11-02；含 verified9_A–D.md 批次）、`sponsors_2026-10-30.csv`（GOV.UK 持牌贊助登記冊 2026-10-30 版，本地 143,198 資料列）、Run 8 報告（評級規則 A–W、跨輪 Top 10 基準）。
- **登記冊重查**：本報告用 `sponsors_2026-10-30.csv` 以法定名／交易名（不分大小寫、完全比對）獨立重查（`gen/regcheck.py`），不只引用 verified9。
- 原則：只用上述檔案中的資料；沒有資料的標「未驗證」；頁面無法載入的標「未檢查」（不等於沒有職缺）；只有官方頁面明寫時，才引原文說目前沒有職缺。Taiwan passport 的雇主層級資格一律「未驗證」。時程適配另列（規則 3-3、F），不併入難度。**本輪沒有聯絡任何公司。**
- Dennis：Cloud & Security Platform Engineer（Go/Next.js/Python/PostgreSQL、SIEM、gRPC、AWS/Cloudflare），約 5–6 年，IELTS 7.5；UofG MSc 假設 2027-09-01 開學、2028-09-01 畢業；Taiwan passport；畢業後走 Graduate visa，再轉 Skilled Worker；入學前在台灣。
- 本輪範圍（brief）：A Glasgow 周邊城鎮（Paisley／Lanarkshire／Ayrshire 等）約 9；B 蘇格蘭未覆蓋群（Highlands、Fife、Perth、體育、觀光）約 7；C 英國未覆蓋城市（Cardiff/Newport、Southampton/Portsmouth、Brighton、Milton Keynes、York、Exeter）約 10；D 中東歐（斯洛伐克、斯洛維尼亞、克羅埃西亞、塞爾維亞）約 8；目標約 34（實際 32）。
- 產生方式：`gen/entries.py`（逐家資料）、`gen/parts.py`（各節文字）、`gen/regcheck.py`（登記冊重查）、`gen/build.py`（輸出本檔）。

---

## 一、摘要

- **規模**：32 列＝32 個不重複雇主。**評級 29 家**（英國 22、歐洲非英國 7），**排除／存疑 3 家**（#6 Atos Paisley、#8 Pegasus Express 存疑；#15 AxylCloud 疑似已停業），依規則 V 移到第五節，只給參考評級。
- **分組**：A（#1–8）8 家；B（#9–11）3 家；C（#12–25）14 家；D（#26–32）7 家。實際分布與 brief 目標（9／7／10／8）不同：B 組沒有 Highlands／Inverness、Fife／St Andrews、Perth 的列（見第八、九節）。
- **登記冊重查結果**：verified9 宣稱的 14 個命中（#2, 3, 5, 6, 7, 9, 10, 11, 19, 20, 21, 23, 24, 25）**全部成立**，共 **14 個不重複雇主、23 筆登記列**。#1（GE Aviation Systems Limited）、#13（Aspire Systems UK Ltd）只有集團公司在冊，**同樣確認不計**。其餘 11 個名稱（#1 GE Caledonian、#4、#8、#12、#13 Cardiff 法人、#14–18、#22）以本名查詢都查無。注意：14 個命中中，#6 Atos 屬存疑列（不進主表），#2、#7、#19 的職缺明示不贊助。
- **分布**：見第四節末。**本輪沒有任何 高／低 或 中／低。**
- **最佳**：
  1. **Aiimi**（Milton Keynes，高／中）：Software Developer（NodeJS/C#/cloud/CI/CD）＋Graduate Data Engineer，本名在冊；職缺只來自第三方，所以不評低。
  2. **Bloomreach SK**（Bratislava，高／中）：Senior DevOps、Senior Cloud Security、Product Security、SRE。
  3. **ESET**（Bratislava，高／中）：DevOps Engineer（English B1+）、Kubernetes Platform Engineer。
  4. **Infobip Zagreb**（高／中）：DevOps Engineer（on-site）、SRE。
  5. **Scottish Water**（Stepps，中／中）：在冊＋有 Cyber-Security Architect（SIEM/Azure）職能證據，但該職已於 2026-10-15 截止。
- **明示不贊助**：Unity Brighton（高／高，規則 K）、Evotix（中／高）、Prestwick Aerosystems（低／高）。
- **Top 10 變動**：
  - 英國：**不變**（本輪沒有新的 高／低）。Aiimi 加入候補。
  - 歐洲：**不變**（規則 Q：本輪歐洲列都沒有官方 relocation／visa 證據）。Bloomreach、ESET、Infobip 加入候補。
- **截止日**：本輪沒有任何仍在開放、且有官方截止日的對口職缺。

---

### 登記冊逐列重查（sponsors_2026-10-30.csv）

| # | 雇主（登記名） | 城市 | 路線（登記列數） | 結果 |
|---:|---|---|---|---|
| 2 | Prestwick Aerosystems Limited | Ayrshire | Skilled Worker（1） | 命中；職缺明示不贊助 |
| 3 | Woodward International, Inc (t/a Woodward Aircraft Engine Systems Prestwick) | Prestwick | Skilled Worker（1） | 命中 |
| 5 | Scottish Water | Glasgow | Skilled Worker（1） | 命中 |
| 6 | Atos IT Services UK Ltd | London | Global Business Mobility: Graduate Trainee；Global Business Mobility: Senior or Specialist Worker；Skilled Worker（3） | 命中；據點存疑，不進主表 |
| 7 | Evotix Limited | Glasgow | Skilled Worker（1） | 命中；職缺明示不贊助 |
| 9 | SCOTTISH RUGBY LIMITED／Scottish Rugby Union Limited | Edinburghq／Edinburgh | Skilled Worker；International Sportsperson；Skilled Worker；International Sportsperson（4） | 命中（兩組名稱，計 1 雇主） |
| 10 | Celtic plc | Glasgow | Skilled Worker；International Sportsperson（2） | 命中 |
| 11 | VisitScotland | Edinburgh | Skilled Worker（1） | 命中 |
| 19 | Unity Software Limited | Brighton | Skilled Worker；Global Business Mobility: Senior or Specialist Worker（2） | 命中；對口職明示不贊助 |
| 20 | Aiimi Ltd | Milton Keynes | Skilled Worker（1） | 命中 |
| 21 | KINETIC SOLUTIONS LIMITED | MILTON KEYNES | Skilled Worker（1） | 命中 |
| 23 | Rapita systems Limited | York | Skilled Worker（1） | 命中 |
| 24 | Science Museum Group | London | Skilled Worker；Government Authorised Exchange（2） | 命中（以法定雇主 SMG 計） |
| 25 | Met Office | Exeter | International Agreement；Skilled Worker（2） | 命中 |
| 1 | （GE Aviation Systems Limited） | Cheltenham | Global Business Mobility: Graduate Trainee；Skilled Worker；Global Business Mobility: Senior or Specialist Worker（3） | 只有集團，不計 |
| 13 | （Aspire Systems UK Ltd） | London | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 只有集團，不計 |

合計：14 個不重複雇主、23 筆登記列（不含 2 家集團公司；全部 A rating）。持牌不等於個別職缺會擔保。本名查無：#1 GE Caledonian、#4、#8、#12、#13（Cardiff 法人）、#14、#15、#16、#17、#18、#22。

---

## 二、簽證與聘僱路徑（本輪查核範圍）

- **英國**：本輪以 2026-10-30 版登記冊重查（14 雇主／23 列）。Graduate visa 18 個月與 New Entrant 門檻已在 Run 6 第二節以 gov.uk 原文確認，本輪沿用結論，不重複引述：2028-09 畢業 → Graduate visa 約 18 個月 → 轉 Skilled Worker；New Entrant 有 4 年上限（含 Graduate 期間）。
- **職缺上的贊助字樣**：
  - 明示不贊助：Prestwick Aerosystems（「no visa sponsorship available」）、Evotix（「unable to offer visa sponsorship」）、Unity Brighton（「Work visa/immigration sponsorship is not available」）。三家都在登記冊上，但持牌不等於個別職缺會擔保。
  - 工作權條款：Rapita Software Engineering Team Lead（「must be eligible to work in the UK」，規則 T）。
  - 其餘英國對口職缺都沒有贊助字樣；個別 CoS 一律未驗證。
- **中東歐**：
  - 斯洛伐克、斯洛維尼亞、克羅埃西亞屬 EU：EU Blue Card 只標「相關」（規則 J），不算已證實路徑。
  - 塞爾維亞（#31–32）非 EU：**不適用 EU Blue Card**，塞爾維亞工作許可未驗證。
  - 本輪所有中東歐列都**沒有官方 relocation／visa 說明**（Cosylab 的「relocation」是搬到美國 Palo Alto，不算）。Taiwan passport 資格一律未驗證。

---

## 三、評級標準（與 Run 1–8 相同，規則 A–W 全文沿用；本輪無新增規則）

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

**本輪如何適用（不是新規則）**：航太 MRO／製造、物流、水務、體育依規則 N 與 3-2；明示不贊助依規則 E／K；工作權條款依規則 T；集團持牌依 A/C；未檢查依 3-1；中東歐依 Run 2 量表與規則 D、J、M、Q；存疑／停業依規則 V。

---

## 四、排名表（29 個不重複雇主＝29 列；另 3 列見第五節）

「未檢查」＝入口無法載入，不等於沒有職缺。時程另見四之二，不併入難度。英國列用英國難度量表，非英國列用 Run 2 量表。

| 排名 | 組織（#） | 國家／城市 | 適配 | 適配理由（一句） | 難度 | 難度理由（一句） | 簽證／搬遷（簡） | 對口開放職缺（2026-11-02） | 時程 |
|---:|---|---|:-:|---|:-:|---|---|---|---|
| 1 | Aiimi (Aiimi Ltd)（#20） | UK／Milton Keynes | 高 | 資料／軟體產品公司；Software Developer（NodeJS/C#/TS、cloud、CI/CD、Docker）與 Graduate Data Engineer / Analyst 對口（規則 3-6）。 | 中 | 登記冊直接命中 Aiimi Ltd；但兩則職缺都只來自第三方（jobs24、huntukvisasponsors），官方 Workable API 沒有回傳清單，不算『確認開放』，故不評低。 | 登記冊命中 Aiimi Ltd, Milton Keynes（Skilled Worker, A）；個別職缺贊助未驗證 | Software Developer（Milton Keynes，第三方 2026-10-18 刊登，3 年以上經驗）；Graduate Data Engineer / Analyst (Power Platform)（第三方 2026-08-26 加入）；官方 Workable：未檢查（API 無回傳） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 2 | Bloomreach SK（#27） | SK／Bratislava, SK | 高 | SaaS 產品公司，Slovakia 有 Senior DevOps、Staff DevOps、Senior Cloud Security Engineer、Product Security Engineer、Senior SRE，與 Dennis 的 platform／security 直接對口。 | 中 | 有確認開放的對口職缺（Greenhouse API），規則 D 視非初階對口職為入口；但搬遷／遠端／工作許可均未驗證（Run 2 量表）。 | 非英國；搬遷／工作許可／EU Blue Card：未驗證；Taiwan passport 資格：未驗證 | Senior DevOps Engineer（2026-10-27）；Staff DevOps Engineer（2026-10-27）；Senior Cloud Security Engineer（2026-10-09）；Product Security Engineer（2026-09-22）；Security & Compliance Analyst（2026-10-15）；Senior SRE for Fuse team（日期為 Greenhouse updated_at） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 3 | ESET（#26） | SK／Bratislava (Petržalka), SK | 高 | 資安產品公司，DevOps Engineer、Kubernetes Platform Engineer、Experienced C# Developer – Cloud Solutions 對口 cloud／security 路線。 | 中 | 有確認開放的對口職缺且明寫 English B1+；但 Cloud Engineering Team Lead 的 JD 以斯洛伐克文撰寫（規則 M：阻止評低，不視為要求），搬遷／工作許可未驗證。 | 非英國；搬遷／簽證：官方頁未見；EU Blue Card：未驗證；Taiwan passport 資格：未驗證 | DevOps Engineer（2026-09-25，2+ 年，English B1+，起薪 €2,700 gross）；Kubernetes Platform Engineer（2026-10-16，5+ 年）；Cloud Engineering Team Lead（2026-10-09，JD 斯洛伐克文）；Experienced C# Developer – Cloud Solutions（2026-09-22，English B1） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 4 | Infobip Zagreb (Infobip d.o.o.)（#30） | HR／Zagreb, HR | 高 | 通訊 SaaS（CPaaS），DevOps Engineer 與 Site Reliability Engineer 對口 platform／SRE。 | 中 | DevOps Engineer 官方 Workday 確認開放但為 on-site；SRE 的遠端說法只來自第三方；搬遷／簽證未見（Run 2 量表＝中）。 | 非英國；搬遷／簽證：未見；遠端：只有第三方說法（未驗證）；EU Blue Card：未驗證；Taiwan passport 資格：未驗證 | DevOps Engineer Zagreb（JR103733，2026-10-13，3+ 年 infra，on-site）；Site Reliability Engineer Zagreb（iAgora／Renata 第三方）；Security intern（FER，2026-07 開始，可能已過期，不計） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 5 | Unity Technologies Brighton（雇主 Unity Software Limited）（#19） | UK／Brighton | 高 | 遊戲引擎／雲端服務公司，Developer Support Engineer, Cloud Services（GCP/AWS/Azure、Python）、Software Engineer Linux Platform Systems 等直接對口。 | 高 | 登記冊直接命中 Unity Software Limited，但 verifier 讀到的兩則對口職缺都明寫『Work visa/immigration sponsorship is not available』；依規則 K（沿用 Run 5 對 Unity Copenhagen 的同類處理）判高。其餘職缺（Linux Platform Systems、Senior Data Engineer）的贊助字樣未驗證。 | 登記冊命中 Unity Software Limited, Brighton（Skilled Worker；GBM Senior or Specialist）；**對口職缺明示不贊助** | Developer Support Engineer, Cloud Services（明示不贊助）；Senior Software Engineer, Console Platforms；Software Engineer, Linux Platform Systems（ITJobsWatch 約 5 天前）；Senior Data Engineer；無 graduate | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 6 | Scottish Water (Scottish Water Limited)（#5） | UK／Stepps (Glasgow) | 中 | 公用事業依規則 N 上限中；但有已驗證的 cyber／cloud 團隊證據（Cyber-Security Architect：Azure/IAM/SIEM/IEC 62443），故給上限中而非低。 | 中 | 登記冊直接命中 Scottish Water；對口職缺已於 2026-10-15 截止（規則 3-4/P 不計），目前開放的 platform／graduate 職未找到（未逐頁列 Workday 現況）＝中。 | 登記冊命中 Scottish Water, Glasgow（Skilled Worker, A）；職缺頁未見 sponsor 聲明 | 已截止：Principal Digital Specialist (Networks and Cybersecurity)／Cyber-Security Architect（2026-10-01 刊登，截止 2026-10-15，£54,776 起）；Applications Architect（.NET，截止 2026-10-15）；M365 Engineer（截止 2026-08-11）；現行：未找到（Workday 未逐頁檢查） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 7 | Met Office（#25） | UK／Exeter | 中 | 政府氣象科學機構（規則 3-2 只看證據）：有 Graduate Development Scheme，但 platform／cloud 職缺未逐筆檢查，沒有對口職缺證據，判中（科學軟體／HPC 屬推論，不計）。 | 中 | 登記冊直接命中 Met Office（Skilled Worker；International Agreement）；對口職缺『未找到（未逐筆檢查職缺列表）』＝有贊助缺職缺＝中。 | 登記冊命中 Met Office, Exeter（Skilled Worker；Temporary Worker International Agreement）；職缺贊助字樣未驗證 | platform／cloud：未找到（未逐筆檢查職缺列表）；Graduate Development Scheme 頁存在（開放期、資格未驗證） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 8 | Rapita Systems (Rapita Systems Limited)（#23） | UK／York | 中 | 航電嵌入式軟體驗證工具公司；工程職偏 embedded／real-time 與靜態分析，與 Dennis 的 cloud／security 只部分重疊（規則 N 嵌入式判中）。 | 中 | 登記冊直接命中；Software Engineering Team Lead 寫『Applicants must be eligible to work in the UK』（規則 T：不算對口現行職缺），Field Application Engineer 的贊助字樣未驗證＝中。 | 登記冊命中 Rapita systems Limited, York（Skilled Worker, A）；Team Lead 職有 eligible-to-work 條款；SC 要求未見（未驗證） | Field Application Engineer（York，LinkedIn 2026 貼文）；Software Engineering Team Lead（StudySmarter，刊登日未見，提到 relocation support） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 9 | National Railway Museum York（雇主 Science Museum Group）（#24） | UK／York | 中 | 文化遺產（規則 3-2）：有 IT 職缺證據（ICT Service Desk Analyst、ICT Project Manager，2024 曾有 ICT Security Officer @ NRM），但多為支援／專案職，判中。 | 中 | 登記冊以法定雇主 Science Museum Group 命中（同一雇主，非集團推論）；現行只有 ICT Service Desk Analyst（12 個月定期，支援職不算對口），ICT Project Manager 已於 2026-10-15 截止＝中。 | 登記冊命中 Science Museum Group, London（Skilled Worker；GAE）；NRM 名義查無 | ICT Service Desk Analyst（12 個月定期，Manchester 或 York，最高 £32,640）；已截止：ICT Project Manager（2026-10-15）；前例：ICT Security Officer（2024，已過期） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 10 | VisitScotland（#11） | UK／Edinburgh | 中 | 國家觀光機構（規則 3-2）：有 Technology Solutions Team 的 Solutions Engineer 證據，屬 IT／平台支援，判中。 | 中 | 登記冊直接命中；Solutions Engineer 已於 2026-10-18 截止，Oracle HCM 職缺站為 JS（未檢查）＝中。 | 登記冊命中 VisitScotland, Edinburgh（Skilled Worker, A） | 已截止：Solutions Engineer（£41,038–45,297，截止 2026-10-18）；2026-10-15 貼文：Oracle Product Owner (Finance) 等；現行工程職：未檢查（Oracle HCM JS） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 11 | Kinetic Software (Kinetic Solutions Limited)（#21） | UK／Milton Keynes | 中 | 學生宿舍／活動管理軟體產品公司，但沒有任何職缺或技術棧證據（未驗證）＝中。 | 中 | 登記冊直接命中，但首頁無 careers 連結、其他管道未找到職缺＝有贊助缺職缺＝中。 | 登記冊命中 KINETIC SOLUTIONS LIMITED, Milton Keynes（Skilled Worker, A） | 未找到（首頁無 careers 連結；其他管道未找到） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 12 | Celtic Football Club (Celtic plc)（#10） | UK／Glasgow | 中 | 體育（規則 N 上限中）：有 Senior Technical Analyst（票務系統／SQL）與 Mobile App Platform Manager 等 IT 證據，但不是 cloud／security 對口。 | 中 | 登記冊直接命中 Celtic plc；對口 platform／cloud 職缺未找到，vacancies 頁 JS 未解析＝中。 | 登記冊命中 Celtic plc, Glasgow（Skilled Worker；International Sportsperson） | Senior Technical Analyst（票務／SQL，日期未示）；Mobile App Platform Manager（2025-07，現況未驗證）；Junior Data Analyst（已過期）；官方 vacancies：未檢查（JS） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 13 | Rareloop (Rareloop Limited)（#17） | UK／Southampton | 中 | 軟體／數位產品代理商（PHP/Laravel／行動 app），技術棧與 Dennis 部分重疊；職缺未驗證＝中。 | 中 | 本名登記冊查無（sponsors_2026-10-30.csv）；careers 頁寫正在招募，但靜態 HTML 沒有列出職位（JS，視為未檢查）＝無贊助但職缺未檢查＝中（沿用 Run 8 第十節第 2 點：『無贊助但有對口職缺或職缺未檢查判中』，同 Firesprite）。 | 本名登記冊查無（sponsors_2026-10-30.csv） | 未檢查（careers 頁寫 actively recruiting，但內容疑為 JS 載入）；LinkedIn 未查 | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 14 | Evotix (Evotix Limited)（#7） | UK／East Kilbride | 中 | EHS SaaS 產品公司，有 Director of Platform Engineering 等平台職，但都不在英國；英國對口職缺未找到＝中。 | 高 | 登記冊直接命中，但職缺明寫『Evotix is unable to offer visa sponsorship』，且英國沒有對口職缺；依規則 E 第二句／K 判高。 | 登記冊命中 Evotix Limited, Glasgow（Skilled Worker, A）；**職缺明示不贊助** | 英國／East Kilbride：未找到；現行職在 India/Poland/Portugal/Romania/Australia（例：Director of Platform Engineering – Bangalore）；Pinpoint 有 Register Your Interest | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 15 | GE Aerospace Caledonian (GE Caledonian Limited)（#1） | UK／Prestwick | 中 | 航太 MRO（規則 N 上限中）：有 Digital Technology placement（IT ops／data／software）與 Digital Operations 證據。 | 高 | 本名 GE Caledonian Limited 不在登記冊；只有集團 GE Aviation Systems Limited（Cheltenham）在冊，依規則 A/C 不計；placement 屬在學實習且已過期（規則 B/P）＝高。 | 本名查無；集團 GE Aviation Systems Limited（Cheltenham；Skilled Worker／GBM Senior／GBM Graduate Trainee，不計） | 已過期：Digital Technology – 12 Month Placement（Workday 2026-09-06 刊登，Higherin 截止 2026-10-31，在學 placement，資格不符）；Digital Operations Senior Manager（2026-05，資深管理，現況未驗證） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 16 | Aspire Systems Cardiff（Aspire Systems Digital Solutions Ltd，前 Method4）（#13） | UK／Cardiff | 中 | IT 服務／軟體交付公司，但 Cardiff 只見 Client Portfolio Manager（非工程），工程職未找到＝中（規則 3-6：證據只涉及非工程職）。 | 高 | Cardiff 法人（Aspire Systems Digital Solutions／Method4）不在登記冊；只有 London 的 Aspire Systems UK Ltd 在冊，依規則 A/C 不計，且無對口職缺＝高。 | 本名查無；集團 Aspire Systems UK Ltd（London；Skilled Worker／GBM Senior，不計）、Aspire Systems (India) Pvt Ltd（不計） | Cardiff：Client Portfolio Manager（非對口）；官方 openings 只列印度；工程職未找到 | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 17 | Comtrade（cloud／security 職屬 Comtrade System Integration）（#32） | RS／Belgrade, RS | 中 | 多公司 IT 集團；cloud／security 招募看來屬 Comtrade System Integration（Senior Cyber Security Engineer 為 2025-10 舊貼文；Cloud Specialist 在 Ljubljana），Belgrade 現行對口未找到＝中。 | 高 | Belgrade 現行對口職缺未找到，官方 careers 被 Turnstile 擋（未檢查）；塞爾維亞非 EU、無 Blue Card，工作許可未驗證＝高（Run 2 量表）。 | 非英國；非 EU（無 EU Blue Card）；塞爾維亞工作許可：未驗證；Taiwan passport 資格：未驗證 | Belgrade：未找到；官方 careers：未檢查（Turnstile）；舊：Senior Cyber Security Engineer（LinkedIn 2025-10-21）；Microsoft Senior Solution Engineer／Cloud Specialist（Ljubljana，HubMub） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 18 | Cosylab (COSYLAB d.d.)（#28） | SI／Ljubljana, SI | 中 | 科學控制系統軟體公司（加速器、醫療）；屬軟體業但對口職缺未找到，技術方向未驗證＝中。 | 高 | 對口職缺未找到；唯一的 relocation 字樣是某職『later relocation to Palo Alto (USA)』（搬去美國，不是斯洛維尼亞簽證路徑）＝高。 | 非英國；斯洛維尼亞搬遷／簽證：未驗證；EU Blue Card：未驗證；Taiwan passport 資格：未驗證 | 未找到（關鍵字掃描只見一筆 Palo Alto relocation 職，職稱未擷取） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 19 | Outfit7（#29） | SI／Ljubljana, SI | 中 | 行動遊戲公司（Talking Tom），屬軟體業；Greenhouse 9 筆職缺無 platform／cloud／backend／security＝中（技術方向未驗證）。 | 高 | 無對口職缺與入口（規則 D 後半）＝高。 | 非英國；搬遷／遠端：未驗證；EU Blue Card：未驗證；Taiwan passport 資格：未驗證 | Greenhouse 9 筆，無對口職稱 | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 20 | Woodward Aircraft Engine Systems Prestwick（Woodward International, Inc. UK establishment）（#3） | UK／Prestwick | 低 | 航太引擎系統（規則 N）：Prestwick 只見維修技師、檢驗、客服與 Controls Engineer（控制／自動化），沒有軟體／雲端證據＝低（資料不足）。 | 中 | 登記冊直接命中（t/a Woodward Aircraft Engine Systems Prestwick）；無對口職缺＝中。 | 登記冊命中 Woodward International, Inc (t/a Woodward Aircraft Engine Systems Prestwick)（Skilled Worker, A） | Repair & Overhaul Technician；Final Inspector；Customer Support Representative；Controls Engineer（Adzuna，£42k–55k）；platform／cloud：未找到 | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 21 | Scottish Rugby (Scottish Rugby Limited)（#9） | UK／Edinburgh (Murrayfield) | 低 | 國家體育總會（規則 N／3-2）：沒有 IT／工程職缺證據（Digital Marketing and CRM Specialist 為非工程且未刊登）＝低（資料不足）。 | 中 | 登記冊命中（Scottish Rugby Limited 與舊名 Scottish Rugby Union Limited 兩組列）；門戶當下顯示無符合職缺＝中。 | 登記冊命中 SCOTTISH RUGBY LIMITED（Edinburghq）／Scottish Rugby Union Limited（Edinburgh）：Skilled Worker；International Sportsperson | 門戶原文：「Sorry we are unable to find any roles matching your criteria.」（僅代表檢索當下） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 22 | Prestwick Aerosystems Limited（前 Spirit AeroSystems (Europe)，Airbus 子公司）（#2） | UK／Prestwick | 低 | 航太結構製造（規則 N）：可見職缺全是製造類（Aircraft Fitter、CNC Programmer），沒有軟體／雲端／資安證據＝低。 | 高 | 登記冊直接命中，但職缺明寫『Applicants must have the right to work in the UK (no visa sponsorship available)』，且無對口職缺；規則 E 第二句／K／T＝高。 | 登記冊命中 Prestwick Aerosystems Limited（Ayrshire；Skilled Worker）；**職缺明示不贊助**；BPSS＋Disclosure Scotland | Skilled Aircraft Fitter（2026-08-24）；Senior Manufacturing Systems Engineer / CNC Programmer（2026-09-23）；platform／cloud／security：未找到 | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 23 | Opencentric (Opencentric Ltd)（#12） | UK／Cardiff | 低 | Drupal／PHP 代理商，LinkedIn 約 5 人；沒有職缺或 cloud 證據＝低（規模很小、資料不足）。 | 高 | 本名登記冊查無（sponsors_2026-10-30.csv）；官網無招聘頁＝高。 | 本名登記冊查無（sponsors_2026-10-30.csv） | 未找到（官網無招聘頁） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 24 | Computerisation (Computerisation Ltd)（#14） | UK／Cardiff | 低 | 小型軟體公司（LinkedIn 約 4 人）；沒有職缺或技術棧證據＝低。 | 高 | 本名登記冊查無（sponsors_2026-10-30.csv）；未找到招聘頁＝高。 | 本名登記冊查無（sponsors_2026-10-30.csv） | 未找到 | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 25 | Fusion My Business (Fusion My Business Limited)（#16） | UK／Southampton | 低 | 商務 IT／軟體服務；可見職缺只有 London 區 Field Technical Engineer／Field Sales（第三方、日期未示），偏 MSP 現場支援＝低。 | 高 | 本名登記冊查無（sponsors_2026-10-30.csv）（近似名 Fusion Business Solutions (UK) Ltd 不相關）；無對口職缺＝高。 | 本名登記冊查無（sponsors_2026-10-30.csv） | 未找到對口；第三方：Field Technical Engineer／Field Sales Executive（London 區，日期未示） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 26 | Digital Scientists (Digital Scientists Ltd)（#18） | UK／Portsmouth | 低 | 現定位為 AI consultancy／digital transformation；沒有職缺或技術棧證據＝低（資料不足）。 | 高 | 本名登記冊查無（sponsors_2026-10-30.csv）；/careers 404、首頁無 careers 連結＝高。 | 本名登記冊查無（sponsors_2026-10-30.csv） | 未找到（/careers 404） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 27 | Revolution Software (Revolution Software Limited)（#22） | UK／York | 低 | 冒險遊戲工作室；studio 頁的 Jobs 區塊是 lorem ipsum 佔位文字，不算真實職缺＝低。 | 高 | 本名登記冊查無（sponsors_2026-10-30.csv）；無真實職缺＝高。 | 本名登記冊查無（sponsors_2026-10-30.csv） | 未找到（Jobs 區塊為佔位文字，如 "Position - Scripter"） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 28 | STEF Langdons (STEF Langdons Ltd)（#4） | UK／Holytown (Motherwell) | 低 | 冷鏈物流（規則 N）；Motherwell 只見 LGV Driver，IT／cloud 未找到＝低。 | 高 | 本名登記冊查無（sponsors_2026-10-30.csv）（舊名 Nagel Langdons 亦無）；無對口職缺＝高。 | 本名登記冊查無（sponsors_2026-10-30.csv） | Motherwell：LGV Driver；IT／cloud／security：未找到 | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |
| 29 | Nordeus（#31） | RS／Belgrade, RS | 低 | 遊戲公司，Greenhouse 12 筆 Belgrade 職缺只有 Junior Community Specialist、Junior UI Artist 等非工程職＝低。 | 高 | 無對口職缺；塞爾維亞非 EU、無 Blue Card，工作許可未驗證＝高。 | 非英國；非 EU（無 EU Blue Card）；工作許可：未驗證；Taiwan passport 資格：未驗證 | 未找到對口（Junior Community Specialist、Junior UI Artist） | 無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天 |

分布（不重複雇主）：適配 高 5／中 14／低 10；難度 低 0／中 14／高 15。組合：高／低 0、高／中 4、高／高 1、中／低 0、中／中 8、中／高 6、低／中 2、低／高 8。

---

## 四之二、時程與截止日（與難度分開，規則 3-3／F）

基準：檢查日 2026-11-02；MSc 開學 2027-09-01（距今 303 天）；畢業 2028-09-01（距今 669 天）。天數以 Python 計算（`gen/build.py`）。

**仍開放、有官方截止日的對口職缺：無。** 以下開放職缺只有刊登日或 updated_at，沒有截止日，只作新鮮度參考：

| 職缺 | 日期（類型） | 距今 | 距開學 | 距畢業 |
|---|---|---:|---:|---:|
| Bloomreach Senior DevOps Engineer | 2026-10-27（updated_at） | -6 | 309 | 675 |
| Bloomreach Staff DevOps Engineer | 2026-10-27（updated_at） | -6 | 309 | 675 |
| Aiimi Software Developer（第三方） | 2026-10-18（刊登） | -15 | 318 | 684 |
| ESET Kubernetes Platform Engineer | 2026-10-16（刊登） | -17 | 320 | 686 |
| Bloomreach Security & Compliance Analyst | 2026-10-15（updated_at） | -18 | 321 | 687 |
| Infobip DevOps Engineer Zagreb | 2026-10-13（刊登） | -20 | 323 | 689 |
| Bloomreach Senior Cloud Security Engineer | 2026-10-09（updated_at） | -24 | 327 | 693 |
| ESET Cloud Engineering Team Lead（斯洛伐克文 JD） | 2026-10-09（刊登） | -24 | 327 | 693 |
| ESET DevOps Engineer | 2026-09-25（刊登） | -38 | 341 | 707 |
| ESET Experienced C# Developer – Cloud Solutions | 2026-09-22（刊登） | -41 | 344 | 710 |
| Bloomreach Product Security Engineer | 2026-09-22（updated_at） | -41 | 344 | 710 |
| Aiimi Graduate Data Engineer / Analyst（第三方） | 2026-08-26（加入） | -68 | 371 | 737 |
| Unity Linux Platform Systems（ITJobsWatch「約 5 天前」） | 日期未驗證 | — | — | — |

**已過期，不可申請（規則 3-4／P），只作為職能證據**：

| 職缺 | 截止日 | 距開學 | 距畢業 |
|---|---|---:|---:|
| Higherin：GE Aerospace Digital Technology Placement（在學 placement） | 2026-10-31 | 305 | 671 |
| VisitScotland Solutions Engineer | 2026-10-18 | 318 | 684 |
| Scottish Water Cyber-Security Architect | 2026-10-15 | 321 | 687 |
| Scottish Water Applications Architect | 2026-10-15 | 321 | 687 |
| SMG ICT Project Manager（York/Manchester） | 2026-10-15 | 321 | 687 |
| Scottish Water M365 Engineer | 2026-08-11 | 386 | 752 |

**時程結論**：
- 所有現行職缺在 MSc 期間或畢業時都不會仍開放。
- 對 Dennis 有用的是「這家公司會招此類職能」，以及持牌狀態。
- 實際申請窗口：MSc 期間的 graduate 招募季（約 2027-09 至 2028-06，各公司日期未驗證；Met Office Graduate Development Scheme、Aiimi Graduate 屬此類），或畢業後走 Graduate visa。
- GE Aerospace 的 12 個月 placement 是在學實習，Dennis 一年制 MSc 是否符合未驗證（規則 B）。
- 中東歐職缺若在 MSc 前申請，與 2027-09 入學衝突（規則 F）。

---

## 五、排除／存疑（規則 V；僅供參考評級，不進主表與 Top 10）

| # | 組織 | verified9 判定 | 參考適配 | 參考難度 | 理由 |
|---:|---|---|:-:|:-:|---|
| 6 | Atos（Paisley pin；Atos IT Services UK Limited） | 存疑 | 中 | 中 | 法人 01245534 Active 且登記冊命中（Skilled Worker、GBM Senior、GBM Graduate Trainee，3 列），但官方 UK 據點頁沒有 Paisley；Paisley 地址只見於目錄站，電話是 Livingston 區碼。Atos UK 職缺：未檢查。若改評 Atos UK 整體（Livingston 等），需另立一列重新核實。 |
| 8 | Pegasus Express Limited | 存疑 | 低 | 高 | CH SC148046 Active、申報正常，但官網無法連線（500／連線失敗），沒有近期營運或招聘證據；本名不在登記冊；物流業（規則 N）。 |
| 15 | AxylCloud（AXYLCLOUD LTD） | 疑似已停業 | 低 | 高 | 唯一 CH 法人 12921505 已於 2022-10-11 解散；兩個網域皆無回應；本名不在登記冊。判定依 CH，不依評論數。 |

- #6 的登記冊命中計入第一節的 14 個雇主（因為法人層級確實在冊），但因據點存疑，不進排名。另有 Atos Executive Limited（London，Skilled Worker）是不同法人，不計入 #6。
- 「存疑」不等於停業；#8 若之後能取得近期營運證據，可在後續輪次重評。

---

## 六、逐家說明（依排名）


### 1. Aiimi (Aiimi Ltd)（#20）｜Milton Keynes

- **公司簡介**：Milton Keynes 的資料／搜尋軟體公司，Companies House 05648705 Active。
- **適配度：高**：資料／軟體產品公司；Software Developer（NodeJS/C#/TS、cloud、CI/CD、Docker）與 Graduate Data Engineer / Analyst 對口（規則 3-6）。
- **申請難度：中**：登記冊直接命中 Aiimi Ltd；但兩則職缺都只來自第三方（jobs24、huntukvisasponsors），官方 Workable API 沒有回傳清單，不算『確認開放』，故不評低。
- **簽證／搬遷**：登記冊命中 Aiimi Ltd, Milton Keynes（Skilled Worker, A）；個別職缺贊助未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：Software Developer（Milton Keynes，第三方 2026-10-18 刊登，3 年以上經驗）；Graduate Data Engineer / Analyst (Power Platform)（第三方 2026-08-26 加入）；官方 Workable：未檢查（API 無回傳）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：敏感度：若官方 Workable 確認 Software Developer 仍開放，依規則 C/3-6 可升為 高／低（有條件），會進英國 Top 10 討論（見第七節）。
- **備註**：Graduate 職以 Power Platform 為主，技術棧與 Dennis 只部分重疊。
- **來源**：verified9.md #20；aiimi.com/about/careers；apply.workable.com/aiimi-ltd；jobs24.co.uk；sponsors_2026-10-30.csv（本報告重查命中）

### 2. Bloomreach SK（#27）｜Bratislava, SK

- **公司簡介**：Bloomreach 的斯洛伐克據點；斯洛伐克法人（ORSR）未查（未驗證）。
- **適配度：高**：SaaS 產品公司，Slovakia 有 Senior DevOps、Staff DevOps、Senior Cloud Security Engineer、Product Security Engineer、Senior SRE，與 Dennis 的 platform／security 直接對口。
- **申請難度：中**：有確認開放的對口職缺（Greenhouse API），規則 D 視非初階對口職為入口；但搬遷／遠端／工作許可均未驗證（Run 2 量表）。
- **簽證／搬遷**：非英國；搬遷／工作許可／EU Blue Card：未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：Senior DevOps Engineer（2026-10-27）；Staff DevOps Engineer（2026-10-27）；Senior Cloud Security Engineer（2026-10-09）；Product Security Engineer（2026-09-22）；Security & Compliance Analyst（2026-10-15）；Senior SRE for Fuse team（日期為 Greenhouse updated_at）
- **語言**：職缺以英文撰寫，未見語言要求；實際工作語言未驗證
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：日期是 Greenhouse updated_at，不是刊登日（規則 P 只作新鮮度參考）。
- **備註**：多為 Senior／Staff，未見 junior。
- **來源**：verified9.md #27；boards-api.greenhouse.io/v1/boards/bloomreach/jobs；job-boards.greenhouse.io/bloomreach/jobs/8329243

### 3. ESET（#26）｜Bratislava (Petržalka), SK

- **公司簡介**：斯洛伐克資安公司（ESET NOD32 等）；ORSR 法人未查（未驗證）。
- **適配度：高**：資安產品公司，DevOps Engineer、Kubernetes Platform Engineer、Experienced C# Developer – Cloud Solutions 對口 cloud／security 路線。
- **申請難度：中**：有確認開放的對口職缺且明寫 English B1+；但 Cloud Engineering Team Lead 的 JD 以斯洛伐克文撰寫（規則 M：阻止評低，不視為要求），搬遷／工作許可未驗證。
- **簽證／搬遷**：非英國；搬遷／簽證：官方頁未見；EU Blue Card：未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：DevOps Engineer（2026-09-25，2+ 年，English B1+，起薪 €2,700 gross）；Kubernetes Platform Engineer（2026-10-16，5+ 年）；Cloud Engineering Team Lead（2026-10-09，JD 斯洛伐克文）；Experienced C# Developer – Cloud Solutions（2026-09-22，English B1）
- **語言**：DevOps／C# 職明寫 English B1+；Team Lead JD 為斯洛伐克文（可能需斯洛伐克語，未驗證）
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：薪資僅旗標（規則 U），不影響評級。
- **來源**：verified9.md #26；eset.wd3.myworkdayjobs.com/ESET_External（JR-06095、JR-06022、JR-06086、JR-05958）

### 4. Infobip Zagreb (Infobip d.o.o.)（#30）｜Zagreb, HR

- **公司簡介**：Infobip 的 Zagreb 辦公室，官方辦公室頁列 Infobip d.o.o.；OIB／法院登記未查。
- **適配度：高**：通訊 SaaS（CPaaS），DevOps Engineer 與 Site Reliability Engineer 對口 platform／SRE。
- **申請難度：中**：DevOps Engineer 官方 Workday 確認開放但為 on-site；SRE 的遠端說法只來自第三方；搬遷／簽證未見（Run 2 量表＝中）。
- **簽證／搬遷**：非英國；搬遷／簽證：未見；遠端：只有第三方說法（未驗證）；EU Blue Card：未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：DevOps Engineer Zagreb（JR103733，2026-10-13，3+ 年 infra，on-site）；Site Reliability Engineer Zagreb（iAgora／Renata 第三方）；Security intern（FER，2026-07 開始，可能已過期，不計）
- **語言**：iAgora（第三方）標 English；官方 JD 未逐字確認
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：Careers 入口導向 Workday（verifier 旗標已確認）。
- **來源**：verified9.md #30；infobip.com/offices/croatia-zagreb；infobip.wd3.myworkdayjobs.com/InfobipCareers/job/DevOps-Engineer_JR103733；iagora.com

### 5. Unity Technologies Brighton（雇主 Unity Software Limited）（#19）｜Brighton

- **公司簡介**：Unity 在 Brighton 的工程據點；CH 上 Unity Software Limited 07485462（狀態未另開公司頁）；CH 上同名 Unity Technologies Ltd 兩家與本公司無關。
- **適配度：高**：遊戲引擎／雲端服務公司，Developer Support Engineer, Cloud Services（GCP/AWS/Azure、Python）、Software Engineer Linux Platform Systems 等直接對口。
- **申請難度：高**：登記冊直接命中 Unity Software Limited，但 verifier 讀到的兩則對口職缺都明寫『Work visa/immigration sponsorship is not available』；依規則 K（沿用 Run 5 對 Unity Copenhagen 的同類處理）判高。其餘職缺（Linux Platform Systems、Senior Data Engineer）的贊助字樣未驗證。
- **簽證／搬遷**：登記冊命中 Unity Software Limited, Brighton（Skilled Worker；GBM Senior or Specialist）；**對口職缺明示不贊助**；Taiwan passport 資格：未驗證
- **對口開放職缺**：Developer Support Engineer, Cloud Services（明示不贊助）；Senior Software Engineer, Console Platforms；Software Engineer, Linux Platform Systems（ITJobsWatch 約 5 天前）；Senior Data Engineer；無 graduate
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：若未明示的職缺日後確認可擔保，難度可回到中；本報告不推論。
- **備註**：Copenhagen 據點已在先前輪次評過，不重評。
- **來源**：verified9.md #19；unity.com/careers/positions/7476893；unity.com/careers/positions/6619273；itjobswatch.co.uk；sponsors_2026-10-30.csv

### 6. Scottish Water (Scottish Water Limited)（#5）｜Stepps (Glasgow)

- **公司簡介**：蘇格蘭公營水務，CH SC207004 Active，總部 Stepps（不是 scout 搜尋的 Falkirk）。
- **適配度：中**：公用事業依規則 N 上限中；但有已驗證的 cyber／cloud 團隊證據（Cyber-Security Architect：Azure/IAM/SIEM/IEC 62443），故給上限中而非低。
- **申請難度：中**：登記冊直接命中 Scottish Water；對口職缺已於 2026-10-15 截止（規則 3-4/P 不計），目前開放的 platform／graduate 職未找到（未逐頁列 Workday 現況）＝中。
- **簽證／搬遷**：登記冊命中 Scottish Water, Glasgow（Skilled Worker, A）；職缺頁未見 sponsor 聲明；Taiwan passport 資格：未驗證
- **對口開放職缺**：已截止：Principal Digital Specialist (Networks and Cybersecurity)／Cyber-Security Architect（2026-10-01 刊登，截止 2026-10-15，£54,776 起）；Applications Architect（.NET，截止 2026-10-15）；M365 Engineer（截止 2026-08-11）；現行：未找到（Workday 未逐頁檢查）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：Cyber 職的 SIEM／Azure 要求與 Dennis 背景高度重疊，是本輪英國最有用的『職能證據』之一。
- **來源**：verified9.md #5；scottishwater.wd3.myworkdayjobs.com/External_Careers（R11664-1）；sponsors_2026-10-30.csv

### 7. Met Office（#25）｜Exeter

- **公司簡介**：英國國家氣象局，DSIT 轄下 executive agency；CH／機構編號未查。
- **適配度：中**：政府氣象科學機構（規則 3-2 只看證據）：有 Graduate Development Scheme，但 platform／cloud 職缺未逐筆檢查，沒有對口職缺證據，判中（科學軟體／HPC 屬推論，不計）。
- **申請難度：中**：登記冊直接命中 Met Office（Skilled Worker；International Agreement）；對口職缺『未找到（未逐筆檢查職缺列表）』＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 Met Office, Exeter（Skilled Worker；Temporary Worker International Agreement）；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：platform／cloud：未找到（未逐筆檢查職缺列表）；Graduate Development Scheme 頁存在（開放期、資格未驗證）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：不推論任何現行雲端職缺；Graduate Development Scheme 適合在 MSc 期間（2027-09 至 2028-06）再查開放期。
- **來源**：verified9.md #25；careers.metoffice.gov.uk；sponsors_2026-10-30.csv

### 8. Rapita Systems (Rapita Systems Limited)（#23）｜York

- **公司簡介**：York 的航電軟體驗證公司，CH 05011090 Active。
- **適配度：中**：航電嵌入式軟體驗證工具公司；工程職偏 embedded／real-time 與靜態分析，與 Dennis 的 cloud／security 只部分重疊（規則 N 嵌入式判中）。
- **申請難度：中**：登記冊直接命中；Software Engineering Team Lead 寫『Applicants must be eligible to work in the UK』（規則 T：不算對口現行職缺），Field Application Engineer 的贊助字樣未驗證＝中。
- **簽證／搬遷**：登記冊命中 Rapita systems Limited, York（Skilled Worker, A）；Team Lead 職有 eligible-to-work 條款；SC 要求未見（未驗證）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Field Application Engineer（York，LinkedIn 2026 貼文）；Software Engineering Team Lead（StudySmarter，刊登日未見，提到 relocation support）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：Team Lead 提到 relocation support，但同時要求 UK 工作資格，不視為簽證支持。
- **來源**：verified9.md #23；rapitasystems.com/about/careers；sponsors_2026-10-30.csv

### 9. National Railway Museum York（雇主 Science Museum Group）（#24）｜York

- **公司簡介**：SMG 旗下的國家鐵道博物館；SMG 的 charity／NDPB 編號未驗證。
- **適配度：中**：文化遺產（規則 3-2）：有 IT 職缺證據（ICT Service Desk Analyst、ICT Project Manager，2024 曾有 ICT Security Officer @ NRM），但多為支援／專案職，判中。
- **申請難度：中**：登記冊以法定雇主 Science Museum Group 命中（同一雇主，非集團推論）；現行只有 ICT Service Desk Analyst（12 個月定期，支援職不算對口），ICT Project Manager 已於 2026-10-15 截止＝中。
- **簽證／搬遷**：登記冊命中 Science Museum Group, London（Skilled Worker；GAE）；NRM 名義查無；Taiwan passport 資格：未驗證
- **對口開放職缺**：ICT Service Desk Analyst（12 個月定期，Manchester 或 York，最高 £32,640）；已截止：ICT Project Manager（2026-10-15）；前例：ICT Security Officer（2024，已過期）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：Service Desk 薪資低於 New Entrant 下限的旗標（規則 U，只標不改評級）：下限計算未針對此職做，SOC 未驗證。
- **來源**：verified9.md #24；cwjobs.co.uk/jobs/science-museum-group；findajob.dwp.gov.uk/details/15391972；sponsors_2026-10-30.csv

### 10. VisitScotland（#11）｜Edinburgh

- **公司簡介**：蘇格蘭旅遊局（NDPB），非 CH 公司。
- **適配度：中**：國家觀光機構（規則 3-2）：有 Technology Solutions Team 的 Solutions Engineer 證據，屬 IT／平台支援，判中。
- **申請難度：中**：登記冊直接命中；Solutions Engineer 已於 2026-10-18 截止，Oracle HCM 職缺站為 JS（未檢查）＝中。
- **簽證／搬遷**：登記冊命中 VisitScotland, Edinburgh（Skilled Worker, A）；Taiwan passport 資格：未驗證
- **對口開放職缺**：已截止：Solutions Engineer（£41,038–45,297，截止 2026-10-18）；2026-10-15 貼文：Oracle Product Owner (Finance) 等；現行工程職：未檢查（Oracle HCM JS）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：visitscotland.com 對 curl 回 500，推測擋 bot，非停業證據。
- **來源**：verified9.md #11；visitscotland.org/who-we-are/jobs-careers；sponsors_2026-10-30.csv

### 11. Kinetic Software (Kinetic Solutions Limited)（#21）｜Milton Keynes

- **公司簡介**：CH 03169474 Active；母公司 Kinetic Solutions Group Ltd（Sheffield）。
- **適配度：中**：學生宿舍／活動管理軟體產品公司，但沒有任何職缺或技術棧證據（未驗證）＝中。
- **申請難度：中**：登記冊直接命中，但首頁無 careers 連結、其他管道未找到職缺＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 KINETIC SOLUTIONS LIMITED, Milton Keynes（Skilled Worker, A）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（首頁無 careers 連結；其他管道未找到）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：http 回 500、https 正常，不代表停業。
- **來源**：verified9.md #21；kineticsoftware.com；sponsors_2026-10-30.csv

### 12. Celtic Football Club (Celtic plc)（#10）｜Glasgow

- **公司簡介**：Glasgow 職業足球俱樂部，CH SC003487 Active（plc）。
- **適配度：中**：體育（規則 N 上限中）：有 Senior Technical Analyst（票務系統／SQL）與 Mobile App Platform Manager 等 IT 證據，但不是 cloud／security 對口。
- **申請難度：中**：登記冊直接命中 Celtic plc；對口 platform／cloud 職缺未找到，vacancies 頁 JS 未解析＝中。
- **簽證／搬遷**：登記冊命中 Celtic plc, Glasgow（Skilled Worker；International Sportsperson）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Senior Technical Analyst（票務／SQL，日期未示）；Mobile App Platform Manager（2025-07，現況未驗證）；Junior Data Analyst（已過期）；官方 vacancies：未檢查（JS）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **來源**：verified9.md #10；celticfc.com/club/vacancies；talents.studysmarter.co.uk；sponsors_2026-10-30.csv

### 13. Rareloop (Rareloop Limited)（#17）｜Southampton

- **公司簡介**：CH 07722194 Active，交易地址 Southampton Basepoint。
- **適配度：中**：軟體／數位產品代理商（PHP/Laravel／行動 app），技術棧與 Dennis 部分重疊；職缺未驗證＝中。
- **申請難度：中**：本名登記冊查無（sponsors_2026-10-30.csv）；careers 頁寫正在招募，但靜態 HTML 沒有列出職位（JS，視為未檢查）＝無贊助但職缺未檢查＝中（沿用 Run 8 第十節第 2 點：『無贊助但有對口職缺或職缺未檢查判中』，同 Firesprite）。
- **簽證／搬遷**：本名登記冊查無（sponsors_2026-10-30.csv）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（careers 頁寫 actively recruiting，但內容疑為 JS 載入）；LinkedIn 未查
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：規則 O：PHP 不屬 Dennis 核心強項。
- **來源**：verified9.md #17；rareloop.com/careers

### 14. Evotix (Evotix Limited)（#7）｜East Kilbride

- **公司簡介**：前 SHE Software Limited，CH SC164270 Active；母公司候選 Evotix Holdings Limited。
- **適配度：中**：EHS SaaS 產品公司，有 Director of Platform Engineering 等平台職，但都不在英國；英國對口職缺未找到＝中。
- **申請難度：高**：登記冊直接命中，但職缺明寫『Evotix is unable to offer visa sponsorship』，且英國沒有對口職缺；依規則 E 第二句／K 判高。
- **簽證／搬遷**：登記冊命中 Evotix Limited, Glasgow（Skilled Worker, A）；**職缺明示不贊助**；Taiwan passport 資格：未驗證
- **對口開放職缺**：英國／East Kilbride：未找到；現行職在 India/Poland/Portugal/Romania/Australia（例：Director of Platform Engineering – Bangalore）；Pinpoint 有 Register Your Interest
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：parent 的旗標清單沒有列 #7 不贊助，但 verified9 明寫，本報告採用（見第九節）。
- **來源**：verified9.md #7；ats.rippling.com/evotix-limited/jobs；evotix.pinpointhq.com；sponsors_2026-10-30.csv

### 15. GE Aerospace Caledonian (GE Caledonian Limited)（#1）｜Prestwick

- **公司簡介**：GE Aerospace 在 Prestwick 的引擎 MRO 廠，CH SC064580 Active。
- **適配度：中**：航太 MRO（規則 N 上限中）：有 Digital Technology placement（IT ops／data／software）與 Digital Operations 證據。
- **申請難度：高**：本名 GE Caledonian Limited 不在登記冊；只有集團 GE Aviation Systems Limited（Cheltenham）在冊，依規則 A/C 不計；placement 屬在學實習且已過期（規則 B/P）＝高。
- **簽證／搬遷**：本名查無；集團 GE Aviation Systems Limited（Cheltenham；Skilled Worker／GBM Senior／GBM Graduate Trainee，不計）；Taiwan passport 資格：未驗證
- **對口開放職缺**：已過期：Digital Technology – 12 Month Placement（Workday 2026-09-06 刊登，Higherin 截止 2026-10-31，在學 placement，資格不符）；Digital Operations Senior Manager（2026-05，資深管理，現況未驗證）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：SC／國防審查要求未見（未驗證）。
- **來源**：verified9.md #1；geaerospace.wd5.myworkdayjobs.com（R5039355-2）；higherin.com/jobs/44126；sponsors_2026-10-30.csv

### 16. Aspire Systems Cardiff（Aspire Systems Digital Solutions Ltd，前 Method4）（#13）｜Cardiff

- **公司簡介**：前 Method4，2024 併入 Aspire Systems；Cardiff 法人 05444987（狀態未逐頁查）。
- **適配度：中**：IT 服務／軟體交付公司，但 Cardiff 只見 Client Portfolio Manager（非工程），工程職未找到＝中（規則 3-6：證據只涉及非工程職）。
- **申請難度：高**：Cardiff 法人（Aspire Systems Digital Solutions／Method4）不在登記冊；只有 London 的 Aspire Systems UK Ltd 在冊，依規則 A/C 不計，且無對口職缺＝高。
- **簽證／搬遷**：本名查無；集團 Aspire Systems UK Ltd（London；Skilled Worker／GBM Senior，不計）、Aspire Systems (India) Pvt Ltd（不計）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Cardiff：Client Portfolio Manager（非對口）；官方 openings 只列印度；工程職未找到
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **來源**：verified9.md #13；aspiresys.com/uk/careers；aspiresys.com/openings；sponsors_2026-10-30.csv

### 17. Comtrade（cloud／security 職屬 Comtrade System Integration）（#32）｜Belgrade, RS

- **公司簡介**：Comtrade 集團；Maps 標點是否為集團 HQ 未驗證；APR 未查。
- **適配度：中**：多公司 IT 集團；cloud／security 招募看來屬 Comtrade System Integration（Senior Cyber Security Engineer 為 2025-10 舊貼文；Cloud Specialist 在 Ljubljana），Belgrade 現行對口未找到＝中。
- **申請難度：高**：Belgrade 現行對口職缺未找到，官方 careers 被 Turnstile 擋（未檢查）；塞爾維亞非 EU、無 Blue Card，工作許可未驗證＝高（Run 2 量表）。
- **簽證／搬遷**：非英國；非 EU（無 EU Blue Card）；塞爾維亞工作許可：未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：Belgrade：未找到；官方 careers：未檢查（Turnstile）；舊：Senior Cyber Security Engineer（LinkedIn 2025-10-21）；Microsoft Senior Solution Engineer／Cloud Specialist（Ljubljana，HubMub）
- **語言**：招募貼文為塞爾維亞文；工作語言未驗證
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：Ljubljana 的 Cloud Specialist 若屬斯洛維尼亞法人，則適用 EU 規則，但未驗證。
- **來源**：verified9.md #32；comtrade.com；linkedin.com 貼文；hubmub.com/jobs/994015

### 18. Cosylab (COSYLAB d.d.)（#28）｜Ljubljana, SI

- **公司簡介**：Ljubljana 的控制系統軟體公司；AJPES 未查。
- **適配度：中**：科學控制系統軟體公司（加速器、醫療）；屬軟體業但對口職缺未找到，技術方向未驗證＝中。
- **申請難度：高**：對口職缺未找到；唯一的 relocation 字樣是某職『later relocation to Palo Alto (USA)』（搬去美國，不是斯洛維尼亞簽證路徑）＝高。
- **簽證／搬遷**：非英國；斯洛維尼亞搬遷／簽證：未驗證；EU Blue Card：未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（關鍵字掃描只見一筆 Palo Alto relocation 職，職稱未擷取）
- **語言**：職缺以英文撰寫，未見語言要求；實際工作語言未驗證
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **來源**：verified9.md #28；cosylab.com/careers

### 19. Outfit7（#29）｜Ljubljana, SI

- **公司簡介**：Ljubljana 的行動遊戲公司；法人未查。
- **適配度：中**：行動遊戲公司（Talking Tom），屬軟體業；Greenhouse 9 筆職缺無 platform／cloud／backend／security＝中（技術方向未驗證）。
- **申請難度：高**：無對口職缺與入口（規則 D 後半）＝高。
- **簽證／搬遷**：非英國；搬遷／遠端：未驗證；EU Blue Card：未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：Greenhouse 9 筆，無對口職稱
- **語言**：職缺以英文撰寫，未見語言要求；實際工作語言未驗證
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **來源**：verified9.md #29；boards-api.greenhouse.io/v1/boards/outfit7/jobs

### 20. Woodward Aircraft Engine Systems Prestwick（Woodward International, Inc. UK establishment）（#3）｜Prestwick

- **公司簡介**：美國 Woodward 的 UK establishment（SF000753）；Prestwick 地址未從 CH 取得。
- **適配度：低**：航太引擎系統（規則 N）：Prestwick 只見維修技師、檢驗、客服與 Controls Engineer（控制／自動化），沒有軟體／雲端證據＝低（資料不足）。
- **申請難度：中**：登記冊直接命中（t/a Woodward Aircraft Engine Systems Prestwick）；無對口職缺＝中。
- **簽證／搬遷**：登記冊命中 Woodward International, Inc (t/a Woodward Aircraft Engine Systems Prestwick)（Skilled Worker, A）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Repair & Overhaul Technician；Final Inspector；Customer Support Representative；Controls Engineer（Adzuna，£42k–55k）；platform／cloud：未找到
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：SC／國防審查：未見（未驗證）。
- **來源**：verified9.md #3；woodward.wd5.myworkdayjobs.com；adzuna.co.uk；sponsors_2026-10-30.csv

### 21. Scottish Rugby (Scottish Rugby Limited)（#9）｜Edinburgh (Murrayfield)

- **公司簡介**：CH SC132061 Active（前名 Scottish Rugby Union Limited）；另有 SC748672「SCOTTISH RUGBY UNION」。
- **適配度：低**：國家體育總會（規則 N／3-2）：沒有 IT／工程職缺證據（Digital Marketing and CRM Specialist 為非工程且未刊登）＝低（資料不足）。
- **申請難度：中**：登記冊命中（Scottish Rugby Limited 與舊名 Scottish Rugby Union Limited 兩組列）；門戶當下顯示無符合職缺＝中。
- **簽證／搬遷**：登記冊命中 SCOTTISH RUGBY LIMITED（Edinburghq）／Scottish Rugby Union Limited（Edinburgh）：Skilled Worker；International Sportsperson；Taiwan passport 資格：未驗證
- **對口開放職缺**：門戶原文：「Sorry we are unable to find any roles matching your criteria.」（僅代表檢索當下）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：登記冊兩組名稱是否同一法人：本報告依 CH 改名紀錄計為 1 個雇主，但 SC748672 的關係未驗證（見第九節）。
- **來源**：verified9.md #9；scottishrugby.current-vacancies.com；sponsors_2026-10-30.csv

### 22. Prestwick Aerosystems Limited（前 Spirit AeroSystems (Europe)，Airbus 子公司）（#2）｜Prestwick

- **公司簡介**：CH 05663660 Active，2025-12-12 由 Spirit AeroSystems (Europe) Limited 改名；PSC Airbus Operations Limited（自 2025-12-08）；招募經 Airbus Workday。
- **適配度：低**：航太結構製造（規則 N）：可見職缺全是製造類（Aircraft Fitter、CNC Programmer），沒有軟體／雲端／資安證據＝低。
- **申請難度：高**：登記冊直接命中，但職缺明寫『Applicants must have the right to work in the UK (no visa sponsorship available)』，且無對口職缺；規則 E 第二句／K／T＝高。
- **簽證／搬遷**：登記冊命中 Prestwick Aerosystems Limited（Ayrshire；Skilled Worker）；**職缺明示不贊助**；BPSS＋Disclosure Scotland；Taiwan passport 資格：未驗證
- **對口開放職缺**：Skilled Aircraft Fitter（2026-08-24）；Senior Manufacturing Systems Engineer / CNC Programmer（2026-09-23）；platform／cloud／security：未找到
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **備註**：spiritaero.com 仍運作，但已不是 Prestwick 現雇主網站。
- **來源**：verified9.md #2；ag.wd3.myworkdayjobs.com/en-US/Airbus；airbus.com 2025-12 新聞稿；sponsors_2026-10-30.csv

### 23. Opencentric (Opencentric Ltd)（#12）｜Cardiff

- **公司簡介**：CH 07580609 Active，Cardiff。
- **適配度：低**：Drupal／PHP 代理商，LinkedIn 約 5 人；沒有職缺或 cloud 證據＝低（規模很小、資料不足）。
- **申請難度：高**：本名登記冊查無（sponsors_2026-10-30.csv）；官網無招聘頁＝高。
- **簽證／搬遷**：本名登記冊查無（sponsors_2026-10-30.csv）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（官網無招聘頁）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **來源**：verified9.md #12；opencentric.uk/about-opencentric

### 24. Computerisation (Computerisation Ltd)（#14）｜Cardiff

- **公司簡介**：CH 02341476 Active，Cardiff。
- **適配度：低**：小型軟體公司（LinkedIn 約 4 人）；沒有職缺或技術棧證據＝低。
- **申請難度：高**：本名登記冊查無（sponsors_2026-10-30.csv）；未找到招聘頁＝高。
- **簽證／搬遷**：本名登記冊查無（sponsors_2026-10-30.csv）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **來源**：verified9.md #14；computerisation.co.uk

### 25. Fusion My Business (Fusion My Business Limited)（#16）｜Southampton

- **公司簡介**：CH 13872472 Active，Southampton。
- **適配度：低**：商務 IT／軟體服務；可見職缺只有 London 區 Field Technical Engineer／Field Sales（第三方、日期未示），偏 MSP 現場支援＝低。
- **申請難度：高**：本名登記冊查無（sponsors_2026-10-30.csv）（近似名 Fusion Business Solutions (UK) Ltd 不相關）；無對口職缺＝高。
- **簽證／搬遷**：本名登記冊查無（sponsors_2026-10-30.csv）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到對口；第三方：Field Technical Engineer／Field Sales Executive（London 區，日期未示）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **來源**：verified9.md #16；bebee.com；gb.trabajo.org

### 26. Digital Scientists (Digital Scientists Ltd)（#18）｜Portsmouth

- **公司簡介**：CH 11700020 Active，Portsmouth。
- **適配度：低**：現定位為 AI consultancy／digital transformation；沒有職缺或技術棧證據＝低（資料不足）。
- **申請難度：高**：本名登記冊查無（sponsors_2026-10-30.csv）；/careers 404、首頁無 careers 連結＝高。
- **簽證／搬遷**：本名登記冊查無（sponsors_2026-10-30.csv）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（/careers 404）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **來源**：verified9.md #18；digital-scientists.co.uk

### 27. Revolution Software (Revolution Software Limited)（#22）｜York

- **公司簡介**：CH 02484526 Active，York。
- **適配度：低**：冒險遊戲工作室；studio 頁的 Jobs 區塊是 lorem ipsum 佔位文字，不算真實職缺＝低。
- **申請難度：高**：本名登記冊查無（sponsors_2026-10-30.csv）；無真實職缺＝高。
- **簽證／搬遷**：本名登記冊查無（sponsors_2026-10-30.csv）；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到（Jobs 區塊為佔位文字，如 "Position - Scripter"）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **來源**：verified9.md #22；revolution.co.uk/studio

### 28. STEF Langdons (STEF Langdons Ltd)（#4）｜Holytown (Motherwell)

- **公司簡介**：CH 01026181 Active（Bridgwater 註冊）。
- **適配度：低**：冷鏈物流（規則 N）；Motherwell 只見 LGV Driver，IT／cloud 未找到＝低。
- **申請難度：高**：本名登記冊查無（sponsors_2026-10-30.csv）（舊名 Nagel Langdons 亦無）；無對口職缺＝高。
- **簽證／搬遷**：本名登記冊查無（sponsors_2026-10-30.csv）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Motherwell：LGV Driver；IT／cloud／security：未找到
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **來源**：verified9.md #4；stef.jobs；simplyhired.co.uk

### 29. Nordeus（#31）｜Belgrade, RS

- **公司簡介**：Belgrade 遊戲公司（Top Eleven）；APR 未查；官網 curl 逾時（未改用其他方式重試）。
- **適配度：低**：遊戲公司，Greenhouse 12 筆 Belgrade 職缺只有 Junior Community Specialist、Junior UI Artist 等非工程職＝低。
- **申請難度：高**：無對口職缺；塞爾維亞非 EU、無 Blue Card，工作許可未驗證＝高。
- **簽證／搬遷**：非英國；非 EU（無 EU Blue Card）；工作許可：未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：未找到對口（Junior Community Specialist、Junior UI Artist）
- **語言**：職缺以英文撰寫，未見語言要求；實際工作語言未驗證
- **時程**：無現行可行動截止日；快照（2026-11-02）距開學 303 天、距畢業 669 天
- **來源**：verified9.md #31；boards-api.greenhouse.io/v1/boards/nordeus/jobs

---

## 七、跨輪比較：Run 1–Run 9

### 九輪規模

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
| **Run 9** | **32** | **29 列／29 雇主** | **3** | **Aiimi、Bloomreach、ESET、Infobip（高／中）** |
| 合計 | 329 列 | — | — | 以列計，不是不重複雇主數 |

**英國難度「低」累計**：
- Run 4：FanDuel
- Run 6：五家
- Run 7：三家
- Run 8：ENSEK（高／低）、OQC（中／低）
- Run 9：**無**。最接近的是 Aiimi（本名在冊＋第三方職缺），差在官方未確認職缺開放。

### 更新後英國 Top 10（九輪合併，英國且有贊助者）

方法：沿用 Run 2–8。適配優先，同級看贊助與確認開放的對口職缺；規則 W 只在新的高／低出現時插入。**本輪沒有新的 高／低，所以 Top 10 與 Run 8 完全相同。**

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
| 9 | Starling Bank | Run 6 | 高／低 | Engine 法人未驗證，有條件 |
| 10 | Version 1 | Run 6 | 高／低 | 規則 S 封閉集合，有條件 |

- **進出**：無。
- **候補（節錄）**：
  - 前段依序：Texaport、Spire、Proofpoint、Bellrock、AAC Clyde Space、Skyscanner、Scott Logic、Waracle、Made Tech、Wise、Rapid7、Pulsion、Encompass、Revolut、Kainos、Datactics、Data Intellect、Copper、Crypto Facilities、Amazon Development Centre Scotland。
  - **Run 9 新增**：**Aiimi**（高／中；本名在冊，接在 Amazon ADC Scotland 之後——Aiimi 本名在冊勝過 Amazon 只有集團在冊，但 Amazon 的職缺是官方確認、Aiimi 只有第三方，依規則 3-5 判斷差距不大，維持舊條目在前）。
  - Unity Brighton（高／高）**不列候補**：對口職缺明示不贊助（規則 K）。
  - 其後：OQC（中／低）、Barclays（中／低）、JPMorgan/Lloyds（中／中）；本輪的 Scottish Water、Met Office（中／中）接在其後。
- **敏感度**：若 Aiimi 的 Software Developer 經官方 Workable 確認仍開放，Aiimi 會成為 高／低（有條件），依規則 W 與 ENSEK 同類，可能插在第 9 位，Version 1 退出 Top 10。本報告不推論。

### 歐洲（非英國）Top 10（九輪合併）

方法：規則 Q。本輪最佳的 Bloomreach、ESET、Infobip 都是高／中，但都**沒有 relocation、visa 或 Blue Card 的官方說明**，Taiwan 資格也未驗證。依規則 Q，它們不足以擠下已有 relocation 或官方名單證據的條目。**Top 10 與 Run 8 完全相同。**

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
- 現有：Synerise、Kentico、Nord Security、Bitdefender、Tresorit、UiPath，接著 OpenText Cork、Einride、OutSystems、Talkdesk、Glovo、Myra、Feedzai、sennder、Zalando Dublin、Pipedrive、GlobalLogic、Honeycomb、Qualcomm Cork、Medtronic Galway。
- **Run 9 新增**，接在 UiPath 之後（規則 Q 第 2–4 點）：
  1. **Bloomreach SK**（高／中）：DevOps＋Cloud Security＋SRE，對口職最多且最新（updated_at 2026-10-27）。
  2. **ESET**（高／中）：DevOps 明寫 English B1+（規則 Q 第 3 點加分），但 Team Lead JD 為斯洛伐克文。
  3. **Infobip Zagreb**（高／中）：DevOps 為 on-site，SRE 遠端說法只來自第三方。
- 之後依序：Accedia、Ciklum、GoTo Hungary（中／中）、Printful（中／高）；本輪 Comtrade、Cosylab、Outfit7（中／高）接在最後。

### 與 Run 8 相比：本輪改變了什麼

1. 英國與歐洲 Top 10 都**不變**。
2. 登記冊更新為 2026-10-30 版並獨立重查：14 雇主／23 列，verifier 的 14 個命中與 2 個集團判定全部正確。
3. 第一次出現三家「在冊但職缺明示不贊助」的英國雇主（Prestwick Aerosystems、Evotix、Unity Brighton）——提醒持牌與個別職缺擔保是兩回事。
4. 第一次覆蓋 Glasgow 周邊城鎮與非 IT 雇主：航太 MRO、物流、水務、體育多數只有製造／營運職，Scottish Water 是唯一有 cyber／cloud 職能證據的一家（已截止）。
5. **沒有新增規則**。

---

## 八、未驗證／缺口

1. **個別職缺贊助**：除 Prestwick、Evotix、Unity 明示不贊助外，所有英國職缺都沒有贊助字樣，CoS 一律未驗證。
2. **官方職缺未確認**：Aiimi 兩職只來自第三方（官方 Workable API 無回傳）；Rapita Team Lead 與 Infobip SRE 也只來自第三方。
3. **JS／被擋的職缺板（未檢查）**：Celtic vacancies、VisitScotland Oracle HCM、Rareloop careers、Comtrade careers（Turnstile）、Atos UK careers。Scottish Water Workday 未逐頁列現況；Met Office 職缺列表未逐筆檢查。
4. **聘用法人與登記**：
   - Unity Software Limited 的 CH 狀態未另開公司頁。
   - Aspire Cardiff 法人 05444987 狀態未逐頁查。
   - Woodward Prestwick 地址未從 CH 取得。
   - Science Museum Group、Met Office、VisitScotland 的機構編號未驗證。
   - Scottish Rugby 登記冊兩組名稱與 SC748672 的關係未驗證。
5. **中東歐**：
   - 國家商業登記（ORSR、AJPES、Sudski registar、APR）全部未查。
   - 搬遷、工作許可、EU Blue Card、塞爾維亞工作許可、實際工作語言、Taiwan passport 資格全部未驗證。
   - brief 要求「找明文 relocation／visa 字樣」：本輪 7 家都沒找到；Bloomreach JD 內文未讀。
6. **範圍缺口**：brief B 組要求的 Inverness／Highlands & Islands（含 Sutherland 太空、Orkney／Shetland 能源科技）、Fife／St Andrews、Perth，以及 C 組的 Plymouth、Newport 以外的南威爾斯 cyber cluster，本輪 scout 都沒有產出（或只有已停業的 AxylCloud）。下一輪應補。
7. **其他招聘管道**：LinkedIn、Indeed、Otta 大多未逐一查證。
8. **Graduate 招募季**：各公司 2027–28 的 graduate 招募日期全部未驗證（含 Met Office Graduate Development Scheme）。

---

## 九、verified9 的不一致與需注意之處

1. **#7 Evotix 不贊助旗標**：verified9 總覽寫「#2/#7 職缺明示不 sponsor」，A 批也引原文；但交辦摘要的旗標清單只列 #2、#19。本報告依 verified9 原文，對 #7 套用規則 E/K（判高）。
2. **#6 Atos 的登記冊列**：verified9 把 Atos Executive Limited 也列在 #6 的命中說明中；本報告只把 Atos IT Services UK Ltd（3 列）算為 #6 的命中，Atos Executive Limited 是不同法人，不計。
3. **#9 Scottish Rugby 的兩組名稱**：登記冊有 SCOTTISH RUGBY LIMITED（城市拼成「Edinburghq」）與 Scottish Rugby Union Limited 各 2 列。verified9 把兩者都算 #9 命中；本報告依 CH 改名紀錄計為 1 個雇主、4 列，但 SC748672「SCOTTISH RUGBY UNION」（前名 Rugby Holdings (Scotland) Limited）是否才是舊名列的持牌者，未驗證。
4. **A 批計數**：A 批「計數」把 #3 列為命中，總覽也列 #3，一致；但 A 批表格的 #3 營運依據是 Workday 與登記冊，CH 公司頁的 Prestwick 地址未解析，營運判定較弱。
5. **B 組實際內容與 brief 不符**：brief B 組要 Highlands／Fife／Perth，scout 的 #9–11 是 Edinburgh 的體育與觀光機構，沒有任何 Highlands／Fife／Perth 的列；C 組則多出到 14 家。總數 32（目標約 34）。
6. **#24 日期**：verified9 引用的 LinkedIn 貼文與 CWJobs 頁未附刊登日；ICT Service Desk Analyst 的現況以第三方為準。
7. **#31 Nordeus**：官網 curl 逾時後「未改用 WebFetch 重試」，官網狀態實際是未檢查，不是無法連線的反證；營運判定只依 Greenhouse API。
8. **Greenhouse 日期**：Bloomreach、Outfit7、Nordeus 的日期是 updated_at，不是刊登日；本報告的時程表照此標註。
9. **#19 Unity「兩則職缺」**：verified9 說「上述兩則職缺明文寫不提供」，但列出的 URL 有三個（7476893、6619273、6709301），哪兩則有此字樣沒有逐一對應；本報告依多數對口職缺明示不贊助判高（規則 K），並在第十節揭露。

---

## 十、判斷與揭露（無新增規則）

1. **Unity Brighton 判 高／高**：verifier 讀到的對口職缺明示不贊助，依規則 K（Run 5 已對 Unity 同類處理）判高。若之後確認其他對口職（Linux Platform Systems 等）沒有此字樣，依規則 E 第一句可回到 高／中。
2. **Aiimi 判 高／中，不判低**：本名在冊，但兩則職缺都只來自第三方，依規則 C／3-4 的精神不算「確認開放的對口職缺」。這是本輪最接近進英國 Top 10 的判斷點（見第七節敏感度）。
3. **Scottish Water 判 中／中**：規則 N 公用事業上限中；有已驗證的 cyber／cloud 職能證據，所以給上限中而不是低；對口職已截止，所以難度中而不是低。
4. **Met Office 判 中／中**：在冊＋Graduate Development Scheme 存在，但 platform／cloud 職缺「未找到（未逐筆檢查職缺列表）」，依規則 3-2 不推論雲端職缺；判中而非低，是因為公部門科學機構有 graduate 管道證據（屬判斷，差距不大）。
5. **Evotix、Prestwick 判高**：在冊但職缺明示不贊助，且英國沒有對口職缺（規則 E 第二句／K）。
6. **Rareloop 判 中／中**：無贊助但 careers 頁寫正在招募、內容未檢查，沿用 Run 8 第十節第 2 點（「無贊助但職缺未檢查判中」）。
7. **小型軟體公司（Opencentric、Computerisation、Digital Scientists）判低**：規模極小或沒有任何職缺／技術棧證據（Fit「低：資料不足」）。Kinetic 雖也沒有職缺，但屬軟體產品公司且在冊，判中。
8. **集團持牌不計**：GE Caledonian（集團 GE Aviation Systems）、Aspire Cardiff（集團 Aspire Systems UK）依規則 A/C 處理。
9. **#6 Atos 移到第五節**：法人在冊，但 verified9 判「存疑」（Paisley 據點），依規則 V 不進主表。
10. **塞爾維亞列**：非 EU、無 Blue Card；Comtrade 的 cloud／security 證據屬 Comtrade System Integration 且部分在 Ljubljana，不歸屬給 Belgrade 據點（規則 A）。
11. **英國列與中東歐列混排**：第四節排名表把英國與中東歐列放在同一張表（同 Run 7–8），但兩者適用不同的難度量表，跨區比較只供參考。

本輪所有判斷都能用 Run 1–8 的規則（3-1～3-6、A–W）處理，**沒有新增規則**（若需要，會從 X 開始編號並揭露）。
