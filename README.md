# Interlace Studies — Partner Visa Training Academy
## Deployment Guide

---

## 📁 Files in this package

```
training_app/
├── index.html        ← Main app (open this file)
├── questions.js      ← All 100 questions across 5 modules
├── app.js            ← Application logic
└── README.md         ← This file
```

---

## 🚀 Option 1: Zero-install local use (fastest)

**Double-click `index.html`** — opens directly in any web browser.
No server, no internet, no installation required.

---

## 🌐 Option 2: Deploy to GitHub Pages (free, shareable URL)

1. Create a free account at [github.com](https://github.com)
2. Click **New repository** → name it `interlace-training`
3. Upload all 3 files (index.html, questions.js, app.js)
4. Go to **Settings → Pages → Source: main branch → root**
5. Your URL: `https://[your-username].github.io/interlace-training`

Share this URL with all staff — works on phones, tablets, and computers.

---

## 🌐 Option 3: Deploy to Netlify (free, 1 click)

1. Go to [netlify.com](https://netlify.com) and sign up free
2. Drag the entire `training_app` folder onto the Netlify dashboard
3. Netlify gives you a shareable URL instantly (e.g. `interlace-training.netlify.app`)
4. Custom domain available in Netlify settings

---

## 🌐 Option 4: Vercel (free, fast CDN)

1. Go to [vercel.com](https://vercel.com) and sign up free
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the `training_app` folder
4. Done — instant global deployment

---

## 📱 Browser compatibility

Tested and working in:
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅  
- Edge 90+ ✅
- Mobile Chrome/Safari ✅

---

## 🎓 Training Structure

| Module | Topic | Questions | Pass Mark |
|--------|-------|-----------|-----------|
| 1 | Visa Framework & Eligibility | 20 | 70% (14/20) |
| 2 | Relationship Evidence | 20 | 70% (14/20) |
| 3 | Refusals, Bars & Integrity | 20 | 70% (14/20) |
| 4 | Family Violence & ART Appeals | 20 | 70% (14/20) |
| 5 | Process, Fees & Client Care | 20 | 70% (14/20) |

**Certificate**: Issued automatically upon passing all 5 modules.

---

## ⚙️ Customisation

**Adding/editing questions**: Open `questions.js` in any text editor.
Each question follows this structure:
```javascript
{
  q: "Question text here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0,          // Index of correct answer (0=A, 1=B, etc.)
  explanation: "Why this is the correct answer.",
  law: "Legal citation — e.g. Migration Act 1958 s.48",
  tag: "eligibility", // eligibility | evidence | refusal | integrity | fv | process
  difficulty: "easy"  // easy | medium | hard
}
```

**Changing pass mark**: In `questions.js`, update `passmark: 70` on each module.

**Changing branding**: In `index.html`, update company name, MARN, and colour variables in the `:root` CSS block.

---

## 📋 Legal Disclaimer

This training system is based on:
- Migration Act 1958 (Cth)
- Migration Regulations 1994 (Cth) — Schedules 1–4
- Administrative Review Tribunal Act 2024
- F2024L00751 (Family Violence Provisions 2024)
- Department of Home Affairs Policy (PAM3)

**Migration law changes frequently. Always verify provisions at immi.homeaffairs.gov.au before advising clients.**

This system is for internal training only and does not constitute legal or migration advice.

---

*Interlace Studies Pty Ltd | MARN 2418363 | interlace.com.au | 1300 365 423*
