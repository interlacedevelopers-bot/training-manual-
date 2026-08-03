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
    roles: ["Migration Consultant", "Branch Manager"],
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
    roles: ["Migration Consultant", "Branch Manager"],
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
    roles: ["Migration Consultant", "Branch Manager"],
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
    roles: ["Migration Consultant", "Branch Manager"],
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
    roles: ["Migration Consultant", "Branch Manager"],
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
  },
  {
    id: 6,
    title: "Company Overview & Compliance Boundaries",
    icon: "🧭",
    tag: "compliance",
    description: "Interlace Studies background, key Australian visa products, and the OMARA Green Line / Red Line compliance rule",
    passmark: 100,
    roles: ["Sales & Client Relations"],
    remark_pass: "Excellent grasp of the compliance boundary. Knowing exactly where the Green Line ends and the Red Line begins protects clients, protects you, and protects the company's MARA registration.",
    remark_low: "Good effort. Re-read Section 4 (Compliance & Legal Boundaries) carefully — the Green Line / Red Line table is the single most important reference in this entire manual.",
    remark_fail: "This module covers the legal boundary between lawful lead generation and unlawful migration advice. Getting this wrong is a criminal offence under the Migration Act 1958. Please re-study Sections 1–4 in full before retrying.",
    questions: [
      {
        q: "What is the legal consequence of providing immigration assistance without being a Registered Migration Agent (RMA)?",
        options: ["A warning from Interlace Studies management only", "It is a criminal offence under the Migration Act 1958 (Cth)", "A small administrative fine payable to OMARA", "There is no consequence if the client consents"],
        answer: 1,
        explanation: "Providing immigration assistance without being an RMA is a criminal offence under the Migration Act 1958 (Cth). As a sales team member, you are NOT an RMA and must never provide specific migration advice.",
        law: "Sales Manual §4 — Compliance & Legal Boundaries",
        tag: "compliance", difficulty: "easy"
      },
      {
        q: "Which of the following is something you CAN do under the Green Line rule?",
        options: ["Recommend a specific visa subclass based on a client's personal circumstances", "Share publicly available, factual information from the Department of Home Affairs website", "Assess or predict a client's chances of visa success", "Advise on how to respond to a Departmental request for information (RFI)"],
        answer: 1,
        explanation: "Sharing publicly available, factual information from immi.homeaffairs.gov.au is explicitly listed as a Green Line (permitted) activity.",
        law: "Sales Manual §4.2 — Green Line / Red Line Rule",
        tag: "compliance", difficulty: "easy"
      },
      {
        q: "Which of the following is a Red Line action you must NEVER do?",
        options: ["Book an appointment with an RMA for a paid consultation", "Draft, prepare, or assist in completing any visa application form", "Collect a client's contact details and inquiry context for the lead profile", "Answer general questions about study options and education pathways"],
        answer: 1,
        explanation: "Drafting, preparing, or assisting in completing a visa application form is explicitly listed as a Red Line activity reserved for Registered Migration Agents.",
        law: "Sales Manual §4.2 — Green Line / Red Line Rule",
        tag: "compliance", difficulty: "medium"
      },
      {
        q: "A prospect on Facebook asks, 'What are my chances of getting this visa approved?' What is the correct response?",
        options: ["Give an honest personal estimate based on similar cases you've seen", "Use the standard deflection script and offer to book a consultation with a Registered Migration Agent", "Tell them the published approval statistics for that visa subclass", "Say it looks strong to keep them engaged"],
        answer: 1,
        explanation: "Assessing or predicting a client's chances of success is a Red Line activity. Use the standard deflection script: explain migration law is complex, and offer to connect them with an RMA for a paid consultation.",
        law: "Sales Manual §4.3 — Standard Deflection Script",
        tag: "compliance", difficulty: "medium"
      },
      {
        q: "Which visa subclass is for international students enrolled at a CRICOS-registered institution?",
        options: ["Subclass 600", "Subclass 500", "Subclass 482", "Subclass 485"],
        answer: 1,
        explanation: "Subclass 500 is the Student Visa, for international students seeking to study in Australia at a CRICOS-registered institution.",
        law: "Sales Manual §3 — Understanding Australian Visa Products",
        tag: "product", difficulty: "easy"
      },
      {
        q: "A client says they want to visit family in Australia for a short trip. Which visa subclass is most relevant to discuss in general terms?",
        options: ["Subclass 482", "Subclass 600", "Subclass 186", "Subclass 300"],
        answer: 1,
        explanation: "Subclass 600 (Visitor Visa) covers tourists, family visitors, business visitors, and those seeking medical treatment.",
        law: "Sales Manual §3 — Understanding Australian Visa Products",
        tag: "product", difficulty: "easy"
      },
      {
        q: "What is the key difference between the Subclass 820/801 and Subclass 309/100 partner visa pathways?",
        options: ["820/801 is for skilled workers; 309/100 is for students", "820/801 is for applicants residing in Australia (onshore); 309/100 is for applicants residing outside Australia (offshore)", "820/801 has no processing time; 309/100 takes over 5 years", "There is no difference — they are the same visa"],
        answer: 1,
        explanation: "Subclass 820/801 is the onshore partner visa pathway; Subclass 309/100 is the offshore equivalent for applicants residing outside Australia.",
        law: "Sales Manual §3 — Understanding Australian Visa Products",
        tag: "product", difficulty: "medium"
      },
      {
        q: "Which visa is for skilled workers sponsored by an approved Australian employer, with common questions about ANZSCO occupations and TSMIT?",
        options: ["Subclass 485", "Subclass 482 (TSS)", "Subclass 600", "Subclass 300"],
        answer: 1,
        explanation: "Subclass 482 (Temporary Skill Shortage) is for skilled workers sponsored by an approved employer. Common questions cover eligible ANZSCO occupations, the employer sponsorship process, and TSMIT salary requirements.",
        law: "Sales Manual §3 — Understanding Australian Visa Products",
        tag: "product", difficulty: "medium"
      },
      {
        q: "Which visa is aimed at international students who have recently graduated from an Australian institution?",
        options: ["Subclass 485 (Temporary Graduate Visa)", "Subclass 186 (ENS)", "Subclass 600", "Subclass 820"],
        answer: 0,
        explanation: "Subclass 485 (Temporary Graduate Visa) is for international students who have recently graduated from an Australian institution, with common questions on eligibility, duration, and regional area benefits.",
        law: "Sales Manual §3 — Understanding Australian Visa Products",
        tag: "product", difficulty: "easy"
      },
      {
        q: "Which pathways are associated with the Subclass 186 (Employer Nomination Scheme)?",
        options: ["TRT, DE, and Labour Agreement", "Onshore and offshore only", "Student and graduate pathways only", "There is only one pathway"],
        answer: 0,
        explanation: "Subclass 186 (ENS) common questions cover pathways (TRT, DE, Labour Agreement), age limits, skills assessment, and English requirements.",
        law: "Sales Manual §3 — Understanding Australian Visa Products",
        tag: "product", difficulty: "hard"
      },
      {
        q: "Which two stages of the three-stage sales funnel is the Nepal-based sales team primarily responsible for?",
        options: ["Consultation & Conversion only", "Awareness & Hunting, and Lead Qualification", "Lead Qualification and Consultation & Conversion", "None — RMAs handle the entire funnel"],
        answer: 1,
        explanation: "The sales team's role covers Awareness & Hunting (monitoring social media, engaging, initiating DMs) and Lead Qualification (collecting lead data, entering into GHL, booking appointments). Consultation & Conversion is handled by the RMA / Education Counselor.",
        law: "Sales Manual §1.2 — Your Role in the Sales Funnel",
        tag: "compliance", difficulty: "medium"
      },
      {
        q: "Where is Interlace Studies Pty Ltd headquartered, and what accreditation does it hold?",
        options: ["Sydney; CRICOS-accredited only", "Brisbane, Queensland; ICEF-accredited with multiple MARA registrations", "Kathmandu; not accredited", "Perth; OMARA-accredited"],
        answer: 1,
        explanation: "Interlace Studies Pty Ltd is a registered and ICEF-accredited education and migration consultancy headquartered in Brisbane, Queensland, with offices also in Adelaide, Perth, Sydney, and Kathmandu, and holds multiple MARA registrations.",
        law: "Sales Manual §2 — About Interlace Studies",
        tag: "compliance", difficulty: "easy"
      },
      {
        q: "Who regulates Registered Migration Agents in Australia, and from what date does the current Code of Conduct apply?",
        options: ["ASIC, effective 1 January 2020", "OMARA, effective 1 March 2022", "The Federal Court, effective immediately upon registration", "The Department of Education, effective 1 July 2024"],
        answer: 1,
        explanation: "The Office of the Migration Agents Registration Authority (OMARA) regulates registered migration agents under the Migration Act 1958. The Code of Conduct for Registered Migration Agents has applied since 1 March 2022.",
        law: "Sales Manual §4.1 — The OMARA Framework",
        tag: "compliance", difficulty: "medium"
      },
      {
        q: "A client wants advice on how to respond to a Departmental Request for Information (RFI) they just received. What should you do?",
        options: ["Draft a response with them since it's just paperwork", "Explain this is outside what you can advise on, and connect them with an RMA", "Tell them to ignore it since RFIs are optional", "Give general tips since it's not 'specific' advice"],
        answer: 1,
        explanation: "Advising on how to respond to a Departmental RFI is explicitly a Red Line activity — it must be referred to a Registered Migration Agent.",
        law: "Sales Manual §4.2 — Green Line / Red Line Rule",
        tag: "compliance", difficulty: "hard"
      },
      {
        q: "Can you provide advice on a visa refusal or an Administrative Appeals Tribunal (AAT) matter?",
        options: ["Yes, if you've seen similar cases before", "No — this is a Red Line activity reserved for Registered Migration Agents", "Yes, but only in writing, never verbally", "Only if the client insists"],
        answer: 1,
        explanation: "Providing advice on visa refusals, appeals, or the AAT is a Red Line activity that must always be referred to an RMA.",
        law: "Sales Manual §4.2 — Green Line / Red Line Rule",
        tag: "compliance", difficulty: "medium"
      },
      {
        q: "What is an acceptable Green Line way to describe the Subclass 500 visa to a prospective student?",
        options: ["'You will definitely be approved for a Subclass 500 given your profile.'", "'The Subclass 500 is for students enrolled in a CRICOS-registered course.'", "'I can help you prepare your GTE statement myself.'", "'Your previous refusal won't matter for this application.'"],
        answer: 1,
        explanation: "Explaining the general purpose and process of a visa category — e.g. that the Subclass 500 is for students enrolled in a CRICOS-registered course — is a Green Line activity.",
        law: "Sales Manual §4.2 — Green Line / Red Line Rule",
        tag: "product", difficulty: "easy"
      }
    ]
  },
  {
    id: 7,
    title: "Lead Generation & Social Media Hunting",
    icon: "🎯",
    tag: "leadgen",
    description: "Quality lead standards, lead scoring, and platform-specific hunting strategy across Facebook, Instagram, TikTok, Reddit and LinkedIn",
    passmark: 100,
    roles: ["Sales & Client Relations"],
    remark_pass: "Outstanding command of the lead generation system. Disciplined platform strategy and rigorous lead quality standards are what keep the pipeline full of leads RMAs can actually convert.",
    remark_low: "Solid foundation. Focus on the lead scoring thresholds and the platform-by-platform time allocation table — these directly drive your daily targets.",
    remark_fail: "Lead quality and platform strategy are the engine of your role. Please re-study Sections 5 through 9 in full — especially the lead scoring table — before retrying.",
    questions: [
      {
        q: "Which of the following is NOT one of the seven required fields for a valid lead entered into GHL?",
        options: ["Lead Context", "Client's home postal address", "Source Platform", "Lead Date & Time (NST)"],
        answer: 1,
        explanation: "The seven required fields are: Lead Context, Phone Number, Email Address, Services Sought, Client History, Source Platform, and Lead Date & Time (NST). A postal address is not one of them.",
        law: "Sales Manual §5 — Quality Lead Definition & Standards",
        tag: "leadgen", difficulty: "medium"
      },
      {
        q: "A lead is reviewed and scores 65%. How is it classified, and does it count toward the monthly target?",
        options: ["Qualified Lead — counts toward target", "Warm Lead — does NOT count toward target, follow up to gather missing information", "Premium Lead — priority booking within 24 hours", "Incomplete Lead — discarded immediately"],
        answer: 1,
        explanation: "A score of 50–69% is a Warm Lead. It does NOT count toward the monthly target; the rep must follow up to gather the missing information.",
        law: "Sales Manual §5.1 — Lead Quality Scoring",
        tag: "leadgen", difficulty: "medium"
      },
      {
        q: "A lead scores 95%. What action is required?",
        options: ["No action — it's automatically booked", "Immediate priority booking with an RMA within 24 hours", "Return it to the rep for completion", "Booking within 48 hours, same as any qualified lead"],
        answer: 1,
        explanation: "A score of 90–100% is a Premium Lead, requiring immediate priority booking with an RMA within 24 hours.",
        law: "Sales Manual §5.1 — Lead Quality Scoring",
        tag: "leadgen", difficulty: "easy"
      },
      {
        q: "A Qualified Lead (70–89%) must be booked for an appointment within what timeframe?",
        options: ["24 hours", "48 hours", "7 days", "There is no deadline"],
        answer: 1,
        explanation: "A Qualified Lead (70–89%) counts toward the monthly target and must be booked within 48 hours.",
        law: "Sales Manual §5.1 — Lead Quality Scoring",
        tag: "leadgen", difficulty: "easy"
      },
      {
        q: "A lead scores below 50%. What happens to it?",
        options: ["It automatically counts as a Warm Lead", "It is returned to the sales rep and must be completed within 24 hours or it is discarded", "It is escalated directly to an RMA", "Nothing — low scores are ignored"],
        answer: 1,
        explanation: "A score below 50% is an Incomplete Lead. It is returned to the rep, who must complete it within 24 hours or it will be discarded.",
        law: "Sales Manual §5.1 — Lead Quality Scoring",
        tag: "leadgen", difficulty: "medium"
      },
      {
        q: "What percentage of Australian internet users are active on Facebook, making it the dominant platform?",
        options: ["48%", "65%", "78%", "35%"],
        answer: 2,
        explanation: "Facebook remains the dominant platform with 78% of Australian internet users active on it, followed by Instagram (65%), TikTok (48%), LinkedIn (42%), and Reddit (35%).",
        law: "Sales Manual §6 — Social Media Platforms",
        tag: "leadgen", difficulty: "easy"
      },
      {
        q: "According to the platform strategy table, how much daily time should be allocated to Facebook Groups, and what is the priority?",
        options: ["1 hour, medium priority", "3 hours, ★★★★★ (highest volume, all lead types)", "30 minutes, lowest priority", "1.5 hours, student visa leads only"],
        answer: 1,
        explanation: "Facebook Groups get 3 hours of daily allocation and the top ★★★★★ priority rating, as the highest-volume source across all lead types.",
        law: "Sales Manual §6 — Social Media Platforms — Hunting Strategy",
        tag: "leadgen", difficulty: "medium"
      },
      {
        q: "Which platform is identified as the primary channel for targeting employer-sponsored (482/186) visa leads?",
        options: ["TikTok", "Instagram", "LinkedIn", "YouTube Comments"],
        answer: 2,
        explanation: "LinkedIn is the primary platform for employer-sponsored visa leads — connecting with Nepali professionals, HR managers, and skilled workers on the MLTSSL.",
        law: "Sales Manual §9.2 — LinkedIn Strategy",
        tag: "leadgen", difficulty: "medium"
      },
      {
        q: "On TikTok, what is your role primarily supposed to be?",
        options: ["Creating original viral video content daily", "Engaging in the comments section of relevant videos, not creating content unless directed by management", "Running paid TikTok advertising campaigns", "Only monitoring — no direct engagement allowed"],
        answer: 1,
        explanation: "Your role on TikTok is primarily to engage in the comments section of relevant videos (e.g. searching 'Australia student visa', 'partner visa Australia'), not to create content unless directed by management.",
        law: "Sales Manual §8.2 — TikTok Strategy",
        tag: "leadgen", difficulty: "easy"
      },
      {
        q: "What is the strict rule for engaging on Reddit?",
        options: ["Advertise Interlace Studies directly in every comment for maximum visibility", "Never directly advertise Interlace Studies in a post or comment — only mention it if asked, or via private message after building rapport", "Only post links to the Interlace Studies website", "Reddit engagement is not permitted at all"],
        answer: 1,
        explanation: "Reddit requires a particularly careful approach: never directly advertise Interlace Studies in a post or comment. Build credibility with genuinely helpful responses, and only mention the company if directly asked or via DM after rapport is established.",
        law: "Sales Manual §9.1 — Reddit Strategy",
        tag: "leadgen", difficulty: "hard"
      },
      {
        q: "Under the Facebook Engagement Protocol, how soon after posting a helpful public comment should you send a private DM?",
        options: ["Within 5 minutes", "Within 24 hours", "Within 1 week", "There is no specific timeframe"],
        answer: 0,
        explanation: "Step 4 of the Facebook Engagement Protocol requires sending a private DM within 5 minutes of the public comment.",
        law: "Sales Manual §7.2 — Facebook Engagement Protocol",
        tag: "leadgen", difficulty: "medium"
      },
      {
        q: "Once all required lead data has been collected in a DM conversation, how quickly must it be entered into GHL?",
        options: ["Immediately, within 2 hours at most", "Within 24 hours", "At the end of the week", "There is no deadline as long as it's entered eventually"],
        answer: 0,
        explanation: "Step 6 of the Facebook Engagement Protocol states the lead must be entered into GHL immediately — data entry must not be delayed by more than 2 hours.",
        law: "Sales Manual §7.2 — Facebook Engagement Protocol",
        tag: "leadgen", difficulty: "medium"
      },
      {
        q: "What is the minimum number of comments you should post per day on Instagram using target hashtags?",
        options: ["5 per day", "20 per day", "50 per day", "There is no minimum"],
        answer: 1,
        explanation: "Comment Engagement on Instagram requires a minimum of 20 comments per day on posts using target hashtags.",
        law: "Sales Manual §8.1 — Instagram Strategy",
        tag: "leadgen", difficulty: "easy"
      },
      {
        q: "What is the minimum number of personalised DMs you should send per day on Instagram after public engagement?",
        options: ["5 per day", "15 per day", "30 per day", "1 per week"],
        answer: 1,
        explanation: "DM Outreach on Instagram requires a minimum of 15 personalised DMs per day, sent after public engagement.",
        law: "Sales Manual §8.1 — Instagram Strategy",
        tag: "leadgen", difficulty: "easy"
      },
      {
        q: "A client mentions TSMIT and ANZSCO in a Facebook comment. Which visa category's keyword group does this fall under?",
        options: ["Student Visa (500)", "Visitor Visa (600)", "Employer Sponsored (482/186)", "Partner Visa (820/309)"],
        answer: 2,
        explanation: "TSMIT (Temporary Skilled Migration Income Threshold) and ANZSCO occupation codes are keywords listed under the Employer Sponsored (482/186) category.",
        law: "Sales Manual §6.1 — Keyword Monitoring",
        tag: "leadgen", difficulty: "medium"
      },
      {
        q: "Which four subreddits are specifically named as containing a high concentration of genuine, complex visa questions?",
        options: ["r/Australia, r/funny, r/news, r/worldnews", "r/AusVisa, r/AskAnAustralian, r/Australia, r/ImmigrationAustralia", "r/immigration, r/travel, r/study, r/work", "None — Reddit is not used for lead generation"],
        answer: 1,
        explanation: "r/AusVisa, r/AskAnAustralian, r/Australia, and r/ImmigrationAustralia are named as containing a high concentration of individuals with genuine, complex visa questions.",
        law: "Sales Manual §9.1 — Reddit Strategy",
        tag: "leadgen", difficulty: "medium"
      },
      {
        q: "Which lead source is described as 'referral-based' with high conversion, allocated 30 minutes daily?",
        options: ["YouTube Comments", "WhatsApp Groups", "LinkedIn", "Facebook Pages"],
        answer: 1,
        explanation: "WhatsApp Groups (Nepalese community groups, referral-based) are allocated 30 minutes daily and noted for high conversion.",
        law: "Sales Manual §6 — Social Media Platforms — Hunting Strategy",
        tag: "leadgen", difficulty: "easy"
      },
      {
        q: "What is Step 1 of the Facebook Engagement Protocol, and how long should it take?",
        options: ["Book Appointment — 10 minutes", "Monitor: scan new posts in assigned groups using keyword search over the past 24 hours — 30 minutes", "Enter in GHL — 2 hours", "Direct Message — 5 minutes"],
        answer: 1,
        explanation: "Step 1 (Monitor) requires spending the first 30 minutes of each session scanning new posts in assigned groups, using keyword search for posts from the past 24 hours.",
        law: "Sales Manual §7.2 — Facebook Engagement Protocol",
        tag: "leadgen", difficulty: "medium"
      }
    ]
  },
  {
    id: 8,
    title: "Engagement Scripts, Phone & Objection Handling",
    icon: "💬",
    tag: "engagement",
    description: "DM qualification scripts, phone engagement protocol, call etiquette, and handling common client objections",
    passmark: 100,
    roles: ["Sales & Client Relations"],
    remark_pass: "Great command of the engagement scripts and phone protocol. Confident, compliant conversations are what turn a social media comment into a booked consultation.",
    remark_low: "Good effort. Revisit the DM qualification flow and the phone call script structure — the order and timing of each step matters for both compliance and conversion.",
    remark_fail: "Engagement scripts and phone protocol are core to converting leads into bookings. Please re-study Sections 10 through 12 in full before retrying.",
    questions: [
      {
        q: "Why must engagement scripts never be copy-pasted verbatim to multiple prospects?",
        options: ["It's against company style guidelines only", "Social media platforms may flag repetitive messages as spam", "Scripts are copyrighted and can only be used once", "It takes too long to type them out each time"],
        answer: 1,
        explanation: "Scripts must be adapted to each individual situation so they feel genuine and personalised — copy-pasting verbatim risks platforms flagging the messages as spam.",
        law: "Sales Manual §10 — Engagement Scripts & Templates",
        tag: "engagement", difficulty: "easy"
      },
      {
        q: "What is the correct order of the DM qualification conversational flow?",
        options: ["Booking → Opening → Contact Confirmation → Context Gathering → History Gathering", "Opening → Context Gathering → History Gathering → Contact Confirmation → Booking", "Contact Confirmation → Opening → Booking → History Gathering → Context Gathering", "History Gathering → Opening → Context Gathering → Booking → Contact Confirmation"],
        answer: 1,
        explanation: "The DM Qualification Script flows: Opening, then Context Gathering, then History Gathering, then Contact Confirmation, then Booking.",
        law: "Sales Manual §10.2 — DM Qualification Script",
        tag: "engagement", difficulty: "medium"
      },
      {
        q: "During what hours (AEST) must all outbound phone calls to Australian clients be made?",
        options: ["6:00 AM – 3:00 PM AEST", "9:00 AM – 6:00 PM AEST", "24 hours a day, any time", "12:00 PM – 9:00 PM AEST"],
        answer: 1,
        explanation: "All outbound calls must be made during Australian business hours, 9:00 AM – 6:00 PM AEST.",
        law: "Sales Manual §11 — Phone Engagement Strategy",
        tag: "engagement", difficulty: "medium"
      },
      {
        q: "9:00 AM – 6:00 PM AEST corresponds to approximately what window in Nepal Standard Time (NST)?",
        options: ["3:15 AM – 12:15 PM NST", "9:00 AM – 6:00 PM NST (same time)", "6:00 PM – 3:00 AM NST", "12:00 PM – 9:00 PM NST"],
        answer: 0,
        explanation: "Australian business hours of 9:00 AM – 6:00 PM AEST correspond to approximately 3:15 AM – 12:15 PM Nepal Standard Time.",
        law: "Sales Manual §11 — Phone Engagement Strategy",
        tag: "engagement", difficulty: "hard"
      },
      {
        q: "Before making an outbound call, what should you review first according to the Call Preparation Checklist?",
        options: ["The company's annual report", "The client's lead profile in GHL", "The RMA's personal calendar", "Nothing — calls can be made without preparation"],
        answer: 1,
        explanation: "The Call Preparation Checklist begins with reviewing the client's lead profile in GHL before calling.",
        law: "Sales Manual §11.1 — Call Preparation Checklist",
        tag: "engagement", difficulty: "easy"
      },
      {
        q: "A client on a call asks a question you genuinely cannot answer. What is the correct scripted response?",
        options: ["Make an educated guess so the call keeps moving", "Say you'll note it for their agent to address in the consultation", "Tell them to search the Department of Home Affairs website themselves and hang up", "Transfer the call immediately without explanation"],
        answer: 1,
        explanation: "The correct response is: 'That is a great question. I want to make sure you get the most accurate answer, so I will note this for your agent to address in the consultation.'",
        law: "Sales Manual §11.3 — Call Etiquette Rules",
        tag: "engagement", difficulty: "medium"
      },
      {
        q: "What is the maximum time a client should be left on hold without being checked on?",
        options: ["10 seconds", "30 seconds", "2 minutes", "There is no limit"],
        answer: 1,
        explanation: "A client should never be put on hold for more than 30 seconds without checking back in.",
        law: "Sales Manual §11.3 — Call Etiquette Rules",
        tag: "engagement", difficulty: "easy"
      },
      {
        q: "Which of the following must NEVER be promised to a client during a call?",
        options: ["A follow-up email confirmation", "Visa outcomes, processing times, or success rates", "A consultation booking time", "The name of the RMA they'll be speaking with"],
        answer: 1,
        explanation: "Call Etiquette Rules explicitly state: do not make promises about visa outcomes, processing times, or success rates.",
        law: "Sales Manual §11.3 — Call Etiquette Rules",
        tag: "engagement", difficulty: "medium"
      },
      {
        q: "When must a call be logged in GHL, and what must the log include?",
        options: ["Once a week, with only the client's name", "Immediately after the call ends, including a summary and any follow-up actions required", "Only if an appointment was booked", "Logging calls is optional"],
        answer: 1,
        explanation: "All calls must be logged in GHL immediately after the call ends, including a summary of the conversation and any follow-up actions required.",
        law: "Sales Manual §11.3 — Call Etiquette Rules",
        tag: "engagement", difficulty: "easy"
      },
      {
        q: "What core principle underlies how all client objections (e.g. 'it's too expensive', 'I'll think about it') should be handled?",
        options: ["Objections mean the client is not a real lead and should be dropped", "Objections are not rejections — they are requests for more information", "Objections should be met with a lower price on the spot", "Objections should be argued against firmly until the client agrees"],
        answer: 1,
        explanation: "Objections are a natural part of the sales process. They are not rejections — they are requests for more information.",
        law: "Sales Manual §12 — Handling Objections",
        tag: "engagement", difficulty: "medium"
      },
      {
        q: "What is Step 4 of the Facebook Engagement Protocol, and what governs how it should be done?",
        options: ["Public Comment — post a generic templated reply", "Direct Message — sent within 5 minutes, using the DM script templates but personalised, not copy-pasted", "Book Appointment — done automatically by GHL", "Monitor — scan posts for 30 minutes"],
        answer: 1,
        explanation: "Step 4 is Direct Message: send a private DM within 5 minutes of the public comment, using the DM script templates — adapted, not copy-pasted verbatim.",
        law: "Sales Manual §7.2 / §10 — Engagement Protocol & Scripts",
        tag: "engagement", difficulty: "medium"
      },
      {
        q: "In the phone call script, what is the purpose of the 'Opening (First 30 Seconds)' section?",
        options: ["To immediately book the appointment before the client can object", "To confirm you're speaking with the right person, introduce yourself, reference their inquiry, and check if it's a good time to talk", "To read out the full pricing menu", "To ask for payment details"],
        answer: 1,
        explanation: "The Opening confirms the client's identity, introduces the caller and Interlace Studies, references the topic they inquired about, and checks whether it's a good time to talk.",
        law: "Sales Manual §11.2 — Phone Call Script",
        tag: "engagement", difficulty: "easy"
      },
      {
        q: "Why should you confirm a client's time zone before calling?",
        options: ["It's not necessary — GHL handles this automatically", "To ensure the call is being made at a suitable, respectful time for the client", "Only relevant for clients outside Nepal", "To calculate the call duration in advance"],
        answer: 1,
        explanation: "The Call Preparation Checklist requires confirming the client's time zone before calling, to ensure it is a suitable time to call.",
        law: "Sales Manual §11.1 — Call Preparation Checklist",
        tag: "engagement", difficulty: "medium"
      },
      {
        q: "A client becomes frustrated on a call. What is the correct approach?",
        options: ["Argue back to defend the company", "Acknowledge their feelings — e.g. 'I completely understand your frustration, and I assure you we are here to help' — and never argue with the client", "End the call immediately", "Transfer them to the team leader without comment"],
        answer: 1,
        explanation: "Call Etiquette Rules state: never argue with a client, and if they are frustrated, acknowledge their feelings with an empathetic response.",
        law: "Sales Manual §11.3 — Call Etiquette Rules",
        tag: "engagement", difficulty: "medium"
      }
    ]
  },
  {
    id: 9,
    title: "GHL CRM, Targets & Technology Stack",
    icon: "📊",
    tag: "crm",
    description: "GoHighLevel pipeline management, monthly targets and individual KPIs, and the full sales technology stack",
    passmark: 100,
    roles: ["Sales & Client Relations"],
    remark_pass: "Excellent understanding of the CRM workflow and performance targets. Disciplined GHL use and consistent KPI achievement are what the whole sales pipeline depends on.",
    remark_low: "Good foundation. Review the GHL pipeline stages and their required actions, plus the monthly and individual KPI targets — these are checked weekly.",
    remark_fail: "GHL discipline and target awareness are core to this role. Please re-study Sections 13 through 15 in full before retrying.",
    questions: [
      {
        q: "What is described as 'the central nervous system' of the sales operation, through which every lead, conversation, appointment, and follow-up must be managed?",
        options: ["Slack", "GoHighLevel (GHL)", "WhatsApp Business", "Google Sheets"],
        answer: 1,
        explanation: "GoHighLevel (GHL) is described as the central nervous system of the sales operation — every lead, conversation, appointment, and follow-up must be managed through it.",
        law: "Sales Manual §13 — GoHighLevel (GHL) CRM Workflow",
        tag: "crm", difficulty: "easy"
      },
      {
        q: "Within how long of identifying a New Lead must contact be made?",
        options: ["Within 2 hours", "Within 24 hours", "Within 48 hours", "Within 7 days"],
        answer: 0,
        explanation: "A 'New Lead' (identified but not yet contacted) requires contact within 2 hours of identification.",
        law: "Sales Manual §13.2 — GHL Pipeline Stages & Definitions",
        tag: "crm", difficulty: "medium"
      },
      {
        q: "A lead is in the 'Contacted' stage and hasn't responded yet. When should you follow up?",
        options: ["Immediately, within minutes", "If no response within 24 hours", "After exactly 7 days", "Never — wait for them to respond"],
        answer: 1,
        explanation: "The 'Contacted' pipeline stage requires a follow-up if there is no response within 24 hours.",
        law: "Sales Manual §13.2 — GHL Pipeline Stages & Definitions",
        tag: "crm", difficulty: "medium"
      },
      {
        q: "After how many follow-up attempts, over how many days, is a lead tagged 'Unresponsive'?",
        options: ["1 attempt over 24 hours", "3 attempts over 7 days", "5 attempts over 30 days", "Leads are never marked unresponsive"],
        answer: 1,
        explanation: "A lead is tagged 'Unresponsive' after 3 follow-up attempts over 7 days with no response, triggering a GHL re-engagement automation.",
        law: "Sales Manual §13.2 — GHL Pipeline Stages & Definitions",
        tag: "crm", difficulty: "medium"
      },
      {
        q: "What is the team's total minimum monthly lead target across all categories?",
        options: ["500", "1,000", "2,000", "250"],
        answer: 1,
        explanation: "The total minimum monthly target across all lead categories is 1,000 (250 weekly, ~50 daily per rep), rated CRITICAL priority.",
        law: "Sales Manual §14 — Monthly Targets & KPIs",
        tag: "crm", difficulty: "easy"
      },
      {
        q: "Which lead category has the highest monthly target range and is rated CRITICAL priority?",
        options: ["Visitor Visa (Subclass 600) Leads", "Employer Sponsored (482/186) Leads", "Student Visa (Subclass 500) Leads", "Partner Visa (820/309) Leads"],
        answer: 2,
        explanation: "Student Visa (Subclass 500) Leads carry a monthly target of 200–300, the highest range, and are rated CRITICAL priority.",
        law: "Sales Manual §14 — Monthly Targets & KPIs",
        tag: "crm", difficulty: "medium"
      },
      {
        q: "What is the minimum number of daily social media engagements (comments + DMs combined) required per rep?",
        options: ["10 per day", "50 per day", "100 per day", "There is no daily minimum"],
        answer: 1,
        explanation: "The individual KPI for daily social media engagements (comments + DMs) is a minimum of 50 per day.",
        law: "Sales Manual §14.1 — Individual KPIs",
        tag: "crm", difficulty: "easy"
      },
      {
        q: "What is the minimum number of new leads a rep must enter into GHL per day?",
        options: ["1 per day", "5 per day", "10 per day", "20 per day"],
        answer: 2,
        explanation: "The individual KPI requires a minimum of 10 new leads entered into GHL per day per rep.",
        law: "Sales Manual §14.1 — Individual KPIs",
        tag: "crm", difficulty: "easy"
      },
      {
        q: "What is the minimum average weekly lead quality score target for an individual rep?",
        options: ["50%", "60%", "75%", "90%"],
        answer: 2,
        explanation: "The individual KPI for average lead quality score is a minimum of 75%, measured weekly.",
        law: "Sales Manual §14.1 — Individual KPIs",
        tag: "crm", difficulty: "medium"
      },
      {
        q: "What is the minimum appointment booking conversion rate required, measured against qualified leads?",
        options: ["10%", "25%", "40%", "75%"],
        answer: 2,
        explanation: "The individual KPI for appointment booking conversion rate is a minimum of 40% of qualified leads, measured weekly.",
        law: "Sales Manual §14.1 — Individual KPIs",
        tag: "crm", difficulty: "medium"
      },
      {
        q: "What is the maximum acceptable response time to a new inquiry?",
        options: ["30 minutes", "2 hours", "24 hours", "48 hours"],
        answer: 1,
        explanation: "The individual KPI for response time to new inquiries is a maximum of 2 hours, measured daily.",
        law: "Sales Manual §14.1 — Individual KPIs",
        tag: "crm", difficulty: "easy"
      },
      {
        q: "Which tool is described as mandatory for all team members and used for lead management, pipeline tracking, and automated follow-ups?",
        options: ["Canva (Pro)", "GoHighLevel (GHL)", "Notion / Confluence", "Zoom / Google Meet"],
        answer: 1,
        explanation: "GoHighLevel (GHL) is listed as mandatory for all team members, covering lead management, pipeline tracking, appointment booking, automated follow-ups, and call logging.",
        law: "Sales Manual §15 — Tools & Technology Stack",
        tag: "crm", difficulty: "easy"
      },
      {
        q: "Which communication tool must be used strictly as its 'Business' version for client communication?",
        options: ["Slack", "WhatsApp — must use the Business account only", "Personal Instagram DMs", "Personal email"],
        answer: 1,
        explanation: "WhatsApp Business is used for client communication, appointment reminders, and document sharing — the manual specifies to use the business account only.",
        law: "Sales Manual §15 — Tools & Technology Stack",
        tag: "crm", difficulty: "medium"
      },
      {
        q: "Which tool integrates with GHL to automatically log calls made to Australian numbers?",
        options: ["Canva (Pro)", "Grammarly (Premium)", "A VoIP service such as Aircall", "Google Sheets"],
        answer: 2,
        explanation: "A VoIP service (e.g. Aircall) is used to make and receive calls to Australian numbers, and integrates with GHL for automatic call logging.",
        law: "Sales Manual §15 — Tools & Technology Stack",
        tag: "crm", difficulty: "medium"
      },
      {
        q: "On which day, and for how long, is the mandatory weekly team review held?",
        options: ["Friday, 1 hour", "Monday (NST), 30 minutes", "Sunday, 2 hours", "It is not mandatory to attend"],
        answer: 1,
        explanation: "Every Monday (NST), the team leader conducts a mandatory 30-minute virtual team review covering performance against targets, top strategies, compliance reminders, and process updates.",
        law: "Sales Manual §16.2 — Weekly Team Review",
        tag: "crm", difficulty: "easy"
      },
      {
        q: "What is required for monthly lead target achievement as an individual KPI?",
        options: ["A minimum of 50% of the assigned target", "A minimum of 75% of the assigned target", "A minimum of 100% of the assigned target", "There is no individual monthly KPI, only a team-wide one"],
        answer: 2,
        explanation: "The individual KPI for monthly lead target achievement is a minimum of 100% of the assigned target, measured monthly.",
        law: "Sales Manual §14.1 — Individual KPIs",
        tag: "crm", difficulty: "medium"
      }
    ]
  },
  {
    id: 10,
    title: "Performance Reporting, Ethics & Code of Conduct",
    icon: "🤝",
    tag: "conduct",
    description: "Daily reporting requirements and the non-negotiable Code of Conduct governing every client interaction",
    passmark: 100,
    roles: ["Sales & Client Relations"],
    remark_pass: "Excellent understanding of the reporting requirements and Code of Conduct. Honesty, confidentiality, and professionalism in every interaction is what protects both clients and the Interlace Studies brand.",
    remark_low: "Good effort. Revisit the six Code of Conduct pillars in Section 17 — each one is described as non-negotiable and applies at all times.",
    remark_fail: "The Code of Conduct is non-negotiable and applies to every interaction you have as a representative of Interlace Studies. Please re-study Sections 16 and 17 in full before retrying.",
    questions: [
      {
        q: "What six fields must be included in every daily activity report?",
        options: ["Name, Age, Salary, Manager, Location, Photo", "Date, Total Engagements, New Leads Entered, Appointments Booked, Follow-Ups Completed, Issues/Escalations", "Only the number of leads entered", "Client names and phone numbers only"],
        answer: 1,
        explanation: "The daily activity report must include: Date, Total Engagements, New Leads Entered, Appointments Booked, Follow-Ups Completed, and Issues/Escalations.",
        law: "Sales Manual §16.1 — Daily Reporting Requirements",
        tag: "conduct", difficulty: "medium"
      },
      {
        q: "When and how must the daily activity report be submitted?",
        options: ["Once a month via email", "At the end of each working day (NST), via the designated Slack channel or GHL report", "Only when requested by the team leader", "It is optional"],
        answer: 1,
        explanation: "At the end of each working day (Nepal Standard Time), every team member must submit a daily activity report via the designated Slack channel or GHL report.",
        law: "Sales Manual §16.1 — Daily Reporting Requirements",
        tag: "conduct", difficulty: "easy"
      },
      {
        q: "A colleague asks you to share a client's contact details with an unrelated third-party business. Which Code of Conduct principle prohibits this?",
        options: ["No Guarantees", "Confidentiality", "No Unsolicited Spam", "Respect and Professionalism"],
        answer: 1,
        explanation: "The Confidentiality principle states all client information is strictly confidential — never share client data with third parties or use it for any purpose other than their service delivery.",
        law: "Sales Manual §17 — Code of Conduct & Ethics",
        tag: "conduct", difficulty: "medium"
      },
      {
        q: "Can you send mass messages to people who have not expressed any interest in Interlace Studies' services?",
        options: ["Yes, as long as the message is polite", "No — all outreach must be in response to a genuine inquiry or a relevant public post (No Unsolicited Spam)", "Yes, but only on weekends", "Only if you use a personal account, not a company one"],
        answer: 1,
        explanation: "The No Unsolicited Spam principle prohibits mass, unsolicited messages to individuals who have not expressed interest — all outreach must be in response to a genuine inquiry or relevant public post.",
        law: "Sales Manual §17 — Code of Conduct & Ethics",
        tag: "conduct", difficulty: "easy"
      },
      {
        q: "A rep tells a hesitant prospect, 'I guarantee we will get your visa approved.' Which Code of Conduct principle does this breach?",
        options: ["Confidentiality", "No Guarantees", "No Unsolicited Spam", "Reporting Obligations"],
        answer: 1,
        explanation: "The No Guarantees principle explicitly prohibits guaranteeing a visa outcome, processing time, or specific result — language like 'our agents will assess your case' should be used instead.",
        law: "Sales Manual §17 — Code of Conduct & Ethics",
        tag: "conduct", difficulty: "hard"
      },
      {
        q: "Can a sales team member introduce themselves in a way that implies they are a Registered Migration Agent?",
        options: ["Yes, if it helps build the client's confidence", "No — you must never impersonate an RMA, lawyer, or other qualified professional, and must always clearly identify as a sales consultant", "Yes, as long as an RMA reviews the case eventually", "Only during phone calls, not in writing"],
        answer: 1,
        explanation: "The No Impersonation principle requires you to never impersonate an RMA, lawyer, or other qualified professional, and to always clearly identify yourself as a sales consultant.",
        law: "Sales Manual §17 — Code of Conduct & Ethics",
        tag: "conduct", difficulty: "medium"
      },
      {
        q: "What must you do if you encounter a situation that appears to involve fraud, exploitation, or illegal activity?",
        options: ["Handle it yourself quietly to avoid drama", "Report it to your team leader immediately", "Ignore it unless the client brings it up again", "Post about it in the public Facebook group to warn others"],
        answer: 1,
        explanation: "The Reporting Obligations principle requires immediate reporting to your team leader if you encounter a situation that appears to involve fraud, exploitation, or illegal activity.",
        law: "Sales Manual §17 — Code of Conduct & Ethics",
        tag: "conduct", difficulty: "hard"
      },
      {
        q: "How should a client with limited English proficiency be treated, according to the Respect and Professionalism principle?",
        options: ["With extra caution and shorter responses", "With the same respect as any other client — never condescending, dismissive, or inappropriate", "Referred immediately to another rep", "Told to find a translator before continuing"],
        answer: 1,
        explanation: "Respect and Professionalism requires treating every client with respect regardless of background or English proficiency, and never using condescending, dismissive, or inappropriate language.",
        law: "Sales Manual §17 — Code of Conduct & Ethics",
        tag: "conduct", difficulty: "easy"
      },
      {
        q: "Instead of saying 'we will get you the visa,' what language does the manual recommend using?",
        options: ["'It's basically guaranteed at this point.'", "'Our agents will assess your case and advise on the best pathway.'", "'Don't worry, everyone gets approved eventually.'", "'We have a 100% success rate.'"],
        answer: 1,
        explanation: "The No Guarantees principle recommends language such as 'our agents will assess your case and advise on the best pathway' rather than guaranteeing an outcome.",
        law: "Sales Manual §17 — Code of Conduct & Ethics",
        tag: "conduct", difficulty: "medium"
      },
      {
        q: "Discussing a specific client's case details in a public Facebook group would breach which principle?",
        options: ["No Guarantees", "Confidentiality", "No Impersonation", "Reporting Obligations"],
        answer: 1,
        explanation: "Confidentiality prohibits discussing client cases in public forums, sharing client data with third parties, or using client information for any purpose other than service delivery.",
        law: "Sales Manual §17 — Code of Conduct & Ethics",
        tag: "conduct", difficulty: "medium"
      },
      {
        q: "Is it acceptable to exaggerate visa success rates to persuade a hesitant lead to book a consultation?",
        options: ["Yes, as long as it results in a booking", "No — Honesty and Transparency prohibits false or misleading claims about success rates, processing times, or outcomes", "Yes, but only for premium leads", "It depends on the visa subclass"],
        answer: 1,
        explanation: "Honesty and Transparency requires never making false or misleading claims about visa success rates, processing times, or service outcomes.",
        law: "Sales Manual §17 — Code of Conduct & Ethics",
        tag: "conduct", difficulty: "medium"
      },
      {
        q: "Who conducts the mandatory weekly team review, and is attendance optional?",
        options: ["An RMA conducts it; attendance is optional", "The team leader conducts it; attendance is mandatory for all team members", "Head office conducts it once a quarter; attendance is optional", "It is self-directed with no set leader; attendance is optional"],
        answer: 1,
        explanation: "The team leader conducts the weekly review covering performance, top strategies, compliance reminders, and process updates. Attendance is mandatory for all team members.",
        law: "Sales Manual §16.2 — Weekly Team Review",
        tag: "conduct", difficulty: "easy"
      }
    ]
  },
  {
    id: 11,
    title: "Employer Sponsorship Services (482/186/494/407)",
    icon: "🏢",
    tag: "sponsor",
    description: "The Standard Business Sponsorship framework, visa fee structures, and employer compliance obligations for the 482, 186, 494 and 407 pathways",
    passmark: 100,
    roles: ["Migration Consultant", "Branch Manager"],
    remark_pass: "Excellent command of the employer sponsorship framework. This specialised knowledge lets you confidently advise business clients through the SBS → Nomination → Visa Application journey while protecting them from costly compliance breaches.",
    remark_low: "Good foundation. Revisit the fee tables and the sponsorship obligations section — employer clients will expect precise figures, and getting an obligation wrong can expose them to civil penalties.",
    remark_fail: "Employer sponsorship is a specialised, high-value service line with serious compliance stakes for clients. Please re-study the Employer Sponsored Visa Handbook in full before advising any business client.",
    questions: [
      {
        q: "What are the three stages of the employer sponsorship framework, in order?",
        options: ["Visa Application → Nomination → SBS", "Standard Business Sponsorship → Nomination → Visa Application", "Nomination → SBS → Visa Application", "LMT → SBS → Nomination"],
        answer: 1,
        explanation: "The framework is a structured, sequential three-stage journey: Stage A (Standard Business Sponsorship), Stage B (Nomination), then Stage C (Visa Application). Each stage must be completed in order.",
        law: "Employer Handbook, Ch.2 — The Sponsorship Framework",
        tag: "sponsor", difficulty: "easy"
      },
      {
        q: "What is the government fee and validity period for a Standard Business Sponsorship (SBS)?",
        options: ["$170, valid 2 years", "$420, valid 5 years", "$3,150, valid 1 year", "There is no fee for SBS"],
        answer: 1,
        explanation: "The SBS government fee is $420, and once approved it is valid for 5 years — it is a one-time application required before any nomination can be lodged for the 482, 407, or 494.",
        law: "Employer Handbook, Ch.2 — Stage A: Standard Business Sponsorship",
        tag: "sponsor", difficulty: "easy"
      },
      {
        q: "What does Labour Market Testing (LMT) require for most 482 and 494 nominations?",
        options: ["Advertising the role for at least 28 days on two or more platforms within the 4 months prior to lodgement", "A single 7-day job ad on any one platform", "No advertising is required if the employer is an accredited sponsor", "Advertising only needs to occur after the nomination is lodged"],
        answer: 0,
        explanation: "LMT requires advertising the position for at least 28 days on two or more platforms (e.g. Seek, LinkedIn) within the 4 months prior to nomination lodgement, to confirm no suitably qualified Australian was available.",
        law: "Employer Handbook, Ch.2 — Stage B: Nomination",
        tag: "sponsor", difficulty: "medium"
      },
      {
        q: "What is the TSMIT, and what must an employer pay a sponsored 482 worker?",
        options: ["A flat $50,000 regardless of role", "At least the TSMIT (currently $73,150 p.a., confirm current rate) or the Annual Market Salary Rate, whichever is higher", "Whatever the employer's standard entry-level wage is", "The minimum wage set by the Fair Work Commission only"],
        answer: 1,
        explanation: "The Temporary Skilled Migration Income Threshold (TSMIT) was $73,150 per annum as of 1 July 2023 (always confirm the current rate) — the employer must pay at least this or the Annual Market Salary Rate, whichever is higher.",
        law: "Employer Handbook, Ch.3 — Subclass 482 Eligibility Requirements",
        tag: "sponsor", difficulty: "medium"
      },
      {
        q: "What are the three streams of the Subclass 482 (Skills in Demand) visa?",
        options: ["Core Skills, Specialist Skills, and Labour Agreement", "Onshore, Offshore, and Regional", "Temporary, Provisional, and Permanent", "Standard, Accredited, and Premium"],
        answer: 0,
        explanation: "The 482 SID visa is available under three streams: Core Skills (Core Skills Occupations List), Specialist Skills (highly specialised, higher-salary roles), and Labour Agreement.",
        law: "Employer Handbook, Ch.3 — What Is the Subclass 482 Visa?",
        tag: "sponsor", difficulty: "medium"
      },
      {
        q: "What is the maximum duration of a Subclass 482 visa, and what is its main pathway to PR?",
        options: ["2 years; no PR pathway", "Up to 4 years; Subclass 186 TRT after 2 years", "10 years; automatic PR after 5 years", "1 year; must reapply annually with no PR option"],
        answer: 1,
        explanation: "The 482 SID visa can be granted for up to 4 years and has a clear pathway to permanent residency via the Subclass 186 TRT stream after 2 years with the same employer.",
        law: "Employer Handbook, Ch.3 — Subclass 482 Visa",
        tag: "sponsor", difficulty: "easy"
      },
      {
        q: "What is the eligibility requirement for the Subclass 186 Temporary Residence Transition (TRT) stream?",
        options: ["3 years of any overseas work experience", "Holding a 482 visa for at least 2 years with the same employer in the nominated occupation", "A university degree only, regardless of visa history", "No prior visa is required — anyone can apply directly"],
        answer: 1,
        explanation: "The TRT stream requires the applicant to have held a 482 visa for 2+ years with the same employer in the nominated occupation — it's a pathway from temporary to permanent residency for proven employees.",
        law: "Employer Handbook, Ch.4 — Stream A: Temporary Residence Transition",
        tag: "sponsor", difficulty: "medium"
      },
      {
        q: "How does the Subclass 186 Direct Entry (DE) stream differ from the TRT stream?",
        options: ["DE requires a 482 visa first; TRT does not", "DE is for workers who have NOT previously held a 482, requiring a skills assessment plus 3 years of relevant experience; TRT requires 2+ years already on a 482", "They are identical in every respect", "DE is only available to Australian citizens"],
        answer: 1,
        explanation: "The Direct Entry stream bypasses the temporary visa stage entirely — it's for applicants who have not previously held a 482, requiring a skills assessment and 3 years of relevant experience, ideal for senior or hard-to-fill roles needing immediate PR.",
        law: "Employer Handbook, Ch.4 — Stream B: Direct Entry",
        tag: "sponsor", difficulty: "medium"
      },
      {
        q: "What is the key restriction on a Subclass 494 visa holder, and what is its pathway to PR?",
        options: ["No restriction; PR is automatic after 1 year", "Must live, work, and study only in a designated regional area; pathway to PR via Subclass 191 after 3 years", "Must remain unemployed for the first year; no PR pathway", "Must relocate to a capital city within 6 months"],
        answer: 1,
        explanation: "The 494 is a regional visa — the holder must live, work, and study only in a designated regional area. After 3 years of compliance and meeting an income threshold, they can apply for the Subclass 191 permanent visa.",
        law: "Employer Handbook, Ch.5 — Subclass 494 Visa",
        tag: "sponsor", difficulty: "medium"
      },
      {
        q: "What is the primary purpose of the Subclass 407 Training visa, and does it lead to PR?",
        options: ["General employment; leads directly to PR after 1 year", "Structured workplace-based occupational training only; no direct pathway to PR", "Permanent skilled work; same PR pathway as the 482", "Only available to Australian citizens returning from overseas"],
        answer: 1,
        explanation: "The 407 is for structured workplace-based occupational training — not general employment — and has no direct pathway to PR. If the business wants to retain the worker long-term, the 482 SID is the more appropriate pathway.",
        law: "Employer Handbook, Ch.6 — Subclass 407 Visa",
        tag: "sponsor", difficulty: "easy"
      },
      {
        q: "Which employer-sponsored visa has the lowest total employee Visa Application Charge (VAC), making it the most cost-effective for short-term purposes?",
        options: ["Subclass 186 ($4,910)", "Subclass 482 ($3,210)", "Subclass 494 ($4,910)", "Subclass 407 ($430)"],
        answer: 3,
        explanation: "The Subclass 407 Training visa has a primary applicant VAC of only $430 and no SAF Levy requirement, making it significantly cheaper than the other employer-sponsored pathways — but it comes with no direct PR pathway.",
        law: "Employer Handbook, Ch.6 — Cost Advantage",
        tag: "sponsor", difficulty: "medium"
      },
      {
        q: "Under sponsorship obligations, what is the risk if an employer fails to pay a sponsored worker equivalent terms and conditions to an Australian worker in the same role?",
        options: ["A warning letter only, with no financial consequence", "A civil penalty of up to $93,900 per breach", "Automatic visa grant is withdrawn but no penalty to the employer", "No consequence unless the worker complains"],
        answer: 1,
        explanation: "Sponsors must pay sponsored workers the same pay and conditions as equivalent Australian workers. Breaching this obligation carries a civil penalty of up to $93,900 per breach.",
        law: "Employer Handbook, Ch.7 — Employer Sponsorship Obligations",
        tag: "sponsor", difficulty: "hard"
      },
      {
        q: "Can an employer pass on the cost of the SAF Levy or nomination fee to the sponsored worker?",
        options: ["Yes, it's standard practice to split the cost", "No — cost recovery from the visa holder is prohibited and can result in a civil penalty and sponsorship cancellation", "Only the SAF Levy can be passed on, not the nomination fee", "Yes, but only for the Direct Entry stream"],
        answer: 1,
        explanation: "Employers cannot pass sponsorship, nomination, or SAF levy costs to the visa holder. Breaching this 'no cost recovery' obligation risks a civil penalty and cancellation of the sponsorship approval.",
        law: "Employer Handbook, Ch.7 — Employer Sponsorship Obligations",
        tag: "sponsor", difficulty: "medium"
      },
      {
        q: "How long must an employer notify the Department of Home Affairs after a change to a sponsored worker's role, salary, or employment status?",
        options: ["Within 7 days", "Within 28 days", "Within 90 days", "There is no notification requirement"],
        answer: 1,
        explanation: "Sponsors must notify Home Affairs within 28 days of changes to the sponsored worker's role, salary, or employment status. Failing to do so carries a civil penalty.",
        law: "Employer Handbook, Ch.7 — Employer Sponsorship Obligations",
        tag: "sponsor", difficulty: "medium"
      },
      {
        q: "How long must an employer maintain records relating to a sponsored worker's employment, pay, and role?",
        options: ["Only until the visa is granted", "For the duration of the visa and 2 years after", "For 6 months after the visa is granted", "Indefinitely with no defined minimum"],
        answer: 1,
        explanation: "Employers must maintain records of employment, pay, and role for the duration of the visa and for 2 years afterward — failure exposes the business to civil penalty and audit risk.",
        law: "Employer Handbook, Ch.7 — Employer Sponsorship Obligations",
        tag: "sponsor", difficulty: "easy"
      },
      {
        q: "What happens if the 'genuine role requirement' is breached — i.e. the nominated position stops being a real, ongoing full-time role in the business?",
        options: ["Nothing, as long as the visa was already granted", "It can lead to visa cancellation and a sponsorship bar", "The employer simply pays a small administrative fee", "The worker is automatically transferred to a 407 visa"],
        answer: 1,
        explanation: "The nominated position must be a genuine, full-time role that continues to exist in the business. Breaching this can lead to visa cancellation and a bar on the sponsor's ability to sponsor further workers.",
        law: "Employer Handbook, Ch.7 — Employer Sponsorship Obligations",
        tag: "sponsor", difficulty: "hard"
      },
      {
        q: "What is the typical total end-to-end timeline for a 482 pathway, from pre-lodgement through to visa grant?",
        options: ["2–4 weeks", "5–12 months", "3–5 years", "There is no typical timeline — it varies randomly"],
        answer: 1,
        explanation: "The typical end-to-end 482 pathway timeline is 5–12 months, covering pre-lodgement (eligibility assessment, LMT, document collection), SBS approval, nomination approval, and visa grant.",
        law: "Employer Handbook, Ch.2 — Typical End-to-End Timeline",
        tag: "sponsor", difficulty: "medium"
      },
      {
        q: "A business needs to fill a critical, senior role and wants to offer immediate permanent residency to attract the right candidate, bypassing a temporary visa stage. Which pathway is recommended?",
        options: ["Subclass 407 Training visa", "Subclass 186 Direct Entry (DE) stream", "Subclass 494 only", "There is no such pathway available"],
        answer: 1,
        explanation: "For critical, senior, or hard-to-fill roles where immediate permanent residency is needed to attract the right candidate, the Subclass 186 Direct Entry stream bypasses the temporary visa stage entirely.",
        law: "Employer Handbook, Ch.9 — Recommendations & Next Steps",
        tag: "sponsor", difficulty: "medium"
      },
      {
        q: "What is the recommended dual-pathway strategy for most employer clients?",
        options: ["Use only the 407 visa for every role to save money", "Use the 482 SID as the primary pathway for most skilled roles, and the 186 DE stream for critical or senior roles needing immediate PR", "Use the 186 TRT stream for every role from day one", "Avoid sponsorship entirely and rely on local recruitment only"],
        answer: 1,
        explanation: "The recommended dual-pathway strategy uses the 482 SID as the primary pathway for most skilled roles (fastest entry, broadest occupations, PR pathway via 186 TRT) and the 186 DE stream as the secondary option for critical or senior roles needing immediate PR.",
        law: "Employer Handbook, Ch.9 — Recommended Strategy",
        tag: "sponsor", difficulty: "hard"
      }
    ]
  },
  {
    id: 12,
    title: "Call Centre Communication Excellence",
    icon: "☎️",
    tag: "callcentre",
    description: "The CAEP communication standard, phone etiquette, active listening, de-escalation, and CRM documentation requirements",
    passmark: 100,
    roles: ["Education Consultant"],
    remark_pass: "Excellent command of the communication standards. Consistent, professional, well-documented client interactions are the foundation of every client's experience with Interlace Studies.",
    remark_low: "Good effort. Revisit the LARS and HEAT frameworks and the CRM documentation checklist — consistency here is what protects both clients and the business.",
    remark_fail: "Communication and documentation standards are the foundation of this role. Please re-study Part A of the Staff Training Manual in full before handling client enquiries independently.",
    questions: [
      {
        q: "What does the CAEP Communication Standard stand for?",
        options: ["Calm, Attentive, Efficient, Polite", "Clarity, Accuracy, Empathy, and Professionalism", "Confidence, Assertiveness, Energy, Persistence", "Consistency, Availability, Expertise, Patience"],
        answer: 1,
        explanation: "All client interactions must adhere to the CAEP Standard: Clarity, Accuracy, Empathy, and Professionalism — the four pillars defining every communication, in every channel, at every stage.",
        law: "Staff Training Manual, Part A — The CAEP Communication Standard",
        tag: "callcentre", difficulty: "easy"
      },
      {
        q: "Under the CAEP standard, what does 'Accuracy' require in practice?",
        options: ["Speaking as quickly as possible to save time", "Never guessing — verifying information before advising and citing the source", "Using as much technical jargon as possible to sound authoritative", "Giving your own personal opinion when unsure"],
        answer: 1,
        explanation: "Accuracy means all information must be factual and sourced from official policy — never guess; verify before advising, and cite the source.",
        law: "Staff Training Manual, Part A — The CAEP Communication Standard",
        tag: "callcentre", difficulty: "medium"
      },
      {
        q: "What is the correct order of steps in the LARS active listening method?",
        options: ["Summarise → Respond → Acknowledge → Listen", "Listen → Acknowledge → Respond → Summarise", "Respond → Listen → Summarise → Acknowledge", "Acknowledge → Summarise → Listen → Respond"],
        answer: 1,
        explanation: "LARS stands for Listen (allow the client to speak without interruption), Acknowledge, Respond (confirm you've understood), and Summarise (recap key points and next steps).",
        law: "Staff Training Manual, Part A — The LARS Active Listening Method",
        tag: "callcentre", difficulty: "medium"
      },
      {
        q: "What is the correct order of steps in the HEAT technique for difficult clients?",
        options: ["Take Action → Empathise → Hear → Apologise", "Hear → Empathise → Apologise → Take Action", "Apologise → Hear → Take Action → Empathise", "Empathise → Take Action → Hear → Apologise"],
        answer: 1,
        explanation: "HEAT stands for Hear (let the client vent without interrupting), Empathise (acknowledge their feelings genuinely), Apologise (for the situation, not the decision), and Take Action (explain next steps clearly).",
        law: "Staff Training Manual, Part A — The HEAT Technique for Difficult Clients",
        tag: "callcentre", difficulty: "medium"
      },
      {
        q: "When apologising to a frustrated client using the HEAT technique, what exactly should you apologise for?",
        options: ["The Department's decision itself", "The situation the client finds themselves in — not the decision", "Nothing — apologising is discouraged", "Only apologise if the client demands it"],
        answer: 1,
        explanation: "The 'Apologise' step means apologising for the situation the client is experiencing (e.g. 'I'm sorry to hear you've had this experience'), not apologising for or admitting fault in a decision made by the Department.",
        law: "Staff Training Manual, Part A — The HEAT Technique",
        tag: "callcentre", difficulty: "hard"
      },
      {
        q: "Which of the following is explicitly listed as something to NEVER do on a call?",
        options: ["Summarise and confirm next steps before ending the call", "Put a client on hold for more than 2 minutes without checking back", "Ask the client clarifying questions", "Refer the client to a MARA-registered agent"],
        answer: 1,
        explanation: "Staff must never put a client on hold for more than 2 minutes without checking back in — among other rules such as never arguing, never providing specific migration advice, and never promising visa outcomes.",
        law: "Staff Training Manual, Part A — Never Do This On a Call",
        tag: "callcentre", difficulty: "easy"
      },
      {
        q: "What must every professional email response include, according to the written communication standards?",
        options: ["A personal opinion about the client's chances", "A clear subject line, a professional body, and the standard company disclaimer", "A guarantee of the outcome to reassure the client", "Nothing beyond a brief one-line reply"],
        answer: 1,
        explanation: "Written communication must have a clear subject line, use the client's name in the salutation, a professional and accurate body, and must include the standard company disclaimer at the bottom.",
        law: "Staff Training Manual, Part A — Written Communication Standards",
        tag: "callcentre", difficulty: "easy"
      },
      {
        q: "The approved general enquiry email template explicitly advises the client to do what regarding specific advice?",
        options: ["Wait for the Department to contact them directly", "Consult a MARA-registered migration agent for advice tailored to their individual circumstances", "Search online forums for other people's experiences", "Call back in 3 months for an update"],
        answer: 1,
        explanation: "The approved email template states that for specific advice tailored to individual circumstances, the client should consult a MARA-registered migration agent, and offers to refer them to one.",
        law: "Staff Training Manual, Part A — Approved Email Template",
        tag: "callcentre", difficulty: "medium"
      },
      {
        q: "Within how long after a client interaction must it be documented in the CRM system?",
        options: ["Within 15 minutes of the call ending", "Within 24 hours", "By the end of the week", "Documentation is optional if the call was brief"],
        answer: 0,
        explanation: "Every client interaction must be documented in the CRM system within 15 minutes of the call ending, to ensure accuracy and timely follow-up.",
        law: "Staff Training Manual, Part A — Call Summarisation & CRM Documentation",
        tag: "callcentre", difficulty: "medium"
      },
      {
        q: "Which of the following is NOT one of the required fields for CRM call documentation?",
        options: ["Enquiry Summary", "The client's personal social media password", "Referrals Made", "Follow-up Required (Yes/No, with date and nature)"],
        answer: 1,
        explanation: "Required CRM fields include Date & Time, Channel, Client Details, Enquiry Summary, Information Provided, Referrals Made, Next Steps, and Follow-up Required. A client's personal social media password is never something staff should collect or record.",
        law: "Staff Training Manual, Part A — Call Summarisation & CRM Documentation",
        tag: "callcentre", difficulty: "easy"
      },
      {
        q: "What is the approved standard opening line for an inbound call?",
        options: ["'Interlace Studies, what do you want?'", "'Good [morning/afternoon], thank you for calling Interlace Studies. My name is [Name]. How may I assist you today?'", "'Hello, please hold.'", "'You've reached the visa hotline, state your visa number.'"],
        answer: 1,
        explanation: "The approved opening script greets the client warmly, thanks them for calling, introduces the staff member by name, and asks how they may assist — setting a professional tone from the first second.",
        law: "Staff Training Manual, Part A — Standard Greeting Script",
        tag: "callcentre", difficulty: "easy"
      },
      {
        q: "According to the minimum skill set requirements, which of the following is listed under 'Professional Conduct' rather than 'Technical Knowledge'?",
        options: ["Familiarity with the ESOS Act and National Code", "Understanding of confidentiality and privacy obligations", "Basic knowledge of the points test", "Understanding of AQF qualification levels"],
        answer: 1,
        explanation: "Understanding confidentiality and privacy obligations, along with ethical conduct, escalation ability, and professional development, falls under the Professional Conduct category — distinct from the Technical Knowledge category.",
        law: "Staff Training Manual, Intro — Minimum Skill Set Requirements",
        tag: "callcentre", difficulty: "medium"
      }
    ]
  },
  {
    id: 13,
    title: "ESOS, PRISMS & Education Policy",
    icon: "📘",
    tag: "esos",
    description: "The ESOS Act 2000, National Code 2018 standards, PRISMS, the 6-month transfer rule, and the Australian Qualifications Framework",
    passmark: 100,
    roles: ["Education Consultant"],
    remark_pass: "Excellent command of the ESOS/National Code framework. Getting the 6-month transfer rule and PRISMS implications right is essential — mistakes here have direct visa consequences for students.",
    remark_low: "Good foundation. Focus particularly on the 6-month transfer rule and its exceptions — this is described as one of the most frequently misunderstood rules in international education.",
    remark_fail: "This is one of the most critical modules for the role. Incorrect advice on the 6-month rule or PRISMS reporting can have serious visa consequences for a student. Please re-study Part B in full before retrying.",
    questions: [
      {
        q: "What is the primary purpose of the ESOS Act 2000?",
        options: ["To regulate Australian domestic university fees", "To govern the provision of education to international students and protect their rights", "To set visa fees for the Department of Home Affairs", "To regulate migration agents only"],
        answer: 1,
        explanation: "The Education Services for Overseas Students (ESOS) Act 2000 is the primary legislation governing the provision of education to international students, establishing provider registration and student protections.",
        law: "Staff Training Manual, Part B — The ESOS Act 2000",
        tag: "esos", difficulty: "easy"
      },
      {
        q: "Which National Code 2018 standard specifically governs when a student can transfer between education providers?",
        options: ["Standard 3", "Standard 7", "Standard 9", "Standard 10"],
        answer: 1,
        explanation: "Standard 7 (Transfer Between Providers) states a registered provider must not allow a student to transfer to another provider within the first 6 months of their principal course, unless a specific exception applies.",
        law: "Staff Training Manual, Part B — National Code 2018, Standard 7",
        tag: "esos", difficulty: "medium"
      },
      {
        q: "A student is 4 months into a packaged ELICOS + Diploma enrolment, with the ELICOS component already finished. Can they transfer to a new provider without a release letter?",
        options: ["Yes, because the ELICOS component is complete", "No — the 6-month period applies to the principal course (the Diploma, the highest AQF level in the package), not the ELICOS component", "Yes, packaged courses are exempt from the 6-month rule entirely", "No, packaged courses can never transfer regardless of duration"],
        answer: 1,
        explanation: "The 6-month rule applies to the principal course — the highest AQF level course in a packaged enrolment. Even if the ELICOS component is finished, the student cannot transfer within 6 months of starting the Diploma without a release letter.",
        law: "Staff Training Manual, Part B — The 6-Month Transfer Rule, Critical Point",
        tag: "esos", difficulty: "hard"
      },
      {
        q: "Which of the following is NOT a valid exception allowing a provider to release a student within the first 6 months?",
        options: ["The provider cannot deliver the course as agreed (provider default)", "The student simply changed their mind and prefers a different city", "The course has been removed from CRICOS", "The student has been offered a place in a course at a higher AQF level"],
        answer: 1,
        explanation: "Valid exceptions to the 6-month rule are: provider default, course no longer registered, student welfare concerns, a higher AQF level offer, or the original provider voluntarily granting a release letter. Simply preferring a different city or provider is not a recognised exception.",
        law: "Staff Training Manual, Part B — The 6-Month Transfer Rule",
        tag: "esos", difficulty: "medium"
      },
      {
        q: "What is PRISMS, and what is a key consequence of a provider reporting a student default through it?",
        options: ["A payment portal with no visa implications", "The national student database — a reported default or compliance breach is automatically transmitted to the Department of Home Affairs and can trigger visa cancellation", "A private tutoring platform for struggling students", "An English testing platform"],
        answer: 1,
        explanation: "PRISMS (Provider Registration and International Student Management System) manages CoEs and reports student compliance. A default or breach reported through PRISMS is automatically sent to Home Affairs and can trigger visa cancellation — students must be made aware of this at enrolment.",
        law: "Staff Training Manual, Part B — PRISMS & Visa Implications",
        tag: "esos", difficulty: "medium"
      },
      {
        q: "What does National Code Standard 8 require of providers regarding at-risk students?",
        options: ["Immediate expulsion with no warning", "An intervention strategy to identify and assist students at risk of not meeting course progress requirements, before reporting them", "Nothing — Standard 8 only covers marketing", "Automatic visa cancellation without provider involvement"],
        answer: 1,
        explanation: "Standard 8 requires providers to monitor attendance/progress and have an intervention strategy to identify and assist at-risk students before reporting them to the Department.",
        law: "Staff Training Manual, Part B / Part G — Standard 8, Intervention Strategy",
        tag: "esos", difficulty: "medium"
      },
      {
        q: "What AQF level is a Bachelor Degree, and what AQF level is a Diploma?",
        options: ["Bachelor = Level 5; Diploma = Level 7", "Bachelor = Level 7; Diploma = Level 5", "Bachelor = Level 9; Diploma = Level 3", "They are both Level 6"],
        answer: 1,
        explanation: "Under the AQF, a Diploma is Level 5, while a Bachelor Degree is Level 7. Level 9 is a Masters Degree and Level 10 is a Doctoral Degree (PhD).",
        law: "Staff Training Manual, Part B — Australian Qualifications Framework",
        tag: "esos", difficulty: "easy"
      },
      {
        q: "What is a 'release letter' and when is it required?",
        options: ["A document allowing a student to skip their final exam", "A formal document from the current provider allowing a student to transfer to a new provider within the first 6 months of their principal course", "A letter releasing a student from OSHC obligations", "A document required only for postgraduate students"],
        answer: 1,
        explanation: "A release letter is issued by the current provider to permit a transfer within the first 6 months of the principal course. Without it, the new provider cannot enrol the student or issue a new CoE.",
        law: "Staff Training Manual, Part G — Release Letter",
        tag: "esos", difficulty: "easy"
      },
      {
        q: "If a provider refuses to issue a release letter, what is the student's recourse?",
        options: ["There is no recourse — the decision is final", "They can use the provider's internal complaints and appeals process, and escalate to the Overseas Students Ombudsman if unresolved", "They must immediately leave Australia", "They can only appeal directly to the Department of Home Affairs"],
        answer: 1,
        explanation: "A student can appeal a refusal through the provider's internal complaints and appeals process (Standard 10), and escalate to the Overseas Students Ombudsman (OSO) if the internal process is exhausted.",
        law: "Staff Training Manual, Part G — Standard 10, Overseas Students Ombudsman",
        tag: "esos", difficulty: "medium"
      },
      {
        q: "What is a 'provider default' under the ESOS Act, and what must the provider do?",
        options: ["When a student is late paying fees; the student is expelled", "When a provider is unable to deliver a course the student paid for; they must offer an equivalent course or refund tuition", "When a provider changes its logo; no action required", "When a provider closes for a public holiday"],
        answer: 1,
        explanation: "A provider default occurs when a provider cannot deliver a paid course. The Tuition Protection Service (TPS) ensures the student is offered an equivalent course elsewhere or refunded their unspent tuition fees.",
        law: "Staff Training Manual, Part G — Provider Default & Tuition Protection Service",
        tag: "esos", difficulty: "medium"
      },
      {
        q: "What is the Tuition Protection Service (TPS)?",
        options: ["A private insurance product students must buy separately", "A government-administered service that helps students find an alternative course or get a refund when a provider cannot deliver their course", "A scholarship fund for high-achieving students", "A visa fee waiver scheme"],
        answer: 1,
        explanation: "The TPS is a government-administered service assisting international students when their provider cannot fully deliver their course, helping them find an alternative course or receive a refund.",
        law: "Staff Training Manual, Part G — Tuition Protection Service",
        tag: "esos", difficulty: "easy"
      },
      {
        q: "What is a 'packaged CoE' as opposed to a 'single CoE'?",
        options: ["A packaged CoE covers multiple linked courses (e.g. ELICOS then a Diploma); a single CoE covers only one course", "A packaged CoE is only used for postgraduate students", "There is no difference — the terms are interchangeable", "A packaged CoE means the student pays no tuition fees"],
        answer: 0,
        explanation: "A packaged CoE covers a combination of linked courses, with the principal course being the highest AQF level in the package. A single CoE covers just one course.",
        law: "Staff Training Manual, Part G — Packaged vs Single CoE",
        tag: "esos", difficulty: "medium"
      },
      {
        q: "What is CRICOS?",
        options: ["The Australian citizenship test", "The official register of Australian education providers and courses approved to enrol international students", "A student visa subclass", "A skills assessment authority"],
        answer: 1,
        explanation: "CRICOS (Commonwealth Register of Institutions and Courses for Overseas Students) is the official register of providers and courses approved to deliver education to international students on a student visa.",
        law: "Staff Training Manual, Part B / Part G — CRICOS",
        tag: "esos", difficulty: "easy"
      },
      {
        q: "What is the written agreement between a student and provider, and when must it be given?",
        options: ["An informal verbal understanding with no documentation required", "A formal contract outlining course, fees, and refund policy, which must be given to the student before enrolment (Standard 3)", "A document only required for VET courses, not higher education", "A contract signed only after the course is completed"],
        answer: 1,
        explanation: "Standard 3 (Formalisation of Enrolment) requires the provider to give the student a written agreement — outlining course details, fees, and refund policy — before enrolment.",
        law: "Staff Training Manual, Part B — National Code Standard 3",
        tag: "esos", difficulty: "medium"
      }
    ]
  },
  {
    id: 14,
    title: "Career Counselling & Course Pathways",
    icon: "🧭",
    tag: "counselling",
    description: "The DEPA counselling model, proven counselling questions, course pathway analysis, and financial capacity evidence requirements",
    passmark: 100,
    roles: ["Education Consultant"],
    remark_pass: "Excellent grasp of the DEPA model and course pathway analysis. This structured, ethical approach to counselling is what turns a generic enquiry into a well-matched, achievable education and migration plan.",
    remark_low: "Good foundation. Revisit the course pathway tables for nursing, IT, accounting, cookery, and social work — clients rely on you to know the PR-relevant details of each pathway precisely.",
    remark_fail: "Career counselling is central to this role and directly shapes a client's education and migration outcomes. Please re-study Part C in full before conducting counselling sessions independently.",
    questions: [
      {
        q: "What does the DEPA counselling model stand for, in order?",
        options: ["Discuss, Evaluate, Present, Advise", "Discover, Explore, Plan, Act", "Define, Explain, Propose, Assess", "Diagnose, Educate, Persuade, Assist"],
        answer: 1,
        explanation: "DEPA stands for Discover (understand the client's background and goals), Explore (identify suitable options), Plan (develop a step-by-step pathway), and Act (identify immediate next steps and responsibilities).",
        law: "Staff Training Manual, Part C — The DEPA Counselling Model",
        tag: "counselling", difficulty: "easy"
      },
      {
        q: "In the 'Discover' phase of DEPA, what kind of question would you ask?",
        options: ["'Based on your goals, I recommend the following pathway...'", "'What is your current visa status?' or 'What are your career goals?'", "'I will send you the details by email today.'", "'The first step is to...'"],
        answer: 1,
        explanation: "The Discover phase is about understanding the client's background, goals, and current situation — questions like current visa status, educational background, and career goals belong here.",
        law: "Staff Training Manual, Part C — DEPA Model",
        tag: "counselling", difficulty: "easy"
      },
      {
        q: "For a Registered Nurse (RN) pathway, what minimum IELTS score does AHPRA require, and how does this compare to the standard student visa requirement?",
        options: ["6.0 in each component — the same as the standard student visa requirement", "7.0 in each of the four components — higher than the standard student visa requirement", "5.5 overall only — lower than the student visa requirement", "There is no English requirement for nursing registration"],
        answer: 1,
        explanation: "AHPRA registration for Registered Nurses requires a minimum IELTS score of 7.0 in each of the four components — notably higher than the standard student visa English requirement, and clients must be advised of this early.",
        law: "Staff Training Manual, Part C — Nursing Pathway, IELTS Requirement",
        tag: "counselling", difficulty: "hard"
      },
      {
        q: "Why does a Diploma of Nursing (leading to Enrolled Nurse) have a LIMITED PR pathway compared to a Bachelor of Nursing (Registered Nurse)?",
        options: ["Enrolled Nurse is not on the MLTSSL, while Registered Nurse is", "Diplomas take longer to complete than Bachelor degrees", "Enrolled Nurses cannot get a 485 visa under any circumstances", "There is no difference in PR pathway strength"],
        answer: 0,
        explanation: "Enrolled Nurse is not on the MLTSSL, giving it a limited PR pathway, while Registered Nurse (from a Bachelor of Nursing) IS on the MLTSSL, giving it a strong PR pathway via the 485 visa and ANMAC skills assessment.",
        law: "Staff Training Manual, Part C — Nursing Pathway",
        tag: "counselling", difficulty: "medium"
      },
      {
        q: "For the Commercial Cookery / Kitchen Management pathway, which authority conducts the skills assessment, and via what program?",
        options: ["ACS, via the Professional Year Program", "Trades Recognition Australia (TRA), via the Job Ready Program (JRP)", "AHPRA, via clinical placement", "CPA Australia, via membership"],
        answer: 1,
        explanation: "Cookery and kitchen management occupations are assessed by Trades Recognition Australia (TRA) via the Job Ready Program (JRP), which includes a period of paid work experience.",
        law: "Staff Training Manual, Part C — Commercial Cookery Pathway",
        tag: "counselling", difficulty: "medium"
      },
      {
        q: "Which of the following is a proven 'PR Pathway' counselling question from the DEPA framework?",
        options: ["'What is your favourite subject in school?'", "'Are you aware of the points test and how many points you might currently have?'", "'What is the weather like in your home country?'", "'Do you prefer online or in-person classes?'"],
        answer: 1,
        explanation: "PR Pathway questions include asking about awareness of the points test and current points estimate, family members who are citizens/PRs, and openness to regional study for extra points.",
        law: "Staff Training Manual, Part C — 30+ Proven Career Counselling Questions",
        tag: "counselling", difficulty: "easy"
      },
      {
        q: "According to the financial capacity evidence requirements, what is the annual living cost benchmark for the primary student applicant?",
        options: ["$10,400", "$29,710", "$4,449", "$8,000"],
        answer: 1,
        explanation: "The Department specifies an annual living cost of $29,710 for the primary student applicant (figures updated periodically) — with additional amounts for a partner/spouse ($10,400) and each child ($4,449).",
        law: "Staff Training Manual, Part C — Financial Capacity Evidence Requirements",
        tag: "counselling", difficulty: "medium"
      },
      {
        q: "Which of the following is NOT listed as acceptable evidence of financial capacity for a student visa?",
        options: ["Bank statements (last 3–6 months)", "A scholarship or loan approval letter", "Evidence of annual income (payslips, tax returns)", "A verbal assurance from a family friend"],
        answer: 3,
        explanation: "Acceptable evidence includes bank statements, scholarship letters, loan approval letters, and evidence of annual income — or a combination. A verbal assurance is not documentary evidence and is not acceptable.",
        law: "Staff Training Manual, Part C — Financial Capacity Evidence Requirements",
        tag: "counselling", difficulty: "easy"
      },
      {
        q: "A client wants a quick, guaranteed pathway to PR. What is the correct, ethical response?",
        options: ["Guarantee that nursing, IT, or accounting will definitely lead to PR", "Explain there is no single 'best' or guaranteed course — the right choice depends on background, skills, budget, and current occupation lists, and requires genuine interest in the field", "Recommend whichever course pays the highest commission", "Tell the client PR is impossible for anyone without a Bachelor degree"],
        answer: 1,
        explanation: "There is no single 'best' course for PR — it depends on the client's individual background, skills, budget, and the current occupation lists, and the client must have genuine interest in the field being pursued.",
        law: "Staff Training Manual, Part G — Career Counselling FAQs",
        tag: "counselling", difficulty: "medium"
      },
      {
        q: "In the 'Plan' phase of DEPA, what should the consultant provide?",
        options: ["Only a list of unrelated general questions", "A clear, step-by-step pathway with an expected timeline based on the client's goals", "A refusal to discuss anything until documents are provided", "A referral to a competitor agency"],
        answer: 1,
        explanation: "The Plan phase develops a clear, step-by-step pathway for the client, including the expected timeline — e.g. 'Based on your goals, I recommend the following pathway... the expected timeline would be...'",
        law: "Staff Training Manual, Part C — DEPA Model",
        tag: "counselling", difficulty: "easy"
      },
      {
        q: "For the IT pathway, what does a Bachelor of IT graduate typically need to do to maximise points before lodging a skilled visa EOI?",
        options: ["Nothing further — the degree alone guarantees an invitation", "Complete a Professional Year Program (PYP) for 5 extra points and obtain an ACS skills assessment", "Repeat the Bachelor degree a second time", "Switch to a Diploma qualification instead"],
        answer: 1,
        explanation: "A Bachelor of IT graduate typically completes the Post-Higher Education 485 stream, gains work experience, completes a Professional Year Program (PYP) for 5 extra points, and obtains an ACS skills assessment before lodging an EOI.",
        law: "Staff Training Manual, Part G — Bachelor of IT to PR Pathway",
        tag: "counselling", difficulty: "hard"
      }
    ]
  },
  {
    id: 15,
    title: "Student, Visitor & Bridging Visa FAQs",
    icon: "🎓",
    tag: "product",
    description: "Policy-accurate FAQs on the Subclass 500 (Student), Subclass 600 (Visitor), and Bridging Visas A, B and C",
    passmark: 100,
    roles: ["Education Consultant"],
    remark_pass: "Excellent command of the student, visitor, and bridging visa FAQs. Precise, policy-accurate answers to these everyday questions build trust and keep clients compliant.",
    remark_low: "Good foundation. Focus particularly on visa conditions (8503, 8202, 8105) and bridging visa travel rights — these come up constantly and are easy to get subtly wrong.",
    remark_fail: "Student, visitor, and bridging visa questions are the bread and butter of this role. Please re-study Part D in full before advising clients independently.",
    questions: [
      {
        q: "A Tourist visa holder wants to apply for a Student visa while in Australia. What determines whether they can do this onshore?",
        options: ["Their nationality", "Whether Condition 8503 (No Further Stay) has been imposed on their Visitor visa", "How much money they have in savings", "Whether they have a job offer in Australia"],
        answer: 1,
        explanation: "If Condition 8503 is present, the holder cannot apply for any other substantive visa (including a Student visa) while in Australia and must depart and apply offshore. Without 8503, they may apply onshore if they satisfy the Genuine Student requirement.",
        law: "Staff Training Manual, Part D — FAQ 1, Subclass 600",
        tag: "product", difficulty: "medium"
      },
      {
        q: "What are the standard mandatory work rights conditions on a Tourist stream Visitor visa?",
        options: ["Unrestricted work rights", "Condition 8101 — no work permitted at all", "48 hours per fortnight, same as a student visa", "20 hours per week only"],
        answer: 1,
        explanation: "Condition 8101 is mandatory on Visitor visas and prohibits the holder from working in Australia entirely. Working on a Visitor visa is a serious breach that can lead to cancellation and a future application ban.",
        law: "Staff Training Manual, Part D — FAQ 10, Subclass 600",
        tag: "product", difficulty: "easy"
      },
      {
        q: "How many hours per fortnight can a Student visa holder work once their course has commenced?",
        options: ["No work permitted at all", "Up to 48 hours per fortnight, with unlimited hours during scheduled course breaks", "Unlimited hours from day one", "20 hours per week, no exceptions"],
        answer: 1,
        explanation: "Once the course is in session, a Student visa holder can work up to 48 hours per fortnight under Condition 8105. During scheduled course breaks, they can work unlimited hours.",
        law: "Staff Training Manual, Part D — FAQ 16, Subclass 500",
        tag: "product", difficulty: "easy"
      },
      {
        q: "What is the Genuine Student (GS) requirement?",
        options: ["A requirement that the applicant already speaks fluent English", "A statement and evidence showing genuine intention to study, that the course is a logical progression, and understanding of visa conditions", "A requirement to have a job offer before studying", "A minimum bank balance with no other criteria"],
        answer: 1,
        explanation: "The Genuine Student requirement (which replaced GTE) requires the applicant to satisfy the case officer that they genuinely intend to study, that the course is a logical progression in their education/career, and that they understand and will comply with visa conditions.",
        law: "Staff Training Manual, Part D — FAQ 18, Subclass 500",
        tag: "product", difficulty: "medium"
      },
      {
        q: "What is OSHC, and what visa condition governs it?",
        options: ["A tuition discount scheme, governed by Condition 8105", "Overseas Student Health Cover, mandatory under Condition 8501 for the entire visa duration", "A one-time optional insurance product with no visa condition attached", "A government scholarship, governed by Condition 8202"],
        answer: 1,
        explanation: "Overseas Student Health Cover (OSHC) is mandatory health insurance under Condition 8501 for the entire duration of the visa — failing to maintain it can lead to visa cancellation.",
        law: "Staff Training Manual, Part D — FAQ 20, Subclass 500",
        tag: "product", difficulty: "easy"
      },
      {
        q: "What does Condition 8534 prevent a student visa holder from doing?",
        options: ["Working more than 48 hours per fortnight", "Applying for a Partner visa (Subclass 820) while in Australia", "Studying at more than one institution", "Travelling overseas during the course"],
        answer: 1,
        explanation: "Condition 8534 prevents a student visa holder from applying for a Partner visa (Subclass 820) onshore — it's imposed to ensure students complete their course of study before pursuing other pathways.",
        law: "Staff Training Manual, Part D — FAQ 25, Subclass 500",
        tag: "product", difficulty: "medium"
      },
      {
        q: "What attendance rate must a student visa holder generally maintain to avoid being reported under Condition 8202?",
        options: ["At least 50%", "At least 80%", "Exactly 100%, no exceptions", "There is no attendance requirement"],
        answer: 1,
        explanation: "Student visa holders must maintain at least 80% attendance. Falling below this threshold may lead the provider to report them to the Department, risking visa cancellation.",
        law: "Staff Training Manual, Part D — FAQ 37, Subclass 500",
        tag: "product", difficulty: "medium"
      },
      {
        q: "Can a parent be included as a secondary applicant on their child's student visa application?",
        options: ["Yes, parents are always included automatically", "No — only a partner and dependent children can be secondary applicants; parents must apply for their own visa", "Only if the parent pays an extra fee", "Only for postgraduate students"],
        answer: 1,
        explanation: "Parents are not members of the family unit for Student visa purposes. Only a partner and dependent children can be secondary applicants — parents would need to apply for their own visa, such as a Visitor visa.",
        law: "Staff Training Manual, Part D — FAQ 30, Subclass 500",
        tag: "product", difficulty: "medium"
      },
      {
        q: "What is a Bridging Visa A (BVA), and what causes it to cease?",
        options: ["A permanent visa that never ceases", "Automatically granted when a substantive visa application is lodged; it ceases if the person leaves Australia", "A visa exclusively for tourists", "A visa that only applies to skilled migrants"],
        answer: 1,
        explanation: "A BVA is automatically granted when a person on a valid substantive visa lodges another substantive visa application, allowing lawful stay while it's processed. It ceases if the holder leaves Australia (without a BVB), when the application is decided, or if cancelled.",
        law: "Staff Training Manual, Part D — FAQ 38 & 43, Bridging Visas",
        tag: "product", difficulty: "medium"
      },
      {
        q: "Can a person on a Bridging Visa A (BVA) travel outside Australia and return using that same BVA?",
        options: ["Yes, a BVA always includes full travel rights", "No — a BVA has no travel rights; they must obtain a Bridging Visa B (BVB) before departing, or the BVA will cease", "Yes, but only to one specific country", "No, BVA holders can never leave Australia under any visa"],
        answer: 1,
        explanation: "A BVA does not have travel rights. To travel, the holder must apply for and be granted a Bridging Visa B (BVB) before departing — leaving on a BVA alone causes it to cease and may prevent lawful re-entry.",
        law: "Staff Training Manual, Part D — FAQ 39, Bridging Visas",
        tag: "product", difficulty: "easy"
      },
      {
        q: "What happens to a Bridging Visa A when the underlying substantive visa application is REFUSED?",
        options: ["It ceases immediately with no further options", "It continues for a period to allow the person to seek merits review, then ceases once that period or review is finalised", "It automatically converts to a permanent visa", "It is extended indefinitely regardless of any review"],
        answer: 1,
        explanation: "When a visa is refused, the BVA does not immediately cease — it continues to allow the person to seek merits review of the decision, ceasing once the review period expires or the review is finalised.",
        law: "Staff Training Manual, Part D — FAQ 45, Bridging Visas",
        tag: "product", difficulty: "hard"
      }
    ]
  },
  {
    id: 16,
    title: "Graduate & Skilled Migration Visa FAQs",
    icon: "📈",
    tag: "skilled",
    description: "Policy-accurate FAQs on the Subclass 485 (Temporary Graduate) visa and General Skilled Migration (189, 190, 491) including the points test",
    passmark: 100,
    roles: ["Education Consultant"],
    remark_pass: "Excellent command of the 485 and skilled migration FAQs. Understanding the points test and stream differences lets you map realistic, accurate PR pathways for graduating clients.",
    remark_low: "Good foundation. Revisit the difference between the two 485 streams and the points test factor table — these details determine whether a client's chosen course actually leads where they expect.",
    remark_fail: "Graduate and skilled migration knowledge directly shapes whether a client's course choice achieves their PR goals. Please re-study Part E in full before advising clients independently.",
    questions: [
      {
        q: "What is the Australian Study Requirement for the Subclass 485 visa?",
        options: ["Any single semester of study, regardless of length", "At least 92 weeks of CRICOS-registered study completed in no less than 16 calendar months, in English, while in Australia on a valid visa", "A minimum of 5 years of continuous study", "There is no minimum study requirement"],
        answer: 1,
        explanation: "The applicant must have completed CRICOS-registered study totalling at least 92 weeks, over no less than 16 calendar months, undertaken in English while in Australia on a valid visa.",
        law: "Staff Training Manual, Part E — FAQ 46, Subclass 485",
        tag: "skilled", difficulty: "medium"
      },
      {
        q: "What is the key difference between the Post-Vocational Education Work stream and the Post-Higher Education Work stream of the 485 visa?",
        options: ["They are identical in every requirement", "Post-Vocational (VET graduates) requires a skills assessment in an MLTSSL occupation; Post-Higher Education (degree graduates) does not require a skills assessment", "Post-Higher Education requires a skills assessment; Post-Vocational does not", "Only the Post-Vocational stream leads to any work rights"],
        answer: 1,
        explanation: "The Post-Vocational stream (VET/Diploma graduates) requires a positive skills assessment in an MLTSSL occupation. The Post-Higher Education stream (Bachelor/Masters/PhD graduates) does not require a skills assessment or nominated occupation.",
        law: "Staff Training Manual, Part E — FAQ 47, Subclass 485",
        tag: "skilled", difficulty: "medium"
      },
      {
        q: "A Diploma of Nursing graduate (Enrolled Nurse pathway) wants a 485 visa via the Post-Vocational stream. What is the obstacle?",
        options: ["There is no obstacle — Enrolled Nurse is definitely eligible", "Enrolled Nurse (ANZSCO 4114) is not on the MLTSSL, so they may not be eligible for the Post-Vocational stream", "Nursing is entirely excluded from the 485 visa", "They must complete a PhD first"],
        answer: 1,
        explanation: "Enrolled Nurse (ANZSCO 4114) is not on the MLTSSL, meaning a Diploma of Nursing graduate may not be eligible for the Post-Vocational Education Work stream — occupation lists should always be checked.",
        law: "Staff Training Manual, Part E — FAQ 56, Subclass 485",
        tag: "skilled", difficulty: "hard"
      },
      {
        q: "Can a person be the primary applicant for a Subclass 485 visa more than once in their lifetime?",
        options: ["Yes, unlimited times with no restriction", "Generally no — with very limited exceptions for those who studied in a designated regional area", "Yes, but only twice", "No, it can never be granted more than once under any circumstances"],
        answer: 1,
        explanation: "An applicant can generally only be the primary applicant for a 485 visa once in their lifetime, with very limited exceptions for those who lived and studied in a designated regional area.",
        law: "Staff Training Manual, Part E — FAQ 49, Subclass 485",
        tag: "skilled", difficulty: "medium"
      },
      {
        q: "What additional benefit is available to graduates who complete at least 2 years of study in a designated regional area, relevant to the 485 visa?",
        options: ["A discount on the visa application fee only", "An additional 1 year added to their 485 visa duration", "Automatic permanent residency", "Exemption from the Australian Study Requirement"],
        answer: 1,
        explanation: "Graduates who complete at least 2 years of study in a designated regional area may be eligible for an additional 1 year on their 485 visa — an incentive to study regionally.",
        law: "Staff Training Manual, Part E — FAQ 58, Subclass 485",
        tag: "skilled", difficulty: "medium"
      },
      {
        q: "What is the key difference between the Subclass 189, 190, and 491 visas?",
        options: ["They are all identical permanent visas", "189 = no nomination needed (permanent); 190 = state nomination (permanent, +5 points); 491 = state/relative sponsorship (provisional, +15 points, leads to 191 after 3 years)", "491 is a permanent visa requiring no points at all", "190 does not require any points test"],
        answer: 1,
        explanation: "The 189 is points-tested with no nomination required. The 190 requires state/territory nomination (worth 5 extra points). The 491 is a provisional visa requiring state or eligible relative sponsorship (worth 15 extra points), leading to permanent residence via the 191 after 3 years.",
        law: "Staff Training Manual, Part E — FAQ 59, GSM Visas",
        tag: "skilled", difficulty: "medium"
      },
      {
        q: "What is the minimum points score required to submit an Expression of Interest (EOI) for the 189, 190, or 491 visa?",
        options: ["50 points", "65 points", "80 points", "100 points"],
        answer: 1,
        explanation: "The minimum points score to submit an EOI is 65, though the actual score needed to receive an invitation is often much higher depending on the occupation and current invitation rounds.",
        law: "Staff Training Manual, Part E — FAQ 61 & 194, Points Test",
        tag: "skilled", difficulty: "easy"
      },
      {
        q: "What is the age limit to be INVITED to apply for a 189, 190, or 491 visa?",
        options: ["Under 35 years", "Under 45 years", "Under 55 years", "There is no age limit"],
        answer: 1,
        explanation: "To be invited to apply for a 189, 190, or 491 visa, the applicant must be under 45 years of age at the time the invitation is issued.",
        law: "Staff Training Manual, Part E — FAQ 63, Age Requirement",
        tag: "skilled", difficulty: "easy"
      },
      {
        q: "What does 'superior English' mean for the points test, and how many points is it worth?",
        options: ["IELTS 6.0 in each band, worth 0 points", "IELTS 8.0 in each of the four components, worth 20 points", "IELTS 7.0 overall only, worth 10 points", "Any English test result, worth 15 points"],
        answer: 1,
        explanation: "'Superior English' requires an IELTS score of at least 8.0 in each of the four components (or equivalent), and is worth 20 points on the points test — the highest English tier.",
        law: "Staff Training Manual, Part E — FAQ 83, Points Test",
        tag: "skilled", difficulty: "medium"
      },
      {
        q: "Which authority conducts the skills assessment for IT professionals seeking skilled migration?",
        options: ["Engineers Australia (EA)", "The Australian Computer Society (ACS)", "CPA Australia", "TRA"],
        answer: 1,
        explanation: "IT occupations are assessed by the Australian Computer Society (ACS), which evaluates the applicant's qualifications and work experience against the nominated occupation.",
        law: "Staff Training Manual, Part E — FAQ 71, Skills Assessment",
        tag: "skilled", difficulty: "easy"
      },
      {
        q: "What are the designated regional areas relevant to 491 visa nomination and PR pathways?",
        options: ["Only Tasmania and the Northern Territory", "All of Australia except Sydney, Melbourne, Brisbane, the Gold Coast, and Perth", "Only areas more than 500km from any capital city", "There are no designated regional areas — it applies everywhere"],
        answer: 1,
        explanation: "Designated regional areas include all of Australia except Sydney, Melbourne, Brisbane, the Gold Coast, and Perth — this includes cities like Canberra, Adelaide, Hobart, and Darwin.",
        law: "Staff Training Manual, Part E — FAQ 80, Subclass 491",
        tag: "skilled", difficulty: "medium"
      },
      {
        q: "What is the Professional Year Program (PYP) and how many points is it worth?",
        options: ["A 44-week structured work experience program for accounting, IT, or engineering graduates, worth 5 points", "A university degree program worth 20 points", "A skills assessment itself, worth 0 points", "A citizenship preparation course worth 10 points"],
        answer: 0,
        explanation: "The PYP is a roughly 44-week structured work experience program (including an internship) for recent graduates in accounting, IT, or engineering, earning 5 additional points on the points test.",
        law: "Staff Training Manual, Part E — FAQ 67, Professional Year Program",
        tag: "skilled", difficulty: "medium"
      }
    ]
  },
  {
    id: 17,
    title: "Employer-Sponsored, Family & Compliance FAQs",
    icon: "⚖️",
    tag: "family",
    description: "Employer-sponsored visa FAQs (482/494/407), family and parent visa basics, the Section 48 bar, and the MARA advice boundary",
    passmark: 100,
    roles: ["Education Consultant"],
    remark_pass: "Excellent grasp of the employer-sponsored, family, and compliance FAQs. Knowing exactly where general information ends and MARA-registered advice begins protects both clients and the business.",
    remark_low: "Good foundation. Focus on the Section 48 bar and the MARA advice boundary — these are the highest-stakes compliance points in this module.",
    remark_fail: "This module covers the compliance boundary that protects both clients and Interlace Studies. Please re-study Parts F and G in full before advising clients independently.",
    questions: [
      {
        q: "What is the TSMIT and how does it relate to the Annual Market Salary Rate (AMSR) for a 482 sponsored worker?",
        options: ["The employer chooses whichever figure is lowest", "The employer must pay at least the TSMIT or the AMSR, whichever is HIGHER", "TSMIT only applies to Australian citizens", "AMSR replaced TSMIT entirely in all cases"],
        answer: 1,
        explanation: "The employer must pay the sponsored worker at least the TSMIT or the AMSR for the occupation, whichever is higher — this prevents overseas workers from being underpaid or undercutting local wages.",
        law: "Staff Training Manual, Part F — FAQ 85 & 91",
        tag: "family", difficulty: "medium"
      },
      {
        q: "Can a 482 visa holder change employers without their current employer's permission?",
        options: ["No, they are bound to the employer for life", "Yes — but the new employer must become an approved sponsor and have a new nomination approved before the client starts working for them", "Yes, immediately, with no new nomination required", "Only after 10 years with the same employer"],
        answer: 1,
        explanation: "A 482 visa holder can change employers, but the new employer must be an approved sponsor and have a new nomination approved. The visa holder does not need the current employer's permission, but cannot start the new role before the new nomination is approved.",
        law: "Staff Training Manual, Part F / Part G — FAQ 86 & 133",
        tag: "family", difficulty: "medium"
      },
      {
        q: "What is the Skilling Australians Fund (SAF) levy for a small business sponsoring a 482 visa?",
        options: ["No fee applies to small businesses", "Typically $1,200 per year (small business, turnover under $10 million); $1,800/year for larger businesses", "A flat $10,000 regardless of business size", "Only payable by the visa applicant, never the employer"],
        answer: 1,
        explanation: "The SAF levy for a 482 nomination is typically $1,200 per year for small businesses (turnover under $10 million) and $1,800 per year for larger businesses.",
        law: "Staff Training Manual, Part F — FAQ 87",
        tag: "family", difficulty: "medium"
      },
      {
        q: "What must an employer demonstrate through Labour Market Testing (LMT) before sponsoring a 482 worker?",
        options: ["That the sponsored worker has family in Australia", "That they attempted to recruit an Australian worker for the position first, typically by advertising for at least 4 weeks", "That the business has been operating for over 20 years", "Nothing — LMT is optional"],
        answer: 1,
        explanation: "LMT requires the employer to show they attempted to recruit Australian workers before sponsoring an overseas worker — typically advertising the position for at least 4 weeks on a national job board.",
        law: "Staff Training Manual, Part F — FAQ 93",
        tag: "family", difficulty: "medium"
      },
      {
        q: "What is the key obligation and restriction for a Subclass 494 (SESR) visa holder?",
        options: ["They may live anywhere in Australia freely", "They must live, work, and study only in a designated regional area, or risk visa cancellation", "They must change employer every 12 months", "There are no location restrictions on this visa"],
        answer: 1,
        explanation: "The 494 is a regional visa — the holder must live, work, and study only in a designated regional area. Moving to a non-regional area without permission is a breach that can lead to cancellation.",
        law: "Staff Training Manual, Part F — FAQ 96 & 100",
        tag: "family", difficulty: "medium"
      },
      {
        q: "What is the purpose of the Subclass 407 Training visa, and is it a substitute for a work visa?",
        options: ["It is exactly the same as a work visa with full employment rights", "It is for workplace-based occupational training only — it is not for formal qualification study and not a substitute for a work visa", "It grants immediate permanent residency", "It is only available to Australian citizens"],
        answer: 1,
        explanation: "The 407 visa is for workplace-based occupational training to improve skills — it explicitly is not for formal study toward a qualification, and is not a substitute for a genuine work visa.",
        law: "Staff Training Manual, Part F — FAQ 97",
        tag: "family", difficulty: "medium"
      },
      {
        q: "What is the Section 48 bar, and why is it critical to understand?",
        options: ["It only affects visitor visas and nothing else", "It prevents a person who has had a visa refused or cancelled while in Australia from applying for most other visas while remaining in Australia, with very limited exceptions", "It is a bar on international travel only", "It has been repealed and no longer applies"],
        answer: 1,
        explanation: "Section 48 of the Migration Act prevents a person who has had a visa refused or cancelled while in Australia from applying for most other visas while they remain in the country — this can severely limit a client's options and must always be checked.",
        law: "Staff Training Manual, Part G — FAQ 151, Section 48",
        tag: "family", difficulty: "hard"
      },
      {
        q: "What is a MARA-registered migration agent, and why does it matter for Interlace Studies staff?",
        options: ["Anyone with a university degree, and it doesn't affect staff", "A person registered with the Migration Agents Registration Authority to lawfully provide immigration assistance for a fee; non-MARA staff must refer clients to one for specific advice", "A government department, not a person", "A visa subclass for migration professionals"],
        answer: 1,
        explanation: "Only a MARA-registered agent (or lawyer) can lawfully provide immigration assistance for a fee. Interlace Studies staff who are not MARA-registered must refer clients requiring specific migration advice to a registered agent.",
        law: "Staff Training Manual, Part G — FAQ 169",
        tag: "family", difficulty: "easy"
      },
      {
        q: "What is the difference between the Subclass 103 and Subclass 143 parent visas?",
        options: ["They are identical in cost and wait time", "The 103 has a very long wait time (often 30+ years); the 143 (Contributory) has a much shorter wait (2–3 years) but a significantly higher charge", "The 103 is temporary; the 143 is permanent", "The 143 has no visa application charge at all"],
        answer: 1,
        explanation: "The Subclass 103 (Parent) visa has an extremely long queue (often 30+ years), while the Subclass 143 (Contributory Parent) visa has a much shorter wait (typically 2–3 years) due to a significantly higher visa application charge.",
        law: "Staff Training Manual, Part G — FAQ 174",
        tag: "family", difficulty: "medium"
      },
      {
        q: "What is the 'balance of family test' for parent visas?",
        options: ["A financial test on the parent's income only", "At least half the applicant's children must be Australian citizens/PRs/eligible NZ citizens, OR more children live in Australia than any other single country", "A requirement that all children must live overseas", "A test that only applies to single parents"],
        answer: 1,
        explanation: "The balance of family test requires that at least half of the applicant's children are Australian citizens, permanent residents, or eligible New Zealand citizens, OR that more of their children live in Australia than in any other single country.",
        law: "Staff Training Manual, Part G — FAQ 175",
        tag: "family", difficulty: "hard"
      },
      {
        q: "What is the minimum de facto relationship duration generally required for a partner visa, before any exceptions apply?",
        options: ["3 months", "12 months", "5 years", "There is no minimum duration"],
        answer: 1,
        explanation: "A de facto relationship must generally have lasted at least 12 months before applying for a partner visa, unless the relationship is registered under a state/territory scheme.",
        law: "Staff Training Manual, Part G — FAQ 178",
        tag: "family", difficulty: "easy"
      },
      {
        q: "A client on a student visa asks if they can apply for a partner visa onshore for their Australian citizen partner. What should you advise?",
        options: ["Yes, they can do this at any time with no restrictions", "Generally no — Condition 8534 on the student visa prevents applying for a Subclass 820 while in Australia", "Only migration agents are allowed to answer this, so refuse to say anything at all", "Yes, but only if they pay an extra fee"],
        answer: 1,
        explanation: "Condition 8534 generally prevents a student visa holder from applying for a Partner visa (Subclass 820) onshore. This is general factual information about the visa condition — for their specific situation, refer them to a MARA-registered agent.",
        law: "Staff Training Manual, Part D / Part G — FAQ 25 & 141",
        tag: "family", difficulty: "hard"
      }
    ]
  }
];
