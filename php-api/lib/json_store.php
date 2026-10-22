<?php
/**
 * Minimal file-based JSON store — the PHP equivalent of the Node
 * fs-read/atomic-rename pattern the site used to use, so behavior stays the
 * same even though the runtime changed.
 */

function json_store_read(string $path, $default = []) {
    if (!file_exists($path)) return $default;
    $fh = fopen($path, 'r');
    if (!$fh) return $default;
    flock($fh, LOCK_SH);
    $raw = stream_get_contents($fh);
    flock($fh, LOCK_UN);
    fclose($fh);
    $data = json_decode($raw, true);
    return $data === null ? $default : $data;
}

function json_store_write(string $path, $data): void {
    $dir = dirname($path);
    if (!is_dir($dir)) mkdir($dir, 0755, true);
    $tmp = $path . '.' . getmypid() . '.' . microtime(true) . '.tmp';
    file_put_contents($tmp, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
    rename($tmp, $path); // atomic on the same filesystem
}

/** Read-modify-write under an exclusive lock so concurrent requests can't interleave. */
function json_store_update(string $path, callable $mutator, $default = []) {
    if (!is_dir(dirname($path))) mkdir(dirname($path), 0755, true);
    if (!file_exists($path)) file_put_contents($path, json_encode($default));
    $fh = fopen($path, 'c+');
    flock($fh, LOCK_EX);
    $raw = stream_get_contents($fh);
    $data = json_decode($raw, true);
    if ($data === null) $data = $default;
    $result = $mutator($data);
    $new = is_array($result) ? $result : $data;
    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, json_encode($new, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
    fflush($fh);
    flock($fh, LOCK_UN);
    fclose($fh);
    return $new;
}
