# Deploying SamNoor to Hostinger

## What changed from the earlier static export

The blog is now a live CMS: you write and publish posts from `/admin/blog`
on the site itself, and posts are saved to a JSON file on the server
(`data/blog-posts.json`), not baked into the code at build time. That
requires an actual running Node.js process — a plain static file host
(the earlier "drag-and-drop to Netlify" setup) can't do this. `next.config.ts`
no longer uses `output: "export"`.

## What you need on Hostinger

A plan with **Node.js application hosting** — this is available on
Hostinger's Business and Cloud hosting plans (and any VPS), managed from
hPanel under **Setup Node.js App**. A basic shared/PHP-only plan cannot run
this site as a live CMS.

## One-time setup

1. **Upload the project** to your Hostinger Node.js app directory (via Git,
   SFTP, or Hostinger's file manager) — everything except `node_modules`,
   `.next`, `data/`, and `public/uploads/` (all already gitignored).

2. **Install dependencies and build**, either via hPanel's Node.js app
   screen or SSH:
   ```bash
   npm install
   npm run build
   ```

3. **Generate your admin password hash** — never put a plaintext password
   anywhere:
   ```bash
   npm run hash-password -- "choose-a-strong-password-here"
   ```
   Copy the full `scrypt:...:...` output.

4. **Generate a session secret**:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

5. **Set environment variables** in hPanel's Node.js app screen (Environment
   Variables section) — see `.env.example` for the full list:
   - `ADMIN_USERNAME` — your admin login name
   - `ADMIN_PASSWORD_HASH` — the value from step 3
   - `SESSION_SECRET` — the value from step 4

6. **Set the startup file/command** to `npm run start` (this runs `next
   start`, the production server — do not use `next dev` in production).

7. **Point your domain's SSL** at the app (Hostinger issues free SSL
   automatically for most plans). The site sends a `Strict-Transport-
   Security` header and sets cookies as `secure` in production, so it must
   be served over HTTPS — otherwise logins to `/admin` will fail silently
   in the browser.

## Using the CMS

Visit `https://yourdomain.com/admin/login`, sign in with the credentials
you configured, and manage posts under **Blog Posts**. Uploaded cover
images are re-encoded and saved to `public/uploads/blog/`; post data lives
in `data/blog-posts.json`. **Never delete either of these directories on a
redeploy** — that's where all admin edits live, independent of the code.

## Redeploying after a code change

Pulling new code and rebuilding (`npm install && npm run build`, then
restarting the app) is safe — it never touches `data/` or
`public/uploads/`. Back up both directories periodically regardless, the
same as you would a database.

## Keeping it secure over time

- Run `npm audit` occasionally and update dependencies — this project was
  built against a patched Next.js after a critical RCE advisory
  (GHSA-p293-qw3h-jr36) affecting earlier 16.x releases; don't downgrade
  Next.js below the version pinned in `package-lock.json` without checking
  the advisory is still fixed.
- Rotate `SESSION_SECRET` if you ever suspect it leaked — this immediately
  invalidates every existing admin session.
- The admin login is rate-limited (5 attempts / 10 minutes / IP) and
  `/admin` + `/api` are excluded from search indexing and caching, but
  there's no substitute for a strong, unique password.
