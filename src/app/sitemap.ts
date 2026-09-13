import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/content/categories";
import { products } from "@/content/products";
import { fabrics } from "@/content/fabrics";
import { locations } from "@/content/locations";
import { glossaryTerms } from "@/content/glossary";
import { getPublishedPosts } from "@/lib/blog-store";

export const revalidate = 300;

const staticRoutes = [
  "",
  "/about",
  "/products",
  "/manufacturing",
  "/private-label",
  "/fabrics",
  "/export",
  "/certifications",
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

  const blogEntries: MetadataRoute.Sitemap = getPublishedPosts().map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt || p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

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
    ...blogEntries,
    ...fabricEntries,
    ...locationEntries,
    ...glossaryEntries,
  ];
}
