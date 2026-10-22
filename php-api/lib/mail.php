<?php
/**
 * Minimal notification email sender built on PHP's built-in mail(), since
 * this is shared hosting with no Composer/vendor setup for something like
 * PHPMailer. From/envelope-sender stay on the samnoor.in domain so SPF
 * (configured in DNS for Hostinger's mail servers) lines up. Sends a
 * multipart message (HTML + plain-text fallback) rather than HTML-only,
 * since that's both better practice and less likely to get spam-flagged.
 */

function enquiry_field_rows(array $entry): array {
    $yesNo = fn(bool $v) => $v ? 'Yes' : 'No';
    return [
        'Name' => $entry['fullName'],
        'Company' => $entry['companyName'],
        'Email' => $entry['email'],
        'Phone' => $entry['phone'],
        'WhatsApp' => $entry['whatsapp'] ?: '—',
        'Country' => $entry['country'],
        'Product category' => $entry['productCategory'],
        'Interested products' => $entry['interestedProducts'],
        'Quantity' => $entry['quantity'],
        'Target market' => $entry['targetMarket'],
        'Business type' => $entry['businessType'],
        'Preferred contact method' => $entry['preferredContactMethod'],
        'Private label required' => $yesNo($entry['privateLabelRequired']),
        'OEM required' => $yesNo($entry['oemRequired']),
        'Custom branding' => $yesNo($entry['customBranding']),
        'Submitted from' => $entry['sourcePage'],
    ];
}

function enquiry_notification_text(array $entry): string {
    $lines = ['A new wholesale enquiry was submitted on samnoor.in.', ''];
    foreach (enquiry_field_rows($entry) as $label => $value) {
        $lines[] = $label . ': ' . $value;
    }
    $lines[] = 'Message: ' . ($entry['message'] ?: '—');
    $lines[] = '';
    $lines[] = 'View in the admin panel: https://samnoor.in/admin/enquiries';
    return implode("\n", $lines);
}

function enquiry_notification_html(array $entry): string {
    $e = fn($v) => htmlspecialchars((string) $v, ENT_QUOTES, 'UTF-8');

    $rows = '';
    foreach (enquiry_field_rows($entry) as $label => $value) {
        $rows .= '<tr>'
            . '<td style="padding:10px 16px;border-bottom:1px solid #eee;color:#6b6b63;font-size:13px;white-space:nowrap;vertical-align:top;">' . $e($label) . '</td>'
            . '<td style="padding:10px 16px;border-bottom:1px solid #eee;color:#1a1a18;font-size:14px;">' . $e($value) . '</td>'
            . '</tr>';
    }

    $message = $entry['message']
        ? '<div style="margin-top:20px;padding:16px;background:#faf7f1;border-left:3px solid #c9a635;border-radius:4px;">'
            . '<div style="font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#6b6b63;margin-bottom:6px;">Message</div>'
            . '<div style="font-size:14px;color:#1a1a18;white-space:pre-wrap;">' . $e($entry['message']) . '</div>'
            . '</div>'
        : '';

    return <<<HTML
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f2ec;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2ec;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;max-width:600px;">
          <tr>
            <td style="background:#1a1a18;padding:24px 28px;">
              <div style="color:#c9a635;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:4px;">SamNoor &middot; Wholesale Enquiry</div>
              <div style="color:#ffffff;font-size:20px;font-weight:bold;">New Enquiry from {$e($entry['companyName'])}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 12px 8px 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                {$rows}
              </table>
              <div style="padding:0 16px;">{$message}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 28px 28px 28px;">
              <a href="https://samnoor.in/admin/enquiries" style="display:inline-block;background:#c9a635;color:#1a1a18;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 22px;border-radius:4px;">View in Admin Panel</a>
            </td>
          </tr>
        </table>
        <div style="color:#9a9a90;font-size:11px;margin-top:16px;">Sent automatically from the enquiry form on samnoor.in</div>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;
}

