<?php
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/../lib/security.php';

require_admin();

$method = $_SERVER['REQUEST_METHOD'];
$id = $_GET['id'] ?? null;
$path = DATA_DIR . '/enquiries.json';

if ($method === 'GET') {
    $all = json_store_read($path, []);
    usort($all, fn($a, $b) => strtotime($b['submittedAt']) <=> strtotime($a['submittedAt']));
    json_response(['enquiries' => $all]);
}

if ($method === 'PATCH') {
    if (!$id) json_error('Missing id.', 400);
    $b = json_input();
    $status = $b['status'] ?? '';
    if (!in_array($status, ['new', 'contacted', 'closed'], true)) json_error('Invalid status.', 400);

    $found = false;
    json_store_update($path, function ($all) use ($id, $status, &$found) {
        foreach ($all as $i => $e) {
            if ($e['id'] === $id) { $all[$i]['status'] = $status; $found = true; break; }
        }
        return $all;
    }, []);
    if (!$found) json_error('Enquiry not found.', 404);
    json_response(['ok' => true]);
}

if ($method === 'DELETE') {
    if (!$id) json_error('Missing id.', 400);
    $found = false;
    json_store_update($path, function ($all) use ($id, &$found) {
        $next = array_values(array_filter($all, fn($e) => $e['id'] !== $id));
        $found = count($next) !== count($all);
        return $next;
    }, []);
    if (!$found) json_error('Enquiry not found.', 404);
    json_response(['ok' => true]);
}

json_error('Method not allowed.', 405);
