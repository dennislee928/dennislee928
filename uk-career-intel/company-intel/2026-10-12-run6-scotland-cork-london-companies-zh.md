# 第六輪組織（Run 6）：蘇格蘭缺口（Stirling／Perth／Livingston／Fife／Dundee／Aberdeen）＋ Cork ＋ London fintech ＋ Belfast——與 Dennis 的適配度與申請難度評級報告

- 報告日期：2026-10-12（Asia/Taipei）
- 資料來源：`brief.md`（Run 6 參數）、`scout6.tsv`（38 筆）、`verified6.md`（第六輪核實，38 列＋最後一節「簽證事實」；含 verified6_A／B／C／D 批次檔；檢查日 2026-10-12）、`visa_facts6.md`（簽證事實，與 verified6.md 最後一節逐字相同）、`sponsors_2026-10-09.csv`（GOV.UK 持牌贊助登記冊 2026-10-09 版）、`covered-clean.txt`（前五輪已涵蓋名單）。Dennis 的個人資料檔（`/workspace/uk-career-intel/` 的 `uk-career-assessment-zh.md`、`strategy-decision-2027-28-zh.md`、`uk-glasgow-msc-sd-brief-zh.md`、`uk-glasgow-msc-sd-job-market-brief.md`、`pei-chen-lee-linkedin.md`）。對照用：Run 1–5 報告與 Run 5 的 `sponsors_2026-10-07.csv`。
- **本報告另外自行抓取的官方頁面（2026-10-12，WebFetch）**：https://www.gov.uk/graduate-visa 、https://www.gov.uk/graduate-visa/how-much-it-costs 、https://www.gov.uk/skilled-worker-visa/your-job 、https://www.gov.uk/skilled-worker-visa/when-you-can-be-paid-less 、https://www.gov.uk/government/publications/skilled-worker-visa-going-rates-for-eligible-occupations/skilled-worker-visa-going-rates-for-eligible-occupation-codes （頁面標示「Updated 22 July 2025」）。只用於第二節的英國簽證查核；其他國家的簽證事實為 verifier 引用，本報告**未重抓**。
- 原則：只使用上述檔案與頁面內已有的資料；沒有的資訊一律標「未驗證」；頁面無法載入者標「未檢查」（不等於沒有職缺）。台灣護照相關的雇主層級資格：一律「**未驗證**」。日期差距皆由檔案內日期計算並寫出天數。
- 本輪範圍（brief）：A 蘇格蘭缺口（Stirling、Perth、Livingston、Fife，以及未涵蓋的 Dundee／Aberdeen 公司，目標約 16）；B Cork（約 6）；C London 有自建平台／資安工程的金融／fintech（約 8）；D Belfast（Rapid7／Proofpoint／Instil 以外，約 5）。產業：energy-tech／offshore／grid software、電信、遊戲、博物館與文化機構、影視媒體。

---

## 一、摘要

### 評級範圍

- 名單 **38 列**：**評級 33 家**，**排除／存疑 5 家**（疑似已停業 3：Developing IT、Forbytes、Renovite；存疑 2：Add Energy、Spirit Telecom；另列第五節，附僅供參考的評級，不計入分布與排名）。
- 依地區（已評級 33）：英國 27（蘇格蘭 16：Stirling 2、Perth 3、Livingston 3、Dunfermline 1、Dundee 4、Aberdeen 3；London 7；Belfast 4）、愛爾蘭 Cork 6。排除的 5 家都在英國（Stirling、Kirkcaldy、Dunfermline、Aberdeen、Glasgow）。與 verified6.md 標題「蘇格蘭缺口 20、Cork 6、倫敦 fintech 7、貝爾法斯特 4、電信 1」一致（蘇格蘭 20＝已評級 16＋排除 4；電信 1＝Glasgow 的 Spirit Telecom）。
- 適配度分布：高 11、中 13、低 9。申請難度分布：低 5、中 12、高 16。組合：高／低 5、高／中 6、中／中 5、中／高 8、低／中 1、低／高 8（合計 33）。

| 地區 | 已評級 | 適配 高／中／低 | 難度 低／中／高 |
|---|---:|:-:|:-:|
| 蘇格蘭（Stirling／Perth／Livingston／Fife／Dundee／Aberdeen） | 16 | 0／8／8 | 0／4／12 |
| London（fintech／銀行） | 7 | 6／1／0 | 4／3／0 |
| Belfast | 4 | 4／0／0 | 1／3／0 |
| Cork（愛爾蘭） | 6 | 1／4／1 | 0／2／4 |

- **英國登記冊（2026-10-09 版）**：已評級的 27 家英國條目中，**16 家**以列內法人直接命中（#4 SSE Plc、#11 Bitwise Ltd、#15 Pocket Sized Hands、#17 Aberdeen City Council、#19 Net Zero Technology Centre Limited、#27 Monzo Bank Ltd、#28 Revolut Ltd、#29 Wise Payments Limited、#30 STARLING BANK LIMITED、#31 GoCardless Limited、#32 CHECKOUT LTD、#33 Lloyds Bank plc、#34 Kainos Software Ltd、#35 Version 1 Technology Limited／Version 1 Solutions Limited、#36 Datactics、#37 Data Intellect Services Limited〔＋舊名 AquaQ Analytics〕），皆 A rating；其餘 11 家查無。排除的 5 家全部查無。本報告以 python 重新比對，**verified6 宣稱的 16 列命中全部可重現**；與 Run 5 用的 2026-10-07 版比對，這些名稱的列**沒有任何增減**（整份檔案資料列由 143,176 增為 143,206）。Cork 6 家只有英國姊妹公司在冊（VMWare UK、Broadcom Europe、Trend Micro (UK)、OPEN TEXT UK、IBM UK），不計。
- Dennis 的背景（摘自個人資料檔）：現職 Cloud & Security Platform Engineer（Go／Next.js／Python／PostgreSQL、SIEM、gRPC、AWS／Cloudflare）；約 5–6 年可敘述職涯；IELTS 7.5；目標職類依序 Software／Backend（Go 或 TS）、Platform／Cloud／DevOps、Full-stack、AppSec／DevSecOps、AI／Agent；城市偏好「蘇格蘭可、倫敦可、愛爾蘭備案可」。LinkedIn 技能列 Java（無 Java 職務年資）。**年齡**不在個人檔中（影響 new entrant 的「under 26」條件：未驗證）。
- 時間軸（規則 F）：MSc **2027-09-01 開學、2028-09-01 畢業**；台灣護照、目前人在台灣、尚無英國工作權。畢業後 Graduate visa——**第二節已用官方頁面確認：2027-01-01 以後申請者為 18 個月**——期間不需雇主擔保；之後轉 Skilled Worker 才需持牌雇主。

### 本輪最重要的發現

1. **官方頁面確認了 Graduate visa 18 個月與 New Entrant 規則（第二節）**：gov.uk 原文「18 months if you apply on or after 1 January 2027」；New Entrant 為「70% of your job's standard going rate if your salary will be at least £33,400」，且「Your total stay in the UK cannot be more than 4 years … includes any time you've already spent in the UK on a Graduate visa」。Run 1–5 一直假設 18 個月，**結論不變**；£38,300 只適用 SOC 2134（£54,700 的 70% 精確為 £38,290），資安（2135）與 DevOps（2139）職的 new entrant 下限較低（£33,950、£36,610）。
2. **六輪以來最多的難度「低」：5 家，全部在 London／Belfast**——Monzo（Backend Engineer III 原文「We can sponsor visas」，六輪第一個對口職缺明寫可擔保）、GoCardless（SRE II，Go／AWS／GCP／K8s）、Checkout.com（Cloud Security、Detection & Threat〔SIEM〕、Golang）、Starling（Engine 的 Cloud Security／Infrastructure，Python／Go）、Version 1（AWS DevOps，Go／TS；依新規則 S）。除 Monzo 外都是「有條件的低」（職缺未寫擔保）。
3. **持牌 ≠ 可及：SC 與既有工作權條款成為主要障礙**——SSE（Perth）graduate 原文「unable to offer visa sponsorship」且「falls below the minimum “New Entrant” salary threshold」，兩個資安職要求 SC「normally includes 5 years UK residency」；Kainos graduate 要「unconditional right to work in the UK」＋SC 資格，AWS 平台職要 SC／Active SC；Aberdeen City Council 的 Technology Analyst 要求已有英國居住與工作權；Monzo 實習與 Wise 部分職缺也有同類限制。本輪把這類條款寫成新規則 T。
4. **JPMorgan／Barclays Glasgow 重新評估（第七節）**：verifier 的法律雇主線索——JPMorgan Chase Bank, N.A.（London Branch BR000746，信心中）、Barclays Execution Services Limited（信心中高）——都是**推論、未驗證**。依新規則 S，Barclays 的難度由 中 改為 **低（有條件）**；JPMorgan 因可能的聘用法人（如 JPMorgan Asset Management (UK)）不在冊，維持 中。兩者適配度仍受規則 N（銀行本業）壓在 中，**都沒有進入六輪英國 Top 10**，列候補中銀行類的前兩位（Barclays、JPMorgan）。
5. **所有帶日期的入口都早於 Dennis 有資格的時間**：最近的 Lloyds Senior DevOps（2026-10-13）、SSE 資安職（2026-10-19）、Aberdeen Technology Analyst（2026-10-22）、SSE graduate／Lloyds Backend SE／Monzo intern（2026-11-01）距 MSc 開學約 10–10.6 個月、距畢業約 22–22.6 個月；本輪所有 graduate 梯次（SSE、Kainos 2027-08、Revolut 2027）都與 2028-09 畢業不合（第四節之二「時程與截止日」）。
6. **Cork（愛爾蘭備案）只有 OpenText 有確認開放的對口職缺**（Tisalabs 三則職缺無日期、開放狀態未驗證）（多筆 SRE／Cloud Ops，Python／Go、K8s、AWS/GCP），但無 relocation／visa 字樣、CSOL 職稱對應未驗證，評 高／中；VMware、Trend Micro、IBM 的 Cork 據點都找不到工程職。
7. **排除 5 家**：Developing IT（法院清算）、Forbytes（英國法人 2021 解散、無英國據點）、Renovite（2026-09-23 解散；母公司已被 J.P. Morgan 收購）、Add Energy（併入 ABL 集團，實際營運未驗證）、Spirit Telecom（前身被強制除名、官網停在 2023）。

### 本輪 Top picks（綜合適配度與難度）

> 全表排序見第四節。英國與愛爾蘭同表，等級相同時英國且有贊助者在前（Run 2／Run 4／Run 5 做法）。

1. **Monzo**（#27，London）：高／低——Go 後端職缺明寫「We can sponsor visas」與協助搬遷；Monzo Bank Ltd 直接在冊。
2. **GoCardless**（#31，London）：高／低（有條件）——SRE II（Python／Golang、Terraform、AWS／GCP、K8s／GKE、ArgoCD），層級 II。
3. **Checkout.com**（#32，London）：高／低（有條件）——Senior Cloud Security、Detection & Threat（SIEM）、Golang、Cloud Engineer；多為 Senior。
4. **Starling Bank**（#30，London）：高／低（有條件）——Engine by Starling 的 Cloud Security／Infrastructure (GCP)、InfoSec Analyst（SIEM）。
5. **Version 1**（#35，Belfast）：高／低（有條件，規則 S）——AWS DevOps Engineer（Go／Python／TS、CDK／Terraform）。
6. 高／中：**Wise**（#29；Platform Engineer - Compute，但部分職缺限本地／不擔保）、**Data Intellect**（#37；AI Engineer (Agentic Systems)）、**Revolut**（#28；graduate 有 visa assistance 但限 2027 前畢業）、**Kainos**（#34；SC）、**Datactics**（#36）、**OpenText Cork**（#23；愛爾蘭最佳）。
7. 實務上仍值得追蹤但評級受規則壓低：**Lloyds**（#33，中／中；Go 後端 £76,760–£115,140，截止 2026-11-01）。

> 與前五輪一致：所有現行職缺是 2026-10-12 的快照，距暫定開學 324 天、距畢業 690 天；它們代表「公司層級的招聘習慣與簽證路徑」，不是可等到的具體職缺。

### 注意事項

- **「未檢查」**（不寫成沒有職缺）：Bitwise 的 Teamtailor 職缺板（curl 000、WebFetch 421）、m3 Networks 的 SimplyHired 原頁（403）與官網 careers（JS）、Datactics 的 PeopleHR 職缺詳情（連結失效）、gamemaker.io/jobs（JS）、Lloyds 畢業生頁（JS）、Checkout.com Early Careers（未展開）、Renovite 官網（連不上）、OSCR 原頁（JS；用 findthatcharity 鏡像）、愛爾蘭 CRO 原站（用鏡像）、多數公司的 LinkedIn／Indeed。
- 「官方頁面明示」才寫成目前無職缺：Stirling Smith（「there are no vacancies at present」）、Bitwise（「There are currently no open positions」）、Net Zero Technology Centre（「There are currently no open positions…」）、Opera Dundee（「No matching jobs」）。
- **登記資料來源等級**：英國 Companies House／OSCR 為一手（OSCR 部分用鏡像）；愛爾蘭全部為 CRO 鏡像（companycheck.ie、solocheck.ie、businessbarometer.ie）與 GLEIF LEI。
- **評級為判斷，不是事實欄位**：依第三節標準推導；本輪新增規則 R–W 在第三節與第十節揭露。

---

## 二、簽證事實查核：Graduate visa 18 個月、Skilled Worker 與 New Entrant 門檻，以及對 Dennis 時間軸的影響

**方法**：`visa_facts6.md`（＝verified6.md 最後一節）第 2a 小節引用了 gov.uk 頁面。本報告在 2026-10-12 用 WebFetch 重新抓取這些官方頁面（另加 verifier 沒有引用、但含 New Entrant 原文的子頁，以及 going rates 表），逐字比對。**四個頁面全部成功載入**，沒有需要標「未驗證」的英國核心主張；只有下表標明的細項仍未驗證。

### 2.1 查核結果（引用官方原文）

| # | verifier 的主張（visa_facts6.md） | 官方頁面（本報告 2026-10-12 抓取） | 官方原文（逐字） | 判定 |
|---:|---|---|---|---|
| 1 | Graduate visa：2026-12-31 以前申請 2 年；2027-01-01 以後申請 18 個月；PhD 3 年 | https://www.gov.uk/graduate-visa | 「A Graduate visa lasts for: 2 years if you apply on or before 31 December 2026 / 18 months if you apply on or after 1 January 2027」；「If you have a PhD or other doctoral qualification, it will last for 3 years.」 | **已驗證** |
| 1a | （同頁，verifier 未引）效期起算、申請時點 | 同上 | 「Your visa will start from the day your application is approved.」；「You must apply before your Student visa or Tier 4 (General) student visa expires.」；「you'll usually get a decision on your visa within 8 weeks」；「You cannot extend your Graduate visa.」 | **已驗證**（補充） |
| 2 | 費用：「18 months - it will cost £1,152.50」 | https://www.gov.uk/graduate-visa/how-much-it-costs | 「pay the £937 application fee」；「Healthcare surcharge … 18 months - it will cost £1,152.50」 | **已驗證，但 verifier 的標示不精確**：£1,152.50 是 healthcare surcharge，不是總費用；另有申請費 £937（合計 £2,089.50，本報告加總） |
| 3 | Skilled Worker 一般門檻：£41,700 或 going rate 取高者 | https://www.gov.uk/skilled-worker-visa/your-job | 「The minimum salary for the type of work you'll be doing is whichever is the highest of: £41,700 per year / the 'going rate' for the type of work you'll be doing」 | **已驗證**；£41,700 的生效日頁面未寫 → **未驗證**（與 verifier 一致） |
| 4 | New Entrant：70% going rate、至少 £33,400，條件含 Student／Graduate visa | verifier 引用 /your-job；**該頁只有**「you might still be eligible if your salary will be at least £33,400 per year」；完整條文在子頁 https://www.gov.uk/skilled-worker-visa/when-you-can-be-paid-less | 「You can be paid 70% of your job's standard going rate if your salary will be at least £33,400 per year and one of the following applies: you're under 26 on the date you apply / you're currently in the UK on a Student visa studying at bachelor's degree level or above (or you have been in the last 2 years, and a Student or visit visa was your most recent visa) / you're currently in the UK on a Graduate visa (or you have been in the last 2 years, and a Graduate or visit visa was your most recent visa) / …」 | **已驗證**（內容正確，但出處頁標錯，見第九節） |
| 5 | New Entrant 總停留上限 4 年（含 Graduate visa 期間） | 同上子頁 | 「Your total stay in the UK cannot be more than 4 years if you apply for one of these reasons. This includes any time you've already spent in the UK on a Graduate visa.」 | **已驗證**；Student visa 期間是否計入：原文只提 Graduate visa → **未驗證** |
| 6 | （個人資料檔）SOC 2134 going rate £54,700、new entrant 約 £38,300 | https://www.gov.uk/government/publications/skilled-worker-visa-going-rates-for-eligible-occupations/skilled-worker-visa-going-rates-for-eligible-occupation-codes （「Updated 22 July 2025」） | 表內 SOC 2134 標準 going rate「£54,700」 | **£54,700 已驗證**；70% 依原文計算為 **£38,290**，個人檔與 Run 4 寫的「£38,300」是約數（個人檔另引 Appendix Skilled Occupations 的 Option E，本報告未重抓該附錄 → £38,300 這個確切數字：未驗證） |

### 2.2 與 Dennis 目標職類相關的 going rate（官方表，2025-07-22 版）與 New Entrant 下限

New Entrant 下限＝max（£33,400，going rate × 70%），依 2.1 第 4 列原文推算（本報告計算）。**個別職缺會被雇主歸到哪個 SOC：未驗證**——下限因此可能差到約 £5,000。

| SOC | 官方職類（表內列舉的相關職稱） | 標準 going rate | × 70% | New Entrant 下限（本報告計算） |
|---|---|---:|---:|---:|
| 2134 | Programmers and software development professionals | £54,700 | £38,290 | **£38,290** |
| 2133 | IT business analysts, architects and systems designers（含 data engineers） | £54,900 | £38,430 | **£38,430** |
| 2139 | Information technology professionals n.e.c.（含 **DevOps engineers**） | £52,300 | £36,610 | **£36,610** |
| 2135 | Cyber security professionals | £48,500 | £33,950 | **£33,950** |
| 2137 | IT network professionals | £45,600 | £31,920 | **£33,400**（下限墊底） |
| 2136 | IT quality and testing professionals | £41,200 | £28,840 | **£33,400**（下限墊底） |

注意：愛爾蘭 CSOL 的代碼體系不同——CSOL 原文 `2136` "Programmers and software development professionals"、`2139` "All other ICT professionals not elsewhere classified"、`2134` "IT project and programme managers"（visa_facts6 §1.1），而英國 going rates 表的軟體開發是 2134、2136 是 IT quality and testing。兩國代碼**不能互相套用**。

### 2.3 對 Dennis 時間軸的影響（日期依規則 F 推算）

