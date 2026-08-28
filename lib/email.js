const { Resend } = require('resend');

const PORTAL_URL = process.env.PORTAL_URL || 'https://trainingapp-mauve.vercel.app';

// resend.emails.send() does NOT throw on an API-level rejection (e.g. the
// sandbox restriction that blocks sending to anyone but the account's own
// verified address when using the shared onboarding@resend.dev sender
// without a verified domain) -- it resolves with { data: null, error }.
// Every call site must check `error` itself rather than trusting the
// promise to reject, or a rejected send silently reports as a success.
async function send({ to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || 'Interlace Studies Training <onboarding@resend.dev>';

  if (!apiKey) {
    const err = new Error('Email service is not configured (missing RESEND_API_KEY).');
    err.code = 'EMAIL_NOT_CONFIGURED';
    throw err;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({ from, to, subject, html });

  if (error) {
    const err = new Error(error.message || 'Resend rejected the send.');
    err.code = 'EMAIL_SEND_REJECTED';
    err.resendError = error;
    throw err;
  }
}

async function sendOtpEmail({ to, firstName, code }) {
  const name = firstName || 'there';
  await send({
    to,
    subject: `Your Interlace Studies training verification code: ${code}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#1c2833;">
        <h2 style="color:#1a5276;margin-bottom:4px;">Interlace Studies</h2>
        <p style="color:#718096;margin-top:0;">Partner Visa Training Academy</p>
        <p>Hi ${name},</p>
        <p>Use the following one-time code to verify your access and begin your assigned training:</p>
        <div style="font-size:32px;font-weight:800;letter-spacing:6px;color:#1a5276;background:#eaf4fb;padding:16px 24px;border-radius:10px;text-align:center;margin:20px 0;">
          ${code}
        </div>
        <p style="color:#718096;font-size:13px;">This code expires in 10 minutes. If you did not request this, you can safely ignore this email.</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;">
        <p style="color:#a0aec0;font-size:11px;">Interlace Studies Pty Ltd — this is an automated message, please do not reply.</p>
      </div>
    `,
  });
}

// A one-time welcome email, distinct from the OTP code: tells a newly
// assigned staff member their account exists and how to sign in, without
// itself containing a time-limited verification code.
async function sendInvitationEmail({ to, firstName, role }) {
  const name = firstName || 'there';
  await send({
    to,
    subject: `You've been added to the Interlace Studies Training Academy`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#1c2833;">
        <h2 style="color:#1a5276;margin-bottom:4px;">Interlace Studies</h2>
        <p style="color:#718096;margin-top:0;">Staff Training Academy</p>
        <p>Hi ${name},</p>
        <p>Your administrator has set up your account and assigned you training${role ? ` for your role as <strong>${role}</strong>` : ''} on the Interlace Studies Training Academy.</p>
        <p>To get started:</p>
        <ol style="color:#1c2833;line-height:1.7;padding-left:20px;">
          <li>Go to <a href="${PORTAL_URL}" style="color:#1a5276;">${PORTAL_URL}</a></li>
          <li>Click <strong>Staff Sign In</strong> and enter this email address (${to})</li>
          <li>We'll send you a separate 6-digit verification code by email — enter it to sign in</li>
        </ol>
        <div style="text-align:center;margin:24px 0;">
          <a href="${PORTAL_URL}" style="display:inline-block;background:#1a5276;color:#fff;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:10px;">Go to the Training Academy</a>
        </div>
        <p style="color:#718096;font-size:13px;">Once signed in, you'll see the modules assigned to you along with your study manual and progress.</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;">
        <p style="color:#a0aec0;font-size:11px;">Interlace Studies Pty Ltd — this is an automated message, please do not reply.</p>
      </div>
    `,
  });
}

module.exports = { sendOtpEmail, sendInvitationEmail };
