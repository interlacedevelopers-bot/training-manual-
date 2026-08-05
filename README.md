# Interlace Studies — Staff Training Academy

Welcome to the internal training academy for **Interlace Studies**. This platform provides interactive modules and assessments for our staff to master Partner Visa requirements, Relationship Evidence, Refusals & Appeals, and overall Client Care.

Our training system follows the premium, client-focused design principles of [interlace.com.au](https://interlace.com.au/), ensuring a seamless and modern learning experience.

## 🚀 Local Development

To run the application locally and test design changes or new questions:

1. Clone the repository: `git clone https://github.com/interlacedevelopers-bot/training-manual-.git`
2. Open a terminal in the project folder and start a local HTTP server:
   ```bash
   python -m http.server 55
   ```
3. Open `http://localhost:55` in your modern web browser.
4. No complex build tools are required for the frontend static files.

## 🎨 Design System

The UI strictly adheres to the **Interlace Design Principles**:
- **Brand Colors:** Interlace Blue (`#0050C9`), Accent Sky Blue (`#066aab`), Dark Navy (`#133149`).
- **Typography:** `Playfair Display` for major headings and a premium feel; `Poppins` for highly legible UI elements and body text.
- **Button Styling:** Modern "rounded-pill" buttons (`border-radius: 50px`) matching our primary website's CTAs.

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
