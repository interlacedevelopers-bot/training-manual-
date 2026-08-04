// ═══════════════════════════════════════════════════════════════════
// INTERLACE STUDIES — PARTNER VISA TRAINING ACADEMY
// Application Logic — v3.0
// ═══════════════════════════════════════════════════════════════════

const MAX_ATTEMPTS = 3;
const SESSION_KEY = 'interlace_session_token';
const ADMIN_TOKEN_KEY = 'interlace_admin_token';

const MODULE_GROUPS = [
  { label: 'Partner Visa (Migration Consultant / Branch Manager)', ids: [1,2,3,4,5,11] },
  { label: 'Sales & Client Relations', ids: [6,7,8,9,10] },
  { label: 'Education Consultant', ids: [12,13,14,15,16,17] },
  { label: 'Company Policy (mandatory for all)', ids: [18,19,20,21] },
];
const ROLE_DEFAULT_MODULES = {
  'Migration Consultant': [1,2,3,4,5,11,18,19,20,21],
  'Branch Manager': [1,2,3,4,5,11,18,19,20,21],
  'Sales & Client Relations': [6,7,8,9,10,18,19,20,21],
  'Education Consultant': [12,13,14,15,16,17,18,19,20,21],
  'Policy Only': [18,19,20,21],
  'None': [],
};

// Role-based access: which staff roles see which training track, and how
// the certificate should describe that track.
const TRACKS = {
  'Migration Consultant': {
    programName: 'Australian Partner Visa Training Programme',
    academyName: 'Partner Visa Training Academy',
    bodyText: 'demonstrating comprehensive knowledge of partner visa law, evidence requirements, compliance obligations, and client advisory best practices as governed by the <em>Migration Act 1958</em> and <em>Migration Regulations 1994</em>.'
  },
  'Branch Manager': {
    programName: 'Australian Partner Visa Training Programme',
    academyName: 'Partner Visa Training Academy',
    bodyText: 'demonstrating comprehensive knowledge of partner visa law, evidence requirements, compliance obligations, and client advisory best practices as governed by the <em>Migration Act 1958</em> and <em>Migration Regulations 1994</em>.'
  },
  'Sales & Client Relations': {
    programName: 'Sales &amp; Client Engagement Training Programme',
    academyName: 'Sales &amp; Client Relations Academy',
    bodyText: 'demonstrating comprehensive knowledge of compliant lead generation, client engagement, CRM discipline, and the OMARA Green Line / Red Line compliance boundary.'
  },
  'Education Consultant': {
    programName: 'Education &amp; Migration Consultancy Training Programme',
    academyName: 'Education Consultant Academy',
    bodyText: 'demonstrating comprehensive knowledge of call centre communication standards, the ESOS Act and National Code, career counselling and course pathways, and policy-accurate visa product knowledge across the student, graduate, skilled migration, employer-sponsored, and family visa categories.'
  },
};
function getMyModules() {
  const assigned = STATE.assignedModules || [];
  return MODULES.filter(m => assigned.includes(m.id));
}
function getTrackInfo() {
  return TRACKS[STATE.user.role] || { programName: 'Staff Training Programme', academyName: 'Staff Training Academy' };
}
function moduleLabel(modId) {
  const idx = getMyModules().findIndex(m => m.id === modId);
  return idx >= 0 ? `Module ${idx+1}` : `Module`;
}

// ── State ────────────────────────────────────────────────────────
const STATE = {
  user: { firstName:'', lastName:'', role:'', branch:'', email:'', mobile:'' },
  assignedModules: [],    // module ids the admin has granted this staff member
  moduleResults: {},     // { modId: {score, total, pct, passed, time, attemptNumber, answers} }
  moduleMeta: {},         // { modId: {attempts, studyTimeSec, passed} }
  lmsLocked: false,
  lockedInfo: null,

  pendingLoginEmail: null,
  adminToken: null,

  currentModule: null,    // shuffled question set for the in-progress attempt
  currentModuleId: null,
  currentQ: 0,
  answers: [],
  startTime: null,
  timer: null,

  pendingManualModId: null,
  manualSessionElapsed: 0,
  manualTimerHandle: null,
};

// ── Utilities ────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const show = s => { document.querySelectorAll('.screen').forEach(el=>el.classList.remove('active')); $(s).classList.add('active'); window.scrollTo(0,0); };
const initials = (f, l) => ((f[0]||'') + (l[0]||'')).toUpperCase() || 'IS';

