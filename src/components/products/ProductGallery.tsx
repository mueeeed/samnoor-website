"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageAsset } from "@/content/types";

export function ProductGallery({ images }: { images: ImageAsset[] }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-line">
        <Image src={current.src} alt={current.alt} fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, i) => (
            <button
              key={image.src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-sm border transition-colors ${
                i === active ? "border-accent" : "border-line hover:border-accent/50"
              }`}
            >
              <Image src={image.src} alt={image.alt} fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
