const { getSessionEmail, getStaff, saveStaff } = require('../../lib/store');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const token = req.headers['x-session-token'] || (req.body || {}).token;
  const email = await getSessionEmail(token);
  if (!email) return res.status(401).json({ error: 'invalid_session' });

  const record = await getStaff(email);
  if (!record) return res.status(404).json({ error: 'not_found' });

  const { moduleResults, moduleMeta, lmsLocked, lockedInfo } = req.body || {};
  if (moduleResults !== undefined) record.moduleResults = moduleResults;
  if (moduleMeta !== undefined) record.moduleMeta = moduleMeta;
  if (lmsLocked !== undefined) record.lmsLocked = lmsLocked;
  if (lockedInfo !== undefined) record.lockedInfo = lockedInfo;

  await saveStaff(record);
  return res.status(200).json({ ok: true });
};
