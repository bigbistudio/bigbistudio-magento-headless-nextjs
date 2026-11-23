import "server-only";

import { magentoFetch } from "@/lib/magento/client";
import { PRODUCT_DETAIL_QUERY } from "@/lib/magento/queries/product-detail";

import type {
  MagentoProductDetail,
  MagentoProductDetailResult,
} from "@/lib/magento/types/product-detail";

import type { ProductDetail, ProductGalleryImage } from "./types/product-detail";

function mapMagentoProductDetail(product: MagentoProductDetail): ProductDetail {
  const price = product.price_range.minimum_price;

  const gallery: ProductGalleryImage[] = (product.media_gallery ?? [])
    .filter((image) => !image.disabled && Boolean(image.url))
    .map((image) => ({
      url: image.url,
      alt: image.label?.trim() || product.name,
      position: image.position ?? 0,
    }))
    .sort((a, b) => a.position - b.position);

  const mainImage = product.image ?? product.small_image;

  return {
    id: product.uid,
    sku: product.sku,
    name: product.name,
    slug: product.url_key,

    image: {
      url: mainImage?.url ?? "",
      alt: mainImage?.label ?? product.name,
    },

    price: {
      regular: price.regular_price.value,
      final: price.final_price.value,
      currency: price.final_price.currency,
    },

    availability: product.stock_status === "IN_STOCK" ? "IN_STOCK" : "OUT_OF_STOCK",

    description: product.description?.html ?? "",
    shortDescription: product.short_description?.html ?? "",
    gallery,
  };
}

export async function getProductBySlug(slug: string): Promise<ProductDetail | null> {
  const data = await magentoFetch<MagentoProductDetailResult>({
    query: PRODUCT_DETAIL_QUERY,
    variables: {
      urlKey: slug,
    },
  });

  const product = data.products.items[0];

  if (!product) {
    return null;
  }

  return mapMagentoProductDetail(product);
}
