type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

/**
 * In-memory token bucket keyed by IP. Fine for a single Node instance;
 * swap for a Redis-backed limiter (e.g. Upstash) once running behind
 * multiple instances/load balancing.
 */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}
