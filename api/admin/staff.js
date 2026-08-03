const { isAdminSession, listStaff } = require('../../lib/store');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  const adminToken = req.headers['x-admin-token'] || req.query.token;
  if (!(await isAdminSession(adminToken))) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const all = await listStaff();
  const safe = all.map(({ otpCode, otpExpiry, ...rest }) => rest);
  return res.status(200).json({ staff: safe });
};
