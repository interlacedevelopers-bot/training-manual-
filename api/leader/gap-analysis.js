const { getSessionEmail, getStaff, saveStaff, normalizeEmail, listStaff } = require('../../lib/store');

// GAP Analysis workflow, driven by staff sessions (Team Leader / Manager /
// Employee), separate from the admin-only override endpoint at
// /api/admin/gap-analysis.js (which bypasses this state machine
// entirely -- the admin always has full override rights).
//
// States: draft -> pending_approval -> approved -> signed_off
//   - Team Leader: creates/edits a draft they authored, submits it for
//     approval, and can add progress notes to any review once approved.
//   - Departmental Manager: approves or rejects a pending review.
//   - Employee: signs off their own approved review (one-way, timestamped,
//     never editable by them).
//
// GET returns the staff roster (Team Leader and Manager only) -- combined
// into this file to stay under Vercel's per-deployment function limit.
module.exports = async (req, res) => {
  const token = req.headers['x-session-token'];

  if (req.method === 'GET') {
    const listerEmail = await getSessionEmail(token);
    if (!listerEmail) return res.status(401).json({ error: 'invalid_session' });
    const lister = await getStaff(listerEmail);
    if (!lister || (!lister.isTeamLeader && !lister.isManager)) return res.status(403).json({ error: 'forbidden' });
    const all = await listStaff();
    const safe = all.map(({ otpCode, otpExpiry, otpAttempts, ...rest }) => rest);
    return res.status(200).json({ staff: safe });
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const callerEmail = await getSessionEmail(token);
  if (!callerEmail) return res.status(401).json({ error: 'invalid_session' });

  const caller = await getStaff(callerEmail);
  if (!caller) return res.status(404).json({ error: 'not_found' });

  const { action, email, gapAnalysis, id, note, comments } = req.body || {};
  const targetEmail = normalizeEmail(email);

  if (action === 'save_draft') {
    if (!caller.isTeamLeader) return res.status(403).json({ error: 'forbidden' });
    if (!targetEmail || !gapAnalysis) return res.status(400).json({ error: 'invalid_request' });
    const record = await getStaff(targetEmail);
    if (!record) return res.status(404).json({ error: 'not_found' });
    record.gapAnalyses = record.gapAnalyses || [];

    if (gapAnalysis.id) {
      const idx = record.gapAnalyses.findIndex(g => g.id === gapAnalysis.id);
      if (idx < 0) return res.status(404).json({ error: 'review_not_found' });
      const existing = record.gapAnalyses[idx];
      if (existing.status !== 'draft') {
        return res.status(409).json({ error: 'not_editable', message: 'This review has already been submitted and can no longer be edited here. Ask an administrator to amend it.' });
      }
      if (existing.createdBy && existing.createdBy !== callerEmail) {
        return res.status(403).json({ error: 'forbidden', message: 'Only the team leader who created this draft can edit it.' });
      }
      record.gapAnalyses[idx] = { ...existing, ...gapAnalysis, status: 'draft', updatedAt: new Date().toISOString() };
    } else {
      record.gapAnalyses.push({
        ...gapAnalysis,
        id: `ga_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        status: 'draft',
        createdBy: callerEmail,
        progressNotes: [],
        createdAt: new Date().toISOString(),
      });
    }
    await saveStaff(record);
    return res.status(200).json({ ok: true, gapAnalyses: record.gapAnalyses });
  }

  if (action === 'submit') {
    if (!caller.isTeamLeader) return res.status(403).json({ error: 'forbidden' });
    const record = await getStaff(targetEmail);
    if (!record) return res.status(404).json({ error: 'not_found' });
    const entry = (record.gapAnalyses || []).find(g => g.id === id);
    if (!entry) return res.status(404).json({ error: 'review_not_found' });
    if (entry.status !== 'draft') return res.status(409).json({ error: 'invalid_status' });
    entry.status = 'pending_approval';
    entry.submittedAt = new Date().toISOString();
    entry.submittedBy = callerEmail;
    await saveStaff(record);
    return res.status(200).json({ ok: true, gapAnalyses: record.gapAnalyses });
  }

  if (action === 'add_note') {
    if (!caller.isTeamLeader && !caller.isManager) return res.status(403).json({ error: 'forbidden' });
    if (!note || !note.trim()) return res.status(400).json({ error: 'invalid_note' });
    const record = await getStaff(targetEmail);
    if (!record) return res.status(404).json({ error: 'not_found' });
    const entry = (record.gapAnalyses || []).find(g => g.id === id);
    if (!entry) return res.status(404).json({ error: 'review_not_found' });
    entry.progressNotes = entry.progressNotes || [];
    entry.progressNotes.push({ text: note.trim(), addedBy: callerEmail, addedAt: new Date().toISOString() });
    await saveStaff(record);
    return res.status(200).json({ ok: true, gapAnalyses: record.gapAnalyses });
  }

  if (action === 'approve' || action === 'reject') {
    if (!caller.isManager) return res.status(403).json({ error: 'forbidden' });
    const record = await getStaff(targetEmail);
    if (!record) return res.status(404).json({ error: 'not_found' });
    const entry = (record.gapAnalyses || []).find(g => g.id === id);
    if (!entry) return res.status(404).json({ error: 'review_not_found' });
    if (entry.status !== 'pending_approval') return res.status(409).json({ error: 'invalid_status' });
    if (action === 'approve') {
      entry.status = 'approved';
      entry.approvedAt = new Date().toISOString();
      entry.approvedBy = callerEmail;
    } else {
      entry.status = 'draft';
      entry.managerComments = comments || '';
      entry.submittedAt = null;
      entry.submittedBy = null;
    }
    await saveStaff(record);
    return res.status(200).json({ ok: true, gapAnalyses: record.gapAnalyses });
  }

  if (action === 'signoff') {
    if (normalizeEmail(callerEmail) !== targetEmail) return res.status(403).json({ error: 'forbidden' });
    const entry = (caller.gapAnalyses || []).find(g => g.id === id);
    if (!entry) return res.status(404).json({ error: 'review_not_found' });
    if (entry.status !== 'approved') {
      return res.status(409).json({ error: 'invalid_status', message: 'Only a manager-approved review can be signed off.' });
    }
    entry.status = 'signed_off';
    entry.signedOffAt = new Date().toISOString();
    entry.signedOffBy = callerEmail;
    await saveStaff(caller);
    return res.status(200).json({ ok: true, gapAnalyses: caller.gapAnalyses });
  }

  return res.status(400).json({ error: 'invalid_action' });
};
