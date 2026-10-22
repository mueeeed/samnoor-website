import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/content/categories";
import { products } from "@/content/products";
import { fabrics } from "@/content/fabrics";
import { locations } from "@/content/locations";
import { glossaryTerms } from "@/content/glossary";

// Blog posts are excluded here and served instead by the dynamic
// /php-api/blog-sitemap.php (declared in robots.ts) — this file is baked
// into static HTML at build time, so it can't reflect posts published or
// edited later through the PHP-backed admin panel.

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about",
  "/products",
  "/manufacturing",
  "/private-label",
  "/fabrics",
  "/export",
  "/gallery",
  "/blog",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/locations",
  "/glossary",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${siteConfig.url}/products/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${siteConfig.url}/products/${p.categorySlug}/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const subcategoryEntries: MetadataRoute.Sitemap = categories.flatMap((c) =>
    (c.subcategories ?? []).map((s) => ({
      url: `${siteConfig.url}/products/${c.slug}/type/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const fabricEntries: MetadataRoute.Sitemap = fabrics.map((f) => ({
    url: `${siteConfig.url}/fabrics/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const locationEntries: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${siteConfig.url}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const glossaryEntries: MetadataRoute.Sitemap = glossaryTerms.map((t) => ({
    url: `${siteConfig.url}/glossary/${t.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [
    ...staticEntries,
    ...categoryEntries,
    ...productEntries,
    ...subcategoryEntries,
    ...fabricEntries,
    ...locationEntries,
    ...glossaryEntries,
  ];
}
