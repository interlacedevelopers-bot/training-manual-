// ═══════════════════════════════════════════════════════════════════
// INTERLACE STUDIES — PARTNER VISA TRAINING ACADEMY
// Application Logic — v3.0
// ═══════════════════════════════════════════════════════════════════

// Change this before deploying to a real admin — it only guards the
// in-browser "reset attempts" control, not a real auth system.
const ADMIN_PASSCODE = 'INTERLACE-ADMIN-2026';
const LMS_STORAGE_KEY = 'interlace_lms_data_v1';
const MAX_ATTEMPTS = 3;

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
  const role = STATE.user.role;
  return MODULES.filter(m => (m.roles || []).includes(role));
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
  userKey: null,
  user: { firstName:'', lastName:'', role:'', branch:'', email:'' },
  moduleResults: {},     // { modId: {score, total, pct, passed, time, attemptNumber, answers} }
  moduleMeta: {},         // { modId: {attempts, studyTimeSec, passed} }
  lmsLocked: false,
  lockedInfo: null,

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

// ── Persistence (per-user, survives reloads so attempts/lock can't be reset by refreshing) ──
function computeUserKey(u) {
  const base = u.email ? u.email : `${u.firstName}_${u.lastName}_${u.branch}`;
  return base.trim().toLowerCase().replace(/\s+/g,'_');
}
function loadAllData() {
  try { return JSON.parse(localStorage.getItem(LMS_STORAGE_KEY)) || {}; }
  catch(e) { return {}; }
}
function saveAllData(all) {
  localStorage.setItem(LMS_STORAGE_KEY, JSON.stringify(all));
}
function getUserRecord(key) {
  const all = loadAllData();
  return all[key] || null;
}
function persist() {
  if (!STATE.userKey) return;
  const all = loadAllData();
  all[STATE.userKey] = {
    user: STATE.user,
    moduleResults: STATE.moduleResults,
    moduleMeta: STATE.moduleMeta,
    lmsLocked: STATE.lmsLocked,
    lockedInfo: STATE.lockedInfo,
  };
  saveAllData(all);
}

// ── SCREEN 1: Landing / Registration ─────────────────────────────
function startTraining() {
  const fn = $('reg-fname').value.trim();
  const ln = $('reg-lname').value.trim();
  const role = $('reg-role').value;
  const branch = $('reg-branch').value;
  const email = $('reg-email').value.trim();

  if (!fn || !ln) { alert('Please enter your first and last name.'); return; }
  if (!role) { alert('Please select your role.'); return; }
  if (!branch) { alert('Please select your branch.'); return; }

  STATE.user = { firstName:fn, lastName:ln, role, branch, email };
  STATE.userKey = computeUserKey(STATE.user);

  const existing = getUserRecord(STATE.userKey);
  if (existing) {
    STATE.moduleResults = existing.moduleResults || {};
    STATE.moduleMeta = existing.moduleMeta || {};
    STATE.lmsLocked = !!existing.lmsLocked;
    STATE.lockedInfo = existing.lockedInfo || null;
  } else {
    STATE.moduleResults = {};
    STATE.moduleMeta = {};
    STATE.lmsLocked = false;
    STATE.lockedInfo = null;
  }
  persist();

  const ini = initials(fn, ln);
  ['tb-avatar','q-avatar'].forEach(id => $(id).textContent = ini);
  ['tb-name','q-name'].forEach(id => $(id).textContent = `${fn} ${ln}`);

  renderModules();
  show('screen-modules');
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
        <p style="margin-top:18px"><button class="btn-secondary" onclick="adminUnlock()">🔑 Administrator Reset</button></p>
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
      <div class="lockout-card" style="border-color:var(--grey-lt)">
        <div class="lock-icon">📭</div>
        <h2 style="color:var(--teal)">No Modules Assigned Yet</h2>
        <p>There is no training track assigned to the <strong>${STATE.user.role}</strong> role yet.</p>
        <p>Please contact your training administrator to have a module set assigned to your role.</p>
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

  myModules.forEach((mod, idx) => {
    const res = STATE.moduleResults[mod.id];
    const meta = STATE.moduleMeta[mod.id] || { attempts:0, studyTimeSec:0, passed:false };
    const passed = !!meta.passed;
    const attempted = !!res;

    const card = document.createElement('div');
    card.className = `mod-card${passed ? ' completed' : ''}`;

    let statusBadge = '';
    if (passed) statusBadge = '<span class="status-badge done">✓ Passed</span>';
    else if (attempted) statusBadge = `<span class="status-badge progress">Attempt ${meta.attempts}/${MAX_ATTEMPTS}</span>`;

    card.innerHTML = `
      ${statusBadge}
      <div class="mod-num">Module ${idx+1} of ${total}</div>
      <div class="mod-icon-big">${mod.icon}</div>
      <h3>${mod.title}</h3>
      <p>${mod.description}</p>
      <div class="mod-meta">
        <span class="meta-pill teal">📝 ${mod.questions.length} Questions</span>
        <span class="meta-pill gold">✓ Pass: ${mod.passmark}%</span>
        ${passed ? `<span class="meta-pill green">Score: ${res.pct}%</span>` : ''}
      </div>
    `;
    card.onclick = () => openManual(mod.id);
    list.appendChild(card);
  });

  if (done === total) {
    const banner = document.createElement('div');
    banner.id = 'cert-unlock-banner';
    banner.style.cssText = `
      background:linear-gradient(135deg,#1a5276,#2471a3);
      color:#fff;border-radius:16px;padding:28px;text-align:center;
      margin-bottom:24px;box-shadow:0 8px 32px rgba(26,82,118,0.25);
    `;
    banner.innerHTML = `
      <div style="font-size:36px;margin-bottom:8px">🏆</div>
      <h3 style="font-size:20px;font-weight:800;margin-bottom:6px">All Modules Complete!</h3>
      <p style="opacity:0.85;margin-bottom:16px">Congratulations! You have passed all ${total} training modules with a 100% score.</p>
      <button onclick="showCert()" style="background:#d4a017;color:#1c2833;border:none;font-size:15px;font-weight:700;padding:13px 32px;border-radius:10px;cursor:pointer;">
        🎓 &nbsp; Download Your Certificate
      </button>
    `;
    $('modules-list').before(banner);
  }
}

