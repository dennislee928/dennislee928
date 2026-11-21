# 第十一輪組織（Run 11）：Glasgow 與鄰近新產業 ＋ 蘇格蘭名錄（Inverness Campus／HIE／大學 spin-out、ISP／altnet／MSP／colocation）＋ 英國未覆蓋城市（Derby、Peterborough、Northampton、Lincoln、Teesside、Preston／Lancaster、Stoke，及 Coventry／Gloucester／Martlesham 重試）＋ 東歐（Novi Sad／Niš、Tirana、Chișinău、Split／Osijek、Debrecen／Szeged）——適配度與申請難度評級報告

- **核實檢查日**：2026-11-16（Asia/Taipei；verified11 的查核日）。**分析／編纂日**：2026-11-21（Asia/Taipei；本報告日期與天數快照）。檔名沿用 brief 指定的 2026-11-16。
- 資料來源：`brief.md`（Run 11 參數）、`scout11.tsv`（32 列）、`scout11-handoff.md`、`audit.md`、`covered-clean.txt`、`verified11.md`（32 列，檢查日 2026-11-16；含 verified11_A／B 與 verified11.json）、`sponsors_latest.csv`（GOV.UK 持牌贊助登記冊 **2026-11-12 版**，2026-11-16 09:36 Asia/Taipei 下載，本地 142,999 行含表頭＝142,998 資料列；見 `sponsor_source.txt`）、Run 10 報告（格式、跨輪 Top 10 基準）、Run 9 報告（評級規則 A–W 原文）。
- **登記冊重查**：本報告用 `sponsors_latest.csv` 以法定名／交易名（不分大小寫、去除前後空白、完全比對）獨立重查（`gen/regcheck.py`），不只引用 verified11。
- **分析者補查**：DataVita 兩則 JD（Employment Hero：Platform Engineer、Cyber Security Operations Manager）於 2026-11-21 由分析者直接讀取（只讀，未聯絡公司、未申請），用來檢查 SC／工作權／贊助字樣；其餘一律依 verified11。
- 原則：只用上述檔案與補查頁面中的資料；沒有資料的標「未驗證」；頁面無法載入的標「未檢查」（不等於沒有職缺）；只有官方頁面明寫時，才引原文說目前沒有職缺，且只當作當日快照。Taiwan passport 的雇主層級資格一律「未驗證」（本輪沒有任何官方原文可判定）。時程適配另列（規則 3-3、F），不併入難度。**本輪沒有聯絡任何公司。**
- Dennis：Cloud & Security Platform Engineer（Go/Next.js/Python/PostgreSQL、SIEM、gRPC、AWS/Cloudflare），約 5–6 年，IELTS 7.5；UofG MSc Software Development (Conversion) 假設 2027-09-01 開學、2028-09-01 畢業；Taiwan passport；畢業後走 Graduate visa，再轉 Skilled Worker；入學前在台灣。
- 本輪範圍（brief）：A Glasgow 與鄰近新產業（物流、航太國防、生命科學、住房、鐵路、運動媒體）約 7；B 蘇格蘭名錄（Inverness Campus／HIE、St Andrews／Dundee／Stirling spin-out、ISP／altnet／MSP／colocation）約 8；C 英國未覆蓋城市＋三個重試約 11；D 東歐約 8；目標約 34（實際 32：A 7、B 8、C 10、D 7）。
- 產生方式：`gen/entries.py`（逐家資料）、`gen/parts.py`、`gen/parts2.py`（各節文字）、`gen/regcheck.py`（登記冊重查）、`gen/build.py`（輸出本檔；`python3 /workspace/uk-career-intel-run11/gen/build.py`）。

---

## 一、摘要

- **規模**：32 列＝32 個本輪不重複雇主。**評級 32 家**（英國 25、歐洲非英國 7），**排除 0 家**（規則 V 沒有觸發；#23 Olivehorse 是更名、#14 Kyloe 是換法人、#31 DualSOFT 的重組未驗證，都不是停業，見第五節）。
- **分組**：A（#1–7）7 家；B（#8–15）8 家；C（#16–25）10 家；D（#26–32）7 家。scout 的 handoff 初稿寫 33 列；Barclays Northampton 因品牌已收錄（Barclays Clyde Place, Glasgow 在 covered-clean）由 scout 刪除，**不在本輪 32 列，也不評級**（第八節）。
- **登記冊重查結果**：verified11 宣稱的 10 個同一法人命中（#1, 3, 4, 6, 8, 15, 16, 19, 20, 25）**全部成立**，共 **10 個不重複雇主、23 筆登記列**（全部 A rating；去除完全重複列後為 21 個「名稱＋路線」組合）。verifier 判為條件式的 #5、#7、#12、#17、#18、#21、#22、#23 **同樣確認不計**；#24 Westway IT 本名查無；#26–#32 英國登記冊不適用。**唯一分歧**：#16 Rolls-Royce plc 在本版登記冊是 **6 列**（Skilled Worker 與 GBM Senior or Specialist 各重複一次），verifier 只列 4 個路線（第九節）。
- **分布**：見第四節末。本輪**沒有任何 高／低 或 中／低**。
- **最佳**：
  1. **DataVita**（High Blantyre／Lanarkshire，高／中）：官方開放 Platform Engineer 與 Cyber Security Operations Manager，分析者讀 JD 全文未見 SC／工作權條款；但**未持牌**，不能進英國 Top 10。
  2. **Levi9**（Novi Sad，高／中）：官方 DevOps Engineer 開放，但地點是 Belgrade；官方 hiring process 評估英語。
  3. **Hornbill**（Tirana，高／中）：官方 Cloud Team 的 Linux Admin & Support Engineer。
  4. **Vega IT**（Novi Sad／Niš，高／中）：Novi Sad／Niš 有 Experienced Data Engineer；DevOps 只在 Amsterdam。
  5. **Siemens Energy**（Lincoln，中／中）：Siemens Energy Limited 直接命中＋官方 OT 資安職，與已收錄的 Siemens Mobility 是不同公司，當作新雇主評。
- **SC／國安限制**：Thales Glasgow（中／高，所有對口 JD 要求 SC＋居英年限，規則 T）；Rolls-Royce 的 Infrastructure Engineer（SC＋5 年居英，該職不計）；BAE Samlesbury（官方 Security Statement，低／高）。
- **Top 10 變動**：
  - 英國：**不變**（本輪沒有 高／低；規則 W 不觸發）。本輪在冊的 中／中（Siemens Energy、Rolls-Royce、Capgemini、Huawei R&D、Double Eleven、STAR-Dundee）接在候補最後。
  - 歐洲：**不變**（規則 Q：本輪 7 家都沒有官方 relocation／visa 字樣）。Levi9、Hornbill、Vega IT 加入候補。
- **截止日**：本輪**沒有**仍開放、有官方截止日且可計的對口職缺。只有兩則不計的參考：Rolls-Royce Infrastructure Engineer（2026-11-24，SC 職）與 BAE Application Support Analyst（2026-11-26，非對口）；Dennis 入學前在台灣，實際上都不可行動（四之二）。

---

### 登記冊逐列重查（sponsors_latest.csv，2026-11-12 版）

| # | 雇主（登記名） | 城市 | 路線（登記列數） | 結果 |
|---:|---|---|---|---|
| 1 | Thales UK Limited | Reading | Global Business Mobility: Senior or Specialist Worker；Skilled Worker；Global Business Mobility: Graduate Trainee（3） | 命中（Workday hiringOrganization＝Thales UK Limited；對口職全為 SC） |
| 3 | ScotRail Trains Ltd | Glasgow | Skilled Worker（1） | 命中 |
| 4 | The Rangers Football Club Ltd | GLASGOW | Skilled Worker；International Sportsperson（2） | 命中 |
| 6 | Life Technologies Limited | Paisley | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 命中 |
| 8 | Capgemini UK PLC | London | Global Business Mobility: Graduate Trainee；Skilled Worker；Global Business Mobility: Senior or Specialist Worker（3） | 命中 |
| 15 | STAR-Dundee Ltd | Dundee | Skilled Worker（1） | 命中 |
| 16 | Rolls-Royce plc | Derby | Global Business Mobility: Graduate Trainee；Global Business Mobility: Senior or Specialist Worker；Skilled Worker；Global Business Mobility: Senior or Specialist Worker；Global Business Mobility: Service Supplier；Skilled Worker（6） | 命中（6 列含 2 組完全重複；verifier 列 4） |
| 19 | Siemens Energy Limited | Newcastle Upon Tyne | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 命中（職缺頁 Company＝Siemens Energy Limited；新雇主，非 Siemens Mobility） |
| 20 | Double Eleven Limited | Middlesbrough | Skilled Worker（1） | 命中 |
| 25 | Huawei Technologies Research & Development (UK) Limited | Cambridge | Skilled Worker；Global Business Mobility: Senior or Specialist Worker（2） | 命中（R&D 招聘法人 07371283） |
| 3 | （Abellio ScotRail Limited） | Glasgow | Skilled Worker（1） | 前特許營運商（仍 Active），不是現行招聘法人，不計 |
| 5 | （Sky UK Limited） | Middlesex | Creative Worker；Global Business Mobility: Senior or Specialist Worker；Skilled Worker（3） | Livingston 職缺法人未在職缺原文確認，條件式，不計 |
| 7 | （DHL Services Limited） | Milton Keynes | Global Business Mobility: Graduate Trainee；Global Business Mobility: Senior or Specialist Worker；Skilled Worker（3） | Bellshill 聘用法人未定（DHL Supply Chain Limited 不在冊），條件式，不計 |
| 11 | （DC Thomson & Co Ltd） | Dundee | Skilled Worker（1） | 母集團，不是本列招聘法人，不計 |
| 12 | （GoFibre Holdings LTD） | Edinburgh | Skilled Worker（1） | 職缺未明示 Holdings／Networks／Broadband，條件式，不計 |
| 16 | （Rolls-Royce SMR Limited） | Derby | Skilled Worker（1） | 同集團另一法人，與本列無關，不計 |
| 17 | （Alstom Engineering and Services Limited／Alstom Transport UK Ltd） | Derby／Birmingham | Global Business Mobility: Senior or Specialist Worker；Skilled Worker；Global Business Mobility: Senior or Specialist Worker；Skilled Worker（4） | 兩家 Derby 相關法人都在冊，但職缺只寫 Alstom，條件式，不計 |
| 18 | （BGL Group Ltd） | Peterborough | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 實際雇用可能是 Compare the Market Limited（不在冊），條件式，不計 |
| 21 | （BAE Systems Plc） | London | Global Business Mobility: Graduate Trainee；Global Business Mobility: Senior or Specialist Worker；Government Authorised Exchange；Skilled Worker（4） | 職缺未點名法人；BAE Systems (Operations) Limited 不在冊，條件式，不計 |
| 22 | （Hillside (Media Services) Limited／Hillside (Shared Services 2018) Limited／Hillside (Technology) Limited） | Stoke-On-Trent／Stoke on Trent | Skilled Worker；Skilled Worker；Skilled Worker（3） | 同址集團公司，官方未點名為招聘法人，不計 |
| 23 | （PricewaterhouseCoopers LLP） | London | Global Business Mobility: Senior or Specialist Worker；Global Business Mobility: Graduate Trainee；Skilled Worker（3） | PwC 集團 LLP ≠ PwC Business Consulting Services Limited，不計 |
| 25 | （Huawei Technologies (UK) Co., Ltd） | Reading | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | Reading 法人 ≠ R&D 招聘法人，不計 |
| 32 | （Deutsche Telekom (UK) Limited） | Welwyn Garden City | Global Business Mobility: Senior or Specialist Worker；Skilled Worker（2） | 非英國列的同品牌英國法人，不適用、不計 |

合計：10 個不重複雇主、23 筆登記列（去除完全重複列為 21 個名稱＋路線組合；不含上表 12 列集團／條件式與 1 列非英國列的英國法人；全部 A rating）。與 verified11 的 10 個命中完全一致；唯一差異是 #16 的列數。持牌不等於個別職缺會擔保。本名查無：#2（Wheatley Housing／Homes／Group）、#7（DHL Supply Chain）、#9（iomart）、#10（DataVita／HFD DataVita）、#11（Brightsolid）、#13（Converged Communication）、#14（Kyloe）、#18（Compare the Market）、#19 據點法人（Siemens Energy Industrial Turbomachinery）、#21（BAE Systems (Operations)）、#22（bet365）、#23（PwC Business Consulting／Olivehorse）、#24（Westway IT）；歐洲品牌 Vega IT、Levi9、Hornbill、Amdaris、Profico、DualSOFT 也查無（英國登記冊本來不適用）。

---

## 二、簽證與聘僱路徑（本輪查核範圍）

- **英國**：本輪以 2026-11-12 版登記冊重查（10 雇主／23 列）。Graduate visa 18 個月與 New Entrant 門檻已在 Run 6 第二節以 gov.uk 原文確認，本輪沿用結論，不重複引述：2028-09 畢業 → Graduate visa 約 18 個月 → 轉 Skilled Worker；New Entrant 有 4 年上限（含 Graduate 期間）。
- **職缺上的贊助／限制字樣**：
  - 明示不贊助：本輪**沒有**找到（verified11 與分析者補查都沒有）。
  - SC／居英年限（規則 T）：Thales（所有已讀對口 JD：SC，通常 5 年居英或 5 年中 3 年＋overseas checks）；Rolls-Royce Infrastructure Engineer（SC＋5 年以上英國居住；同日的 APS Software Engineer 沒有 SC 字樣）。
  - 國籍／出生地限制（規則 L）：BAE Systems 官方 Security Statement——國籍、曾有國籍與出生地可能限制資格；所有人至少 BPSS；許多職位需 5–10 年連續英國居住的國安審查。
  - 「sponsorship」非簽證：Thales graduate JD 的「sponsorship」是 Engineering Leadership 指導。
  - DataVita 兩則 JD：分析者讀全文，**沒有**贊助、SC 或工作權字樣（正反皆無）；但 DataVita 未持牌。
  - 其餘英國職缺都沒有贊助字樣；個別 CoS 一律未驗證。
- **歐洲**：
  - 克羅埃西亞（#30）、匈牙利（#32）屬 EU：EU Blue Card 只標「相關」（規則 J），不算已證實路徑。
  - 塞爾維亞（#26、#27、#31）、阿爾巴尼亞（#28）、摩爾多瓦（#29）非 EU：**不適用 EU Blue Card，但這不等於不能合法工作**。verifier 附了官方來源：塞爾維亞 MUP temporary residence／single permit to reside and work（welcometoserbia.gov.rs）；阿爾巴尼亞 leje unike（Unique Permit，e-Albania，Law 79/2021，AIDA 說明）；摩爾多瓦 IGM provisional stay for work purposes。Taiwan passport 能否取得：未驗證。
  - 本輪所有歐洲列都**沒有官方 relocation／visa 說明**（brief 要求明確尋找；verifier 也未找到）。Deutsche Telekom IT Solutions 只有已過期職缺寫「remote only within Hungary」。