| 項目 | 依官方規則推算 | 說明 |
|---|---|---|
| Graduate visa 期限 | **18 個月**（Dennis 預計 2028 年申請，晚於 2027-01-01） | Run 1–5 的報告標頭都已寫「2027-01-01 起申請者為 18 個月」——**假設正確，前幾輪結論不需更正**。 |
| Graduate visa 起訖（示意） | 若 2028-09-01 前後獲批 → 約 **2030-03-01** 到期（546 天） | 官方：效期自核准日起算；可在學校通報完成課程後、Student visa 到期前申請；通常 8 週內決定。Student visa 實際到期日不在輸入檔中 → 未驗證。 |
| 不需擔保的求職／工作窗口 | **約 18 個月，比舊制 2 年少 6 個月** | 這 18 個月內要找到持牌雇主並轉 Skilled Worker；Graduate visa 不能延長（官方原文）。 |
| New Entrant 折扣可用期 | 總停留（含 Graduate 期間）**≤ 4 年**：若 Graduate 從 2028-09 起用滿 18 個月，折扣薪資的 Skilled Worker 最多再約 30 個月，即最晚約 **2032-09**（2028-09-01 起算 1,461 天） | 之後須達完整 going rate（例：2134 為 £54,700）。Student visa 期間是否計入 4 年：原文只提 Graduate → 未驗證。 |
| New Entrant 資格在不同時點 | **畢業後**（持 Graduate visa）：符合「currently in the UK on a Graduate visa」。**MSc 之前**（2027 年人在台灣、未持過英國 Student／Graduate visa）：只剩「under 26」一條可用，Dennis 年齡不在個人檔 → **未驗證**；若不適用，就必須達完整 going rate 或 £41,700（取高者）。 | 這直接影響「在 MSc 前就入職」型的計畫（Tesco、SSE、Kainos graduate）。 |

### 2.4 對前幾輪結論的影響

1. **Graduate visa 18 個月**：Run 1–5 全部以 18 個月為前提 → **確認，無須修改任何評級**。但「找擔保雇主的窗口只有 18 個月」讓「持牌＋現行對口職缺」的權重更合理；本輪 Top 10 的排序方法（先看持牌與確認開放職缺）因此不變。
2. **£38,300（個人檔、Run 4 規則 G）**：只對 SOC 2134 成立（精確為 £38,290）。對資安職（2135）是 £33,950、DevOps（2139）是 £36,610——**前幾輪拿 £38,300 比較資安或 DevOps 職缺時，高估了門檻**。本輪改用規則 U（依 SOC 列區間），仍只作旗標、不改評級。
3. **Tesco IMS 畢業生計畫（Run 4，£34,000，2027-09-06 開始）**：
   - 若職缺歸 2134：£34,000 比 £38,290 低 **£4,290**（Run 4 寫「差 £4,300」，用的是約數，結論相同）。
   - 若歸 2135（Tesco 計畫含 Cyber Security 線）：£34,000 比 £33,950 **高 £50**，形式上過 new entrant 下限。
   - **但更根本的是資格**：計畫在 MSc 之前開始，Dennis 屆時沒有英國 Student／Graduate visa 紀錄，new entrant 只能靠「under 26」（未驗證）；若不適用，門檻變成 max（£41,700，完整 going rate），£34,000 明顯不足。→ Run 4 對 Tesco 的「時程互斥、擔保存疑」結論**加強**，評級不變（中／中）。
4. **SSE IT & OT Graduate（本輪，£35,000）**：SSE 自己寫「falls below the minimum “New Entrant” salary threshold」。£35,000 低於 2134（£38,290）、2139（£36,610）、2133（£38,430）的下限，但高於 2135（£33,950）——與 SSE 的說法一致的前提是 SSE 把該職歸到 2134／2133／2139（未驗證）。
5. **Kainos Graduate Technologist（£29,000–£32,000）**、**m3 Networks IT Support（£26,000–£32,000）**：都低於 £33,400 的**絕對下限**，不論 SOC 都無法以 Skilled Worker 擔保（另兩者本來就要求既有工作權）。
6. **本輪資深職缺**（Monzo £85,000 起、Lloyds £76,760 起、Wise £68,000 起、SSE Security Architect £59,800 起）都高於相關 SOC 的標準 going rate，薪資不是障礙；障礙在擔保意願、SC 與年資。
7. **JPMorgan 2027 Software Engineer Program（Run 5）**、**Barclays 學徒（Run 5）**、**Revolut／Kainos／SSE 2027 graduate（本輪）**：都在 2027 年入職，與 2028-09 畢業互斥——18 個月的 Graduate visa 不改變這一點；要看的是 **2028 梯次是否接受 2028 畢業生**（全部未驗證）。

### 2.5 其他簽證事實（verifier 引用；本報告未逐字重抓，供第七節歐洲 Top 10 參考）

- **愛爾蘭**：CSOL 列 2133–2137、2139；cloud／DevOps／SRE／security engineer 職稱與 SOC 的對應：**未驗證**（官方文件無此對應）。CSEP 最低薪資：有相關學位 €40,904（另一 DETE 表寫 €40,909，官方兩頁不一致）、近 12 個月畢業 €36,848（另表 €36,849）、不限職業 €68,911；另需 2 年 job offer、雇主 50% 以上員工為 EEA 國民；2026-03-01 起由 €38,000 調升，並「gradual implementation through to 2030」。台灣在 Non-Visa Required 名單（入境仍受審查）；Ireland–Taiwan WHA 18–30 歲、「annual quota of 400 WHAs」（2027 梯次未驗證）。
- **荷蘭**：IND 2026 highly skilled migrant 月薪門檻 30 歲以上 €5,942、30 歲以下 €4,357、reduced salary criterion €3,122；Blue Card €5,942（畢業 3 年內 €4,754）。orientation year 要求學校在至少兩家排名的 top 200——Glasgow 於 2028 年畢業日是否符合：**未驗證**。台灣不在 MVV 豁免名單（原則上需要 MVV）。
- **德國**：Blue Card 2026 依 §18g 與 BBG €101,400 計算為 €50,700／€45,934.20（verifier 自行計算；make-it-in-germany.com 被擋）。§13 SÜG 國家清單本身**未驗證**；官方 Sicherheitsforum 提供的是 §32 SÜG 旅行限制名單（2024-11-07），**沒有 Taiwan**；非官方 2020 版 §13 清單也沒有 Taiwan。台灣不在 §41 AufenthV，原則上需先辦國家簽證。
- **英國其他**：台灣護照（含身分證號）短期免簽但需 ETA（£20）；TB 檢測名單沒有 Taiwan；Student visa differential evidence 名單包含 Taiwan；MSc Software Development 是否需 ATAS：未驗證。
- **對評級的影響**：上述都屬國家層級一般規則，沒有任何一條證明 Dennis 個人符合資格，也沒有雇主層級的擔保證據 → 規則 I、J、L 照舊，**歐洲條目評級不變**（Isar 的 §13 SÜG 仍阻止評「低」，因為 §13 清單本身未驗證）。

---

## 三、評級標準（與 Run 1–5 相同；本輪新增規則另列）

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

## 四、排名表（33 家已評級）

「對口開放職缺」欄的「未檢查」＝入口無法載入或被擋，**不等於沒有職缺**。英國寫 `sponsors_2026-10-09.csv` 登記冊結果；愛爾蘭寫 CSOL／relocation 字樣。適配度與難度各附一句理由（第六節另有逐家說明）。

