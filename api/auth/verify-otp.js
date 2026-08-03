const { getStaff, saveStaff, createSession, normalizeEmail, MAX_OTP_ATTEMPTS } = require('../../lib/store');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const email = normalizeEmail((req.body || {}).email);
  const code = String((req.body || {}).code || '').trim();

  const record = await getStaff(email);
  if (!record) return res.status(403).json({ error: 'not_assigned' });
  if (record.lmsLocked) return res.status(403).json({ error: 'locked' });

  if (!record.otpCode || !record.otpExpiry) {
    return res.status(400).json({ error: 'no_pending_code', message: 'No verification code was requested. Please request a new one.' });
  }
  if (Date.now() > record.otpExpiry) {
    return res.status(400).json({ error: 'expired', message: 'This code has expired. Please request a new one.' });
  }
  if ((record.otpAttempts || 0) >= MAX_OTP_ATTEMPTS) {
    return res.status(429).json({ error: 'too_many_attempts', message: 'Too many incorrect attempts. Please request a new code.' });
  }

  if (code !== record.otpCode) {
    record.otpAttempts = (record.otpAttempts || 0) + 1;
    await saveStaff(record);
    return res.status(400).json({ error: 'incorrect_code', message: 'That code is incorrect.' });
  }

  // Success — clear the OTP, mark activated, issue a session.
  record.otpCode = null;
  record.otpExpiry = null;
  record.otpAttempts = 0;
  if (!record.activatedAt) record.activatedAt = new Date().toISOString();
  await saveStaff(record);

  const token = await createSession(email);
  const { otpCode, otpExpiry, otpAttempts, ...safe } = record;

  return res.status(200).json({ token, staff: safe });
};
