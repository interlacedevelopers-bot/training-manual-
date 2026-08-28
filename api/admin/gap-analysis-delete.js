const { isAdminSession, getStaff, saveStaff, normalizeEmail } = require('../../lib/store');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { adminToken, email, id } = req.body || {};
  if (!(await isAdminSession(adminToken))) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const normEmail = normalizeEmail(email);
  if (!normEmail || !id) return res.status(400).json({ error: 'invalid_request' });

  const record = await getStaff(normEmail);
  if (!record) return res.status(404).json({ error: 'not_found' });

  record.gapAnalyses = (record.gapAnalyses || []).filter(g => g.id !== id);
  await saveStaff(record);
  return res.status(200).json({ ok: true, gapAnalyses: record.gapAnalyses });
};
