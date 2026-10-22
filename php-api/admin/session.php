<?php
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/../lib/security.php';

// Lets the admin SPA pages check "am I logged in?" on load, since there's
// no server-rendered layout left to gate access before the page paints.
json_response(['authenticated' => is_admin_authenticated()]);
