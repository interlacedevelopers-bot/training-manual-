const { getSessionEmail, getStaff } = require('../../lib/store');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  const token = req.headers['x-session-token'];
  const email = await getSessionEmail(token);
  if (!email) return res.status(401).json({ error: 'invalid_session' });

  const record = await getStaff(email);
  if (!record) return res.status(404).json({ error: 'not_found' });

  const { otpCode, otpExpiry, otpAttempts, ...safe } = record;
  return res.status(200).json({ staff: safe });
};
