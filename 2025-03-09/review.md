# 業務連續性與災難恢復指南

• 符合 NIST 標準與指南
NIST 開發並發布標準、指南和其他出版物，以協助聯邦機構實施 2002 年的《聯邦資訊安全管理法案》(FISMA)，並管理具有成本效益的計畫，以保護其資訊和資訊系統。
• 聯邦資訊處理標準 (FIPS) 由 NIST 根據 FISMA 制定。 FIPS 經商務部長批准，對聯邦機構具有強制性和約束力。 由於 FISMA 要求聯邦機構遵守這些標準，因此機構不得放棄使用它們。

聯邦資訊系統應變計畫指南
目錄
執行摘要....................................................................................................................1
第 1 章。 簡介 ....................................................................................................1
1.1 目的....................................................................................................................... 1
1.2 範圍.......................................................................................................................... 2
1.3 受眾 ..................................................................................................................... 3
1.4 文件結構 .................................................................................................................... 4
第 2 章。 背景 ....................................................................................................5
2.1 應變規劃與韌性 ........................................................................................ 5
2.2 計畫類型 ............................................................................................................ 7
2.2.1 業務連續性計畫 (BCP) ......................................................................8
2.2.2 業務持續運作 (COOP) 計畫............................................................8
2.2.3 危機溝通計畫............................................................................9
2.2.4 關鍵基礎設施保護 (CIP) 計畫.....................................................9
2.2.5 網路事件應變計畫 ......................................................................10
2.2.6 災難復原計畫 (DRP) ......................................................................10
2.2.7 資訊系統應變計畫 (ISCP)...............................................................10
2.2.8 佔用者緊急應變計畫 (OEP).................................................................10

## 應變規劃與韌性

- 機密性：保留對資訊存取和揭露的授權限制，包括保護個人隱私和專有資訊的手段。

  - 完整性：防止不當的資訊修改或破壞，包括確保資訊的不可否認性和真實性

- 可用性：確保及時可靠地存取和使用資訊。

  2.2.1 業務連續性計畫 (BCP)

- BCP 側重於在發生中斷期間和之後維持組織的任務/業務流程。
- 任務/業務流程的一個例子可能是組織的薪資流程或客戶服務流程。
- BCP 可以為單個業務單元內的任務/業務流程編寫，也可以處理整個組織的流程。
- BCP 也可以被限定為僅處理被視為優先事項的功能。
- BCP 可以與 COOP 計畫結合使用，以進行長期恢復，允許在資源或時間允許的情況下，其他功能上線。 由於任務/業務流程使用資訊系統 (IS)，因此業務連續性規劃人員必須與資訊系統所有者協調，以確保 BCP 期望與 IS 功能相符。

  2.2.2 業務持續運作 (COOP) 計畫
  COOP 側重於在替代地點恢復組織的任務關鍵功能 (MEF)，並在返回正常運作之前執行這些功能長達 30 天。 其他功能或現場辦公室級別的功能，可以由 BCP 處理。 通常，COOP 計畫中不處理不需要遷移到替代地點的輕微威脅或中斷。
  COOP 計畫的標準要素包括：
  | 程式計畫與程序 | 持續性溝通 |
  |---|---|
  | 風險管理 | 重要記錄管理 |
  | 預算與資源獲取 | 人力資本 |
  | 基本功能 | 測試、訓練與演習 |
  | 繼承順序 | 權力下放 |
  | 權力委託 | 重組 |
  | 持續性設施 | |

聯邦資訊系統應變計畫指南
COOP 由 HSPD-20/NSPD-51、FCDs 1 和 2 以及《國家連續性政策實施計畫》(NCPIP) 授權； ISCP 由 FISMA 授權給聯邦組織。
權限
o COOP 功能有特定標準； 並非所有政府任務/業務流程都符合 COOP 標準。
o COOP 功能可能由資訊系統支援。
o 資訊系統支援政府任務/業務流程，但並非所有政府任務/業務流程都屬於 COOP 的範圍。
範圍
COOP 規劃適用於聯邦政府部門和機構的任務關鍵功能。
ISCP 適用於聯邦組織中的所有資訊系統。
COOP 與 ISCP – 基本事實

2.2.3 危機溝通計畫
組織應使用危機溝通計畫，記錄發生中斷時內部和外部溝通的標準程序。 危機溝通計畫通常由負責公共外展的組織制定。 該計畫為適合事件的溝通提供了各種格式。 危機溝通計畫通常指定特定個人作為唯一權威，負責回答公眾提出的問題或向公眾提供有關緊急應變的資訊。 它還可能包括向人員傳播事件狀態報告的程序，以及用於公共新聞稿的模板。 危機溝通計畫程序應傳達給組織的 COOP 和 BCP 規劃人員，以確保這些計畫包括明確的指示，即只有授權官員才能向公眾發布批准的聲明。 附錄 D 提供了對危機溝通計畫所涵蓋主題和資訊資源的進一步討論。

