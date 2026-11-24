import type { MagentoPrice } from "./product";

export interface MagentoProductDetail {
  __typename: string;
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

  configurable_options?: MagentoConfigurableOption[] | null;
  variants?: MagentoProductVariantItem[] | null;
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

export interface MagentoSwatchData {
  value: string | null;
}

export interface MagentoConfigurableOptionValue {
  uid: string;
  label: string;
  value_index: number;
  swatch_data: MagentoSwatchData | null;
}

export interface MagentoConfigurableOption {
  uid: string;
  attribute_code: string;
  label: string;
  position: number;
  values: MagentoConfigurableOptionValue[];
}

export interface MagentoVariantAttribute {
  uid: string;
  code: string;
  label: string;
  value_index: number;
}

export interface MagentoProductVariant {
  __typename: string;
  uid: string;
  sku: string;
  name: string;
  stock_status: string;

  price_range: {
    minimum_price: {
      regular_price: MagentoPrice;
      final_price: MagentoPrice;
    };
  };

  small_image: MagentoProductImage | null;
}

export interface MagentoProductVariantItem {
  attributes: MagentoVariantAttribute[];
  product: MagentoProductVariant;
}