function send_enquiry_notification(array $entry): void {
    if (!defined('NOTIFY_EMAIL') || NOTIFY_EMAIL === '') {
        error_log('send_enquiry_notification: NOTIFY_EMAIL is not set in config.php — enquiry ' . $entry['id'] . ' was saved but not emailed');
        return;
    }

    $subject = 'New wholesale enquiry — ' . $entry['companyName'];
    $fromEmail = defined('MAIL_FROM_EMAIL') ? MAIL_FROM_EMAIL : NOTIFY_EMAIL;
    $fromName = defined('MAIL_FROM_NAME') ? MAIL_FROM_NAME : 'SamNoor Website';

    $boundary = 'samnoor-' . bin2hex(random_bytes(12));
    $text = enquiry_notification_text($entry);
    $html = enquiry_notification_html($entry);

    // base64 parts keep every line under SMTP's 998-char limit (the HTML
    // table is one long line) and are safe for any UTF-8 in the enquiry.
    $body = "--{$boundary}\r\n"
        . "Content-Type: text/plain; charset=utf-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($text)) . "\r\n"
        . "--{$boundary}\r\n"
        . "Content-Type: text/html; charset=utf-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($html)) . "\r\n"
        . "--{$boundary}--";

    // Names are header-encoded so a CR/LF typed into the form can't inject headers.
    $headers = [
        'From: ' . mime_header_encode($fromName) . ' <' . $fromEmail . '>',
        'Reply-To: ' . mime_header_encode($entry['fullName']) . ' <' . $entry['email'] . '>',
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
        'X-Mailer: PHP/' . phpversion(),
    ];

    // Failures are logged, not thrown — the enquiry is already saved to
    // enquiries.json regardless, so a mail delivery problem should never
    // fail the form submission itself.
    if (defined('SMTP_HOST') && SMTP_HOST !== '') {
        $error = smtp_send(NOTIFY_EMAIL, $fromEmail, mime_header_encode($subject), $headers, $body);
        if ($error !== null) {
            error_log('send_enquiry_notification: SMTP failed for enquiry ' . $entry['id'] . ': ' . $error);
        }
        return;
    }

    // Fallback when no SMTP login is configured. Hostinger's mail() hands
    // messages off but doesn't reliably deliver them to its own mailboxes.
    // -f sets the envelope sender (Return-Path) so SPF lines up.
    $sent = @mail(NOTIFY_EMAIL, mime_header_encode($subject), $body, implode("\r\n", $headers), '-f' . $fromEmail);
    if (!$sent) {
        error_log('send_enquiry_notification: mail() returned false for enquiry ' . $entry['id']);
    }
}

function mime_header_encode(string $value): string {
    $value = str_replace(["\r", "\n"], ' ', $value);
    return preg_match('/[^\x20-\x7e]/', $value) ? '=?UTF-8?B?' . base64_encode($value) . '?=' : $value;
}

/**
 * Sends one message over authenticated SMTP (implicit TLS, e.g. Hostinger's
 * smtp.hostinger.com:465) using the mailbox's own login. Returns null on
 * success, or a short description of the failing step.
 */
function smtp_send(string $to, string $from, string $encodedSubject, array $headers, string $body): ?string {
    $port = defined('SMTP_PORT') ? SMTP_PORT : 465;
    $socket = @stream_socket_client('ssl://' . SMTP_HOST . ':' . $port, $errno, $errstr, 15);
    if (!$socket) return "connect: $errstr ($errno)";
    stream_set_timeout($socket, 15);

    $read = function () use ($socket): string {
        $response = '';
        while (($line = fgets($socket, 515)) !== false) {
            $response .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') break;
        }
        return $response;
    };
    $command = function (?string $line, int $expect) use ($socket, $read): ?string {
        if ($line !== null) fwrite($socket, $line . "\r\n");
        $response = $read();
        return (int) substr($response, 0, 3) === $expect ? null : (trim($response) ?: 'no response');
    };

    $message = implode("\r\n", array_merge([
        'Date: ' . date('r'),
        'To: ' . $to,
        'Subject: ' . $encodedSubject,
        'Message-ID: <' . bin2hex(random_bytes(16)) . '@' . substr(strrchr($from, '@'), 1) . '>',
    ], $headers)) . "\r\n\r\n" . $body;
    // Dot-stuffing: a line starting with "." would otherwise end the DATA block early.
    $message = preg_replace('/^\./m', '..', $message);

    $steps = [
        [null, 220],
        ['EHLO ' . (gethostname() ?: 'localhost'), 250],
        ['AUTH LOGIN', 334],
        [base64_encode(SMTP_USER), 334],
        [base64_encode(SMTP_PASS), 235],
        ['MAIL FROM:<' . $from . '>', 250],
        ['RCPT TO:<' . $to . '>', 250],
        ['DATA', 354],
        [$message . "\r\n.", 250],
    ];
    foreach ($steps as $i => [$line, $expect]) {
        $error = $command($line, $expect);
        if ($error !== null) {
            fclose($socket);
            // Never echo the credentials back into the log.
            $label = match ($i) { 0 => 'greeting', 3, 4 => 'AUTH', 8 => 'message', default => strtok($line, ' ') };
            return $label . ': ' . $error;
        }
    }
    $command('QUIT', 221);
    fclose($socket);
    return null;
}
