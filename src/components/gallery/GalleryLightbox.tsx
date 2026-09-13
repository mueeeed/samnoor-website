"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/content/gallery";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)), [items.length]);
  const showNext = useCallback(() => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length)), [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative block w-full overflow-hidden rounded-sm border border-line text-left"
            aria-label={`View larger image: ${item.image.alt}`}
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={600}
              height={i % 3 === 0 ? 800 : 450}
              sizes="(min-width: 1024px) 24vw, 45vw"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-noir/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="p-3 text-xs font-medium uppercase tracking-wide text-cream">{item.category}</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-noir/90 p-4 sm:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-panel/10 text-cream hover:bg-panel/20"
          >
            <CloseIcon width={20} height={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-panel/10 text-cream hover:bg-panel/20 sm:left-6"
          >
            <ChevronLeftIcon width={22} height={22} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-panel/10 text-cream hover:bg-panel/20 sm:right-6"
          >
            <ChevronRightIcon width={22} height={22} />
          </button>
          <div className="relative flex max-h-full max-w-4xl flex-col gap-3" onClick={(e) => e.stopPropagation()}>
            <div className="relative max-h-[80vh] w-full overflow-hidden rounded-sm">
              <Image
                src={active.image.src}
                alt={active.image.alt}
                width={1200}
                height={900}
                sizes="90vw"
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            <p className="text-center text-sm text-cream/80">
              {active.category} &middot; {activeIndex! + 1} of {items.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