| 排名 | 組織（#） | 國家／城市 | 適配度 | 適配理由（一句） | 申請難度 | 難度理由（一句） | 簽證／搬遷（簡） | 對口開放職缺（2026-10-12） | 時程 |
|---:|---|---|:-:|---|:-:|---|---|---|---|
| 1 | Monzo（Monzo Bank Limited）（#27） | 英國／London | 高 | 數位銀行，但核心產品是自建軟體平台（規則 R）；Backend Engineer III／Senior Backend Engineer 以 Go 等強型別語言為主，另有 Senior Security Analyst，與 Dennis 的 Go 後端＋資安直接對口。 | 低 | 登記冊直接命中 Monzo Bank Ltd（Skilled Worker×2＋GBM S&S），法人與 CH 09446231 一致（規則 C 滿足），且 Backend Engineer III 原文寫「We can sponsor visas」「We can help you relocate to the UK」——六輪以來對口職缺本身明寫可擔保的第一例。 | UK 登記冊：Monzo Bank Ltd（London）Skilled Worker (A)×2、GBM Senior or Specialist Worker (A)；職缺原文：「We can sponsor visas」 | Backend Engineer III（Cardiff／London／Remote (UK)，£85,000–£110,000）；Senior Backend Engineer（£105,000–£135,000）；Senior Security Analyst（2026-09-15）；Staff／Senior Staff Backend Engineer；Associate Software Engineer - Intern（Summer 2027，不擔保，不計） | Intern 截止 2026-11-01（不擔保、需無限制工作權，不計）；其餘無截止日 |
| 2 | GoCardless（GoCardless Ltd）（#31） | 英國／London | 高 | 支付平台（fintech，規則 R 視為軟體）；Site Reliability Engineer II 屬 Platform Engineering 團隊，tech stack「Python, Ruby, Golang; Terraform … AWS, GCP; Kubernetes, GKE … ArgoCD」與 Dennis 的 Go／Python／雲端平台直接重疊。 | 低 | 有條件的低：登記冊直接命中 GoCardless Limited（Skilled Worker＋GBM S&S），官網頁尾法人 GoCardless Ltd 07495895 一致（規則 C），SRE II 為確認開放的對口職缺且層級（II）接近 Dennis 年資；保留：職缺內文未提 visa／sponsorship／relocation。 | UK 登記冊：GoCardless Limited（London）Skilled Worker (A)、GBM Senior or Specialist Worker (A)；職缺未提 visa | Site Reliability Engineer II（London；首次發佈 2026-06-11、更新 2026-09-23）；Engineering Manager II、Senior Data Scientist（London，非對口）；Data Engineer 只在 Riga／Lisbon | 無截止日；SRE II 首發距檢查日 123 天 |
| 3 | Checkout.com（Checkout Ltd）（#32） | 英國／London | 高 | 支付平台（規則 R）；London 現行 Senior Cloud Security Engineer（AWS/Azure/GCP、SIEM）、Senior Detection & Threat Engineer（SIEM/Sentinel、Python/KQL）、Senior Golang Engineer、Senior Cloud Engineer I——同時對上 Dennis 的 Go、雲端與 SIEM 三條線。 | 低 | 有條件的低：登記冊直接命中 CHECKOUT LTD（Skilled Worker＋GBM S&S），官網 country terms 法人 Checkout Ltd 08037323 一致（規則 C），有多筆確認開放的對口職缺；保留：抽查 6 則未提 visa，Cloud Security「6+ years」、Cloud Engineer「5+ years」貼近或略高於 Dennis 約 5–6 年。 | UK 登記冊：CHECKOUT LTD（London）Skilled Worker (A)、GBM Senior or Specialist Worker (A)；職缺未提 visa | Senior Cloud Security Engineer（2026-09-02）；Senior Detection & Threat Engineer（2026-09-02）；Senior Cyber Security Engineer（2026-09-02，5+ 年 SecOps）；Senior Cloud Engineer I（2026-07-15）；Senior Golang Engineer（2026-08-11）；Software Engineer I（2026-06-10，較初階） | 無截止日（全部標 OnSite、FullTime） |
| 4 | Starling Bank（Starling Bank Limited）（#30） | 英國／London（另 Cardiff／Manchester／Southampton） | 高 | 數位銀行，並以 Engine by Starling 對外銷售銀行軟體平台（規則 R）；Senior Cloud Security Engineer (GCP)（寫明 Python, Go）、Senior Infrastructure Engineer (GCP)（Golang/Java/Python、Zero Trust）、Information Security Analyst – Operations（SIEM、AWS/GCP）直接對口。 | 低 | 有條件的低：登記冊直接命中 STARLING BANK LIMITED（Skilled Worker），官網頁尾法人 09092149 一致，有多筆確認開放的對口職缺；保留：抽查 5 則未提 visa，對口職缺多屬 Engine by Starling，Engine 是否另有聘用法人 verified6 未說明（未驗證）。 | UK 登記冊：STARLING BANK LIMITED（London）Skilled Worker (A)；職缺未提 visa／relocation | Senior Cloud Security Engineer (GCP) – Engine（2026-09-11）；Senior Infrastructure Engineer (GCP) – Engine（2026-09-11）；Staff Infrastructure／Staff Cloud Security (GCP)；Database Reliability Engineer（2026-10-06）；Information Security Analyst – Operations（2026-10-05，3+ 年 in-house SOC）；InfoSec Analyst – SecOps Response（2026-08-24） | 無截止日；Graduate 只有 Sydney（不計） |
| 5 | Version 1（Version 1 Technology Limited）（#35） | 英國／Belfast | 高 | 雲端／企業 IT 顧問；AWS DevOps Engineer（「Python, Java, Golang, TypeScript, React」、CDK/Terraform）、Senior AWS Engineer、Security Consultant 與 Dennis 的 AWS＋Go／TS＋資安背景對口（規則 6：顧問但有工程職稱）。 | 低 | 有條件的低（依本輪新規則 S）：verified6 列出的兩個英國法人 Version 1 Technology Limited（Belfast）與 Version 1 Solutions Limited（Birmingham；Skilled Worker＋GBM）都在冊，任一聘用都有執照，且有確認開放的對口職缺；保留：個別職缺的聘用法人未驗證、抽查 3 則未提 visa／clearance。 | UK 登記冊：Version 1 Technology Limited（Belfast）Skilled Worker (A)；Version 1 Solutions Limited（Birmingham）Skilled Worker (A)、GBM S&S (A) | AWS DevOps Engineer（UK 多地含 Belfast，2026-10-08）；Senior AWS Engineer（2026-10-08）；Security Consultant（2026-10-08）；Data Engineer（2026-10-06）；Security Architect（2026-06-08）；Junior Java Developer（2026-09-11） | 無截止日；Early Careers「Register your interest in Belfast 2027」（2027 梯次，與 2028-09 畢業不合） |
| 6 | Wise（Wise Payments Limited）（#29） | 英國／London | 高 | 跨境支付平台（規則 R）；Platform Engineer - Compute、Backend Engineer、Software Engineer - Recurring Payin（Java/Kotlin、AWS、PostgreSQL）、Senior ML Platform Engineer 等平台／後端職對口。 | 中 | 登記冊直接命中 Wise Payments Limited 且有確認開放的對口職缺，但兩則對口職缺有明文限制：Backend Engineer「only considering local candidates as relocation support is not provided」（只對已有擔保的本地候選人支援轉移），Product Eligibility「unable to support relocation or visa sponsorship」；Platform Engineer 的擔保字樣 verified6 未載，未達規則 K 的「多數」，故 中。 | UK 登記冊：Wise Payments Limited（London）Skilled Worker (A)；兩則職缺明寫不提供 relocation／visa sponsorship；Backend Engineer 寫「For local candidates we are able to support transfer of visa sponsorship」 | Platform Engineer - Compute（2026-09-30）；Backend Engineer（2026-10-08；限本地）；Backend Engineer - Contacts Team（2026-10-02，£68,000–£87,500 + RSUs）；Software Engineer - Recurring Payin（2026-10-02）；Backend Software Engineer - Product Eligibility（2026-09-24；不擔保） | 無截止日 |
| 7 | Data Intellect（Data Intellect Services Limited）（#37） | 英國／Belfast | 高 | 金融資料平台工程顧問；Python Engineer（3–5 年 Python、Kubernetes、Airflow）、AI Engineer (Agentic Systems)、Consultant Data Engineer 對上 Dennis 的 Python 與 AI／Agent 目標職類（規則 6）。 | 中 | 登記冊直接命中 Data Intellect Services Limited（及舊名 AquaQ Analytics，同一 NI607087），法人與官網頁尾一致；但最對口的 Python Engineer 頁面寫 Closing Date 31/07/26 已過（規則 P，不計），AI Engineer／Consultant Data Engineer 的要求 verified6 未列、全標 Mid-Senior，故 中。 | UK 登記冊：Data Intellect Services Limited（Belfast）Skilled Worker (A)；AquaQ Analytics（Belfast）Skilled Worker (A)（同一法人舊名）；UK 職缺未見 visa 字樣 | AI Engineer (Agentic Systems)（2026-08-07）；Consultant Data Engineer（2026-08-11）；Python Engineer. New Product Team.（2026-07-21，Closing 31/07/26 已過但仍掛出）；kdb+ Engineer／Senior kdb+ Engineer（金融時序專門技術） | Python Engineer 截止 2026-07-31（已過，檢查日前 73 天） |
| 8 | Revolut（Revolut Ltd）（#28） | 英國／London（Canary Wharf） | 高 | 金融科技平台（規則 R）；Software Engineer (DevOps) - Observability Platform（Python、K8s/Terraform、Prometheus/Grafana/OpenTelemetry）與 Dennis 的平台方向對口；Engineering 28 個職缺。 | 中 | 登記冊直接命中 Revolut Ltd（Skilled Worker、Scale-up、GBM S&S），但 DevOps 職缺要求 7+ 年（Dennis 約 5–6 年，規則 B）且開放狀態矛盾（官方頁仍在、第三方稱不收件），Graduate Programme 2027 雖寫 visa assistance 但限 2025–2027 畢業（規則 B），沒有可計入的對口職缺。 | UK 登記冊：Revolut Ltd（London）Skilled Worker (A)、Scale-up (A)、GBM S&S (A)；Graduate 原文：「We'll support you with visa assistance…」 | Software Engineer (DevOps) - Observability Platform（7+ 年；狀態待確認）；Graduate Programme 2027: Software Engineer (Java)（限 2025/2026/2027 畢業，資格不符） | Graduate Programme 2027 於 2027 年開始，Dennis 2028-09 畢業 → 不符；2028 梯次：未找到 |
| 9 | Kainos（Kainos Software Limited）（#34） | 英國／Belfast | 高 | 數位服務／軟體公司；Lead／Senior Platform Engineer (AWS)、Senior Platform Engineer – Azure、Senior／Lead Security Engineer、Cloud Platforms Capability Lead 等平台與資安工程職直接對口。 | 中 | 登記冊直接命中 Kainos Software Ltd（Belfast），但 Graduate Technologist 要求「unconditional right to work in the UK」與 SC 資格，Lead Platform (AWS)「requires SC Clearance」、Senior Platform – AWS「Active Security Clearance is required」（規則 T，不計）；Azure 與 Security Engineer 職缺的 SC 要求 verified6 未載，故不到 高、也不給低。 | UK 登記冊：Kainos Software Ltd（Belfast, Antrim）Skilled Worker (A)；Graduate 與兩則 AWS 平台職有 SC／無條件工作權限制 | Lead Platform Engineer (AWS)（2026-09-01，需 SC）；Senior Platform Engineer – AWS（2026-09-01，需 Active SC）；Senior Platform Engineer – Azure（2026-10-09）；Cloud Platforms Capability Lead（Belfast）；Senior／Lead Security Engineer（Birmingham）；Graduate Technologist – August 2027（£29,000–£32,000，資格不符） | Graduate Technologist「August 2027 Start Date」（2026-10-12 發佈、未標截止；只有月份，以 2027-08-01 估，早於 MSc 開學約 31 天）→ 與 MSc 互斥，且資格不符 |
| 10 | Datactics（Datactics Limited）（#36） | 英國／Belfast | 高 | 資料品質軟體產品公司；careers 頁列 DevOps Sys Admin & Security Engineer（sysadmin、security reviews、DevOps），屬平台／資安工程職稱證據（規則 6）。 | 中 | 登記冊直接命中 Datactics（Belfast），但唯一對口職缺的詳情連結失效、無日期，是否仍開放未驗證（不算確認開放），故為「有贊助但缺確認職缺」＝中。 | UK 登記冊：Datactics（Belfast）Skilled Worker (A) | DevOps Sys Admin & Security Engineer（Belfast；詳情連結失效 → 開放狀態未驗證）；Graduate：未找到 | 無日期 |
| 11 | OpenText Cork（Open Text Ireland Limited）（#23） | 愛爾蘭／Cork | 高 | 企業軟體與資安產品；Cork 有大量 SRE／Cloud 職：Sr. SRE（AWS/Linux/K8s）、Lead Cloud Operations Engineer（Python/Go/Bash、K8s/Terraform/AWS/GCP）、Lead／Principal Cloud Systems Engineer 等，直接對口。 | 中 | Cork 35 則職缺中多筆對口且新近、抽查 5 則只要求英文；但抽查未見 visa／relocation 字樣，CSOL 雖列 2136／2139，職稱與 SOC 的對應與 Dennis 資格未驗證（規則 I），且多為 Sr./Lead/Principal 層級，故 中。 | Ireland CSOL：2136／2139 在清單上，職稱對應未驗證；CSEP 門檻（verifier 引用）€40,904；visa／relocation：未找到；UK 姊妹 OPEN TEXT UK LIMITED（Reading）在冊（不計） | Sr. SRE – Cork（2026-09-29，5+ 年）；Lead Cloud Systems Engineer（2026-10-02）；Lead Cloud Operations Engineer（2026-09-10）；Lead SRE（2026-10-05）；Sr. SRE（2026-08-12）；Sr. Cloud Applications Engineer (SRE)（2026-04-01）；Principal Cloud Systems Engineer（2026-09-16）；Associate Consultant（2026-10-08，入門，Java/C#/C++） | 無截止日 |
| 12 | Lloyds Banking Group（Lloyds Bank plc；33 Old Broad St）（#33） | 英國／London | 中 | 職缺層面很對口（Backend Software Engineer「secure Golang microservices」、Senior DevOps／Platform Engineer、Detection & Response Engineer），但本業為傳統銀行，依規則 N 上限判中（與 Run 5 JPMorgan／Barclays 可比）。 | 中 | 登記冊命中 Lloyds Bank plc（Skilled Worker＋GBM S&S），有確認開放的對口職缺（Backend SE 截止 2026-11-01），但 Workday 未標聘用法人、控股 Lloyds Banking Group plc 不在冊，集團其他法人未列舉（規則 C；規則 S 不適用），故不給低。 | UK 登記冊：Lloyds Bank plc（London）Skilled Worker (A)、GBM S&S (A)；Lloyds Banking Group plc：查無；抽查 3 則未提 visa | Backend Software Engineer（London，2026-10-05 發佈，截止 2026-11-01，£76,760–£115,140）；Senior DevOps / Platform Engineer – Autonomous Vulnerability Research（截止 2026-10-13，£72,702–£80,780）；Senior／Lead Detection & Response Engineer（Edinburgh 等，截止 2026-10-17）；Workday「graduate software」0 筆 | Backend SE 截止 2026-11-01；Senior DevOps 2026-10-13；Detection & Response 2026-10-17（見四之二） |
| 13 | Aberdeen Art Gallery（Aberdeen City Council）（#17） | 英國／Aberdeen | 中 | 營運方市議會有 Technology Analyst（core ICT infrastructure、cloud capability、Azure/O365、AD、gateway security），屬 IT 基礎設施／雲端相關但為公部門系統；比照 Run 3 City of Edinburgh Council 判中。 | 中 | 登記冊命中 Aberdeen City Council（Skilled Worker），但唯一對口職缺寫明「all applicants must have the right to live and work in the UK」且未提擔保（規則 T，不計），故為「有贊助但缺可計入的職缺」＝中。 | UK 登記冊：Aberdeen City Council（Aberdeen）Skilled Worker (A)；職缺要求既有英國居住與工作權 | Technology Analyst – ABC13913（Marischal College，永久全職，£40,001–£50,000，2026-10-08 發佈，截止 2026-10-22；需既有工作權 → 不計） | Technology Analyst 截止 2026-10-22（見四之二） |
| 14 | Bitwise Group（Bitwise Limited）（#11） | 英國／Dunfermline（Fife） | 中 | 軟體工程公司，但主業是 safety-critical／embedded（國防、醫療、汽車），不是 cloud／platform（規則 N：嵌入式判中，比照 Cirrus Logic）。 | 中 | 登記冊直接命中 Bitwise Ltd（Dunfermline），但招聘頁明寫「There are currently no open positions」，Teamtailor 板未檢查——有贊助但缺職缺＝中。 | UK 登記冊：Bitwise Ltd（Dunfermline, Fife）Skilled Worker (A)；Bitwise Europe Management Ltd、Bitwise Global（London）為無關近名，不計 | 未找到（招聘頁原文「There are currently no open positions」）；Teamtailor 板 talent.bitwisegroup.com：未檢查 | 無 |
| 15 | Pocket Sized Hands（Pocket Sized Hands Limited）（#15） | 英國／Dundee | 中 | 遊戲 co-development／porting／networking & live-ops，官網寫「Photon, EOS, and custom AWS stacks」，與雲端後端有交集；但現有職缺只有製作人類（規則 6），比照 Run 4 Dundee 遊戲公司判中。 | 中 | 登記冊直接命中 Pocket Sized Hands（Dundee），但目前只開 Head of Production、Producer——有贊助但缺對口職缺＝中。 | UK 登記冊：Pocket Sized Hands（Dundee, Scotland）Skilled Worker (A) | 未找到（Head of Production、Producer，皆非對口） | 無 |
| 16 | Tisalabs（Tisalabs Limited）（#25） | 愛爾蘭／Cork | 中 | 資安與 IoT 工程公司，careers 列 SOFTWARE ENGINEER（distributed computing）與 CYBER SECURITY ENGINEER，方向對口；但 CRO 鏡像標 Micro Company（規模很小，量表「中」）。 | 中 | Run 2 非英國量表：有對口職缺入口且英文即可，但三則職缺無日期、無地點、無個別 URL（可能是常態徵才，開放狀態未驗證），visa／relocation 未找到，CSOL 對應未驗證（規則 I）。 | Ireland CSOL：2136／2139 在清單上，職稱對應未驗證；visa／relocation：未找到；UK 登記冊：無 | SOFTWARE ENGINEER、CYBER SECURITY ENGINEER、AI & MACHINE LEARNING（未標日期；開放狀態未驗證） | 無日期 |
| 17 | SSE plc（#4） | 英國／Perth（多地點含 Glasgow） | 中 | 能源公用事業（規則 N：本業非軟體）；有 Senior Security Architect（AWS/Azure 雲端安全）、OT Security Engineer 等資安職，但 devops、SRE 搜尋皆「No results found」，比照 Run 3 ScottishPower 判中。 | 高 | 雖然登記冊命中 SSE Plc（Perth），但所有對口職缺都帶限制：IT & OT Graduate Programme 原文「SSE is unable to offer visa sponsorship for this role」且「falls below the minimum “New Entrant” salary threshold」，兩個資安職要求 SC vetting「normally includes 5 years UK residency」（規則 E 第二句＋規則 T）→ 高。 | UK 登記冊：SSE Plc（Perth）Skilled Worker (A)；SSE Contracting（Reading）在冊但是否屬集團未驗證，不計；Graduate 明寫不擔保；資安職需 SC | IT & OT Graduate Programme（£35,000，截止 2026-11-01，不擔保）；Senior Security Architect（£59,800–£89,800，截止 2026-10-19，需 SC）；OT Security Engineer（£51,600–£77,400，截止 2026-10-19，需 SC）；Operations Systems Engineer（SSE Renewables，Perth，£54,952–£64,738，截止 2026-10-21；SCADA/OT，非對口） | Graduate 2026-11-01 23:55 GMT（＝2026-11-02 07:55 TST）；資安職 2026-10-19 23:55 BST（＝2026-10-20 06:55 TST）；Ops Systems 2026-10-21 |
| 18 | Cashfac（Cashfac Solutions Limited／Cashfac PLC）（#7） | 英國／Livingston（West Lothian） | 中 | 銀行用 fintech 軟體產品（micro-service Q-API、cloud enabled），Livingston 有 Software Developer、SRE 在職者（LinkedIn 搜尋摘要）；但無職缺、技術棧未驗證，故中。 | 高 | 登記冊查無「Cashfac」任何實體，careers 頁只有公司介紹、沒有職缺列表或申請方式——無贊助且無職缺＝高。 | UK 登記冊：查無 | 未找到（careers 頁無職缺列表）；在職者資料（SRE、Software Developer）是員工資料，不是職缺 | 無 |
| 19 | YoYo Games（YoYo Games Limited；Opera Dundee）（#16） | 英國／Dundee | 中 | GameMaker 遊戲引擎開發商（軟體產品），現屬 Opera；但無現行工程職、技術棧 verified6 未列，比照 Run 4 遊戲公司判中。 | 高 | 登記冊查無 YoYo Games／Opera Norway，Opera 招聘頁 Dundee 明寫「No matching jobs」（gamemaker.io/jobs 為 JS，未檢查）——無贊助且無職缺＝高（比照 Run 4 Hyper Luminal）。 | UK 登記冊：查無（YOYO BUBBLE LTD 為無關近名） | 未找到（jobs.opera.com/locations/dundee 原文「No matching jobs」）；gamemaker.io/en/jobs：未檢查（JS 載入）；最近一筆 Game Programming Intern（2024 夏，已關閉） | 無 |
| 20 | Intelligent Plant（Intelligent Plant Ltd）（#18） | 英國／Aberdeen | 中 | 工業製程／警報資料分析軟體（Industrial App Store），屬能源產業資料平台；但規模很小（第三方稱 1–10 人）、技術棧與職缺未驗證，故中。 | 高 | 登記冊查無，/careers 404、無招聘頁，只有聯絡信箱——無贊助且無招聘管道＝高。 | UK 登記冊：查無 | 未找到（/careers → 404） | 無 |
| 21 | V1 Technologies（V1 Technologies Limited）（#8） | 英國／Livingston（West Lothian） | 中 | 小型網站／App 外包公司（另做 Solar PV 設計等），屬軟體但規模與技術棧未驗證（量表「中」）。 | 高 | 登記冊查無，官網無 careers 頁（/apps/job-finder-app 是推銷的產品）——無贊助且無招聘管道＝高。 | UK 登記冊：查無（V1 Distribution Limited 等為無關近名） | 未找到 | 無 |
| 22 | VMware by Broadcom Cork（VMware International Unlimited Company）（#21） | 愛爾蘭／Cork（Ballincollig） | 中 | 虛擬化與雲端基礎設施軟體，業務與 Dennis 相關；但 Broadcom Workday 386 則中 Cork／Ireland 0 則，唯一 Cork 線索（Staff Security Engineer R026554）只見於搜尋摘要、用 ID 查無，缺工程職稱證據（比照 Run 5 Edgescan 判中）。 | 高 | Run 2 非英國量表：在地無對口職缺或入口＝高；posting 的 visa／relocation 未找到，CSOL 對應未驗證。 | Ireland CSOL：2136／2139 在清單上，職稱對應未驗證；visa／relocation：未找到；UK 姊妹 VMWare UK Limited、Broadcom Europe Limited 在冊（不計） | 未找到（Workday 386 則逐筆掃過，地點含 Cork／Ireland 0 則） | 無 |
| 23 | Trend Micro Cork（Trend Micro (EMEA) Limited）（#22） | 愛爾蘭／Cork | 中 | 資安產品廠商，與 SIEM／偵測背景相關；但 Cork 現行只有 Finance Technology Lead、Payroll Manager、Receptionist 與 Head of Technical Partner Management，工程職多在 Taipei，缺 Cork 工程職稱證據（規則 6）。 | 高 | Run 2 非英國量表：Cork 無對口職缺＝高；visa／relocation 未找到，CSOL 對應未驗證。 | Ireland CSOL：2136／2139 在清單上，職稱對應未驗證；visa／relocation：未找到；UK 姊妹 Trend Micro (UK) Limited 在冊（不計） | 未找到（Cork：Finance Technology Lead R0010260、Payroll Manager、Receptionist、Head of Technical Partner Management R0010222） | 無 |
| 24 | IBM Cork（IBM Ireland Limited）（#24） | 愛爾蘭／Cork | 中 | 軟體與 IT 服務大廠；但 IBM 公開搜尋 API 的 Ireland 8 則中 Cork 0 則，Cork 辦公室地址只見於第三方目錄，缺 Cork 工程職稱證據（規則 6）。 | 高 | Run 2 非英國量表：Cork 無對口職缺＝高；愛爾蘭其他地點只有 Waterford 入門 Linux Kernel 與 Mulhuddart 2027 實習，visa／relocation 未找到。 | Ireland CSOL：2136／2139 在清單上，職稱對應未驗證；visa／relocation：未找到；UK 姊妹 IBM UK Ltd 在冊（不計） | 未找到（Cork 0 則）；Ireland 其他：Linux Kernel OS Developer（Waterford，Entry Level）、Software Developer Intern 2027（Mulhuddart） | Intern 2027（Mulhuddart）：日期未載，與 MSc 時程不合（判斷） |
| 25 | Net Zero Technology Centre（Net Zero Technology Centre Limited）（#19） | 英國／Aberdeen | 低 | 能源轉型創新中心；scout 的「數位專案」是推論，verified6 沒有任何 IT／軟體職缺或團隊證據（規則 2：資料不足，不是確認沒有 IT 職缺；比照 Run 3 Nova Innovation）。 | 中 | 登記冊直接命中 Net Zero Technology Centre Limited（Aberdeen），但 Careers Hub 明寫「There are currently no open positions」——有贊助但缺職缺＝中。 | UK 登記冊：Net Zero Technology Centre Limited（Aberdeen）Skilled Worker (A) | 官方明示目前無職缺（「There are currently no open positions matching " "」） | 無 |
| 26 | ComTech IT（ComTech IT Ltd）（#2） | 英國／Stirling | 低 | 小型託管 IT（SME 桌面／M365 支援），職級為 Modern Apprentices／IT Technician／Senior Technician，屬管理式 IT（量表「低」）。 | 高 | 登記冊查無（Comtech IT Services Limited, Northampton 是另一家 07373702），官網無 careers 頁、無公開職缺——無贊助且無招聘管道＝高。 | UK 登記冊：查無 | 未找到 | 無 |
| 27 | Control IT Solutions（Control IT Solutions Ltd）（#5） | 英國／Perth（另有 Glasgow 辦公室） | 低 | MSP／helpdesk 型託管 IT；過去招聘的是 IT Helpdesk Team Lead、First Line Helpdesk Engineer（搜尋摘要），屬管理式 IT（量表「低」）。 | 高 | 登記冊查無，官網無 careers 頁、無現行職缺——無贊助且無招聘管道＝高。 | UK 登記冊：查無 | 未找到（第三方招聘商的舊貼文不算現行職缺） | 無 |
| 28 | m3 Networks（M3 Networks Limited）（#6） | 英國／Perth（另有 Edinburgh 辦公室） | 低 | 網路與託管 IT；唯一可見職缺是 Onsite IT Support Technician（Kingskettle, Fife，12 個月合約），屬 IT 支援（量表「低」）。 | 高 | 登記冊查無；唯一職缺原文「Candidates must have the right to work in the UK and hold a full UK driving licence」（規則 T），且只見於搜尋摘要（直接開啟 403）——高。 | UK 登記冊：查無 | Onsite IT Support Technician（£26,000–£32,000；搜尋摘要；直接抓取 403 → 未檢查原頁） | 無日期 |
| 29 | Targeted Software Solutions（Targeted Software Solutions Limited）（#9） | 英國／Livingston（West Lothian） | 低 | CH 最新帳目「Average number of employees: 1」、董事 1 名、找不到網站——實質是個人顧問公司，業務內容資料不足（規則 2）。 | 高 | 不是可應徵的雇主：一人公司、無網站、無招聘、登記冊查無。 | UK 登記冊：查無 | 未找到（一人公司） | 無 |
| 30 | The Stirling Smith Art Gallery & Museum（Stirling Smith Art Gallery & Museum Trust）（#3） | 英國／Stirling | 低 | 小型博物館（OSCR：10 名員工），沒有 IT 職缺或團隊證據（規則 2：資料不足）。 | 高 | 登記冊查無；官網原文「there are no vacancies at present」——無贊助且無職缺＝高（比照 Run 3 National Galleries of Scotland）。 | UK 登記冊：查無 | 官方明示無職缺（「Thank you for your interest in joining our team, there are no vacancies at present.」） | 無 |
| 31 | V&A Dundee（Design Dundee Limited）（#13） | 英國／Dundee | 低 | 博物館；官方職缺頁沒有任何職缺，scout 的「數位、IT 與票務系統」是推論，無 IT 職缺證據（規則 2）。 | 高 | 登記冊查無 Design Dundee（London 的 Victoria and Albert Museum 是另一法人，不計），官方職缺頁無職缺——無贊助且無職缺＝高。 | UK 登記冊：查無 Design Dundee；Victoria and Albert Museum（London）不計 | 未找到（職缺頁只有介紹文字） | 無 |
| 32 | The McManus（Leisure & Culture Dundee）（#14） | 英國／Dundee | 低 | 博物館；myjobscotland 上只有 Visitor Assistant Casual、Sports Development Officer 等非 IT 職（規則 2）。 | 高 | 登記冊查無 Leisure & Culture Dundee／McManus，且無 IT 職缺——無贊助且無對口職缺＝高。 | UK 登記冊：查無（McManus Contracts 等為無關近名） | 未找到（Visitor Assistant Casual DEE06738，截止 2026-11-01，非 IT） | Visitor Assistant 截止 2026-11-01（非 IT，僅記錄） |
| 33 | VTSL Ireland（VTSL Ireland Limited）（#26） | 愛爾蘭／Cork | 低 | 電信／VoIP 服務商；列出的職缺是 VoIP Network Engineer（3+ 年 VoIP、BGP）、安裝工程師與業務，屬網路／託管服務，無軟體或雲端平台職（量表「低」）。 | 高 | careers 頁寫「we are recruiting staff to join our team in Wandsworth」（London），不像 Cork 職缺；UK 登記冊查無 VTSL（含母公司 VTSL Ltd）；visa／relocation 未找到——高。 | Ireland CSOL：網路工程類是否被歸入：未驗證；UK 登記冊：查無；visa／relocation：未找到 | 未找到（VoIP Network Engineer、Junior/IP Telecommunications Installation Engineer、Business Development Manager、Customer Success Executive；未標日期與地點） | 無日期 |

等級分布：高／低 5（Monzo、GoCardless、Checkout.com、Starling、Version 1）；高／中 6；中／中 5；中／高 8；低／中 1；低／高 8。（5＋6＋5＋8＋1＋8＝33）

同級排序說明（判斷，差距不大；Run 3 規則 5）：高／低 內依證據強度——Monzo（職缺明寫可擔保）> GoCardless（層級 II、技術棧最直接）> Checkout.com（多筆資安／SIEM／Go，但多為 Senior）> Starling（Engine 聘用法人未驗證）> Version 1（依規則 S）。高／中 內，英國且持牌者在前，依「確認開放對口職缺的可計入程度」排列，OpenText Cork（非英國）殿後。中／中、中／高 內英國持牌者在前，愛爾蘭殿後。

---

## 四之二、時程與截止日（規則 F；本輪全部有日期的入口）

計算基準：檢查日 **2026-10-12**；MSc 暫定 **開學 2027-09-01**、**畢業 2028-09-01**；Graduate visa 最早約 2028-09 起（第二節）。天數＝日期相減；月數約＝天數÷30.44。時區換算：GMT／BST 截止時間轉成 TST（UTC+8）。「早於資格」指：截止或入職時 Dennis 尚無英國工作權（MSc 前）或無法以學生身分全職受僱（MSc 期間）。

### 本輪（Run 6）有日期的入口