2.2.4 關鍵基礎設施保護 (CIP) 計畫
關鍵基礎設施和關鍵資源 (CIKR) 是指國家基礎設施的那些組成部分，它們被認為至關重要，以至於它們的損失將對美國的安全、保障、經濟和/或健康產生削弱作用。10 CIP 計畫是一套旨在保護和恢復這些國家資產並減輕風險和漏洞的政策和程序。 CIP 計畫定義了保護的角色和責任，建立合作夥伴關係和資訊共享關係，實施國家基礎設施保護計畫 (NIPP) 和國土安全總統指令 (HSPD) - 7 中定義的 CIKR 資產的風險管理框架，並整合聯邦、州和地方緊急準備、保護和關鍵基礎設施的彈性。

聯邦資訊系統應變計畫指南
2.2.5 網路事件應變計畫
網路事件應變計畫 11 建立了處理針對組織資訊系統的網路攻擊的程序。12 這些程序旨在使安全人員能夠識別、緩解和從惡意電腦事件中恢復，例如未經授權存取系統或資料、拒絕服務或未經授權更改系統硬體、軟體或資料（例如，惡意邏輯，如病毒、蠕蟲或特洛伊木馬）。 該計畫可以作為 BCP 的附錄。
2.2.6 災難復原計畫 (DRP)
DRP 適用於主要、通常是物理性的服務中斷，這些中斷會拒絕在較長時間內存取主要設施基礎設施。 DRP 是一個以資訊系統為中心的計畫，旨在在緊急情況後，在替代地點恢復目標系統、應用程式或電腦設施基礎設施的可操作性。 DRP 可以由多個資訊系統應變計畫支援，以處理在建立替代設施後受影響的單個系統的恢復。 DRP 可以通過在替代位置恢復任務/業務流程或任務關鍵功能的支援系統來支援 BCP 或 COOP 計畫。 DRP 僅處理需要遷移的資訊系統中斷。
2.2.7 資訊系統應變計畫 (ISCP)
ISCP 提供了在系統中斷後評估和恢復系統的既定程序。 ISCP 提供了系統恢復所需的重要資訊，包括角色和責任、庫存資訊、評估程序、詳細的恢復程序以及系統測試。
ISCP 與 DRP 的主要區別在於，資訊系統應變計畫程序是為系統的恢復而開發的，無論地點或位置如何。 ISCP 可以在系統的當前位置或替代地點啟動。 相比之下，DRP 主要是一個特定於站點的計畫，其程序旨在將一個或多個資訊系統的操作從受損或無法居住的位置轉移到臨時替代位置。 一旦 DRP 成功地將資訊系統站點轉移到替代站點，每個受影響的系統將使用其各自的 ISCP 來恢復、恢復和測試系統，並將其投入運行。
2.2.8 佔用者緊急應變計畫 (OEP)
OEP 概述了在發生威脅或事件（威脅人員、環境或財產的健康和安全）時，設施佔用者的第一反應程序。 此類事件包括火災、炸彈威脅、化學品洩漏、工作場所的家庭暴力或醫療緊急情況。 OEP 中還處理了要求人員留在建筑物內而不是疏散的事件的就地避難程序。 OEP 在設施級別開發，特定於建築物的地理位置和結構設計。 一般服務管理局 (GSA) 擁有的設施根據 GSA OEP 模板維護計畫。 設施 OEP 可以附錄到 COOP 或 BCP，但作為對事件的第一反應單獨執行。 附錄 D 中討論了規劃人員安全和疏散的各個方面。

聯邦資訊系統應變計畫指南

