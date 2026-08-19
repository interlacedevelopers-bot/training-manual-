// ═══════════════════════════════════════════════════════════════════
// INTERLACE STUDIES — PARTNER VISA TRAINING STUDY MANUALS
// One manual per module. Must be studied before the assessment unlocks.
// ═══════════════════════════════════════════════════════════════════

const MANUALS = {
  1: {
    intro: "This module covers the structure of the Australian partner visa framework: which subclass applies to which client, who is legally eligible to sponsor, and the relationship-recognition rules that gate every application.",
    sections: [
      {
        heading: "Onshore vs Offshore Pathways",
        body: "The Subclass 820 (Temporary Partner) is lodged onshore and paired with the Subclass 801 (Permanent) at the second stage. The Subclass 309 (Provisional Partner) is the offshore equivalent, paired with the Subclass 100 (Permanent). A client physically in Australia applies for the 820/801 pathway; a client offshore applies for the 309/100 pathway. The Subclass 309 can be lodged from any country outside Australia — not just the applicant's home country. Since November 2023, the 309 can be granted regardless of the applicant's location at grant time (previously it required the applicant to be offshore at grant)."
      },
      {
        heading: "De Facto & Married Relationship Requirements",
        body: "A de facto relationship must ordinarily have lasted 12 months (Reg. 1.09A(2)) before lodgement. This is waived entirely if the relationship is registered under a state or territory relationship register (Reg. 1.09A(1)(b)). Same-sex de facto and married couples are fully eligible under s.5F of the Migration Act 1958 and Reg. 1.09A(1) — recognition (or lack of it) in the couple's home country is irrelevant. Temporary separation does not break eligibility: Reg. 1.09A(2)(b) permits couples who are not permanently separated (e.g. due to visa circumstances) to still qualify, provided they can show ongoing commitment. Polygamous marriages are not recognised — under the Family Law Act 1975 s.23B, a marriage is void if either party was already married to someone else."
      },
      {
        heading: "Sponsorship Eligibility & Limits",
        body: "Eligible sponsors include Australian citizens, permanent residents, and eligible New Zealand citizens (holders of a Subclass 444 who usually reside in Australia) — Reg. 1.20J. Every sponsor has a LIFETIME LIMIT of two sponsorships (Reg. 1.20J(1)(a)), counted by approved sponsorship applications, regardless of whether the resulting visa was granted, refused, or withdrawn. A third sponsorship requires a ministerial waiver for compelling circumstances (Reg. 1.20J(2)). Separately, a sponsor must wait 5 years between sponsorship applications, and a person who was themselves granted a partner visa must wait 5 years from when their own application was lodged before they can sponsor someone else (Reg. 1.20J(1)(b)-(c)) — this prevents rapid 'visa cycling'. A sponsor's criminal history can also bar sponsorship under Reg. 1.20KA for relevant/registrable offences (e.g. sexual offences, violence, human trafficking, or a cumulative sentence of 12 months or more)."
      },
      {
        heading: "Prospective Marriage Visa (Subclass 300)",
        body: "Both parties must be at least 18 years of age (Sch. 2, cl. 300.211(2)) — there is no maximum age. Since the Migration Amendment (Family Violence Provisions) Regulations 2024 (F2024L00751), effective 1 July 2024, a Subclass 300 can be GRANTED while the applicant is inside Australia, although the application itself must still be LODGED offshore."
      },
      {
        heading: "Visa Conditions That Block Onshore Lodgement",
        body: "Condition 8503 (No Further Stay) prevents the holder from lodging a further substantive visa application while in Australia, and — unlike a Schedule 3 issue — cannot be self-waived; a specific ministerial waiver is required before an onshore partner visa application can be lodged."
      },
      {
        heading: "Sponsorship Undertaking (Form 40SP)",
        body: "By signing Form 40SP, a sponsor formally undertakes (Reg. 1.20) to support the sponsored person for the first two years in Australia — including accommodation, financial support if needed, and help accessing services such as English language education."
      },
      {
        heading: "Processing Timelines & Waiting-Period Waivers",
        body: "The 2-year clock toward the permanent stage (801/100) runs from the date of LODGEMENT of the combined application — not from the date the temporary visa is granted. If married for 3+ years, or in a de facto relationship for 2+ years, AND the sponsor is an Australian CITIZEN (not merely a permanent resident), the 2-year waiting period for the permanent stage can be waived entirely (cl. 801.211(4), cl. 100.211(4))."
      }
    ]
  },

  2: {
    intro: "This module covers the 'Four-Pillar Test' the Department uses to assess whether a relationship is genuine and continuing: Financial, Household, Social, and Commitment evidence. Weak evidence in this area is the leading cause of RFIs and refusals.",
    sections: [
      {
        heading: "Why Four Pillars, Not One",
        body: "A relationship of convenience can often satisfy one category (e.g. a joint bank account) while failing to show genuine interdependence in others. Assessing all four aspects together — financial, household, social, and commitment — is how the Department distinguishes a genuine relationship from an arrangement built solely to obtain a visa (Sch. 2, cl. 820.211(2)(d); PAM3)."
      },
      {
        heading: "Financial Evidence",
        body: "Weight depends on DURATION and GENUINE USE, not dollar amount. A joint account used daily for three years outweighs a newly opened account with a large balance — accounts opened shortly before lodgement are viewed with scepticism as they suggest the account was created for the visa, not for shared life. There is no prescribed minimum number of statements — 12+ months spanning the relationship is best practice, and at the permanent stage, statements should cover the entire period since lodgement. Sending money to family overseas is not itself a problem, but if most available funds leave Australia with little evidence of shared local financial life, it can raise questions about interdependence."
      },
      {
        heading: "Household Evidence",
        body: "A lease or tenancy agreement listing both names is strong evidence. A lease in one name only is not fatal — supplement it with utility bills at the address, a landlord/agent statement, evidence of rent contributions, and mail addressed to both parties there. Shared streaming subscriptions (Netflix, Spotify) are useful SUPPLEMENTARY context only — they cannot substitute for primary household documents."
      },
      {
        heading: "Social Evidence",
        body: "Statutory declarations from independent witnesses (friends, colleagues, neighbours, community members) carry more weight than those from family, because independent witnesses have no personal stake in the outcome. PAM3 recommends at least 2–4 well-written, specific declarations — quality matters more than quantity. Where a couple's culture discourages public displays of a relationship before marriage, a statutory declaration explaining that cultural context is an accepted way to address a thin social media trail."
      },
      {
        heading: "Commitment Evidence",
        body: "A relationship registered under a state/territory registry is the single highest-weight commitment document — it also waives the 12-month de facto requirement outright. Naming each other in a will, enduring power of attorney, or as an insurance beneficiary demonstrates serious long-term, legally binding commitment. For long-distance couples, detailed communication logs, documented visits (boarding passes, hotel bookings, photos), and concrete plans to live together in Australia are essential — this category carries extra weight when cohabitation evidence is unavailable. Joint travel records (boarding passes, hotel bookings) support both the Social and Commitment aspects simultaneously. Children of the relationship are powerful MULTI-category evidence — birth certificates, shared parenting records, and school/Medicare enrolments strengthen commitment, household, and social pillars at once."
      },
      {
        heading: "Special Situations",
        body: "Temporary physical separation (e.g. caused by visa status) does not break genuineness if the couple can show they are not permanently separated — daily communication, visits, and financial support are key. An online-only relationship with no in-person meetings will face extreme scrutiny for the 820/309, even though there is no strict legal requirement to have met in person (unlike the Subclass 300, which does require an in-person meeting)."
      },
      {
        heading: "The Permanent Stage (801/100)",
        body: "Evidence from lodgement alone is not enough at the permanent stage. The Department must be satisfied the relationship remained genuine and continuing throughout — so fresh bank statements, new photos, updated statutory declarations, and any relationship milestones since lodgement should always be provided."
      }
    ]
  },

  3: {
    intro: "This module covers the integrity provisions that can bar or derail an application — the Section 48/48A bars, Schedule 3 criteria, PIC 4020 (false information/bogus documents), and the character and health requirements. Getting these wrong can cost a client years.",
    sections: [
      {
        heading: "Section 48 & 48A Bars",
        body: "Section 48 of the Migration Act 1958 bars a person from lodging most onshore visa applications if they hold only a bridging visa (not a 'substantive visa' — s.5 defines a substantive visa as anything other than a bridging, criminal justice, or enforcement visa) AND have had a visa refused or cancelled since their last entry to Australia. Partner visas (820/801) are specifically EXEMPT from Section 48 under Reg. 2.12 — but a barred applicant relying on this exemption must still satisfy Schedule 3 criteria. Section 48A is a related but distinct bar specific to the partner/PMV visa classes — it prevents re-lodging the SAME class onshore after a refusal of that class."
      },
      {
        heading: "Schedule 3 Criteria",
        body: "A Section 48-barred applicant relying on the partner visa exemption must satisfy: cl. 3001 (compelling and compassionate circumstances), cl. 3002 (an eligible sponsor exists), and cl. 3003 (no PIC 4020 refusal in the preceding 12 months)."
      },
      {
        heading: "PIC 4020 — False Information & Bogus Documents",
        body: "PIC 4020 (Sch. 4) is triggered by false or misleading information, a bogus (forged/counterfeit/deceptively obtained) document, or failure to establish true identity — and it applies to the primary applicant OR any family unit member included in the application. A false-information or bogus-document breach triggers a 3-YEAR ban, which CAN be waived where compelling circumstances affect Australia or an Australian citizen/PR/eligible NZ citizen. A failure to establish TRUE IDENTITY triggers a 10-YEAR ban that CANNOT be waived under any circumstances — the most severe non-criminal migration sanction available. Since the 2017 amendment, WITHDRAWING an application after submitting false material no longer provides immunity — PIC 4020 can still be applied to a subsequent application. PIC 4020 operates strictly (largely regardless of intent), but genuine, credible lack of knowledge is highly relevant to a waiver application or an ART appeal."
      },
      {
        heading: "Natural Justice (Section 57)",
        body: "Before refusing on PIC 4020 or similar adverse grounds, the Department must issue a natural justice letter under s.57 of the Migration Act 1958, giving the applicant (and their agent) an opportunity to respond — typically within 28 days. A well-prepared response at this stage can prevent a refusal entirely."
      },
      {
        heading: "Character & Health Requirements",
        body: "All criminal convictions from ANY country since age 10 must be disclosed (s.501; PIC 4002) — regardless of how long ago, whether the sentence was served, or whether the conviction is 'spent' overseas. A 'substantial criminal record' under s.501(7) means a cumulative sentence of 12 months or more. Health assessments are conducted by Panel Physicians and reviewed by a Medical Officer of the Commonwealth (MOC); the MOC's opinion is generally determinative, though reviewable by the ART in limited circumstances."
      },
      {
        heading: "Appeal Deadlines",
        body: "An ART appeal against a partner visa refusal must be lodged within 21 days of the date of the refusal notice — an absolute deadline. Clients must be contacted immediately upon any refusal to preserve this right."
      }
    ]
  },

  4: {
    intro: "This module covers the family violence provisions (significantly expanded by the July 2024 amendments) and the ART appeal process that replaced the AAT. These provisions can be genuinely life-changing for clients — they must be understood precisely.",
    sections: [
      {
        heading: "What the Family Violence Provisions Do",
        body: "The family violence provisions (Sch. 2, e.g. cl. 820.211(2)(h)) allow a partner visa to be granted even where the relationship has ENDED, provided the breakdown was caused by relevant family violence perpetrated by the sponsor. 'Relevant family violence' has a broad definition — it includes actual conduct or threats causing reasonable fear, and covers physical, sexual, emotional, psychological, financial, AND immigration-related abuse (e.g. a sponsor threatening to withdraw sponsorship or report the applicant to the Department as a form of coercion)."
      },
      {
        heading: "The Two-Stage Evidence Test",
        body: "Stage 1: prove the relationship was genuine and continuing before it broke down (using standard Four-Pillar evidence). Stage 2: prove relevant family violence occurred — either through JUDICIALLY determined evidence (an AVO or conviction) or NON-JUDICIAL evidence from a qualified professional (doctor, counsellor, social worker). Where non-judicial evidence is unclear, an Independent Expert may be engaged to assess it."
      },
      {
        heading: "The July 2024 Amendments (F2024L00751)",
        body: "Effective 1 July 2024, this instrument: (1) removed the requirement for a Subclass 309 applicant to be in Australia at the time of GRANT to access family violence provisions — they only need to have been in Australia at least once since lodgement; (2) extended family violence pathway access to Subclass 300 (PMV) holders, allowing them to seek a Subclass 820/801 even if the marriage never took place; (3) extended the 'death of sponsor' provision (cl. 820.211(2)(g)) to Subclass 309/100 applicants without requiring Australian presence at grant; and (4) updated the language throughout from 'suffered' to 'experienced' family violence, reflecting more trauma-informed drafting."
      },
      {
        heading: "The Administrative Review Tribunal (ART)",
        body: "The ART commenced 14 October 2024 under the Administrative Review Tribunal Act 2024, replacing the AAT — all pending AAT matters transferred automatically. The ART conducts a fresh, DE NOVO merits review (s.56) and can receive NEW evidence that was never before the original decision-maker. The Guidance and Appeals Panel (GAP) is a new ART body that issues binding guidance on key migration law questions to keep decisions consistent across the Tribunal. Between July 2024 and March 2025, roughly 55% of partner visa ART appeals were set aside — one of the highest success rates of any visa category, underscoring the value of professional representation."
      },
      {
        heading: "Appeal Fees & Deadlines",
        body: "The ART appeal fee (2025-26) is AUD $3,580; 50% is refunded if the ART sets the refusal aside, and a 50% financial hardship reduction is available on the upfront fee. The appeal must be lodged within 21 DAYS of the refusal notice — there is no flexibility on this deadline. While an appeal is pending, the Bridging Visa A generally continues (s.38B), preserving both lawful status and full work rights."
      },
      {
        heading: "After the ART Decision",
        body: "If the ART sets aside a refusal, the matter is REMITTED to the Department to complete any outstanding health, character, or security checks before a grant decision is made — the visa is not granted automatically by the Tribunal. Federal Court review of an ART decision is limited to JURISDICTIONAL ERROR (a legal error in the decision-making process) — the Court cannot re-examine the merits or accept new evidence. Ministerial intervention (ss.351/417) is a separate, rarely used power allowing the Minister to substitute a more favourable outcome in exceptional public-interest cases after an ART loss."
      },
      {
        heading: "Responding to a Family Violence Disclosure",
        body: "Refer the client immediately to 1800RESPECT (1800 737 732) and a specialist domestic violence legal service, while the Interlace Studies registered agent (MARN 2418363) continues to manage the migration aspects of the case in parallel."
      }
    ]
  },

  5: {
    intro: "This module covers the operational mechanics of a partner visa case — bridging visas, fees, lodgement, health checks, Medicare/Centrelink, and the professional and ethical obligations every staff member must follow.",
    sections: [
      {
        heading: "Bridging Visas & Travel",
        body: "Upon valid lodgement of an 820, a Bridging Visa A (BVA) is issued automatically and carries FULL, unrestricted work rights immediately — there is no need to wait for the 820 grant. However, a BVA has NO travel rights: departing Australia on a BVA without first being GRANTED a Bridging Visa B (BVB) causes the BVA to cease, and the client cannot use it to return. Once the Subclass 820 itself is granted, it is a substantive visa with full travel rights, and a BVB is no longer needed for future trips."
      },
      {
        heading: "Fees",
        body: "The government application fee for a primary partner visa applicant (2025-26) is approximately AUD $9,365, indexed annually — always confirm the current figure at immi.homeaffairs.gov.au before quoting a client. This fee is NON-REFUNDABLE once lodged, regardless of the outcome (granted, refused, or withdrawn), and clients must be told this clearly before committing."
      },
      {
        heading: "Lodgement Mechanics",
        body: "When the applicant lodges the 820/309 application, ImmiAccount generates a Transaction Reference Number (TRN). The sponsor then lodges Form 40SP separately, through their OWN ImmiAccount, using that TRN to link the sponsorship to the correct application."
      },
      {
        heading: "Health, Medicare & Centrelink",
        body: "Health examinations are normally completed AFTER lodgement, once the Department issues a request through ImmiAccount with a HAP (Health Applicant Portal) ID. Partner visa applicants (820 and 309) are eligible for MEDICARE from the date of valid lodgement, regardless of nationality. Centrelink is different: most income-support payments are unavailable to temporary visa holders, and once the permanent 801/100 is granted, a 2-year Newly Arrived Resident's Waiting Period (NARWP) applies to most payments."
      },
      {
        heading: "Path to Citizenship",
        body: "Under s.21 of the Australian Citizenship Act 2007, the general residence requirement is 4 years of lawful status in Australia (including at least 12 months as a permanent resident) and satisfying the presence requirement — time spent on the temporary partner visa (820/309) counts toward this 4-year total."
      },
      {
        heading: "Requests for Further Information (RFIs)",
        body: "An RFI pauses processing entirely. Every specific point raised by the case officer must be addressed promptly and comprehensively — incomplete or slow RFI responses are one of the most common, avoidable causes of extra delay. The registered agent should always be involved in drafting the response."
      },
      {
        heading: "Professional & Ethical Obligations",
        body: "Under s.280 of the Migration Act 1958, only a MARN-registered agent or an Australian legal practitioner may provide immigration assistance (including specific visa advice) for reward — this applies even to seminars or informal settings, and non-MARN staff may only provide administrative support. The OMARA Code of Conduct prohibits contingency ('success') fees — all charges must be disclosed in a written costs agreement before work begins, regardless of outcome — and requires client files to be retained for at least 7 years after a case closes. If staff suspect evidence may not be genuine, they must raise it with the client; if the agent concludes the application is genuinely fraudulent, they must cease acting rather than knowingly lodge it."
      },
      {
        heading: "Communicating a Refusal",
        body: "Best practice on a refusal: call the client before they read the letter themselves, confirm the 21-day ART deadline immediately, read the full decision before advising, and schedule a strategy consultation within 48 hours."
      }
    ]
  },

  6: {
    intro: "This module covers who Interlace Studies is, the Australian visa products you'll be discussing with prospects, and — most importantly — the Green Line / Red Line rule that defines exactly what a sales team member can and cannot say.",
    sections: [
      {
        heading: "Your Role in the Sales Funnel",
        body: "The sales funnel has three stages. Your role covers the first two: Awareness & Hunting (monitoring social media, engaging in groups, initiating DMs) and Lead Qualification (collecting full lead data, entering it into GHL, booking the consultation appointment). Stage three — Consultation & Conversion, where actual migration advice is given — belongs entirely to the Registered Migration Agents (RMAs) and Education Counselors in Australia. You are the client's first impression of Interlace Studies, and everything you do reflects on the brand."
      },
      {
        heading: "About Interlace Studies",
        body: "Interlace Studies Pty Ltd is a registered, ICEF-accredited education and migration consultancy headquartered in Brisbane, Queensland, with offices in Adelaide, Perth, Sydney, and Kathmandu. The company holds multiple MARA registrations, ensuring all migration advice is delivered by qualified Registered Migration Agents, across student visas, skilled migration, family visas, employer-sponsored visas, and education placement."
      },
      {
        heading: "Key Visa Products You Will Discuss",
        body: "Subclass 500 (Student Visa) — for students enrolled in a CRICOS-registered course; common questions cover GTE, English requirements, and work rights. Subclass 600 (Visitor Visa) — tourists, family visitors, business visitors, medical treatment. Subclass 820/801 (Partner Visa, Onshore) and Subclass 309/100 (Partner Visa, Offshore) — for applicants in a genuine relationship with an Australian citizen/PR, distinguished by whether the applicant is residing in or outside Australia. Subclass 482 (TSS) — skilled workers sponsored by an approved employer, involving ANZSCO occupations and TSMIT salary thresholds. Subclass 186 (ENS) — permanent employer-sponsored residence via the TRT, DE, or Labour Agreement pathways. Subclass 485 (Temporary Graduate) — for recent graduates of Australian institutions."
      },
      {
        heading: "The OMARA Framework",
        body: "The Office of the Migration Agents Registration Authority (OMARA) regulates all Registered Migration Agents under the Migration Act 1958. Its Code of Conduct (effective 1 March 2022) sets strict rules for how migration assistance can be provided. Providing immigration assistance without being an RMA is a criminal offence — as a sales team member, you are NOT an RMA, and you must never provide specific migration advice."
      },
      {
        heading: "The Green Line / Red Line Rule",
        body: "GREEN LINE (you CAN do this): share publicly available factual information from immi.homeaffairs.gov.au; explain the general purpose of a visa category; describe Interlace Studies' services and the benefits of an RMA consultation; collect contact details and inquiry context; book RMA appointments; answer general study/education questions; refer clients to the official DHA website. RED LINE (you must NEVER do this): recommend a specific visa subclass for someone's personal circumstances; assess or predict chances of success or refusal; advise on responding to a Departmental RFI; advise on what documents to prepare or how to present a case; advise on refusals, appeals, or the AAT; advise on bridging visa conditions, work rights, or travel restrictions for a specific client; draft, prepare, or help complete any visa application form."
      },
      {
        heading: "The Standard Deflection Script",
        body: "When a prospect asks for specific advice, use a version of: 'That is a great question, and I completely understand your concern. Because Australian migration law is complex and constantly changing, I am not in a position to provide specific advice on your individual circumstances. What I can do is connect you with one of our Registered Migration Agents who can review your full case and give you expert, personalised guidance. Would you like me to book a consultation for you?'"
      }
    ]
  },

  7: {
    intro: "This module covers what makes a lead genuinely usable by the business (Quality Lead Standards and Scoring), and the platform-by-platform strategy for finding those leads on social media.",
    sections: [
      {
        heading: "The Seven Required Lead Fields",
        body: "Before a lead counts toward your target, GoHighLevel must contain: (1) Lead Context — what they want and why they reached out; (2) Phone Number — with country code; (3) Email Address — confirmed as valid and active; (4) Services Sought — the specific service(s) of interest; (5) Client History — current visa, previous refusals, education, occupation; (6) Source Platform — where the lead was found; (7) Lead Date & Time — in Nepal Standard Time (NST)."
      },
      {
        heading: "Lead Quality Scoring",
        body: "Leads are scored by the team leader. 90–100% (Premium Lead) — immediate priority booking with an RMA within 24 hours. 70–89% (Qualified Lead) — counts toward the monthly target, book within 48 hours. 50–69% (Warm Lead) — does NOT count toward target, follow up for missing information. Below 50% (Incomplete Lead) — returned to the rep, must be completed within 24 hours or it is discarded."
      },
      {
        heading: "Platform Landscape & Time Allocation",
        body: "Facebook remains dominant at 78% of Australian internet users, followed by Instagram (65%), TikTok (48%), LinkedIn (42%), and Reddit (35%). Daily allocation: Facebook Groups 3 hours (★★★★★, highest volume, all lead types); Facebook Pages 1 hour (education, student visa); Instagram 1.5 hours (student visa 500, education); TikTok 1 hour (student visa 500, visitor 600); Reddit r/AusVisa 1 hour (partner visa, employer sponsored); LinkedIn 1 hour (482/186 visas); WhatsApp Groups 30 minutes (all types, high conversion, referral-based); YouTube Comments 30 minutes (all types)."
      },
      {
        heading: "The Facebook Engagement Protocol",
        body: "Seven steps for every group engagement: (1) Monitor — spend the first 30 minutes scanning new posts using keyword search from the past 24 hours; (2) Assess — read the full post and comments, decide if it's general or advisory-only; (3) Public Comment — post a helpful, factual comment with a call-to-action; (4) Direct Message — DM within 5 minutes of the public comment; (5) Qualify — gather all required lead data in the DM, building rapport first; (6) Enter in GHL — immediately, never delayed more than 2 hours; (7) Book Appointment — use the GHL calendar, confirm via DM and SMS."
      },
      {
        heading: "Instagram & TikTok",
        body: "On Instagram: monitor target hashtags daily, post a minimum of 20 helpful comments per day, send a minimum of 15 personalised DMs per day after public engagement, reply to relevant stories daily, and monitor influencer accounts weekly. On TikTok: your role is to engage in comments on relevant videos — not to create content unless directed by management."
      },
      {
        heading: "Reddit & LinkedIn",
        body: "Reddit (r/AusVisa, r/AskAnAustralian, r/Australia, r/ImmigrationAustralia) is highly sensitive to self-promotion — never directly advertise Interlace Studies in a post or comment; only mention it if asked, or via DM after rapport is built. LinkedIn is the primary channel for employer-sponsored (482/186) leads — target Nepali professionals in Australia, HR managers, and individuals in MLTSSL-listed occupations, with a professional profile clearly stating your Interlace Studies role."
      }
    ]
  },

  8: {
    intro: "This module covers how to actually talk to prospects — the DM qualification flow, the phone engagement protocol (including strict call-time windows), and how to handle the objections you'll hear every day.",
    sections: [
      {
        heading: "Scripts Are Templates, Not Copy-Paste",
        body: "Every script in the manual must be adapted to the individual situation. Copy-pasting scripts verbatim risks platforms flagging the messages as spam — they must feel genuine and personalised every time."
      },
      {
        heading: "The DM Qualification Flow",
        body: "Once a prospect responds, the conversation flows through five stages, without rushing: Opening (introduce yourself, reference their question, ask if they're in Australia or planning to come); Context Gathering (their visa status and main goal — study, work, or family); History Gathering (previous applications or refusals, education, occupation); Contact Confirmation (get their best email and phone number for the appointment); Booking (confirm the consultation time and ask if there's anything else to note for the agent)."
      },
      {
        heading: "Phone Engagement Rules",
        body: "All outbound calls must be made during Australian business hours, 9:00 AM – 6:00 PM AEST — approximately 3:15 AM – 12:15 PM Nepal Standard Time. Before calling: review the lead's GHL profile, ensure a quiet environment with stable VoIP, have the GHL calendar and service/pricing guide ready, review prior notes, and confirm the client's time zone."
      },
      {
        heading: "The Phone Call Script Structure",
        body: "Opening (first 30 seconds) — confirm you're speaking with the right person, introduce yourself and Interlace Studies, reference their inquiry, check if it's a good time. Rapport Building — confirm their goal and ask where they are in the process. Qualification — confirm any missing lead data. Booking the Appointment — propose a specific date/time with an RMA. Closing — confirm the booking, mention documents to bring, and thank them warmly."
      },
      {
        heading: "Call Etiquette",
        body: "Speak clearly, slowly, and professionally — many clients are not native English speakers. Never leave a client on hold more than 30 seconds without checking in. If you can't answer a question, say you'll note it for the agent to address at the consultation. Never argue — acknowledge frustration empathetically. Log every call in GHL immediately, with a summary and follow-up actions. Never promise visa outcomes, processing times, or success rates."
      },
      {
        heading: "Handling Objections",
        body: "Objections are not rejections — they are requests for more information. Common objections include 'I can do this myself,' 'it's too expensive,' 'I'll think about it,' 'I already have an agent,' and 'I'm not sure if I'm eligible.' Each is answered by acknowledging the concern genuinely and steering back toward the value of a professional RMA consultation, without being pushy or dismissive."
      }
    ]
  },

  9: {
    intro: "This module covers GoHighLevel (GHL) — the CRM that every lead, conversation, and appointment must run through — along with the monthly targets, individual KPIs, and technology stack that keep the whole operation measurable.",
    sections: [
      {
        heading: "GHL Lead Entry, Step by Step",
        body: "Navigate to Contacts → Add Contact; enter name, phone (with country code), and email; set the Source field to the platform the lead came from; apply tags for visa type, location (onshore/offshore-Nepal), and lead quality (Premium/Qualified); write a detailed Notes summary — thorough enough that the RMA can prepare from it alone; move the contact through the Pipeline (New Lead → Contacted → Qualified → Appointment Booked → Consultation Complete); book the appointment via the GHL calendar; confirm with the client by DM, SMS, or email."
      },
      {
        heading: "Pipeline Stages & Required Actions",
        body: "New Lead — contact within 2 hours of identification. Contacted — follow up if no response within 24 hours. Qualified — book an appointment within 48 hours. Appointment Booked — send a reminder 24 hours before. Consultation Complete — no further sales action; the RMA manages from here. Lost/Unresponsive — after 3 follow-up attempts over 7 days with no response, tag as 'Unresponsive' and let GHL automation handle re-engagement."
      },
      {
        heading: "Monthly Targets",
        body: "The team-wide minimum is 1,000 leads/month (250/week, ~50/day per rep) — rated CRITICAL. By category: Onshore Education 250, Offshore Education (Nepal) 150, Student Visa 500 leads 200–300 (CRITICAL), Visitor Visa 600 leads 100–200 (MEDIUM), Partner Visa 820/309 leads 100 (HIGH), Employer Sponsored 482/186 leads 50 (HIGH)."
      },
      {
        heading: "Individual KPIs",
        body: "Minimum 50 social media engagements (comments + DMs) per day. Minimum 10 new leads entered in GHL per day. Minimum 75% average lead quality score, measured weekly. Minimum 40% appointment booking conversion rate of qualified leads, measured weekly. Maximum 2-hour response time to new inquiries, measured daily. 100% follow-up completion within 24 hours, measured daily. Minimum 100% of assigned monthly lead target achieved, measured monthly."
      },
      {
        heading: "The Technology Stack",
        body: "GoHighLevel (GHL) is mandatory for every team member — the CRM and automation backbone. Meta Business Suite manages Facebook/Instagram pages and DMs. WhatsApp Business (business account only) handles client communication. Canva Pro is for assigned team members creating branded content. Grammarly Premium ensures professional writing. Zoom/Google Meet handles video consultations (logged in GHL). Google Sheets supports daily reporting until fully automated. Slack/Microsoft Teams covers internal communication. A VoIP service (e.g. Aircall) makes/receives calls to Australian numbers and auto-logs them in GHL. Notion/Confluence is the knowledge base for scripts and compliance guidelines."
      }
    ]
  },

  10: {
    intro: "This module covers your daily reporting obligations and the Code of Conduct that governs every single client interaction — described in the manual as non-negotiable, applying at all times.",
    sections: [
      {
        heading: "Daily Reporting Requirements",
        body: "At the end of each working day (Nepal Standard Time), every team member submits a daily activity report via the designated Slack channel or GHL report, covering: Date, Total Engagements (comments + DMs across all platforms), New Leads Entered, Appointments Booked, Follow-Ups Completed, and Issues/Escalations (any compliance concerns, difficult situations, or technical issues)."
      },
      {
        heading: "The Weekly Team Review",
        body: "Every Monday (NST), the team leader conducts a mandatory 30-minute virtual review covering the previous week's performance against targets, top-performing strategies, compliance reminders, and any script or process updates. Attendance is mandatory for all team members."
      },
      {
        heading: "Honesty and Transparency",
        body: "Never make false or misleading claims about visa success rates, processing times, or service outcomes. Always be transparent about what Interlace Studies can and cannot guarantee."
      },
      {
        heading: "Respect, Professionalism & Confidentiality",
        body: "Treat every client with respect regardless of their situation, background, or English proficiency — never use condescending, dismissive, or inappropriate language. All client information is strictly confidential: never share client data with third parties, discuss cases in public forums, or use client information for anything other than their own service delivery."
      },
      {
        heading: "No Spam, No Impersonation, No Guarantees",
        body: "Never send mass, unsolicited messages — all outreach must respond to a genuine inquiry or relevant public post. Never impersonate an RMA, lawyer, or other qualified professional — always clearly identify yourself as a sales consultant. Never guarantee a visa outcome, processing time, or specific result — use language like 'our agents will assess your case and advise on the best pathway' rather than 'we will get you the visa.'"
      },
      {
        heading: "Reporting Obligations",
        body: "If you encounter a situation that appears to involve fraud, exploitation, or illegal activity, you must report it to your team leader immediately."
      }
    ]
  },

  11: {
    intro: "This module covers Interlace Studies' specialised employer sponsorship service — the Standard Business Sponsorship (SBS) framework, the fee structures for the 482, 186, 494 and 407 pathways, and the compliance obligations that protect business clients from serious penalties.",
    sections: [
      {
        heading: "The Three-Stage Sponsorship Framework",
        body: "Every employer sponsorship engagement follows the same sequential journey. Stage A: Standard Business Sponsorship (SBS) — a one-time approval ($420 government fee, valid 5 years) authorising the business to sponsor overseas workers; required before any nomination. Stage B: Nomination — a separate application per position, assessing role genuineness, occupation eligibility, TSMIT compliance, and Labour Market Testing (LMT — advertising the role for at least 28 days on two or more platforms within the 4 months prior to lodgement). Stage C: Visa Application — the employee's application, assessing skills, English, health and character. The typical end-to-end 482 pathway takes 5–12 months."
      },
      {
        heading: "Subclass 482 (Skills in Demand)",
        body: "Australia's primary temporary skilled work visa, available under three streams: Core Skills, Specialist Skills, and Labour Agreement. Granted for up to 4 years with full-time work rights for the nominated employer and occupation, and a clear PR pathway via the Subclass 186 TRT stream after 2 years. The employer must pay at least the TSMIT (currently $73,150 p.a., confirm current rate) or the Annual Market Salary Rate, whichever is higher."
      },
      {
        heading: "Subclass 186 (Employer Nomination Scheme)",
        body: "A permanent visa with two streams. Temporary Residence Transition (TRT): for applicants who have held a 482 with the same employer for 2+ years in the nominated occupation. Direct Entry (DE): for applicants who have not previously held a 482, requiring a skills assessment plus 3 years of relevant experience — ideal for senior or hard-to-fill roles needing immediate PR, bypassing the temporary stage entirely."
      },
      {
        heading: "Subclass 494 & Subclass 407",
        body: "Subclass 494 (Skilled Employer Sponsored Regional): a 5-year provisional visa for regional employers; the holder must live, work, and study only in a designated regional area, leading to the permanent Subclass 191 after 3 years of compliance. Subclass 407 (Training): for structured workplace-based occupational training only — not general employment, and with no direct PR pathway. It has the lowest fees of all employer-sponsored options (no SAF Levy, $430 primary applicant VAC), making it cost-effective for genuine short-term training needs, but the 482 is the better choice if the business wants to retain the worker long-term."
      },
      {
        heading: "Employer Sponsorship Obligations & Risks",
        body: "Approved sponsors carry serious legal obligations. Pay equivalent terms & conditions to an equivalent Australian worker — breach carries a civil penalty of up to $93,900 per breach. No cost recovery — employers cannot pass sponsorship, nomination, or SAF levy costs to the visa holder; breach risks penalty and sponsorship cancellation. Maintain records of employment, pay, and role for the visa duration plus 2 years after. Notify Home Affairs within 28 days of changes to the worker's role, salary, or employment status. Cooperate with inspections. The genuine role requirement means the nominated position must remain a real, ongoing full-time role — breach can mean visa cancellation and a sponsorship bar."
      },
      {
        heading: "Recommending the Right Pathway",
        body: "The 482 SID is the recommended primary pathway for most employers — fastest entry, broadest eligible occupations, and a structured PR route via 186 TRT. For critical, senior, or hard-to-fill roles needing immediate permanent residency as an incentive, the 186 DE stream is the stronger recommendation. The 407 is reserved for genuine training-only needs where a work visa is not the goal."
      }
    ]
  },

  12: {
    intro: "This module covers the communication standards every Interlace Studies staff member must follow: the CAEP standard, structured listening and de-escalation techniques, and CRM documentation discipline.",
    sections: [
      {
        heading: "The CAEP Communication Standard",
        body: "All client interactions — in every channel, at every stage — must reflect Clarity (plain English, no unexplained jargon), Accuracy (never guess; verify before advising and cite the source), Empathy (acknowledge the client's emotions and situation genuinely), and Professionalism (a professional tone at all times, no slang or personal opinions)."
      },
      {
        heading: "Phone Etiquette & the LARS Method",
        body: "Every inbound call opens with the approved script: 'Good [morning/afternoon], thank you for calling Interlace Studies. My name is [Name]. How may I assist you today?' Once the client explains their enquiry, use LARS: Listen (without interrupting), Acknowledge (confirm you've heard and understood), Respond (provide accurate, relevant information), and Summarise (recap key points and next steps)."
      },
      {
        heading: "The HEAT Technique for Difficult Clients",
        body: "When a client is upset: Hear them out without interrupting; Empathise genuinely with their feelings; Apologise for the situation (not the decision itself); and Take Action by clearly explaining next steps. Never argue or become defensive, never provide specific migration advice, never promise outcomes or processing times, never leave a client on hold more than 2 minutes without checking in, and never end a call abruptly."
      },
      {
        heading: "Written Communication Standards",
        body: "Every email needs a clear, specific subject line, the client's name in the salutation, a professional and accurate body (paragraphs, not bullet points, for formal correspondence), the standard company disclaimer, and a proper sign-off. The approved general enquiry template always directs clients needing specific advice to a MARA-registered migration agent."
      },
      {
        heading: "CRM Documentation",
        body: "Every client interaction must be logged in the CRM within 15 minutes of the call ending, recording: date & time, channel, client details (name, contact, nationality, current visa status), a brief enquiry summary, the information/guidance actually provided, any referrals made, agreed next steps, and whether follow-up is required (with date and nature if yes)."
      }
    ]
  },

  13: {
    intro: "This module covers the legal framework governing international education in Australia: the ESOS Act 2000, the National Code 2018, PRISMS, the frequently-misunderstood 6-month transfer rule, and the AQF.",
    sections: [
      {
        heading: "The ESOS Act 2000",
        body: "The Education Services for Overseas Students (ESOS) Act 2000 is the primary legislation governing education for international students, establishing provider registration and protecting students' rights — to receive the education paid for, to a refund if the provider cannot deliver, to a fair complaints process, and to be treated without discrimination."
      },
      {
        heading: "The National Code 2018 — Key Standards",
        body: "Standard 3 (Formalisation of Enrolment): the provider must give a written agreement before enrolment. Standard 7 (Transfer Between Providers): no transfer within the first 6 months of the principal course without a release letter, unless an exception applies. Standard 8 (Overseas Student Visa Requirements): the provider must monitor and report on attendance/progress, and must run an intervention strategy for at-risk students before reporting them. Standard 9: strict rules on deferral, suspension and cancellation. Standard 10: providers must have an accessible, fair complaints and appeals process — escalating to the Overseas Students Ombudsman if unresolved."
      },
      {
        heading: "The 6-Month Transfer Rule in Depth",
        body: "A provider must release a student before 6 months only if: the provider cannot deliver the course as agreed (provider default); the course is no longer CRICOS-registered; the student's welfare is at risk; or the student has been offered a place at a HIGHER AQF level. Critically, the 6-month period applies to the principal course — the highest AQF level course in a packaged enrolment — so completing a lower-level component (e.g. ELICOS) first does NOT reset the clock for the main course."
      },
      {
        heading: "PRISMS & Provider/Student Default",
        body: "PRISMS (Provider Registration and International Student Management System) is used to issue CoEs and report student compliance. A default or breach reported through PRISMS is automatically transmitted to the Department of Home Affairs and can trigger visa cancellation. A 'provider default' (unable to deliver a paid course) entitles the student to an equivalent course or refund via the Tuition Protection Service (TPS). A 'student default' (failing to commence, withdrawing, or being excluded) must be reported by the provider through PRISMS."
      },
      {
        heading: "AQF, CRICOS & Course Structures",
        body: "The Australian Qualifications Framework runs from Certificate I (Level 1) to Doctoral Degree (Level 10) — Diploma is Level 5, Bachelor is Level 7, Masters is Level 9. CRICOS is the official register of providers and courses approved for international students. A 'packaged CoE' covers linked courses (e.g. ELICOS then a Diploma) with the principal course being the highest AQF level in the package; a 'single CoE' covers just one course."
      }
    ]
  },

  14: {
    intro: "This module covers the DEPA counselling model, proven counselling questions, course pathway analysis for the most common career choices, and financial capacity evidence requirements.",
    sections: [
      {
        heading: "The DEPA Counselling Model",
        body: "Every counselling session follows: Discover (understand background, goals, current visa status), Explore (identify suitable course/visa options — 'have you considered...', 'are you aware of the PR pathway...'), Plan (develop a clear, step-by-step pathway with a timeline), and Act (identify immediate next steps and who is responsible for them). Questions should feel conversational, never like an interrogation."
      },
      {
        heading: "Proven Counselling Questions",
        body: "Background & Motivation: educational background, work experience, main goal (study/work/PR), current visa, previous Australian study. Course Selection: passion/industry interest, awareness of in-demand occupations, PR pathway awareness, budget, ability to study full-time, openness to regional study. PR Pathway: whether PR is the primary goal, points test awareness, family in Australia, partner's willingness to study/work, skills assessment status."
      },
      {
        heading: "Course Pathway Analysis",
        body: "Nursing: Diploma → Enrolled Nurse (limited PR, EN not on MLTSSL) vs Bachelor → Registered Nurse (strong PR, RN on MLTSSL, 485 + ANMAC assessment); AHPRA requires IELTS 7.0 in each band — higher than the standard student visa requirement. IT: Diploma or Bachelor/Master, all leading to a 485 visa and ACS skills assessment, with higher qualifications giving longer 485 duration and more points. Accounting: Diploma/Bachelor/Master, each leading to 485 + CPA/CAANZ/IPA membership. Commercial Cookery: Certificate III/IV, leading to Cook or Chef occupations via the TRA Job Ready Program. Social Work: Bachelor/Master, leading to 485 + AASW assessment."
      },
      {
        heading: "Financial Capacity Evidence",
        body: "For a Student Visa, the applicant must show genuine access to funds covering: living costs for the student (a set annual amount, updated periodically), living costs for a partner and each child, school costs for school-age children, travel costs, and first-year tuition (per the CoE). Acceptable evidence: bank statements (3–6 months), scholarship or loan approval letters, or evidence of annual income — never a verbal assurance alone."
      }
    ]
  },

  15: {
    intro: "This module covers the most common policy-accurate FAQs for the Subclass 500 (Student), Subclass 600 (Visitor), and Bridging Visas A, B and C.",
    sections: [
      {
        heading: "Subclass 600 (Visitor) Essentials",
        body: "Condition 8503 (No Further Stay), when imposed, blocks any further substantive visa application onshore — including a Student visa — forcing the holder to depart and apply offshore; waivers exist but are rarely granted. Condition 8101 (mandatory) bans all work. Condition 8201 allows study for up to 3 months only. The Sponsored Family stream (mandatory 8503) lets an Australian citizen/PR/eligible NZ citizen sponsor a relative to visit."
      },
      {
        heading: "Subclass 500 (Student) Core Conditions",
        body: "Condition 8105 caps work at 48 hours per fortnight while the course is in session (unlimited during scheduled breaks). Condition 8501 requires OSHC for the entire visa duration. Condition 8202 requires satisfactory course progress and at least 80% attendance. Condition 8534 blocks an onshore Partner visa (820) application. The Genuine Student requirement (replacing GTE) requires a statement showing genuine study intent, logical academic progression, and understanding of visa conditions. Only a partner and dependent children — never parents — can be secondary applicants."
      },
      {
        heading: "Bridging Visas A, B & C",
        body: "A Bridging Visa A (BVA) is automatically granted when a person on a valid substantive visa lodges another substantive visa application — it has NO travel rights and ceases if the holder departs without first obtaining a Bridging Visa B (BVB). A BVA also ceases when the underlying application is decided (though it continues through a merits review period if refused) or if cancelled. A Bridging Visa C (BVC) is for someone without a current substantive visa who has lodged a valid application; it has no work or travel rights by default."
      }
    ]
  },

  16: {
    intro: "This module covers the Subclass 485 (Temporary Graduate) visa and General Skilled Migration (189, 190, 491), including the points test that determines eligibility.",
    sections: [
      {
        heading: "Subclass 485 (Temporary Graduate)",
        body: "Requires the Australian Study Requirement: at least 92 weeks of CRICOS-registered study over no less than 16 calendar months, in English, while in Australia on a valid visa. Two streams: Post-Vocational Education Work (VET/Diploma graduates, requires a skills assessment in an MLTSSL occupation) and Post-Higher Education Work (Bachelor/Masters/PhD graduates, no skills assessment required). Duration varies by qualification — commonly 2 years for Bachelor/Masters, 3 years for Masters by Research/PhD, 18 months for Post-Vocational. Generally grantable only ONCE in a lifetime, with limited regional exceptions (which can add a further year). Age limit: under 50 at application. Full, unrestricted work rights throughout."
      },
      {
        heading: "General Skilled Migration — 189, 190, 491",
        body: "Subclass 189: points-tested, permanent, no nomination required. Subclass 190: points-tested, permanent, requires state/territory nomination (+5 points). Subclass 491: points-tested, provisional, requires state or eligible relative sponsorship in a regional area (+15 points), leading to the permanent Subclass 191 after 3 years of regional work meeting an income threshold. Minimum EOI score is 65 points, though actual invitation rounds are usually far more competitive. Age limit for invitation: under 45."
      },
      {
        heading: "The Points Test",
        body: "Age: up to 30 points (peak 25–32). English: 0 points for Competent (IELTS 6+), 10 for Proficient (7+), 20 for Superior (8+). Australian work experience: 5–20 points (1 to 8+ years). Overseas work experience: 0–15 points. Education: up to 20 points for an Australian PhD, 15 for a Bachelor/Masters. Regional study: +5. Professional Year Program: +5. Partner skills/citizenship: +5 to +10. State nomination (190): +5. State/relative sponsorship (491): +15."
      },
      {
        heading: "Skills Assessments by Occupation",
        body: "IT → Australian Computer Society (ACS). Nursing → ANMAC. Accounting → CPA Australia / CAANZ / IPA. Chef/Cook → Trades Recognition Australia (TRA) Job Ready Program. Engineering → Engineers Australia. Social Work → AASW. Skills assessments (e.g. from ACS) are typically valid for a limited period (e.g. 3 years) — always confirm current validity."
      }
    ]
  },

  17: {
    intro: "This module covers employer-sponsored visa FAQs from an education consultant's perspective, family and parent visa basics, the Section 48 bar, and — most importantly — exactly where general information ends and MARA-registered advice must begin.",
    sections: [
      {
        heading: "Employer-Sponsored Visas — What Consultants Should Know",
        body: "482: employer must pay at least the TSMIT or Annual Market Salary Rate, whichever is higher; SAF levy ~$1,200/year (small business); Labour Market Testing requires ~4 weeks of advertising; changing employers requires a new approved nomination, not the old employer's permission. 494: regional-only work/study/living requirement, breach risks cancellation. 407: training only, not a work-visa substitute, no direct PR pathway."
      },
      {
        heading: "The Section 48 Bar",
        body: "Section 48 of the Migration Act prevents someone who has had a visa refused or cancelled while in Australia from applying for most other visas while remaining in Australia, with very limited exceptions. This is one of the most consequential provisions to be aware of, as it can severely limit a client's onshore options — always flag it and refer to a MARA-registered agent."
      },
      {
        heading: "The MARA Advice Boundary",
        body: "Only a MARA-registered migration agent (or lawyer) may lawfully provide immigration assistance for a fee. Interlace Studies staff without MARA registration must refer clients requiring specific advice on their individual case to a registered agent — general factual information about visa conditions and processes is fine to share; case-specific strategy, document review, or predictions of outcome are not."
      },
      {
        heading: "Family & Parent Visas",
        body: "Partner visas run through the 820/801 (onshore) or 309/100 (offshore) pathway, generally requiring 12 months of de facto relationship (or a registered relationship). Parent visas: Subclass 103 has an extremely long queue (30+ years); Subclass 143 (Contributory) is much faster (2–3 years) but far more expensive. The 'balance of family test' requires at least half the applicant's children to be Australian citizens/PRs/eligible NZ citizens, or more children living in Australia than any other single country. The Subclass 870 (Sponsored Parent, Temporary) allows a temporary stay of up to 3–5 years, renewable to a 10-year total."
      }
    ]
  },

  18: {
    intro: "This module is mandatory for every Interlace Studies staff member. It covers the Code of Conduct, the Privacy and Data Protection Policy, the Whistleblower Protection Policy, and the Modern Slavery Policy — the ethical and legal foundation of how we operate.",
    sections: [
      {
        heading: "Code of Conduct",
        body: "Applies to everyone working for or representing Interlace Studies — employees, directors, officers, contractors, consultants, and volunteers — regardless of location or seniority. Core principles: act with honesty and integrity, treat everyone with respect, comply with the law and company policy, and protect the company's reputation and assets. Any actual, potential, or perceived conflict of interest must be declared immediately to a manager or HR. Gifts or entertainment must be declared if their value exceeds $100. Breaches can lead to counselling, formal warnings, or termination, with illegal acts reported to authorities."
      },
      {
        heading: "Privacy and Data Protection",
        body: "Personal information is collected lawfully and only as reasonably necessary; sensitive information (health, criminal records) requires explicit consent. Interlace Studies will never sell personal information to third parties. Data is stored securely and access is restricted on a need-to-know basis. A breach likely to cause serious harm is an 'Eligible Data Breach' under the Notifiable Data Breaches scheme, requiring notification to affected individuals and the OAIC. Employees must use secure passwords, lock screens when unattended, never share login credentials, and immediately report suspected breaches to IT and the Privacy Officer."
      },
      {
        heading: "Whistleblower Protection",
        body: "Eligible Whistleblowers include current and former employees/officers, contractors/consultants/suppliers (and their employees), associates, and their spouses/relatives/dependents. Reportable conduct includes fraud, corruption, illegal activity, and significant WHS breaches — but NOT personal grievances (use the Grievance Policy instead). Reports can go to the Whistleblower Protection Officer, a Director/Senior Executive, an auditor, or externally to ASIC/ATO, and can be made anonymously. Legal protections include identity confidentiality, protection from detriment, a right to compensation, and protection from civil/criminal/administrative liability. Breaching a whistleblower's confidentiality or retaliating against them carries severe disciplinary and legal consequences."
      },
      {
        heading: "Modern Slavery",
        body: "Modern slavery includes slavery, servitude, forced labour, debt bondage, human trafficking, and child labour. Interlace Studies takes a zero-tolerance approach and expects the same standard from all contractors, suppliers, and business partners, including due diligence on high-risk suppliers. Suspected breaches should be reported to a manager or via the Whistleblower Protection Policy."
      }
    ]
  },

  19: {
    intro: "This module is mandatory for every Interlace Studies staff member. It covers leave entitlements and attendance expectations, flexible work arrangements, superannuation, and the right to disconnect outside working hours.",
    sections: [
      {
        heading: "Leave and Attendance",
        body: "Full-time/part-time employees get 4 weeks paid annual leave per year (non-expiring; can be directed to take leave if balance exceeds 8 weeks). Personal/carer's leave is 10 days per year (pro-rata for part-time) — a medical certificate is needed for 2+ consecutive days or absences around a public holiday/weekend. Compassionate leave is 2 days (paid for FT/PT, unpaid for casuals). Family and domestic violence leave is 10 paid days per 12-month period for ALL employees including casuals, available upfront and handled confidentially. Parental leave is up to 12 months unpaid after 12 months' continuous service, with the right to request another 12 months. Unexpected absences must be phoned in as soon as practicable, ideally 2+ hours before the shift starts."
      },
      {
        heading: "Flexible Work Arrangements",
        body: "Eligible employees (12+ months service) include parents/carers of school-age-or-younger children, carers, people with disability, those 55+, pregnant employees, and those experiencing or supporting someone experiencing family violence. Requests must be in writing to the direct manager, with a written response (approval or refusal) provided within 21 days. Refusals must be on reasonable business grounds only (cost, impracticality, efficiency or customer service impact) with written reasons. Approved arrangements are typically subject to a trial period."
      },
      {
        heading: "Superannuation",
        body: "The statutory Superannuation Guarantee rate is 12% of Ordinary Time Earnings (OTE) as of 1 July 2025. Contributions are paid at least quarterly per ATO deadlines. Employees choose their own fund via a Standard Choice Form; if none is nominated, Interlace Studies requests their 'stapled' fund from the ATO, falling back to the company default fund if none exists. Salary sacrifice arrangements must be agreed in writing before the work is performed."
      },
      {
        heading: "Right to Disconnect",
        body: "Employees can refuse to monitor, read, or respond to work contact outside ordinary hours unless the refusal is unreasonable — assessed by the reason for contact, the disruption caused, any compensation for availability, the role's seniority, and personal circumstances. Managers must respect these boundaries, avoid non-urgent after-hours contact (using 'schedule send' where appropriate), and must never penalise an employee for reasonably exercising this right. Genuine emergencies or urgent client matters (for senior/client-facing roles compensated for this) are reasonable exceptions."
      }
    ]
  },

  20: {
    intro: "This module is mandatory for every Interlace Studies staff member. It covers Equal Employment Opportunity and Anti-Discrimination, Sexual Harassment and Bullying, and the Grievance and Complaints process.",
    sections: [
      {
        heading: "Equal Employment Opportunity & Anti-Discrimination",
        body: "Protected attributes include race, sex, gender identity, sexual orientation, age, disability, marital/relationship status, pregnancy, family/carer responsibilities, religion, political opinion, and trade union activity. Direct discrimination is treating someone less favourably because of a protected attribute; indirect discrimination is a seemingly neutral rule that disproportionately disadvantages a group with a protected attribute. Victimisation — penalising someone for making or supporting a discrimination complaint — is strictly prohibited."
      },
      {
        heading: "Sexual Harassment and Bullying",
        body: "Sexual harassment is unwelcome conduct of a sexual nature where a reasonable person would anticipate offence, humiliation, or intimidation — intent is irrelevant. The positive duty under the Sex Discrimination Act requires Interlace Studies to proactively eliminate such conduct, not just respond after the fact. Workplace bullying is repeated unreasonable behaviour creating a health and safety risk (e.g. intimidation, humiliating comments, malicious rumours, unreasonable exclusion). Reasonable management action — performance goals, constructive feedback, disciplinary process, directing duties — is explicitly NOT bullying. Breaches carry serious disciplinary consequences, with sexual assault or violence referred to police."
      },
      {
        heading: "Grievance and Complaints",
        body: "The resolution process runs: informal direct discussion → escalation to manager → formal written complaint to HR → investigation by an impartial investigator → outcome and action, communicated to both parties in writing. Guiding principles are fairness and impartiality, need-to-know confidentiality, timeliness, no victimisation for good-faith reports, and the right to a support person. If unresolved internally, an employee may escalate to the Fair Work Commission or the Australian Human Rights Commission. Malicious or vexatious complaints without factual basis can themselves lead to disciplinary action against the complainant."
      }
    ]
  },

  21: {
    intro: "This module is mandatory for every Interlace Studies staff member. It covers IT, Communications and Social Media use, Work Health and Safety, Psychosocial Safety, and the Drug and Alcohol policy.",
    sections: [
      {
        heading: "IT, Communications & Social Media",
        body: "Limited, reasonable personal use of company IT is fine if it doesn't interfere with work or breach policy — but confidential information must never go to a personal email account or unauthorised third party. On personal social media, never imply you speak for the company unless authorised, and never post confidential company, client, or student information. The company can monitor, log, and audit IT system use — there is no expectation of complete privacy. Report suspected phishing or malware to IT Support immediately; use strong passwords, lock your screen, and never share login credentials."
      },
      {
        heading: "Work Health and Safety",
        body: "Management must provide a safe work environment, safe systems of work, and adequate training and supervision. Employees must take reasonable care for their own and others' safety, and promptly report hazards, near misses, and injuries via the Incident Report Form. Risks are managed using the hierarchy of control measures, from most to least preferred: Elimination, Substitution, Isolation, Engineering, Administration, and Personal Protective Equipment (PPE) as the last resort."
      },
      {
        heading: "Psychosocial Safety",
        body: "Psychosocial hazards include high/low job demands, low job control, poor supervisor/co-worker support, lack of role clarity, poor change management, job insecurity, remote/isolated work, and intrusive surveillance. The risk management process is: Identify Hazards → Assess Risks → Control Risks (prioritising job design over individual coping strategies) → Review Controls. A confidential Employee Assistance Program (EAP) is available to all employees and their immediate family."
      },
      {
        heading: "Drug and Alcohol",
        body: "Employees must not consume, possess, or distribute illicit drugs, and must not be impaired by alcohol or drugs at work. Alcohol is only permitted at approved company events, consumed moderately and responsibly, with safe transport home always required. Prescription medication that may impair safe work must be flagged to a manager or HR (side effects only — not the underlying condition). If impairment is suspected, a manager should direct the employee to stop work, hold a private discussion with HR present, and arrange safe transport home. Dependency is treated primarily as a health issue, with EAP support and rehabilitation assistance encouraged."
      }
    ]
  },

  22: {
    intro: "This module covers the Employer Outreach team's playbook: the CAEP and HEAT standards used on cold calls to employers, CRM documentation discipline, and the sponsorship and DAMA knowledge you need to speak credibly with a business about hiring overseas talent.",
    sections: [
      {
        heading: "The Mission & the CAEP Standard",
        body: "The Employer Outreach team connects Australian employers advertising skilled roles with visa sponsorship to Interlace Studies' migration services. This is a sales and relationship role, not a legal-advice role — registered migration agents provide formal advice; outreach staff identify opportunities, build rapport, and connect employers to the right expert. Every interaction must follow CAEP: Courteous (polite, respectful of the employer's time), Accurate (verified information only — never guess, commit to finding out and following up), Empathetic (understand the employer's pain points before pitching), and Professional (represent Interlace Studies as a competent, reliable partner)."
      },
      {
        heading: "The Approved Call Script",
        body: "Before dialling, confirm: company name and advertised job title, the job portal the ad was seen on, the hiring manager's name if available, and that the CRM is open. The opening asks for the hiring manager by name, introduces yourself and Interlace Studies, and references the specific job ad. The pitch explains that Interlace Studies manages the entire sponsorship process end-to-end and asks whether the employer has sponsored before. The close books a no-obligation 15-minute call with a senior migration consultant — the outreach team's job is to book the appointment, not to close the sale itself."
      },
      {
        heading: "The HEAT Technique for Employer Objections",
        body: "When an employer objects (too expensive, too slow, too complicated, 'we tried before and it failed', 'just send me an email'), use HEAT: Hear them out fully, Empathise with the concern genuinely, Acknowledge the real constraint (e.g. government fees, regulatory complexity), and Take Action with a concrete next step — a cost breakdown, an explanation of how Interlace Studies' expertise minimises delays, or an offer to tailor a follow-up email to their specific need. This is a different sequence from the client-facing HEAT technique used elsewhere in the business (which apologises rather than acknowledges) — the outreach version is built specifically for overcoming employer sales objections."
      },
      {
        heading: "Written Communication & CRM Documentation",
        body: "Emails to employers need a clear, specific subject line, a formal salutation ('Dear Mr./Ms. [Last Name]' on first contact), no more than three short paragraphs stating purpose, key benefit, and a clear call to action, and the standard disclaimer that the communication does not constitute migration advice. Every call must be logged immediately using LARS: Log (date, time, duration, contact name/title, company), Action (what was discussed, objections raised), Result (outcome — appointment booked, email to send, not interested, callback), and Schedule (the next action and date)."
      },
      {
        heading: "The Three-Step Sponsorship Framework",
        body: "Explaining the pathway to employers means walking them through three sequential steps. Step 1 — Sponsorship: the business becomes a Standard Business Sponsor (SBS), a $420 approval valid for 5 years covering all future nominations, requiring evidence across four categories (lawful operation, financial viability, genuine need, compliance record). Step 2 — Nomination: the employer nominates a specific position for a specific worker, requiring Labour Market Testing (28+ days, 2+ platforms, within 4 months prior), TSMIT/market salary compliance, and the SAF levy. Step 3 — Visa Application: the worker applies, meeting health, character, English, and skills requirements."
      },
      {
        heading: "The Nomination — LMT, TSMIT, and the SAF Levy",
        body: "LMT is mandatory for the 482 Core Skills stream and the 494 visa (not for 482 Specialist Skills or 186 TRT). Ads must run 28+ consecutive days on 2+ platforms, in English, within 4 months prior to lodgement, and include job title, duties, salary, employer name, and location. TSMIT is the minimum annual base salary for a sponsored worker (indexed annually); the employer must pay the higher of the TSMIT or the market salary rate for the role and location. The SAF levy for a 482/494 nomination is $1,200/year (small business, turnover under $10M) or $1,800/year (large business) — and is refunded if the nomination is refused or withdrawn before a decision. The 186 SAF levy is structured differently: a one-time payment of $3,000 (small business) or $5,000 (large business)."
      },
      {
        heading: "Visa Comparison: 482, 186 & 494",
        body: "Subclass 482 (Skills in Demand): temporary, up to 4 years, three streams (Specialist Skills, Core Skills, Essential Skills — not yet operational), PR pathway via 186 TRT. Subclass 186 (Employer Nomination Scheme): permanent from grant; TRT stream requires 3 years on a 482 with the same employer; Direct Entry requires a skills assessment plus 3 years' relevant experience for workers who've never held a 482; generally under-45 with exemptions for high-income earners, university-nominated academics, and regional/remote medical practitioners. Subclass 494 (Skilled Employer Sponsored Regional): a 5-year provisional visa requiring the holder to live and work in a designated regional area — which includes most of Australia outside Sydney, Melbourne and Brisbane, such as Perth, Adelaide, Canberra, Hobart and Darwin — with a mandatory skills assessment and a Regional Certifying Body (RCB) assessment before nomination, leading to the permanent Subclass 191 after 3 years."
      },
      {
        heading: "DAMA — Designated Area Migration Agreements",
        body: "A DAMA is a formal agreement between the Australian Government and a state, territory, or regional authority (the Designated Area Representative, or DAR) that grants access to occupations beyond the standard skilled lists and concessions on age, English, salary, and skills-assessment requirements. There are 13 current DAMA regions across Australia. The framework has two tiers: Tier 1 is a 5-year Head Agreement between the Government and the DAR, setting region-wide terms; Tier 2 is a 5-year Individual Labour Agreement between the Government and a specific DAR-endorsed employer, allowing that employer to nominate workers under the DAMA's concessions. For an employer, the process is: confirm the business and occupation fall within a DAMA region, obtain DAR endorsement, then apply to the Department for the individual labour agreement."
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) { module.exports = { MANUALS }; }
