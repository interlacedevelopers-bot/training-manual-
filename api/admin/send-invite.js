const { isAdminSession, getStaff, normalizeEmail } = require('../../lib/store');
const { sendInvitationEmail } = require('../../lib/email');

// Sends the one-time welcome/invitation email -- distinct from the OTP
// verification code -- to an already-assigned staff member, or to every
// currently assigned staff member if `email` is omitted.
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { adminToken, email } = req.body || {};
  if (!(await isAdminSession(adminToken))) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const normEmail = normalizeEmail(email);
  if (!normEmail) return res.status(400).json({ error: 'invalid_email' });

  const record = await getStaff(normEmail);
  if (!record) {
    return res.status(404).json({ error: 'not_found', message: 'No training has been assigned to this email address yet.' });
  }

  try {
    await sendInvitationEmail({ to: normEmail, firstName: record.firstName, role: record.role });
  } catch (e) {
    if (e.code === 'EMAIL_NOT_CONFIGURED') {
      return res.status(500).json({ error: 'email_not_configured', message: 'Email delivery is not configured.' });
    }
    console.error('Invitation email send failed for', normEmail, e.resendError || e.message);
    return res.status(502).json({ error: 'email_send_failed', message: 'Could not send the invitation email.' });
  }

  return res.status(200).json({ ok: true });
};