總結了計畫的類型。 確定的計畫類型被單獨實施或與其他計畫協調實施，以適應中斷事件。
表 2-2：計畫類型
計畫 目的 範圍 計畫關係
業務
連續性
計畫 (BCP)
提供在從重大中斷中恢復的同時維持任務/業務運作的程序。
處理比 COOP MEF 更低或更擴展級別的任務/業務流程。
以任務/業務流程為中心的計畫，可以與 COOP 計畫協調啟動，以維持非 MEF。
業務持續
運作
(COOP) 計畫
提供程序和指南，以在替代地點維持組織的 MEF 長達 30 天； 由聯邦指令授權。
處理設施的 MEF； 資訊系統僅根據其對任務關鍵功能的支援來處理。
以 MEF 為中心的計畫，也可能啟動幾個業務單元級別的 BCP、ISCP 或 DRP，具體情況而定。
危機
溝通
計畫
提供傳播內部和外部溝通的程序； 提供關鍵狀態資訊和控制謠言的手段。
處理與人員和公眾的溝通； 不是以資訊系統為中心。
基於事件的計畫，通常與 COOP 或 BCP 一起啟動，但在公共曝光事件期間可以單獨使用。
關鍵
基礎設施
保護
(CIP) 計畫
提供保護國家關鍵基礎設施組成部分的政策和程序，如《國家基礎設施保護計畫》中所定義。
處理由機構或組織支援或運營的關鍵基礎設施組成部分。
支援具有關鍵基礎設施和關鍵資源資產的組織的 COOP 計畫的風險管理計畫。
網路
事件
應變
計畫
提供緩解和糾正網路攻擊（例如病毒、蠕蟲或特洛伊木馬）的程序。
處理受影響系統的緩解和隔離、清理以及最大限度地減少資訊丟失。
以資訊系統為中心的計畫，可以啟動 ISCP 或 DRP，具體取決於攻擊的程度。
災難
復原
計畫 (DRP)
提供將資訊系統運作遷移到替代位置的程序。
在具有長期影響的重大系統中斷後啟動。
以資訊系統為中心的計畫，啟動一個或多個 ISCP 以恢復單個系統。
資訊
系統
應變
計畫 (ISCP)
提供恢復資訊系統的程序和功能。
處理在當前或（如果適當）替代位置恢復單個資訊系統。
以資訊系統為中心的計畫，可以獨立於其他計畫啟動，也可以作為與 DRP、COOP 和/或 BCP 協調的更大恢復工作的一部分啟動。
佔用者
緊急
應變
計畫 (OEP)
提供協調的程序，以最大限度地減少生命損失或傷害，並保護財產免受物理威脅。
側重於特定於特定設施的人員和財產； 不是基於任務/業務流程或資訊系統。
基於事件的計畫，在事件發生後立即啟動，先於 COOP 或 DRP 啟動

Backup and Recovery
Backup and recovery methods and strategies are a means to restore system operations quickly and
effectively following a service disruption. The methods and strategies should address disruption impacts
and allowable downtimes identified in the BIA and should be integrated into the system architecture
during the Development/Acquisition phase of the SDLC. A wide variety of recovery approaches may be
considered, with the appropriate choice being highly dependent upon the incident, type of system,
BIA/FIPS 199 impact level, and the system’s operational requirements.22 Specific recovery methods
further described in Section 3.4.2 should be considered and may include commercial contracts with
alternate site vendors, reciprocal agreements with internal or external organizations, and service-level
agreements (SLAs) with equipment vendors. In addition, technologies such as redundant arrays of
independent disks (RAID), automatic failover, UPS, server clustering, and mirrored systems should be
considered when developing a system recovery strategy.
Several alternative approaches should be considered when developing and comparing strategies, including
cost, maximum downtimes, security, recovery priorities, and integration with larger, organization-level
contingency plans. Table is an example that can assist in identifying the linkage of FIPS 199 impact
level for the availability security objective, recovery priority, backup, and recovery strategy.
Table 3-2: FIPS 199 Category Backup & Strategy Examples
FIPS 199
Availability
Impact Level
Information System Target Priority and
Recovery
Backup / Recovery Strategy23
Low Low priority - any outage with little impact,
damage, or disruption to the organization.
Backup: Tape backup
Strategy: Relocate or Cold site
Moderate Important or moderate priority - any
system that, if disrupted, would cause a
moderate problem to the organization and
possibly other networks or systems.
Backup: Optical backup,
WAN/VLAN replication
Strategy: Cold or Warm site
22 Chapter 5, Technical Contingency Planning Considerations, provides detailed discussion of recovery methods applicable to
specific types of information systems.
23 Additional recovery strategy technical details and descriptions can be found in Sections 3.4.2 through 3.4.6.
CHAPTER 3 20
CONTINGENCY P LANNING G UIDE FOR F EDERAL I NFORMATION SYSTEMS
Backup / Recovery Strategy23
FIPS 199 Information System Target Priority and
Availability Recovery
Impact Level
High Mission-critical or high priority - the
damage or disruption to these systems
would cause the most impact on the
organization, mission, and other networks
and systems.
Backup: Mirrored systems and
disc replication
Strateg
//
CONTINGENCY P LANNING G UIDE FOR F EDERAL I NFORMATION SYSTEMS
Backup / Recovery Strategy23
FIPS 199 Information System Target Priority and
Availability Recovery
Impact Level
High Mission-critical or high priority - the
damage or disruption to these systems
would cause the most impact on the
organization, mission, and other networks
and systems.
Backup: Mirrored systems and
disc replication
Strategy: Hot site
3.4.2 Backup Methods and Offsite Storage
System data should be backed up regularly. Policies should specify the minimum frequency and scope of
backups (e.g., daily or weekly, incremental or full) based on data criticality and the frequency that new
information is introduced. Data backup policies should designate the location of stored data, file-naming
conventions, media rotation frequency, and method for transporting data offsite. Data may be backed up
on magnetic disk, tape, or optical disks, such as compact disks (CDs). The specific method chosen for
conducting backups should be based on system and data availability and integrity requirements. These
methods may include electronic vaulting, network storage, and tape library systems.24
It is good business practice to store backed-up data offsite. Commercial data storage facilities are
specially designed to archive media and protect data from threatening elements. If using offsite storage,
data is backed up at the organization’s facility and then labeled, packed, and transported to the storage
facility. If the data is required for recovery or testing purposes, the organization contacts the storage
facility requesting specific data to be transported to the organization or to an alternate facility.25
Commercial storage facilities often offer media transportation and response and recovery services. When
selecting an offsite storage facility and vendor, the following criteria should be considered:
 Geographic area: distance from the organization and the probability of the storage site being
