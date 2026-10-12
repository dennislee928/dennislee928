# GitHub 履歷衛生檢查清單（zh-Hant）

**對象：** Pei-Chen (Dennis) Lee｜`dennislee928`  
**目的：** 英國 2026–27 求職／格大 MSc 前，把公開檔案調成「可給招聘官直接點開」的狀態  
**原則：** 不發明就業事實；優先 UI 操作；API／PAT 若無權限就改用 Settings 畫面  
**相關連結：** https://github.com/dennislee928

---

## 優先級一覽

| 優先級 | 項目 | 為何急 |
|--------|------|--------|
| **P0** | 改顯示名（Name） | 現行低俗顯示名會直接毀第一印象與 ATS／HR 篩選 |
| **P0** | NSFW／成人主題 repo 改私有或封存 | 公開搜尋與 org 足跡可被 recruiter 翻到 |
| **P0** | 成人 org 成員可見性隱藏或離開 | `quantumworld-dpdns-io` 約 20 個成人向公開庫 |
| **P1** | 取消不當精選（pins）→ 釘上安全作品 | Profile 首屏決定 10 秒判斷 |
| **P1** | 英文 bio 改寫（UK-ready） | 現 bio 仍像學生／雜訊，與現職不符 |
| **P2** | 低價值 IELTS／玩笑／SCP 等庫整理 | 噪音多，但不一定要當天全清 |
| **P2** | 確認 PAT 權限；必要時改用 Settings UI | Profile Name／部分可見性可能寫不進去 |

---

## 建議執行順序（照做）

### 1. 【P0】更改顯示名（Display Name）

**目標：** 把「現行低俗顯示名」改成正式姓名。

**建議名稱（擇一）：**
1. `Pei-Chen Lee`
2. `Dennis Lee`
3. `Pei-Chen (Dennis) Lee` ← 與 LinkedIn／履歷最一致，優先推薦

**點擊路徑：**
1. 右上角頭像 → **Settings**
2. 左側 **Public profile**（或 **Profile**）
3. **Name** 欄位輸入上述建議名稱之一
4. 頁面底部 **Update profile**

**備註：**
- Login `dennislee928` 可暫時保留；顯示名才是 recruiter 先看到的字串。
- 歷史 commit 作者名不一定能全面改寫；**新 commit／profile 必須乾淨**即可。
- **PAT 可能沒有 profile write 權限** → API 改 Name 失敗時，一律改走上述 Settings UI，不要卡住。

---

### 2. 【P0】NSFW／敏感個人 repo：改私有或 Archive

**對象（至少處理）：**
- `BabyGrootCICD` 下與 **Sext-Adventure**、**B2B-sex-Routing…** 等成人／性主題相關庫
- 個人帳號下的 **SCP 玩笑庫**、明顯玩笑／低俗命名庫
- 其他公開 NSFW 內容（標題、README、demo 文案含成人產業語彙者）

**點擊路徑（單一 repo）：**
1. 進入該 repo
2. **Settings**
3. 捲到 **Danger Zone**
4. **Change visibility** → 選 **Make private**（招聘官看不到即可）
5. 若仍想留作私人備忘、但不想出現在活動流：同區可再 **Archive this repository**

**決策簡表：**
| 情況 | 建議 |
|------|------|
| 完全不想被搜到 | **Private** |
| 內容無價值、可公開當「已結束實驗」 | **Archive**（仍公開則標題要乾淨；成人主題優先 Private） |
| 不確定能否刪 | 先 Private，再決定是否 Delete |

---

### 3. 【P0】Org 成員可見性：隱藏或離開

**高風險 org：** `quantumworld-dpdns-io`（約 20 個成人向公開 repo）

**選項 A — 隱藏公開 membership（若仍需保留存取）：**
1. GitHub 頭像 → **Settings** → **Organizations**（或從 org 頁進自己的 membership）
2. 找到該 org → **Private／Hide** membership（介面文案可能為 *Public* / *Private* profile visibility）
3. 確認個人 profile 的 **Organizations** 區塊不再公開顯示該 org

**選項 B — Leave organization（若已無維護必要）：**
1. Org 頁 → 自己的 membership 設定 → **Leave organization**
2. 確認離開後公開 profile 不再列出

**注意：** 即使 membership 隱藏，**你仍是公開 repo 的 collaborator／contributor 時，commit 與 PR 仍可能被搜到**。成人主題庫本身仍應 Private／Archive（見步驟 2）。

---

### 4. 【P1】取消不當精選（Unpin）

**應從 profile pins 拿掉：**
- 成人 org／成人主題相關庫
- BabyGrootCICD 的 Sext-Adventure、B2B-sex-Routing… 等
- SCP 玩笑庫
- 低價值 IELTS 練習／雜訊庫（當 pin 會佔掉寶貴的 6 格）

