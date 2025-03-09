# SSCP Study Plan: Domain Analysis & Preparation

---

## 1. Domain Classification & Chapter-Level Topics

I’ve mapped each missed question to one of the 7 SSCP domains and its corresponding chapter/topic for targeted review.

| **Question Topic**                                  | **SSCP Domain**                              | **Specific Chapter/Topic**                  |
|-----------------------------------------------------|----------------------------------------------|---------------------------------------------|
| Intrusion Detection Systems (IDS) - anomaly-based   | Domain 7: Systems & Application Security     | Intrusion Detection & Prevention Systems    |
| Role-Based Access Control (RBAC) advantages         | Domain 1: Access Controls                    | Access Control Models                      |
| Testing banking app vulnerabilities (non-existent funds) | Domain 6: Security Assessment & Testing  | Software Testing & Security                |
| Disaster recovery - warm/cold/hot sites             | Domain 5: Security Operations & Admin        | Disaster Recovery (DR) Strategies          |
| Penetration testing - setting test goals            | Domain 6: Security Assessment & Testing      | Management of Security Assessments         |
| Buffer overflow attack (excessively long input)     | Domain 2: Security Operations & Admin        | Common Software Vulnerabilities            |
| Private vs. public IP addressing (RFC 1918)         | Domain 4: Network & Communications Security  | IP Addressing & Subnetting                 |
| Hashing algorithm (fixed-length output)             | Domain 3: Risk Identification & Monitoring  | Cryptographic Hash Functions               |
| Post-9/11 industry changes affecting DRP/BCP        | Domain 5: Security Operations & Admin        | Business Continuity Planning (BCP)         |
| Race conditions & boundary errors                   | Domain 2: Security Operations & Admin        | Secure Coding Practices                    |
| IPsec characteristics (packet delivery, encryption) | Domain 4: Network & Communications Security  | VPNs & Secure Network Communications       |
| Single Sign-On using scripts/smart agents           | Domain 1: Access Controls                    | Authentication Mechanisms                  |
| Digital certificates & ITU X.500 standard           | Domain 3: Risk Identification & Monitoring  | Public Key Infrastructure (PKI)            |
| Preliminary security planning steps                 | Domain 5: Security Operations & Admin        | Security Policy Development                |
| RFC 1918 - Private IP address ranges                | Domain 4: Network & Communications Security  | Network Addressing Standards               |
| Audit log synchronization for legal admissibility   | Domain 6: Security Assessment & Testing      | Log Management & Monitoring                |
| Capability Maturity Model (CMM)                     | Domain 3: Risk Identification & Monitoring  | Software Development Life Cycle (SDLC)     |
| Backup strategies (incremental, differential, etc.) | Domain 5: Security Operations & Admin        | Data Backup & Recovery Methods             |
| Data custodian responsibilities                     | Domain 1: Access Controls                    | Roles & Responsibilities                   |
| Database security threats - multiple updates        | Domain 7: Systems & Application Security     | Database Security Controls                 |
| Content-based vs. context-based access control      | Domain 1: Access Controls                    | Data-Centric Security                      |
| UTP cable categories (for Gigabit Ethernet)         | Domain 4: Network & Communications Security  | Network Cabling & Media                    |
| Segregation of Duties (SoD) & job rotation          | Domain 5: Security Operations & Admin        | Personnel Security                         |
| Threat actors vs. threat events                     | Domain 3: Risk Identification & Monitoring  | Threat Modeling & Risk Analysis            |
| Secure disposal of CD-ROMs (degaussing vs. destruction) | Domain 5: Security Operations & Admin    | Data Destruction & Media Sanitization      |
| Web application development security methods        | Domain 7: Systems & Application Security     | Secure Software Development Practices      |
| State Machine security models (Bell-LaPadula, Biba) | Domain 1: Access Controls                    | Security Models                            |
| Fire extinguisher placement for electrical equipment| Domain 5: Security Operations & Admin        | Physical Security Controls                 |
| Vulnerability assessments - identifying outcomes    | Domain 6: Security Assessment & Testing      | Risk & Vulnerability Management           |

---

## 2. Study Priorities

Based on the frequency of missed questions, here’s a prioritized study plan (1 = High priority, 3 = Low priority):

| **Domain**                                   | **Priority Level** | **Reasoning**                                                                 |
|----------------------------------------------|--------------------|-------------------------------------------------------------------------------|
| Domain 5: Security Operations & Admin        | 1 (High)           | Most missed questions (DRP, BCP, job rotation, physical security, backups).   |
| Domain 6: Security Assessment & Testing      | 1 (High)           | Multiple misses on penetration testing, auditing, and vulnerability assessments. |
| Domain 1: Access Controls                    | 2 (Medium)         | Several errors on authentication, SSO, and RBAC.                             |
| Domain 7: Systems & Application Security     | 2 (Medium)         | Weak areas in secure software dev, database security, and intrusion detection. |
| Domain 4: Network & Communications Security  | 3 (Low-Medium)     | A few mistakes on IPsec, network addressing, and cabling.                    |
| Domain 3: Risk Identification & Monitoring  | 3 (Low-Medium)     | Struggles with cryptography, risk modeling, and CMM.                         |
| Domain 2: Security Operations & Admin        | 3 (Low)            | Fewer errors, mostly buffer overflows and coding issues.                     |

### 📌 Recommended Study Order
1. **High Priority**: Security Operations & Admin (Domain 5) and Security Assessment & Testing (Domain 6)  
2. **Medium Priority**: Access Controls (Domain 1) and Systems & Application Security (Domain 7)  
3. **Low Priority**: Network & Communications (Domain 4), Risk Identification (Domain 3), and Security Ops (Domain 2)

---

## 3. Resources for Studying

### 📚 Articles & Study Guides
- **ISC2 SSCP Study Guide (Official)**: Comprehensive coverage of all domains.  
- **NIST SP 800-53 Security Controls**: Great for DRP, BCP, and security policies.  
- **OWASP Top 10**: Essential for web and software security.  
- **SANS Security Awareness Blog**: Practical insights on current threats and controls.

### 🎥 YouTube Videos & Tutorials
- **Disaster Recovery & Business Continuity (BCP/DRP)**  
  - 🔗 [BCP & DRP Explained](https://youtube.com) (Mike Meyers)  
- **Intrusion Detection Systems (IDS)**  
  - 🔗 [IDS vs. IPS Overview](https://youtube.com)  
- **Access Controls & Authentication (RBAC, SSO)**  
  - 🔗 [Role-Based Access Control](https://youtube.com) (CyberSecurityTV)  
- **Network Security - IPsec & RFC 1918**  
  - 🔗 [IPsec Explained](https://youtube.com) (Networking Fundamentals)  
- **Software Security & Secure Coding**  
  - 🔗 [OWASP Top 10 & Secure Coding](https://youtube.com)  

*Note: Replace placeholder links with actual URLs as needed.*

---

## Final Steps
1. **Study High-Priority Topics First**: Focus on Domains 5 and 6 to address the bulk of your weaknesses.  
2. **Leverage Resources**: Watch recommended videos and read articles to solidify concepts.  
3. **Practice, Practice, Practice**: Take targeted practice tests on your weak areas to track improvement.  

Good luck on your SSCP journey! 🚀
