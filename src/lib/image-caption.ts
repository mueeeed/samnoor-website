import type { Category, Product } from "@/content/types";

/**
 * Builds a long, keyword-rich description for a product photo shown in a
 * category gallery. Used as both the visible on-image caption and the
 * <img> alt text, so search engines and screen readers see the same
 * substantive description rather than a generic one-line alt tag.
 *
 * Composed from real product data (name, fabric, MOQ, existing
 * shortDescription) plus a rotating pair of the category's target search
 * terms, so every image gets a genuinely different, accurate caption
 * instead of a templated repeat of the same sentence.
 */
export function buildImageCaption(product: Product, category: Category, imageIndex: number): string {
  const fabricList = product.fabrics.join(" and ");
  const keywords = category.keywords.length > 0 ? category.keywords : [category.name.toLowerCase()];
  const kwA = keywords[imageIndex % keywords.length];
  const kwB = keywords[(imageIndex + 1) % keywords.length];

  return (
    `${product.name} — ${fabricList} ${category.shortName.toLowerCase()} from our ${category.name} range, ` +
    `manufactured for wholesale buyers searching for ${kwA}${kwB && kwB !== kwA ? ` and ${kwB}` : ""}. ` +
    `${product.shortDescription} Minimum order ${product.moq}, private label available.`
  );
}