---

## 三、評級標準（與 Run 1–10 相同，規則 A–W 全文沿用；本輪無新增規則）

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

**本輪如何適用（不是新規則）**：航太／國防／鐵路／能源 OEM、住房、鐵路營運、足球俱樂部、生技、物流依規則 N 與 3-2；資料中心、ISP／altnet、MSP 依規則 N 以職缺判斷；Thales、Rolls-Royce 的 SC 與居英年限依規則 T；BAE 的 Security Statement 依規則 L／T；集團與條件式持牌依 A/C（Alstom 不套 S）；未檢查依 3-1；職缺效期依 P（以分析日 2026-11-21 計）；歐洲依 Run 2 量表與規則 D、J、M、Q；更名與換法人不套規則 V；Top 10 插入依 W。

---

## 四、排名表（32 個不重複雇主＝32 列；第五節無排除列）

「未檢查」＝入口無法載入，不等於沒有職缺。時程另見四之二，不併入難度。英國列用英國難度量表，非英國列用 Run 2 量表。

| 排名 | 組織（#） | 國家／城市 | 適配 | 適配理由（一句） | 難度 | 難度理由（一句） | 簽證／搬遷（簡） | 對口開放職缺（核實 2026-11-16；效期以 2026-11-21 計） | 時程 |
|---:|---|---|:-:|---|:-:|---|---|---|---|
| 1 | DataVita (HFD DATAVITA LIMITED)（#10） | UK／High Blantyre／Chapelhall（Lanarkshire）／Glasgow 註冊辦事處 | 高 | 雲端與基礎設施公司（Tier III 資料中心、managed cloud、HPC／AI）；規則 N 對資料中心依職缺判斷：官方開放 Platform Engineer（Python／Ansible／Terraform、Prometheus／Loki／Grafana，K8s／IaC／GitOps 為加分）與 Cyber Security Operations Manager（incident response、logging／monitoring，SIEM／EDR 為加分），與 Dennis 的 cloud & security platform 背景直接對口。 | 中 | 本名不在登記冊（HFD DATAVITA LIMITED／DataVita 均查無）；官方職缺確認開放、雇主欄即 HFD DATAVITA LIMITED＝有招聘管道但無贊助＝中。 | 本名不在冊；分析者 2026-11-21 讀兩則 JD 全文，未見贊助、SC 或 right-to-work 字樣（正反皆無）；未持牌，目前無法發 CoS | Platform Engineer（Mid-Level，5 天 on-site，Hamilton International Technology Park；Employment Hero 刊登 2026-09-02）；Cyber Security Operations Manager（Senior，向 CTO 匯報；2026-11-04）；同頁另有 Principal／Solution／Enterprise Architect、3rd Line Support Analyst 等（未逐一列入） | Platform Engineer 已刊登 80 天、Cyber Security Operations Manager 17 天（皆無截止日）；Dennis 入學前在台灣，現職不可行動；快照距開學 284 天、距畢業 650 天 |
| 2 | Levi9 (Levi9 Serbia)（#27） | RS／Novi Sad（職缺在 Belgrade） | 高 | nearshore 軟體工程公司（規則 3-6）；官方 Teamtailor 可見 DevOps Engineer（JD 提及 DevOps／cloud），與 Dennis 目標職類對口。 | 中 | 公司層級有官方確認開放的 DevOps Engineer（pubDate 2026-11-09），但地點是 **Belgrade**、不是 Novi Sad；Novi Sad 具名對口職缺未找到；非 EU、搬遷／工作許可字樣未找到（Run 2 量表＝中；以公司層級判斷屬判斷，第十節）。 | 塞爾維亞非 EU，不適用 EU Blue Card（≠不能合法工作）；官方路徑：MUP 的 temporary residence／single permit to reside and work，經 welcometoserbia.gov.rs 申請（verifier 引官方來源）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證 | DevOps Engineer（Belgrade，Hybrid，pubDate 2026-11-09）；Software Engineer（Belgrade，同日）；Novi Sad 具名對口職缺：未找到 | DevOps（Belgrade）已刊登 12 天、無截止日；若在 MSc 前申請與 2027-09 入學衝突（規則 F） |
| 3 | Hornbill (Hornbill SHPK)（#28） | AL／Tirana | 高 | 英國 ESM SaaS 廠商的 Tirana Cloud Team（規則 3-6）；Linux Admin & Support Engineer 負責多區資料中心 SaaS 的 cloud production environment，與 Dennis 的平台維運背景對口。 | 中 | 官方確認仍刊登的 Cloud Team 職缺（日期未示），英文撰寫；但層級標「Support」、可能低於 Dennis 年資（規則 Q 排序備註），語言與搬遷／工作許可字樣未找到（Run 2 量表＝中）。 | 阿爾巴尼亞非 EU，不適用 EU Blue Card；官方路徑：leje unike（Unique Permit，居留＋工作合一）經 e-Albania 申請，法律基礎 Law 79/2021（AIDA 說明）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證 | Linux Admin & Support Engineer（Tirana，Department: Cloud Team；刊登／截止日頁面未示） | 職缺日期未驗證（規則 P 無法計天數）；若在 MSc 前申請與 2027-09 入學衝突（規則 F） |
| 4 | Vega IT（#26） | RS／Novi Sad／Niš | 高 | 客製軟體與 AI／data 工程公司（規則 3-6）；官方板有 DevOps Engineer 與 Data Engineer 等工程職稱證據。 | 中 | Novi Sad／Niš 有官方仍列的 Experienced Data Engineer（data engineering，非 DevOps／SRE，規則 D 視為接近入口）；DevOps Engineer 地點是 Amsterdam，不計；語言、搬遷／工作許可未找到（Run 2 量表＝中）。 | 塞爾維亞非 EU，不適用 EU Blue Card（≠不能合法工作）；官方路徑：MUP 的 temporary residence／single permit to reside and work，經 welcometoserbia.gov.rs 申請（verifier 引官方來源）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證 | Experienced Data Engineer（Podgorica、Novi Sad、Niš、Zrenjanin、Belgrade；日期未示）；DevOps Engineer 僅 Amsterdam（不計）；分頁 2–4 未檢查 | 職缺日期未驗證；若在 MSc 前申請與 2027-09 入學衝突（規則 F） |
| 5 | Siemens Energy (Siemens Energy Limited；Lincoln 據點)（#19） | UK／Lincoln | 中 | 能源設備 OEM（工業渦輪機），規則 N 適配上限 中；官方 Lincoln 職缺有 Senior HMI PC and Cyber Security Engineer（OT／工控資安：Windows hardening、IEC-62443、NIST、NIS）與 Senior Aeromechanics ML Engineer（Python／PyTorch），與 Dennis 的資安／Python 部分重疊，但不是 cloud platform。 | 中 | 登記冊直接命中職缺頁所寫的 Company：Siemens Energy Limited（規則 C 滿足）；但兩則開放職缺一個是 OT／工控資安（Manager／Team Leader 級、需 AVEVA／WinCC／PCS7），一個是 aeromechanics ML，都不是 Dennis 目標職類的確認對口職缺，且日期未示＝有贊助缺對口職缺＝中。 | 登記冊命中 Siemens Energy Limited, Newcastle Upon Tyne（Skilled Worker；GBM Senior or Specialist；A）；Lincoln 據點法人 Siemens Energy Industrial Turbomachinery Limited 不在冊；JD 未見贊助、SC 字樣 | Senior HMI PC and Cyber Security Engineer（292113，Lincoln，日期未示）；Senior Aeromechanics Machine Learning Engineer（303169，Lincoln，日期未示）；R&D Software Engineer 285175 今日 404（不計） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 6 | Rolls-Royce (Rolls-Royce plc；Moor Lane)（#16） | UK／Derby | 中 | 航太引擎製造（規則 N）；有 Azure／Terraform／Azure DevOps／Kubernetes 的 Infrastructure Engineer，技能直接對口，但該職需 SC（規則 T，不算對口職缺）；另一則 APS Software Engineer 是 Kinaxis Maestro 規劃系統，不是 cloud。 | 中 | 登記冊直接命中 Rolls-Royce plc；Infrastructure Engineer 依規則 T 不計；APS Software Engineer 無 SC 字樣但非對口，且已於 2026-11-19 截止＝有贊助、無可計的對口現行職缺＝中。不判高：SC 只見於該 JD，verifier 明說不可推及所有 Derby 軟體職。 | 登記冊命中 Rolls-Royce plc, Derby（6 列：Skilled Worker ×2、GBM Senior or Specialist ×2、GBM Graduate Trainee、GBM Service Supplier；A）；Infrastructure Engineer 官方要求 SC＋5 年以上英國居住 | Infrastructure Engineer（JR6161235，2026-11-10 刊登，截止 2026-11-24；SC＋5 年居英，規則 T 不計）；Software Engineer-Advanced planning and scheduling（JR6157983，截止 2026-11-19，已過）；VP Digital and IT（截止 2026-11-16 午夜，不計） | Infrastructure Engineer 截止 2026-11-24（距今 3 天）但屬 SC 職、不計；APS 已截止；快照距開學 284 天、距畢業 650 天 |
| 7 | Capgemini Inverness (Capgemini UK PLC)（#8） | UK／Inverness（另有 Nairn） | 中 | IT 服務／顧問（HIE 案例稱 cloud 基礎設施管理、資安、敏捷開發）；規則 3-6：顧問公司要有工程類職稱證據才判高，Inverness 官方職缺清單未檢查＝中。 | 中 | 登記冊直接命中 Capgemini UK PLC（法人與官方 UK locations 頁一致）；官方 Job search 為 JS，Inverness 職缺未檢查（規則 3-1 不寫沒有職缺）＝中。 | 登記冊命中 Capgemini UK PLC, London（Skilled Worker；GBM Senior or Specialist；GBM Graduate Trainee；A）；職缺贊助字樣未驗證 | 未檢查（官方 Job search 為 JS） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 8 | Huawei R&D UK (Huawei Technologies Research & Development (UK) Limited)（#25） | UK／Martlesham（Adastral Park，Ipswich Research Center） | 中 | 電信 R&D；Ipswich 現行職缺多為製程／光電子（Process、Photolithography、Epitaxy、PIC Design），最接近軟體的是 Simulation and Optimisation Engineer（模擬／ML），沒有 cloud／platform／security 職（規則 N：只有硬體類職者判中）。 | 中 | 登記冊直接命中官方 Recruitment Privacy Notice 點名的 R&D 法人；但沒有對口職缺＝有贊助缺職缺＝中。 | 登記冊命中 Huawei Technologies Research & Development (UK) Limited, Cambridge（Skilled Worker；GBM Senior or Specialist；A）；Reading 的 Huawei Technologies (UK) Co., Ltd 不計 | Simulation and Optimisation Engineer（software-adjacent，非 cloud／platform；日期未驗證）；其餘為製程／光電子 | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 9 | Double Eleven (Double Eleven Limited)（#20） | UK／Middlesbrough | 中 | 遊戲開發／移植工作室（軟體業，比照 Run 10 Playground Games）；官方開放職缺是 graphics programmer 與設施，沒有 cloud／backend／platform 職。 | 中 | 登記冊直接命中 Double Eleven Limited；嚴格對口職缺未找到＝有贊助缺職缺＝中。 | 登記冊命中 Double Eleven Limited, Middlesbrough（Skilled Worker；A）；職缺贊助字樣未驗證 | Senior Graphics Programmer、Principal Low-Level Graphics Programmer、Expression of Interest (UK)、Facilities and Building Manager（皆非對口）；Workable 深頁幾乎無靜態正文 | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 10 | STAR-Dundee (STAR-Dundee Limited)（#15） | UK／Dundee | 中 | University of Dundee spin-out（2002），SpaceWire 太空電子；嵌入式／硬體為主，規則 N：只有硬體／嵌入式職者判中。 | 中 | 登記冊直接命中 STAR-Dundee Ltd；Vacancies 頁目前沒有具體職缺（只歡迎聯繫）＝有贊助缺職缺＝中。 | 登記冊命中 STAR-Dundee Ltd, Dundee（Skilled Worker；A）；職缺贊助字樣未驗證 | 目前無具體開放職缺（官方 Vacancies 頁，已檢查） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 11 | BGL Group／Compare the Market（#18） | UK／Peterborough | 中 | 比價平台／保險經紀；線上平台依規則 N 視為軟體，但職缺清單未檢查、沒有工程職稱證據（規則 3-6）＝中。 | 中 | BGL Group Ltd 在冊，但實際雇主可能是 Compare the Market Limited（不在冊），依規則 C 不計；Oracle 職缺清單未檢查（規則 3-1）＝中（比照 Run 10 Aviva）。 | 條件式：BGL Group Ltd, Peterborough（Skilled Worker；GBM Senior or Specialist；A）在冊；Compare the Market Limited 不在冊；職缺贊助字樣未驗證 | 未檢查（Oracle／Taleo 清單為 JS；comparethemarket.com root 403） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 12 | bet365（#22） | UK／Stoke-on-Trent | 中 | 線上博彩平台（規則 N：線上平台視為軟體）；但官方職缺深頁未檢查，本輪沒有工程職稱證據＝中。 | 中 | bet365 不是登記名；同址 Hillside (Technology)／(Media Services)／(Shared Services 2018) Limited 在冊，但官方招聘隱私權只寫「the bet365 group of companies」與「specific bet365 entity」，未點名，依規則 A/C 不計；職缺深頁 JS 未檢查＝中。 | 條件式：三家同址 Hillside 公司在冊（Skilled Worker；A），未確認為招聘法人；職缺贊助字樣未驗證 | 未檢查（bet365careers.com 職缺深頁為 JS） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 13 | iomart (Iomart Group plc)（#9） | UK／Glasgow（Atlantic Quay） | 中 | 雲端／managed hosting／資料中心公司；業務與 cloud／平台工程相關，但 iCIMS 職缺清單未檢查、沒有工程職稱證據（規則 3-6）＝中。 | 中 | 本名不在登記冊（Iomart Group PLC、Iomart Managed Services Limited 都查無）；iCIMS 405＝未檢查，沿用「無贊助但職缺未檢查判中」＝中。 | 本名不在冊；招聘子公司未確認；職缺贊助字樣未驗證 | 未檢查（官方 iCIMS 清單 HTTP 405） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 14 | Olivehorse（現名 PwC Business Consulting Services Limited）（#23） | UK／Coventry（University Technology Park） | 中 | IT 顧問（Maps 類別 Consultant／Software company）；規則 3-6：顧問且沒有工程職稱證據＝中。 | 中 | 本名（08966493）不在登記冊；PricewaterhouseCoopers LLP 在冊但不是同一法人（規則 A/C 不計）；pwc.co.uk careers 403＝未檢查，沿用「無贊助但職缺未檢查判中」＝中。 | 本名不在冊；PwC LLP 在冊屬集團，不計；職缺贊助字樣未驗證 | 未檢查（pwc.co.uk 403；沒有獨立 Olivehorse 網站） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 15 | Deutsche Telekom IT Solutions（ITTC Hungary Kft.／TSI Hungary Kft.）（#32） | HU／Debrecen | 中 | 大型 IT 服務中心；曾有 DevOps 職（已過期），但現行 Debrecen cloud／DevOps 職缺未檢查，招聘法人在兩家 Kft. 之間未定＝中。 | 中 | 官方 open-positions 有 231 筆、提供 Debrecen 與 English 語言篩選（入口存在），但清單為 JS、具名職缺未檢查（規則 3-1 不加重；比照 Run 10 Workable）；搬遷／簽證字樣未找到＝中（Run 2 量表）。 | 匈牙利屬 EU：EU Blue Card 只標「相關」（規則 J）；新聘搬遷／簽證字樣未找到；過期職缺寫遠端只限匈牙利境內；Taiwan passport 資格：未驗證 | 未檢查（231 筆清單為 JS）；SmartRecruiters DevOps Engineer REF5793N 已過期（不計） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 16 | Amdaris (Amdaris SRL)（#29） | MD／Chișinău | 中 | 英國總部（Bristol）軟體公司的 Chișinău 交付中心；軟體業但沒有工程職稱或技術棧證據＝中。 | 中 | 官方 jobs 板為 JS，個別職缺未檢查（規則 3-1 不加重）；非 EU、語言與搬遷／工作許可字樣未找到＝中（Run 2 量表，比照 Run 10 Workable）。 | 摩爾多瓦非 EU，不適用 EU Blue Card；官方路徑：IGM provisional stay for work purposes／immigrant worker；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證 | 未檢查（amdaris.com/jobs 為 JS） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 17 | DualSOFT (DUALSOFT D.O.O.)（#31） | RS／Niš | 中 | 軟體開發公司；沒有工程職稱或技術棧證據＝中。 | 中 | TalentLyft 職缺板未檢查（規則 3-1 不加重）；非 EU、語言與搬遷字樣未找到＝中（Run 2 量表）。 | 塞爾維亞非 EU，不適用 EU Blue Card（≠不能合法工作）；官方路徑：MUP 的 temporary residence／single permit to reside and work，經 welcometoserbia.gov.rs 申請（verifier 引官方來源）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證 | 未檢查（dualsoft.talentlyft.com） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 18 | Thales UK (Thales UK Limited；Linthouse)（#1） | UK／Glasgow（Linthouse） | 中 | 國防電子（optronics）；有 Senior Software Engineer（C++／embedded）與 2027 Development Operations Engineering Graduate，屬軟體但偏嵌入式，DevOps 只有 graduate 級＝中。 | 高 | 登記冊直接命中且 Workday hiringOrganization＝Thales UK Limited（規則 C 滿足）；但**所有**已讀對口 JD 都要求 SC，通常需近 5 年在英居住（或 5 年中 3 年＋overseas checks），依規則 T 全部不算對口現行職缺＝高（比照 Run 10 GCHQ）。 | 登記冊命中 Thales UK Limited, Reading（Skilled Worker；GBM Senior or Specialist；GBM Graduate Trainee；A）；JD 要求 BPSS＋SC 與居英年限（規則 T） | Senior Software Engineer R0342601（2026-10-15）與 R0342322（2026-10-12）；2027 Development Operations Engineering Graduate R0337885 與 2027 Software Engineering Graduate R0337840（2026-10-05）——全部要求 SC，規則 T 不計 | 現行 JD 皆屬 SC 職、不計；2027 graduate 開始日與 Dennis 2028-09 畢業不合（規則 3-3） |
| 19 | Converged Communication Solutions（#13） | UK／Aberdeen（Bucksburn） | 中 | 東北蘇格蘭 MSP／ISP（IT、資安、連線、DC）；有 Network Engineer 職能證據，但偏網路支援＝中。 | 高 | 本名不在登記冊；官網所列 Network Engineer、1st Line Network Support Engineer 截止 2025-12-14 已過期（規則 P），沒有現行對口職缺＝高。 | 本名不在冊；職缺贊助字樣未驗證 | 無現行（Network Engineer、1st Line Support 截止 2025-12-14，已過期） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 20 | Brightsolid (Brightsolid Online Technology Limited)（#11） | UK／Dundee（Technology Park） | 中 | 資料中心／colocation／cloud（DC Thomson 集團）；業務與 cloud 基礎設施相關，但沒有職缺證據＝中（比照 Run 10 Pulsant 不判低）。 | 高 | 本名不在登記冊，只有母集團 DC Thomson & Co Ltd 在冊（規則 A/C 不計）；集團官方 Workable 現列職缺沒有 Brightsolid 標籤＝無贊助且無對口職缺＝高（比照 Run 10 Codemasters）。 | 本名不在冊；DC Thomson & Co Ltd（Dundee）在冊屬集團，不計；職缺贊助字樣未驗證 | 無 Brightsolid 標籤職缺（DC Thomson Workable，已檢查）；brightsolid.com 403＝未檢查 | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 21 | Kyloe Partners (Angus Kyloe Partners Limited)（#14） | UK／Kirkwall（Orkney） | 中 | Bullhorn CRM 相關 SaaS 產品與顧問；軟體業但沒有工程職稱證據＝中。 | 高 | 現行雇主 Angus Kyloe Partners Limited 不在登記冊；目前只有 Open Application、沒有具名職缺＝無贊助且無職缺＝高。 | 本名不在冊；職缺贊助字樣未驗證 | 無具名職缺（僅 Open Application，官方 careers 已檢查） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 22 | Profico（#30） | HR／Split（另有 Zagreb） | 中 | 數位產品開發公司；軟體業但沒有工程職稱或技術棧證據，規模小＝中。 | 高 | 官方 careers 快照「Open positions 0」（只收 open application）＝無對口職缺＝高（Run 2 量表，比照 Run 10 Sorsix）；這只是 2026-11-16 快照，不是永久沒有職缺。 | 克羅埃西亞屬 EU：EU Blue Card 只標「相關」（規則 J）；「Travel opportunities」不是簽證／搬遷字樣；Taiwan passport 資格：未驗證 | 官方快照 Open positions 0（2026-11-16）；接受 open application | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 23 | ScotRail (ScotRail Trains Limited)（#3） | UK／Glasgow（Atrium Court, 50 Waterloo St） | 低 | 鐵路營運（規則 N）；verified11 沒有任何 IT／數位職缺或團隊證據，依規則 3-2 以「資料不足」判低（不是確認沒有 IT 職缺）。 | 中 | 登記冊直接命中 ScotRail Trains Ltd；官方 ATS 清單為 JS（未檢查，規則 3-1）＝中。 | 登記冊命中 ScotRail Trains Ltd, Glasgow（Skilled Worker；A）；前特許商 Abellio ScotRail Limited 也在冊但不計 | 未檢查（apply.scotrail.co.uk 清單為 JS） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 24 | Rangers FC (The Rangers Football Club Limited)（#4） | UK／Glasgow（Ibrox） | 低 | 足球俱樂部（規則 N）；brief 目標是媒體／票務／電商數位團隊，但 verified11 沒有任何 IT／數位職缺證據＝低（資料不足）。 | 中 | 登記冊直接命中 The Rangers Football Club Ltd；官方 ATS（people-first）為 JS SPA（未檢查）＝中。 | 登記冊命中 The Rangers Football Club Ltd, Glasgow（Skilled Worker；International Sportsperson；A）；持牌不等於 IT 職可擔保 | 未檢查（rangershr.jobs.people-first.com 為 JS） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 25 | Thermo Fisher Scientific Inchinnan (Life Technologies Limited)（#6） | UK／Inchinnan（Paisley） | 低 | 生技／生命科學製造（規則 N，上限 中）；verified11 沒有 Inchinnan 的 IT 職缺或團隊證據＝低（資料不足）。 | 中 | 登記冊直接命中 Life Technologies Limited（註冊地址＝Maps 廠址）；官方 Phenom 職缺清單為 JS（未檢查）＝中。 | 登記冊命中 Life Technologies Limited, Paisley（Skilled Worker；GBM Senior or Specialist；A）；Life Technologies Finance Limited（non-trading）不在冊、不計 | 未檢查（jobs.thermofisher.com 為 JS） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 26 | Alstom (Derby, Litchurch Lane)（#17） | UK／Derby | 低 | 鐵路車輛製造（規則 N）；官方 Derby 搜尋只見 Method & Tools Engineer 等，沒有 software／DevOps／cloud／security 職＝低（資料不足）。 | 中 | 兩家 Derby 相關法人（Alstom Transport UK Ltd、Alstom Engineering and Services Limited）都在冊，但職缺只寫「Company: Alstom」，依規則 C 不計命中；規則 S（封閉集合）不套用，因為兩家只是 verifier 列的候選、沒有官方證據證明已窮盡；判中而非高屬判斷（第十節）。 | 條件式：Alstom Transport UK Ltd（Birmingham）與 Alstom Engineering and Services Limited（Derby）都在冊（Skilled Worker；GBM Senior or Specialist；A）；職缺雇主未獨一確定 | 無（官方 Derby 搜尋，已檢查；Method & Tools Engineer 非對口） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 27 | Sky Livingston (Sky UK Limited，條件式)（#5） | UK／Livingston（Kirkton Campus） | 低 | 媒體／電信（規則 N 依職缺判斷）；官方 careers 列 Livingston 為據點，但沒有 Livingston 的 IT／軟體職缺證據＝低（資料不足）。 | 中 | Sky UK Limited 在冊，但 Livingston 職缺原文未載法人名稱，依規則 C 不計；Workday 以 Livingston／Scotland 搜尋為 0，careers.sky.com 清單未完整檢查（JS）＝中（比照 Run 10 Aviva）。 | 條件式：Sky UK Limited（Middlesex）在冊（Skilled Worker；GBM Senior or Specialist；Creative Worker；A）；Sky UK New Co Limited 不計 | 未檢查（careers.sky.com 清單為 JS；Workday Livingston 關鍵字搜尋 0 筆，只是快照） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 28 | DHL Supply Chain Bellshill（#7） | UK／Bellshill（Mossbell Road） | 低 | 物流倉儲；verified11 沒有 IT／WMS 職缺證據＝低（資料不足）。 | 中 | DHL Services Limited 在冊但 Bellshill 聘用法人未定，DHL Supply Chain Limited 不在冊，依規則 A/C 不計；官方職缺清單未檢查（JS／轉址）＝中（比照 Run 10 Lifescan）。 | 條件式：DHL Services Limited（Milton Keynes）在冊（Skilled Worker；GBM；A）；DHL Supply Chain Limited 不在冊 | 未檢查（careers.dhl.com 為 JS／轉址） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 29 | BAE Systems Samlesbury（#21） | UK／Samlesbury（Preston） | 低 | 國防航太；Samlesbury 官方列表沒有 Software Engineer，唯一接近的 Application Support Analyst 是 SQL Server／SSIS 應用整合支援（管理式 IT），graduate 是 Air Systems Engineer＝低。 | 高 | BAE Systems Plc 在冊，但職缺未點名法人、BAE Systems (Operations) Limited 不在冊（規則 C 不計）；官方 Security Statement 寫國籍、曾有國籍與出生地可能限制資格，所有人至少 BPSS，許多職位需 5–10 年連續英國居住的國安審查（規則 L／T）；沒有對口職缺＝高。 | 條件式：BAE Systems Plc（London）在冊（Skilled Worker；GBM Senior or Specialist；GBM Graduate Trainee；Government Authorised Exchange；A）；官方 Security Statement 限制 | Application Support Analyst（00139634，截止 2026-11-26；非對口）；Graduate Air Systems Engineer（Warton／Samlesbury，非 software） | Application Support Analyst 截止 2026-11-26（距今 5 天），非對口且受 Security Statement 限制；快照距開學 284 天、距畢業 650 天 |
| 30 | GoFibre（#12） | UK／Edinburgh（Exchange Tower） | 低 | full-fibre altnet（規則 N：電信依職缺判斷）；官方現列 4 筆全是外勤銷售、FTTP 安裝、土木，沒有 IT／network engineer 證據＝低（資料不足）。 | 高 | GoFibre Holdings LTD 在冊，但職缺只寫「GoFibre」，未明示 Holdings／Networks／Broadband，依規則 C 不計；官方 Greenhouse 已檢查，沒有對口職缺＝高（比照 Run 10 UHI）。 | 條件式：GoFibre Holdings LTD（Edinburgh）在冊（Skilled Worker；A）；職缺法人未明示 | 無（官方 Greenhouse 4 筆：Field Sales Executive、FTTP Install Engineer、Lead Civils Operative 等，皆非對口） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 31 | Wheatley Group（Wheatley House）（#2） | UK／Glasgow | 低 | 住房協會（規則 N）；verified11 沒有 IT／數位職缺證據，官網現列職缺都是非 IT＝低（資料不足）。 | 高 | Wheatley Housing Group／Wheatley Homes Glasgow 都不在登記冊（Wheatley Software Solutions、Great Wheatley 是無關公司）；官網職缺已檢查、沒有對口職缺＝高。 | 本名不在冊；職缺贊助字樣未驗證 | 無（官網現列 Heat Networks Technical Officer、Development Co-ordinator、Building Pathology Surveyor 等，皆非 IT） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |
| 32 | Westway IT (WESTWAY IT LTD)（#24） | UK／Gloucester（服務據點；註冊於 Blakeney） | 低 | 小型 IT support／MSP（管理式 IT）＝低。 | 高 | 本名不在登記冊；官網沒有 careers 路徑（/careers 404）、沒有具名職缺＝高。 | 本名不在冊 | 無（/careers 404） | 無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天 |

