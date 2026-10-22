<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/lib/security.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') json_error('Method not allowed.', 405);

reject_if_too_large(5000);

$ip = get_client_ip();
if (!rate_limit("newsletter:$ip", 5, 10 * 60)) {
    json_error('Too many attempts. Please try again later.', 429);
}

$b = json_input();
$email = is_string($b['email'] ?? null) ? trim($b['email']) : '';
$botField = is_string($b['botField'] ?? null) ? $b['botField'] : '';

if ($email === '' || strlen($email) > 200 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_error('Please enter a valid email address.', 400);
}

if ($botField !== '') json_response(['ok' => true]);

json_store_update(DATA_DIR . '/newsletter-subscribers.json', function ($all) use ($email) {
    foreach ($all as $s) {
        if (strtolower($s['email']) === strtolower($email)) return $all;
    }
    $all[] = ['email' => $email, 'subscribedAt' => gmdate('Y-m-d\TH:i:s\Z')];
    return $all;
}, []);

json_response(['ok' => true], 201);
