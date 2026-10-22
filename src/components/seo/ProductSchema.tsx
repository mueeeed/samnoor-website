import { siteConfig } from "@/lib/site-config";
import type { Product } from "@/content/types";

/**
 * No `offers.price` — this is a wholesale/MOQ catalog with no fixed retail
 * price, so we deliberately omit `offers` rather than publish a fabricated
 * price. The markup still helps search engines understand the product
 * entity even without unlocking a price-based rich result.
 */
export function ProductSchema({ product, categoryName }: { product: Product; categoryName: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((img) => `${siteConfig.url}${img.src.startsWith("http") ? "" : img.src}`),
    category: categoryName,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    material: product.fabrics.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