分布（不重複雇主）：適配 高 4／中 18／低 10；難度 低 0／中 23／高 9。組合：高／低 0、高／中 4、高／高 0、中／低 0、中／中 13、中／高 5、低／中 6、低／高 4。

---

## 四之二、時程與截止日（與難度分開，規則 3-3／F）

基準：分析日 2026-11-21（核實檢查日 2026-11-16）；MSc 開學 2027-09-01（距今 284 天）；畢業 2028-09-01（距今 650 天）。天數以 Python 計算（`gen/build.py`）。

**仍開放、有官方截止日的對口職缺**：無。以下兩則仍開放、有官方截止日，但**不計為對口**，只作參考：

| 職缺 | 截止日 | 距今 | 距開學 | 距畢業 |
|---|---|---:|---:|---:|
| Rolls-Royce Infrastructure Engineer（JR6161235；SC＋5 年居英，規則 T，不計） | 2026-11-24 | 3 | 281 | 647 |
| BAE Systems Application Support Analyst（00139634；非對口、條件式法人、Security Statement，不計） | 2026-11-26 | 5 | 279 | 645 |

**仍開放、只有刊登日（沒有截止日）的對口或接近職缺**，只作新鮮度參考（「距今」為負＝已刊登天數）：

| 職缺 | 日期（類型） | 距今 | 距開學 | 距畢業 |
|---|---|---:|---:|---:|
| Levi9 DevOps Engineer（Belgrade，不是 Novi Sad） | 2026-11-09（pubDate） | -12 | 296 | 662 |
| DataVita Cyber Security Operations Manager | 2026-11-04（Employment Hero created） | -17 | 301 | 667 |
| Thales Senior Software Engineer R0342601（SC，規則 T，不計） | 2026-10-15（Workday startDate） | -37 | 321 | 687 |
| Thales Senior Software Engineer R0342322（SC，規則 T，不計） | 2026-10-12（Workday startDate） | -40 | 324 | 690 |
| Thales 2027 Development Operations Engineering Graduate R0337885（SC，規則 T，不計） | 2026-10-05（Workday startDate） | -47 | 331 | 697 |
| Thales 2027 Software Engineering Graduate R0337840（SC，規則 T，不計） | 2026-10-05（Workday startDate） | -47 | 331 | 697 |
| DataVita Platform Engineer | 2026-09-02（Employment Hero created） | -80 | 364 | 730 |
| Hornbill Linux Admin & Support Engineer（Tirana Cloud Team，日期未示） | 日期未驗證 | — | — | — |
| Vega IT Experienced Data Engineer（Novi Sad／Niš 等，日期未示） | 日期未驗證 | — | — | — |
| Siemens Energy Senior HMI PC and Cyber Security Engineer（292113，日期未示，非目標職類） | 日期未驗證 | — | — | — |
| Siemens Energy Senior Aeromechanics ML Engineer（303169，日期未示，非對口） | 日期未驗證 | — | — | — |
| Huawei Simulation and Optimisation Engineer（Ipswich，日期未驗證，software-adjacent） | 日期未驗證 | — | — | — |

