# Deploying SamNoor to Hostinger (Business Web Hosting)

## Why this looks different from a typical Next.js deploy

The hosting plan behind `samnoor.in` is **Business Web Hosting** — shared
PHP/static hosting with no Node.js runtime available. Next.js normally needs
a live Node process for anything dynamic (API routes, a database-backed
CMS), so this site is built two ways instead:

- **Frontend**: a fully static export (`next.config.ts` sets
  `output: "export"`) — plain HTML/CSS/JS, exactly what shared hosting
  serves natively.
- **Backend**: the admin blog CMS, the wholesale enquiry form, and the
  newsletter signup are implemented in **PHP** under `php-api/`, since
  Business Web Hosting does run PHP. The frontend calls these endpoints
  with `fetch()` at runtime, the same way it used to call Next API routes.

Blog content specifically is fetched live from PHP rather than baked into
the static HTML, so publishing or editing a post from `/admin/blog` shows
up immediately — no rebuild needed for that. Everything else (product
pages, category pages, static content) is fixed at build time; changing
that content does require rebuilding and re-uploading.

## One-time setup

### 1. Build the static site locally

```bash
npm install
npm run build
```

This produces an `out/` folder — that's the entire frontend.

### 2. Fill in php-api/config.php

Copy `php-api/config.example.php` to `php-api/config.php` if you don't
already have one (it's gitignored on purpose — it will hold a real
password hash). Leave `ADMIN_PASSWORD_HASH` empty for now; you'll generate
it after the first upload (step 5).

Make sure `NOTIFY_EMAIL` (plus `MAIL_FROM_EMAIL` / `MAIL_FROM_NAME`) is set
— that's the inbox new enquiries are emailed to. Without it, enquiries
still show up in the admin panel but no email is sent. `MAIL_FROM_EMAIL`
must be a mailbox that actually exists in Hostinger's Emails panel.

### 3. Upload everything to public_html

Using Hostinger's File Manager or an SFTP client, upload to your domain's
`public_html`:

- Everything inside `out/` (its contents go directly into `public_html`,
  not into an `out` subfolder)
- The whole `php-api/` folder, as a sibling of the site files (so it ends
  up at `public_html/php-api/`)

Do **not** upload `node_modules`, `.next`, `src/`, or any other project
source — none of it is needed on the server; only `out/`'s contents and
`php-api/`.

### 4. Set folder permissions

`php-api/data/` needs to be writable by PHP (this is where blog posts,
enquiries, and newsletter signups are stored as JSON files). In File
Manager, right-click `php-api/data` → Permissions → set to `755` (or `775`
if 755 doesn't allow writes on your account — check with Hostinger support
if uploads/saves fail with a permissions error).

### 5. Generate your admin password

Visit `https://samnoor.in/php-api/tools/hash-password.php` in your browser,
enter a strong password, and copy the hash it prints. Paste it into
`php-api/config.php` as `ADMIN_PASSWORD_HASH` (edit the file directly in
File Manager), then **delete the `php-api/tools/` folder** from the server
— it's a one-time tool and shouldn't stay publicly reachable.

### 6. Test

- Visit `https://samnoor.in/admin/login`, sign in, confirm you can see and
  create blog posts.
- Submit the wholesale enquiry form on the site and confirm it appears
  under `/admin/enquiries`.
- Visit a blog post at `/blog/<slug>/` and confirm it loads (this route is
  served by a single static shell that fetches content from PHP at
  runtime — see `public/.htaccess` for how the URL rewrite works).

## Using the CMS

Manage posts and view enquiries at `/admin/blog` and `/admin/enquiries`.
Uploaded cover images are re-encoded (via PHP's GD extension) and saved to
`public_html/uploads/blog/`; all CMS data lives as JSON under
`php-api/data/`. **Never delete `php-api/data/` or `uploads/` on a
redeploy** — that's where every admin edit and every wholesale lead lives,
independent of the site's code. Back both up periodically, the same as
you'd back up a database.

## Redeploying after a code change

1. `npm run build` locally.
2. Re-upload the contents of `out/` to `public_html`, overwriting the old
   files.
3. Do **not** touch `php-api/data/`, `php-api/config.php`, or
   `uploads/` during this — only the static frontend files change.

If you changed anything under `php-api/`, re-upload just the changed PHP
files (never overwrite `config.php` with a version that has an empty
password hash).

## Security notes

- `php-api/config.php` holds your admin credentials and is never committed
  to git (see `.gitignore`) — treat it like a password file.
- `php-api/data/.htaccess` blocks direct web access to the JSON data files
  (enquiries, subscriber emails, blog drafts) — don't remove it.
- Every admin endpoint under `php-api/admin/` independently checks the PHP
  session before doing anything, so even if someone finds the URL directly
  they can't read or change data without logging in first.
- The admin login is rate-limited (5 attempts / 10 minutes / IP), and
  `/admin` and `/php-api` are excluded from search indexing via
  `robots.txt` and response headers.
- There's no substitute for a strong, unique admin password — set one at
  step 5 above.
