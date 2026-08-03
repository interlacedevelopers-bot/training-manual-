// ═══════════════════════════════════════════════════════════════════
// INTERLACE STUDIES — PARTNER VISA TRAINING QUESTION BANK
// 5 Modules × 20 Questions = 100 Questions Total
// Based on Migration Act 1958, Migration Regulations 1994, PAM3
// ═══════════════════════════════════════════════════════════════════

const MODULES = [
  {
    id: 1,
    title: "Visa Framework & Eligibility",
    icon: "📋",
    tag: "eligibility",
    description: "Visa subclasses, sponsor requirements, de facto rules, and who can apply",
    passmark: 100,
    remark_pass: "Strong understanding of the partner visa framework. You can confidently advise clients on which subclass applies to their situation and explain eligibility to sponsors.",
    remark_low: "Good effort! Review the differences between onshore and offshore applications, and the sponsor eligibility rules in detail before advising clients.",
    remark_fail: "This module covers critical eligibility rules that every staff member must master. Please re-read the training manual sections on visa subclasses, de facto requirements, and sponsor limitations before retrying.",
    questions: [
      {
        q: "A client is physically inside Australia and wants to apply for a partner visa with their Australian citizen spouse. Which visa subclass is correct?",
        options: ["Subclass 309 (Provisional Partner)", "Subclass 820 (Temporary Partner)", "Subclass 100 (Permanent Partner)", "Subclass 300 (Prospective Marriage)"],
        answer: 1,
        explanation: "The Subclass 820 is the onshore temporary partner visa — applied when the applicant is in Australia. The 309 is the offshore equivalent. The 820 is lodged together with the 801 (permanent stage).",
        law: "Migration Regulations 1994, Sch. 2, cl. 820.211 — onshore applicant requirement",
        tag: "eligibility", difficulty: "easy"
      },
      {
        q: "A de facto couple has been together for 9 months. They want to apply for a partner visa. What is the standard rule, and which exception may help them?",
        options: ["They cannot apply — no exceptions exist", "They must wait 3 months more. A registered relationship could waive the 12-month requirement", "They can apply immediately — 9 months is sufficient", "They need to get married first before applying"],
        answer: 1,
        explanation: "The Migration Regulations require 12 months of de facto relationship. However, if the relationship is registered under a state/territory law, the 12-month requirement is waived entirely under reg. 1.09A(1)(b).",
        law: "Reg. 1.09A(2) — de facto requirement; Reg. 1.09A(1)(b) — registered relationship waiver",
        tag: "eligibility", difficulty: "medium"
      },
      {
        q: "An Australian permanent resident wants to sponsor their third partner. They previously sponsored partners in 2008 and 2016. What applies?",
        options: ["They can sponsor freely — no limit applies to PRs", "They are barred — lifetime limit of 2 sponsorships reached. A ministerial waiver is required", "They must wait 5 years from 2016 and then can sponsor freely", "The limit only applies to Australian citizens, not PRs"],
        answer: 1,
        explanation: "Reg. 1.20J(1)(a) imposes a lifetime limit of TWO sponsorships for all eligible sponsors — citizens and PRs alike. Having already used both, this sponsor requires a compelling circumstances waiver from the Minister under reg. 1.20J(2).",
        law: "Reg. 1.20J(1)(a) — lifetime sponsorship limit; Reg. 1.20J(2) — ministerial waiver",
        tag: "eligibility", difficulty: "hard"
      },
      {
        q: "A same-sex de facto couple from Nepal asks if they can apply for an Australian partner visa. The relationship is not legally recognised in Nepal. What do you tell them?",
        options: ["No — Australia only recognises relationships recognised in the home country", "Yes — Australian law treats same-sex couples identically. Home country recognition is irrelevant", "Yes, but they must first get a civil union in Australia", "Only if they have lived in Australia for at least 2 years"],
        answer: 1,
        explanation: "Australian partner visa law under s.5F of the Migration Act 1958 and reg. 1.09A does not condition eligibility on recognition in the applicant's home country. Same-sex de facto and married couples are fully eligible.",
        law: "Migration Act 1958 s.5F; Reg. 1.09A(1)",
        tag: "eligibility", difficulty: "easy"
      },
      {
        q: "A New Zealand citizen living in Brisbane on a Subclass 444 visa wants to sponsor their Nepali partner. Are they eligible to sponsor?",
        options: ["No — only Australian citizens and PRs can sponsor", "Yes — eligible NZ citizens on a Subclass 444 who usually reside in Australia can sponsor", "Only if they hold Australian permanent residency", "Only if the Nepali partner is in New Zealand"],
        answer: 1,
        explanation: "Under reg. 1.20J, an 'eligible New Zealand citizen' who holds a Subclass 444 (Special Category Visa) and usually resides in Australia can sponsor a partner.",
        law: "Reg. 1.20J; Sch. 2, cl. 820.211(2)(b)",
        tag: "eligibility", difficulty: "medium"
      },
      {
        q: "A sponsor was previously granted a partner visa themselves as the applicant in 2020. In 2025 they want to sponsor a new partner. What is the rule?",
        options: ["They can sponsor immediately as the 5-year rule only applies to previous SPONSORS, not applicants", "They must wait 5 years from the date their own partner visa was applied for before sponsoring", "No waiting period applies — the rule only covers Australian-born citizens", "They need to become an Australian citizen first"],
        answer: 1,
        explanation: "Reg. 1.20J(1)(c) imposes a 5-year waiting period from when the sponsor's own partner visa was applied for. This prevents rapid cycling through partner visas by people who obtained PR through a partner relationship.",
        law: "Reg. 1.20J(1)(c)",
        tag: "eligibility", difficulty: "hard"
      },
      {
        q: "An offshore applicant lodges a Subclass 309 from the Philippines. While waiting, they want to visit Australia on a tourist visa. Can they?",
        options: ["No — offshore applicants cannot enter Australia while a 309 is pending", "Yes — they can visit on a valid Subclass 600, but the 309 grant requires them to be offshore at grant time (pre-Nov 2023 rule)", "Only if the sponsor applies for a sponsorship extension", "Yes, and they can be granted the 309 while in Australia"],
        answer: 1,
        explanation: "Yes, offshore applicants can visit Australia while waiting. However, before November 2023, the 309 could only be granted while offshore. Since November 2023, the 309 can be granted regardless of location.",
        law: "Sch. 2, cl. 309.211; Legislative Instrument — Nov 2023 changes",
        tag: "eligibility", difficulty: "medium"
      },
      {
        q: "What is the minimum age requirement for a Subclass 300 Prospective Marriage Visa?",
        options: ["16 years for both parties", "18 years for both parties", "16 for the applicant, 21 for the sponsor", "No minimum age applies"],
        answer: 1,
        explanation: "Both the applicant and sponsor must be at least 18 years of age for the Subclass 300 (PMV). This prevents child marriages. There is no maximum age.",
        law: "Sch. 2, cl. 300.211(2)",
        tag: "eligibility", difficulty: "easy"
      },
      {
        q: "A couple married in Bangladesh. The marriage is valid under Bangladeshi law but the sponsor is already married to someone in Australia. Which statement is correct?",
        options: ["The Australian marriage is the only one recognised — the Bangladeshi marriage is valid for visa purposes anyway", "A polygamous marriage is not recognised. The Bangladeshi marriage would be void for Australian visa purposes", "Australia recognises all overseas marriages without restriction", "The visa can still be granted as long as the overseas marriage was the first one"],
        answer: 1,
        explanation: "Australia does not recognise polygamous marriages. Under the Family Law Act 1975 s.23B, a marriage is void if either party was already married. If the sponsor is married to someone else in Australia, the overseas marriage cannot be used for visa purposes.",
        law: "Family Law Act 1975 s.23B; Sch. 2, cl. 820.211",
        tag: "eligibility", difficulty: "hard"
      },
      {
        q: "When does the 2-year clock for the permanent partner visa stage (SC 801/100) start?",
        options: ["From the date the temporary visa (820/309) is granted", "From the date the combined application is LODGED — not the grant date", "Two years from the applicant's first entry into Australia", "From when the sponsor submits Form 40SP"],
        answer: 1,
        explanation: "The 2-year clock runs from the date of lodgement. If a 820 took 18 months to grant, the applicant is already 18 months through the 2-year period for the 801 stage.",
        law: "Sch. 2, cl. 801.211; cl. 100.211",
        tag: "eligibility", difficulty: "medium"
      },
      {
        q: "Which visa does NOT allow the applicant to be inside Australia at the time of lodgement?",
        options: ["Subclass 820", "Subclass 300", "Subclass 820 with a schedule 3 waiver", "Subclass 309 (can be lodged from anywhere offshore)"],
        answer: 3,
        explanation: "Subclass 309 is specifically for applicants who are offshore. It can be lodged from any country outside Australia, not just the home country. The 820 requires the applicant to be onshore. The 300 is lodged offshore but allows entry to Australia.",
        law: "Sch. 2, cl. 309.211 — offshore lodgement requirement",
        tag: "eligibility", difficulty: "medium"
      },
      {
        q: "Can a sponsor with a conviction for assault sponsor a partner? What is the relevant regulation?",
        options: ["Yes — criminal history has no effect on sponsorship", "It depends on the offence. Reg. 1.20KA may bar sponsorship for relevant offences", "No — any criminal conviction permanently bars sponsorship", "Only Australian citizen sponsors need character checks"],
        answer: 1,
        explanation: "Under reg. 1.20KA, the Department may refuse sponsorship where the sponsor has been convicted of a 'relevant offence' (sexual offences, registrable offences, domestic violence, significant criminal records). Assault may be a relevant offence depending on severity and context.",
        law: "Reg. 1.20KA; Sch. 4, PIC 4001",
        tag: "eligibility", difficulty: "hard"
      },
      {
        q: "A visitor on a Subclass 600 with Condition 8503 (No Further Stay) wants to apply for a partner visa onshore. What happens?",
        options: ["They can apply — partner visas are exempt from all visa conditions", "They cannot apply onshore — Condition 8503 prevents lodging a further substantive visa application in Australia", "They can apply if the Department waives the condition automatically", "Condition 8503 only applies to student visas"],
        answer: 1,
        explanation: "Condition 8503 specifically prevents the holder from lodging a further substantive visa application while in Australia. Unlike section 48, condition 8503 cannot be waived by the applicant — a specific ministerial waiver is required.",
        law: "Condition 8503; Mig. Reg. 1994",
        tag: "eligibility", difficulty: "hard"
      },
      {
        q: "What does a sponsor undertake when they sign Form 40SP?",
        options: ["To pay all government visa fees on behalf of the applicant", "To provide support including accommodation, financial assistance and access to services for 2 years", "To guarantee the applicant will not commit a criminal offence", "To sponsor up to 5 additional family members"],
        answer: 1,
        explanation: "Under reg. 1.20, the sponsor undertakes to support and assist the sponsored person during the first 2 years in Australia, including providing or arranging accommodation, financial support if needed, and access to English language education.",
        law: "Reg. 1.20; Form 40SP — Sponsorship Undertaking",
        tag: "eligibility", difficulty: "medium"
      },
      {
        q: "An applicant on a Working Holiday Visa (417) is in Australia and in a genuine de facto relationship for 14 months. Can they lodge a Subclass 820?",
        options: ["No — Working Holiday Visa holders cannot apply for partner visas", "Yes — a WHV is a substantive visa; they can lodge a 820 onshore and receive a BVA", "Only if they first convert their WHV to a tourist visa", "Only offshore via the 309 pathway"],
        answer: 1,
        explanation: "A Working Holiday Visa is a substantive visa. An onshore applicant on any valid substantive visa can lodge a Subclass 820. They will receive a Bridging Visa A automatically upon lodgement.",
        law: "Sch. 2, cl. 820.211; Mig. Act 1958",
        tag: "eligibility", difficulty: "easy"
      },
      {
        q: "A sponsor wants to sponsor a partner. They sponsored one person in 2010 and another in 2015 (that visa was refused). How many sponsorships have they used?",
        options: ["Only 1 — a refused visa doesn't count", "2 — the lifetime limit is reached regardless of the visa outcome", "1 — only granted sponsorships count toward the limit", "0 — the limit was removed in 2023"],
        answer: 1,
        explanation: "The lifetime limit of 2 sponsorships under reg. 1.20J(1)(a) counts the number of times the person has been approved as a sponsor — not the number of visas actually granted. The 2015 sponsorship counts even though the visa was refused.",
        law: "Reg. 1.20J(1)(a)",
        tag: "eligibility", difficulty: "hard"
      },
      {
        q: "Which of the following statements about the Subclass 300 (PMV) is CORRECT following the July 2024 amendments?",
        options: ["The applicant must be offshore at both lodgement AND grant", "Since July 2024, a SC 300 can be granted while the applicant is inside Australia", "The SC 300 is valid for 12 months after grant", "SC 300 holders can apply for PR directly without lodging a 820"],
        answer: 1,
        explanation: "The Migration Amendment (Family Violence Provisions) Regulations 2024 (F2024L00751) from 1 July 2024 allow a Subclass 300 applicant to be granted the visa while inside Australia, though the application must still be lodged offshore.",
        law: "F2024L00751; Sch. 2, cl. 300.211; commenced 1 July 2024",
        tag: "eligibility", difficulty: "hard"
      },
      {
        q: "What is the maximum number of partner visa sponsorships an Australian citizen can have in their lifetime?",
        options: ["1", "2", "3", "Unlimited, subject to character requirements"],
        answer: 1,
        explanation: "Regulation 1.20J(1)(a) imposes a lifetime limit of TWO sponsorships across all partner visa categories. This applies to both citizens and permanent residents.",
        law: "Reg. 1.20J(1)(a)",
        tag: "eligibility", difficulty: "easy"
      },
      {
        q: "How long must pass between a sponsor's previous sponsorship application and their new sponsorship application?",
        options: ["2 years", "5 years", "3 years", "10 years"],
        answer: 1,
        explanation: "Regulation 1.20J(1)(b) requires at least 5 years between sponsorship applications. The clock starts from the date the previous visa application was lodged — not from when the relationship ended or the visa was decided.",
        law: "Reg. 1.20J(1)(b)",
        tag: "eligibility", difficulty: "easy"
      },
      {
        q: "A couple has been married for 3 years and the sponsor is an Australian CITIZEN (not just PR). Can they bypass the 2-year waiting period for the permanent stage?",
        options: ["No — the 2-year wait is mandatory for all applications", "Yes — if married 3+ years (or de facto 2+ years) and the sponsor is a citizen, the waiting period can be waived", "Only if they have a child together", "Only for offshore (309/100) applications"],
        answer: 1,
        explanation: "Under cl. 801.211(4) and cl. 100.211(4), the 2-year waiting period can be waived if the couple has been married for at least 3 years (or in a de facto relationship for 2+ years) AND the sponsor is an Australian citizen (not just a permanent resident).",
        law: "Sch. 2, cl. 801.211(4); cl. 100.211(4)",
        tag: "eligibility", difficulty: "medium"
      }
    ]
  },
  {
    id: 2,
    title: "Relationship Evidence",
    icon: "🔍",
    tag: "evidence",
    description: "The Four-Pillar Test — financial, household, social, and commitment evidence",
    passmark: 100,
    remark_pass: "Excellent grasp of evidence requirements. You can guide clients to build a strong, decision-ready file across all four relationship aspects. This directly prevents RFIs and refusals.",
    remark_low: "Good foundation. Focus on understanding why each evidence category matters and the weight given to different document types. Thin files remain the primary cause of RFIs.",
    remark_fail: "Evidence assessment is the single most important skill for client outcomes. Please review the Four-Pillar Test in detail and understand what constitutes high, medium, and low weight evidence.",
    questions: [
      {
        q: "A couple opens a joint bank account the week before lodging their partner visa. How will the Department view this account?",
        options: ["With high weight — joint accounts are always strong evidence", "With scepticism — recently opened accounts suggest they were created for visa purposes, not genuine shared finances", "It will not be considered at all", "With medium weight — the same as any other joint account"],
        answer: 1,
        explanation: "PAM3 policy guidance specifically notes that accounts established near the time of application provide limited probative weight. Long-established accounts with regular transactions are far more persuasive.",
        law: "PAM3 — Financial Evidence; Sch. 2, cl. 820.211",
        tag: "evidence", difficulty: "easy"
      },
      {
        q: "Under the Four-Pillar Test, which of the following is a HOUSEHOLD aspect document?",
        options: ["A statutory declaration from a mutual friend", "A joint tenancy agreement listing both names", "Chat logs showing daily communication", "Life insurance listing the partner as beneficiary"],
        answer: 1,
        explanation: "A joint tenancy agreement is a household evidence document. Statutory declarations from friends are SOCIAL evidence. Chat logs are COMMITMENT evidence. Life insurance beneficiary designation is FINANCIAL evidence.",
        law: "PAM3 — Four Aspects of a Relationship; Sch. 2, cl. 820.211(2)(d)",
        tag: "evidence", difficulty: "easy"
      },
      {
        q: "A couple has lived apart for 2 years due to the applicant's visa situation. They communicate daily and visit when possible. Can they still satisfy the Four-Pillar Test?",
        options: ["No — the regulations require continuous cohabitation", "Yes — temporary separation is permitted under reg. 1.09A(2)(b) if they are not permanently separated", "Only if they had a registered relationship before the separation", "Only if there is a child of the relationship"],
        answer: 1,
        explanation: "Regulation 1.09A(2)(b) explicitly permits temporary separation. The couple must demonstrate they are not permanently separated — showing regular communication, visits, financial support, and commitment to a shared future.",
        law: "Reg. 1.09A(2)(b); PAM3 — Cohabitation",
        tag: "evidence", difficulty: "medium"
      },
      {
        q: "How many statutory declarations from independent witnesses are generally recommended for a strong partner visa application?",
        options: ["One is sufficient", "At least two to four from people with personal knowledge of the relationship", "At least ten", "None — the Department does not accept statutory declarations"],
        answer: 1,
        explanation: "PAM3 recommends at least 2–4 well-written statutory declarations. Quality and specificity matter more than quantity. Declarations from independent witnesses (not just family) carry more weight than those from relatives alone.",
        law: "PAM3 — Social Evidence; Statutory Declarations Act 1959",
        tag: "evidence", difficulty: "easy"
      },
      {
        q: "Which evidence category do airline boarding passes and hotel bookings from joint trips fall under?",
        options: ["Financial aspect only", "Both Social and Commitment aspects", "Household aspect", "They are irrelevant to the assessment"],
        answer: 1,
        explanation: "Joint travel records (boarding passes, hotel bookings, photos from trips) are relevant to BOTH the Social aspect (recognition of the relationship publicly) and the Commitment aspect (shared experiences and future planning).",
        law: "PAM3 — Social Evidence; Commitment Evidence",
        tag: "evidence", difficulty: "medium"
      },
      {
        q: "A couple comes from a culture where relationships are kept private before marriage. They have limited social media evidence. What approach do you advise?",
        options: ["Tell them the application will likely fail without social media evidence", "Explain that cultural context can be addressed through statutory declarations explaining the cultural practice, supplemented by private evidence", "Tell them to create social media accounts immediately before lodging", "Apply for a different visa class that doesn't require social evidence"],
        answer: 1,
        explanation: "The Department acknowledges cultural differences. A statutory declaration explaining the cultural context, supplemented by whatever evidence is available within that cultural framework (private gatherings, family events, declarations from community members), is acceptable.",
        law: "PAM3 — Cultural Sensitivity; Social Evidence",
        tag: "evidence", difficulty: "medium"
      },
      {
        q: "A couple's lease is in one name only but they both live there. How should this be handled?",
        options: ["This automatically fails the household aspect", "Supplement with other evidence: utility bills, landlord statement, evidence both parties pay rent", "Apply offshore instead where household evidence rules are different", "Ask them to break the lease and sign a new joint one before lodging"],
        answer: 1,
        explanation: "A lease in one name is acceptable but suboptimal. Supplement with: statements from the landlord/agent, utility bills at the address, evidence of rent transfers from the other party, and mail/correspondence for both parties at the same address.",
        law: "PAM3 — Household Evidence",
        tag: "evidence", difficulty: "easy"
      },
      {
        q: "For the Commitment aspect, which of the following carries the HIGHEST evidentiary weight?",
        options: ["Social media posts from the past month", "A chat log showing contact every few weeks", "A registered de facto relationship certificate from a state/territory registry", "A screenshot of the couple's dating app profile"],
        answer: 2,
        explanation: "A registered de facto relationship certificate carries the highest weight for the commitment aspect and additionally waives the 12-month de facto requirement entirely. It is an official government document confirming the relationship.",
        law: "Reg. 1.09A(1)(b); PAM3 — Commitment Evidence",
        tag: "evidence", difficulty: "medium"
      },
      {
        q: "A couple has been in an online-only relationship for 2 years and never met in person. They want to apply for a Subclass 820 as de facto partners. What is the issue?",
        options: ["No issue — online relationships are fully recognised", "An online-only relationship without in-person meeting will face extreme scrutiny and is unlikely to satisfy the genuine de facto relationship test", "The 820 requires overseas meetings — apply for 309 instead", "This is perfectly normal and acceptable evidence"],
        answer: 1,
        explanation: "While there is no express requirement to have met in person for the 820/309 (unlike the 300 PMV), the Department looks for a genuine, committed relationship with real-world evidence. An online-only relationship with no physical meetings will be extremely difficult to establish as genuine.",
        law: "PAM3 — Genuine Relationship; Online Relationships",
        tag: "evidence", difficulty: "hard"
      },
      {
        q: "What is the purpose of requiring evidence across all FOUR aspects of the relationship (financial, household, social, commitment)?",
        options: ["To maximise government fee revenue", "To assess the genuineness and continuation of the relationship holistically — weakness in any area can indicate a non-genuine arrangement", "Only two aspects are legally required — the others are optional", "To ensure the Department has enough documents to fill a file"],
        answer: 1,
        explanation: "The Four-Pillar Test exists because a genuine relationship is reflected across multiple dimensions of life. A marriage of convenience may pass one category (e.g. financial — they share an account) but fail others. The holistic assessment is the cornerstone of genuine relationship assessment.",
        law: "Sch. 2, cl. 820.211(2)(d); PAM3 — Four Aspects",
        tag: "evidence", difficulty: "medium"
      },
      {
        q: "A couple has three children together. How does this affect the evidence assessment?",
        options: ["It is irrelevant — children do not constitute relationship evidence", "It is powerful evidence across multiple categories — household, commitment, and social. Birth certificates and shared parenting evidence are highly valued", "It only helps the financial category", "It triggers additional scrutiny, not positive evidence"],
        answer: 1,
        explanation: "Children of the relationship are powerful multi-category evidence: birth certificates listing both parents (commitment), evidence of shared parenting duties (household), school/childcare records, and Medicare card registration all strengthen the application significantly.",
        law: "PAM3 — Commitment; Household Aspect",
        tag: "evidence", difficulty: "easy"
      },
      {
        q: "A client asks how many months of bank statements they should provide for a joint account. What is the correct guidance?",
        options: ["3 months minimum as specified in the regulations", "At least 12 months, spanning the relationship history — there is no prescribed minimum but more is better", "6 months exactly as per Department policy", "1 statement is sufficient if the account has a large balance"],
        answer: 1,
        explanation: "The regulations do not specify a minimum. Best practice is at least 12 months showing regular, genuine transactions. For the permanent (801/100) stage, statements covering the entire period since lodgement significantly strengthen the file.",
        law: "PAM3 — Financial Evidence; Best Practice",
        tag: "evidence", difficulty: "easy"
      },
      {
        q: "A couple lists each other as beneficiaries in their wills. Which evidence category does this support?",
        options: ["Household aspect only", "Social aspect only", "Commitment aspect primarily — it demonstrates a legal recognition of long-term mutual reliance", "Financial aspect only"],
        answer: 2,
        explanation: "Listing a partner as beneficiary in a will, enduring power of attorney, or similar legal document is strong Commitment evidence — it demonstrates a serious, long-term recognition of the relationship with legal binding intent.",
        law: "PAM3 — Commitment Evidence",
        tag: "evidence", difficulty: "medium"
      },
      {
        q: "For the Social aspect, who generally provides the most weight in statutory declarations?",
        options: ["The sponsor's parents exclusively", "Independent witnesses who are not family — friends, colleagues, neighbours, community members — carry more weight than relatives", "Online acquaintances who have observed the relationship on social media", "Department of Home Affairs approved witnesses only"],
        answer: 1,
        explanation: "Independent witnesses carry more weight than family members because they have no inherent interest in the outcome. A mix of independent friends, colleagues, neighbours AND family provides the strongest base.",
        law: "PAM3 — Social Evidence",
        tag: "evidence", difficulty: "easy"
      },
      {
        q: "A client's employer provided a letter confirming the client works in Australia. Which evidence category does this support MOST?",
        options: ["Commitment", "Financial — it supports Australian domicile and income", "Household", "It supports multiple aspects when showing shared address"],
        answer: 1,
        explanation: "An employment letter primarily supports the Financial aspect (income, Australian presence) and context for why the applicant is in Australia. If it confirms the shared address, it also touches the Household aspect. Primarily it is financial/contextual.",
        law: "PAM3 — Financial Evidence",
        tag: "evidence", difficulty: "medium"
      },
      {
        q: "What is the key difference between HIGH-weight and LOW-weight financial evidence?",
        options: ["The dollar amount in the account — more money = higher weight", "Duration and genuineness — long-standing, regularly used accounts with genuine transactions outweigh recently created or rarely used accounts", "Evidence in English is always higher weight than translated evidence", "Joint accounts always outweigh individual accounts regardless of history"],
        answer: 1,
        explanation: "Weight is determined by duration and genuineness of use. A joint account used daily for 3 years is far stronger than a new joint account with a large deposit. The Department looks for patterns of genuine shared financial life.",
        law: "PAM3 — Financial Evidence; Genuine Relationship",
        tag: "evidence", difficulty: "medium"
      },
      {
        q: "A client sends money to their family overseas regularly from a joint account. Should this concern us from an evidence perspective?",
        options: ["Yes — this automatically fails the financial aspect", "It may raise questions if very large amounts leave Australia with little evidence of local financial commitment — but remittances alone are not a bar", "No concern at all — overseas transfers are irrelevant to the assessment", "This will trigger a PIC 4020 investigation"],
        answer: 1,
        explanation: "Remittances alone are not problematic. However, if most available funds are sent overseas and little evidence of shared Australian financial life remains, the Department may question shared financial commitment. Ensure there is clear evidence of interdependence in Australia.",
        law: "PAM3 — Financial Assessment",
        tag: "evidence", difficulty: "medium"
      },
      {
        q: "Shared Netflix/Spotify subscriptions at the same address — what role do these play as evidence?",
        options: ["They are primary evidence and sufficient alone for the household aspect", "They are supplementary evidence only — useful contextual support but cannot substitute for primary household documents", "They are specifically listed in the regulations as acceptable evidence", "They are inadmissible as they are not government-issued documents"],
        answer: 1,
        explanation: "Shared subscriptions, streaming services, and similar accounts are useful supplementary evidence that adds context. They should supplement, not replace, primary documents like joint leases, utility accounts, or tenancy agreements.",
        law: "PAM3 — Household Evidence (supplementary)",
        tag: "evidence", difficulty: "easy"
      },
      {
        q: "For a long-distance couple who has never lived together, which is the MOST important commitment evidence to provide?",
        options: ["A single email saying 'I miss you'", "Extensive records of regular communication (call logs, chat logs), visit history (boarding passes), and clear future plans to live together in Australia", "Only financial transfers", "A statutory declaration from one party only"],
        answer: 1,
        explanation: "For long-distance couples, the commitment aspect carries extra weight. Detailed communication records, documented visits (boarding passes, hotel bookings, photos), and concrete evidence of plans to reunite in Australia are essential.",
        law: "PAM3 — Commitment; Long-Distance Relationships",
        tag: "evidence", difficulty: "medium"
      },
      {
        q: "At the permanent (801/100) stage, is the same evidence from lodgement sufficient?",
        options: ["Yes — the Department uses only the original lodgement evidence", "No — fresh, updated evidence spanning the entire period since lodgement should be provided to demonstrate the relationship remained genuine and continuing", "Only a statutory declaration is needed for the permanent stage", "The Department automatically approves the permanent stage if the temporary was granted"],
        answer: 1,
        explanation: "The permanent stage requires the Department to be satisfied the relationship was genuine at lodgement AND has remained genuine and continuing throughout. Updated bank statements, new photos, any significant milestones, and a fresh statutory declaration are essential.",
        law: "Sch. 2, cl. 801.211; cl. 100.211; PAM3",
        tag: "evidence", difficulty: "medium"
      }
    ]
  },
  {
    id: 3,
    title: "Refusals, Bars & Integrity",
    icon: "⚖️",
    tag: "refusal",
    description: "Section 48, Schedule 3, PIC 4020 false information, character, and health requirements",
    passmark: 100,
    remark_pass: "Excellent command of the integrity and refusal provisions. Understanding these protects clients from catastrophic immigration consequences and protects Interlace Studies from compliance risks.",
    remark_low: "Good effort on a complex topic. Focus particularly on PIC 4020 — its triggers, consequences, and the crucial 2017 amendment on withdrawals. These are career-defining issues for clients.",
    remark_fail: "This is one of the most critical modules. PIC 4020 violations can result in 3–10 year bans. Please master the Section 48 bar, Schedule 3 criteria, and PIC 4020 provisions before advising any client.",
    questions: [
      {
        q: "What is the Section 48 bar and when does it apply?",
        options: ["A bar preventing sponsors from sponsoring more than twice", "A bar preventing an onshore non-citizen without a substantive visa, who has had a visa refused or cancelled, from lodging most visa applications onshore", "A bar preventing offshore applicants from applying", "A bar on applying for more than two visas in any 12-month period"],
        answer: 1,
        explanation: "Section 48 of the Migration Act 1958 bars onshore applicants who hold only a bridging visa (not a substantive visa) and have had a visa refused or cancelled from lodging most onshore visa applications.",
        law: "Migration Act 1958 s.48",
        tag: "refusal", difficulty: "medium"
      },
      {
        q: "Is the Subclass 820 partner visa exempt from the Section 48 bar?",
        options: ["No — Section 48 bars all visa applications without exception", "Yes — partner visas are specifically listed as exempt in Reg. 2.12", "Only if the sponsor is an Australian citizen, not just a PR", "Only if the previous refusal was for a different visa class"],
        answer: 1,
        explanation: "Regulation 2.12 lists specific visa classes exempt from Section 48, including partner visas (820/801). However, a Section 48 barred applicant who lodges an 820 must still satisfy Schedule 3 criteria at assessment time.",
        law: "Mig. Act 1958 s.48; Reg. 2.12; Sch. 3",
        tag: "refusal", difficulty: "hard"
      },
      {
        q: "What are the Schedule 3 criteria that apply to Section 48 barred partner visa applicants?",
        options: ["Health examination completion and police clearance only", "cl. 3001 (compelling and compassionate circumstances), cl. 3002 (eligible sponsor), cl. 3003 (not refused under PIC 4020 within 12 months)", "Only that the sponsor is an Australian citizen", "There are no additional criteria — the exemption is automatic"],
        answer: 1,
        explanation: "Schedule 3 of the Migration Regulations 1994 requires Section 48 barred applicants to satisfy: cl. 3001 (compelling circumstances), cl. 3002 (eligible sponsor), and cl. 3003 (no PIC 4020 refusal in the preceding 12 months).",
        law: "Mig. Reg. 1994, Sch. 3, cl. 3001–3003",
        tag: "refusal", difficulty: "hard"
      },
      {
        q: "What triggers PIC 4020 (Public Interest Criterion 4020)?",
        options: ["Failing the health examination", "Providing false or misleading information, submitting a bogus document, or failing to establish true identity in a visa application", "Having a criminal record in Australia", "Not providing enough relationship evidence"],
        answer: 1,
        explanation: "PIC 4020 in Schedule 4 of the Migration Regulations is triggered by: false or misleading information, a bogus document (counterfeit, forged, or obtained by deception), or failure to establish true identity.",
        law: "Mig. Reg. 1994, Sch. 4, PIC 4020(1)",
        tag: "integrity", difficulty: "easy"
      },
      {
        q: "What is the consequence of a PIC 4020 breach involving false information (not identity fraud)?",
        options: ["Immediate deportation from Australia", "A 3-year ban from lodging most Australian visas — waivable in compelling circumstances", "A 10-year ban that cannot be waived", "Only a warning letter — no visa ban applies"],
        answer: 1,
        explanation: "False or misleading information or a bogus document triggers a 3-year ban under PIC 4020. This ban CAN be waived if there are compelling circumstances affecting Australia or an Australian citizen/PR/eligible NZ citizen.",
        law: "Mig. Reg. 1994, Sch. 4, PIC 4020; Waiver provisions",
        tag: "integrity", difficulty: "medium"
      },
      {
        q: "A client discovers their identity documents were fraudulently presented in a previous application (identity fraud). What ban applies and can it be waived?",
        options: ["3-year ban — waivable with compelling circumstances", "10-year ban — CANNOT be waived under any circumstances whatsoever", "5-year ban — waivable only by the Minister personally", "No ban — only the previous visa is cancelled"],
        answer: 1,
        explanation: "Identity fraud (failure to establish true identity) triggers the 10-year ban under PIC 4020(2A). This ban is absolute — it cannot be waived under ANY circumstances. This is the most severe non-criminal immigration sanction in Australia.",
        law: "Mig. Reg. 1994, Sch. 4, PIC 4020(2A)",
        tag: "integrity", difficulty: "hard"
      },
      {
        q: "Since 18 November 2017, if a client withdraws their partner visa application AFTER submitting false documents, does PIC 4020 still apply?",
        options: ["No — withdrawal before decision prevents PIC 4020 from applying", "Yes — since the 2017 amendment, withdrawal no longer provides immunity. The ban may still be imposed on subsequent applications", "Only if the Department had already issued a natural justice letter", "Only for offshore applications — onshore applications can be withdrawn freely"],
        answer: 1,
        explanation: "The 2017 amendment closed the withdrawal loophole. If false documents or information were submitted before withdrawal, PIC 4020 may still trigger on the next application. Withdrawal is not a safe escape from PIC 4020 consequences.",
        law: "Mig. Reg. 1994 — Post-2017 Amendment; PAM3",
        tag: "integrity", difficulty: "hard"
      },
      {
        q: "What is a Section 57 letter and what is the response window?",
        options: ["A refusal letter — no response is accepted", "A natural justice letter from the Department giving the applicant an opportunity to respond to adverse information before a decision — typically 28 days", "A letter requesting health examination — response within 5 days", "A request to attend an interview — no written response required"],
        answer: 1,
        explanation: "Section 57 of the Migration Act 1958 obliges the Department to give natural justice — notifying the applicant of adverse information (e.g. PIC 4020 concerns) and allowing them to respond, typically within 28 days. A well-prepared response can prevent a refusal.",
        law: "Migration Act 1958 s.57; PAM3 — Natural Justice",
        tag: "integrity", difficulty: "medium"
      },
      {
        q: "A client claims they did not know their employment reference letter was fraudulent — their employer provided it. Are they still subject to PIC 4020?",
        options: ["No — PIC 4020 requires intent. Innocent mistake = no consequence", "Generally yes — PIC 4020 operates strictly. However, demonstrating genuine lack of knowledge is highly relevant to a waiver application or ART appeal", "Only if the Department can prove the client personally forged it", "No — the employer faces consequences, not the visa applicant"],
        answer: 1,
        explanation: "PIC 4020 is a strict provision — it generally applies regardless of intent. However, genuine unawareness (demonstrated credibly) is highly relevant to a 3-year ban waiver application or ART appeal. This should be disclosed immediately and professionally addressed.",
        law: "Mig. Reg. 1994, Sch. 4, PIC 4020; PAM3",
        tag: "integrity", difficulty: "hard"
      },
      {
        q: "Which of the following is NOT a registrable offence that can bar sponsorship under reg. 1.20KA?",
        options: ["A minor speeding fine of $150", "A sexual offence against a child", "A conviction for human trafficking", "An offence resulting in a sentence of 12 months or more"],
        answer: 0,
        explanation: "A minor speeding fine is not a registrable offence. Registrable offences that can bar sponsorship include sexual offences against children, serious violence, human trafficking, and significant criminal records (12 months+ sentence).",
        law: "Reg. 1.20KA(2); Relevant Criminal Law Definitions",
        tag: "refusal", difficulty: "medium"
      },
      {
        q: "What must the Department do before refusing a visa application on PIC 4020 grounds?",
        options: ["Nothing — refusal can be immediate", "Issue a natural justice letter under s.57 of the Migration Act 1958 giving the applicant opportunity to respond", "Notify the migration agent only (not the applicant)", "Apply to the Federal Court for authorisation"],
        answer: 1,
        explanation: "Section 57 of the Migration Act 1958 is mandatory. Before a PIC 4020 refusal, the Department must issue a natural justice letter to the applicant (and their agent) setting out the concerns and allowing a response — typically 28 days.",
        law: "Migration Act 1958 s.57",
        tag: "integrity", difficulty: "medium"
      },
      {
        q: "A client has a 3-year PIC 4020 ban currently running. What visa options do they have during the ban period?",
        options: ["No visa of any kind can be lodged", "Very limited — most visas blocked. Protection visas are a notable exception. A waiver of the ban may be available in exceptional circumstances", "They can apply for any skilled visa freely", "Tourist visas are always available during the ban"],
        answer: 1,
        explanation: "During a 3-year PIC 4020 ban, most visa subclasses cannot be lodged. Protection visas are a key exception. If compelling circumstances exist, a waiver of the 3-year ban may be applied for. The 10-year identity ban has no waiver option.",
        law: "Mig. Reg. 1994, Sch. 4, PIC 4020; Waiver",
        tag: "integrity", difficulty: "hard"
      },
      {
        q: "What criminal history must a partner visa applicant disclose?",
        options: ["Only convictions in Australia in the last 5 years", "All criminal convictions from any country since age 10, including spent or expunged convictions", "Only convictions resulting in imprisonment", "Convictions are self-declared — disclosure is voluntary"],
        answer: 1,
        explanation: "Under s.501 of the Migration Act 1958 and PIC 4002, all criminal convictions from any country since age 10 must be disclosed, regardless of how long ago they occurred, whether the sentence has been served, or whether they are 'spent' or 'expunged' in the country of conviction.",
        law: "Migration Act 1958 s.501; PIC 4002; PAM3 — Character",
        tag: "refusal", difficulty: "medium"
      },
      {
        q: "What does 'substantial criminal record' mean for the character test in Australian migration law?",
        options: ["Any criminal record of any kind", "A sentence of 12 months or more in total (cumulative)", "A sentence of 24 months or more for a single offence", "Only convictions in Australia count toward a substantial criminal record"],
        answer: 1,
        explanation: "Under s.501(7) of the Migration Act 1958, a 'substantial criminal record' includes a sentence of 12 months or more (cumulative total). This is one of the key thresholds for failing the character test.",
        law: "Migration Act 1958 s.501(7)",
        tag: "refusal", difficulty: "hard"
      },
      {
        q: "A client who failed the health assessment applies to review the decision. Who reviews health decisions and what is the process?",
        options: ["The ART reviews health decisions on the merits", "A Medical Officer of the Commonwealth (MOC) reviews health decisions — the MOC's opinion is generally determinative but can be reviewed by the ART in limited circumstances", "The applicant's personal doctor can overturn health assessments", "Health decisions cannot be reviewed — they are absolute"],
        answer: 1,
        explanation: "Health assessments are conducted by Panel Physicians and reviewed by a Medical Officer of the Commonwealth (MOC). The MOC's opinion is generally definitive for the Department but can be reviewed by the ART on limited grounds.",
        law: "PIC 4005–4007; PAM3 — Health Assessment",
        tag: "refusal", difficulty: "hard"
      },
      {
        q: "A client's partner visa application was refused. The refusal notice is dated 10 June 2026. By when must the ART appeal be lodged?",
        options: ["10 August 2026 (60 days)", "1 July 2026 (21 days from the date of the notice)", "10 September 2026 (90 days)", "1 September 2026 (3 months)"],
        answer: 1,
        explanation: "ART appeals for partner visa refusals must be lodged within 21 days from the date of the notice (or deemed receipt date). For a notice dated 10 June 2026, the deadline would be 1 July 2026. This is an absolute deadline — missing it is extremely difficult to remedy.",
        law: "ART Act 2024; Migration Act 1958 s.338",
        tag: "refusal", difficulty: "hard"
      },
      {
        q: "What is the Section 48A bar and how does it differ from Section 48?",
        options: ["Section 48A applies only to skilled visas; Section 48 applies only to family visas", "Section 48A specifically prevents re-lodgement of partner or PMV visa class onshore after a refusal. Section 48 applies after any refusal to most onshore applications", "They are identical provisions — 48A is just the updated version of 48", "Section 48A only applies offshore; Section 48 only applies onshore"],
        answer: 1,
        explanation: "Section 48 broadly bars most onshore applications after any refusal while holding only a bridging visa. Section 48A specifically targets the partner and prospective marriage visa classes — it prevents re-lodgement of the same class onshore after a refusal. Both may operate together.",
        law: "Migration Act 1958 s.48 and s.48A",
        tag: "refusal", difficulty: "hard"
      },
      {
        q: "A client holds only a Bridging Visa A. Is this a 'substantive visa'?",
        options: ["Yes — bridging visas are substantive visas", "No — bridging visas are specifically excluded from the definition of substantive visa", "Only Bridging Visa B and above are substantive", "It depends on whether it was granted automatically or applied for"],
        answer: 1,
        explanation: "Under s.5 of the Migration Act 1958, a 'substantive visa' is any visa other than a bridging visa, criminal justice visa, or enforcement visa. Bridging Visa A, B, C, D, and E are all NOT substantive visas — this is critical for Section 48 bar analysis.",
        law: "Migration Act 1958 s.5 — Definition of Substantive Visa",
        tag: "refusal", difficulty: "medium"
      },
      {
        q: "Which of the following can trigger the Section 48 bar?",
        options: ["A visa expiring naturally at the end of its period", "A visa being REFUSED or CANCELLED since the applicant's last entry to Australia, while they hold no substantive visa", "Having a criminal record in Australia", "Failing to update an address in ImmiAccount"],
        answer: 1,
        explanation: "Section 48 applies specifically when a visa has been REFUSED or CANCELLED (not simply expired) since the last entry, and the applicant currently holds only a bridging visa (no substantive visa).",
        law: "Migration Act 1958 s.48",
        tag: "refusal", difficulty: "medium"
      },
      {
        q: "PIC 4020 applies to false information submitted by which of the following?",
        options: ["Only the primary applicant", "The primary applicant OR any member of their family unit included in the application", "Only the migration agent", "Only if the sponsor provides false information"],
        answer: 1,
        explanation: "PIC 4020 extends to false information provided by the applicant OR any member of their family unit included in the application. A false document from a secondary applicant (e.g. a child) can result in the entire application being refused.",
        law: "Mig. Reg. 1994, Sch. 4, PIC 4020(1); Family Unit Definition",
        tag: "integrity", difficulty: "hard"
      }
    ]
  },
  {
    id: 4,
    title: "Family Violence & ART Appeals",
    icon: "🏛️",
    tag: "fv",
    description: "Family violence provisions (July 2024 amendments), ART appeal process, outcomes, and client management",
    passmark: 100,
    remark_pass: "Strong understanding of the family violence provisions and ART appeal system. Your ability to recognise FV situations and guide clients through the ART process could genuinely change lives.",
    remark_low: "Review the July 2024 family violence amendments carefully — they significantly expanded protections. Also ensure you know the ART appeal deadline (21 days) and that it is non-negotiable.",
    remark_fail: "Family violence provisions and ART appeals are legally complex areas with life-changing consequences. Please study Module 4 materials in full before retrying. Never advise in these areas without MARN supervision.",
    questions: [
      {
        q: "What are the 'family violence provisions' in the partner visa context?",
        options: ["Provisions allowing sponsors to cancel applications if family violence occurs", "Provisions allowing a partner visa to be granted even if the relationship has ended, where relevant family violence by the sponsor caused the breakdown", "Provisions that fast-track processing for FV victims", "Provisions requiring all applicants to undergo DV screening"],
        answer: 1,
        explanation: "The family violence provisions in Schedule 2 (e.g. cl. 820.211(2)(h)) allow a partner visa to be granted even if the relationship has ended, provided the breakdown was caused by relevant family violence perpetrated by the sponsor.",
        law: "Mig. Reg. 1994, Sch. 2, cl. 820.211(2)(h); F2024L00751",
        tag: "fv", difficulty: "easy"
      },
      {
        q: "As of 1 July 2024, does a Subclass 309 applicant need to be IN Australia at the time of the visa GRANT to access family violence provisions?",
        options: ["Yes — they must be in Australia at both lodgement and grant", "No — the 2024 amendments removed this requirement. They only need to have been in Australia once since lodgement", "They must be in Australia at all times during processing", "The rule has not changed — they must be offshore at grant"],
        answer: 1,
        explanation: "The Migration Amendment (Family Violence Provisions) Regulations 2024 (F2024L00751) from 1 July 2024 removed the requirement for Subclass 309 applicants to be in Australia at the time of the decision. They only need to have been in Australia at least once since lodgement.",
        law: "F2024L00751; commenced 1 July 2024",
        tag: "fv", difficulty: "hard"
      },
      {
        q: "What is 'relevant family violence' for the purposes of the migration regulations?",
        options: ["Only physical violence resulting in documented injuries", "Actual conduct, or threats, directed at the victim or their family/property causing reasonable fear for their wellbeing — including physical, sexual, emotional, psychological, financial, and immigration-related forms", "Violence witnessed by children of the relationship only", "Only violence resulting in an AVO or criminal conviction"],
        answer: 1,
        explanation: "Relevant family violence has a broad definition under the Migration Regulations. It encompasses physical, sexual, emotional, psychological, financial, and immigration-related forms of abuse or coercive control — including threats.",
        law: "Mig. Reg. 1994 — Definition of Relevant Family Violence; F2024L00751",
        tag: "fv", difficulty: "medium"
      },
      {
        q: "What is 'immigration-related violence' under the family violence provisions?",
        options: ["Violence that occurs during immigration interviews", "A sponsor using threats about visa status as a form of coercion or control — e.g. threatening to withdraw sponsorship or report the applicant to the Department", "Violence involving immigration officials", "The applicant being detained by the Department"],
        answer: 1,
        explanation: "Immigration-related violence includes a sponsor threatening to withdraw sponsorship, threatening to report the applicant to the Department, or using the applicant's visa status as a means of coercion and control. This is explicitly recognised as relevant family violence.",
        law: "Mig. Reg. 1994 — Family Violence Definition; PAM3",
        tag: "fv", difficulty: "hard"
      },
      {
        q: "What evidence is needed to access family violence provisions? (Two stages)",
        options: ["Only an AVO from the local court", "Stage 1: Prove the relationship was genuine before it ended. Stage 2: Prove family violence occurred — through judicially determined evidence (AVO, conviction) or non-judicial evidence (doctor, counsellor, social worker)", "A police report alone is sufficient", "Only a statutory declaration from the victim"],
        answer: 1,
        explanation: "Two-stage evidence test: (1) Demonstrate the relationship was genuine and continuing before the violence ended it — using normal Four-Pillar evidence. (2) Demonstrate relevant family violence occurred — judicially determined (AVO, conviction) or non-judicial (qualified professionals). If non-judicial evidence is unclear, an Independent Expert is sought.",
        law: "Mig. Reg. 1994, Sch. 2; PAM3 — Family Violence",
        tag: "fv", difficulty: "medium"
      },
      {
        q: "Since 1 July 2024, can a Subclass 300 (PMV) holder access partner visa provisions if they experienced family violence and never married the sponsor?",
        options: ["No — SC 300 holders must marry within the visa period, with no exceptions", "Yes — the 2024 amendments specifically allow SC 300 holders to access SC 820/801 provisions under relationship cessation/FV provisions even if the marriage never took place", "Only if they lodge a new application from offshore", "Only if the Department approves a special waiver before lodgement"],
        answer: 1,
        explanation: "F2024L00751 (from 1 July 2024) specifically extended family violence pathway access to Subclass 300 holders who experienced family violence, allowing them to apply for a Subclass 820/801 even if they did not marry their sponsor.",
        law: "F2024L00751; Sch. 2, cl. 300.211",
        tag: "fv", difficulty: "hard"
      },
      {
        q: "The ART replaced the AAT from which date?",
        options: ["1 January 2024", "14 October 2024", "1 July 2024", "1 January 2025"],
        answer: 1,
        explanation: "The Administrative Review Tribunal (ART) commenced on 14 October 2024 under the Administrative Review Tribunal Act 2024, replacing the Administrative Appeals Tribunal (AAT). All pending AAT cases transferred automatically to the ART.",
        law: "Administrative Review Tribunal Act 2024; Commenced 14 October 2024",
        tag: "fv", difficulty: "easy"
      },
      {
        q: "What is the ART appeal fee for a partner visa refusal (as of 2025-26), and is any refund available?",
        options: ["$500, fully refunded if successful", "$3,580 — 50% refunded if the ART sets aside the decision. A 50% hardship reduction is also available", "$9,365 — the same as the application fee, not refundable", "$1,500 — no refund applies"],
        answer: 1,
        explanation: "The ART fee (2025-26) is AUD $3,580. If the ART sets aside the refusal, 50% ($1,790) is refunded. A 50% financial hardship reduction can bring the upfront fee to $1,790.",
        law: "ART Fees Schedule 2025-26",
        tag: "fv", difficulty: "medium"
      },
      {
        q: "Approximately what percentage of partner visa ART appeals were set aside (applicant won) between July 2024 and March 2025?",
        options: ["15%", "55%", "80%", "30%"],
        answer: 1,
        explanation: "Between July 2024 and March 2025, approximately 55% of partner visa ART appeals were set aside — one of the highest success rates across all visa categories. Professional representation significantly improves outcomes.",
        law: "ART Annual Report 2024-25",
        tag: "fv", difficulty: "easy"
      },
      {
        q: "Can the ART receive new evidence that was NOT presented to the Department?",
        options: ["No — the ART only reviews evidence already on the file", "Yes — the ART conducts a fresh de novo merits review and can receive new evidence not before the original decision-maker", "Only if the applicant explains why it was not lodged earlier", "Only documents, not oral evidence"],
        answer: 1,
        explanation: "The ART conducts a de novo (fresh) merits review under s.56 of the ART Act 2024. New evidence that directly addresses the refusal grounds can completely change the outcome — this is one of the most powerful aspects of the appeal process.",
        law: "ART Act 2024 s.56; De Novo Review",
        tag: "fv", difficulty: "medium"
      },
      {
        q: "What is the Guidance and Appeals Panel (GAP) in the ART?",
        options: ["A panel that reviews all migration decisions automatically", "A new body within the ART that provides authoritative, binding guidance on key migration law questions to ensure consistent decisions across all ART members", "The immigration equivalent of the High Court of Australia", "A panel that only hears family violence cases"],
        answer: 1,
        explanation: "The Guidance and Appeals Panel (GAP) is a new feature of the ART (established October 2024). It provides binding guidance on important migration law questions, ensuring consistent interpretation across ART members. Its decisions bind all ART members in similar cases.",
        law: "ART Act 2024 — GAP Provisions",
        tag: "fv", difficulty: "hard"
      },
      {
        q: "A client receives a refusal notice on 5 June 2026. When must the ART appeal be lodged?",
        options: ["5 September 2026 (90 days)", "26 June 2026 (21 days)", "5 July 2026 (30 days)", "5 August 2026 (60 days)"],
        answer: 1,
        explanation: "Partner visa ART appeals must be lodged within 21 days of the refusal notice. From 5 June 2026, the deadline is 26 June 2026. This is absolute — missing it is almost impossible to remedy and clients must be contacted immediately upon receipt of a refusal.",
        law: "ART Act 2024; Migration Act 1958 s.338",
        tag: "fv", difficulty: "easy"
      },
      {
        q: "What happens to a client's Bridging Visa A (BVA) while an ART appeal is pending?",
        options: ["The BVA ceases immediately when the refusal is received", "The BVA generally continues during the appeal period, maintaining lawful status", "A new substantive visa must be applied for during the appeal", "Only a Bridging Visa E is issued during ART appeals"],
        answer: 1,
        explanation: "Under s.38B of the Migration Act 1958, the BVA typically continues during an ART appeal, maintaining the applicant's lawful status in Australia. If the appeal period expires without lodging, the BVA ceases and departure may be required.",
        law: "Migration Act 1958 s.38B; Reg. 2.20",
        tag: "fv", difficulty: "medium"
      },
      {
        q: "After the ART sets aside a partner visa refusal, what happens next?",
        options: ["The visa is automatically granted the next day", "The matter is remitted to the Department for further processing — including remaining health, character, and security checks before a grant decision", "The applicant must lodge a new application from scratch", "The ART directly grants the visa without Department involvement"],
        answer: 1,
        explanation: "The ART sets aside the decision and remits to the Department. The Department then continues processing — completing any outstanding checks (health, character, biometrics) before deciding to grant. There may be further delays at this stage.",
        law: "ART Act 2024 s.54–55; Department Remittal Process",
        tag: "fv", difficulty: "medium"
      },
      {
        q: "What is ministerial intervention in the migration context and when is it relevant?",
        options: ["When the Minister directly lodges a visa application for someone", "The Minister's power under ss.351 or 417 of the Migration Act to substitute a more favourable decision after an ART loss — exercised in exceptional public interest cases", "When Parliament passes a law changing visa rules", "When a client contacts their local MP during processing"],
        answer: 1,
        explanation: "Under ss.351 and 417 of the Migration Act 1958, the Minister may substitute a more favourable decision after the ART affirms a refusal, where it is in the public interest. This power is exercised rarely and is not a routine appeal pathway.",
        law: "Migration Act 1958 ss.351, 417; Ministerial Guidelines",
        tag: "fv", difficulty: "hard"
      },
      {
        q: "Where should Interlace Studies staff FIRST refer a client disclosing family violence?",
        options: ["Directly to the ART without delay", "1800RESPECT (1800 737 732) and a specialist DV legal service, alongside the migration advice being managed by the registered agent", "To the Department of Home Affairs to voluntarily disclose the situation", "To the sponsor's family for mediation"],
        answer: 1,
        explanation: "Immediately refer to 1800RESPECT (1800 737 732) and local specialist DV legal services. The Interlace Studies registered agent (MARN 2418363) manages the migration aspects, while the client accesses specialist DV support concurrently.",
        law: "Professional Obligations; 1800RESPECT; OMARA Code of Conduct",
        tag: "fv", difficulty: "easy"
      },
      {
        q: "Can a client remain in Australia and keep working while their partner visa ART appeal is being processed?",
        options: ["No — they must depart immediately upon refusal", "Generally yes — the Bridging Visa (BVA) continues during the ART period, maintaining lawful status and work rights", "Only if they apply for a new substantive visa within 48 hours", "Only if the sponsor provides a new sponsorship letter"],
        answer: 1,
        explanation: "The BVA continues during ART proceedings, maintaining both lawful status in Australia and work rights. The client can and should continue normal life while the appeal is being prepared and heard.",
        law: "Migration Act 1958 s.38B; BVA — Work Rights",
        tag: "fv", difficulty: "medium"
      },
      {
        q: "What does the 'death of sponsor' provision in the partner visa regulations allow?",
        options: ["The application is automatically cancelled if the sponsor dies", "The visa may still be granted if the sponsor dies during processing and the applicant is otherwise eligible. Since July 2024, SC 309/100 applicants no longer need to be in Australia at grant time to access this provision", "A new sponsor must be found within 30 days", "The application automatically converts to a humanitarian visa"],
        answer: 1,
        explanation: "The death of sponsor provision (cl. 820.211(2)(g)) allows the visa to proceed and be granted even if the sponsor has died. The 2024 amendments extended this to Subclass 309/100 applicants without requiring Australian presence at the time of grant.",
        law: "Mig. Reg. 1994, Sch. 2, cl. 820.211(2)(g); F2024L00751",
        tag: "fv", difficulty: "hard"
      },
      {
        q: "Can judicial review at the Federal Court be used to challenge ART partner visa decisions on the merits?",
        options: ["Yes — the Federal Court can re-examine all evidence and reach a new decision", "No — Federal Court review is limited to jurisdictional error (legal errors). The merits of the case cannot be re-examined and new evidence cannot be presented", "Yes, but only in family violence cases", "Only if the ART member was shown to have a conflict of interest"],
        answer: 1,
        explanation: "Federal Court (FCFCOA/FCA) review is limited to jurisdictional error — where the ART made an error of law in its decision-making process. The Federal Court does not examine the merits, cannot receive new evidence, and cannot substitute its own factual findings.",
        law: "Migration Act 1958 s.476; Administrative Law — Jurisdictional Error",
        tag: "fv", difficulty: "hard"
      },
      {
        q: "The 2024 family violence amendments updated which key term in the regulations?",
        options: ["Changed 'de facto' to 'registered partner'", "Changed 'suffered' to 'experienced' family violence — reflecting a more compassionate and trauma-informed framing", "Changed 'sponsor' to 'nominator'", "Changed the waiver discretion from 'may' to 'must'"],
        answer: 1,
        explanation: "The Migration Amendment (Family Violence Provisions) Regulations 2024 (F2024L00751) updated the language from 'suffered' to 'experienced' family violence throughout the relevant provisions — reflecting a more compassionate and accurate understanding of trauma.",
        law: "F2024L00751; PAM3 — Updated Terminology",
        tag: "fv", difficulty: "medium"
      }
    ]
  },
  {
    id: 5,
    title: "Process, Fees & Client Care",
    icon: "💼",
    tag: "process",
    description: "Application process, fees, bridging visas, work rights, Medicare, professional obligations, and sales best practices",
    passmark: 100,
    remark_pass: "Excellent understanding of operational requirements. This practical knowledge — especially bridging visa travel rules and RFI management — directly protects clients from avoidable errors that can derail applications.",
    remark_low: "Good understanding overall. Pay special attention to the Bridging Visa B requirement before travel and the RFI response process — these are the most common operational errors staff make.",
    remark_fail: "Operational knowledge is what protects clients every day. The BVB travel rule, RFI deadlines, and professional obligations must be mastered. Please revisit these sections before advising any onshore client.",
    questions: [
      {
        q: "A client holds a Bridging Visa A (BVA) associated with their pending Subclass 820 application. They want to travel to Fiji for a holiday. What must they do BEFORE departure?",
        options: ["Nothing — the BVA allows unrestricted international travel", "Apply for and receive a Bridging Visa B (BVB) BEFORE departing. Leaving on a BVA without a BVB causes the BVA to cease — they cannot return to Australia on it", "Notify the Department of their travel but no visa change is needed", "Convert their BVA to a BVB automatically by booking flights"],
        answer: 1,
        explanation: "A BVA has NO travel rights. Departing on a BVA without a BVB causes the BVA to cease upon departure. The client cannot return to Australia on a ceased BVA. A BVB must be applied for and GRANTED before departure.",
        law: "Migration Act 1958 s.37A; Bridging Visa B — Reg. 2.20",
        tag: "process", difficulty: "easy"
      },
      {
        q: "From what date does a Subclass 820 applicant receive full work rights?",
        options: ["From when the 820 visa is granted (temporary stage)", "From the date of valid lodgement — the BVA granted automatically carries full work rights immediately", "Only after passing the health and character checks", "From when Form 40SP is approved"],
        answer: 1,
        explanation: "Upon valid lodgement of a Subclass 820 application, a Bridging Visa A (BVA) is automatically issued. This BVA carries FULL, unrestricted work rights from the date of lodgement — no waiting for the 820 to be granted.",
        law: "Migration Act 1958; BVA Conditions — Work Rights",
        tag: "process", difficulty: "easy"
      },
      {
        q: "Are Subclass 820 applicants eligible for Medicare from the date of lodgement?",
        options: ["No — Medicare is only available to Australian citizens and permanent residents", "Yes — from the date a valid 820 application is lodged, the applicant is eligible to enrol in Medicare regardless of nationality", "Only if they are from a country with a Reciprocal Health Care Agreement", "Only after the 820 temporary visa is granted"],
        answer: 1,
        explanation: "Partner visa applicants (both 820 and 309) are eligible for Medicare from the date of valid lodgement. This applies regardless of nationality — even for applicants from countries without a Reciprocal Health Care Agreement.",
        law: "Health Insurance Act 1973 — Medicare Eligibility; Partner Visa",
        tag: "process", difficulty: "medium"
      },
      {
        q: "What is the approximate government application fee for a primary partner visa applicant in 2025-26?",
        options: ["$3,580 (the ART fee)", "$5,000 (flat rate for all family visas)", "$9,365 (indexed annually)", "$1,500 (temporary visa fee only)"],
        answer: 2,
        explanation: "The government application fee for a primary partner visa applicant in 2025-26 is approximately AUD $9,365 (indexed annually on 1 July). This is non-refundable upon lodgement. Always verify the current fee at immi.homeaffairs.gov.au before quoting.",
        law: "Mig. Reg. 1994, Sch. 1; DHA Fee Schedule 2025-26",
        tag: "process", difficulty: "easy"
      },
      {
        q: "If a partner visa application is refused, is the government application fee refunded?",
        options: ["Yes — fully refunded within 28 days", "No — government application fees are non-refundable upon lodgement regardless of outcome", "Yes — 50% is refunded", "Only if the refusal was due to Department error"],
        answer: 1,
        explanation: "Government application charges for partner visas are non-refundable once lodged — regardless of outcome (granted, refused, or withdrawn). This must be clearly communicated to all clients before they commit.",
        law: "Mig. Reg. 1994 — Non-Refundable Fee",
        tag: "process", difficulty: "easy"
      },
      {
        q: "How does the sponsor lodge Form 40SP after the applicant lodges the main application?",
        options: ["By mailing it to the Department within 7 days", "Through their own ImmiAccount, using the Transaction Reference Number (TRN) provided to the applicant at lodgement", "By attending a Department service centre in person", "Form 40SP is lodged simultaneously with the main application — the sponsor completes it in the applicant's ImmiAccount"],
        answer: 1,
        explanation: "After the applicant lodges the 820/309 application and receives a TRN, the sponsor lodges Form 40SP separately through their OWN ImmiAccount using the TRN. This links the sponsorship to the application.",
        law: "Form 40SP; ImmiAccount System",
        tag: "process", difficulty: "medium"
      },
      {
        q: "A client receives a Request for Further Information (RFI) from the Department. What should they do?",
        options: ["Ignore it — RFIs are optional requests", "Respond promptly and comprehensively — address EVERY point raised. Processing is paused until the RFI is answered. Contact the registered agent immediately", "Submit a new application instead of responding", "Lodge an ART appeal immediately"],
        answer: 1,
        explanation: "An RFI pauses processing entirely. Responding promptly and comprehensively to every specific concern raised by the case officer is essential. Slow or incomplete RFI responses are a major cause of additional delays. The registered agent should draft the response.",
        law: "Migration Act 1958 s.56; RFI Process",
        tag: "process", difficulty: "easy"
      },
      {
        q: "Can staff without a MARN registration provide specific visa advice to clients on behalf of Interlace Studies?",
        options: ["Yes — anyone employed by a migration agency can give visa advice", "No — under s.280 of the Migration Act 1958, only MARN-registered agents or Australian legal practitioners can provide migration advice", "Only if supervised by the MARN holder during the meeting", "Yes, provided they have a university degree in any field"],
        answer: 1,
        explanation: "Section 280 of the Migration Act 1958 makes it unlawful for a person to provide immigration assistance for reward unless they are a MARN-registered agent or Australian legal practitioner. Non-MARN staff can provide administrative support only.",
        law: "Migration Act 1958 s.280; OMARA Registration",
        tag: "process", difficulty: "medium"
      },
      {
        q: "What is a 'Transaction Reference Number' (TRN) and why is it critical?",
        options: ["A security code for accessing ImmiAccount — shared with no one", "The unique reference number generated when the applicant lodges the visa application — used by the sponsor to link Form 40SP to the application", "A payment reference for the government fee", "The MARN holder's registration number"],
        answer: 1,
        explanation: "The TRN is generated immediately upon the applicant lodging their visa application through ImmiAccount. The sponsor uses this TRN to locate and link their Form 40SP to the correct application. Keep it safe — it identifies the application.",
        law: "ImmiAccount — TRN Process",
        tag: "process", difficulty: "easy"
      },
      {
        q: "A client on a Subclass 820 (temporary visa already granted) wants to travel overseas. Do they need a Bridging Visa B?",
        options: ["Yes — the 820 does not allow international travel", "No — the Subclass 820 is a substantive visa with travel rights. They can depart and return freely throughout the visa's validity", "Only if travel is to a high-risk country", "They need a re-entry permit — not a BVB"],
        answer: 1,
        explanation: "Once the Subclass 820 is granted, it is a substantive visa with full travel rights. The BVA ceased when the 820 was granted. The 820 holder can travel internationally freely throughout the visa's validity period without needing a BVB.",
        law: "Sch. 2, cl. 820.511; Visa Conditions",
        tag: "process", difficulty: "medium"
      },
      {
        q: "When should a client's health examination be completed?",
        options: ["Before lodging the application — proactively", "After lodgement — when the Department sends a health examination request through ImmiAccount with a HAP ID", "As soon as possible — any time before lodgement", "The examination is optional for low-risk nationalities"],
        answer: 1,
        explanation: "The standard process is: lodge the application first, then wait for the Department to issue a health examination request through ImmiAccount with a HAP (Health Applicant Portal) ID. Completing the examination before receiving the HAP ID can create administrative complications.",
        law: "PAM3 — Health; HAP System",
        tag: "process", difficulty: "medium"
      },
      {
        q: "Are there income restrictions on the type of work a Subclass 820 holder can undertake?",
        options: ["Yes — they can only work in their nominated occupation", "No — the 820 (and associated BVA) carries full, unrestricted work rights with no employer, occupation, or industry restrictions", "Only part-time work — a maximum of 20 hours per week", "They cannot start a business — only PAYG employment"],
        answer: 1,
        explanation: "Partner visas (820, 309, 801, 100) carry completely unrestricted work rights. There are no limitations on employer, occupation, industry, or hours. The holder can also become self-employed or start a business.",
        law: "Visa Conditions — No Work Restrictions; Sch. 2",
        tag: "process", difficulty: "easy"
      },
      {
        q: "Can a client access Centrelink payments while holding a Subclass 820 (temporary visa)?",
        options: ["Yes — from day one of arriving in Australia", "Generally no — most Centrelink payments are unavailable to temporary visa holders. After the 801 is granted, a 2-year Newly Arrived Resident's Waiting Period (NARWP) applies for most payments", "Only if they were receiving Centrelink before the visa was granted", "Yes, but only for JobSeeker — not for family payments"],
        answer: 1,
        explanation: "Temporary visa holders (including 820) are generally not eligible for Centrelink income support payments. Once the permanent 801 is granted, a 2-year Newly Arrived Resident's Waiting Period applies before most payments begin.",
        law: "Social Security Act 1991 — NARWP",
        tag: "process", difficulty: "medium"
      },
      {
        q: "How should Interlace Studies staff communicate with a client who has just received a visa refusal notice?",
        options: ["Send a standard template email — no immediate action needed", "Call the client before they read the refusal. Confirm the 21-day ART deadline. Schedule a strategy consultation within 48 hours. Read the full decision before advising", "Tell the client to contact the Department directly", "Advise the client that refusals are normal and to reapply in 12 months"],
        answer: 1,
        explanation: "Best practice: call the client proactively, before they read the letter. Confirm the 21-day appeal deadline immediately. Read the full refusal decision before the next client meeting. Schedule a strategy session within 48 hours to discuss ART appeal prospects and evidence gaps.",
        law: "Best Practice; OMARA Code of Conduct",
        tag: "process", difficulty: "easy"
      },
      {
        q: "What is the 'Newly Arrived Resident's Waiting Period' (NARWP) for a new permanent resident?",
        options: ["6 months before accessing Medicare", "2 years before accessing most Centrelink income support payments after being granted permanent residency", "5 years before being eligible for citizenship", "1 year before accessing the NDIS"],
        answer: 1,
        explanation: "After being granted the permanent partner visa (801/100), a 2-year Newly Arrived Resident's Waiting Period applies before most Centrelink income support payments are accessible. Medicare access is separate and available from lodgement.",
        law: "Social Security Act 1991 — NARWP",
        tag: "process", difficulty: "medium"
      },
      {
        q: "A client asks how long before they can apply for Australian citizenship after receiving their permanent partner visa. What is the answer?",
        options: ["Immediately — PR holders can apply for citizenship any time", "Generally 4 years — including at least 12 months as a permanent resident and meeting the presence requirement of 4 of the past 5 years", "10 years — special rules apply to family migration PR holders", "2 years from the date of the 801/100 grant"],
        answer: 1,
        explanation: "Under s.21 of the Australian Citizenship Act 2007, the general residence requirement is 4 years of lawful status in Australia, with at least 12 months as a permanent resident, and satisfying the presence requirement. The time on a temporary partner visa (820/309) counts toward the 4-year calculation.",
        law: "Australian Citizenship Act 2007 s.21",
        tag: "process", difficulty: "medium"
      },
      {
        q: "What should staff do if they suspect a client's relationship evidence may not be genuine?",
        options: ["Lodge anyway — it is the Department's job to assess genuineness", "Discuss concerns with the client. If the client confirms genuineness, proceed with strong evidence. If the agent believes the application is fraudulent, they must cease acting — they cannot knowingly assist a fraudulent application", "Report the client to the Department immediately", "Reduce their fees to incentivise them to find more evidence"],
        answer: 1,
        explanation: "Under the OMARA Code of Conduct, a migration agent must not knowingly assist in a fraudulent application. If concerns arise: discuss with client, seek clarification. If the agent concludes the application is genuinely fraudulent, they must cease acting. They cannot lodge knowing the evidence is fabricated.",
        law: "OMARA Code of Conduct; Migration Act 1958 s.280",
        tag: "process", difficulty: "hard"
      },
      {
        q: "Can a migration agent charge a 'success fee' — i.e. a higher fee if the visa is granted?",
        options: ["Yes — contingency fees are permitted if disclosed in the costs agreement", "No — the OMARA Code of Conduct prohibits contingency fees. All fees must be set out clearly before work commences regardless of outcome", "Only for complex cases exceeding 6 months processing", "Yes, but only up to 20% of the government fee"],
        answer: 1,
        explanation: "The Migration Agents Regulations 1998 and OMARA Code of Conduct expressly prohibit contingency fees. All fees must be clearly outlined in a written costs agreement before work begins, regardless of the visa outcome.",
        law: "Migration Agents Regulations 1998; OMARA Code — Fees",
        tag: "process", difficulty: "medium"
      },
      {
        q: "How long must Interlace Studies retain client files and records?",
        options: ["2 years after the case closes", "7 years after the case closes — as required by the OMARA Code of Conduct", "12 months only for unsuccessful applications", "Indefinitely for all clients"],
        answer: 1,
        explanation: "The OMARA Code of Conduct requires registered migration agents to retain client files and records for a minimum of 7 years after the case is finalised.",
        law: "OMARA Code of Conduct — Record Keeping",
        tag: "process", difficulty: "easy"
      },
      {
        q: "A senior Interlace staff member without a MARN registration provides detailed advice about a client's visa options at a community seminar. Is this lawful?",
        options: ["Yes — community education is always exempt from the MARN requirement", "No — providing immigration assistance (including specific visa advice) for reward without a MARN registration is unlawful under s.280 of the Migration Act 1958", "Yes — advice at seminars is considered general information, not immigration assistance", "Only if the MARN holder is present in the same building"],
        answer: 1,
        explanation: "Section 280 of the Migration Act 1958 defines immigration assistance broadly. Providing specific advice about visa options at a community seminar — particularly if the agency receives any benefit — can constitute unlawful immigration assistance if the person is not MARN registered.",
        law: "Migration Act 1958 s.280; OMARA Compliance",
        tag: "process", difficulty: "hard"
      }
    ]
  }
];