**已過期／已填補／已 404，不可申請（規則 3-4／P），只作為職能證據**：

| 職缺 | 截止／頁面日期 | 距開學 | 距畢業 |
|---|---|---:|---:|
| Rolls-Royce Software Engineer-Advanced planning and scheduling（JR6157983） | 2026-11-19 | 286 | 652 |
| Rolls-Royce VP Digital and IT（不計） | 2026-11-16 | 289 | 655 |
| Converged Network Engineer／1st Line Network Support Engineer | 2025-12-14 | 626 | 992 |
| Siemens Energy R&D Software Engineer（285175，今日 404） | 日期未驗證 | — | — |
| Deutsche Telekom IT Solutions DevOps Engineer（SmartRecruiters REF5793N，官方頁顯示 expired） | 日期未驗證 | — | — |

**時程結論**：
- 所有現行職缺在 MSc 期間或畢業時都不會仍開放；Dennis 入學前在台灣，現在實際上沒有可行動的職缺。
- 對 Dennis 有用的是「這家公司會招此類職能」與持牌狀態：DataVita（Platform／Cyber Security Ops，但未持牌）、Siemens Energy（OT 資安，在冊）、Rolls-Royce（Azure／Terraform／K8s 基礎設施，但屬 SC 職）。
- Thales 2027 graduate 屬 2027 年入職，與 Dennis 2028-09 畢業不合，且需 SC（規則 3-3 與 T）。
- 實際申請窗口：MSc 期間的 graduate 招募季（約 2027-09 至 2028-06，各公司日期未驗證），或畢業後走 Graduate visa。
- 歐洲職缺若在 MSc 前申請，與 2027-09 入學衝突（規則 F）。

---

## 五、排除／存疑（規則 V；僅供參考評級，不進主表與 Top 10）

本輪**沒有**排除列。verified11 32 列全部「已確認營運」，分析者也沒有找到停業或解散證據。以下三列看起來像存疑，但都不符合規則 V：

| # | 組織 | 看起來的疑點 | 本報告判定 |
|---:|---|---|---|
| 23 | Olivehorse Consulting Services Ltd | Maps 仍用舊名、沒有獨立網站 | 2022-02-16 **更名**為 PwC Business Consulting Services Limited（CH 08966493 Active）。更名不是停業，照常評級（中／中）；Coventry 據點是否仍營業：未驗證。 |
| 14 | Kyloe Partners | 舊 KYLOE PARTNERS LIMITED（SC544657）2019-09-17 解散 | 現行雇主是 ANGUS KYLOE PARTNERS LIMITED（CH 09644379 Active，官網條款明示）；照常評級（中／高）。 |
| 31 | DualSOFT | 頁尾連到「Draft Agreement on Corporate Restructuring」 | 法人變動未驗證；官網、careers 仍在線，verifier 判已確認營運；照常評級（中／中），列入第八節。 |

- 判定依 CH／官網，不依 Maps 名稱。
- **Barclays Northampton** 不是排除列：它在 scout 階段就因品牌已收錄（Barclays Clyde Place, Glasgow）被刪，沒有進入 verified11，本報告不為它建立評級列（第八節）。

---

## 六、逐家說明（依排名）


### 1. DataVita (HFD DATAVITA LIMITED)（#10）｜High Blantyre／Chapelhall（Lanarkshire）／Glasgow 註冊辦事處

- **公司簡介**：蘇格蘭的雲端／資料中心公司，CH SC467509 Active（曾用名 DataVita Limited）；註冊地址 2026-02-04 由 Chapelhall Fortis DC 改為 Glasgow 177 Bothwell Street，職缺地點多為 High Blantyre G72（三地並存，依 verifier 並陳）。JD 自述主導 Lanarkshire AI Growth Zone。
- **適配度：高**：雲端與基礎設施公司（Tier III 資料中心、managed cloud、HPC／AI）；規則 N 對資料中心依職缺判斷：官方開放 Platform Engineer（Python／Ansible／Terraform、Prometheus／Loki／Grafana，K8s／IaC／GitOps 為加分）與 Cyber Security Operations Manager（incident response、logging／monitoring，SIEM／EDR 為加分），與 Dennis 的 cloud & security platform 背景直接對口。
- **申請難度：中**：本名不在登記冊（HFD DATAVITA LIMITED／DataVita 均查無）；官方職缺確認開放、雇主欄即 HFD DATAVITA LIMITED＝有招聘管道但無贊助＝中。
- **簽證／搬遷**：本名不在冊；分析者 2026-11-21 讀兩則 JD 全文，未見贊助、SC 或 right-to-work 字樣（正反皆無）；未持牌，目前無法發 CoS；Taiwan passport 資格：未驗證
- **對口開放職缺**：Platform Engineer（Mid-Level，5 天 on-site，Hamilton International Technology Park；Employment Hero 刊登 2026-09-02）；Cyber Security Operations Manager（Senior，向 CTO 匯報；2026-11-04）；同頁另有 Principal／Solution／Enterprise Architect、3rd Line Support Analyst 等（未逐一列入）
- **語言**：英語；JD 未見非英語或 clearance 要求（分析者讀 JD 全文）
- **時程**：Platform Engineer 已刊登 80 天、Cyber Security Operations Manager 17 天（皆無截止日）；Dennis 入學前在台灣，現職不可行動；快照距開學 284 天、距畢業 650 天
- **備註**：**不能進英國 Top 10 或候補**：英國 Top 10 方法限「英國且有贊助者」，DataVita 未持牌。若日後登記冊出現 HFD DATAVITA LIMITED，可依規則 W 重評（敏感度，第七節）。
- **備註**：Platform Engineer 的必備技能偏 VMware／Hyper-V／Fortinet／Cisco／NetApp，Dennis 個人檔未列這些；但 JD 明寫「If you tick a lot of the desirable list but only some of the essential, apply anyway」，K8s／IaC／GitOps 屬加分項。
- **備註**：JD 自述「fastest growing technology company in Scotland」「£2 billion」投資計畫屬公司自述，本報告不作為事實或規模依據。
- **來源**：verified11.md #10；employmenthero.com/uk/jobs/position/hfd-datavita-limited-platform-engineer-nol1q/、…/hfd-datavita-limited-cyber-security-operations-manager-uq1al/（分析者 2026-11-21 讀取）；jobs.datavita.co.uk；CH SC467509；本名登記冊查無（sponsors_latest.csv，2026-11-12 版）

### 2. Levi9 (Levi9 Serbia)（#27）｜Novi Sad（職缺在 Belgrade）

- **公司簡介**：Novi Sad 的 nearshore 軟體公司（官方 contact：Trifkovićev Trg 6）；法人 Levi9 Serbia，APR 編號未驗證。
- **適配度：高**：nearshore 軟體工程公司（規則 3-6）；官方 Teamtailor 可見 DevOps Engineer（JD 提及 DevOps／cloud），與 Dennis 目標職類對口。
- **申請難度：中**：公司層級有官方確認開放的 DevOps Engineer（pubDate 2026-11-09），但地點是 **Belgrade**、不是 Novi Sad；Novi Sad 具名對口職缺未找到；非 EU、搬遷／工作許可字樣未找到（Run 2 量表＝中；以公司層級判斷屬判斷，第十節）。
- **簽證／搬遷**：塞爾維亞非 EU，不適用 EU Blue Card（≠不能合法工作）；官方路徑：MUP 的 temporary residence／single permit to reside and work，經 welcometoserbia.gov.rs 申請（verifier 引官方來源）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證
- **對口開放職缺**：DevOps Engineer（Belgrade，Hybrid，pubDate 2026-11-09）；Software Engineer（Belgrade，同日）；Novi Sad 具名對口職缺：未找到
- **語言**：官方 hiring process 原文「…determine your English proficiency」；DevOps JD 列 English 為要求之一；未見塞爾維亞語要求（實際工作語言未驗證）
- **時程**：DevOps（Belgrade）已刊登 12 天、無截止日；若在 MSc 前申請與 2027-09 入學衝突（規則 F）
- **備註**：verifier 提醒照辦：Belgrade 職缺**不算** Novi Sad 職缺；本報告只把它當作同一公司的招聘入口證據（規則 D），不寫成 Novi Sad 開缺。
- **備註**：benefits／hiring-process 頁的「moving」出現在額外休假語境，不是搬遷支援（verifier），不計規則 Q。
- **來源**：verified11.md #27；levi9.rs/careers/hiring-process/；teamtailor.rs.levi9.com/jobs/8692439-devops-engineer；mup.gov.rs temporary residence

### 3. Hornbill (Hornbill SHPK)（#28）｜Tirana

- **公司簡介**：Hornbill 是英國 ESM（enterprise service management）SaaS 廠商，Tirana 為其 Cloud Team 據點；阿爾巴尼亞登記編號未驗證，官方職缺頁未寫街道地址。
- **適配度：高**：英國 ESM SaaS 廠商的 Tirana Cloud Team（規則 3-6）；Linux Admin & Support Engineer 負責多區資料中心 SaaS 的 cloud production environment，與 Dennis 的平台維運背景對口。
- **申請難度：中**：官方確認仍刊登的 Cloud Team 職缺（日期未示），英文撰寫；但層級標「Support」、可能低於 Dennis 年資（規則 Q 排序備註），語言與搬遷／工作許可字樣未找到（Run 2 量表＝中）。
- **簽證／搬遷**：阿爾巴尼亞非 EU，不適用 EU Blue Card；官方路徑：leje unike（Unique Permit，居留＋工作合一）經 e-Albania 申請，法律基礎 Law 79/2021（AIDA 說明）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證
- **對口開放職缺**：Linux Admin & Support Engineer（Tirana，Department: Cloud Team；刊登／截止日頁面未示）
- **語言**：職缺以英文撰寫，未見語言要求；實際工作語言未驗證
- **時程**：職缺日期未驗證（規則 P 無法計天數）；若在 MSc 前申請與 2027-09 入學衝突（規則 F）
- **備註**：Hornbill 的英國法人是否在英國登記冊：以「hornbill」查詢 2026-11-12 版查無；本列為阿爾巴尼亞職缺，英國登記冊本來不適用。
- **來源**：verified11.md #28；hornbill.com/join-us/linux-admin-support-engineer；hornbill.com/join-us；aida.gov.al（leje unike）

### 4. Vega IT（#26）｜Novi Sad／Niš

- **公司簡介**：Novi Sad 的軟體公司（品牌 Vega IT，另有 Niš 辦公室，併入本列）；APR 編號未驗證。
- **適配度：高**：客製軟體與 AI／data 工程公司（規則 3-6）；官方板有 DevOps Engineer 與 Data Engineer 等工程職稱證據。
- **申請難度：中**：Novi Sad／Niš 有官方仍列的 Experienced Data Engineer（data engineering，非 DevOps／SRE，規則 D 視為接近入口）；DevOps Engineer 地點是 Amsterdam，不計；語言、搬遷／工作許可未找到（Run 2 量表＝中）。
- **簽證／搬遷**：塞爾維亞非 EU，不適用 EU Blue Card（≠不能合法工作）；官方路徑：MUP 的 temporary residence／single permit to reside and work，經 welcometoserbia.gov.rs 申請（verifier 引官方來源）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證
- **對口開放職缺**：Experienced Data Engineer（Podgorica、Novi Sad、Niš、Zrenjanin、Belgrade；日期未示）；DevOps Engineer 僅 Amsterdam（不計）；分頁 2–4 未檢查
- **語言**：職缺以英文撰寫，未見語言要求；實際工作語言未驗證
- **時程**：職缺日期未驗證；若在 MSc 前申請與 2027-09 入學衝突（規則 F）
- **備註**：verifier 提醒照辦：DevOps Engineer 官方地點是 Amsterdam，不算 Novi Sad／Niš 職缺。
- **備註**：Data Engineer 是否算對口屬判斷（Run 10 Ripjar 的 Data Engineer 列為對口證據之一，但本列只有 data 職）；所以只判 中。
- **來源**：verified11.md #26；vegaitglobal.com/career、/career/experienced-data-engineer、/career/devops-engineer；mup.gov.rs；eforeigner.welcometoserbia.gov.rs/help

