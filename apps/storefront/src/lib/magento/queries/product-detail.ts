export const PRODUCT_DETAIL_QUERY = `
    query GetProductByUrlKey($urlKey: String!) {
        products(
            filter: {
                url_key: {
                    eq: $urlKey
                }
            }
        ) {
            items {
                uid
                sku
                name
                url_key

                description {
                    html
                }

                short_description {
                    html
                }

                image {
                    url
                    label
                }

                small_image {
                    url
                    label
                }

                media_gallery {
                    url
                    label
                    position
                    disabled
                }

                stock_status

                price_range {
                    minimum_price {
                        regular_price {
                            value
                            currency
                        }
                        final_price {
                            value
                            currency
                        }
                    }
                }
            }    
        }
    }
`;