| 入口（#） | 截止／日期 | 檢查日起 | 距開學 2027-09-01 | 距畢業 2028-09-01 | Dennis 資格 |
|---|---|---:|---:|---:|---|
| Lloyds Senior DevOps / Platform Engineer – Autonomous Vulnerability Research（#33；Manchester／Bristol／Edinburgh／London） | 2026-10-13 | 1 天 | 323 天（約 10.6 個月） | 689 天（約 22.6 個月） | **早於資格**：MSc 前、無英國工作權；且為 Senior |
| Lloyds Senior Detection & Response Engineer（#33；非 London） | 2026-10-17 | 5 天 | 319 天 | 685 天 | **早於資格** |
| SSE Senior Security Architect、OT Security Engineer（#4） | 2026-10-19 23:55 BST＝**2026-10-20 06:55 TST** | 7 天 | 317 天 | 683 天 | **早於資格**；另需 SC（「normally includes 5 years UK residency」，規則 T）——即使在畢業後也不可能符合 |
| SSE Operations Systems Engineer（#4；Perth；偏 SCADA／OT） | 2026-10-21 | 9 天 | 315 天 | 681 天 | **早於資格**；職類偏 OT（適配低） |
| Aberdeen City Council Technology Analyst – ABC13913（#17） | 2026-10-22 | 10 天 | 314 天 | 680 天 | **早於資格**；明寫需已有在英國居住與工作的權利 |
| Add Energy／ABL Contracts Specialist（#20，已排除；London，Legal） | 2026-10-22 | 10 天 | 314 天 | 680 天 | 非技術職，與 Dennis 無關（僅列出以求完整） |
| **SSE IT & OT Graduate Programme**（#4；£35,000） | 2026-11-01 23:55 GMT＝**2026-11-02 07:55 TST** | 20 天（TST 為 21 天） | 304 天（約 10.0 個月） | 670 天（約 22.0 個月） | **早於資格**；SSE 明寫「unable to offer visa sponsorship」；入職屬 2027 梯次（確切日期未驗證），與 2028-09 畢業不合 |
| **Lloyds Backend Software Engineer**（#33；London；Go；£76,760–£115,140） | 2026-11-01 | 20 天 | 304 天 | 670 天 | **早於資格**：MSc 前、無英國工作權；本輪英國最對口的單一職缺，只作招聘習慣參考 |
| Monzo Associate Software Engineer - Intern（#27；Summer 2027；£42,500 pro rata） | 2026-11-01 | 20 天 | 304 天 | 670 天 | **早於資格**：實習在 2027 夏（MSc 前），需無限制工作權、不擔保 |
| The McManus Visitor Assistant Casual DEE06738（#14） | 2026-11-01 | 20 天 | 304 天 | 670 天 | 非 IT 職，與 Dennis 無關（僅列出以求完整） |
| Kainos Graduate Technologist（#34） | 「August 2027 Start Date」（以 2027-08-01 估；未標截止） | 293 天 | **開學前約 31 天** | 397 天 | **早於資格且與 MSc 互斥**；另需「unconditional right to work in the UK」 |
| Revolut Graduate Programme 2027（#28） | 2027 年開始（確切日期未驗證） | — | — | — | **資格不符**：限 2025–2027 畢業；2028 梯次未找到 |
| Version 1 Early Careers「Belfast 2027」登記興趣（#35） | 2027 梯次（日期未標） | — | — | — | 2027 梯次與 2028-09 畢業不合；未見開放職缺 |
| Data Intellect Python Engineer（#37） | Closing Date 31/07/26（＝2026-07-31） | **−73 天（已過）** | 397 天 | 763 天 | 已過期，不計（規則 P）；頁面仍掛出（第九節） |
| 現行職缺快照（所有無截止日的職缺） | 2026-10-12 | 0 | 324 天（約 10.6 個月） | 690 天（約 22.7 個月） | 只代表招聘習慣，不代表到時仍開放 |

### 前幾輪仍未到期的入口（沿用前幾輪報告，本輪未重新查核）

| 入口（輪次） | 截止 | 檢查日起 | 距開學 | 距畢業 | Dennis 資格 |
|---|---|---:|---:|---:|---|
| JPMorgan 2027 Software Engineer Program（Run 5） | 2026-11-01 23:55 UTC＝2026-11-02 07:55 TST | 21 天 | 303 天 | 669 天 | 要求 2027-09 前畢業 → **不符** |
| Baillie Gifford 2027 暑期實習（Run 4） | 2026-11-03 | 22 天 | 302 天 | 668 天 | 要求倒數第二年學生 → **不符** |
| ScottishPower Data Analytics Graduate（Run 3） | 2026-11-08 | 27 天 | 297 天 | 663 天 | 2027 梯次 → **早於資格** |
| Lloyds Banking Group Software Engineer Graduate Scheme（Run 4；Edinburgh；£48,500） | End Date 2026-11-28（另頁稱 29 Nov） | 47 天 | 277 天 | 643 天 | 頁面明寫「We cannot sponsor visas」；2027 梯次 → **早於資格且不擔保** |
| bol Expert SE – Product Finance（Run 5，荷蘭） | validThrough 2026-11-15 | 34 天 | 290 天 | 656 天 | **早於資格**（MSc 前） |
| Tesco IMS Technology 畢業生計畫（Run 4；£34,000） | 截止 2026-12-22；開始 2027-09-06 | 71 天 | 253 天（計畫在開學後 5 天開始） | 619 天（計畫開始距畢業 361 天） | **與 MSc 互斥**；new entrant 資格也存疑（第二節 2.4） |
| WithSecure Threat Intelligence Researcher（Run 5，Helsinki） | 2026-12-30 | 79 天 | 245 天 | 611 天 | **早於資格** |
| ScottishPower Renewables Cyber Security Graduate（Run 3） | 2027-01-03 | 83 天 | 241 天 | 607 天 | 2027 梯次 → **早於資格** |
| WithSecure Incident Response Investigator（Run 5，London／Remote） | 2027-01-31 | 111 天 | 213 天 | 579 天 | **早於資格**（英國職缺，MSc 前） |

### 結論

- **本輪所有帶日期的入口都早於 Dennis 具備英國全職工作資格的時間**：最晚的本輪截止（2026-11-01）距開學 304 天、距畢業 670 天；跨輪最晚的 WithSecure London（2027-01-31）也早於開學 213 天。
- **所有 graduate 梯次都是 2027 年入職**（SSE、Kainos 2027-08、Revolut 2027、Version 1 Belfast 2027；前幾輪的 JPMorgan、ScottishPower、Tesco），與 2028-09 畢業不合。要看的是 **2028 梯次**：依本輪觀察到的節奏（SSE、Lloyds、Monzo intern、JPMorgan 都在 10–11 月截止），2028 梯次可能在 2027 年秋季（Dennis MSc 第一學期）開放——這是推論，**未驗證**。
- 實際可用窗口：Graduate visa 18 個月（約 2028-09 至 2030-03，第二節），期間要轉到持牌雇主；New Entrant 薪資折扣最晚約到 2032-09（4 年上限，含 Graduate 期間）。

---

## 五、排除／存疑

### 排除／存疑公司：5 家（不排名；參考評級不計入第一節的分布）

| # | 組織 | 地點 | verified6 判定 | 排除理由（取自 verified6.md） | 參考評級（適配／難度；僅供參考） | 來源 |
|---:|---|---|---|---|---|---|
| 1 | Developing IT Ltd（品牌 Optiseller） | Stirling | 疑似已停業 | Companies House SC277442 狀態 Liquidation：法院強制清算，winding-up 2025-07-22 開始（provisional liquidator 2025-07-08 指派、court order 2025-07-25）；註冊地址已遷到清算人 FRP Advisory（Glasgow）。Optiseller 產品是否由其他實體延續：未驗證（CH 查無 Optiseller 公司）。 | 低／高（清算中、無招聘頁、登記冊查無；僅供參考） | https://find-and-update.company-information.service.gov.uk/company/SC277442/insolvency |
| 10 | Forbytes | Kirkcaldy（Dysart） | 疑似已停業（英國據點） | 英國法人 FORBYTES LTD SC570512 已於 2021-08-10 解散（最後報表 2019-12-31）；品牌仍營運，但官網聯絡資訊只列 USA Boston、Poland Wroclaw、Ukraine Lviv、Estonia Tallinn，沒有英國據點。現行 Backend Developer（Poland／Sweden／Ukraine／USA，2026-06-16）的 Requirements 實為 Full Stack .NET（C#、AspDotNetStorefront），有「Relocation compensation」但沒提 visa。 | 中／高（非英國 .NET 職缺不對口；Blue Card 未提；僅供參考） | https://find-and-update.company-information.service.gov.uk/company/SC570512 ；https://forbytes.com/contacts/ ；https://forbytes.com/vacancies/backend-developer/ |
| 12 | Renovite Technologies Ltd | Dunfermline | 疑似已停業 | CH 06964983 於 2026-09-23 經 members' voluntary liquidation 解散（2025-09-10 決議、2026-06-23 最終會議）；官網連不上（curl 000、WebFetch 500）。母公司 Renovite Technologies, Inc. 2022 年被 J.P. Morgan 收購並併入 J.P. Morgan Payments；Dunfermline 員工是否轉到 JPMorgan 旗下法人：未驗證——因此不把 JPMorgan 的登記冊結果算到本列。 | 低／高（法人已解散；僅供參考） | https://find-and-update.company-information.service.gov.uk/company/06964983 ；https://www.jpmorganchase.com/ir/news/2022/jpm-to-acquire-renovite-technologies-inc |
| 20 | Add Energy（ADD ENERGY SCOTLAND LIMITED） | Aberdeen | 存疑 | CH SC381346 仍 Active，但品牌已停用：addenergy.no 轉到 ABL「Add Energy has been integrated into two ABL Group companies…」；ABL Group ASA 的 PSC 身分 2026-04-09 終止，現任 PSC 為 Add Latent Limited；是否仍有實際營運與員工：未驗證。業務是工程顧問（SIC 71122），不是軟體。ABL Tribepad 板上英國只有 Contracts Specialist（London，截止 2026-10-22）。登記冊上的 ABL Energy & Marine Consultants Limited 不是本列法人，不計。 | 低／高（工程顧問、無對口職缺、登記冊查無；僅供參考） | https://find-and-update.company-information.service.gov.uk/company/SC381346 ；https://abl-group.com/add-energy-has-moved/ ；https://abl-group.tribepad.com/v2/vacancies |
| 38 | Spirit Telecom Group Ltd | Glasgow | 存疑 | 現行法人 SC846002（2025-04-22 新設，唯一董事 James MOORE，資本 £1）；前身 SPIRIT TELECOM LTD SC722591 同日遭強制除名解散，兩者董事相同（業務延續屬推論，未驗證）。官網內容停在 2023-10、頁尾「Copyright © 2015」、地址仍為舊址；/careers 404；登記冊查無。 | 低／高（無招聘管道、登記冊查無；僅供參考） | https://find-and-update.company-information.service.gov.uk/company/SC846002 ；https://find-and-update.company-information.service.gov.uk/company/SC722591/filing-history ；https://www.spirittelecom.co.uk/ |

**參考評級的意思**：假如該公司仍以現有型態營運，依第三節標準會得到的評級；只為讓讀者知道排除前的相對位置，**不計入分布、排名與 Top 10**（規則 V）。若日後證實仍在營運，應重新查核後再納入。

### 保留評級但附重大保留的條目

- **Version 1（第 5）**：「低」完全依賴新規則 S（兩個英國法人都在冊）；若某職缺由其他未列出的集團法人聘用，就退回 中。
- **Starling（第 4）**：對口職缺多屬 Engine by Starling；Engine 是否另有聘用法人：未驗證。若另有且不在冊，退回 中。
- **Monzo、Starling（第 1、4）**：屬規則 R 的邊界案例（SIC 64191 Banks）；若改依 SIC 套規則 N，兩者為 中／低。
- **Wise（第 6）**：部分職缺明寫只考慮本地候選人或無法擔保；Platform Engineer - Compute 的擔保字樣：未驗證。
- **Lloyds（第 12）**：Go 後端職缺最對口，但聘用法人未標示（規則 C），且 Run 4 曾記錄 LBG 職缺「We cannot sponsor visas」（第九節）。
- **OpenText Cork（第 11）**：CSOL 職稱對應、relocation 都未驗證。

### 不計入的職缺／計畫（公司仍評級，但這些職缺不算「對口開放職缺」）

| 職缺／計畫（#） | 不計理由 | 依據 |
|---|---|---|
| SSE IT & OT Graduate Programme（#4） | 原文「SSE is unable to offer visa sponsorship for this role」；薪資「falls below the minimum “New Entrant” salary threshold」；2027 梯次 | 規則 F、T（明文不擔保） |
| SSE Senior Security Architect、OT Security Engineer（#4） | SC vetting「The criteria normally includes 5 years UK residency」 | 規則 T |
| SSE Operations Systems Engineer（#4） | 偏 SCADA／OT，非 Dennis 職類 | 規則 B |
| Kainos Graduate Technologist（#34） | 「unconditional right to work in the UK」＋SC 資格；August 2027 開始 | 規則 F、T |
| Kainos Lead Platform (AWS)、Senior Platform – AWS（#34） | 「requires SC Clearance」／「Active Security Clearance」 | 規則 T |
| Revolut Software Engineer (DevOps) - Observability Platform（#28） | 要求 7+ 年（Dennis 約 5–6 年）；開放狀態矛盾（官方頁仍在、第三方稱不收件） | 規則 B、P |
| Revolut Graduate Programme 2027（#28） | 限 2025–2027 畢業 | 規則 B、F |
| Monzo Associate Software Engineer - Intern（#27） | Summer 2027（MSc 前）；需無限制工作權、不擔保 | 規則 F、T |
| Wise Backend Engineer（2026-10-08）、Backend Software Engineer - Product Eligibility（#29） | 前者「only considering local candidates as relocation support is not provided」；後者「unable to support relocation or visa sponsorship」 | 規則 T（明文限制） |
| Aberdeen City Council Technology Analyst – ABC13913（#17） | 「all applicants must have the right to live and work in the UK」；2026-10-22 截止 | 規則 T |
| Data Intellect Python Engineer（#37） | Closing Date 31/07/26 已過（頁面仍掛出） | 規則 P |
| Lloyds 畢業生頁（#33） | 頁面以 JS 載入 → **未檢查**（不是沒有計畫） | — |
| m3 Networks Onsite IT Support Technician（#6；£26,000–£32,000） | 「Candidates must have the right to work in the UK and hold a full UK driving licence」；只見於搜尋摘要（原頁 403）；薪資低於 £33,400 | 規則 T、U |
| Starling Graduate Software Engineer – Engine（#30） | 地點 Sydney, Australia，非英國 | 規則 B（地點） |
| Datactics DevOps Sys Admin & Security Engineer（#36） | 詳情連結失效、無日期 → 開放狀態未驗證（不算確認開放） | 規則 P |

---

## 六、逐家說明（依排名；適配度與難度各附一句理由）

「公司簡介」取自 verified6.md；「未檢查」＝入口無法載入或被擋，不等於沒有職缺。檢查日皆為 2026-10-12。台灣護照相關資格一律「未驗證」（verified6 的簽證事實一節只涵蓋英國／愛爾蘭／荷蘭／德國的一般規定，沒有任何雇主層級的台灣資格資料）。

### 1. Monzo（Monzo Bank Limited）（scout #27）｜英國／London

- **公司簡介**：MONZO BANK LIMITED，CH 09446231，Active，2015-02-18 成立，Broadwalk House, 5 Appold Street, London EC2A 2AG；SIC 64191 Banks；前名 FOCUS FS LIMITED；帳目做到 2026-03-31。Greenhouse 公開 board 共 68 則。Scout 的 uncertain（Maps 無網站）已由 verified6 解決（官網 monzo.com）。
- **適配度：高**：數位銀行，但核心產品是自建軟體平台（規則 R）；Backend Engineer III／Senior Backend Engineer 以 Go 等強型別語言為主，另有 Senior Security Analyst，與 Dennis 的 Go 後端＋資安直接對口。
- **申請難度：低**：登記冊直接命中 Monzo Bank Ltd（Skilled Worker×2＋GBM S&S），法人與 CH 09446231 一致（規則 C 滿足），且 Backend Engineer III 原文寫「We can sponsor visas」「We can help you relocate to the UK」——六輪以來對口職缺本身明寫可擔保的第一例。
- **簽證／搬遷**：UK 登記冊：Monzo Bank Ltd（London）Skilled Worker (A)×2、GBM Senior or Specialist Worker (A)；職缺原文：「We can sponsor visas」；台灣護照相關資格：未驗證
- **對口開放職缺**：Backend Engineer III（Cardiff／London／Remote (UK)，£85,000–£110,000）；Senior Backend Engineer（£105,000–£135,000）；Senior Security Analyst（2026-09-15）；Staff／Senior Staff Backend Engineer；Associate Software Engineer - Intern（Summer 2027，不擔保，不計）
- **語言**：未見語言要求
- **時程**：Intern 截止 2026-11-01（不擔保、需無限制工作權，不計）；其餘無截止日
- **備註**：為何給「低」：同時具備登記冊直接命中、法人一致、確認開放的對口職缺，且對口職缺本身明寫可擔保與協助搬遷——證據強度高於 Run 4 FanDuel（FanDuel 職缺未寫擔保）。
- **備註**：適配度判「高」依規則 R（本輪新增）：Monzo 持銀行執照（SIC 64191），若機械套用規則 N（銀行本業上限中），會是 中／低。這是本輪的邊界判斷，見第十節。
- **備註**：實習（Associate Software Engineer - Intern，£42,500 pro rata，截止 2026-11-01）原文要求在英國有無限制工作權、實習不擔保——對 Dennis 不適用（規則 T）。
- **備註**：薪資旁註：Backend Engineer III 下限 £85,000 遠高於 SOC 2134 標準 going rate £54,700（第二節）；只作旗標，不改評級。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/09446231 ；https://boards-api.greenhouse.io/v1/boards/monzo/jobs ；https://job-boards.greenhouse.io/monzo/jobs/6635595 ；https://job-boards.greenhouse.io/monzo/jobs/6635837 ；https://job-boards.greenhouse.io/monzo/jobs/8204229 ；https://job-boards.greenhouse.io/monzo/jobs/8156261 ；sponsors_2026-10-09.csv

### 2. GoCardless（GoCardless Ltd）（scout #31）｜英國／London

- **公司簡介**：GOCARDLESS LTD，CH 07495895，Active，2011-01-17 成立，Sutton Yard, 65 Goswell Road, London EC1V 7EN；SIC 62090；FCA 597190。另有 GOCARDLESS HOLDINGS (UK) LTD 15938440（2024-09-05 成立，同地址）。職缺自述「GoCardless, a Mollie company」。Greenhouse 公開 API 共 31 筆。
- **適配度：高**：支付平台（fintech，規則 R 視為軟體）；Site Reliability Engineer II 屬 Platform Engineering 團隊，tech stack「Python, Ruby, Golang; Terraform … AWS, GCP; Kubernetes, GKE … ArgoCD」與 Dennis 的 Go／Python／雲端平台直接重疊。
- **申請難度：低**：有條件的低：登記冊直接命中 GoCardless Limited（Skilled Worker＋GBM S&S），官網頁尾法人 GoCardless Ltd 07495895 一致（規則 C），SRE II 為確認開放的對口職缺且層級（II）接近 Dennis 年資；保留：職缺內文未提 visa／sponsorship／relocation。
- **簽證／搬遷**：UK 登記冊：GoCardless Limited（London）Skilled Worker (A)、GBM Senior or Specialist Worker (A)；職缺未提 visa；台灣護照相關資格：未驗證
- **對口開放職缺**：Site Reliability Engineer II（London；首次發佈 2026-06-11、更新 2026-09-23）；Engineering Manager II、Senior Data Scientist（London，非對口）；Data Engineer 只在 Riga／Lisbon
- **語言**：未見語言要求（Riga 客服職要法語，與工程無關）
- **時程**：無截止日；SRE II 首發距檢查日 123 天
- **備註**：比照 Run 4 FanDuel 的有條件低：持牌＋法人一致＋確認開放的對口職缺，但職缺沒寫擔保。
- **備註**：SRE II 首次發佈 2026-06-11（檢查日前 123 天），9 月仍有更新，照計（規則 P）。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/07495895 ；https://boards-api.greenhouse.io/v1/boards/gocardless/jobs ；https://job-boards.greenhouse.io/gocardless/jobs/7996584 ；sponsors_2026-10-09.csv

