const crypto = require('crypto');
const { redis } = require('./redis');

const STAFF_INDEX_KEY = 'staff:index';
const SESSION_TTL_SECONDS = 12 * 60 * 60; // 12 hours
const ADMIN_SESSION_TTL_SECONDS = 8 * 60 * 60; // 8 hours
const OTP_TTL_SECONDS = 10 * 60; // 10 minutes
const MAX_OTP_ATTEMPTS = 5;

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function staffKey(email) {
  return `staff:${normalizeEmail(email)}`;
}

function randomToken() {
  return crypto.randomBytes(32).toString('hex');
}

function randomOtp() {
  return String(crypto.randomInt(100000, 1000000)); // 6-digit code
}

async function getStaff(email) {
  const raw = await redis.get(staffKey(email));
  if (!raw) return null;
  return typeof raw === 'string' ? JSON.parse(raw) : raw;
}

async function saveStaff(record) {
  await redis.set(staffKey(record.email), JSON.stringify(record));
  await redis.sadd(STAFF_INDEX_KEY, normalizeEmail(record.email));
}

async function listStaff() {
  const emails = await redis.smembers(STAFF_INDEX_KEY);
  if (!emails || emails.length === 0) return [];
  const records = await Promise.all(emails.map(e => getStaff(e)));
  return records.filter(Boolean);
}

async function deleteStaff(email) {
  await redis.del(staffKey(email));
  await redis.srem(STAFF_INDEX_KEY, normalizeEmail(email));
}

// ── Sessions (staff) ────────────────────────────────────────────
async function createSession(email) {
  const token = randomToken();
  await redis.set(`session:${token}`, normalizeEmail(email), { ex: SESSION_TTL_SECONDS });
  return token;
}

async function getSessionEmail(token) {
  if (!token) return null;
  return redis.get(`session:${token}`);
}

async function destroySession(token) {
  if (!token) return;
  await redis.del(`session:${token}`);
}

// ── Admin sessions ──────────────────────────────────────────────
async function createAdminSession() {
  const token = randomToken();
  await redis.set(`adminsession:${token}`, '1', { ex: ADMIN_SESSION_TTL_SECONDS });
  return token;
}

async function isAdminSession(token) {
  if (!token) return false;
  const v = await redis.get(`adminsession:${token}`);
  return v === '1' || v === 1;
}

module.exports = {
  normalizeEmail,
  getStaff,
  saveStaff,
  listStaff,
  deleteStaff,
  createSession,
  getSessionEmail,
  destroySession,
  createAdminSession,
  isAdminSession,
  randomOtp,
  OTP_TTL_SECONDS,
  MAX_OTP_ATTEMPTS,
};
