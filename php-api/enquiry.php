<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/lib/security.php';
require_once __DIR__ . '/lib/mail.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') json_error('Method not allowed.', 405);

reject_if_too_large(20000);

$ip = get_client_ip();
if (!rate_limit("enquiry:$ip", 5, 10 * 60)) {
    json_error('Too many submissions. Please try again later.', 429);
}

$b = json_input();

function req_str($v, int $max, int $min = 1): ?string {
    if (!is_string($v)) return null;
    $v = trim($v);
    $len = strlen($v);
    if ($len < $min || $len > $max) return null;
    return $v;
}

$fullName = req_str($b['fullName'] ?? null, 150);
$companyName = req_str($b['companyName'] ?? null, 150);
$email = req_str($b['email'] ?? null, 200);
$phone = req_str($b['phone'] ?? null, 50);
$country = req_str($b['country'] ?? null, 100);
$productCategory = req_str($b['productCategory'] ?? null, 100);
$interestedProducts = req_str($b['interestedProducts'] ?? null, 500);
$quantity = req_str($b['quantity'] ?? null, 100);
$targetMarket = req_str($b['targetMarket'] ?? null, 150);
$businessType = req_str($b['businessType'] ?? null, 100);
$preferredContactMethod = req_str($b['preferredContactMethod'] ?? null, 50);
$whatsapp = is_string($b['whatsapp'] ?? null) ? substr(trim($b['whatsapp']), 0, 50) : null;
$message = is_string($b['message'] ?? null) ? substr(trim($b['message']), 0, 2000) : null;
$sourcePage = is_string($b['sourcePage'] ?? null) ? substr(trim($b['sourcePage']), 0, 300) : 'unknown';
$botField = is_string($b['botField'] ?? null) ? $b['botField'] : '';

$valid = $fullName && $companyName && $email && filter_var($email, FILTER_VALIDATE_EMAIL)
    && $phone && $country && $productCategory && $interestedProducts && $quantity
    && $targetMarket && $businessType && $preferredContactMethod;

if (!$valid) json_error('Please check the form and try again.', 400);

// Silently "succeed" for bot submissions so scrapers don't learn the honeypot exists.
if ($botField !== '') json_response(['ok' => true]);

$entry = [
    'id' => bin2hex(random_bytes(16)),
    'submittedAt' => gmdate('Y-m-d\TH:i:s.v\Z'),
    'fullName' => $fullName,
    'companyName' => $companyName,
    'email' => $email,
    'phone' => $phone,
    'whatsapp' => $whatsapp,
    'country' => $country,
    'productCategory' => $productCategory,
    'interestedProducts' => $interestedProducts,
    'quantity' => $quantity,
    'targetMarket' => $targetMarket,
    'businessType' => $businessType,
    'preferredContactMethod' => $preferredContactMethod,
    'privateLabelRequired' => (bool) ($b['privateLabelRequired'] ?? false),
    'oemRequired' => (bool) ($b['oemRequired'] ?? false),
    'customBranding' => (bool) ($b['customBranding'] ?? false),
    'message' => $message,
    'sourcePage' => $sourcePage,
    'status' => 'new',
];

json_store_update(DATA_DIR . '/enquiries.json', function ($all) use ($entry) {
    $all[] = $entry;
    return $all;
}, []);

send_enquiry_notification($entry);

json_response(['ok' => true], 201);
