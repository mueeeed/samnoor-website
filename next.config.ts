import type { NextConfig } from "next";

// Content-Security-Policy: locked down to 'self' everywhere except the few
// things the site genuinely needs. script-src keeps 'unsafe-inline' because
// the Next.js App Router streams its RSC flight-data payload via inline
// <script> tags during SSR — there is no way to avoid this without wiring a
// per-request nonce through every layout, which isn't worth the added
// complexity for a site this size. Every other directive is fully closed.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: https: blob:",
  "connect-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    // Explicit allow-list — next/image's optimizer will refuse (and never
    // proxy-fetch) anything outside this list, which matters once the app
    // is a live server rather than a static export.
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
    formats: ["image/webp"],
  },
  async headers() {
    return [
      // Every route gets the baseline hardening headers.
      { source: "/:path*", headers: securityHeaders },
      // Admin surface must never be indexed or cached, even if a proxy in
      // front of the app tries to cache GET responses.
      {
        source: "/admin/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "no-store, max-age=0" },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Cache-Control", value: "no-store, max-age=0" },
        ],
      },
    ];
  },
};

export default nextConfig;