function shuffle(arr) {
  const a = [...arr];
  for (let i=a.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function shuffleQuestions(questions) {
  return shuffle(questions).map(q => {
    const idxs = shuffle(q.options.map((_,i)=>i));
    return { ...q, options: idxs.map(i=>q.options[i]), answer: idxs.indexOf(q.answer) };
  });
}

function fmtTime(secs) {
  secs = Math.max(0, Math.round(secs||0));
  const h = Math.floor(secs/3600);
  const m = Math.floor((secs%3600)/60);
  const s = secs%60;
  if (h > 0) return `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  return `${m}:${s.toString().padStart(2,'0')}`;
}

function certId(user) {
  const d = new Date();
  const yr = d.getFullYear();
  const n = Math.floor(Math.random()*9000)+1000;
  return `IS-PV-${yr}-${n}`;
}

function fmtDate(d) {
  return new Date(d).toLocaleDateString('en-AU', {day:'numeric',month:'long',year:'numeric'});
}

// ── Server API helpers ───────────────────────────────────────────
function getSessionToken() { return localStorage.getItem(SESSION_KEY); }
function setSessionToken(t) { if (t) localStorage.setItem(SESSION_KEY, t); else localStorage.removeItem(SESSION_KEY); }
function getAdminToken() { return sessionStorage.getItem(ADMIN_TOKEN_KEY); }
function setAdminToken(t) { if (t) sessionStorage.setItem(ADMIN_TOKEN_KEY, t); else sessionStorage.removeItem(ADMIN_TOKEN_KEY); }

async function apiPost(url, body, headers) {
  const res = await fetch(url, { method:'POST', headers: {'Content-Type':'application/json', ...(headers||{})}, body: JSON.stringify(body||{}) });
  const data = await res.json().catch(()=>({}));
  if (!res.ok) { const err = new Error(data.message || data.error || 'Request failed'); err.code = data.error; err.status = res.status; throw err; }
  return data;
}
async function apiGet(url, headers) {
  const res = await fetch(url, { headers: headers||{} });
  const data = await res.json().catch(()=>({}));
  if (!res.ok) { const err = new Error(data.message || data.error || 'Request failed'); err.code = data.error; err.status = res.status; throw err; }
  return data;
}

function applyStaffRecord(rec) {
  STATE.user = { firstName: rec.firstName||'', lastName: rec.lastName||'', role: rec.role||'', branch: rec.branch||'', email: rec.email||'', mobile: rec.mobile||'' };
  STATE.assignedModules = rec.assignedModules || [];
  STATE.moduleResults = rec.moduleResults || {};
  STATE.moduleMeta = rec.moduleMeta || {};
  STATE.lmsLocked = !!rec.lmsLocked;
  STATE.lockedInfo = rec.lockedInfo || null;

  const ini = initials(STATE.user.firstName, STATE.user.lastName);
  ['tb-avatar','q-avatar'].forEach(id => { const el = $(id); if (el) el.textContent = ini; });
  ['tb-name','q-name'].forEach(id => { const el = $(id); if (el) el.textContent = `${STATE.user.firstName} ${STATE.user.lastName}`; });
}

async function syncToServer() {
  const token = getSessionToken();
  if (!token) return;
  try {
    await apiPost('/api/training/save', {
      moduleResults: STATE.moduleResults,
      moduleMeta: STATE.moduleMeta,
      lmsLocked: STATE.lmsLocked,
      lockedInfo: STATE.lockedInfo,
    }, { 'X-Session-Token': token });
  } catch (e) { console.error('Sync to server failed', e); }
}

// ── SCREEN 1: Staff Sign-In (email + one-time code) ──────────────
async function requestOtp() {
  const email = $('login-email').value.trim().toLowerCase();
  if (!email || !email.includes('@')) { alert('Please enter a valid work email address.'); return; }

  const btn = $('btn-request-otp');
  btn.disabled = true; btn.textContent = 'Sending…';
  try {
    await apiPost('/api/auth/request-otp', { email });
    STATE.pendingLoginEmail = email;
    $('otp-sent-to').textContent = email;
    $('login-step-email').style.display = 'none';
    $('login-step-otp').style.display = 'block';
    $('otp-code').value = '';
    $('otp-code').focus();
  } catch (e) {
    alert(e.message || 'Could not send a verification code.');
  } finally {
    btn.disabled = false; btn.textContent = '📧 Send Verification Code';
  }
}

function backToEmailStep() {
  $('login-step-otp').style.display = 'none';
  $('login-step-email').style.display = 'block';
}

// ── Landing portal menu (Staff vs Administrator) ─────────────────
function showStaffLogin() {
  $('landing-portal-menu').style.display = 'none';
  $('landing-staff-card').style.display = 'block';
  $('login-step-otp').style.display = 'none';
  $('login-step-email').style.display = 'block';
  $('login-email').focus();
}

function backToPortalMenu() {
  $('landing-staff-card').style.display = 'none';
  $('landing-portal-menu').style.display = 'grid';
}

async function verifyOtp() {
  const code = $('otp-code').value.trim();
  if (!code) { alert('Please enter the 6-digit code from your email.'); return; }

  const btn = $('btn-verify-otp');
  btn.disabled = true; btn.textContent = 'Verifying…';
  try {
    const data = await apiPost('/api/auth/verify-otp', { email: STATE.pendingLoginEmail, code });
    setSessionToken(data.token);
    applyStaffRecord(data.staff);
    renderModules();
    show('screen-modules');
  } catch (e) {
    alert(e.message || 'Incorrect or expired code.');
  } finally {
    btn.disabled = false; btn.textContent = '✅ Verify & Continue';
  }
}

async function resendOtp() {
  if (!STATE.pendingLoginEmail) return;
  try {
    await apiPost('/api/auth/request-otp', { email: STATE.pendingLoginEmail });
    alert('A new code has been sent.');
  } catch (e) {
    alert(e.message || 'Could not resend the code.');
  }
}

async function tryAutoLogin() {
  const token = getSessionToken();
  if (!token) return false;
  try {
    const data = await apiGet('/api/training/state', { 'X-Session-Token': token });
    applyStaffRecord(data.staff);
    renderModules();
    show('screen-modules');
    return true;
  } catch (e) {
    setSessionToken(null);
    return false;
  }
}

function logout() {
  setSessionToken(null);
  location.reload();
}

// ── SCREEN 2: Module Selection ────────────────────────────────────
function renderModules() {
  const lockContainer = $('lockout-container');
  const progressWrap = $('overall-progress-wrap');
  const list = $('modules-list');
  const existingBanner = document.getElementById('cert-unlock-banner');

  if (STATE.lmsLocked) {
    if (existingBanner) existingBanner.remove();
    progressWrap.style.display = 'none';
    list.style.display = 'none';
    list.innerHTML = '';
    const info = STATE.lockedInfo;
    const lockedMod = info ? MODULES.find(m => m.id === info.moduleId) : null;
    lockContainer.innerHTML = `
      <div class="lockout-card">
        <div class="lock-icon">🔒</div>
        <h2>Training Access Locked</h2>
        <p>You used all ${MAX_ATTEMPTS} attempts on <strong>Module ${info?.moduleId}: ${lockedMod?.title||''}</strong> without reaching the required 100% pass mark.</p>
        <p>Please contact your training administrator to have your record reset before continuing.</p>
      </div>
    `;
    $('tb-progress').textContent = 'LOCKED';
    return;
  }

  progressWrap.style.display = '';
  list.style.display = '';
  lockContainer.innerHTML = '';
  list.innerHTML = '';

  const myModules = getMyModules();
  const total = myModules.length;

  if (total === 0) {
    progressWrap.style.display = 'none';
    list.style.display = 'none';
    lockContainer.innerHTML = `
      <div class="empty-state">
        <svg class="empty-mark" viewBox="0 0 64 20" aria-hidden="true">
          <line x1="10" y1="10" x2="54" y2="10" stroke="var(--slate)" stroke-width="2" stroke-dasharray="1 7" stroke-linecap="round" opacity="0.5"/>
          <circle cx="10" cy="10" r="8" fill="var(--paper)" stroke="var(--slate)" stroke-width="2"/>
          <circle cx="32" cy="10" r="8" fill="var(--paper)" stroke="var(--slate)" stroke-width="2"/>
          <circle cx="54" cy="10" r="8" fill="var(--paper)" stroke="var(--slate)" stroke-width="2"/>
        </svg>
        <h2>No modules assigned yet</h2>
        <p>Your administrator has not yet assigned any training modules to your account.</p>
        <p>Please contact your training administrator.</p>
      </div>
    `;
    $('tb-progress').textContent = '—';
    return;
  }

  const done = myModules.filter(m => STATE.moduleMeta[m.id]?.passed).length;
  const pct = Math.round((done/total)*100);

  $('overall-bar').style.width = pct + '%';
  $('overall-pct').textContent = pct + '%';
  $('tb-progress').textContent = `${done} / ${total} Complete`;

  let completeCount = 0;
  let hasInProgress = false;

  myModules.forEach((mod, idx) => {
    const res = STATE.moduleResults[mod.id];
    const meta = STATE.moduleMeta[mod.id] || { attempts:0, studyTimeSec:0, passed:false };
    const passed = !!meta.passed;
    const attempted = !!res;
    if (passed) completeCount++;
    else if (attempted) hasInProgress = true;

    const row = document.createElement('div');
    row.className = 'path-row';

    const node = document.createElement('div');
    node.className = `path-node${passed ? ' complete' : attempted ? ' in-progress' : ''}`;
    node.textContent = String(idx + 1);
    node.setAttribute('aria-hidden', 'true');

    const card = document.createElement('div');
    card.className = `mod-card${passed ? ' completed' : ''}`;

    let statusBadge = '';
    if (passed) statusBadge = '<span class="status-badge done">Passed</span>';
    else if (attempted) statusBadge = `<span class="status-badge progress">Attempt ${meta.attempts}/${MAX_ATTEMPTS}</span>`;

    card.innerHTML = `
      ${statusBadge}
      <div class="mod-num">Module ${idx+1} of ${total}</div>
      <h3>${mod.title}</h3>
      <p>${mod.description}</p>
      <div class="mod-meta">
        <span class="meta-pill teal">${mod.questions.length} Questions</span>
        <span class="meta-pill gold">Pass ${mod.passmark}%</span>
        ${passed ? `<span class="meta-pill green">Score ${res.pct}%</span>` : ''}
      </div>
    `;
    card.onclick = () => openManual(mod.id);

    row.appendChild(node);
    row.appendChild(card);
    list.appendChild(row);
  });

  const fillFraction = Math.min(1, (completeCount + (hasInProgress ? 0.5 : 0)) / total);
  list.style.setProperty('--thread-fill', (fillFraction * 100) + '%');

  if (done === total) {
    const banner = document.createElement('div');
    banner.id = 'cert-unlock-banner';
    banner.className = 'seal-banner';
    banner.innerHTML = `
      <svg class="seal-mark" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="29" fill="none" stroke="var(--interlace-deep)" stroke-width="2"/>
        <circle cx="32" cy="32" r="21" fill="none" stroke="var(--interlace-sky)" stroke-width="2"/>
        <text x="32" y="39" text-anchor="middle" font-family="Playfair Display, serif" font-weight="800" font-size="17" fill="var(--interlace-deep)">IS</text>
      </svg>
      <h3>All modules complete</h3>
      <p>You have passed all ${total} training modules with a 100% score. Your certificate is ready.</p>
      <button onclick="showCert()" class="seal-cta">View Your Certificate</button>
    `;
    $('modules-list').before(banner);
  }
}

function goToModules() {
  clearInterval(STATE.timer);
  renderModules();
  show('screen-modules');
}

// ── SCREEN 2b: Study Manual ───────────────────────────────────────
function renderManual(modId) {
  const mod = MODULES.find(m => m.id === modId);
  const man = MANUALS[modId];
  const meta = STATE.moduleMeta[modId];
  const alreadyPassed = !!meta?.passed;

  const sectionsHtml = man.sections.map((s, i) => `
    <div class="manual-section">
      <h3><span class="manual-num">${i+1}</span> ${s.heading}</h3>
      <p>${s.body}</p>
    </div>
  `).join('');

  const footerHtml = alreadyPassed
    ? `<div class="manual-footer-bar">
         <span class="manual-footer-note">✅ You already passed this module with 100%. You're reviewing it for revision only.</span>
         <button class="btn-primary" onclick="exitManual()">← Back to Modules</button>
       </div>`
    : `<div class="manual-footer-bar">
         <span class="manual-footer-note">📖 Read the material above before attempting the assessment. Your study time is recorded and will appear on your certificate.</span>
         <button class="btn-gold" onclick="beginAssessment()">✅ &nbsp;I've Studied This — Begin Assessment</button>
       </div>`;

  $('manual-wrap').innerHTML = `
    <div class="manual-title-row"><h2>${mod.icon} ${moduleLabel(mod.id)}: ${mod.title} — Study Manual</h2></div>
    <div class="manual-intro">${man.intro}</div>
    ${sectionsHtml}
    ${footerHtml}
  `;
}

function openManual(modId) {
  if (STATE.lmsLocked) { renderModules(); show('screen-modules'); return; }
  const mod = getMyModules().find(m => m.id === modId);
  if (!mod) return;

  STATE.pendingManualModId = modId;
  $('manual-top-module').textContent = `${moduleLabel(mod.id)}: ${mod.title}`;
  renderManual(modId);

  STATE.manualSessionElapsed = 0;
  $('manual-timer').textContent = '⏱ 0:00';
  clearInterval(STATE.manualTimerHandle);
  STATE.manualTimerHandle = setInterval(() => {
    STATE.manualSessionElapsed++;
    $('manual-timer').textContent = '⏱ ' + fmtTime(STATE.manualSessionElapsed);
  }, 1000);

  renderWatermark();
  show('screen-manual');
}

function commitManualTime() {
  clearInterval(STATE.manualTimerHandle);
  const modId = STATE.pendingManualModId;
  if (modId == null) return;
  if (!STATE.moduleMeta[modId]) STATE.moduleMeta[modId] = { attempts:0, studyTimeSec:0, passed:false };
  STATE.moduleMeta[modId].studyTimeSec += (STATE.manualSessionElapsed || 0);
  STATE.manualSessionElapsed = 0;
  syncToServer();
}

function exitManual() {
  commitManualTime();
  goToModules();
}

function beginAssessment() {
  const modId = STATE.pendingManualModId;
  commitManualTime();
  startModule(modId);
}

// ── SCREEN 3: Quiz ────────────────────────────────────────────────
function startModule(modId) {
  if (STATE.lmsLocked) { renderModules(); show('screen-modules'); return; }
  const mod = getMyModules().find(m => m.id === modId);
  if (!mod) return;

  STATE.currentModule = { ...mod, questions: shuffleQuestions(mod.questions) };
  STATE.currentModuleId = modId;
  STATE.currentQ = 0;
  STATE.answers = new Array(STATE.currentModule.questions.length).fill(null);
  STATE.startTime = Date.now();

  clearInterval(STATE.timer);
  STATE.timer = setInterval(() => {
    const secs = Math.floor((Date.now() - STATE.startTime) / 1000);
    const el = document.getElementById('quiz-timer');
    if (el) el.textContent = '⏱ ' + fmtTime(secs);
  }, 1000);

  $('quiz-top-module').textContent = `${moduleLabel(mod.id)}: ${mod.title}`;
  $('sidebar-mod-name').textContent = mod.title;

  renderNavList();
  renderQuestion();
  renderWatermark();
  show('screen-quiz');
}

function renderNavList() {
  const mod = STATE.currentModule;
  const nav = $('q-nav-list');
  nav.innerHTML = '';
  mod.questions.forEach((q, i) => {
    const ans = STATE.answers[i];
    let cls = 'q-nav-item';
    if (i === STATE.currentQ) cls += ' active';
    if (ans !== null) {
      cls += ans.correct ? ' correct' : ' wrong';
    }
    const dot = document.createElement('div');
    dot.className = cls;
    dot.innerHTML = `<div class="q-dot">${i+1}</div><span>Q${i+1}</span>`;
    dot.onclick = () => { STATE.currentQ = i; renderQuestion(); renderNavList(); };
    nav.appendChild(dot);
  });

  const answered = STATE.answers.filter(a=>a!==null).length;
  const correct = STATE.answers.filter(a=>a?.correct).length;
  $('sb-answered').textContent = `${answered}/${mod.questions.length}`;
  $('sb-correct').textContent = correct;
  $('sb-score').textContent = answered > 0 ? `${Math.round((correct/answered)*100)}%` : '—';
}

function renderQuestion() {
  const mod = STATE.currentModule;
  const qi = STATE.currentQ;
  const q = mod.questions[qi];
  const total = mod.questions.length;
  const ans = STATE.answers[qi];
  const isAnswered = ans !== null;

  const pct = Math.round(((qi+1)/total)*100);
  const main = $('quiz-main');

  const tagMap = {
    eligibility:'eligibility', evidence:'evidence', refusal:'refusal',
    integrity:'integrity', fv:'fv', process:'process',
    compliance:'compliance', product:'product', leadgen:'leadgen',
    engagement:'engagement', crm:'crm', conduct:'conduct',
    sponsor:'sponsor', callcentre:'callcentre', esos:'esos',
    counselling:'counselling', skilled:'skilled', family:'family',
    governance:'governance', employment:'employment', respect:'respect', itwhs:'itwhs'
  };
  const tagClass = tagMap[q.tag] || 'process';
  const tagLabels = {
    eligibility:'Eligibility', evidence:'Evidence', refusal:'Refusal Grounds',
    integrity:'Integrity / PIC 4020', fv:'Family Violence / ART', process:'Process & Obligations',
    compliance:'Compliance & Legal', product:'Visa Product Knowledge', leadgen:'Lead Generation',
    engagement:'Client Engagement', crm:'CRM & Operations', conduct:'Code of Conduct',
    sponsor:'Employer Sponsorship', callcentre:'Call Centre Skills', esos:'ESOS & Education Policy',
    counselling:'Career Counselling', skilled:'Skilled Migration', family:'Family & Compliance',
    governance:'Governance & Ethics', employment:'Employment Conditions', respect:'Respect & Equality', itwhs:'IT, WHS & Wellbeing'
  };

  const diffClass = q.difficulty === 'easy' ? 'diff-easy' : q.difficulty === 'medium' ? 'diff-med' : 'diff-hard';
  const diffLabel = q.difficulty === 'easy' ? 'Foundational' : q.difficulty === 'medium' ? 'Intermediate' : 'Advanced';

  // Build options HTML — never reveal the correct option when the selected answer is wrong
  let optionsHtml = '';
  const letters = ['A','B','C','D','E'];
  q.options.forEach((opt, i) => {
    let cls = 'option-btn';
    if (isAnswered) {
      if (ans.correct) {
        cls += (i === q.answer) ? ' correct' : ' dimmed';
      } else {
        cls += (i === ans.selected) ? ' wrong' : ' dimmed';
      }
    } else if (ans?.selected === i) cls += ' selected';
    optionsHtml += `
      <button class="${cls}" onclick="selectAnswer(${i})" ${isAnswered?'disabled':''}>
        <span class="option-letter">${letters[i]}</span>
        <span>${opt}</span>
      </button>
    `;
  });

  // Feedback — explanation & correct answer are withheld on an incorrect response
  let feedbackHtml = '';
  if (isAnswered) {
    if (ans.correct) {
      feedbackHtml = `
        <div class="feedback-box correct show">
          <div class="feedback-icon">✅</div>
          <div class="feedback-title">Correct! Well done.</div>
          <div class="feedback-text">${q.explanation}</div>
          ${q.law ? `<div class="feedback-law">⚖️ ${q.law}</div>` : ''}
        </div>
      `;
    } else {
      feedbackHtml = `
        <div class="feedback-box wrong show">
          <div class="feedback-icon">❌</div>
          <div class="feedback-title">Incorrect</div>
          <div class="feedback-text">The correct answer and explanation will be shown in your module review once you complete all ${total} questions.</div>
        </div>
      `;
    }
  }

  let remarkHtml = '';
  if (qi === 0 && !isAnswered) {
    remarkHtml = `
      <div class="remark-card">
        <h4>📚 Module Overview</h4>
        <p>This module covers <strong>${mod.title}</strong>. ${mod.description}.
        Pass mark: <strong>${mod.passmark}%</strong> — every question must be correct. Read each question carefully — migration law is precise.</p>
      </div>
    `;
  }

  const prevBtn = qi > 0 ? `<button class="btn-secondary" onclick="prevQ()">← Previous</button>` : '';
  let nextBtn = '';
  if (isAnswered) {
    if (qi < total - 1) {
      nextBtn = `<button class="btn-primary" onclick="nextQ()">Next Question →</button>`;
    } else {
      nextBtn = `<button class="btn-gold" onclick="finishModule()">🏁 &nbsp; Complete Module</button>`;
    }
  } else {
    nextBtn = `<button class="btn-primary" disabled>Select an answer to continue</button>`;
  }

  main.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-progress-wrap">
        <div class="quiz-progress-label">Question ${qi+1} of ${total}</div>
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="timer-pill" id="quiz-timer">⏱ 0:00</div>
    </div>

    ${remarkHtml}

    <div class="question-card">
      <div class="q-eyebrow">
        <span class="q-tag ${tagClass}">${tagLabels[q.tag]||q.tag}</span>
        <span class="q-difficulty ${diffClass}"><span class="diff-dot"></span>${diffLabel}</span>
        <span class="q-num-badge">Q${qi+1}/${total}</span>
      </div>
      <div class="question-text">${q.q}</div>
      ${q.law ? `<div class="law-cite">⚖️ Relevant: ${q.law}</div>` : ''}
      <div class="options-list">${optionsHtml}</div>
      ${feedbackHtml}
    </div>

    <div class="quiz-actions">
      ${prevBtn}
      ${nextBtn}
    </div>
  `;
}

function selectAnswer(optionIndex) {
  const q = STATE.currentModule.questions[STATE.currentQ];
  const correct = optionIndex === q.answer;
  STATE.answers[STATE.currentQ] = {
    selected: optionIndex,
    correct,
    time: Date.now()
  };
  renderQuestion();
  renderNavList();
}

function nextQ() {
  if (STATE.currentQ < STATE.currentModule.questions.length - 1) {
    STATE.currentQ++;
    renderQuestion();
    renderNavList();
    $('quiz-main').scrollTop = 0;
    window.scrollTo(0,0);
  }
}

function prevQ() {
  if (STATE.currentQ > 0) {
    STATE.currentQ--;
    renderQuestion();
    renderNavList();
    window.scrollTo(0,0);
  }
}

// ── SCREEN 4: Module Results ──────────────────────────────────────
function finishModule() {
  clearInterval(STATE.timer);
  const mod = STATE.currentModule;
  const modId = mod.id;
  const answers = STATE.answers;
  const totalQ = mod.questions.length;
  const correct = answers.filter(a=>a?.correct).length;
  const pct = Math.round((correct/totalQ)*100);
  const passed = pct >= mod.passmark;
  const timeSecs = Math.round((Date.now() - STATE.startTime)/1000);

  if (!STATE.moduleMeta[modId]) STATE.moduleMeta[modId] = { attempts:0, studyTimeSec:0, passed:false };
  const meta = STATE.moduleMeta[modId];
  const wasAlreadyPassed = meta.passed;
  let justLocked = false;

  if (!wasAlreadyPassed) {
    meta.attempts += 1;
    if (passed) {
      meta.passed = true;
    } else if (meta.attempts >= MAX_ATTEMPTS) {
      STATE.lmsLocked = true;
      STATE.lockedInfo = { moduleId: modId, date: new Date().toISOString() };
      justLocked = true;
    }
  }

  STATE.moduleResults[modId] = {
    score: correct, total: totalQ, pct, passed,
    time: timeSecs,
    attemptNumber: meta.attempts,
    answers: [...answers]
  };
  syncToServer();

  let medal = pct >= 90 ? '🏆' : pct >= 80 ? '🥇' : pct >= 70 ? '🥈' : pct >= 50 ? '🥉' : '📋';
  $('res-medal').textContent = medal;
  $('res-grade').textContent = pct + '%';
  $('res-grade').className = 'result-grade ' + (passed ? 'pass' : 'fail');

  if (passed) {
    $('res-tagline').textContent = `✅ ${moduleLabel(mod.id)} Passed — ${correct} of ${totalQ} correct (Attempt ${meta.attempts} of ${MAX_ATTEMPTS})`;
  } else if (justLocked) {
    $('res-tagline').textContent = `🔒 ${moduleLabel(mod.id)} — Not passed. That was attempt ${meta.attempts} of ${MAX_ATTEMPTS}. Your training access is now LOCKED.`;
  } else {
    $('res-tagline').textContent = `❌ ${moduleLabel(mod.id)} — Not yet passed. 100% is required. Attempt ${meta.attempts} of ${MAX_ATTEMPTS} used.`;
  }

  $('res-score').textContent = `${correct}/${totalQ}`;
  $('res-pct').textContent = pct + '%';
  $('res-time').textContent = fmtTime(timeSecs);

  let remark = passed
    ? mod.remark_pass
    : pct >= 50
    ? mod.remark_low
    : mod.remark_fail;
  $('res-remark-text').textContent = remark;
  $('res-remark').style.background = passed ? '#eafaf1' : '#fef9e7';
  $('res-remark').style.borderColor = passed ? '#1e8449' : '#d4a017';

  const reviewList = $('res-review-list');
  reviewList.innerHTML = '';
  mod.questions.forEach((q, i) => {
    const a = answers[i];
    const isCorrect = a?.correct;
    const div = document.createElement('div');
    div.className = `review-item ${isCorrect ? 'correct-item' : 'wrong-item'}`;
    div.innerHTML = `
      <div class="review-item-q">${isCorrect ? '✅' : '❌'} Q${i+1}. ${q.q}</div>
      <div class="review-item-ans">
        ${isCorrect
          ? `<strong>Your answer: ${q.options[a.selected]}</strong> — Correct!`
          : `<span class="wrong-ans">Your answer: ${a ? q.options[a.selected] : 'Not answered'}</span>
             <br><strong>Correct answer: ${q.options[q.answer]}</strong>
             <br>${q.explanation}`}
        ${q.law ? `<br><em style="color:var(--grey)">⚖️ ${q.law}</em>` : ''}
      </div>
    `;
    reviewList.appendChild(div);
  });

  const myModules = getMyModules();
  const allPassed = myModules.length > 0 && myModules.every(m => STATE.moduleMeta[m.id]?.passed);
  $('btn-cert').style.display = allPassed ? 'inline-flex' : 'none';
  $('btn-retry').style.display = (passed || STATE.lmsLocked) ? 'none' : 'inline-flex';

  show('screen-results');
}

function retryModule() {
  if (STATE.lmsLocked) { goToModules(); return; }
  openManual(STATE.currentModuleId);
}

// ── SCREEN 5: Certificate ─────────────────────────────────────────
function buildCertStats() {
  let rows = '';
  let totalStudy = 0, totalQuiz = 0, totalAttempts = 0;
  getMyModules().forEach(m => {
    const r = STATE.moduleResults[m.id] || {};
    const meta = STATE.moduleMeta[m.id] || { attempts:0, studyTimeSec:0 };
    totalStudy += meta.studyTimeSec || 0;
    totalQuiz += r.time || 0;
    totalAttempts += meta.attempts || 0;
    rows += `<tr>
      <td>${m.icon} ${m.title}</td>
      <td class="num">${fmtTime(meta.studyTimeSec||0)}</td>
      <td class="num">${fmtTime(r.time||0)}</td>
      <td class="num">${meta.attempts||0} / ${MAX_ATTEMPTS}</td>
    </tr>`;
  });
  return `
    <div class="cert-stats-title">Study &amp; Assessment Record</div>
    <table>
      <thead><tr><th>Module</th><th>Study Time</th><th>Quiz Time</th><th>Attempts</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="cert-stats-totals">
      <span>Total Study Time: <strong>${fmtTime(totalStudy)}</strong></span>
      <span>Total Quiz Time: <strong>${fmtTime(totalQuiz)}</strong></span>
      <span>Total Attempts: <strong>${totalAttempts}</strong></span>
    </div>
  `;
}

function showCert() {
  const u = STATE.user;
  const myModules = getMyModules();
  const allPassed = myModules.length > 0 && myModules.every(m => STATE.moduleMeta[m.id]?.passed);
  if (!allPassed) {
    alert(`Complete all ${myModules.length} modules with a 100% score to unlock the certificate.`);
    return;
  }

  const track = getTrackInfo();
  $('cert-name').textContent = `${u.firstName} ${u.lastName}`;

  let totalCorrect = 0, totalQ = 0;
  myModules.forEach(m => {
    const r = STATE.moduleResults[m.id];
    if (r) { totalCorrect += r.score; totalQ += r.total; }
  });
  const overallPct = Math.round((totalCorrect/totalQ)*100);

  $('cert-body').innerHTML = `
    has successfully completed the <strong>${track.programName}</strong>
    at Interlace Studies Pty Ltd, ${track.bodyText}
    <br><br>
    Role: <strong>${u.role}</strong> &nbsp;|&nbsp; Branch: <strong>${u.branch}</strong>
    &nbsp;|&nbsp; Overall Score: <strong>${overallPct}%</strong>
  `;

  const badges = $('cert-badges');
  badges.innerHTML = '';
  myModules.forEach(m => {
    const r = STATE.moduleResults[m.id];
    const b = document.createElement('div');
    b.className = 'cert-badge';
    b.innerHTML = `${m.icon} ${m.title}<small>${r?.pct||0}%</small>`;
    badges.appendChild(b);
  });

  $('cert-stats').innerHTML = buildCertStats();

  const id = certId(u);
  const today = fmtDate(new Date());
  $('cert-id').textContent = `Certificate ID: ${id}  |  Issued: ${today}  |  Valid for CPD purposes`;

  renderWatermark();
  show('screen-cert');
}

function downloadCert() {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);
    display:flex;align-items:center;justify-content:center;z-index:9999;
  `;
  modal.innerHTML = `
    <div style="background:#fff;border-radius:12px;padding:40px;max-width:440px;text-align:center;font-family:'Poppins',sans-serif;border:1px solid var(--line);">
      <h3 style="font-family:'Playfair Display',serif;font-weight:800;color:var(--ink);margin-bottom:12px;font-size:20px;">Download Your Certificate</h3>
      <p style="color:var(--slate);margin-bottom:24px;line-height:1.6;font-size:14px;">
        To save as PDF:<br>
        1. Click <strong style="color:var(--ink)">Print Now</strong><br>
        2. Select <strong style="color:var(--ink)">"Save as PDF"</strong> as your printer<br>
        3. Save to your device
      </p>
      <button onclick="this.closest('[style]').remove(); window.print();"
        style="background:linear-gradient(135deg,var(--interlace-deep),var(--interlace-sky));color:#fff;border:none;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;cursor:pointer;margin-right:8px">
        Print Now
      </button>
      <button onclick="this.closest('[style]').remove()"
        style="background:var(--paper);color:var(--slate);border:1.5px solid var(--line);font-size:14px;font-weight:600;padding:12px 20px;border-radius:8px;cursor:pointer;">
        Cancel
      </button>
    </div>
  `;
  document.body.appendChild(modal);
}

// ── Admin Panel ───────────────────────────────────────────────────
function showAdminLogin() {
  show('screen-admin');
  const isAdmin = !!getAdminToken();
  $('admin-login-view').style.display = isAdmin ? 'none' : 'block';
  $('admin-dashboard-view').style.display = isAdmin ? 'block' : 'none';
  if (isAdmin) loadAdminStaff();
}

function backToStaffLogin() {
  backToPortalMenu();
  show('screen-landing');
}

async function adminLogin() {
  const email = $('admin-email').value.trim();
  const password = $('admin-password').value;
  if (!email || !password) { alert('Please enter both the admin email and password.'); return; }
  try {
    const data = await apiPost('/api/admin/login', { email, password });
    setAdminToken(data.token);
    $('admin-login-view').style.display = 'none';
    $('admin-dashboard-view').style.display = 'block';
    renderAdminModuleChecklist();
    await loadAdminStaff();
  } catch (e) {
    alert(e.message || 'Invalid admin credentials.');
  }
}

function adminLogout() {
  setAdminToken(null);
  show('screen-landing');
}

function renderAdminModuleChecklist(checkedIds) {
  const checked = new Set(checkedIds || ROLE_DEFAULT_MODULES['Policy Only']);
  const wrap = $('admin-module-checklist');
  wrap.innerHTML = MODULE_GROUPS.map(group => `
    <div class="admin-module-group">
      <h4>${group.label}</h4>
      ${group.ids.map(id => {
        const mod = MODULES.find(m => m.id === id);
        if (!mod) return '';
        return `
          <label class="admin-module-item">
            <input type="checkbox" value="${id}" ${checked.has(id) ? 'checked' : ''}>
            ${mod.icon} ${mod.title}
          </label>
        `;
      }).join('')}
    </div>
  `).join('');
}

function adminQuickSelect(roleKey) {
  const ids = ROLE_DEFAULT_MODULES[roleKey] || [];
  renderAdminModuleChecklist(ids);
}

function adminGetCheckedModuleIds() {
  return [...document.querySelectorAll('#admin-module-checklist input[type="checkbox"]:checked')].map(el => Number(el.value));
}

async function adminAssign() {
  const statusEl = $('admin-assign-status');
  statusEl.textContent = '';
  statusEl.className = 'admin-status-msg';

  const firstName = $('admin-fname').value.trim();
  const lastName = $('admin-lname').value.trim();
  const email = $('admin-staff-email').value.trim();
  const mobile = $('admin-mobile').value.trim();
  const role = $('admin-role').value;
  const branch = $('admin-branch').value;
  const moduleIds = adminGetCheckedModuleIds();

  if (!firstName || !lastName || !email || !role || !branch) {
    statusEl.textContent = 'Please fill in all required fields.';
    statusEl.className = 'admin-status-msg err';
    return;
  }
  if (moduleIds.length === 0) {
    statusEl.textContent = 'Select at least one module to assign.';
    statusEl.className = 'admin-status-msg err';
    return;
  }

  try {
    const data = await apiPost('/api/admin/assign', {
      adminToken: getAdminToken(), email, firstName, lastName, mobile, role, branch, moduleIds,
    });
    statusEl.textContent = data.isNew ? `New staff record created for ${email}.` : `Assignment updated for ${email}.`;
    statusEl.className = 'admin-status-msg ok';
    $('admin-fname').value = ''; $('admin-lname').value = ''; $('admin-staff-email').value = '';
    $('admin-mobile').value = ''; $('admin-role').value = ''; $('admin-branch').value = '';
    renderAdminModuleChecklist();
    await loadAdminStaff();
  } catch (e) {
    statusEl.textContent = e.message || 'Could not save this assignment.';
    statusEl.className = 'admin-status-msg err';
  }
}

async function loadAdminStaff() {
  try {
    const data = await apiGet('/api/admin/staff', { 'X-Admin-Token': getAdminToken() });
    renderAdminStaffTable(data.staff || []);
  } catch (e) {
    if (e.status === 401) { setAdminToken(null); showAdminLogin(); }
  }
}

function renderAdminStaffTable(staffList) {
  const tbody = $('admin-staff-tbody');
  if (!staffList.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--grey)">No staff assigned yet.</td></tr>`;
    return;
  }
  tbody.innerHTML = staffList.map(s => {
    const assigned = s.assignedModules || [];
    const passedCount = assigned.filter(id => s.moduleMeta?.[id]?.passed).length;
    const statusHtml = s.lmsLocked
      ? '<span class="admin-lock-pill">🔒 Locked</span>'
      : (passedCount === assigned.length && assigned.length > 0)
        ? '<span class="admin-ok-pill">✓ Complete</span>'
        : (s.activatedAt ? 'In Progress' : 'Not yet signed in');
    return `
      <tr>
        <td>${s.firstName || ''} ${s.lastName || ''}</td>
        <td>${s.email}</td>
        <td>${s.role || ''}</td>
        <td>${assigned.length} assigned</td>
        <td>${passedCount} / ${assigned.length} passed</td>
        <td>${statusHtml}</td>
        <td>
          <button class="btn-secondary" onclick="adminResetStaff('${s.email}')">Reset Attempts</button>
          <button class="btn-secondary" onclick="adminUnassignStaff('${s.email}')">Remove</button>
        </td>
      </tr>
    `;
  }).join('');
}

