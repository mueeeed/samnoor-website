import type { ProductVariant } from "@/content/types";

export function ColorSwatches({
  colors,
  size = "md",
  showLabels = true,
}: {
  colors: ProductVariant[];
  size?: "sm" | "md";
  showLabels?: boolean;
}) {
  if (colors.length === 0) return null;
  const dot = size === "sm" ? "h-5 w-5" : "h-7 w-7";
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) =>
        showLabels ? (
          <div key={color.name} className="flex items-center gap-2">
            <span
              className={`${dot} shrink-0 rounded-full border border-line shadow-sm`}
              style={{ backgroundColor: color.hex ?? "#ccc" }}
              title={color.name}
            />
            <span className="text-sm text-ink">{color.name}</span>
          </div>
        ) : (
          <span
            key={color.name}
            className={`${dot} shrink-0 rounded-full border border-line shadow-sm`}
            style={{ backgroundColor: color.hex ?? "#ccc" }}
            title={color.name}
          />
        )
      )}
    </div>
  );
}
