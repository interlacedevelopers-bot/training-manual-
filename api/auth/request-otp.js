const { getStaff, saveStaff, normalizeEmail, randomOtp, OTP_TTL_SECONDS } = require('../../lib/store');
const { sendOtpEmail } = require('../../lib/email');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const email = normalizeEmail((req.body || {}).email);
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'invalid_email' });
  }

  const record = await getStaff(email);
  if (!record) {
    return res.status(403).json({
      error: 'not_assigned',
      message: 'No training has been assigned to this email address. Please contact your administrator.',
    });
  }
  if (record.lmsLocked) {
    return res.status(403).json({
      error: 'locked',
      message: 'Your training access is locked. Please contact your administrator.',
    });
  }

  const code = randomOtp();
  record.otpCode = code;
  record.otpExpiry = Date.now() + OTP_TTL_SECONDS * 1000;
  record.otpAttempts = 0;
  await saveStaff(record);

  try {
    await sendOtpEmail({ to: email, firstName: record.firstName, code });
  } catch (e) {
    if (e.code === 'EMAIL_NOT_CONFIGURED') {
      return res.status(500).json({ error: 'email_not_configured', message: 'Email delivery is not yet configured. Contact your administrator.' });
    }
    return res.status(502).json({ error: 'email_send_failed', message: 'Could not send the verification email. Please try again shortly.' });
  }

  return res.status(200).json({ ok: true });
};
