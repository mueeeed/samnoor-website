import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/types";
import { ArrowRightIcon } from "@/components/ui/icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.categorySlug}/${product.slug}`}
      className="card-premium group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          fill
          sizes="(min-width: 1024px) 24vw, 45vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.bestSeller && (
            <span className="rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-paper">
              Best Seller
            </span>
          )}
          {product.newArrival && (
            <span className="rounded-full bg-noir px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-gold-soft">
              New
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-lg font-semibold text-heading transition-colors group-hover:text-accent">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-3 text-xs text-muted">
          <span>MOQ {product.moq}</span>
          <span className="flex items-center gap-1 font-medium text-accent">
            Details
            <ArrowRightIcon width={13} height={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