affected by the same disaster as the organization’s primary site;
 Accessibility: length of time necessary to retrieve the data from storage and the storage facility’s
operating hours;
 Security: security capabilities of the shipping method, storage facility, and personnel; all must
meet the data’s security requirements;
 Environment: structural and environmental conditions of the storage facility (i.e., temperature,
humidity, fire prevention, and power management controls); and
 Cost: cost of shipping, operational fees, and disaster response/recovery services.
3.4.3 Alternate Sites
As stated in Section 2.1, NIST SP 800-53 identifies the CP controls for information systems. The FIPS
199 security categorization for the availability security objective determines which controls apply to a
particular system. For example, an information system categorized with a low-availability security
objective does not require alternate storage or a processing site (CP-6 and CP-7, respectively), and an
information system with a moderate-availability security objective requires the system backup and testing
24 Additional technical considerations are discussed in Chapter 5.
25 Backup tapes should be tested regularly to ensure that data are being stored correctly and that the files may be retrieved without
errors or lost data. Also, the ISCP Coordinator should test the backup tapes at the alternate site, if applicable, to ensure that the
site supports the same backup configuration that the organization has implemented.
CHAPTER 3 21
CONTINGENCY P LANNING G UIDE FOR F EDERAL I NFORMATION SYSTEMS
the backup (CP-9 [1]). Further details and descriptions of the contingency planning controls are provided
in Appendix E.
Although major disruptions with long-term effects may be rare, they should be accounted for in the
contingency plan. Thus, for all FIPS 199 moderate- or high-impact systems, the plan should include a
strategy to recover and perform system operations at an alternate facility for an extended period.
Organizations may consider FIPS 199 low-impact systems for alternate site processing, but that is an
organizational decision and not required. In general, three types of alternate sites are available:
 Dedicated site owned or operated by the organization;
 Reciprocal agreement or memorandum of agreement with an internal or external entity; and
 Commercially leased facility.
Regardless of the type of alternate site chosen, the facility must be able to support system operations as
defined in the contingency plan. The three alternate site types commonly categorized in terms of their
operational readiness are cold sites, warm sites, or hot sites.26 Other variations or combinations of these
can be found, but generally all variations retain similar core features found in one of these three site types.
Progressing from basic to advanced, the sites are described below.
 Cold Sites are typically facilities with adequate space and infrastructure (electric power,
telecommunications connections, and environmental controls) to support information system
recovery activities.
 Warm Sites are partially equipped office spaces that contain some or all of the system hardware,
software, telecommunications, and power sources.
 Hot Sites are facilities appropriately sized to support system requirements and configured with
the necessary system hardware, supporting infrastructure, and support personnel.
As discussed above, these three alternate site types are the most common. There are also variations, and
hybrid mixtures of features from any one of the three. Each organization should evaluate its core
requirements in order to establish the most effective solution. Two examples of variations to the site
types are:
 Mobile Sites are self-contained, transportable shells custom-fitted with specific
telecommunications and system equipment necessary to meet system requirements.
 Mirrored Sites are fully redundant facilities with automated real-time information mirroring.
Mirrored sites are identical to the primary site in all technical respects.
//

Table 3-34: Sample Alternate Site Criteria
Site Cost Hardware
Equipment Telecommunications Setup Time Location
Cold Site Low None None Long Fixed
Warm Site Medium Partial Partial/Full Medium Fixed
Hot Site Medium/High Full Full Short Fixed
//

