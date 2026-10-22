<?php
require_once __DIR__ . '/json_store.php';
require_once __DIR__ . '/security.php';

define('BLOG_DATA_FILE', DATA_DIR . '/blog-posts.json');

function blog_read_all(): array {
    return json_store_read(BLOG_DATA_FILE, []);
}

function blog_get_all_for_admin(): array {
    $posts = blog_read_all();
    usort($posts, fn($a, $b) => strtotime($b['updatedAt'] ?? $b['publishedAt']) <=> strtotime($a['updatedAt'] ?? $a['publishedAt']));
    return $posts;
}

function blog_get_published(): array {
    $posts = array_values(array_filter(blog_read_all(), fn($p) => ($p['status'] ?? '') === 'published'));
    usort($posts, fn($a, $b) => strtotime($b['publishedAt']) <=> strtotime($a['publishedAt']));
    return $posts;
}

function blog_get_published_by_slug(string $slug): ?array {
    foreach (blog_get_published() as $p) {
        if ($p['slug'] === $slug) return $p;
    }
    return null;
}

function blog_get_by_id(string $id): ?array {
    foreach (blog_read_all() as $p) {
        if ($p['id'] === $id) return $p;
    }
    return null;
}

function blog_get_related(array $post, int $limit = 3): array {
    $published = array_values(array_filter(blog_get_published(), fn($p) => $p['id'] !== $post['id']));
    $sameCategory = array_values(array_filter($published, fn($p) => $p['category'] === $post['category']));
    $rest = array_values(array_filter($published, fn($p) => $p['category'] !== $post['category']));
    return array_slice(array_merge($sameCategory, $rest), 0, $limit);
}

function blog_public_view(array $p): array {
    // Strip nothing right now, but keep this seam in case admin-only fields
    // (none currently) ever need to be excluded from the public API.
    return $p;
}

/** @return array{0: bool, 1: array|string} [ok, post|errorMessage] */
function blog_create_post(array $input): array {
    $posts = blog_read_all();
    foreach ($posts as $p) {
        if ($p['slug'] === $input['slug']) return [false, "A post with slug \"{$input['slug']}\" already exists."];
    }
    $sanitizedContent = sanitize_blog_html($input['content']);
    $now = gmdate('Y-m-d\TH:i:s\Z');
    $post = [
        'id' => bin2hex(random_bytes(12)),
        'slug' => $input['slug'],
        'title' => sanitize_plain_text($input['title']),
        'excerpt' => sanitize_plain_text($input['excerpt']),
        'coverImage' => ['src' => $input['coverImageSrc'], 'alt' => sanitize_plain_text($input['coverImageAlt'])],
        'author' => sanitize_plain_text($input['author']),
        'authorRole' => sanitize_plain_text($input['authorRole']),
        'publishedAt' => $input['publishedAt'] ?? $now,
        'updatedAt' => $now,
        'readingTime' => compute_reading_time($sanitizedContent),
        'category' => sanitize_plain_text($input['category']),
        'tags' => array_values(array_filter(array_map('sanitize_plain_text', $input['tags'] ?? []))),
        'content' => $sanitizedContent,
        'faqs' => isset($input['faqs']) ? array_map(fn($f) => ['question' => sanitize_plain_text($f['question']), 'answer' => sanitize_plain_text($f['answer'])], $input['faqs']) : null,
        'status' => $input['status'],
        'views' => 0,
    ];
    $posts[] = $post;
    json_store_write(BLOG_DATA_FILE, $posts);
    return [true, $post];
}

/** @return array{0: bool, 1: array|string} */
function blog_update_post(string $id, array $input): array {
    $posts = blog_read_all();
    $index = null;
    foreach ($posts as $i => $p) if ($p['id'] === $id) { $index = $i; break; }
    if ($index === null) return [false, 'Post not found.'];

    foreach ($posts as $p) {
        if ($p['id'] !== $id && $p['slug'] === $input['slug']) return [false, "A post with slug \"{$input['slug']}\" already exists."];
    }

    $sanitizedContent = sanitize_blog_html($input['content']);
    $existing = $posts[$index];
    $updated = array_merge($existing, [
        'slug' => $input['slug'],
        'title' => sanitize_plain_text($input['title']),
        'excerpt' => sanitize_plain_text($input['excerpt']),
        'coverImage' => ['src' => $input['coverImageSrc'], 'alt' => sanitize_plain_text($input['coverImageAlt'])],
        'author' => sanitize_plain_text($input['author']),
        'authorRole' => sanitize_plain_text($input['authorRole']),
        'publishedAt' => $input['publishedAt'] ?? $existing['publishedAt'],
        'updatedAt' => gmdate('Y-m-d\TH:i:s\Z'),
        'readingTime' => compute_reading_time($sanitizedContent),
        'category' => sanitize_plain_text($input['category']),
        'tags' => array_values(array_filter(array_map('sanitize_plain_text', $input['tags'] ?? []))),
        'content' => $sanitizedContent,
        'faqs' => isset($input['faqs']) ? array_map(fn($f) => ['question' => sanitize_plain_text($f['question']), 'answer' => sanitize_plain_text($f['answer'])], $input['faqs']) : null,
        'status' => $input['status'],
    ]);
    $posts[$index] = $updated;
    json_store_write(BLOG_DATA_FILE, $posts);
    return [true, $updated];
}

function blog_delete_post(string $id): bool {
    $posts = blog_read_all();
    $next = array_values(array_filter($posts, fn($p) => $p['id'] !== $id));
    if (count($next) === count($posts)) return false;
    json_store_write(BLOG_DATA_FILE, $next);
    return true;
}

function blog_increment_view(string $slug): ?int {
    $result = null;
    json_store_update(BLOG_DATA_FILE, function ($posts) use ($slug, &$result) {
        foreach ($posts as $i => $p) {
            if ($p['slug'] === $slug && ($p['status'] ?? '') === 'published') {
                $posts[$i]['views'] = ($p['views'] ?? 0) + 1;
                $result = $posts[$i]['views'];
                break;
            }
        }
        return $posts;
    }, []);
    return $result;
}