### 5. Siemens Energy (Siemens Energy Limited；Lincoln 據點)（#19）｜Lincoln

- **公司簡介**：Lincoln 的工業渦輪機工廠（Pelham St）。據點法人 SIEMENS ENERGY INDUSTRIAL TURBOMACHINERY LIMITED（CH 04729734 Active）；職缺頁 Company 欄為 SIEMENS ENERGY LIMITED（CH 00631825 Active），兩者同一 Newcastle 註冊處。
- **適配度：中**：能源設備 OEM（工業渦輪機），規則 N 適配上限 中；官方 Lincoln 職缺有 Senior HMI PC and Cyber Security Engineer（OT／工控資安：Windows hardening、IEC-62443、NIST、NIS）與 Senior Aeromechanics ML Engineer（Python／PyTorch），與 Dennis 的資安／Python 部分重疊，但不是 cloud platform。
- **申請難度：中**：登記冊直接命中職缺頁所寫的 Company：Siemens Energy Limited（規則 C 滿足）；但兩則開放職缺一個是 OT／工控資安（Manager／Team Leader 級、需 AVEVA／WinCC／PCS7），一個是 aeromechanics ML，都不是 Dennis 目標職類的確認對口職缺，且日期未示＝有贊助缺對口職缺＝中。
- **簽證／搬遷**：登記冊命中 Siemens Energy Limited, Newcastle Upon Tyne（Skilled Worker；GBM Senior or Specialist；A）；Lincoln 據點法人 Siemens Energy Industrial Turbomachinery Limited 不在冊；JD 未見贊助、SC 字樣；Taiwan passport 資格：未驗證
- **對口開放職缺**：Senior HMI PC and Cyber Security Engineer（292113，Lincoln，日期未示）；Senior Aeromechanics Machine Learning Engineer（303169，Lincoln，日期未示）；R&D Software Engineer 285175 今日 404（不計）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：**新雇主，不是重複**：covered-clean 只有 Siemens Rail Automation／Siemens Mobility Limited（鐵路信號），與 Siemens Energy 是不同上市公司體系、不同法人；本列以 Siemens Energy Limited 評，不沿用 Mobility 的任何資料。登記冊上的 Siemens Mobility Limited（London）與本列無關，不計。
- **備註**：若日後 Lincoln 出現 cloud／DevOps／IT security 職，因法人一致，可升為 中／低（有條件；規則 N 使適配最高為中）。
- **來源**：verified11.md #19；jobs.siemens-energy.com …/292113、CareersMarketplace folderId=303169；CH 04729734、00631825；sponsors_latest.csv（2026-11-12 版，本報告重查命中）

### 6. Rolls-Royce (Rolls-Royce plc；Moor Lane)（#16）｜Derby

- **公司簡介**：Derby 的航太引擎廠（Moor Lane 為 Derby 多個據點之一），CH 01003142 Active；Workday hiringOrganization 欄空白，職缺在官方 professional board。
- **適配度：中**：航太引擎製造（規則 N）；有 Azure／Terraform／Azure DevOps／Kubernetes 的 Infrastructure Engineer，技能直接對口，但該職需 SC（規則 T，不算對口職缺）；另一則 APS Software Engineer 是 Kinaxis Maestro 規劃系統，不是 cloud。
- **申請難度：中**：登記冊直接命中 Rolls-Royce plc；Infrastructure Engineer 依規則 T 不計；APS Software Engineer 無 SC 字樣但非對口，且已於 2026-11-19 截止＝有贊助、無可計的對口現行職缺＝中。不判高：SC 只見於該 JD，verifier 明說不可推及所有 Derby 軟體職。
- **簽證／搬遷**：登記冊命中 Rolls-Royce plc, Derby（6 列：Skilled Worker ×2、GBM Senior or Specialist ×2、GBM Graduate Trainee、GBM Service Supplier；A）；Infrastructure Engineer 官方要求 SC＋5 年以上英國居住；Taiwan passport 資格：未驗證
- **對口開放職缺**：Infrastructure Engineer（JR6161235，2026-11-10 刊登，截止 2026-11-24；SC＋5 年居英，規則 T 不計）；Software Engineer-Advanced planning and scheduling（JR6157983，截止 2026-11-19，已過）；VP Digital and IT（截止 2026-11-16 午夜，不計）
- **語言**：英語；未見非英語要求
- **時程**：Infrastructure Engineer 截止 2026-11-24（距今 3 天）但屬 SC 職、不計；APS 已截止；快照距開學 284 天、距畢業 650 天
- **備註**：規則 T：Infrastructure Engineer 原文要求 Security Check clearance 與 5 年以上英國居住；以 Dennis 2027-09 入境的時程不可能滿足（Run 6 推論）。
- **備註**：verifier 寫 4 筆登記列，本報告重查為 6 列（兩組完全重複），見第九節。
- **來源**：verified11.md #16；rollsroyce.wd3.myworkdayjobs.com …/Infrastructure-Engineer_JR6161235-1、…/JR6157983；careers.rolls-royce.com/en/professionals/digital-and-it；sponsors_latest.csv（2026-11-12 版，本報告重查命中）

### 7. Capgemini Inverness (Capgemini UK PLC)（#8）｜Inverness（另有 Nairn）

- **公司簡介**：Capgemini UK 的 Inverness 交付中心（Cowan House IV2 7GE，2026 官方 locations 仍列）與 Nairn 據點；CH 00943935 Active。
- **適配度：中**：IT 服務／顧問（HIE 案例稱 cloud 基礎設施管理、資安、敏捷開發）；規則 3-6：顧問公司要有工程類職稱證據才判高，Inverness 官方職缺清單未檢查＝中。
- **申請難度：中**：登記冊直接命中 Capgemini UK PLC（法人與官方 UK locations 頁一致）；官方 Job search 為 JS，Inverness 職缺未檢查（規則 3-1 不寫沒有職缺）＝中。
- **簽證／搬遷**：登記冊命中 Capgemini UK PLC, London（Skilled Worker；GBM Senior or Specialist；GBM Graduate Trainee；A）；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（官方 Job search 為 JS）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：HIE 案例稱 Highland 約 850 FTE、450+ 已有 security clearance、90% cyber security certified，但**無統計日期**，也不是特定職缺條款；本報告不引人數，也不據此套規則 T。但公部門客戶比例高，日後 Inverness JD 若寫 SC，依規則 T 改判（第八節）。
- **來源**：verified11.md #8；capgemini.com/gb-en/about-us/locations/；hie.co.uk Capgemini 案例；CH 00943935；sponsors_latest.csv（2026-11-12 版，本報告重查命中）

### 8. Huawei R&D UK (Huawei Technologies Research & Development (UK) Limited)（#25）｜Martlesham（Adastral Park，Ipswich Research Center）

- **公司簡介**：Huawei 英國 R&D 公司的 Ipswich Research Center（Adastral Park, IP5 3RE）；CH 07371283 Active（前名 NEUL LIMITED）。
- **適配度：中**：電信 R&D；Ipswich 現行職缺多為製程／光電子（Process、Photolithography、Epitaxy、PIC Design），最接近軟體的是 Simulation and Optimisation Engineer（模擬／ML），沒有 cloud／platform／security 職（規則 N：只有硬體類職者判中）。
- **申請難度：中**：登記冊直接命中官方 Recruitment Privacy Notice 點名的 R&D 法人；但沒有對口職缺＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 Huawei Technologies Research & Development (UK) Limited, Cambridge（Skilled Worker；GBM Senior or Specialist；A）；Reading 的 Huawei Technologies (UK) Co., Ltd 不計；Taiwan passport 資格：未驗證
- **對口開放職缺**：Simulation and Optimisation Engineer（software-adjacent，非 cloud／platform；日期未驗證）；其餘為製程／光電子
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：verifier 提醒照辦：招聘法人是 07371283，不是 Reading 的 04295981。
- **備註**：scout 標「Huawei UK 安全／所有權敏感性」：本報告沒有官方原文可引，不據此改評級，也不推論（第八節）。
- **來源**：verified11.md #25；huaweiuk.teamtailor.com/privacy-policy、/jobs.rss、/jobs/7452938-simulation-and-optimisation-engineer；CH 07371283、04295981；sponsors_latest.csv（2026-11-12 版，本報告重查命中）

### 9. Double Eleven (Double Eleven Limited)（#20）｜Middlesbrough

- **公司簡介**：Middlesbrough Boho X 的遊戲開發商，CH 07111656 Active（註冊地址即 Maps 位置）。
- **適配度：中**：遊戲開發／移植工作室（軟體業，比照 Run 10 Playground Games）；官方開放職缺是 graphics programmer 與設施，沒有 cloud／backend／platform 職。
- **申請難度：中**：登記冊直接命中 Double Eleven Limited；嚴格對口職缺未找到＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 Double Eleven Limited, Middlesbrough（Skilled Worker；A）；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：Senior Graphics Programmer、Principal Low-Level Graphics Programmer、Expression of Interest (UK)、Facilities and Building Manager（皆非對口）；Workable 深頁幾乎無靜態正文
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：Early careers／placements 以電郵申請、沒有具日期的職缺 URL，不列為開放職缺。
- **來源**：verified11.md #20；double11.com/vacancies/、/join-us/early-careers/；CH 07111656；sponsors_latest.csv（2026-11-12 版，本報告重查命中）

### 10. STAR-Dundee (STAR-Dundee Limited)（#15）｜Dundee

- **公司簡介**：Dundee 的太空電子公司，CH SC230143 Active（Star House, 166 Nethergate）；Flintbox 目錄列為 UoD spin-out（目錄頁 JS，未檢查）。
- **適配度：中**：University of Dundee spin-out（2002），SpaceWire 太空電子；嵌入式／硬體為主，規則 N：只有硬體／嵌入式職者判中。
- **申請難度：中**：登記冊直接命中 STAR-Dundee Ltd；Vacancies 頁目前沒有具體職缺（只歡迎聯繫）＝有贊助缺職缺＝中。
- **簽證／搬遷**：登記冊命中 STAR-Dundee Ltd, Dundee（Skilled Worker；A）；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：目前無具體開放職缺（官方 Vacancies 頁，已檢查）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：verifier 提醒照辦：2026-08-04 銷售條款第 11 條的 export control 是產品／客戶合規，不是聘僱 clearance，不套規則 T。
- **來源**：verified11.md #15；star-dundee.com/about-us/vacancies/、/company-information/、/terms-and-conditions/；CH SC230143；sponsors_latest.csv（2026-11-12 版，本報告重查命中）

### 11. BGL Group／Compare the Market（#18）｜Peterborough

- **公司簡介**：Peterborough 的保險比價集團；招聘資料控管者 BGL GROUP LIMITED（02593690），可能的雇主 COMPARE THE MARKET LIMITED（10636682，同址）。
- **適配度：中**：比價平台／保險經紀；線上平台依規則 N 視為軟體，但職缺清單未檢查、沒有工程職稱證據（規則 3-6）＝中。
- **申請難度：中**：BGL Group Ltd 在冊，但實際雇主可能是 Compare the Market Limited（不在冊），依規則 C 不計；Oracle 職缺清單未檢查（規則 3-1）＝中（比照 Run 10 Aviva）。
- **簽證／搬遷**：條件式：BGL Group Ltd, Peterborough（Skilled Worker；GBM Senior or Specialist；A）在冊；Compare the Market Limited 不在冊；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（Oracle／Taleo 清單為 JS；comparethemarket.com root 403）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：若日後職缺原文點名 BGL Group Limited 為雇主，且確認有對口職缺，可升為 中／低 或 高／低（依技術棧）。
- **來源**：verified11.md #18；comparethemarketcareers.com 招聘隱私權政策、/jobs/；CH 02593690、10636682；sponsors_latest.csv（2026-11-12 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 12. bet365（#22）｜Stoke-on-Trent

- **公司簡介**：Stoke-on-Trent 的線上博彩公司；集團控股 BET365 GROUP LIMITED（04241161），多家 Hillside 公司以 Bet365 House, Media Way 為註冊地址。
- **適配度：中**：線上博彩平台（規則 N：線上平台視為軟體）；但官方職缺深頁未檢查，本輪沒有工程職稱證據＝中。
- **申請難度：中**：bet365 不是登記名；同址 Hillside (Technology)／(Media Services)／(Shared Services 2018) Limited 在冊，但官方招聘隱私權只寫「the bet365 group of companies」與「specific bet365 entity」，未點名，依規則 A/C 不計；職缺深頁 JS 未檢查＝中。
- **簽證／搬遷**：條件式：三家同址 Hillside 公司在冊（Skilled Worker；A），未確認為招聘法人；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（bet365careers.com 職缺深頁為 JS）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：iGaming 屬 brief 指定產業；若官方 JD 點名 Hillside (Technology) Limited 且有對口職缺，可升為 高／低（有條件），會進英國 Top 10 討論（第七節敏感度）。
- **來源**：verified11.md #22；bet365careers.com、/privacy-policy；CH 04241161、08273456；sponsors_latest.csv（2026-11-12 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 13. iomart (Iomart Group plc)（#9）｜Glasgow（Atlantic Quay）

- **公司簡介**：Glasgow 的雲端與託管服務公司，Iomart Group PLC SC204560 Active（accounts to 2026-03-31）；DC1（Middlesex St）是另一個資料中心 pin，不是第二家公司。
- **適配度：中**：雲端／managed hosting／資料中心公司；業務與 cloud／平台工程相關，但 iCIMS 職缺清單未檢查、沒有工程職稱證據（規則 3-6）＝中。
- **申請難度：中**：本名不在登記冊（Iomart Group PLC、Iomart Managed Services Limited 都查無）；iCIMS 405＝未檢查，沿用「無贊助但職缺未檢查判中」＝中。
- **簽證／搬遷**：本名不在冊；招聘子公司未確認；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（官方 iCIMS 清單 HTTP 405）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：iCIMS 405 不等於沒有職缺（規則 3-1）。
- **來源**：verified11.md #9；iomart.com/about-us/careers；CH SC204560、SC275629；本名登記冊查無（sponsors_latest.csv，2026-11-12 版）

### 14. Olivehorse（現名 PwC Business Consulting Services Limited）（#23）｜Coventry（University Technology Park）

