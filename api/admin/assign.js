const { isAdminSession, getStaff, saveStaff, normalizeEmail } = require('../../lib/store');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { adminToken, email, firstName, lastName, mobile, role, branch, moduleIds, isTeamLeader, isManager } = req.body || {};

  if (!(await isAdminSession(adminToken))) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const normEmail = normalizeEmail(email);
  if (!normEmail || !normEmail.includes('@')) {
    return res.status(400).json({ error: 'invalid_email' });
  }
  if (!Array.isArray(moduleIds) || moduleIds.length === 0) {
    return res.status(400).json({ error: 'no_modules_selected' });
  }

  const existing = await getStaff(normEmail);

  const record = existing || {
    email: normEmail,
    moduleResults: {},
    moduleMeta: {},
    lmsLocked: false,
    lockedInfo: null,
    otpCode: null,
    otpExpiry: null,
    otpAttempts: 0,
    activatedAt: null,
    createdAt: new Date().toISOString(),
  };

  record.firstName = firstName || record.firstName || '';
  record.lastName = lastName || record.lastName || '';
  record.mobile = mobile || record.mobile || '';
  record.role = role || record.role || '';
  record.branch = branch || record.branch || '';
  record.assignedModules = moduleIds;
  record.assignedAt = new Date().toISOString();
  record.isTeamLeader = !!isTeamLeader;
  record.isManager = !!isManager;

  await saveStaff(record);

  const { otpCode, ...safe } = record;
  return res.status(200).json({ ok: true, staff: safe, isNew: !existing });
};
