import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/content/categories";
import { products } from "@/content/products";
import { blogPosts } from "@/content/blog";

const staticRoutes = [
  "",
  "/about",
  "/products",
  "/manufacturing",
  "/oem-private-label",
  "/fabrics",
  "/export",
  "/certifications",
  "/gallery",
  "/blog",
  "/faq",
  "/contact",
  "/privacy-policy",
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

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt || p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries, ...blogEntries];
}