### 3. Checkout.com（Checkout Ltd）（scout #32）｜英國／London

- **公司簡介**：CHECKOUT LTD，CH 08037323，Active，2012-04-19 成立，Wenlock Works, Shepherdess Walk, London N1 7BQ；SIC 64999；FCA EMI 900816。Ashby 公開 posting API 共 162 筆；Early Careers 頁連結未展開（未檢查）。
- **適配度：高**：支付平台（規則 R）；London 現行 Senior Cloud Security Engineer（AWS/Azure/GCP、SIEM）、Senior Detection & Threat Engineer（SIEM/Sentinel、Python/KQL）、Senior Golang Engineer、Senior Cloud Engineer I——同時對上 Dennis 的 Go、雲端與 SIEM 三條線。
- **申請難度：低**：有條件的低：登記冊直接命中 CHECKOUT LTD（Skilled Worker＋GBM S&S），官網 country terms 法人 Checkout Ltd 08037323 一致（規則 C），有多筆確認開放的對口職缺；保留：抽查 6 則未提 visa，Cloud Security「6+ years」、Cloud Engineer「5+ years」貼近或略高於 Dennis 約 5–6 年。
- **簽證／搬遷**：UK 登記冊：CHECKOUT LTD（London）Skilled Worker (A)、GBM Senior or Specialist Worker (A)；職缺未提 visa；台灣護照相關資格：未驗證
- **對口開放職缺**：Senior Cloud Security Engineer（2026-09-02）；Senior Detection & Threat Engineer（2026-09-02）；Senior Cyber Security Engineer（2026-09-02，5+ 年 SecOps）；Senior Cloud Engineer I（2026-07-15）；Senior Golang Engineer（2026-08-11）；Software Engineer I（2026-06-10，較初階）
- **語言**：未見語言要求
- **時程**：無截止日（全部標 OnSite、FullTime）
- **備註**：Senior Detection & Threat Engineer 與 Senior Golang Engineer 的年資要求 verified6 未列，屬年資最不受限的對口職缺。
- **備註**：Early Careers 頁未展開：是否有 2028 年可接上的計畫，未檢查。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/08037323 ；http://www.checkout.com/legal/country-terms ；https://api.ashbyhq.com/posting-api/job-board/checkout.com ；sponsors_2026-10-09.csv

### 4. Starling Bank（Starling Bank Limited）（scout #30）｜英國／London（另 Cardiff／Manchester／Southampton）

- **公司簡介**：STARLING BANK LIMITED，CH 09092149，Active，2014-06-18 成立，5th Floor London Fruit And Wool Exchange, 1 Duval Square, London E1 6PW；SIC 64191 Banks；PRA/FCA 730166。Workable 公開職缺 90 筆（2026-10-09 仍有新職缺）。
- **適配度：高**：數位銀行，並以 Engine by Starling 對外銷售銀行軟體平台（規則 R）；Senior Cloud Security Engineer (GCP)（寫明 Python, Go）、Senior Infrastructure Engineer (GCP)（Golang/Java/Python、Zero Trust）、Information Security Analyst – Operations（SIEM、AWS/GCP）直接對口。
- **申請難度：低**：有條件的低：登記冊直接命中 STARLING BANK LIMITED（Skilled Worker），官網頁尾法人 09092149 一致，有多筆確認開放的對口職缺；保留：抽查 5 則未提 visa，對口職缺多屬 Engine by Starling，Engine 是否另有聘用法人 verified6 未說明（未驗證）。
- **簽證／搬遷**：UK 登記冊：STARLING BANK LIMITED（London）Skilled Worker (A)；職缺未提 visa／relocation；台灣護照相關資格：未驗證
- **對口開放職缺**：Senior Cloud Security Engineer (GCP) – Engine（2026-09-11）；Senior Infrastructure Engineer (GCP) – Engine（2026-09-11）；Staff Infrastructure／Staff Cloud Security (GCP)；Database Reliability Engineer（2026-10-06）；Information Security Analyst – Operations（2026-10-05，3+ 年 in-house SOC）；InfoSec Analyst – SecOps Response（2026-08-24）
- **語言**：未見語言要求
- **時程**：無截止日；Graduate 只有 Sydney（不計）
- **備註**：規則 R 的邊界案例：持銀行執照；若改套規則 N，為 中／低。
- **備註**：InfoSec Analyst – Operations 要求「3+ years … in-house SOC」：Dennis 的 SIEM 經驗是否等同 in-house SOC 年資：未驗證。
- **備註**：若證實 Engine 職缺由另一未持牌法人聘用 → 應改 中。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/09092149 ；https://www.starlingbank.com/careers/ ；https://apply.workable.com/api/v1/widget/accounts/starling-bank ；https://apply.workable.com/j/8B0D88C52C ；https://apply.workable.com/j/D10215A026 ；https://apply.workable.com/j/5C0C4DAAD7 ；sponsors_2026-10-09.csv

### 5. Version 1（Version 1 Technology Limited）（scout #35）｜英國／Belfast

- **公司簡介**：VERSION 1 TECHNOLOGY LIMITED，CH NI058529，Active，2006-03-20 成立，Lanyon Plaza, Belfast BT1 3LP；SIC 62020。另一英國法人 VERSION 1 SOLUTIONS LIMITED，CH 03438874，Active，1997-09-24 成立，Birmingham（曾用名 PATECH SOLUTIONS LIMITED）。SmartRecruiters 公開 API 共 171 筆。官網未找到公司編號。
- **適配度：高**：雲端／企業 IT 顧問；AWS DevOps Engineer（「Python, Java, Golang, TypeScript, React」、CDK/Terraform）、Senior AWS Engineer、Security Consultant 與 Dennis 的 AWS＋Go／TS＋資安背景對口（規則 6：顧問但有工程職稱）。
- **申請難度：低**：有條件的低（依本輪新規則 S）：verified6 列出的兩個英國法人 Version 1 Technology Limited（Belfast）與 Version 1 Solutions Limited（Birmingham；Skilled Worker＋GBM）都在冊，任一聘用都有執照，且有確認開放的對口職缺；保留：個別職缺的聘用法人未驗證、抽查 3 則未提 visa／clearance。
- **簽證／搬遷**：UK 登記冊：Version 1 Technology Limited（Belfast）Skilled Worker (A)；Version 1 Solutions Limited（Birmingham）Skilled Worker (A)、GBM S&S (A)；台灣護照相關資格：未驗證
- **對口開放職缺**：AWS DevOps Engineer（UK 多地含 Belfast，2026-10-08）；Senior AWS Engineer（2026-10-08）；Security Consultant（2026-10-08）；Data Engineer（2026-10-06）；Security Architect（2026-06-08）；Junior Java Developer（2026-09-11）
- **語言**：未見語言要求
- **時程**：無截止日；Early Careers「Register your interest in Belfast 2027」（2027 梯次，與 2028-09 畢業不合）
- **備註**：為何給「低」：規則 C 要求「登記冊法人與職缺僱主的對應已證實」。本例聘用法人雖未逐職缺證實，但 verified6 指出的兩個英國候選法人都持牌，不論哪個聘用都有擔保資格（規則 S，本輪新增，第十節揭露）。不接受規則 S 時為 高／中。
- **備註**：抽查 3 則職缺未見 visa／sponsorship／clearance 字樣——其餘 168 則是否需要 SC：未檢查。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/NI058529 ；https://find-and-update.company-information.service.gov.uk/company/03438874 ；https://api.smartrecruiters.com/v1/companies/Version1/postings ；https://jobs.smartrecruiters.com/Version1/744000154471820-aws-devops-engineer ；https://www.version1.com/careers/early-careers/ ；sponsors_2026-10-09.csv

### 6. Wise（Wise Payments Limited）（scout #29）｜英國／London

- **公司簡介**：WISE PAYMENTS LIMITED，CH 07209813，Active，2010-03-31 成立，65 Clifton Street, London EC2A 4JE；前名 TRANSFERWISE LTD、EXCHANGE SOLUTIONS LTD。SmartRecruiters（GB 185 則）。Greenhouse「wise」board 無法確認同一公司，verified6 未列入。
- **適配度：高**：跨境支付平台（規則 R）；Platform Engineer - Compute、Backend Engineer、Software Engineer - Recurring Payin（Java/Kotlin、AWS、PostgreSQL）、Senior ML Platform Engineer 等平台／後端職對口。
- **申請難度：中**：登記冊直接命中 Wise Payments Limited 且有確認開放的對口職缺，但兩則對口職缺有明文限制：Backend Engineer「only considering local candidates as relocation support is not provided」（只對已有擔保的本地候選人支援轉移），Product Eligibility「unable to support relocation or visa sponsorship」；Platform Engineer 的擔保字樣 verified6 未載，未達規則 K 的「多數」，故 中。
- **簽證／搬遷**：UK 登記冊：Wise Payments Limited（London）Skilled Worker (A)；兩則職缺明寫不提供 relocation／visa sponsorship；Backend Engineer 寫「For local candidates we are able to support transfer of visa sponsorship」；台灣護照相關資格：未驗證
- **對口開放職缺**：Platform Engineer - Compute（2026-09-30）；Backend Engineer（2026-10-08；限本地）；Backend Engineer - Contacts Team（2026-10-02，£68,000–£87,500 + RSUs）；Software Engineer - Recurring Payin（2026-10-02）；Backend Software Engineer - Product Eligibility（2026-09-24；不擔保）
- **語言**：未見語言要求
- **時程**：無截止日
- **備註**：「transfer of visa sponsorship」只對「已有擔保的本地候選人」：Dennis 畢業後持 Graduate visa 雖在英國，但沒有既有擔保可轉——是否會被視為可擔保的本地候選人：未驗證。
- **備註**：若 Platform Engineer - Compute 證實可擔保 → 可改 低；若多數對口職缺都同樣排除 → 改 高（規則 K）。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/07209813 ；https://api.smartrecruiters.com/v1/companies/Wise/postings?country=gb ；https://jobs.smartrecruiters.com/Wise/744000152722719-platform-engineer-compute ；https://jobs.smartrecruiters.com/Wise/744000154518005-backend-engineer ；https://jobs.smartrecruiters.com/Wise/744000151610329-backend-software-engineer-product-eligibility ；sponsors_2026-10-09.csv

### 7. Data Intellect（Data Intellect Services Limited）（scout #37）｜英國／Belfast

- **公司簡介**：DATA INTELLECT SERVICES LIMITED，CH NI607087，Active，2011-04-14 成立，Unit 5, 9-15 Queen Street, Belfast BT1 6EA；SIC 62012；曾用名 AQUAQ ANALYTICS LTD。官網頁尾 © 2026；SmartRecruiters 公開 API 共 31 筆，2026-10-06 有新職缺。
- **適配度：高**：金融資料平台工程顧問；Python Engineer（3–5 年 Python、Kubernetes、Airflow）、AI Engineer (Agentic Systems)、Consultant Data Engineer 對上 Dennis 的 Python 與 AI／Agent 目標職類（規則 6）。
- **申請難度：中**：登記冊直接命中 Data Intellect Services Limited（及舊名 AquaQ Analytics，同一 NI607087），法人與官網頁尾一致；但最對口的 Python Engineer 頁面寫 Closing Date 31/07/26 已過（規則 P，不計），AI Engineer／Consultant Data Engineer 的要求 verified6 未列、全標 Mid-Senior，故 中。
- **簽證／搬遷**：UK 登記冊：Data Intellect Services Limited（Belfast）Skilled Worker (A)；AquaQ Analytics（Belfast）Skilled Worker (A)（同一法人舊名）；UK 職缺未見 visa 字樣；台灣護照相關資格：未驗證
- **對口開放職缺**：AI Engineer (Agentic Systems)（2026-08-07）；Consultant Data Engineer（2026-08-11）；Python Engineer. New Product Team.（2026-07-21，Closing 31/07/26 已過但仍掛出）；kdb+ Engineer／Senior kdb+ Engineer（金融時序專門技術）
- **語言**：未見語言要求
- **時程**：Python Engineer 截止 2026-07-31（已過，檢查日前 73 天）
- **備註**：若 AI Engineer (Agentic Systems) 的要求與 Dennis 相符 → 可改 低（法人一致、持牌）。
- **備註**：「kdb+ Developer (Relocation to New York)」是 Toronto 職缺，與英國簽證無關。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/NI607087 ；https://dataintellect.com/careers/ ；https://api.smartrecruiters.com/v1/companies/DataIntellect/postings ；sponsors_2026-10-09.csv

### 8. Revolut（Revolut Ltd）（scout #28）｜英國／London（Canary Wharf）

- **公司簡介**：REVOLUT LTD，CH 08804411，Active，2013-12-06 成立，30 South Colonnade, London E14 5HX；SIC 62090。CH 顯示 confirmation statement 逾期（應於 2026-09-13 前提交，最近一次 2025-08-30），屬合規提醒。revolut.com 對 curl 回 403，內容由 WebFetch 讀取。
- **適配度：高**：金融科技平台（規則 R）；Software Engineer (DevOps) - Observability Platform（Python、K8s/Terraform、Prometheus/Grafana/OpenTelemetry）與 Dennis 的平台方向對口；Engineering 28 個職缺。
- **申請難度：中**：登記冊直接命中 Revolut Ltd（Skilled Worker、Scale-up、GBM S&S），但 DevOps 職缺要求 7+ 年（Dennis 約 5–6 年，規則 B）且開放狀態矛盾（官方頁仍在、第三方稱不收件），Graduate Programme 2027 雖寫 visa assistance 但限 2025–2027 畢業（規則 B），沒有可計入的對口職缺。
- **簽證／搬遷**：UK 登記冊：Revolut Ltd（London）Skilled Worker (A)、Scale-up (A)、GBM S&S (A)；Graduate 原文：「We'll support you with visa assistance…」；台灣護照相關資格：未驗證
- **對口開放職缺**：Software Engineer (DevOps) - Observability Platform（7+ 年；狀態待確認）；Graduate Programme 2027: Software Engineer (Java)（限 2025/2026/2027 畢業，資格不符）
- **語言**：Graduate 要求「Fluency in English」；未見其他語言要求
- **時程**：Graduate Programme 2027 於 2027 年開始，Dennis 2028-09 畢業 → 不符；2028 梯次：未找到
- **備註**：Graduate 頁明寫 visa assistance 與搬遷協助，顯示公司有擔保國際畢業生的意願；若 2028 梯次接受 2028 畢業生（未驗證），會是 Dennis 時程內少數可接上的入口。
- **備註**：CH confirmation statement 逾期：行政警示，不代表停業（verified6 判斷）。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/08804411 ；https://www.revolut.com/careers/ ；https://www.revolut.com/careers/position/4eabb087-408d-4dc7-811d-141544ba4991/ ；https://www.revolut.com/careers/position/graduate-programme-2027-software-engineer-java-3b79c804-b7e0-4b1a-9ef6-2fd69723dc7a/ ；sponsors_2026-10-09.csv

### 9. Kainos（Kainos Software Limited）（scout #34）｜英國／Belfast

- **公司簡介**：KAINOS SOFTWARE LIMITED，CH NI019370，Active，1986-04-14 成立，Kainos House, 4-6 Upper Crescent, Belfast BT7 1NT；SIC 62012。Phenom 招聘站 125 筆，申請走 Workday。
- **適配度：高**：數位服務／軟體公司；Lead／Senior Platform Engineer (AWS)、Senior Platform Engineer – Azure、Senior／Lead Security Engineer、Cloud Platforms Capability Lead 等平台與資安工程職直接對口。
- **申請難度：中**：登記冊直接命中 Kainos Software Ltd（Belfast），但 Graduate Technologist 要求「unconditional right to work in the UK」與 SC 資格，Lead Platform (AWS)「requires SC Clearance」、Senior Platform – AWS「Active Security Clearance is required」（規則 T，不計）；Azure 與 Security Engineer 職缺的 SC 要求 verified6 未載，故不到 高、也不給低。
- **簽證／搬遷**：UK 登記冊：Kainos Software Ltd（Belfast, Antrim）Skilled Worker (A)；Graduate 與兩則 AWS 平台職有 SC／無條件工作權限制；台灣護照相關資格：未驗證
- **對口開放職缺**：Lead Platform Engineer (AWS)（2026-09-01，需 SC）；Senior Platform Engineer – AWS（2026-09-01，需 Active SC）；Senior Platform Engineer – Azure（2026-10-09）；Cloud Platforms Capability Lead（Belfast）；Senior／Lead Security Engineer（Birmingham）；Graduate Technologist – August 2027（£29,000–£32,000，資格不符）
- **語言**：未見語言要求
- **時程**：Graduate Technologist「August 2027 Start Date」（2026-10-12 發佈、未標截止；只有月份，以 2027-08-01 估，早於 MSc 開學約 31 天）→ 與 MSc 互斥，且資格不符
- **備註**：SC：Kainos 職缺只寫需要 SC／Active SC；SSE 職缺原文所寫的「normally includes 5 years UK residency」不是 Kainos 的原文。Dennis 是否可取得 SC：未驗證。
- **備註**：Graduate £29,000–£32,000 低於 Skilled Worker new entrant 的絕對下限 £33,400（第二節）——即使不看工作權條款也無法擔保。
- **備註**：若 Azure／Security Engineer 職缺證實無 SC 要求且可擔保 → 可改 低；若全部對口職缺都要 SC → 改 高（規則 E 第二句）。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/NI019370 ；https://careers.kainos.com/gb/en/search-results ；https://careers.kainos.com/gb/en/job/JR_18544 ；https://careers.kainos.com/gb/en/job/JR_17652 ；https://careers.kainos.com/gb/en/job/JR_17658 ；sponsors_2026-10-09.csv

### 10. Datactics（Datactics Limited）（scout #36）｜英國／Belfast

- **公司簡介**：DATACTICS LIMITED，CH 03847379，Active，1999-09-23 成立，註冊地址 London W1W 5PF，營運地址 1 Lanyon Quay, Belfast BT1 3LG；SIC 62012、63110。CH 警示：confirmation statement 逾期（應於 2026-09-04 前提交）；2026-10-07／09 仍有董事變更申報。careers 頁尾「© Datactics 2024」。
- **適配度：高**：資料品質軟體產品公司；careers 頁列 DevOps Sys Admin & Security Engineer（sysadmin、security reviews、DevOps），屬平台／資安工程職稱證據（規則 6）。
- **申請難度：中**：登記冊直接命中 Datactics（Belfast），但唯一對口職缺的詳情連結失效、無日期，是否仍開放未驗證（不算確認開放），故為「有贊助但缺確認職缺」＝中。
- **簽證／搬遷**：UK 登記冊：Datactics（Belfast）Skilled Worker (A)；台灣護照相關資格：未驗證
- **對口開放職缺**：DevOps Sys Admin & Security Engineer（Belfast；詳情連結失效 → 開放狀態未驗證）；Graduate：未找到
- **語言**：未見語言要求（需填 NI 法定 Equality Monitoring Form）
- **時程**：無日期
- **備註**：職缺內容含「in house user support」，偏 sysadmin；對 Dennis 屬部分對口。
- **備註**：CH 逾期警示屬行政事項，verified6 判已確認營運。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/03847379 ；https://www.datactics.com/careers/ ；sponsors_2026-10-09.csv

