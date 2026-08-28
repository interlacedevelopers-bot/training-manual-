const { isAdminSession, getStaff, saveStaff, normalizeEmail } = require('../../lib/store');

// Admin-only GAP Analysis / Performance Review endpoint. Bypasses the
// leader/manager/employee workflow entirely (draft -> pending_approval ->
// approved -> signed_off) -- admin has full override rights to change,
// amend, add, or delete any review regardless of its current status.
// Consolidated save+delete into one file to stay under Vercel's
// per-deployment serverless function limit.
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { adminToken, email, gapAnalysis, action, id } = req.body || {};
  if (!(await isAdminSession(adminToken))) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const normEmail = normalizeEmail(email);
  if (!normEmail) return res.status(400).json({ error: 'invalid_email' });

  const record = await getStaff(normEmail);
  if (!record) return res.status(404).json({ error: 'not_found' });
  record.gapAnalyses = record.gapAnalyses || [];

  if (action === 'delete') {
    if (!id) return res.status(400).json({ error: 'invalid_request' });
    record.gapAnalyses = record.gapAnalyses.filter(g => g.id !== id);
    await saveStaff(record);
    return res.status(200).json({ ok: true, gapAnalyses: record.gapAnalyses });
  }

  if (!gapAnalysis || typeof gapAnalysis !== 'object') {
    return res.status(400).json({ error: 'invalid_gap_analysis' });
  }

  if (gapAnalysis.id) {
    const idx = record.gapAnalyses.findIndex(g => g.id === gapAnalysis.id);
    if (idx >= 0) {
      record.gapAnalyses[idx] = { ...record.gapAnalyses[idx], ...gapAnalysis, updatedAt: new Date().toISOString() };
    } else {
      record.gapAnalyses.push({ status: 'approved', progressNotes: [], createdBy: 'admin', ...gapAnalysis, createdAt: new Date().toISOString() });
    }
  } else {
    record.gapAnalyses.push({
      status: 'approved',
      progressNotes: [],
      createdBy: 'admin',
      ...gapAnalysis,
      id: `ga_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
    });
  }

  await saveStaff(record);
  return res.status(200).json({ ok: true, gapAnalyses: record.gapAnalyses });
};
