<?php
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/../lib/security.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') json_error('Method not allowed.', 405);

$ip = get_client_ip();
// 5 attempts per 10 minutes per IP — enough for a real user who mistypes a
// password, nowhere near enough for a brute-force attempt to matter.
if (!rate_limit("login:$ip", 5, 10 * 60)) {
    json_error('Too many login attempts. Try again later.', 429);
}

reject_if_too_large(10000);

$b = json_input();
$username = is_string($b['username'] ?? null) ? trim($b['username']) : '';
$password = is_string($b['password'] ?? null) ? $b['password'] : '';

if ($username === '' || strlen($username) > 100 || $password === '' || strlen($password) > 200) {
    json_error('Invalid request.', 400);
}

$usernameMatches = hash_equals(ADMIN_USERNAME, $username);
$passwordMatches = ADMIN_PASSWORD_HASH !== '' && password_verify($password, ADMIN_PASSWORD_HASH);

if (!$usernameMatches || !$passwordMatches) {
    json_error('Invalid username or password.', 401);
}

start_secure_session();
session_regenerate_id(true);
$_SESSION['admin_authenticated'] = true;
$_SESSION['login_time'] = time();
$_SESSION['sub'] = $username;

json_response(['ok' => true]);