Table 3-6: ISCP TT&E Activities
TT&E Event Sample Activity
FIPS 199
Availability
Security
Objective
ISCP Training
(CP-3)
A seminar and/or briefing used to
familiarize personnel with the overall ISCP
purpose, phases, activities, and roles and
responsibilities.
Low Impact = Yes
Mod. Impact = Yes
High Impact = Yes
Instruction
(CP-3)
Instruction of contingency personnel on
their roles and responsibilities within the
ISCP and includes refresher training. (For
a high-impact system, incorporate
simulated events.)
Low Impact = Yes
Mod. Impact = Yes
High Impact = Yes
Contingency Plan Test
/ Exercise (CP-4)
Test and/or exercise the contingency plan
to determine effectiveness and the
organization’s readiness. This could
include planned and unplanned
maintenance activities
Low Impact = Yes
Mod. Impact = Yes
High Impact = Yes
Tabletop Exercise
(CP-4)
Discussion-based simulation of an
emergency situation in an informal, stress-
free environment; designed to elicit
constructive scenario-based discussions
for an examination of the existing ISCP
and individual state of preparedness.
Low Impact = Yes
CHAPTER 3 30
CONTINGENCY P LANNING G UIDE FOR F EDERAL I NFORMATION SYSTEMS
TT&E Event
FIPS 199
Availability
Sample Activity Security
Objective
Functional Exercise
(CP-4)
Simulation of a disruption with a system
recovery component such as backup tape
restoration or server recovery.
Mod. Impact = Yes
High Impact = Yes
Full-Scale Functional
Exercise (CP-4)
Simulation prompting a full recovery and
reconstitution of the information system to
a known state and ensures that staff are
familiar with the alternate facility.
High Impact = Yes
Alternate Processing
Site Recovery
(CP-4,CP-7)
Test/exercise the contingency plan at the
alternate processing site to familiarize
contingency personnel with the facility and
available resources and evaluate the site’s
capabilities to support contingency
operations. Includes a full recovery and
return to normal operations to a known
secure state. (For a high-impact system,
the alternate site should be fully configured
as defined in the plan.)
Low Impact = N/A
Mod. Impact = N/A
High Impact = Yes
System Backup
(CP-9)
Test backup information to verify media
reliability and information integrity. (For a
high-impact system, use sample backup
information and ensure that backup copies
are stored in a separate facility.)
Low Impact = N/A
Mod. Impact = Yes
High Impact = Ye

//
CONTINGENCY P LANNING G UIDE FOR F EDERAL I NFORMATION SYSTEMS
Chapter 4. Information System Contingency Plan Development
This chapter discusses the key elements that compose the ISCP. As described in Chapter 3, ISCP
development is a critical step in the process of implementing a comprehensive contingency planning
program. The plan contains detailed roles, responsibilities, teams, and procedures associated with
restoring an information system following a disruption. The ISCP should document technical capabilities
designed to support contingency operations and should be tailored to the organization and its
requirements. Plans need to balance detail with flexibility; usually, the more detailed the plan, the less
scalable and versatile the approach. The information presented here is meant to be a guide; nevertheless,
the plan format in this document may be modified as needed to better meet the user’s specific system,
operational, and organization requirements. Appendix A provides templates that organizations may use
to develop ISCPs for their information systems at the appropriate FIPS 199 impact level. The information
and templates provided are guides and may be modified, customized, and/or adapted as necessary to best
meet the specific system, operational, and organizational requirements for contingency planning.
Appendix D discusses planning considerations regarding personnel which should be coordinated with the
ISCP development.
As shown in Figure 4-1, this guide identifies five main components of the contingency plan. The
supporting information and plan appendices provide essential information to ensure a comprehensive
plan. The Activation and Notification, Recovery, and Reconstitution Phases address specific actions that
the organization should take following a system disruption or emergency. Each plan component is
discussed later in this section.
Supporting Information
• BIA
• POC lists
• Procedures
Activation and Notification Phase
• Activation criteria
• Notification procedures
• Outage assessment
Recovery Phase
• Sequence recovery activities
• Recovery procedures
• Escalation and notifications
Reconstitution Phase
• Concurrent processing
• Testing
• Notifications
• Cleanup
• Offsite data storage
• Backup
• Documentation
Appendices
• BIA
• POC lists
• Procedures
Plan Development
• Incorporate BIA
findings
• Document recovery
strategy
Figure 4-1: Contingency Plan Structur

4.3 Recovery Phase
Formal recovery operations begin after the ISCP has been activated, outage assessments have been
completed (if possible), personnel have been notified, and appropriate teams have been mobilized.
Recovery Phase activities focus on implementing recovery strategies to restore system capabilities, repair
damage, and resume operational capabilities at the original or new alternate location. At the completion
of the Recovery Phase, the information system will be functional and capable of performing the functions
identified in the plan. Depending on the recovery strategies defined in the plan, these functions could
include temporary manual processing, recovery and operation at an alternate system, or relocation and
recovery at an alternate site. It is feasible that only system resources identified as high priority in the BIA
will be recovered at this stage.
4.3.1 Sequence of Recovery Activities
When recovering a complex system, such as a wide area network (WAN) or virtual local area network
(VLAN) involving multiple independent components, recovery procedures should reflect system
priorities identified in the BIA. The sequence of activities should reflect the system’s MTD to avoid
significant impacts to related systems. Procedures should be written in a stepwise, sequential format so
system components may be restored in a logical manner. For example, if a LAN is being recovered after
a disruption, then the most critical servers should be recovered before other, less critical devices, such as
printers. Similarly, to recover an application server, procedures first should address operating system
restoration and verification before the application and its data are recovered. The procedures should also
include escalation steps and instructions to coordinate with other teams where relevant when certain
situations occur, such as:
 An action is not completed within the expected time frame;
 A key step has been completed;
 Item(s) must be procured; and
 Other system-specific concerns exist.
