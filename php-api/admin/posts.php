<?php
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/../lib/security.php';
require_once __DIR__ . '/../lib/blog_store.php';

require_admin();

$method = $_SERVER['REQUEST_METHOD'];
$id = $_GET['id'] ?? null;

if ($method === 'GET') {
    if ($id) {
        $post = blog_get_by_id($id);
        if (!$post) json_error('Post not found.', 404);
        json_response(['post' => $post]);
    }
    json_response(['posts' => blog_get_all_for_admin()]);
}

function validate_post_input(array $b): array|string {
    $faqs = null;
    if (isset($b['faqs'])) {
        if (!is_array($b['faqs']) || count($b['faqs']) > 20) return 'Invalid FAQs.';
        $faqs = [];
        foreach ($b['faqs'] as $f) {
            $q = trim($f['question'] ?? '');
            $a = trim($f['answer'] ?? '');
            if ($q === '' || strlen($q) > 300 || $a === '' || strlen($a) > 2000) return 'Invalid FAQ entry.';
            $faqs[] = ['question' => $q, 'answer' => $a];
        }
    }

    $tags = is_array($b['tags'] ?? null) ? array_slice(array_values($b['tags']), 0, 20) : [];

    $title = trim($b['title'] ?? '');
    $slug = trim($b['slug'] ?? '');
    $excerpt = trim($b['excerpt'] ?? '');
    $coverImageSrc = trim($b['coverImageSrc'] ?? '');
    $coverImageAlt = trim($b['coverImageAlt'] ?? '');
    $author = trim($b['author'] ?? '');
    $authorRole = trim($b['authorRole'] ?? '');
    $category = trim($b['category'] ?? '');
    $content = $b['content'] ?? '';
    $status = $b['status'] ?? '';

    if ($title === '' || strlen($title) > 200) return 'Invalid title.';
    if (!is_valid_slug($slug)) return 'Slug must be lowercase letters, numbers, and hyphens only.';
    if ($excerpt === '' || strlen($excerpt) > 400) return 'Invalid excerpt.';
    if ($coverImageSrc === '' || strlen($coverImageSrc) > 2000 || !is_valid_image_src($coverImageSrc)) return 'Image URL must be https:// or a local path.';
    if ($coverImageAlt === '' || strlen($coverImageAlt) > 300) return 'Invalid image alt text.';
    if ($author === '' || strlen($author) > 100) return 'Invalid author.';
    if ($authorRole === '' || strlen($authorRole) > 100) return 'Invalid author role.';
    if ($category === '' || strlen($category) > 100) return 'Invalid category.';
    if (!is_string($content) || $content === '' || strlen($content) > 200000) return 'Invalid content.';
    if (!in_array($status, ['draft', 'published'], true)) return 'Invalid status.';

    return [
        'title' => $title, 'slug' => $slug, 'excerpt' => $excerpt,
        'coverImageSrc' => $coverImageSrc, 'coverImageAlt' => $coverImageAlt,
        'author' => $author, 'authorRole' => $authorRole, 'category' => $category,
        'tags' => $tags, 'content' => $content, 'faqs' => $faqs, 'status' => $status,
        'publishedAt' => is_string($b['publishedAt'] ?? null) ? $b['publishedAt'] : null,
    ];
}

if ($method === 'POST') {
    reject_if_too_large(300000);
    $b = json_input();
    $input = validate_post_input($b);
    if (is_string($input)) json_error($input, 400);
    [$ok, $result] = blog_create_post($input);
    if (!$ok) json_error($result, 409);
    json_response(['post' => $result], 201);
}

if ($method === 'PUT') {
    if (!$id) json_error('Missing id.', 400);
    reject_if_too_large(300000);
    $b = json_input();
    $input = validate_post_input($b);
    if (is_string($input)) json_error($input, 400);
    [$ok, $result] = blog_update_post($id, $input);
    if (!$ok) json_error($result, $result === 'Post not found.' ? 404 : 409);
    json_response(['post' => $result]);
}

if ($method === 'DELETE') {
    if (!$id) json_error('Missing id.', 400);
    if (!blog_delete_post($id)) json_error('Post not found.', 404);
    json_response(['ok' => true]);
}

json_error('Method not allowed.', 405);
