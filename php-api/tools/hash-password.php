<?php
/**
 * One-time helper: generates the ADMIN_PASSWORD_HASH value to paste into
 * config.php. Visit this file once in your browser after deploying, submit
 * your chosen password, copy the "scrypt equivalent" bcrypt hash it prints,
 * paste it into php-api/config.php as ADMIN_PASSWORD_HASH, then DELETE this
 * file (or at least this folder) from the server — leaving it up is not a
 * login bypass (it only ever computes a hash, never sets anything), but
 * there's no reason to leave a password-hashing tool publicly reachable.
 */

$hash = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = $_POST['password'] ?? '';
    if (strlen($password) < 8) {
        $error = 'Password must be at least 8 characters.';
    } else {
        $hash = password_hash($password, PASSWORD_DEFAULT);
    }
}
?>
<!doctype html>
<html>
<head><meta charset="utf-8"><title>Generate admin password hash</title></head>
<body style="font-family: system-ui, sans-serif; max-width: 640px; margin: 40px auto; padding: 0 16px;">
  <h1>Generate ADMIN_PASSWORD_HASH</h1>
  <?php if (!empty($error)): ?><p style="color:red;"><?= htmlspecialchars($error) ?></p><?php endif; ?>
  <?php if ($hash): ?>
    <p><strong>Copy this whole value into <code>config.php</code>'s <code>ADMIN_PASSWORD_HASH</code>:</strong></p>
    <textarea readonly style="width:100%;height:80px;"><?= htmlspecialchars($hash) ?></textarea>
    <p>Then delete this <code>tools/</code> folder from the server.</p>
  <?php else: ?>
    <form method="post">
      <label>Choose an admin password: <input type="password" name="password" minlength="8" required autofocus></label>
      <button type="submit">Generate hash</button>
    </form>
  <?php endif; ?>
</body>
</html>