If conditions require the system to be recovered at an alternate site, certain materials will need to be
transferred or procured. These items may include shipment of data backup media from offsite storage,
hardware, copies of the recovery plan, and software programs. Procedures should designate the
appropriate team or team members to coordinate shipment of equipment, data, and vital records.
References to applicable appendices, such as equipment lists or vendor contact information, should be
made in the plan where necessary. Procedures should clearly describe requirements to package, transport,
and purchase materials required to recover the system.
4.3.2 Recovery Procedures
To facilitate Recovery Phase operations, the ISCP should provide detailed procedures to restore the
information system or components to a known state. Given the extensive variety of system types,
configurations, and applications, this planning guide does not provide specific recovery procedures.
Recovery considerations are detailed for each of the platform types in Chapter 5.
CHAPTER 4 39
CONTINGENCY P LANNING G UIDE FOR F EDERAL I NFORMATION SYSTEMS
Procedures should be assigned to the appropriate recovery team and typically address the following
actions:
 Obtaining authorization to access damaged facilities and/or geographic area;
 Notifying internal and external business partners associated with the system;
 Obtaining necessary office supplies and work space;
 Obtaining and installing necessary hardware components;
 Obtaining and loading backup media;
 Restoring critical operating system and application software;
 Restoring system data to a known state;
 Testing system functionality including security controls;
 Connecting system to network or other external systems; and
 Operating alternate equipment successfully.

//Maintenance of Data Security, Integrity, and Backup
Maintaining the integrity and security of system data and software is a key component in contingency
planning. Data integrity involves keeping data safe and accurate on the system’s primary storage devices.
There are several methods available to maintain the integrity of stored data. These methods use
redundancy and fault tolerance processes to store data on more than one drive and eliminate loss of data
from single drive failures. Data security involves protecting data both onsite and offsite from
unauthorized access or use. Encryption is a common method for securing stored system data. Encryption
is most effective when applied to both the primary data storage device and on backup media going to an
offsite location.37 If using encryption for offsite data storage, it is important that media readers (e.g., tape
drives, CD or DVD readers) are available at the alternate site location to correctly read the encrypted data
during recovery efforts. A solid key management process must be established so encrypted data is
available as needed. Keying material, which is the data used to establish and maintain the keys, needs to
be managed, ideally at a central location in the organization. These keys should be stored separate from,
but accessible to, the primary encrypted backup data.38
Keeping backups of data in a secure offsite location allows for a ready access to backups during a
contingency event. An effective data backup process is crucial to an ISCP Coordinator’s overall recovery
strategy. Data backups are done primarily for recovery purposes. Backups can be done through many
different methods and techniques. MTD determinations and security requirements from the BIA help
dictate the best method for backing up a particular system for recovery.
Data backups should be conducted on all systems on a regular basis. Systems can be backed up for
individual computers or on a centralized storage device, such as network attached storage (NAS) or
storage area network (SAN). There are three common methods for performing system backups:
 Full. A full backup captures all files on the disk or within the folder selected for backup.
Because all backed-up files are recorded to a single media or media set, locating a particular file
or group of files is simple. However, the time required to perform a full backup can be lengthy.
In addition, maintaining multiple iterations of full backups of files that do not change frequently
(such as system files) could lead to excessive, unnecessary media storage requirements.
 Incremental. An incremental backup captures files that were created or changed since the last
backup, regardless of backup type. Incremental backups afford more efficient use of storage
media, and backup times are reduced. However, to recover a system from an incremental backup,
media from different backup operations may be required. For example, consider a case in which
a directory needs to be recovered. If the last full backup was performed three days prior and one
37 For further information on encryption, see NIST SP 800-21, Guideline for Implementing Cryptography in the Federal
Government, December 2005.
38 For further information on key management, see NIST SP 800-57, Recommendation for Key Management, March 2007.
CHAPTER 5 44
CONTINGENCY P LANNING G UIDE FOR F EDERAL I NFORMATION SYSTEMS
file had changed each day, then the media for the full backup and for each day’s incremental
backups would be needed to restore the entire directory.
 Differential. A differential backup stores files that were created or modified since the last full
backup. Therefore, if a file is changed after the previous full backup, a differential backup will
save the file each time until the next full backup is completed. A differential backup takes less
time to complete than a full backup. Restoring from a differential backup may require fewer
media than an incremental backup because only the full backup media and the last differential
media would be needed. As a disadvantage, differential backups take longer to complete than
incremental backups because the amount of data since the last full backup increases each day
until the next full backup is executed.