### 11. OpenText Cork（Open Text Ireland Limited）（scout #23）｜愛爾蘭／Cork

- **公司簡介**：Open Text Ireland Limited，CRO 228481（鏡像），Normal/Active，1995-02-07 成立，Building 2800/2900, Cork Airport Business Park, Kinsale Road, Cork T12 E956；LEI 391200TTR91D611XWC08。同址另有 Micro Focus Software (Ireland) Limited（CRO 223694）。Phenom 搜尋 Cork 35 則（與全站 367 則篩選交叉一致）。
- **適配度：高**：企業軟體與資安產品；Cork 有大量 SRE／Cloud 職：Sr. SRE（AWS/Linux/K8s）、Lead Cloud Operations Engineer（Python/Go/Bash、K8s/Terraform/AWS/GCP）、Lead／Principal Cloud Systems Engineer 等，直接對口。
- **申請難度：中**：Cork 35 則職缺中多筆對口且新近、抽查 5 則只要求英文；但抽查未見 visa／relocation 字樣，CSOL 雖列 2136／2139，職稱與 SOC 的對應與 Dennis 資格未驗證（規則 I），且多為 Sr./Lead/Principal 層級，故 中。
- **簽證／搬遷**：Ireland CSOL：2136／2139 在清單上，職稱對應未驗證；CSEP 門檻（verifier 引用）€40,904；visa／relocation：未找到；UK 姊妹 OPEN TEXT UK LIMITED（Reading）在冊（不計）；台灣護照相關資格：未驗證
- **對口開放職缺**：Sr. SRE – Cork（2026-09-29，5+ 年）；Lead Cloud Systems Engineer（2026-10-02）；Lead Cloud Operations Engineer（2026-09-10）；Lead SRE（2026-10-05）；Sr. SRE（2026-08-12）；Sr. Cloud Applications Engineer (SRE)（2026-04-01）；Principal Cloud Systems Engineer（2026-09-16）；Associate Consultant（2026-10-08，入門，Java/C#/C++）
- **語言**：抽查 5 則未見非英語要求；Production Support Specialist | French Speaking 要求法語（非對口）
- **時程**：無截止日
- **備註**：本輪愛爾蘭最對口的雇主；但與 Run 5 的 Zalando Dublin 相同，缺「明文 relocation／移民協助」這一項（規則 Q 第 1 點）。
- **備註**：CSEP 另需「50% or more of the employees in the firm are EEA nationals」與 2 年 job offer（verifier 引用 DETE 頁）——OpenText Cork 是否符合：未驗證。
- **來源**：https://companycheck.ie/company/228481 ；https://careers.opentext.com/us/en/search-results?keywords=Cork ；https://careers.opentext.com/us/en/job/53718 ；https://careers.opentext.com/us/en/job/52267 ；https://enterprise.gov.ie/en/publications/publication-files/critical-skills-occupations-list.docx

### 12. Lloyds Banking Group（Lloyds Bank plc；33 Old Broad St）（scout #33）｜英國／London

- **公司簡介**：控股 LLOYDS BANKING GROUP PLC，CH SC095000，Active，1985-10-21，The Mound, Edinburgh；主要銀行 LLOYDS BANK PLC，CH 00002065，Active，1865-04-20，25 Gresham Street, London；SIC 64191。畢業生頁 JS 載入（未檢查）。
- **適配度：中**：職缺層面很對口（Backend Software Engineer「secure Golang microservices」、Senior DevOps／Platform Engineer、Detection & Response Engineer），但本業為傳統銀行，依規則 N 上限判中（與 Run 5 JPMorgan／Barclays 可比）。
- **申請難度：中**：登記冊命中 Lloyds Bank plc（Skilled Worker＋GBM S&S），有確認開放的對口職缺（Backend SE 截止 2026-11-01），但 Workday 未標聘用法人、控股 Lloyds Banking Group plc 不在冊，集團其他法人未列舉（規則 C；規則 S 不適用），故不給低。
- **簽證／搬遷**：UK 登記冊：Lloyds Bank plc（London）Skilled Worker (A)、GBM S&S (A)；Lloyds Banking Group plc：查無；抽查 3 則未提 visa；台灣護照相關資格：未驗證
- **對口開放職缺**：Backend Software Engineer（London，2026-10-05 發佈，截止 2026-11-01，£76,760–£115,140）；Senior DevOps / Platform Engineer – Autonomous Vulnerability Research（截止 2026-10-13，£72,702–£80,780）；Senior／Lead Detection & Response Engineer（Edinburgh 等，截止 2026-10-17）；Workday「graduate software」0 筆
- **語言**：未見語言要求
- **時程**：Backend SE 截止 2026-11-01；Senior DevOps 2026-10-13；Detection & Response 2026-10-17（見四之二）
- **備註**：Run 4 曾記錄 LBG 職缺頁「We cannot sponsor visas」（屬 Scottish Widows／Bank of Scotland 列，未證實歸屬）；Run 6 抽查的 3 則未提 visa——兩者是否衝突：未驗證。
- **備註**：敏感度：若改以職缺層級判適配（不套規則 N），且證實聘用法人為 Lloyds Bank plc → 高／低。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/SC095000 ；https://find-and-update.company-information.service.gov.uk/company/00002065 ；https://lbg.wd3.myworkdayjobs.com/lbg_Careers ；https://lbg.wd3.myworkdayjobs.com/lbg_Careers/job/London/Backend-Software-Engineer_161122-1 ；sponsors_2026-10-09.csv

### 13. Aberdeen Art Gallery（Aberdeen City Council）（scout #17）｜英國／Aberdeen

- **公司簡介**：地方政府機關，不在 Companies House 登記；Aberdeen Art Gallery 由市議會 AAGM 直接營運（官網網域 aberdeencity.gov.uk）。職缺刊登於 myjobscotland，轉貼 s1jobs；aberdeencity.gov.uk/jobs → 404。
- **適配度：中**：營運方市議會有 Technology Analyst（core ICT infrastructure、cloud capability、Azure/O365、AD、gateway security），屬 IT 基礎設施／雲端相關但為公部門系統；比照 Run 3 City of Edinburgh Council 判中。
- **申請難度：中**：登記冊命中 Aberdeen City Council（Skilled Worker），但唯一對口職缺寫明「all applicants must have the right to live and work in the UK」且未提擔保（規則 T，不計），故為「有贊助但缺可計入的職缺」＝中。
- **簽證／搬遷**：UK 登記冊：Aberdeen City Council（Aberdeen）Skilled Worker (A)；職缺要求既有英國居住與工作權；台灣護照相關資格：未驗證
- **對口開放職缺**：Technology Analyst – ABC13913（Marischal College，永久全職，£40,001–£50,000，2026-10-08 發佈，截止 2026-10-22；需既有工作權 → 不計）
- **語言**：未見語言要求
- **時程**：Technology Analyst 截止 2026-10-22（見四之二）
- **備註**：規則 A 的邊界：Technology Analyst 是市議會 IT 職、不是博物館專屬；由於美術館沒有獨立法人、雇主就是市議會本身，本報告把它算在本列雇主層級，但不視為「博物館 IT 職缺」。
- **備註**：薪資旁註：£40,001–£50,000 高於任何 IT 類 SOC 的 new entrant 下限（第二節），但職缺本身不擔保。
- **來源**：https://www.aberdeencity.gov.uk/AAGM/plan-your-visit/aberdeen-art-gallery ；https://www.s1jobs.com/job/technology-analyst-abc13913-127548738 ；sponsors_2026-10-09.csv

### 14. Bitwise Group（Bitwise Limited）（scout #11）｜英國／Dunfermline（Fife）

- **公司簡介**：BITWISE LIMITED，CH SC107588，Active，1987-11-13 成立，Crescent House, Carnegie Campus, Dunfermline KY11 8GR；SIC 62020。官網自述 80+ 員工（Scotland＋Netherlands；未另查證），辦公室 Dunfermline、Dundee、Eindhoven。
- **適配度：中**：軟體工程公司，但主業是 safety-critical／embedded（國防、醫療、汽車），不是 cloud／platform（規則 N：嵌入式判中，比照 Cirrus Logic）。
- **申請難度：中**：登記冊直接命中 Bitwise Ltd（Dunfermline），但招聘頁明寫「There are currently no open positions」，Teamtailor 板未檢查——有贊助但缺職缺＝中。
- **簽證／搬遷**：UK 登記冊：Bitwise Ltd（Dunfermline, Fife）Skilled Worker (A)；Bitwise Europe Management Ltd、Bitwise Global（London）為無關近名，不計；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（招聘頁原文「There are currently no open positions」）；Teamtailor 板 talent.bitwisegroup.com：未檢查
- **語言**：未見語言要求
- **時程**：無
- **備註**：Scout 的 uncertain（評論極少）已解決。荷蘭 Eindhoven 的 Bitwise Europe BV 是否在 IND 名單：本輪未查（未檢查）。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/SC107588 ；https://www.bitwisegroup.com/careers/ ；sponsors_2026-10-09.csv

### 15. Pocket Sized Hands（Pocket Sized Hands Limited）（scout #15）｜英國／Dundee

- **公司簡介**：POCKET SIZED HANDS LIMITED，CH SC557798，Active，2017-02-16 成立，Seagate House, Dundee DD1 2HB；SIC 58210／62011／74909；帳目做到 2026-03-31。員工人數：未找到。
- **適配度：中**：遊戲 co-development／porting／networking & live-ops，官網寫「Photon, EOS, and custom AWS stacks」，與雲端後端有交集；但現有職缺只有製作人類（規則 6），比照 Run 4 Dundee 遊戲公司判中。
- **申請難度：中**：登記冊直接命中 Pocket Sized Hands（Dundee），但目前只開 Head of Production、Producer——有贊助但缺對口職缺＝中。
- **簽證／搬遷**：UK 登記冊：Pocket Sized Hands（Dundee, Scotland）Skilled Worker (A)；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（Head of Production、Producer，皆非對口）
- **語言**：未見語言要求
- **時程**：無
- **備註**：持牌＋AWS live-ops 經驗，verified6 建議列入後續追蹤；若日後開 backend／online services 職缺，可升為 高。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/SC557798 ；https://pocketsizedhands.com/careers/ ；sponsors_2026-10-09.csv

### 16. Tisalabs（Tisalabs Limited）（scout #25）｜愛爾蘭／Cork

- **公司簡介**：Tisalabs Limited，CRO 604330（solocheck 鏡像，Micro Company，NACE 5829），Normal，2017-05-16 成立；註冊地址 Midleton, Co. Cork；營業地址 The Rubicon Centre, CIT Campus, Bishopstown, Cork。第三方稱約 12 人（未驗證）。
- **適配度：中**：資安與 IoT 工程公司，careers 列 SOFTWARE ENGINEER（distributed computing）與 CYBER SECURITY ENGINEER，方向對口；但 CRO 鏡像標 Micro Company（規模很小，量表「中」）。
- **申請難度：中**：Run 2 非英國量表：有對口職缺入口且英文即可，但三則職缺無日期、無地點、無個別 URL（可能是常態徵才，開放狀態未驗證），visa／relocation 未找到，CSOL 對應未驗證（規則 I）。
- **簽證／搬遷**：Ireland CSOL：2136／2139 在清單上，職稱對應未驗證；visa／relocation：未找到；UK 登記冊：無；台灣護照相關資格：未驗證
- **對口開放職缺**：SOFTWARE ENGINEER、CYBER SECURITY ENGINEER、AI & MACHINE LEARNING（未標日期；開放狀態未驗證）
- **語言**：未見語言要求
- **時程**：無日期
- **備註**：CSEP 要求「50% or more of the employees in the firm are EEA nationals」（verifier 引用 DETE 頁）；微型公司能否符合：未驗證。
- **來源**：https://www.solocheck.ie/Irish-Company/Tisalabs-Limited-604330 ；https://www.tisalabs.com/careers/

### 17. SSE plc（scout #4）｜英國／Perth（多地點含 Glasgow）

- **公司簡介**：SSE PLC，CH SC117119，Active，1989-04-01，Inveralmond House, 200 Dunkeld Road, Perth PH1 3AQ；SIC 70100（控股總部）。職缺以事業部標示（Corporate／Renewables／SSEN Transmission），各職缺聘用法人未驗證。Maps 1.9 分屬客戶評價。
- **適配度：中**：能源公用事業（規則 N：本業非軟體）；有 Senior Security Architect（AWS/Azure 雲端安全）、OT Security Engineer 等資安職，但 devops、SRE 搜尋皆「No results found」，比照 Run 3 ScottishPower 判中。
- **申請難度：高**：雖然登記冊命中 SSE Plc（Perth），但所有對口職缺都帶限制：IT & OT Graduate Programme 原文「SSE is unable to offer visa sponsorship for this role」且「falls below the minimum “New Entrant” salary threshold」，兩個資安職要求 SC vetting「normally includes 5 years UK residency」（規則 E 第二句＋規則 T）→ 高。
- **簽證／搬遷**：UK 登記冊：SSE Plc（Perth）Skilled Worker (A)；SSE Contracting（Reading）在冊但是否屬集團未驗證，不計；Graduate 明寫不擔保；資安職需 SC；台灣護照相關資格：未驗證
- **對口開放職缺**：IT & OT Graduate Programme（£35,000，截止 2026-11-01，不擔保）；Senior Security Architect（£59,800–£89,800，截止 2026-10-19，需 SC）；OT Security Engineer（£51,600–£77,400，截止 2026-10-19，需 SC）；Operations Systems Engineer（SSE Renewables，Perth，£54,952–£64,738，截止 2026-10-21；SCADA/OT，非對口）
- **語言**：未見非英語要求
- **時程**：Graduate 2026-11-01 23:55 GMT（＝2026-11-02 07:55 TST）；資安職 2026-10-19 23:55 BST（＝2026-10-20 06:55 TST）；Ops Systems 2026-10-21
- **備註**：本輪最清楚的「持牌但對 Dennis 實際不可及」案例：graduate 明寫因薪資低於 New Entrant 門檻而不擔保；資安職的 SC 通常要 5 年英國居住，Dennis 畢業時（2028-09）在英國約 1 年。
- **備註**：不能推論 SSE 所有職位都不擔保（verified6 備註）；本報告的「高」只針對現有對口職缺。
- **備註**：薪資旁註：£35,000 低於 SOC 2134（£38,290）、2139（£36,610）的 70% 下限，但高於 2135 的 70%（£33,950）——SSE 依哪個 SOC 判斷：未驗證（第二節）。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/SC117119 ；https://careers.sse.com/ ；https://careers.sse.com/jobs/it-graduates-havant-hampshire-hampshire-united-kingdom-portsmouth-reading-berkshire-berkshire-glasgow-renfrewshire-renfrewshire-perth-perthshire-scotland ；https://careers.sse.com/jobs/senior-security-architect-portsmouth-united-kingdom-reading-berkshire-berkshire-glasgow-renfrewshire-renfrewshire-perth-perthshire-scotland-c2c56910-1289-41a2-9b3b-74f692f71bd2 ；sponsors_2026-10-09.csv

### 18. Cashfac（Cashfac Solutions Limited／Cashfac PLC）（scout #7）｜英國／Livingston（West Lothian）

- **公司簡介**：CASHFAC SOLUTIONS LIMITED，CH 02821150，Active，1993-05-25，London EC4N 7BP；audit-exempt 子公司，母公司 CASHFAC PLC 03781239（FCA FRN 805666）；同集團 Cashfac Initiative Limited、Cashfac Technologies Limited。官網列 Livingston 辦公室 Cedar House, Quarrywood Court, EH54 6AX。Livingston 員工的聘用法人：未驗證。
- **適配度：中**：銀行用 fintech 軟體產品（micro-service Q-API、cloud enabled），Livingston 有 Software Developer、SRE 在職者（LinkedIn 搜尋摘要）；但無職缺、技術棧未驗證，故中。
- **申請難度：高**：登記冊查無「Cashfac」任何實體，careers 頁只有公司介紹、沒有職缺列表或申請方式——無贊助且無職缺＝高。
- **簽證／搬遷**：UK 登記冊：查無；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（careers 頁無職缺列表）；在職者資料（SRE、Software Developer）是員工資料，不是職缺
- **語言**：未見語言要求
- **時程**：無
- **備註**：Livingston 是 Run 4 留下的缺口城市；本列是該區唯一的產品型 fintech。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/02821150 ；…/company/03781239 ；https://cashfac.com/about-us/careers/ ；https://cashfac.com/contact-us/

### 19. YoYo Games（YoYo Games Limited；Opera Dundee）（scout #16）｜英國／Dundee

- **公司簡介**：YOYO GAMES LIMITED，CH 05260718，Active，2004-10-15，註冊地址 One Fleet Place, London；SIC 62011。Opera 2021-01-20 公告收購；gamemaker.io 頁尾「Copyright © 2026 Opera Norway AS」；Opera 招聘頁寫 Dundee City Quay 為 GameMaker 團隊所在地。Maps 分類「Game store」是錯的（scout flag 已解決）。
- **適配度：中**：GameMaker 遊戲引擎開發商（軟體產品），現屬 Opera；但無現行工程職、技術棧 verified6 未列，比照 Run 4 遊戲公司判中。
- **申請難度：高**：登記冊查無 YoYo Games／Opera Norway，Opera 招聘頁 Dundee 明寫「No matching jobs」（gamemaker.io/jobs 為 JS，未檢查）——無贊助且無職缺＝高（比照 Run 4 Hyper Luminal）。
- **簽證／搬遷**：UK 登記冊：查無（YOYO BUBBLE LTD 為無關近名）；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（jobs.opera.com/locations/dundee 原文「No matching jobs」）；gamemaker.io/en/jobs：未檢查（JS 載入）；最近一筆 Game Programming Intern（2024 夏，已關閉）
- **語言**：未見語言要求
- **時程**：無
- **備註**：若 Opera Dundee 開缺，需另查聘用法人是否持牌（verified6 備註）。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/05260718 ；https://press.opera.com/2021/01/20/opera-buys-yoyo-games-gamemaker-opera-gaming/ ；https://jobs.opera.com/locations/dundee ；https://gamemaker.io/en/jobs

### 20. Intelligent Plant（Intelligent Plant Ltd）（scout #18）｜英國／Aberdeen

- **公司簡介**：INTELLIGENT PLANT LIMITED，CH SC299081，Active，2006-03-17，492 Union Street, Aberdeen AB10 1TS；SIC 62090；帳目做到 2026-03-31。2026-06 仍在 LinkedIn 宣傳 Inform Prize。
- **適配度：中**：工業製程／警報資料分析軟體（Industrial App Store），屬能源產業資料平台；但規模很小（第三方稱 1–10 人）、技術棧與職缺未驗證，故中。
- **申請難度：高**：登記冊查無，/careers 404、無招聘頁，只有聯絡信箱——無贊助且無招聘管道＝高。
- **簽證／搬遷**：UK 登記冊：查無；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（/careers → 404）
- **語言**：未見語言要求
- **時程**：無
- **備註**：Scout 的 uncertain（評論極少）已解決：真實營運的小型產品公司。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/SC299081 ；https://www.intelligentplant.com/

### 21. V1 Technologies（V1 Technologies Limited）（scout #8）｜英國／Livingston（West Lothian）

- **公司簡介**：V1 TECHNOLOGIES LIMITED，CH 07609309（曾用名 Stickyweb Technologies Ltd），Active，2011-04-19，註冊地址 London N17 6UR；SIC 62090；官網頁尾同一公司編號，列 Livingston EH54 8JR 等多個地點。規模：未驗證。
- **適配度：中**：小型網站／App 外包公司（另做 Solar PV 設計等），屬軟體但規模與技術棧未驗證（量表「中」）。
- **申請難度：高**：登記冊查無，官網無 careers 頁（/apps/job-finder-app 是推銷的產品）——無贊助且無招聘管道＝高。
- **簽證／搬遷**：UK 登記冊：查無（V1 Distribution Limited 等為無關近名）；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到
- **語言**：未見語言要求
- **時程**：無
- **來源**：https://find-and-update.company-information.service.gov.uk/company/07609309 ；https://v1technologies.co.uk/contact-us

