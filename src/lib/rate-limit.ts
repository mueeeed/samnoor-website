/**
 * In-memory sliding-window rate limiter. Good enough for a single Node
 * process on a single Hostinger instance — this is not a multi-instance
 * distributed limiter, but it stops brute-force login attempts, upload
 * abuse, and view-count inflation from a single source without adding an
 * external dependency (Redis, etc.) the hosting plan may not have.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

// Periodically drop expired buckets so this map can't grow unbounded under
// sustained traffic from many distinct IPs.
const SWEEP_INTERVAL_MS = 5 * 60 * 1000;
let lastSweep = Date.now();
function sweep() {
  const now = Date.now();
  if (now - lastSweep < SWEEP_INTERVAL_MS) return;
  lastSweep = now;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt < now) buckets.delete(key);
  }
}

export type RateLimitResult = { allowed: boolean; remaining: number; resetAt: number };

/**
 * @param key unique identifier for the caller + action, e.g. `login:1.2.3.4`
 * @param limit max requests allowed per window
 * @param windowMs window size in milliseconds
 */
export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  sweep();
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (existing.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return { allowed: true, remaining: limit - existing.count, resetAt: existing.resetAt };
}

/** Best-effort client IP extraction behind a reverse proxy (Hostinger, Cloudflare, etc.). */
export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}
