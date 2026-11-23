import type { MagentoPrice } from "./product";

export interface MagentoProductDetail {
  uid: string;
  sku: string;
  name: string;
  url_key: string;

  description: {
    html: string | null;
  } | null;

  short_description: {
    html: string | null;
  } | null;

  image: MagentoProductImage | null;

  small_image: MagentoProductImage | null;

  media_gallery: MagentoProductGalleryImage[] | null;

  stock_status: string;

  price_range: {
    minimum_price: {
      regular_price: MagentoPrice;
      final_price: MagentoPrice;
    };
  };
}

export interface MagentoProductImage {
  url: string;
  label: string | null;
}

export interface MagentoProductGalleryImage {
  url: string;
  label: string | null;
  position: number | null;
  disabled: boolean;
}

export interface MagentoProductDetailResult {
  products: {
    items: MagentoProductDetail[];
  };
}
