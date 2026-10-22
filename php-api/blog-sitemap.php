<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/lib/security.php';
require_once __DIR__ . '/lib/blog_store.php';

// Blog posts are excluded from the build-time sitemap.xml because they can
// change after the static export was built. This generates that part of
// the sitemap live instead, so new/edited posts stay discoverable without
// a full site rebuild.

header('Content-Type: application/xml; charset=utf-8');
header('Cache-Control: public, max-age=300');

$siteUrl = 'https://samnoor.in';

echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
foreach (blog_get_published() as $p) {
    $lastmod = date('c', strtotime($p['updatedAt'] ?? $p['publishedAt']));
    echo "  <url>\n";
    echo '    <loc>' . htmlspecialchars($siteUrl . '/blog/' . $p['slug']) . "</loc>\n";
    echo '    <lastmod>' . $lastmod . "</lastmod>\n";
    echo "    <changefreq>monthly</changefreq>\n";
    echo "    <priority>0.6</priority>\n";
    echo "  </url>\n";
}
echo '</urlset>';
