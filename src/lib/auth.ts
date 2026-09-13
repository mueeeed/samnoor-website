import crypto from "node:crypto";

/**
 * Minimal, dependency-free session auth for the single-admin blog CMS.
 *
 * Credentials live only in environment variables (never in a JSON file or
 * the repo) — see `.env.example`. Passwords are hashed with scrypt (Node's
 * built-in, memory-hard KDF) rather than stored or compared in plain text.
 * Sessions are a signed, expiring token in an httpOnly cookie; the signature
 * uses HMAC-SHA256 over the payload with a server-only secret, so a client
 * can never forge or extend a session without the secret.
 */

export const SESSION_COOKIE = "samnoor_admin_session";
const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "SESSION_SECRET is missing or too short. Set a random 32+ character value in your environment before starting the server."
    );
  }
  return secret;
}

function base64url(input: Buffer): string {
  return input.toString("base64url");
}

function sign(payload: string): string {
  const hmac = crypto.createHmac("sha256", getSessionSecret());
  hmac.update(payload);
  return base64url(hmac.digest());
}

export function createSessionToken(username: string): string {
  const payload = JSON.stringify({ sub: username, exp: Date.now() + SESSION_TTL_MS });
  const encodedPayload = base64url(Buffer.from(payload, "utf8"));
  const signature = sign(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export function verifySessionToken(token: string | undefined | null): { sub: string } | null {
  if (!token) return null;
  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return null;

  const expected = sign(encodedPayload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8")) as {
      sub: string;
      exp: number;
    };
    if (typeof payload.exp !== "number" || Date.now() > payload.exp) return null;
    if (typeof payload.sub !== "string" || !payload.sub) return null;
    return { sub: payload.sub };
  } catch {
    return null;
  }
}

/** scrypt hash format we store in ADMIN_PASSWORD_HASH: "scrypt:<saltHex>:<hashHex>" */
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(password, salt, 64);
  return `scrypt:${salt.toString("hex")}:${hash.toString("hex")}`;
}

export function verifyPassword(password: string, stored: string | undefined): boolean {
  if (!stored) return false;
  const parts = stored.split(":");
  if (parts.length !== 3 || parts[0] !== "scrypt") return false;
  const [, saltHex, hashHex] = parts;
  try {
    const salt = Buffer.from(saltHex, "hex");
    const expected = Buffer.from(hashHex, "hex");
    const actual = crypto.scryptSync(password, salt, expected.length);
    return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}

export function verifyCredentials(username: string, password: string): boolean {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedHash = process.env.ADMIN_PASSWORD_HASH;
  if (!expectedUsername || !expectedHash) return false;

  // Compare usernames in constant time too, so a login attempt can't be used
  // to enumerate whether a given username is the configured admin account.
  const usernameBuf = Buffer.from(username);
  const expectedBuf = Buffer.from(expectedUsername);
  const usernameMatches =
    usernameBuf.length === expectedBuf.length && crypto.timingSafeEqual(usernameBuf, expectedBuf);

  const passwordMatches = verifyPassword(password, expectedHash);
  return usernameMatches && passwordMatches;
}