- **公司簡介**：PWC BUSINESS CONSULTING SERVICES LIMITED（CH 08966493 Active），2014-03-28 至 2022-02-16 名為 OLIVEHORSE CONSULTING SERVICES LTD；現註冊地址 1 Embankment Place, London。
- **適配度：中**：IT 顧問（Maps 類別 Consultant／Software company）；規則 3-6：顧問且沒有工程職稱證據＝中。
- **申請難度：中**：本名（08966493）不在登記冊；PricewaterhouseCoopers LLP 在冊但不是同一法人（規則 A/C 不計）；pwc.co.uk careers 403＝未檢查，沿用「無贊助但職缺未檢查判中」＝中。
- **簽證／搬遷**：本名不在冊；PwC LLP 在冊屬集團，不計；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（pwc.co.uk 403；沒有獨立 Olivehorse 網站）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：**更名不是停業**：不套規則 V。Coventry 園區是否仍為此法人營業據點：未驗證（Maps 仍用舊名）。
- **備註**：本列業務的具體內容（例如是否以 ERP 導入為主）verified11 沒有資料，本報告不推論；若證實以 ERP 導入為主，依適配量表會降為低。
- **來源**：verified11.md #23；CH 08966493；本名登記冊查無（sponsors_latest.csv，2026-11-12 版）

### 15. Deutsche Telekom IT Solutions（ITTC Hungary Kft.／TSI Hungary Kft.）（#32）｜Debrecen

- **公司簡介**：Deutsche Telekom IT Solutions 的 Debrecen 據點（Magyar Telekom HQ，Debrecen Tudáspark）；官網頁尾並列 Deutsche Telekom ITTC Hungary Kft. 與 Deutsche Telekom TSI Hungary Kft.，匈牙利登記編號未驗證。
- **適配度：中**：大型 IT 服務中心；曾有 DevOps 職（已過期），但現行 Debrecen cloud／DevOps 職缺未檢查，招聘法人在兩家 Kft. 之間未定＝中。
- **申請難度：中**：官方 open-positions 有 231 筆、提供 Debrecen 與 English 語言篩選（入口存在），但清單為 JS、具名職缺未檢查（規則 3-1 不加重；比照 Run 10 Workable）；搬遷／簽證字樣未找到＝中（Run 2 量表）。
- **簽證／搬遷**：匈牙利屬 EU：EU Blue Card 只標「相關」（規則 J）；新聘搬遷／簽證字樣未找到；過期職缺寫遠端只限匈牙利境內；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（231 筆清單為 JS）；SmartRecruiters DevOps Engineer REF5793N 已過期（不計）
- **語言**：官方篩選有 English／German；過期職缺寫「Good English skills written and verbal」；匈牙利語是否必要未在現行 JD 驗證
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：verifier 提醒照辦：過期 DevOps 不列為開放；其「remote only within Hungary」用字只作政策引文。
- **備註**：英國登記冊上的 Deutsche Telekom (UK) Limited（Welwyn Garden City）與本列無關（規則 A），只在第一節附表揭露。
- **來源**：verified11.md #32；deutschetelekomitsolutions.hu/en/open-positions/、/en/benefits/

### 16. Amdaris (Amdaris SRL)（#29）｜Chișinău

- **公司簡介**：Amdaris 的 Chișinău 辦公室（Forum Office, Mt. Varlaam 63/23），總部 Bristol；摩爾多瓦登記編號未驗證。
- **適配度：中**：英國總部（Bristol）軟體公司的 Chișinău 交付中心；軟體業但沒有工程職稱或技術棧證據＝中。
- **申請難度：中**：官方 jobs 板為 JS，個別職缺未檢查（規則 3-1 不加重）；非 EU、語言與搬遷／工作許可字樣未找到＝中（Run 2 量表，比照 Run 10 Workable）。
- **簽證／搬遷**：摩爾多瓦非 EU，不適用 EU Blue Card；官方路徑：IGM provisional stay for work purposes／immigrant worker；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（amdaris.com/jobs 為 JS）
- **語言**：語言未驗證
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：以「amdaris」查 2026-11-12 版英國登記冊查無；本列為摩爾多瓦職位，英國登記冊本來不適用。
- **來源**：verified11.md #29；amdaris.com/contact/、/jobs/；igm.gov.md provisional stay for work purposes

### 17. DualSOFT (DUALSOFT D.O.O.)（#31）｜Niš

- **公司簡介**：Niš 的軟體公司，頁尾寫 DUALSOFT D.O.O.（APR 編號未驗證）。
- **適配度：中**：軟體開發公司；沒有工程職稱或技術棧證據＝中。
- **申請難度：中**：TalentLyft 職缺板未檢查（規則 3-1 不加重）；非 EU、語言與搬遷字樣未找到＝中（Run 2 量表）。
- **簽證／搬遷**：塞爾維亞非 EU，不適用 EU Blue Card（≠不能合法工作）；官方路徑：MUP 的 temporary residence／single permit to reside and work，經 welcometoserbia.gov.rs 申請（verifier 引官方來源）；公司搬遷／簽證字樣未找到；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（dualsoft.talentlyft.com）
- **語言**：語言未驗證
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：頁尾連到「Draft Agreement on Corporate Restructuring」：法人變動未驗證。verifier 確認營運中，本報告不套規則 V，但列入第八節。
- **來源**：verified11.md #31；dualsoft.net/en/about-us/、/en/career/；dualsoft.talentlyft.com

### 18. Thales UK (Thales UK Limited；Linthouse)（#1）｜Glasgow（Linthouse）

- **公司簡介**：Thales UK 的 Glasgow（1 Linthouse Rd）optronics 據點；CH 00868273 Active（SIC 含 84220 Defence activities）；官方 OME 頁述 Glasgow site（人數為官網敘述，本報告不引）。
- **適配度：中**：國防電子（optronics）；有 Senior Software Engineer（C++／embedded）與 2027 Development Operations Engineering Graduate，屬軟體但偏嵌入式，DevOps 只有 graduate 級＝中。
- **申請難度：高**：登記冊直接命中且 Workday hiringOrganization＝Thales UK Limited（規則 C 滿足）；但**所有**已讀對口 JD 都要求 SC，通常需近 5 年在英居住（或 5 年中 3 年＋overseas checks），依規則 T 全部不算對口現行職缺＝高（比照 Run 10 GCHQ）。
- **簽證／搬遷**：登記冊命中 Thales UK Limited, Reading（Skilled Worker；GBM Senior or Specialist；GBM Graduate Trainee；A）；JD 要求 BPSS＋SC 與居英年限（規則 T）；Taiwan passport 資格：未驗證
- **對口開放職缺**：Senior Software Engineer R0342601（2026-10-15）與 R0342322（2026-10-12）；2027 Development Operations Engineering Graduate R0337885 與 2027 Software Engineering Graduate R0337840（2026-10-05）——全部要求 SC，規則 T 不計
- **語言**：英語；未見非英語要求
- **時程**：現行 JD 皆屬 SC 職、不計；2027 graduate 開始日與 Dennis 2028-09 畢業不合（規則 3-3）
- **備註**：Graduate JD 中的「sponsorship」是 Engineering Leadership 指導，**不是簽證擔保**（verifier）。
- **備註**：Taiwan passport 能否取得 SC：未驗證；但 5 年居英要求在 Dennis 的 Graduate visa 期間不可能滿足（Run 6 規則 T 推論）。
- **來源**：verified11.md #1；thales.wd3.myworkdayjobs.com R0342601、R0342322、R0337885、R0337840；careers.thalesgroup.com/global/en/ome-opportunities-uk；CH 00868273；sponsors_latest.csv（2026-11-12 版，本報告重查命中）

### 19. Converged Communication Solutions（#13）｜Aberdeen（Bucksburn）

- **公司簡介**：Aberdeen 的 MSP，CH SC293456 Active（SIC 61900）；INCA incubator 名錄仍列；官網稱 IFB 為 sister company（IFB 頁寫目前沒有開放職缺）。
- **適配度：中**：東北蘇格蘭 MSP／ISP（IT、資安、連線、DC）；有 Network Engineer 職能證據，但偏網路支援＝中。
- **申請難度：高**：本名不在登記冊；官網所列 Network Engineer、1st Line Network Support Engineer 截止 2025-12-14 已過期（規則 P），沒有現行對口職缺＝高。
- **簽證／搬遷**：本名不在冊；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：無現行（Network Engineer、1st Line Support 截止 2025-12-14，已過期）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：verifier 提醒：converged.co.uk 才是本列；Wirral 的 convergedcomms.co.uk 是另一家。
- **備註**：職缺頁可能未更新；過期不等於停業（verifier），不套規則 V。
- **來源**：verified11.md #13；converged.co.uk/about-us/careers/；inca.coop/member-directory/；CH SC293456；本名登記冊查無（sponsors_latest.csv，2026-11-12 版）

### 20. Brightsolid (Brightsolid Online Technology Limited)（#11）｜Dundee（Technology Park）

- **公司簡介**：Dundee 的資料中心與雲端服務商，CH SC161678 Active（Gateway House）；集團職涯走 DC Thomson Workable。
- **適配度：中**：資料中心／colocation／cloud（DC Thomson 集團）；業務與 cloud 基礎設施相關，但沒有職缺證據＝中（比照 Run 10 Pulsant 不判低）。
- **申請難度：高**：本名不在登記冊，只有母集團 DC Thomson & Co Ltd 在冊（規則 A/C 不計）；集團官方 Workable 現列職缺沒有 Brightsolid 標籤＝無贊助且無對口職缺＝高（比照 Run 10 Codemasters）。
- **簽證／搬遷**：本名不在冊；DC Thomson & Co Ltd（Dundee）在冊屬集團，不計；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：無 Brightsolid 標籤職缺（DC Thomson Workable，已檢查）；brightsolid.com 403＝未檢查
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：verifier 提醒照辦：Findmypast 的 Junior Software Engineer 不算本列。
- **備註**：brightsolid.com 403 不等於停業；判高的依據是集團官方 Workable（已檢查），不是 403（第十節）。
- **來源**：verified11.md #11；dcthomson.co.uk/brands/brightsolid/；apply.workable.com/dcthomson/；CH SC161678；sponsors_latest.csv（2026-11-12 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 21. Kyloe Partners (Angus Kyloe Partners Limited)（#14）｜Kirkwall（Orkney）

- **公司簡介**：Orkney Kirkwall（Custom House, 33 Albert Street）的 SaaS／顧問公司；現行法人 ANGUS KYLOE PARTNERS LIMITED（CH 09644379 Active，註冊於 Gloucestershire）；HIE account-managed 案例。
- **適配度：中**：Bullhorn CRM 相關 SaaS 產品與顧問；軟體業但沒有工程職稱證據＝中。
- **申請難度：高**：現行雇主 Angus Kyloe Partners Limited 不在登記冊；目前只有 Open Application、沒有具名職缺＝無贊助且無職缺＝高。
- **簽證／搬遷**：本名不在冊；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：無具名職缺（僅 Open Application，官方 careers 已檢查）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：verifier 提醒照辦：舊 KYLOE PARTNERS LIMITED（SC544657）2019-09-17 已解散，但現行雇主是 09644379——不是停業，不套規則 V。
- **備註**：官網「70+ people」與 HIE「約 60」（2021 語境）都不是已驗證的現況人數，本報告不引。
- **來源**：verified11.md #14；kyloepartners.com/terms、/about-us/careers；hie.co.uk Kyloe 案例；CH 09644379、SC544657；本名登記冊查無（sponsors_latest.csv，2026-11-12 版）

### 22. Profico（#30）｜Split（另有 Zagreb）

- **公司簡介**：Split（Dračevac 3D）與 Zagreb 的數位產品公司；克羅埃西亞登記編號未驗證。
- **適配度：中**：數位產品開發公司；軟體業但沒有工程職稱或技術棧證據，規模小＝中。
- **申請難度：高**：官方 careers 快照「Open positions 0」（只收 open application）＝無對口職缺＝高（Run 2 量表，比照 Run 10 Sorsix）；這只是 2026-11-16 快照，不是永久沒有職缺。
- **簽證／搬遷**：克羅埃西亞屬 EU：EU Blue Card 只標「相關」（規則 J）；「Travel opportunities」不是簽證／搬遷字樣；Taiwan passport 資格：未驗證
- **對口開放職缺**：官方快照 Open positions 0（2026-11-16）；接受 open application
- **語言**：語言未驗證（頁面英文，未寫死語言要求）
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **來源**：verified11.md #30；profi.co/careers；profi.co

### 23. ScotRail (ScotRail Trains Limited)（#3）｜Glasgow（Atrium Court, 50 Waterloo St）

- **公司簡介**：蘇格蘭國營鐵路營運商，CH SC328826 Active；careers 頁出現 ScotRail Trains Limited Publication Scheme。
- **適配度：低**：鐵路營運（規則 N）；verified11 沒有任何 IT／數位職缺或團隊證據，依規則 3-2 以「資料不足」判低（不是確認沒有 IT 職缺）。
- **申請難度：中**：登記冊直接命中 ScotRail Trains Ltd；官方 ATS 清單為 JS（未檢查，規則 3-1）＝中。
- **簽證／搬遷**：登記冊命中 ScotRail Trains Ltd, Glasgow（Skilled Worker；A）；前特許商 Abellio ScotRail Limited 也在冊但不計；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（apply.scotrail.co.uk 清單為 JS）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：Maps 地址歧義（Atrium Court／Wellington St vs 50 Waterloo St）已由 verifier 解決。
- **來源**：verified11.md #3；scotrail.co.uk/about-scotrail/careers；apply.scotrail.co.uk/vacancies/；CH SC328826；sponsors_latest.csv（2026-11-12 版，本報告重查命中）

### 24. Rangers FC (The Rangers Football Club Limited)（#4）｜Glasgow（Ibrox）

- **公司簡介**：Glasgow Ibrox 的足球俱樂部，現行法人 CH SC425159 Active（2012 年後的俱樂部公司，不是已解散的 SC004276）。
- **適配度：低**：足球俱樂部（規則 N）；brief 目標是媒體／票務／電商數位團隊，但 verified11 沒有任何 IT／數位職缺證據＝低（資料不足）。
- **申請難度：中**：登記冊直接命中 The Rangers Football Club Ltd；官方 ATS（people-first）為 JS SPA（未檢查）＝中。
- **簽證／搬遷**：登記冊命中 The Rangers Football Club Ltd, Glasgow（Skilled Worker；International Sportsperson；A）；持牌不等於 IT 職可擔保；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（rangershr.jobs.people-first.com 為 JS）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：Skilled Worker 執照可能主要用於球隊或教練職：本報告不推論，只標「持牌≠IT 職會擔保」。
- **來源**：verified11.md #4；rangershr.jobs.people-first.com/jobs/search；CH SC425159；sponsors_latest.csv（2026-11-12 版，本報告重查命中）

### 25. Thermo Fisher Scientific Inchinnan (Life Technologies Limited)（#6）｜Inchinnan（Paisley）

