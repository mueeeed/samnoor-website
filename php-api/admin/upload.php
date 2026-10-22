<?php
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/../lib/security.php';

require_admin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') json_error('Method not allowed.', 405);

$ip = get_client_ip();
if (!rate_limit("upload:$ip", 20, 10 * 60)) {
    json_error('Too many uploads. Try again later.', 429);
}

const MAX_BYTES = 8 * 1024 * 1024; // 8MB raw upload cap
const MAX_DIMENSION = 2400; // re-encoded output is capped to this on the long edge

/**
 * Cover/inline image upload for the blog CMS. This is the highest-risk
 * admin endpoint, so it trusts nothing about the incoming file except its
 * decoded pixel data: the client filename/MIME type are ignored entirely
 * (output filename is always a random id — no path traversal risk), the
 * file is decoded and re-encoded through GD (a polyglot or malformed file
 * fails to decode and is rejected, stripping any embedded payload riding
 * along in the original bytes), and the output is always JPEG.
 */

if (empty($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    json_error('No file provided.', 400);
}

$file = $_FILES['file'];
if ($file['size'] > MAX_BYTES) {
    json_error('File too large. Maximum size is 8MB.', 413);
}

$raw = file_get_contents($file['tmp_name']);
$info = @getimagesizefromstring($raw);
if ($info === false) json_error('File is not a valid image.', 400);

$image = @imagecreatefromstring($raw);
if ($image === false) json_error('File is not a valid image.', 400);

// Apply EXIF orientation before the data (and orientation tag) is discarded.
if (function_exists('exif_read_data') && in_array($info['mime'], ['image/jpeg'], true)) {
    $exif = @exif_read_data($file['tmp_name']);
    $orientation = $exif['Orientation'] ?? 1;
    $image = match ($orientation) {
        3 => imagerotate($image, 180, 0),
        6 => imagerotate($image, -90, 0),
        8 => imagerotate($image, 90, 0),
        default => $image,
    };
}

$width = imagesx($image);
$height = imagesy($image);
$scale = min(1, MAX_DIMENSION / max($width, $height));
$newWidth = max(1, (int) round($width * $scale));
$newHeight = max(1, (int) round($height * $scale));

$resized = imagecreatetruecolor($newWidth, $newHeight);
imagecopyresampled($resized, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

if (!is_dir(UPLOADS_DIR)) mkdir(UPLOADS_DIR, 0755, true);
$filename = bin2hex(random_bytes(16)) . '.jpg';
imagejpeg($resized, UPLOADS_DIR . '/' . $filename, 85);

json_response(['url' => UPLOADS_URL_PREFIX . '/' . $filename], 201);