function goToModules() {
  clearInterval(STATE.timer);
  renderModules();
  show('screen-modules');
}

function adminUnlock() {
  const code = prompt("Enter the administrator passcode to reset this staff member's attempts and unlock the LMS:");
  if (code === null) return;
  if (code !== ADMIN_PASSCODE) { alert('Incorrect passcode.'); return; }
  STATE.lmsLocked = false;
  STATE.lockedInfo = null;
  Object.keys(STATE.moduleMeta).forEach(id => {
    if (!STATE.moduleMeta[id].passed) STATE.moduleMeta[id].attempts = 0;
  });
  persist();
  alert('Access unlocked and attempts reset for unpassed modules.');
  renderModules();
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

  show('screen-manual');
}

function commitManualTime() {
  clearInterval(STATE.manualTimerHandle);
  const modId = STATE.pendingManualModId;
  if (modId == null) return;
  if (!STATE.moduleMeta[modId]) STATE.moduleMeta[modId] = { attempts:0, studyTimeSec:0, passed:false };
  STATE.moduleMeta[modId].studyTimeSec += (STATE.manualSessionElapsed || 0);
  STATE.manualSessionElapsed = 0;
  persist();
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
  persist();

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

  if (passed && pct >= 90) spawnConfetti();

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

  spawnConfetti();
  show('screen-cert');
}

function downloadCert() {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);
    display:flex;align-items:center;justify-content:center;z-index:9999;
  `;
  modal.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:40px;max-width:440px;text-align:center;">
      <div style="font-size:48px;margin-bottom:16px">🖨️</div>
      <h3 style="color:#1a5276;margin-bottom:12px">Download Your Certificate</h3>
      <p style="color:#718096;margin-bottom:24px;line-height:1.6">
        To save as PDF or PNG:<br>
        1. Click <strong>Print Certificate</strong><br>
        2. Select <strong>"Save as PDF"</strong> as your printer<br>
        3. Save to your device
      </p>
      <button onclick="this.closest('[style]').remove(); window.print();"
        style="background:linear-gradient(135deg,#1a5276,#2471a3);color:#fff;border:none;font-size:14px;font-weight:700;padding:12px 28px;border-radius:10px;cursor:pointer;margin-right:8px">
        🖨️ Print Now
      </button>
      <button onclick="this.closest('[style]').remove()"
        style="background:#f7f8fa;color:#4a5568;border:1.5px solid #e2e8f0;font-size:14px;font-weight:600;padding:12px 20px;border-radius:10px;cursor:pointer;">
        Cancel
      </button>
    </div>
  `;
  document.body.appendChild(modal);
}

// ── Confetti ──────────────────────────────────────────────────────
function spawnConfetti() {
  const colors = ['#1a5276','#d4a017','#1e8449','#2471a3','#d35400','#6c3483','#fff'];
  for (let i=0; i<80; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.cssText = `
        left:${Math.random()*100}vw;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        width:${6+Math.random()*8}px;
        height:${6+Math.random()*8}px;
        border-radius:${Math.random()>0.5?'50%':'2px'};
        animation-duration:${2+Math.random()*2}s;
        animation-delay:${Math.random()*0.5}s;
        transform:rotate(${Math.random()*360}deg);
      `;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }, i*20);
  }
}

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
  if ($('screen-manual')?.classList.contains('active') && STATE.pendingManualModId != null) {
    if (!STATE.moduleMeta[STATE.pendingManualModId]) STATE.moduleMeta[STATE.pendingManualModId] = { attempts:0, studyTimeSec:0, passed:false };
    STATE.moduleMeta[STATE.pendingManualModId].studyTimeSec += (STATE.manualSessionElapsed || 0);
  }
  persist();
});