async function adminResetStaff(email) {
  if (!confirm(`Reset attempts and unlock training for ${email}?`)) return;
  try {
    await apiPost('/api/admin/reset', { adminToken: getAdminToken(), email });
    await loadAdminStaff();
  } catch (e) {
    alert(e.message || 'Could not reset this staff member.');
  }
}

async function adminUnassignStaff(email) {
  if (!confirm(`Remove ${email} entirely? This deletes their assignment and all recorded progress.`)) return;
  try {
    await apiPost('/api/admin/unassign', { adminToken: getAdminToken(), email });
    await loadAdminStaff();
  } catch (e) {
    alert(e.message || 'Could not remove this staff member.');
  }
}

// ── Content protection (deterrents only — cannot stop screenshots) ──
document.addEventListener('contextmenu', e => {
  if (e.target.closest('#screen-manual, #screen-quiz, #screen-cert')) e.preventDefault();
});
document.addEventListener('keydown', e => {
  const inProtectedScreen = document.querySelector('#screen-manual.active, #screen-quiz.active, #screen-cert.active');
  if (!inProtectedScreen) return;
  const key = e.key.toLowerCase();
  if ((e.ctrlKey || e.metaKey) && ['c','p','s','u'].includes(key)) e.preventDefault();
  if (e.key === 'PrintScreen') e.preventDefault();
});

