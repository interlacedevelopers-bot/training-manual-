const { createAdminSession } = require('../../lib/store');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { email, password } = req.body || {};
  const adminEmail = (process.env.ADMIN_EMAIL || '').trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || '';

  if (!adminEmail || !adminPassword) {
    return res.status(500).json({ error: 'admin_not_configured' });
  }

  const suppliedEmail = String(email || '').trim().toLowerCase();
  if (suppliedEmail !== adminEmail || String(password || '') !== adminPassword) {
    return res.status(401).json({ error: 'invalid_credentials' });
  }

  const token = await createAdminSession();
  return res.status(200).json({ token });
};
