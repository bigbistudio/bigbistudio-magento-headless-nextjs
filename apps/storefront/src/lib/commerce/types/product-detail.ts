import type { Product } from "@/lib/commerce/types/product";

export interface ProductGalleryImage {
  url: string;
  alt: string;
  position: number;
}

export interface ProductDetail extends Product {
  description: string;
  shortDescription: string;
  gallery: ProductGalleryImage[];
}