//
Maintenance of Data Security, Integrity, and Backup
Maintaining the integrity and security of system data and software is a key component in contingency
planning. Data integrity involves keeping data safe and accurate on the system’s primary storage devices.
There are several methods available to maintain the integrity of stored data. These methods use
redundancy and fault tolerance processes to store data on more than one drive and eliminate loss of data
from single drive failures. Data security involves protecting data both onsite and offsite from
unauthorized access or use. Encryption is a common method for securing stored system data. Encryption
is most effective when applied to both the primary data storage device and on backup media going to an
offsite location.37 If using encryption for offsite data storage, it is important that media readers (e.g., tape
drives, CD or DVD readers) are available at the alternate site location to correctly read the encrypted data
during recovery efforts. A solid key management process must be established so encrypted data is
available as needed. Keying material, which is the data used to establish and maintain the keys, needs to
be managed, ideally at a central location in the organization. These keys should be stored separate from,
but accessible to, the primary encrypted backup data.38
Keeping backups of data in a secure offsite location allows for a ready access to backups during a
contingency event. An effective data backup process is crucial to an ISCP Coordinator’s overall recovery
strategy. Data backups are done primarily for recovery purposes. Backups can be done through many
different methods and techniques. MTD determinations and security requirements from the BIA help
dictate the best method for backing up a particular system for recovery.
Data backups should be conducted on all systems on a regular basis. Systems can be backed up for
individual computers or on a centralized storage device, such as network attached storage (NAS) or
storage area network (SAN). There are three common methods for performing system backups:
 Full. A full backup captures all files on the disk or within the folder selected for backup.
Because all backed-up files are recorded to a single media or media set, locating a particular file
or group of files is simple. However, the time required to perform a full backup can be lengthy.
In addition, maintaining multiple iterations of full backups of files that do not change frequently
(such as system files) could lead to excessive, unnecessary media storage requirements.
 Incremental. An incremental backup captures files that were created or changed since the last
backup, regardless of backup type. Incremental backups afford more efficient use of storage
media, and backup times are reduced. However, to recover a system from an incremental backup,
media from different backup operations may be required. For example, consider a case in which
a directory needs to be recovered. If the last full backup was performed three days prior and one
37 For further information on encryption, see NIST SP 800-21, Guideline for Implementing Cryptography in the Federal
Government, December 2005.
38 For further information on key management, see NIST SP 800-57, Recommendation for Key Management, March 2007.
CHAPTER 5 44
CONTINGENCY P LANNING G UIDE FOR F EDERAL I NFORMATION SYSTEMS
file had changed each day, then the media for the full backup and for each day’s incremental
backups would be needed to restore the entire directory.
 Differential. A differential backup stores files that were created or modified since the last full
backup. Therefore, if a file is changed after the previous full backup, a differential backup will
save the file each time until the next full backup is completed. A differential backup takes less
time to complete than a full backup. Restoring from a differential backup may require fewer
media than an incremental backup because only the full backup media and the last differential
media would be needed. As a disadvantage, differential backups take longer to complete than
incremental backups because the amount of data since the last full backup increases each day
until the next full backup is executed.

