import type { NextConfig } from "next";

// Static export for Hostinger shared hosting (no Node.js runtime available
// on the plan this site runs on) — the CMS backend that used to live in
// Next API routes now lives in php-api/, which shared hosting can run.
// Security headers moved to .htaccess since `headers()` isn't supported
// with `output: "export"`. trailingSlash keeps every route as a real
// `<path>/index.html` file, which Apache serves natively without rewrite
// rules for anything except the dynamic-content blog post route (see
// .htaccess for that one exception).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