function renderWatermark() {
  let wm = document.getElementById('content-watermark');
  if (!wm) {
    wm = document.createElement('div');
    wm.id = 'content-watermark';
    wm.className = 'content-watermark';
    document.body.appendChild(wm);
  }
  const label = STATE.user.email ? `${STATE.user.firstName} ${STATE.user.lastName} · ${STATE.user.email}` : 'Interlace Studies';
  wm.innerHTML = Array.from({ length: 24 }).map(() => `<span>${label}</span>`).join('');
}

// ── Dynamic 3D tilt tiles (landing page access cards) ──
function initTiltTiles() {
  const targets = document.querySelectorAll('.portal-card');
  targets.forEach(el => {
    if (el.dataset.tiltInit) return;
    el.dataset.tiltInit = '1';
    el.classList.add('tilt-card');

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      const rotateY = ((x / rect.width) - 0.5) * 16;
      const rotateX = ((y / rect.height) - 0.5) * -16;
      el.style.setProperty('--mx', px + '%');
      el.style.setProperty('--my', py + '%');
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
      el.classList.add('tilting');
    });

    el.addEventListener('mouseleave', () => {
      el.classList.remove('tilting');
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    });

    // Gentle touch-device tilt on tap, since there's no hover/mousemove there.
    el.addEventListener('touchstart', () => {
      el.style.setProperty('--mx', '50%');
      el.style.setProperty('--my', '30%');
      el.style.transform = 'perspective(1000px) rotateX(4deg) rotateY(-4deg) translateY(-4px) scale(1.015)';
      el.classList.add('tilting');
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.classList.remove('tilting');
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    });
  });
}
initTiltTiles();

