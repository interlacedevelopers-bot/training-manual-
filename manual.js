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
  }
};