CONTINGENCY P LANNING G UIDE FOR F EDERAL I NFORMATION SYSTEMS
5.1.3 Protection of Resources
Part of a successful contingency planning policy is making a system resilient to environmental and
component-level failures that would otherwise cause system disruptions. There are several methods for
making valuable hardware and software resilient. Determination of the appropriate methods should be
based on risk-informed decisions. Depending on results of the risk management process, these methods
may or may not be applicable for a particular system.
The system and its data can become corrupt as a result of a power failure. Critical hardware, such as
servers, can be configured with dual power supplies to prevent corruption. The two power supplies
should be used simultaneously so that if the main power supply becomes overheated or unusable, the
second unit will become the main power source, resulting in no system disruption.
The second power supply will protect against hardware failure, but not power failure. However, a UPS
can protect the system if power is lost. A UPS usually provides 30 to 60 minutes of temporary backup
power to permit a graceful shutdown. A UPS can also protect against power fluctuations by filtering
incoming power and providing a steady power source. If high availability is required, a gas- or diesel-
powered generator may be needed. The generator can be wired directly into the site’s power system and
configured to start automatically when a power interruption is detected. A combination UPS/generator
system can provide clean, secure power for a system as long as fuel is available for the generator. Fuel
availability should be considered for those who opt for a UPS/generator to support their system
environment.
In addition to backing up data, organizations should also back up system software and drivers.
Organizations should store software and software licenses in an alternate location. This includes original
installation media, license terms and conditions, and license keys, if required. Image loads for client
systems (such as desktops and portable systems) should also be backed up and stored at an alternate
location, along with complete documentation of the software included in the image load, any
configuration information for the type of computer for which the image is intended, and installation
instructions.
Organizations may use third-party vendors to recover data from failed storage devices. Organizations
should consider the security risk of having their data handled by an outside company and ensure that
proper security vetting of the service provider is conducted before turning over equipment. The service
provider and employees should sign non disclosure agreements, be properly bonded, and adhere to
organization-specific security policies.
5.1.4 Adherence to Security Controls
The security controls established in NIST SP 800-53 provide a solid foundation for establishing
information system security, integrity, and contingency policies. Adherence to these controls for
contingency planning purposes helps protect an information system against threats that can disrupt
operations.
5.1.5 Identification of Alternate Storage and Processing Facilities
Backup media should be stored offsite in a secure, environmentally controlled location. When selecting
the offsite location, hours of the location, ease of accessibility to backup media, physical storage
limitations, and the contract terms should be taken into account. The ISCP Coordinator should reference
the organization’s resilience policy and the BIA to assist in determining how often backup media should
be tested. Each backup tape, cartridge, or disk should be uniquely labeled to ensure that the required data
CHAPTER 5 46
CONTINGENCY P LANNING G UIDE FOR F EDERAL I NFORMATION SYSTEMS
can be identified quickly in an emergency. This requires that the organization develop an effective media
marking and tracking strategy.
Alternate processing facilities provide a location for an organization to resume system operations in the
event of a catastrophic event that disables or destroys the systems primary facility. There are three
primary types of alternate processing facilities, corresponding to the level of readiness to function as a
system’s operations facility.
 Cold Sites. Cold sites are locations that have the basic infrastructure and environmental controls
available (such as electrical and HVAC), but no equipment or telecommunications established or
in place. There is sufficient room to house needed equipment to sustain a system’s critical
functions. Examples of cold sites include unused areas of a data center and unused office space
(if specialized data center environments are not required). Cold sites are normally the least
expensive alternate processing site solution, as the primary costs are only the lease or
maintenance of the required square footage for recovery purposes. However, the recovery time is
the longest, as all system equipment (including telecommunications) will need to be acquired or
purchased, installed, tested, and have backup software and data loaded and tested before the
system can be operational. Depending on the size and complexity of a system, recovery could
take several days to weeks to complete.
 Warm Sites. Warm sites are locations that have the basic infrastructure of cold sites, but also
have sufficient computer and telecommunications equipment installed and available to operate
the system at the site. However, the equipment is not loaded with the software or data required to
operate the system. Warm sites should have backup media readers that are compatible with the
system’s backup strategy. Warm sites may not have equipment to run all systems or all
components of a system, but rather only enough to operate critical mission/business processes.
An example of a warm site is a test or development site that is geographically separate from the
production system. Equipment may be in place to operate the system, but would require reverting
to the current production level of the software, loading the data from backup media, and
establishing communications to users. Another example is available equipment at an alternate
facility that is running noncritical systems and that could be transitioned to run a critical system
during a contingency event. A warm site is more expensive than a cold site, as equipment is
purchased and maintained at the warm site, with telecommunications in place. Some costs may
be offset by using equipment for noncritical functions or for testing. Recovery to a warm site can
take several hours to several days, depending on system complexity and the amount of data to be
restored.
 Hot Sites. Hot sites are locations with fully operational equipment and capacity to quickly take
over system operations after loss of the primary system facility. A hot site has sufficient
equipment and the most current version of production software installed, and adequate storage for
the production system data. Hot sites should have the most recent version of backed-up data
loaded, requiring only updating with data since the last backup. In many cases, hot site data and
databases are updated concurrently with or soon after the primary data and databases are updated.
Hot sites also need a way to quickly move system users’ connectivity from the primary site. One
example of a hot site is two identical systems at alternate locations that are in production, serving
different geographical locations or load balancing production workload. Each location is built to
handle the full workload, and data is continuously synchronized between the systems. This is the
most expensive option, requiring full operation of a system at an alternate location and all
telecommunications capacity, with the ability to maintain or quickly update the operational data
and databases. Hot sites also require having operational support nearly equal to the production
CHAPTER 5 47
CONTINGENCY P LANNING G UIDE FOR F EDERAL I NFORMATION SYSTEMS
The ISCP Coordinator should look at information provided in the BIA to determine what critical
mission/business processes a system supports, the MTD, and the impact loss of the system would have on
the business to establish what type of recovery site is needed. An information system recovery strategy
may incorporate one or more of these types of alternate processing facilities. For example, some
functionality of a system may be highly critical and require a hot site to minimize the downtime and
impact on mission/business processes. However, other functionality of the same system, such as a
reporting or batch printing process, may be able to be down for several days with little impact and would
just need extra space in the alternate facility to place additional equipment after it is purchased.
