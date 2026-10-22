<?php
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/../lib/security.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') json_error('Method not allowed.', 405);

start_secure_session();
$_SESSION = [];
session_destroy();

json_response(['ok' => true]);