- **公司簡介**：Thermo Fisher 在 Inchinnan Business Park 的生技廠，法人 Life Technologies Limited（CH SC083107 Active）。
- **適配度：低**：生技／生命科學製造（規則 N，上限 中）；verified11 沒有 Inchinnan 的 IT 職缺或團隊證據＝低（資料不足）。
- **申請難度：中**：登記冊直接命中 Life Technologies Limited（註冊地址＝Maps 廠址）；官方 Phenom 職缺清單為 JS（未檢查）＝中。
- **簽證／搬遷**：登記冊命中 Life Technologies Limited, Paisley（Skilled Worker；GBM Senior or Specialist；A）；Life Technologies Finance Limited（non-trading）不在冊、不計；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（jobs.thermofisher.com 為 JS）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **來源**：verified11.md #6；jobs.thermofisher.com；CH SC083107、SC397873；sponsors_latest.csv（2026-11-12 版，本報告重查命中）

### 26. Alstom (Derby, Litchurch Lane)（#17）｜Derby

- **公司簡介**：Derby Litchurch Lane 的鐵路車輛廠；候選法人 ALSTOM TRANSPORT UK LIMITED（08462831）與 ALSTOM ENGINEERING AND SERVICES LIMITED（02235994，前 Bombardier Transportation UK）。
- **適配度：低**：鐵路車輛製造（規則 N）；官方 Derby 搜尋只見 Method & Tools Engineer 等，沒有 software／DevOps／cloud／security 職＝低（資料不足）。
- **申請難度：中**：兩家 Derby 相關法人（Alstom Transport UK Ltd、Alstom Engineering and Services Limited）都在冊，但職缺只寫「Company: Alstom」，依規則 C 不計命中；規則 S（封閉集合）不套用，因為兩家只是 verifier 列的候選、沒有官方證據證明已窮盡；判中而非高屬判斷（第十節）。
- **簽證／搬遷**：條件式：Alstom Transport UK Ltd（Birmingham）與 Alstom Engineering and Services Limited（Derby）都在冊（Skilled Worker；GBM Senior or Specialist；A）；職缺雇主未獨一確定；Taiwan passport 資格：未驗證
- **對口開放職缺**：無（官方 Derby 搜尋，已檢查；Method & Tools Engineer 非對口）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：已讀 Derby JD 未見 SC／國籍字樣；不沿用 scout 推論。
- **來源**：verified11.md #17；jobsearch.alstom.com（Derby 搜尋、Method & Tools Engineer）；CH 08462831、02235994；sponsors_latest.csv（2026-11-12 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 27. Sky Livingston (Sky UK Limited，條件式)（#5）｜Livingston（Kirkton Campus）

- **公司簡介**：Sky 在 Livingston Kirkton Campus（1 MacIntosh Rd）的據點；英國主要營運公司 Sky UK Limited（CH 02906991）。
- **適配度：低**：媒體／電信（規則 N 依職缺判斷）；官方 careers 列 Livingston 為據點，但沒有 Livingston 的 IT／軟體職缺證據＝低（資料不足）。
- **申請難度：中**：Sky UK Limited 在冊，但 Livingston 職缺原文未載法人名稱，依規則 C 不計；Workday 以 Livingston／Scotland 搜尋為 0，careers.sky.com 清單未完整檢查（JS）＝中（比照 Run 10 Aviva）。
- **簽證／搬遷**：條件式：Sky UK Limited（Middlesex）在冊（Skilled Worker；GBM Senior or Specialist；Creative Worker；A）；Sky UK New Co Limited 不計；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（careers.sky.com 清單為 JS；Workday Livingston 關鍵字搜尋 0 筆，只是快照）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **來源**：verified11.md #5；careers.sky.com/locations/livingston、/jobs；CH 02906991；sponsors_latest.csv（2026-11-12 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 28. DHL Supply Chain Bellshill（#7）｜Bellshill（Mossbell Road）

- **公司簡介**：DHL Supply Chain 的 Bellshill 倉庫（10 Mossbell Road, ML4 3NW）；候選法人 DHL Supply Chain Limited（00528867）或 DHL Services Limited（03324664）。
- **適配度：低**：物流倉儲；verified11 沒有 IT／WMS 職缺證據＝低（資料不足）。
- **申請難度：中**：DHL Services Limited 在冊但 Bellshill 聘用法人未定，DHL Supply Chain Limited 不在冊，依規則 A/C 不計；官方職缺清單未檢查（JS／轉址）＝中（比照 Run 10 Lifescan）。
- **簽證／搬遷**：條件式：DHL Services Limited（Milton Keynes）在冊（Skilled Worker；GBM；A）；DHL Supply Chain Limited 不在冊；Taiwan passport 資格：未驗證
- **對口開放職缺**：未檢查（careers.dhl.com 為 JS／轉址）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：Eurocentral 原目標未以名稱命中，scout 改用 Bellshill 據點。
- **來源**：verified11.md #7；careers.dhl.com；CH 00528867、03324664；sponsors_latest.csv（2026-11-12 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 29. BAE Systems Samlesbury（#21）｜Samlesbury（Preston）

- **公司簡介**：BAE Systems 的 Samlesbury 航太廠；候選法人 BAE SYSTEMS PLC（01470151）與 BAE SYSTEMS (OPERATIONS) LIMITED（01996687）。
- **適配度：低**：國防航太；Samlesbury 官方列表沒有 Software Engineer，唯一接近的 Application Support Analyst 是 SQL Server／SSIS 應用整合支援（管理式 IT），graduate 是 Air Systems Engineer＝低。
- **申請難度：高**：BAE Systems Plc 在冊，但職缺未點名法人、BAE Systems (Operations) Limited 不在冊（規則 C 不計）；官方 Security Statement 寫國籍、曾有國籍與出生地可能限制資格，所有人至少 BPSS，許多職位需 5–10 年連續英國居住的國安審查（規則 L／T）；沒有對口職缺＝高。
- **簽證／搬遷**：條件式：BAE Systems Plc（London）在冊（Skilled Worker；GBM Senior or Specialist；GBM Graduate Trainee；Government Authorised Exchange；A）；官方 Security Statement 限制；Taiwan passport 資格：未驗證
- **對口開放職缺**：Application Support Analyst（00139634，截止 2026-11-26；非對口）；Graduate Air Systems Engineer（Warton／Samlesbury，非 software）
- **語言**：英語；未見非英語要求
- **時程**：Application Support Analyst 截止 2026-11-26（距今 5 天），非對口且受 Security Statement 限制；快照距開學 284 天、距畢業 650 天
- **備註**：該 JD 本身沒有寫「必須已持 SC」，但官方 Security Statement 適用全部職位（規則 L：阻止評低；本列因無對口職缺判高）。
- **備註**：Application Support Analyst 的 URL slug 是「application-integration-engineer-00139634」，與頁面職稱不同（第九節）。
- **來源**：verified11.md #21；jobsearch.baesystems.com/job/application-integration-engineer-00139634、/browse-jobs/location/samlesbury-united-kingdom；CH 01470151、01996687；sponsors_latest.csv（2026-11-12 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 30. GoFibre（#12）｜Edinburgh（Exchange Tower）

- **公司簡介**：Edinburgh 的光纖 altnet；法人包括 GoFibre Holdings Limited（SC582522）、GoFibre Networks Limited（SC771481）、GoFibre Broadband Limited（14404189）；INCA 與 Scottish Government 名單仍列。
- **適配度：低**：full-fibre altnet（規則 N：電信依職缺判斷）；官方現列 4 筆全是外勤銷售、FTTP 安裝、土木，沒有 IT／network engineer 證據＝低（資料不足）。
- **申請難度：高**：GoFibre Holdings LTD 在冊，但職缺只寫「GoFibre」，未明示 Holdings／Networks／Broadband，依規則 C 不計；官方 Greenhouse 已檢查，沒有對口職缺＝高（比照 Run 10 UHI）。
- **簽證／搬遷**：條件式：GoFibre Holdings LTD（Edinburgh）在冊（Skilled Worker；A）；職缺法人未明示；Taiwan passport 資格：未驗證
- **對口開放職缺**：無（官方 Greenhouse 4 筆：Field Sales Executive、FTTP Install Engineer、Lead Civils Operative 等，皆非對口）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **來源**：verified11.md #12；gofibre.co.uk/careers/；job-boards.eu.greenhouse.io/gofibre；inca.coop/member-directory/；sponsors_latest.csv（2026-11-12 版）：只有集團／條件式法人在冊，依規則 A/C 不計命中

### 31. Wheatley Group（Wheatley House）（#2）｜Glasgow

- **公司簡介**：蘇格蘭大型住房協會集團，Wheatley House 為集團總部（25 Cochrane Street）；Wheatley Housing Group Limited SC426094 Active，招聘法人依職缺而定（可能是 Wheatley Homes Glasgow Limited 2572RS 或其他夥伴）。
- **適配度：低**：住房協會（規則 N）；verified11 沒有 IT／數位職缺證據，官網現列職缺都是非 IT＝低（資料不足）。
- **申請難度：高**：Wheatley Housing Group／Wheatley Homes Glasgow 都不在登記冊（Wheatley Software Solutions、Great Wheatley 是無關公司）；官網職缺已檢查、沒有對口職缺＝高。
- **簽證／搬遷**：本名不在冊；職缺贊助字樣未驗證；Taiwan passport 資格：未驗證
- **對口開放職缺**：無（官網現列 Heat Networks Technical Officer、Development Co-ordinator、Building Pathology Surveyor 等，皆非 IT）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：集團有 Wheatley Solutions 等夥伴，數位團隊是否存在：未驗證（第八節）。
- **來源**：verified11.md #2；wheatley-group.com/careers/jobs；CH SC426094；Mutuals 2572RS；本名登記冊查無（sponsors_latest.csv，2026-11-12 版）

### 32. Westway IT (WESTWAY IT LTD)（#24）｜Gloucester（服務據點；註冊於 Blakeney）

- **公司簡介**：Gloucester 的 IT support 公司，CH 11341592 Active（註冊地址 Blakeney；Maps 為 Gloucester business centre）。
- **適配度：低**：小型 IT support／MSP（管理式 IT）＝低。
- **申請難度：高**：本名不在登記冊；官網沒有 careers 路徑（/careers 404）、沒有具名職缺＝高。
- **簽證／搬遷**：本名不在冊；Taiwan passport 資格：未驗證
- **對口開放職缺**：無（/careers 404）
- **語言**：英語；未見非英語要求
- **時程**：無現行可行動截止日；快照（2026-11-21）距開學 284 天、距畢業 650 天
- **備註**：這是 Gloucester 重試唯一的列（第八節）。
- **來源**：verified11.md #24；westwayit.co.uk、/about/；CH 11341592；本名登記冊查無（sponsors_latest.csv，2026-11-12 版）

---

## 七、跨輪比較：Run 1–Run 11

### 十一輪規模

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
| **Run 11** | **32** | **32 列／32 雇主** | **0** | **DataVita（高／中，未持牌）；Levi9、Hornbill、Vega IT（高／中）** |
| 合計 | 395 列 | — | — | 以列計，不是不重複雇主數 |

**英國難度「低」累計**：
- Run 4：FanDuel
- Run 6：五家
- Run 7：三家
- Run 8：ENSEK（高／低）、OQC（中／低）
- Run 9：無
- Run 10：Ripjar（高／低，有條件）、Next（中／低，有條件）
- **Run 11：無**（在冊的 10 家都沒有可計的確認開放對口職缺：Thales 與 Rolls-Royce 的對口職屬 SC，Siemens Energy 的職缺不是目標職類）

### 更新後英國 Top 10（十一輪合併，英國且有贊助者）

方法：沿用 Run 2–10。適配優先，同級看贊助與確認開放的對口職缺；規則 W：本輪新的 高／低 排在前幾輪的 高／中 之前；同為 高／低 時依證據強度排序；前幾輪條目之間的相對順序不變。**本輪沒有 高／低，Top 10 與 Run 10 完全相同。**

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
| 10 | Starling Bank | Run 6 | 高／低 | Engine 法人未驗證，有條件 |

- **進出**：無。
- **候補（節錄）**：
  - 第一候補：**Version 1**（Run 6，高／低，規則 S 封閉集合，有條件）。
  - 其後依序（高／中）：Texaport、Spire、Proofpoint、Bellrock、AAC Clyde Space、Skyscanner、Scott Logic、Waracle、Made Tech、Wise、Rapid7、Pulsion、Encompass、Revolut、Kainos、Datactics、Data Intellect、Copper、Crypto Facilities、Amazon Development Centre Scotland、Aiimi、Epos Now、Connexin。
  - 再其後：OQC（中／低）、Barclays（中／低）、Next（Run 10，中／低，有條件）、JPMorgan／Lloyds（中／中）、Scottish Water、Met Office（中／中）、Run 10 的 Pulsant 與大學列（中／中）。
  - **Run 11 新增（中／中，本名在冊）**，接在最後，依證據強度：
    1. **Siemens Energy**（Lincoln）：Siemens Energy Limited 是職缺頁 Company，法人一致；有官方 OT 資安職，但不是目標職類。
    2. **Rolls-Royce**（Derby）：Azure／Terraform／K8s 的 Infrastructure Engineer 屬 SC 職（規則 T），不計。
    3. **Capgemini UK**（Inverness）：職缺清單未檢查。
    4. **Huawei R&D UK**（Martlesham）：只有 software-adjacent 的模擬／ML 職。
    5. **Double Eleven**（Middlesbrough）、**STAR-Dundee**（Dundee）：沒有對口職缺。
  - **不列候補**：Thales（中／高，規則 T，比照 GCHQ）；DataVita（高／中，但未持牌，不符合「英國且有贊助者」）；條件式的 BGL／Compare the Market、bet365（規則 C，未確認在冊法人）。
- **敏感度**：
  - **DataVita**：若 HFD DATAVITA LIMITED 日後出現在登記冊，且 Platform／Security 職仍開放，會成為 高／低（有條件），依規則 W 進 Top 10 討論，Starling 可能退出。
  - **bet365**：若官方 JD 點名 Hillside (Technology) Limited 且有對口職缺，同上。
  - **Siemens Energy**：若 Lincoln 出現 cloud／IT security 職，最高 中／低（規則 N），不進 Top 10。
  - Epos Now、Connexin、Aiimi 的敏感度（Run 9–10）仍未解決。
  - 本報告不推論。

### 歐洲（非英國）Top 10（十一輪合併）