// ── Keyboard navigation ───────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (!$('screen-quiz').classList.contains('active')) return;
  const keys = {'1':0,'2':1,'3':2,'4':3,'a':0,'b':1,'c':2,'d':3};
  if (e.key in keys && STATE.answers[STATE.currentQ] === null) {
    selectAnswer(keys[e.key]);
  }
  if (e.key === 'ArrowRight' && STATE.answers[STATE.currentQ] !== null) nextQ();
  if (e.key === 'ArrowLeft') prevQ();
});

// ── Persist on unload (also flushes in-progress manual study time) ──
window.addEventListener('beforeunload', () => {
  const token = getSessionToken();
  if (!token) return;
  if ($('screen-manual')?.classList.contains('active') && STATE.pendingManualModId != null) {
    if (!STATE.moduleMeta[STATE.pendingManualModId]) STATE.moduleMeta[STATE.pendingManualModId] = { attempts:0, studyTimeSec:0, passed:false };
    STATE.moduleMeta[STATE.pendingManualModId].studyTimeSec += (STATE.manualSessionElapsed || 0);
  }
  // sendBeacon survives page unload, unlike a normal fetch — but it can't
  // set custom headers, so the session token travels in the body instead.
  const payload = JSON.stringify({
    token,
    moduleResults: STATE.moduleResults,
    moduleMeta: STATE.moduleMeta,
    lmsLocked: STATE.lmsLocked,
    lockedInfo: STATE.lockedInfo,
  });
  navigator.sendBeacon('/api/training/save', new Blob([payload], { type: 'application/json' }));
});

// ── Auto sign-in on page load if a valid session token is stored ──
(async function bootstrap() {
  await tryAutoLogin();
})();
