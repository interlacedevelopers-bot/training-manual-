const { isAdminSession, getStaff, saveStaff, normalizeEmail } = require('../../lib/store');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { adminToken, email, gapAnalysis } = req.body || {};
  if (!(await isAdminSession(adminToken))) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const normEmail = normalizeEmail(email);
  if (!normEmail) return res.status(400).json({ error: 'invalid_email' });
  if (!gapAnalysis || typeof gapAnalysis !== 'object') {
    return res.status(400).json({ error: 'invalid_gap_analysis' });
  }

  const record = await getStaff(normEmail);
  if (!record) return res.status(404).json({ error: 'not_found' });

  record.gapAnalyses = record.gapAnalyses || [];

  if (gapAnalysis.id) {
    const idx = record.gapAnalyses.findIndex(g => g.id === gapAnalysis.id);
    if (idx >= 0) {
      record.gapAnalyses[idx] = { ...record.gapAnalyses[idx], ...gapAnalysis, updatedAt: new Date().toISOString() };
    } else {
      record.gapAnalyses.push({ ...gapAnalysis, createdAt: new Date().toISOString() });
    }
  } else {
    const entry = {
      ...gapAnalysis,
      id: `ga_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
    };
    record.gapAnalyses.push(entry);
  }

  await saveStaff(record);
  return res.status(200).json({ ok: true, gapAnalyses: record.gapAnalyses });
};