### 22. VMware by Broadcom Cork（VMware International Unlimited Company）（scout #21）｜愛爾蘭／Cork（Ballincollig）

- **公司簡介**：VMware International Unlimited Company，CRO 402208（鏡像），Normal/Active，2005-05-16；註冊地址 Dublin 2；LEI 總部地址 Parnell House, Barrack Square, Ballincollig, Co. Cork。Broadcom 2023-11-22 完成收購 VMware。
- **適配度：中**：虛擬化與雲端基礎設施軟體，業務與 Dennis 相關；但 Broadcom Workday 386 則中 Cork／Ireland 0 則，唯一 Cork 線索（Staff Security Engineer R026554）只見於搜尋摘要、用 ID 查無，缺工程職稱證據（比照 Run 5 Edgescan 判中）。
- **申請難度：高**：Run 2 非英國量表：在地無對口職缺或入口＝高；posting 的 visa／relocation 未找到，CSOL 對應未驗證。
- **簽證／搬遷**：Ireland CSOL：2136／2139 在清單上，職稱對應未驗證；visa／relocation：未找到；UK 姊妹 VMWare UK Limited、Broadcom Europe Limited 在冊（不計）；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（Workday 386 則逐筆掃過，地點含 Cork／Ireland 0 則）
- **語言**：未見語言要求
- **時程**：無
- **備註**：結果只反映 2026-10-12 檢查當下。
- **來源**：https://companycheck.ie/company/402208 ；https://www.lei-lookup.com/record/549300QDZDZP3SLIME17/ ；https://broadcom.wd1.myworkdayjobs.com/External_Career

### 23. Trend Micro Cork（Trend Micro (EMEA) Limited）（scout #22）｜愛爾蘭／Cork

- **公司簡介**：Trend Micro (EMEA) Limited，CRO 364963（solocheck 鏡像），Normal/Active，2002-12-11，IDA Business and Technology Park, Model Farm Road, Cork T12 VP44；LEI 984500A2D51391F6Y889。Workday 全球 212 則。
- **適配度：中**：資安產品廠商，與 SIEM／偵測背景相關；但 Cork 現行只有 Finance Technology Lead、Payroll Manager、Receptionist 與 Head of Technical Partner Management，工程職多在 Taipei，缺 Cork 工程職稱證據（規則 6）。
- **申請難度：高**：Run 2 非英國量表：Cork 無對口職缺＝高；visa／relocation 未找到，CSOL 對應未驗證。
- **簽證／搬遷**：Ireland CSOL：2136／2139 在清單上，職稱對應未驗證；visa／relocation：未找到；UK 姊妹 Trend Micro (UK) Limited 在冊（不計）；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（Cork：Finance Technology Lead R0010260、Payroll Manager、Receptionist、Head of Technical Partner Management R0010222）
- **語言**：未見語言要求
- **時程**：無
- **備註**：Trend Micro 的 Cloud／Backend／Security 工程職多在 Taipei（例如 (Sr.) Cloud Engineer (V1xSP)）——超出本報告範圍，但對 Dennis 的台灣端職涯可能有參考價值（判斷）。
- **來源**：https://www.solocheck.ie/Irish-Company/Trend-Micro-Emea-Limited-364963 ；https://trendmicro.wd3.myworkdayjobs.com/External/job/Cork/Finance-Technology-Lead_R0010260

### 24. IBM Cork（IBM Ireland Limited）（scout #24）｜愛爾蘭／Cork

- **公司簡介**：IBM Ireland Limited，CRO 16226（鏡像），Normal/Active，1956-09-07，註冊地址 Mulhuddart, Dublin 15。Cork 據點（Unit 5300, Cork Airport Business Park）只見於第三方目錄：未驗證。Irish Times 2024-05-16 報導 IBM 在 Dublin、Cork、Waterford 增聘 800 人。
- **適配度：中**：軟體與 IT 服務大廠；但 IBM 公開搜尋 API 的 Ireland 8 則中 Cork 0 則，Cork 辦公室地址只見於第三方目錄，缺 Cork 工程職稱證據（規則 6）。
- **申請難度：高**：Run 2 非英國量表：Cork 無對口職缺＝高；愛爾蘭其他地點只有 Waterford 入門 Linux Kernel 與 Mulhuddart 2027 實習，visa／relocation 未找到。
- **簽證／搬遷**：Ireland CSOL：2136／2139 在清單上，職稱對應未驗證；visa／relocation：未找到；UK 姊妹 IBM UK Ltd 在冊（不計）；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（Cork 0 則）；Ireland 其他：Linux Kernel OS Developer（Waterford，Entry Level）、Software Developer Intern 2027（Mulhuddart）
- **語言**：未見語言要求
- **時程**：Intern 2027（Mulhuddart）：日期未載，與 MSc 時程不合（判斷）
- **備註**：Scout 的 uncertain（Maps 無網站）已解決（ibm.com）。
- **來源**：https://companycheck.ie/company/16226 ；https://www.ibm.com/careers/search ；https://www-api.ibm.com/search/api/v2

### 25. Net Zero Technology Centre（Net Zero Technology Centre Limited）（scout #19）｜英國／Aberdeen

- **公司簡介**：NET ZERO TECHNOLOGY CENTRE LIMITED，CH SC531384（曾用名 THE OIL & GAS TECHNOLOGY CENTRE LIMITED），Active，company limited by guarantee，2016-04-01，W-Zero 1 Energy Transition Zone, Aberdeen AB12 3LE；SIC 82990。同址另有 NET ZERO TECHNOLOGY CENTRE GROUP LIMITED SC825870。
- **適配度：低**：能源轉型創新中心；scout 的「數位專案」是推論，verified6 沒有任何 IT／軟體職缺或團隊證據（規則 2：資料不足，不是確認沒有 IT 職缺；比照 Run 3 Nova Innovation）。
- **申請難度：中**：登記冊直接命中 Net Zero Technology Centre Limited（Aberdeen），但 Careers Hub 明寫「There are currently no open positions」——有贊助但缺職缺＝中。
- **簽證／搬遷**：UK 登記冊：Net Zero Technology Centre Limited（Aberdeen）Skilled Worker (A)；台灣護照相關資格：未驗證
- **對口開放職缺**：官方明示目前無職缺（「There are currently no open positions matching " "」）
- **語言**：未見語言要求
- **時程**：無
- **備註**：brief 的「energy-tech／grid software」產業在本輪只有 SSE、Intelligent Plant 與本列；三者都沒有可計入的對口職缺。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/SC531384 ；https://careers.netzerotc.com/search/?q=&locationsearch= ；sponsors_2026-10-09.csv

### 26. ComTech IT（ComTech IT Ltd）（scout #2）｜英國／Stirling

- **公司簡介**：COMTECH IT LTD，CH SC530381，Active，2016-03-22，Unit 5c Back O Hill Road Industrial Estate, Stirling FK8 1SH；SIC 62020；micro company accounts（截至 2026-03-31）；董事 2 名。第三方稱約 5 人（未驗證）。
- **適配度：低**：小型託管 IT（SME 桌面／M365 支援），職級為 Modern Apprentices／IT Technician／Senior Technician，屬管理式 IT（量表「低」）。
- **申請難度：高**：登記冊查無（Comtech IT Services Limited, Northampton 是另一家 07373702），官網無 careers 頁、無公開職缺——無贊助且無招聘管道＝高。
- **簽證／搬遷**：UK 登記冊：查無；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到
- **語言**：未見語言要求
- **時程**：無
- **來源**：https://find-and-update.company-information.service.gov.uk/company/SC530381 ；https://comtechit.scot/about

### 27. Control IT Solutions（Control IT Solutions Ltd）（scout #5）｜英國／Perth（另有 Glasgow 辦公室）

- **公司簡介**：CONTROL IT SOLUTIONS LTD，CH SC498697，Active，2015-02-24，8 Atholl Crescent, Perth PH1 5NG；SIC 62020；董事 1 名。官網寫明 Perth 與 Glasgow 辦公室。
- **適配度：低**：MSP／helpdesk 型託管 IT；過去招聘的是 IT Helpdesk Team Lead、First Line Helpdesk Engineer（搜尋摘要），屬管理式 IT（量表「低」）。
- **申請難度：高**：登記冊查無，官網無 careers 頁、無現行職缺——無贊助且無招聘管道＝高。
- **簽證／搬遷**：UK 登記冊：查無；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（第三方招聘商的舊貼文不算現行職缺）
- **語言**：未見語言要求
- **時程**：無
- **來源**：https://find-and-update.company-information.service.gov.uk/company/SC498697 ；https://www.cits.scot/

### 28. m3 Networks（M3 Networks Limited）（scout #6）｜英國／Perth（另有 Edinburgh 辦公室）

- **公司簡介**：M3 NETWORKS LIMITED，CH SC364161，Active，2009-08-18，22 Whitefriars Street, Perth PH1 1PP（2026-04-27 遷入）；SIC 82990；董事 3 名。官網為 JS 單頁，careers 連結未能列出（未檢查）。
- **適配度：低**：網路與託管 IT；唯一可見職缺是 Onsite IT Support Technician（Kingskettle, Fife，12 個月合約），屬 IT 支援（量表「低」）。
- **申請難度：高**：登記冊查無；唯一職缺原文「Candidates must have the right to work in the UK and hold a full UK driving licence」（規則 T），且只見於搜尋摘要（直接開啟 403）——高。
- **簽證／搬遷**：UK 登記冊：查無；台灣護照相關資格：未驗證
- **對口開放職缺**：Onsite IT Support Technician（£26,000–£32,000；搜尋摘要；直接抓取 403 → 未檢查原頁）
- **語言**：未見語言要求
- **時程**：無日期
- **備註**：£26,000–£32,000 低於 Skilled Worker new entrant 的絕對下限 £33,400（第二節）。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/SC364161 ；https://www.m3networks.co.uk/ ；https://www.simplyhired.co.uk/job/KQo_ChLnKdV3lrIwKauvBICwWOUkzENjkCWSyxdGtSw_nhpbd9r-lA（搜尋摘要）

### 29. Targeted Software Solutions（Targeted Software Solutions Limited）（scout #9）｜英國／Livingston（West Lothian）

- **公司簡介**：TARGETED SOFTWARE SOLUTIONS LIMITED，CH SC197111，Active（非 dormant），1999-06-11，10 Player Green, Livingston EH54 8RZ；micro accounts（截至 2025-07-31）：平均員工 1 名、Turnover £9,167、淨負債 £(130,749)。
- **適配度：低**：CH 最新帳目「Average number of employees: 1」、董事 1 名、找不到網站——實質是個人顧問公司，業務內容資料不足（規則 2）。
- **申請難度：高**：不是可應徵的雇主：一人公司、無網站、無招聘、登記冊查無。
- **簽證／搬遷**：UK 登記冊：查無；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（一人公司）
- **語言**：—
- **時程**：無
- **備註**：verified6 判「已確認營運（僅限法律層面）」，所以本報告仍評級，但它不是雇主；放在「評級但帶保留」。
- **來源**：https://find-and-update.company-information.service.gov.uk/company/SC197111 ；…/SC197111/officers

### 30. The Stirling Smith Art Gallery & Museum（Stirling Smith Art Gallery & Museum Trust）（scout #3）｜英國／Stirling

- **公司簡介**：Stirling Smith Art Gallery & Museum Trust，OSCR SC016162，Active，1946-04-16 登記；Albert Place, Stirling FK8 2RQ；OSCR 填報員工 10 人；FY 至 2025-03-31 收入 £375,363、支出 £405,645。不是公司（Trust）。
- **適配度：低**：小型博物館（OSCR：10 名員工），沒有 IT 職缺或團隊證據（規則 2：資料不足）。
- **申請難度：高**：登記冊查無；官網原文「there are no vacancies at present」——無贊助且無職缺＝高（比照 Run 3 National Galleries of Scotland）。
- **簽證／搬遷**：UK 登記冊：查無；台灣護照相關資格：未驗證
- **對口開放職缺**：官方明示無職缺（「Thank you for your interest in joining our team, there are no vacancies at present.」）
- **語言**：未見語言要求
- **時程**：無
- **來源**：https://www.oscr.org.uk/about-charities/search-the-register/charity-details?number=SC016162 ；https://www.smithmuseum.scot/about-us/

### 31. V&A Dundee（Design Dundee Limited）（scout #13）｜英國／Dundee

- **公司簡介**：DESIGN DUNDEE LIMITED，CH SC370598，Active，guarantee 公司，2009-12-30，Whitehall House, 33 Yeaman Shore, Dundee；SIC 91030；Scottish charity SC041219（findthatcharity 鏡像）。子公司 DESIGN DUNDEE ENTERPRISES LIMITED SC531564。
- **適配度：低**：博物館；官方職缺頁沒有任何職缺，scout 的「數位、IT 與票務系統」是推論，無 IT 職缺證據（規則 2）。
- **申請難度：高**：登記冊查無 Design Dundee（London 的 Victoria and Albert Museum 是另一法人，不計），官方職缺頁無職缺——無贊助且無職缺＝高。
- **簽證／搬遷**：UK 登記冊：查無 Design Dundee；Victoria and Albert Museum（London）不計；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（職缺頁只有介紹文字）
- **語言**：未見語言要求
- **時程**：無
- **來源**：https://find-and-update.company-information.service.gov.uk/company/SC370598 ；https://www.vam.ac.uk/dundee/info/jobs

### 32. The McManus（Leisure & Culture Dundee）（scout #14）｜英國／Dundee

- **公司簡介**：Leisure & Culture Dundee，SCIO，Scottish charity SC042421（2011-07 由 Dundee City Council 設立）；CH CS000691（externally registered）；交易子公司 SC402718 為 dormant SIC。職缺經 myjobscotland（DEED Leisure and Culture）刊登。
- **適配度：低**：博物館；myjobscotland 上只有 Visitor Assistant Casual、Sports Development Officer 等非 IT 職（規則 2）。
- **申請難度：高**：登記冊查無 Leisure & Culture Dundee／McManus，且無 IT 職缺——無贊助且無對口職缺＝高。
- **簽證／搬遷**：UK 登記冊：查無（McManus Contracts 等為無關近名）；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（Visitor Assistant Casual DEE06738，截止 2026-11-01，非 IT）
- **語言**：未見語言要求
- **時程**：Visitor Assistant 截止 2026-11-01（非 IT，僅記錄）
- **來源**：https://www.mcmanus.co.uk/jobs-volunteering ；https://myjobscotland.gov.uk/councils/dundee-city-council/deed-leisure-and-culture/jobs/visitor-assistant-casual-490458 ；https://findthatcharity.uk/orgid/GB-SC-SC042421

### 33. VTSL Ireland（VTSL Ireland Limited）（scout #26）｜愛爾蘭／Cork

- **公司簡介**：VTSL Ireland Limited，CRO 544919（鏡像），Normal，2014-06-04，12 South Mall, Cork T12 RD43；規模鏡像間不一致（Micro／Small）。Scout 給的 vtsl.ie 會 301 到 vtsl.net。
- **適配度：低**：電信／VoIP 服務商；列出的職缺是 VoIP Network Engineer（3+ 年 VoIP、BGP）、安裝工程師與業務，屬網路／託管服務，無軟體或雲端平台職（量表「低」）。
- **申請難度：高**：careers 頁寫「we are recruiting staff to join our team in Wandsworth」（London），不像 Cork 職缺；UK 登記冊查無 VTSL（含母公司 VTSL Ltd）；visa／relocation 未找到——高。
- **簽證／搬遷**：Ireland CSOL：網路工程類是否被歸入：未驗證；UK 登記冊：查無；visa／relocation：未找到；台灣護照相關資格：未驗證
- **對口開放職缺**：未找到（VoIP Network Engineer、Junior/IP Telecommunications Installation Engineer、Business Development Manager、Customer Success Executive；未標日期與地點）
- **語言**：未見語言要求
- **時程**：無日期
- **備註**：brief 的「電信／網路業者」類別在本輪只有本列與 Spirit Telecom（存疑），都不對口。
- **來源**：https://www.solocheck.ie/Irish-Company/Vtsl-Ireland-Limited-544919 ；https://www.vtsl.net/join-our-team ；https://www.vtsl.net/voip-network-engineer

---

## 七、跨輪比較：Run 1–Run 6

### 六輪規模

| 輪次 | 名單 | 已評級 | 排除／存疑 | 適配高／難度低或中（代表） | 備註 |
|---|---:|---:|---:|---|---|
| Run 1 | 30 | 21 | 9 | Bellrock、Pulsion、Texaport、Encompass、Focalise AI（高／中，後者無贊助） | 蘇格蘭／Glasgow IT 公司 |
| Run 2 | 38 | 35 | 3 | Spire、Clyde Space、Waracle、Godel（高／中）；GlobalLogic、Honeycomb（烏克蘭，高／中） | 含 13 家東歐公司 |
| Run 3 | 40 | 33 | 7 | Scott Logic、Made Tech（高／中）；Ometria（高／高） | 全為英國 |
| Run 4 | 39 | 36 | 3 | FanDuel（高／低）；Bolt、Vinted、Veriff、Pipedrive（高／中，波羅的海） | 含 8 家波羅的海 |
| Run 5 | 41 | 41 | 0 | Hadrian（高／低，荷蘭）；Proofpoint、Skyscanner、Rapid7（英國，高／中）；另 18 家歐洲 高／中 | 英國 7＋非英國 34 |
| **Run 6** | **38** | **33** | **5** | **Monzo、GoCardless、Checkout.com、Starling、Version 1（高／低）**；Wise、Data Intellect、Revolut、Kainos、Datactics、OpenText Cork（高／中） | 英國 27（蘇格蘭 16、London 7、Belfast 4）＋愛爾蘭 Cork 6 |
| 合計 | 226 | 199 | 27 | — | 以「名單條目」計，**非不重複雇主數** |

難度「低」：Run 1–3 為 0；Run 4 為 1（FanDuel）；Run 5 為 1（Hadrian，荷蘭）；**Run 6 為 5（全部英國，London 4＋Belfast 1）**，另 Barclays（Run 5）本輪跨輪改為 低（有條件，見下）。Run 6 的「低」之所以多，是因為 London fintech 的英國法人單純（一家公司一個主要法人，且與官網頁尾一致），規則 C 容易滿足——不是門檻變寬。

### 登記冊重新比對（2026-10-09 版）

- verified6 的 16 列命中全部重現；這些名稱的列與 2026-10-07 版**完全相同**（檔案整體 143,176 → 143,206 列，+30）。
- 前五輪 Top 10 與候補的法人——FanDuel Limited、Texaport Limited、Spire Global UK Limited、Proofpoint Limited、Bellrock Technology Limited、Clyde Space Ltd、Skyscanner、Scott Logic Limited、Waracle Ltd、Made Tech Ltd、Pulsion Technology Ltd、Encompass Corporation UK Limited、Rapid7、NatWest、JPMorgan Chase Bank, N.A.、Barclays Execution Services Limited／Barclays Bank UK PLC／Barclays Bank PLC、Godel、Tesco Personal Finance、Baillie Gifford——在 2026-10-09 版**皆仍在冊、列內容不變**。

### JPMorgan Glasgow、Barclays Glasgow 重新評估（特別要求 2）

