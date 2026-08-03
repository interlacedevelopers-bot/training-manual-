const { isAdminSession, deleteStaff } = require('../../lib/store');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { adminToken, email } = req.body || {};
  if (!(await isAdminSession(adminToken))) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  if (!email) return res.status(400).json({ error: 'invalid_email' });

  await deleteStaff(email);
  return res.status(200).json({ ok: true });
};
