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
                __typename
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

                ... on ConfigurableProduct {
                    configurable_options {
                        uid
                        attribute_code
                        label
                        position

                        values {
                            uid
                            label
                            value_index

                            swatch_data {
                                value
                            }
                        }
                    }

                    variants {
                        attributes {
                            uid
                            code
                            label
                            value_index
                        }

                        product {
                            __typename
                            uid
                            sku
                            name
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

                            small_image {
                                url
                                label
                            }
                        }
                    }
                }
            }
        }
    }
`;
