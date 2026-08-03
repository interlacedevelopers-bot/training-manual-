const { Resend } = require('resend');

async function sendOtpEmail({ to, firstName, code }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || 'Interlace Studies Training <onboarding@resend.dev>';

  if (!apiKey) {
    const err = new Error('Email service is not configured (missing RESEND_API_KEY).');
    err.code = 'EMAIL_NOT_CONFIGURED';
    throw err;
  }

  const resend = new Resend(apiKey);
  const name = firstName || 'there';

  await resend.emails.send({
    from,
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

module.exports = { sendOtpEmail };
