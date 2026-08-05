# Interlace Studies — Internal Training Platform

Welcome to the internal training academy for **Interlace Studies**. This platform provides interactive modules and assessments for staff to master Partner Visa requirements, Relationship Evidence, Refusals & Appeals, and overall Client Care.

## 📁 Architecture Overview

This platform is a modern, static-first web application designed for fast, seamless staff training across any device. 

```
/
├── index.html        ← Core Application View (UI/State handling)
├── app.js            ← Core Application Logic & State Management
├── manual.js         ← Training content structure and modules
├── questions.js      ← Assessment question bank
├── api/              ← Serverless functions (Auth, Staff Admin)
├── lib/              ← Shared utilities (Redis, Email)
└── assets/           ← Brand assets and imagery
```

## 🚀 Local Development

To run the application locally and test design changes:
1. Clone the repository: `git clone https://github.com/interlacedevelopers-bot/training-manual-.git`
2. Open `index.html` in any modern web browser.
3. No build tools are required for the frontend static files. 

## 🌐 Deployment & Access

The platform is designed to be deployed via a global edge network (e.g., Vercel) utilizing the `/api` directory for serverless authentication.
- **Production URL:** [Internal Interlace Portal]
- **Target Audience:** Internal staff only. 
- *Note: Ensure environmental variables for Redis (`UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`) and Email (`RESEND_API_KEY`) are configured in the production deployment environment.*

## 🎓 Training Structure

The academy is currently structured into 5 core modules:

| Module | Topic | Questions | Pass Mark |
|--------|-------|-----------|-----------|
| 1 | Visa Framework & Eligibility | 20 | 70% (14/20) |
| 2 | Relationship Evidence | 20 | 70% (14/20) |
| 3 | Refusals, Bars & Integrity | 20 | 70% (14/20) |
| 4 | Family Violence & ART Appeals | 20 | 70% (14/20) |
| 5 | Process, Fees & Client Care | 20 | 70% (14/20) |

**Certificate**: Issued automatically upon passing all 5 modules with a score of 70% or higher.

## ⚙️ Content Customisation

**Modifying Questions:** 
Open `questions.js` to modify or add new assessment items. Ensure you follow the established JSON object structure:
```javascript
{
  q: "Question text here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0,          // Index of correct answer
  explanation: "Detailed rationale.",
  law: "Legal citation",
  tag: "eligibility", 
  difficulty: "easy"  
}
```

**Design System:**
The UI strictly adheres to the **Interlace Design Principles**. Brand colors (`--brand-blue`, `--dark-navy`, `--bg-soft-blue`), typography (`Playfair Display`, `Poppins`), and squircle shapes (`border-radius: 12px`, `28px`) are defined centrally in `index.html`.

## 📋 Legal Disclaimer

This training system is based on:
- Migration Act 1958 (Cth)
- Migration Regulations 1994 (Cth) — Schedules 1–4
- Administrative Review Tribunal Act 2024
- F2024L00751 (Family Violence Provisions 2024)
- Department of Home Affairs Policy (PAM3)

*This system is for internal training only and does not constitute legal or migration advice. Migration law changes frequently.*

---
*Interlace Studies Pty Ltd | MARN 2418363 | interlace.com.au | 1300 365 423*
