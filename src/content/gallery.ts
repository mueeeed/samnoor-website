import { placeholder } from "@/lib/placeholder-image";
import type { ImageAsset } from "./types";

export type GalleryItem = {
  image: ImageAsset;
  category: string;
};

export const galleryItems: GalleryItem[] = [
  { image: placeholder("gallery-factory-1", "Exterior of the SamNoor factory in Marol Industrial Estate, Mumbai"), category: "Facility" },
  { image: placeholder("gallery-cutting-1", "Fabric cutting table with pattern pieces laid out"), category: "Production" },
  { image: placeholder("gallery-stitching-1", "Sewing floor with rows of machinists at work"), category: "Production" },
  { image: placeholder("gallery-embroidery-1", "Close-up of hand embroidery on a garment"), category: "Production" },
  { image: placeholder("gallery-product-1", "Folded chiffon hijabs in a color range"), category: "Product" },
  { image: placeholder("gallery-product-2", "Model wearing an embroidered kaftan"), category: "Product" },
  { image: placeholder("gallery-packaging-1", "Cartons being packed in the warehouse"), category: "Logistics" },
  { image: placeholder("gallery-warehouse-1", "Stacked cartons ready for dispatch"), category: "Logistics" },
  { image: placeholder("gallery-shipping-1", "Shipping containers at the export terminal"), category: "Logistics" },
  { image: placeholder("gallery-exhibition-1", "SamNoor booth at a trade exhibition"), category: "Trade Shows" },
  { image: placeholder("gallery-fabric-1", "Fabric swatch cards arranged for review"), category: "Facility" },
  { image: placeholder("gallery-team-1", "Quality inspector reviewing a finished garment"), category: "Team" },
];

export const galleryCategories = Array.from(new Set(galleryItems.map((item) => item.category)));