| | JPMorgan Glasgow | Barclays Glasgow |
|---|---|---|
| Run 5 評級 | 中／中（規則 N＋規則 C） | 中／中（規則 N＋規則 C） |
| 本輪新證據（visa_facts6.md） | 法律雇主線索：最可能是 **JPMorgan Chase Bank, N.A.（London Branch，BR000746）**，信心「中」；該法人在冊。但集團另有 J.P. Morgan Asset Management (UK) Limited 等法人**不在冊**，AWM 相關職缺可能由它們聘用 | 最可能是 **Barclays Execution Services Limited**，信心「中高」；Barclays Bank PLC 年報稱 BX「provides technology, operations and functional services」；2025 GPG 資料列出 BX、Barclays Bank UK PLC、Barclays Bank PLC——**三者皆在冊** |
| 證據性質 | 推論，未驗證（職缺頁未標聘用法人） | 推論，未驗證；GPG 名單是否涵蓋所有英國聘用法人：未驗證 |
| 規則 C／S | 規則 S **不適用**（可能的聘用法人不全在冊）→ 規則 C 仍未滿足 | 規則 S **適用**（已知的英國聘用法人全部在冊）→ 規則 C 視為滿足（有條件） |
| 職缺 | Run 5 記錄的 SE II AWS Infrastructure 等（本輪未重新確認是否仍開放） | Run 5 記錄的 Platform Engineer（2026-09-25）、Developer Platform Engineer（2026-08-10）、Software Engineer（2026-10-02）（本輪未重新確認） |
| **Run 6 評級** | **中／中（不變）** | **中／低（難度由 中 改 低，有條件）** |
| 適配度 | 仍受規則 N 限制為 中 | 仍受規則 N 限制為 中 |
| Top 10 | **不進榜**；候補 | **不進榜**；候補（銀行類第一） |

**判斷說明**：中／低 在排序上仍低於所有 高／中（適配優先於難度，Run 2–5 一貫做法），所以 Barclays 即使改為「低」也排不進 Top 10（第 10 名 Bellrock 為 高／中）。**敏感度**：若取消規則 N（以職缺層級判適配），Barclays 為 高／低，應排在 Top 10 前 6 名內（與 GoCardless、Checkout.com 同級）；JPMorgan 為 高／中，會與 Texaport 等競爭第 7–10 名。這是本報告影響最大的判斷之一（第十節）。

### 更新後英國 Top 10（六輪合併，英國且有贊助者）

方法：沿用 Run 2–5——先依適配度與難度（高／低 > 高／中 > 中／低 > 中／中…），再依「有贊助資格」與「是否有確認開放的對口職缺」；前五輪 Top 10 的相對順序不動，新進者依規則 W 插入。

| 總排名 | 公司 | 輪次 | 適配／難度 | 排序理由 |
|---:|---|---|:-:|---|
| 1 | **Monzo（新）** | Run 6 | 高／低 | Monzo Bank Ltd 直接在冊＋Go 後端職缺明寫「We can sponsor visas」「We can help you relocate to the UK」；六輪中擔保證據最強 |
| 2 | FanDuel | Run 4 | 高／低 | 有贊助（FanDuel Limited，Edinburgh）＋現行 Edinburgh Java 後端職（「some experience」）；有條件。證據（法人一致＋初階要求）強於本輪三家「有條件的低」，排在其前 |
| 3 | **GoCardless（新）** | Run 6 | 高／低 | 法人一致在冊＋SRE II（Python／Golang、AWS／GCP、K8s），層級最接近；有條件（未提 visa） |
| 4 | **Checkout.com（新）** | Run 6 | 高／低 | 法人一致在冊＋Cloud Security、Detection & Threat（SIEM）、Golang 多筆；多為 Senior／5–6+ 年；有條件 |
| 5 | **Starling Bank（新）** | Run 6 | 高／低 | 法人一致在冊＋Engine 的 Cloud Security／Infrastructure；Engine 聘用法人未驗證；有條件 |
| 6 | **Version 1（新）** | Run 6 | 高／低 | 兩個英國法人皆在冊（規則 S）＋Belfast AWS DevOps（Go／TS）；有條件 |
| 7 | Texaport | Run 1 | 高／中 | 有贊助（Edinburgh）＋Cloud Engineer – UK（Experienced） |
| 8 | Spire Global UK | Run 2 | 高／中 | 有贊助＋Glasgow 多筆現行軟體職缺（需經驗） |
| 9 | Proofpoint Belfast | Run 5 | 高／中 | 持牌法人 Proofpoint Limited＋Belfast 多筆對口職；保留：Belfast 法人 Proofpoint NI Limited 不在冊 |
| 10 | Bellrock Technology | Run 1 | 高／中 | 有贊助（Edinburgh）；Graduate Product Engineer 貼文現況未證實 |

**退出 Top 10（轉候補）**：AAC Clyde Space、Skyscanner、Scott Logic、Waracle、Made Tech（皆 高／中，被 5 家新的 高／低 擠出；相對順序不變）。

**候補（依序）**：
1. AAC Clyde Space、Skyscanner、Scott Logic、Waracle、Made Tech（前五輪 Top 10，順序不變）。
2. **Wise**（Run 6，高／中；持牌且職缺多，但兩則對口職缺明文排除；Platform Engineer 可擔保即可升 低）。
3. Rapid7 Belfast、Pulsion Technology、Encompass Corporation（Run 1／5，高／中）。
4. Revolut、Kainos、Datactics、Data Intellect（Run 6，高／中；分別卡在年資／資格、SC、職缺狀態、職缺過期）。
5. **Barclays Glasgow**（Run 5→6，中／低，有條件）；**JPMorgan Glasgow**（中／中）；**Lloyds**（Run 6，中／中）；NatWest（Run 5，中／中）。
6. Godel Technologies（Run 2）、Focalise AI（Run 1，無贊助）、Ometria（Run 3，高／高）、Tesco Bank／IMS 與 Baillie Gifford（Run 4，時程互斥／資格不符）、SSE（Run 6，中／高，所有對口職缺都受規則 T 或明文不擔保）。

### 歐洲（非英國）Top 10（六輪合併）

方法：規則 Q（同 Run 5）。本輪非英國條目只有 Cork 6 家，沒有任何一家達到 Top 10 的證據水準（無 relocation／visa 字樣、無官方擔保名單）。visa_facts6 的荷蘭、德國、愛爾蘭國家層級事實也**沒有改變任何排序**：荷蘭門檻已知，但 Dennis 的薪資與 Glasgow 2028 的 top-200 狀態未知；Isar 仍因 §13 SÜG 清單本身未驗證而不能評「低」。**Top 10 與 Run 5 完全相同。**

| 排名 | 公司 | 輪次 | 地點 | 適配／難度 | 排序理由 |
|---:|---|---|---|:-:|---|
| 1 | Hadrian Security | Run 5 | Amsterdam, NL | 高／低 | IND 在冊（法人一致）＋Go/Python/K8s/PostgreSQL/AWS 資安平台職缺 |
| 2 | Picnic | Run 5 | Amsterdam, NL | 高／中 | IND＋relocation 團隊＋「no Dutch required」；職缺為 Java（2–5 年） |
| 3 | bol | Run 5 | Utrecht, NL | 高／中 | IND＋relocation allowance；最對口 Platform 職 validThrough 已過 |
| 4 | ICEYE | Run 5 | Espoo, FI | 高／中 | DevOps／Platform（Python/Go、AWS、K8s）＋公司層級 relocation；部分職缺需安全許可 |
| 5 | Isar Aerospace | Run 5 | Ottobrunn, DE | 高／中 | SIEM／EDR 資安職＋relocation bonus；§13 SÜG 對台灣的影響未驗證 |
| 6 | Bolt | Run 4 | Tallinn, EE | 高／中 | 明確搬遷方案＋工程／資安職稱 |
| 7 | Vinted | Run 4 | Vilnius, LT | 高／中 | 搬遷方案＋有日期的初階入口 |
| 8 | Coolblue | Run 5 | Rotterdam, NL | 高／中 | IND＋TypeScript/AWS 後端職；職缺全荷語、語言要求未明 |
| 9 | Group-IB | Run 5 | Amsterdam, NL | 高／中 | IND＋Golang／DevOps 職；地點只寫 Remote |
| 10 | Veriff | Run 4 | Tallinn, EE | 高／中 | 遠端標示最明確；僅資深職缺 |

**候補**：**OpenText Cork（新，Run 6，高／中；愛爾蘭備案中現行對口職缺最多——SRE／Cloud Ops、Python/Go、K8s——但無 relocation／visa 字樣，CSOL 職稱對應未驗證，依規則 Q 排在有簽證證據者之後）**、Einride、OutSystems、Talkdesk、Glovo、Myra、Feedzai、sennder、Zalando Dublin、Pipedrive、GlobalLogic Ukraine、Honeycomb、Qualcomm Cork、Medtronic Galway；Tisalabs Cork（Run 6，中／中）。OpenText 與 Zalando Dublin 的相對位置：OpenText 的對口職缺較多且新近，列在 Zalando Dublin 之前（判斷）。

### 與 Run 5 相比：本輪改變了什麼（What changed since Run 5）

1. **英國簽證事實改為官方原文確認**：Graduate visa 18 個月、£41,700／going rate、New Entrant 70%／£33,400／4 年上限（第二節）。前五輪的 18 個月假設成立；「£38,300」改為依 SOC 區分（2134 為 £38,290）。
2. **英國 Top 10 換血 5 家**：Monzo（第 1）、GoCardless（第 3）、Checkout.com（第 4）、Starling（第 5）、Version 1（第 6）進榜；AAC Clyde Space、Skyscanner、Scott Logic、Waracle、Made Tech 退為候補；FanDuel 由第 1 降到第 2，其餘前五輪條目相對順序不變。
3. **第一個「對口職缺本身明寫可擔保」的條目**：Monzo（「We can sponsor visas」）。
4. **Barclays Glasgow 改為 中／低（有條件）**；JPMorgan 維持 中／中；兩者仍不進 Top 10。
5. **新增規則 R–W**（fintech 適配、封閉集合法人、SC／工作權限制、薪資旁註、排除表、Top 10 插入）。
6. **登記冊換成 2026-10-09 版**：相關列沒有變化。
7. **自 Run 4 以來第一次有排除條目**（Run 5 為 0；本輪 5 家，含 3 家疑似停業）。
8. **SC 與既有工作權條款成為主要阻礙類型**（SSE、Kainos、Aberdeen City Council、Monzo intern、m3 Networks），以規則 T 統一處理。
9. **歐洲 Top 10 不變**；OpenText Cork 加入候補首位。

---

## 八、仍未解決的缺口

1. **產業 5（Film／media）完全沒有條目**：brief 列為五個產業之一，但 scout6 與 verified6 都沒有任何影視／媒體公司。
2. **愛爾蘭 CSOL 職稱對應**：cloud／DevOps／SRE／security engineer 會被歸到 2136、2139 或其他代碼：未驗證（官方文件無此對應）。CSEP 的「50% 以上員工為 EEA 國民」條件對 OpenText／Tisalabs 等是否成立：未驗證。CSEP 2026 金額兩頁不一致、2027–2030 各年數字：未驗證。
3. **Taiwan 國民能否取得 UK SC**：未驗證（只確認 SSE 寫「normally includes 5 years UK residency」）。
4. **聘用法人**：Lloyds（Workday 未標）、Starling 的 Engine by Starling、Version 1 個別職缺、JPMorgan 與 Barclays Glasgow（仍只是推論）——都未驗證。
5. **Wise Platform Engineer - Compute** 的擔保字樣：未驗證（決定 Wise 能否升 低）。
6. **未檢查的頁面**：Checkout.com Early Careers；Lloyds 畢業生頁（JS）；gamemaker.io/jobs（JS）；Bitwise 的 Teamtailor 職缺板；m3 Networks 職缺原頁（403）與官網 careers（JS）；Datactics PeopleHR 詳情（連結失效）；Renovite 官網；OSCR 原頁；愛爾蘭 CRO 原站；多數公司的 LinkedIn／Indeed。
7. **2028 梯次**：SSE、Kainos、Revolut、Version 1、Lloyds、JPMorgan、ScottishPower 的 2028 graduate 計畫是否接受 2028-09 畢業生、何時開放：全部未驗證。
8. **Student visa 到期日**：MSc 2027-09-01 至 2028-09-01 對應的 Student visa 實際到期日（決定 Graduate visa 最晚申請日）：未驗證。
9. **New Entrant 細節**：Student visa 期間是否計入 4 年上限（官方原文只提 Graduate visa）；Dennis 年齡（「under 26」條件）；£41,700 生效日——皆未驗證。
10. **個別職缺的 SOC**：決定 New Entrant 下限是 £33,400、£33,950、£36,610 還是 £38,290；全部未驗證。
11. **地區數量缺口**：Belfast 4 家（brief 目標約 5）；London 7 家（目標約 8）。
12. **前幾輪職缺未重新確認**：JPMorgan、Barclays 的 Run 5 職缺在本輪沒有重新抓取；Barclays 的 中／低 以 Run 5（2026-10-07）的開放狀態為準。
13. **Revolut、Datactics 的 confirmation statement 逾期**：行政警示，後續是否補件：未驗證。

## 九、verified6.md 的不一致與疑點

1. **CSOL 對應寫成事實**：#21–26（Cork）的表格把「software engineer＝2136、其他 ICT＝2139」寫成既定對應，但同一檔案的簽證事實一節明說「這類職務會對到哪個 SOC code：未驗證」。另外愛爾蘭 CSOL 代碼與英國 SOC 2020 going rates 表不同（軟體開發：愛爾蘭 2136、英國 2134），容易混用。
2. **New Entrant 出處標錯**：visa_facts6 寫「（同一頁）」指 /skilled-worker-visa/your-job，但完整條文（70%、under 26、Student／Graduate 條件、4 年上限）實際在 /skilled-worker-visa/when-you-can-be-paid-less；/your-job 只有「at least £33,400」一句（本報告 WebFetch 核對）。
3. **Graduate visa 費用標示不精確**：「18 months - it will cost £1,152.50」是 healthcare surcharge；申請費 £937 另計（官方 /how-much-it-costs）。
4. **graduate 開始時間**：總覽寫「所有畢業生梯次皆為 2027 年入職」；D 批說 Kainos 為「2027-06／08／09」，但逐家表格只列一則「August 2027 Start Date」——6 月與 9 月梯次沒有出處。
5. **Kainos 限制混在一起**：總覽寫「Kainos 畢業生與 platform 職缺需無條件工作權及 SC 許可」；逐家表格顯示「unconditional right to work」屬於 graduate 職、platform 職則是 SC／Active SC，兩者條件不同。
6. **合併檔沒有「## 計數」節**：前幾輪的 verified 檔有獨立計數節；本輪計數只在標題與總覽（本報告自行核對：38＝營運 33＋存疑 2＋疑似停業 3；命中 16）。
7. **brief 目標 vs 實際**：A 蘇格蘭目標約 16 → 實際 20 列（評級 16）；B Cork 約 6 → 6；C London 約 8 → 7；D Belfast 約 5 → 4；總數目標約 35 → 38。另 #38 Spirit Telecom（Glasgow）不在 A 區列出的城市內（Glasgow 已在 Run 1 涵蓋），屬產業 2 的補位。
8. **scout 旗標 vs 查核結果**：scout6 標「uncertain」的 12 列（#1、3、9、10、11、12、15、16、18、20、24、27）中，多數查核後為營運中；反之 #38 Spirit Telecom scout 沒有標旗，查核後卻是「存疑」。
9. **Revolut 職缺狀態矛盾**：Observability Platform 職缺官方頁仍在、列在 Engineering 頁，但第三方 getro 稱已不收件——verified6 列為「待確認」，本報告不計為確認開放。
10. **Data Intellect 已過期仍掛出**：Python Engineer 頁寫 Closing Date 31/07/26，2026-10-12 仍在列表；verified6 把它列為職缺，本報告依規則 P 不計。
11. **Lloyds 擔保立場與前輪不同**：Run 4 記錄 LBG Edinburgh 畢業生職缺「We cannot sponsor visas」；本輪 Lloyds Bank plc 在冊、Backend SE 職缺未提擔保。兩者不一定矛盾（不同職缺、不同層級），但 verified6 沒有提到 Run 4 的紀錄。
12. **CSEP 金額**：€40,904 vs €40,909、€36,848 vs €36,849（官方兩頁不一致；verified6 已註明）。
13. **營運中但有行政警示**：Revolut（confirmation statement 應於 2026-09-13 前提交）、Datactics（應於 2026-09-04 前提交）都標「已確認營運」，警示只在備註中提到。

## 十、判斷與新規則揭露

1. **規則 R（fintech 視為軟體業）**：讓 Monzo、Starling、Revolut、Wise、GoCardless、Checkout.com 可評 高。Monzo、Starling 的 SIC 是 Banks，屬邊界；若不接受，兩者為 中／低，英國 Top 10 會改由 Clyde Space、Skyscanner 補上第 9、10 名。
2. **規則 S（封閉集合）**：使 Version 1 與 Barclays 得到「有條件的低」。前提是證據列出的法人就是全部英國聘用法人——Version 1 依 verified6 的兩個法人、Barclays 依 GPG 2025 名單；兩者都未驗證是否完整。
3. **Barclays 中／低、JPMorgan 中／中**：法律雇主線索是 verifier 的推論（信心中高／中），本報告只據此調整難度，不調整適配；兩者維持規則 N 的上限，均不進 Top 10。敏感度見第七節。
4. **規則 N 仍適用於傳統銀行**：這是 Run 4 以來的可比性選擇；它是 Barclays、JPMorgan、Lloyds 排名偏低的主因。
5. **規則 T（SC／既有工作權）**：把 SSE、Kainos、Aberdeen City Council、Monzo intern、m3 Networks 的相關職缺排除在「對口開放職缺」之外。Taiwan 國民的 SC 資格本身未驗證；排除的依據是「5 年英國居住」與「既有工作權」條款在 Dennis 時程內不可能滿足（推論）。
6. **高／低 內部排序（規則 W）**：Monzo > FanDuel > GoCardless > Checkout.com > Starling > Version 1。依據是擔保證據強度與層級接近度，屬判斷；FanDuel 放在三家「有條件的低」之前，是因為它的法人與初階要求在 Run 4 已確認。
7. **Version 1、Starling 等「有條件的低」**：職缺內文沒有提 visa／sponsorship；「低」只代表持牌＋確認開放對口職缺（規則 A），**不代表會擔保 Dennis**。
8. **Wise 評 中**：兩則對口職缺明文排除，Platform Engineer 擔保字樣未知；依規則 K（明文排除未達多數）取中。
9. **排除 5 家並給參考評級（規則 V）**：Add Energy、Spirit Telecom 只是「存疑」，不是確定停業；排除是保守做法。參考評級不計入任何統計。
10. **薪資旁註不改評級（規則 U）**：例如 SSE graduate £35,000 是否低於門檻取決於 SOC（未驗證）；只作旗標。
11. **歐洲 Top 10 不變**：Cork 條目沒有簽證證據；OpenText 列候補首位、排在 Zalando Dublin 前（判斷）。
12. **時區與日期**：GMT／BST 截止時間已換算為 TST；Kainos「August 2027」以 2027-08-01 估；天數以檢查日 2026-10-12 為基準；月數＝天數÷30.44。
13. **「未檢查」與「沒有職缺」**：只有官方頁面明示時才寫「目前無職缺」；頁面載入失敗一律寫「未檢查」。
14. **官方查核範圍**：本報告只重新抓取英國 gov.uk 的 4 個頁面（graduate-visa、how-much-it-costs、your-job、when-you-can-be-paid-less）與 going rates 表；愛爾蘭、荷蘭、德國的簽證事實沿用 verifier 的引用，未逐字重抓。
15. **無對外動作**：本報告沒有寄信、投遞、申請或聯絡任何公司。