**點擊路徑：**
1. 開啟 https://github.com/dennislee928
2. **Customize your pins**（或精選區塊的鉛筆／Edit）
3. 取消勾選上述庫 → **Save pins**

---

### 5. 【P1】釘上安全作品（Pin）

**建議 pins（最多 6，依現有安全清單）：**
1. `Ethic-Latex` — AI safety／評分引擎＋fullstack monorepo（旗艦）
2. `LiveHouseAAS` — Go + Next SaaS／產品向
3. `erh-guardian-agent` — HITL agent／可敘述安全產品
4. `firmware-research-demo` — 韌體／硬體安全 demo
5. `Smart_Zone` — 自動化／實用工程
6. mitake 相關 **ChipWhisperer／ESP32** 公開庫（資安平台敘事）

**點擊路徑：** 同步驟 4 → 勾選上列 → **Save pins**  
**建議順序：** 把 `Ethic-Latex`、`LiveHouseAAS`、`erh-guardian-agent` 放最前。

---

### 6. 【P1】Bio 改寫（英文、UK-ready）

**現況問題（對照稽核）：** bio 仍偏「NCCU Student／雜訊關鍵字」，與現職 **Cloud & Security Platform Engineer @ mitake.com.tw** 不符。

**建議英文 bio（可直接貼）：**

```text
Cloud & Security Platform Engineer @ mitake.com.tw · Go, TypeScript/Next.js, AWS, Cloudflare, DevSecOps · Incoming MSc Software Development (Conversion), University of Glasgow (2026–27)
```

**較短版：**

```text
Cloud & Security Platform · Go / Next.js · AWS · Cloudflare · DevSecOps · Incoming Glasgow MSc Software Development (2026–27)
```

**點擊路徑：** Settings → **Public profile** → **Bio** → **Update profile**

**可一併檢查（同頁）：**
- Company：`mitake.com.tw`（維持即可）
- Location：`Taipei` 或之後改 `Glasgow`／`United Kingdom`（入學後再調）
- Website：個人站若乾淨可留；**不要**連到成人 org 或 NSFW demo
- Email：公開聯絡用專業信箱即可

---

### 7. 【P2】其餘噪音清理（可分批）

- 個人帳下明顯 stub／skills fork／低價值 IELTS 練習庫：可 **Archive** 或改 Private，避免 profile「倉庫數很大但深度很淺」的觀感。
- 公開 PR／活動流若大量 NSFW 標題：對相關 repo 私有化後，新活動自然乾淨；舊活動無法全部抹除，但 recruiter 主看 profile＋pins。
- README／repo 描述含玩笑或成人語彙：改描述或私有化。

---

### 8. 【P2】權限與驗證

| 檢查 | 作法 |
|------|------|
| PAT 能否改 Name／bio | 若 `PATCH /user` 回 403／缺 `user` scope → **改用 Settings UI**（本清單預設路徑） |
| 公開預覽 | 無痕視窗開 `https://github.com/dennislee928`：確認顯示名、pins、org、bio |
| 搜尋抽樣 | GitHub 搜尋自己的 login + 敏感關鍵字，確認成人庫已不可見 |
| 與 LinkedIn 一致 | 顯示名與 LinkedIn「Pei-Chen (Dennis) Lee」對齊；LinkedIn **不要**連到成人 org（見 `linkedin-optimize-zh.md`） |

---

## 完成定義（Definition of Done）

- [ ] 顯示名為 Pei-Chen Lee／Dennis Lee／Pei-Chen (Dennis) Lee 之一（**不再是現行低俗顯示名**）
- [ ] 成人／NSFW／SCP 玩笑等敏感庫已 Private 或 Archive
- [ ] `quantumworld-dpdns-io` 公開 membership 已隱藏或已離開
- [ ] Pins 僅含安全清單（Ethic-Latex、LiveHouseAAS、erh-guardian-agent、firmware-research-demo、Smart_Zone、mitake ChipWhisperer／ESP32）
- [ ] Bio 為英文 UK-ready，並提及現職方向＋即將入學格大（2026–27）
- [ ] 無痕視窗抽查通過

---

## 時間建議

| 時機 | 動作 |
|------|------|
| **立即（本週）** | P0 全做完 |
| **入學前／開始認真投英國職前** | P1 全做完並再抽查 |
| **有空再清** | P2 分批 Archive |

**提醒：** 格大 MSc Software Development (Conversion) 為 **2026–27** 入學（非本學年）；GitHub bio 請寫 *Incoming*／*Starting 2026*，勿寫成已在讀。
