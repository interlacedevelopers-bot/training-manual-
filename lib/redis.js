const { Redis } = require('@upstash/redis');

// Vercel's "Redis" marketplace product (Upstash-backed) exposes REST
// credentials as KV_REST_API_URL / KV_REST_API_TOKEN rather than the
// UPSTASH_REDIS_REST_* names @upstash/redis looks for by default.
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

module.exports = { redis };
