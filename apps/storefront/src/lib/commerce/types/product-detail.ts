import type { Product } from "@/lib/commerce/types/product";
import type { ProductPrice } from "@/lib/commerce/types/product";

export interface ProductGalleryImage {
  url: string;
  alt: string;
  position: number;
}

export interface ConfigurableOptionValue {
  id: string;
  label: string;
  valueIndex: number;
  swatchValue: string | null;
}

export interface ConfigurableOption {
  id: string;
  code: string;
  label: string;
  position: number;
  values: ConfigurableOptionValue[];
}

export interface ProductVariantAttribute {
  code: string;
  label: string;
  valueIndex: number;
}

export interface ProductVariant {
  id: string;
  sku: string;
  name: string;
  availability: "IN_STOCK" | "OUT_OF_STOCK";
  price: ProductPrice;
  image: {
    url: string;
    alt: string;
  } | null;
  attributes: ProductVariantAttribute[];
}

export interface ProductDetail extends Product {
  description: string;
  shortDescription: string;
  gallery: ProductGalleryImage[];

  options: ConfigurableOption[];
  variants: ProductVariant[];
}