方法：規則 Q。本輪最佳的 Levi9、Hornbill、Vega IT 都是 高／中，但都**沒有官方 relocation、visa 或 Blue Card 說明**（塞爾維亞、阿爾巴尼亞是非 EU，只有政府的當地許可說明，不是公司的支援承諾），Taiwan 資格也未驗證。依規則 Q，它們不足以擠下已有 relocation 或官方名單證據的條目。**Top 10 與 Run 10 完全相同。**

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
- 現有：Synerise、Kentico、Nord Security、Bitdefender、Tresorit、UiPath、Bloomreach SK、ESET、Infobip Zagreb、Endava Timișoara、OPSWAT Timișoara、Workable Athens，接著 OpenText Cork、Einride、OutSystems、Talkdesk、Glovo、Myra、Feedzai、sennder、Zalando Dublin、Pipedrive、GlobalLogic、Honeycomb、Qualcomm Cork、Medtronic Galway。
- **Run 11 新增（高／中）**，接在 Workable Athens 之後（規則 Q 第 2–4 點）：
  1. **Levi9**（Novi Sad）：官方 DevOps Engineer 開放（Belgrade），官方 hiring process 評估英語（第 3 點）；Novi Sad 本身沒有對口職。
  2. **Hornbill**（Tirana）：官方 Cloud Team 職開放，但標 Support、層級可能低於 Dennis 年資（規則 Q 排序備註），日期未示。
  3. **Vega IT**（Novi Sad／Niš）：只有 Data Engineer，DevOps 在 Amsterdam。
- 之後依序：Accedia、Ciklum、GoTo Hungary（中／中）、Centric Iași（Run 10，中／中）、**Run 11 的 Deutsche Telekom IT Solutions Debrecen、Amdaris Chișinău、DualSOFT Niš（中／中）**、Printful（中／高）、Comtrade、Cosylab、Outfit7（中／高）；Run 10 的 EPSILONNET、Sorsix、G+D Netcetera、Ministry of Programming 與 **Run 11 的 Profico（中／高）** 接在最後。

### 與 Run 10 相比：本輪改變了什麼

1. **兩個 Top 10 都不變**：本輪沒有英國 高／低，歐洲也沒有官方 relocation／visa 字樣。
2. 登記冊更新為 2026-11-12 版並獨立重查：10 雇主／23 列；verifier 的 10 個命中與 8 個條件式判定全部正確，只有 Rolls-Royce 的列數不同（6 vs 4）。
3. 第一次用名錄（HIE、INCA、Scottish Enterprise FOI、Flintbox）取代 Maps 補 B 組：補到 Capgemini Inverness、Kyloe（Orkney）、STAR-Dundee、iomart、DataVita、Brightsolid、GoFibre、Converged，終於有蘇格蘭的雲端／資料中心雇主（DataVita 是本輪最佳英國列），但只有 Capgemini 與 STAR-Dundee 本名在冊。
4. 第一次覆蓋 Derby／Samlesbury／Lincoln 的航太、鐵路、能源 OEM：規則 T 與 N 主導，Thales、Rolls-Royce、BAE 的對口職都受 SC 或國安審查限制。
5. 東歐第一次有非 EU 國家的官方當地許可來源（塞爾維亞、阿爾巴尼亞、摩爾多瓦），但仍沒有任何公司的 relocation／visa 字樣。
6. **沒有新增規則**。

---

## 八、未驗證／缺口

1. **個別職缺贊助**：本輪沒有任何英國職缺寫贊助或不贊助；CoS 一律未驗證。
2. **官方職缺未確認或未讀**：
   - Siemens Energy、Huawei、Hornbill、Vega IT 的職缺日期頁面未示（規則 P 無法計天數）。
   - Rolls-Royce Digital & IT 分類頁顯示沒有職缺，但 Workday UK 板有；其他 Derby 軟體職是否有 SC：未驗證（verifier 明說不可推及）。
   - Capgemini Inverness 職缺層級的 SC／國籍要求未在官方 JD 核對；HIE 的 clearance 數字沒有日期。
3. **JS／被擋的職缺板（未檢查）**：
   - 英國：ScotRail ATS、Rangers（people-first）、Sky careers、Thermo Fisher（Phenom）、DHL careers、Capgemini Job search、iomart（iCIMS 405）、brightsolid.com（403）、BGL／Compare the Market（Oracle、root 403）、bet365 深頁、PwC（403）、Siemens Energy Avature 列表、Double Eleven Workable 深頁、STAR-Dundee 的 Flintbox 目錄。
   - 歐洲：Vega IT 分頁 2–4、Amdaris jobs、DualSOFT TalentLyft、Deutsche Telekom IT Solutions 231 筆清單。
4. **聘用法人與登記**：
   - 條件式（規則 C）：Sky Livingston、DHL Bellshill、GoFibre、Alstom Derby、BGL／Compare the Market、BAE Samlesbury、bet365、PwC BCS。
   - Siemens Energy：Lincoln 據點法人（Siemens Energy Industrial Turbomachinery Limited）不在冊；職缺頁 Company 是 Siemens Energy Limited（在冊）。若某職缺改由據點法人聘用，命中不成立。
   - 歐洲各列的國家登記（塞爾維亞 APR、阿爾巴尼亞 NUIS、摩爾多瓦、克羅埃西亞、匈牙利 cégjegyzék）全部未查；Deutsche Telekom ITTC 與 TSI 之間的招聘法人未定；DualSOFT 的公司重組未驗證。
5. **歐洲**：
   - 搬遷、工作許可、EU Blue Card、實際工作語言、Taiwan passport 資格全部未驗證。
   - brief 要求「找明文 relocation／visa 字樣」：本輪 7 家**都沒有**官方明文。非 EU 國家只有政府的當地許可說明（不是公司支援）。
   - Osijek（克羅埃西亞）與 Szeged（匈牙利）沒有產出列；Split 只有小型的 Profico，Debrecen 只有 Deutsche Telekom IT Solutions。
6. **範圍：B 組名錄**：
   - Inverness Campus 租戶名錄沒有產出列（B 組的 Inverness 列是 HIE 案例頁的 Capgemini）；St Andrews／Stirling spin-out 也沒有列（只有 Dundee 的 STAR-Dundee）。
   - Scottish Enterprise 綠色資料中心 FOI PDF 本輪沒有再下載核對（verifier）。
   - B 組 ISP／altnet 補到 GoFibre 與 Converged，但兩家都沒有現行對口職缺。
7. **範圍：C 組**：
   - **Barclays Northampton**：scout 因品牌已收錄（Barclays Clyde Place, Glasgow）刪除，不在 32 列，本報告**不評級**。Barclays 的跨輪評級（中／低，規則 S）沿用前幾輪，不因本輪更新。
   - Northampton 因此沒有任何列；Lincoln 只有 Siemens Energy；Teesside 只有 Double Eleven；Peterborough 只有 BGL；Stoke 只有 bet365；Preston／Lancaster 只有 BAE Samlesbury。
   - 重試結果：Coventry 只有更名後的 Olivehorse（PwC BCS，據點未驗證）；Gloucester 只有小型 MSP Westway IT；Martlesham 只有 Huawei R&D（Coderus 已在 Run 10 排除）。三個重試都沒有找到對口職缺。
8. **其他**：
   - Huawei 的英國安全／所有權敏感性：scout 有標，但沒有官方原文，本報告不推論。
   - Wheatley 集團的數位團隊（例如 Wheatley Solutions）：未驗證。
   - LinkedIn、Indeed、Otta 大多未逐一查證。
   - 各公司 2027–28 的 graduate 招募日期全部未驗證。

---

## 九、verified11 的不一致與需注意之處

1. **#16 Rolls-Royce 的登記列數**：verified11 列 4 筆（Skilled Worker、GBM Senior or Specialist、GBM Graduate Trainee、GBM Service Supplier）；本版登記冊實際是 **6 列**，Skilled Worker 與 GBM Senior or Specialist 各出現兩次（完全相同的列）。命中結論不變，只影響列數（23 vs 21）。
2. **scout handoff 的列數**：handoff 初稿寫 33 列（A7 B8 C11 D7），之後更正為 32；verified11 已註明以 TSV 實際 32 列為準。本報告同意。
3. **#21 BAE 的職稱與 URL**：頁面職稱是 Application Support Analyst，URL slug 是「application-integration-engineer-00139634」。本報告以頁面職稱為準，兩者都不是對口職。
4. **#10 DataVita 的 clearance**：verified11 寫「各 JD 內文未逐篇打開，clearance 未驗證」；分析者 2026-11-21 讀兩則 JD 全文，沒有 SC、工作權或贊助字樣。另外 JD 寫工作地點是 Hamilton International Technology Park（Employment Hero 標 High Blantyre G72），與 verifier 的「三地並存」一致。
5. **#17 Alstom 與規則 S**：verifier 只說兩家是「候選」，沒有說已窮盡所有可能的英國聘用法人；本報告因此不套規則 S（封閉集合），維持不計命中（第十節）。
6. **#16 的截止日**：verified11 把 Software Engineer-Advanced planning and scheduling 列為相符職缺（截止 2026-11-19）；到本報告分析日 2026-11-21 已截止，四之二列在「已過期」。Infrastructure Engineer（截止 2026-11-24）屬 SC 職，不計。
7. **#19 Siemens Energy 的命中法人**：Maps／scout 名稱是 Lincoln 據點法人（Siemens Energy Industrial Turbomachinery Limited，不在冊），命中的是職缺頁 Company 欄的 Siemens Energy Limited。本報告同意以後者計命中（規則 C：職缺雇主＝在冊法人），並在第八節註明條件。
8. **英國登記冊上的同品牌英國法人**：Deutsche Telekom (UK) Limited（Welwyn Garden City）在冊，verifier 沒有提到；它與 Debrecen 列無關（規則 A），本報告只在第一節附表揭露，不計。另以「hornbill」「amdaris」查詢英國登記冊皆查無（verifier 未提，僅供參考）。
9. **#8 Capgemini 與 #1 Thales 的人數**：HIE「約 850 FTE」與 Thales 官網「逾 750 people」都沒有統計日期；verifier 已標未驗證，本報告不引。

---

## 十、判斷與揭露（無新增規則）

1. **DataVita 判 高／中**：
   - 適配高：資料中心依規則 N 以職缺判斷；Platform Engineer（Python／Terraform／Ansible、可觀測性，K8s／IaC／GitOps 加分）與 Cyber Security Operations Manager（incident response、logging／monitoring、SIEM 加分）都對口。Platform Engineer 的必備技能偏 VMware／Fortinet／Cisco，屬部分重疊。
   - 難度中：未持牌＝「有招聘管道但無贊助」。
   - 不進英國 Top 10 或候補：方法限「英國且有贊助者」。
2. **Thales 判 中／高**：本名命中且法人一致，但所有已讀對口 JD 都要求 SC＋居英年限，依規則 T 全部不算對口職缺，再依規則 E 第二句判高（比照 Run 10 GCHQ）；適配只給中，因為職缺偏 C++／embedded，DevOps 只有 graduate 級。
3. **Rolls-Royce 判 中／中，不判高**：對口的 Infrastructure Engineer 屬 SC 職（規則 T）；但 SC 只見於該 JD，verifier 明說不可推及所有 Derby 軟體職，所以不套「所有對口職缺都受限＝高」。
4. **Siemens Energy 當作新雇主**：與已收錄的 Siemens Mobility（鐵路信號，Siemens AG 體系）是不同上市公司、不同法人；命中以職缺頁 Company 欄的 Siemens Energy Limited 計，不是 Siemens Mobility Limited。適配受規則 N 限制為中；OT／工控資安（Manager 級，需 AVEVA／WinCC／PCS7）不是 Dennis 的目標職類，所以不算確認對口，難度中。
5. **Levi9 判 高／中（公司層級）**：verifier 提醒 DevOps 在 Belgrade、不是 Novi Sad，本報告照辦，不寫成 Novi Sad 開缺；但依規則 3-3「大型雇主的難度以公司層級判斷」與規則 D，同一公司的官方 DevOps 職可作為招聘入口，所以給中而非高。若讀者只看 Novi Sad 據點，會是 高／高。
6. **Vega IT 判 高／中**：Novi Sad／Niš 只有 Data Engineer（規則 D 視為接近入口）；DevOps 在 Amsterdam 不計。差距不大。
7. **Hornbill 判 高／中**：Cloud Team 職對口，但標「Support」、日期未示；層級可能低於 Dennis 年資，只影響規則 Q 的候補排序，不改難度。
8. **Alstom 判 低／中，不判高**：兩家已知的 Derby 相關法人都在冊，但不符合規則 S（沒有證據證明已窮盡），所以不計命中；Derby 搜尋沒有對口職缺。因為「無對口」只是一次搜尋快照、而兩個候選法人都持牌，給中屬判斷（另一個合理判法是比照 Run 10 UHI 判高）。
9. **Brightsolid 判 中／高**：依據是集團官方 Workable（已檢查，沒有 Brightsolid 職缺）＋本名不在冊（比照 Run 10 Codemasters）；brightsolid.com 403 只標未檢查，不是判高的依據。
10. **GoFibre 判 低／高**：官方 Greenhouse 4 筆都是外勤／安裝／土木（已檢查），GoFibre Holdings LTD 在冊但屬條件式（比照 Run 10 UHI）。電信依規則 N 以職缺判斷，沒有 IT／network 職證據，適配判低（資料不足）。
11. **BAE 判 低／高**：職缺未點名法人（規則 C）；唯一接近的是 SQL Server／SSIS 應用支援（管理式 IT）；官方 Security Statement 依規則 L／T 處理。
12. **ScotRail、Rangers、Thermo Fisher、Sky、DHL 判 低／中**：本業非軟體（規則 N），verified11 沒有任何 IT 職缺或團隊證據，依規則 3-2 以「資料不足」判低；職缺清單都未檢查，依規則 3-1 不寫沒有職缺。
13. **Kyloe 判 中／高**：Open Application 不算具名職缺，也不算對口職缺；若讀者把 Open Application 視為招聘管道，會是 中／中（差距不大）。
14. **歐洲 JS 職缺板判中**（Amdaris、DualSOFT、Deutsche Telekom IT Solutions）：比照 Run 10 Workable「沒有確認開放職缺，但有入口＝中」；Profico 的官方快照寫 Open positions 0，所以判高（比照 Run 10 Sorsix）。
15. **英國列與歐洲列混排**：第四節排名表把英國與歐洲列放在同一張表（同 Run 7–10），但兩者適用不同的難度量表，跨區比較只供參考。
16. **分析者補查**：DataVita 兩則 JD 由分析者在 2026-11-21 直接讀取（只讀、未聯絡公司、未申請），結果已寫入第六節與第九節；其餘依 verified11。
17. **日期**：核實檢查日 2026-11-16，分析日 2026-11-21；職缺「已過期」與天數一律以 2026-11-21 計（因此 Rolls-Royce APS 職在本報告列為已截止）。

本輪所有判斷都能用 Run 1–10 的規則（3-1～3-6、A–W）處理，**沒有新增規則**（若需要，會從 X 開始編號並揭露）。
