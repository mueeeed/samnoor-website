<?php
// Admin credentials and secrets for the PHP backend. This file only defines
// variables and is never included from a URL that echoes it, so requesting
// it directly over HTTP returns a blank page — but data/.htaccess and the
// site .htaccess also block direct access to this whole directory's data,
// and this file itself should never be placed anywhere web-indexable beyond
// what deployment requires.
//
// Generate ADMIN_PASSWORD_HASH by visiting /php-api/tools/hash-password.php
// once after deploying, then delete that tool file (see its own header).

define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD_HASH', ''); // paste the password_hash() output here

define('SESSION_TTL_SECONDS', 8 * 60 * 60);

define('DATA_DIR', __DIR__ . '/data');
define('UPLOADS_DIR', __DIR__ . '/../uploads/blog');
define('UPLOADS_URL_PREFIX', '/uploads/blog');

// Where new wholesale enquiry notifications are sent, and what address/name
// they're sent from (kept on the samnoor.in domain so SPF lines up). Without
// NOTIFY_EMAIL, enquiries are only saved to the admin panel, never emailed.
define('NOTIFY_EMAIL', 'sales@samnoor.in');
define('MAIL_FROM_EMAIL', 'sales@samnoor.in');
define('MAIL_FROM_NAME', 'SamNoor Website');

// SMTP login for the MAIL_FROM_EMAIL mailbox (Hostinger → Emails). Hostinger's
// PHP mail() doesn't reliably deliver to its own mailboxes, so set these.
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 465);
define('SMTP_USER', 'sales@samnoor.in');
define('SMTP_PASS', ''); // the mailbox password
