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
  }
};
