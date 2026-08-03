const { isAdminSession, getStaff, saveStaff } = require('../../lib/store');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { adminToken, email } = req.body || {};
  if (!(await isAdminSession(adminToken))) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const record = await getStaff(email);
  if (!record) return res.status(404).json({ error: 'not_found' });

  record.lmsLocked = false;
  record.lockedInfo = null;
  Object.keys(record.moduleMeta || {}).forEach(id => {
    if (!record.moduleMeta[id].passed) record.moduleMeta[id].attempts = 0;
  });

  await saveStaff(record);
  const { otpCode, ...safe } = record;
  return res.status(200).json({ ok: true, staff: safe });
};
