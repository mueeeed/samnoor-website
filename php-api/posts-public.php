<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/lib/security.php';
require_once __DIR__ . '/lib/blog_store.php';

// Public read API the static frontend calls at runtime, since blog content
// can now change after the site was built (unlike the rest of the static
// export). Caching is disabled so a newly published/edited post appears
// immediately rather than waiting on a browser or CDN cache to expire.
header('Cache-Control: no-store, max-age=0');

$action = $_GET['action'] ?? 'list';

if ($action === 'list') {
    json_response(['posts' => blog_get_published()]);
}

if ($action === 'get') {
    $slug = $_GET['slug'] ?? '';
    $post = $slug !== '' ? blog_get_published_by_slug($slug) : null;
    if (!$post) json_error('Post not found.', 404);
    json_response(['post' => $post, 'related' => blog_get_related($post)]);
}

if ($action === 'view') {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') json_error('Method not allowed.', 405);
    $slug = $_GET['slug'] ?? '';
    if ($slug === '') json_error('Missing slug.', 400);
    $views = blog_increment_view($slug);
    json_response(['views' => $views]);
}

json_error('Unknown action.', 400);
