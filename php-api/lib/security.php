<?php
require_once __DIR__ . '/json_store.php';

function json_response($data, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store, max-age=0');
    header('X-Robots-Tag: noindex, nofollow');
    echo json_encode($data);
    exit;
}

function json_error(string $message, int $status = 400): void {
    json_response(['error' => $message], $status);
}

function json_input(): array {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function reject_if_too_large(int $maxBytes = 20000): void {
    $len = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
    if ($len > $maxBytes) json_error('Request too large.', 413);
}

function get_client_ip(): string {
    $candidates = ['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'REMOTE_ADDR'];
    foreach ($candidates as $key) {
        if (!empty($_SERVER[$key])) {
            $ip = trim(explode(',', $_SERVER[$key])[0]);
            if ($ip !== '') return $ip;
        }
    }
    return 'unknown';
}

/** File-backed sliding-window rate limit, mirroring the previous in-memory limiter. */
function rate_limit(string $key, int $maxAttempts, int $windowSeconds): bool {
    $path = DATA_DIR . '/rate-limit.json';
    $now = time();
    $allowed = true;
    json_store_update($path, function ($data) use ($key, $maxAttempts, $windowSeconds, $now, &$allowed) {
        $hits = $data[$key] ?? [];
        $hits = array_values(array_filter($hits, fn($t) => $t > $now - $windowSeconds));
        if (count($hits) >= $maxAttempts) {
            $allowed = false;
        } else {
            $hits[] = $now;
        }
        $data[$key] = $hits;
        // Occasional cleanup so the file doesn't grow forever.
        if (count($data) > 500) {
            foreach ($data as $k => $v) {
                $v = array_values(array_filter($v, fn($t) => $t > $now - $windowSeconds));
                if (empty($v)) unset($data[$k]); else $data[$k] = $v;
            }
        }
        return $data;
    }, []);
    return $allowed;
}

function start_secure_session(): void {
    if (session_status() === PHP_SESSION_ACTIVE) return;
    session_set_cookie_params([
        'lifetime' => SESSION_TTL_SECONDS,
        'path' => '/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict',
    ]);
    session_name('samnoor_admin_session');
    session_start();
}

function is_admin_authenticated(): bool {
    start_secure_session();
    if (empty($_SESSION['admin_authenticated']) || empty($_SESSION['login_time'])) return false;
    if (time() - $_SESSION['login_time'] > SESSION_TTL_SECONDS) {
        session_unset();
        session_destroy();
        return false;
    }
    return true;
}

function require_admin(): void {
    if (!is_admin_authenticated()) json_error('Unauthorized.', 401);
}

function sanitize_plain_text(string $input): string {
    return trim(strip_tags($input));
}

const BLOG_ALLOWED_TAGS = ['p', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'blockquote', 'img', 'br', 'hr', 'code', 'pre', 'figure', 'figcaption'];

function is_valid_image_src(string $src): bool {
    if (strpos($src, 'https://') === 0) return true;
    if (strpos($src, '/') === 0 && strpos($src, '//') !== 0) return true;
    return false;
}

/**
 * Allow-list HTML sanitizer for admin-authored blog content — PHP has no
 * built-in equivalent of sanitize-html, so this walks the DOM directly:
 * disallowed tags are unwrapped (children kept, recursively sanitized),
 * genuinely dangerous tags are dropped with their contents, and every
 * attribute is filtered to an explicit allow-list per tag.
 */
function sanitize_blog_html(string $html): string {
    $dangerousTags = ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input', 'button', 'svg', 'math', 'link', 'meta'];

    $doc = new DOMDocument();
    libxml_use_internal_errors(true);
    $doc->loadHTML('<?xml encoding="utf-8"?><div id="__root__">' . $html . '</div>', LIBXML_NOERROR | LIBXML_NOWARNING);
    libxml_clear_errors();

    $root = $doc->getElementById('__root__');
    if (!$root) return '';

    sanitize_node_children($doc, $root, $dangerousTags);

    $out = '';
    foreach (iterator_to_array($root->childNodes) as $child) {
        $out .= $doc->saveHTML($child);
    }
    return trim($out);
}

function sanitize_node_children(DOMDocument $doc, DOMNode $parent, array $dangerousTags): void {
    $children = iterator_to_array($parent->childNodes);
    foreach ($children as $node) {
        if ($node->nodeType === XML_TEXT_NODE) continue;
        if ($node->nodeType !== XML_ELEMENT_NODE) {
            $parent->removeChild($node);
            continue;
        }
        /** @var DOMElement $node */
        $tag = strtolower($node->tagName);

        if (in_array($tag, $dangerousTags, true)) {
            $parent->removeChild($node);
            continue;
        }

        // Recurse first so nested disallowed/dangerous tags are cleaned either way.
        sanitize_node_children($doc, $node, $dangerousTags);

        if (!in_array($tag, BLOG_ALLOWED_TAGS, true)) {
            // Unwrap: move children up in place of this node.
            while ($node->firstChild) {
                $parent->insertBefore($node->firstChild, $node);
            }
            $parent->removeChild($node);
            continue;
        }

        // Strip every attribute not explicitly allowed for this tag.
        $allowedAttrs = match ($tag) {
            'a' => ['href', 'title', 'target', 'rel'],
            'img' => ['src', 'alt', 'width', 'height'],
            default => [],
        };
        foreach (iterator_to_array($node->attributes ?? []) as $attr) {
            if (!in_array(strtolower($attr->name), $allowedAttrs, true)) {
                $node->removeAttribute($attr->name);
            }
        }

        if ($tag === 'a') {
            $href = $node->getAttribute('href');
            $safe = str_starts_with($href, 'https://') || str_starts_with($href, 'mailto:');
            if (!$safe) { $node->removeAttribute('href'); }
            $node->setAttribute('rel', 'noopener noreferrer');
        }

        if ($tag === 'img') {
            $src = $node->getAttribute('src');
            $safe = str_starts_with($src, 'https://') || str_starts_with($src, 'data:') || is_valid_image_src($src);
            if (!$safe) { $parent->removeChild($node); continue; }
        }
    }
}

function slugify(string $input): string {
    $s = strtolower(trim($input));
    $s = preg_replace('/[^a-z0-9\s-]/', '', $s);
    $s = preg_replace('/\s+/', '-', $s);
    $s = preg_replace('/-+/', '-', $s);
    $s = trim($s, '-');
    return substr($s, 0, 100);
}

function is_valid_slug(string $slug): bool {
    return strlen($slug) > 0 && strlen($slug) <= 100 && preg_match('/^[a-z0-9]+(-[a-z0-9]+)*$/', $slug) === 1;
}

function compute_reading_time(string $html): string {
    $text = trim(preg_replace('/<[^>]+>/', ' ', $html));
    $words = $text === '' ? 0 : count(preg_split('/\s+/', $text));
    $minutes = max(1, (int) round($words / 200));
    return $minutes . ' min read';
}
