import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Product Model 产品
 * ==========
 */

const Product = new keystone.List('Product', {
      map: { name: 'name' },
      autokey: { path: 'slug', from: 'name', unique: true },
});

Product.add({
      name: { type: String, required: true },
      description: { type: String },
      available_on: { type: String },
      is_favorited_by_current_user: { type: Boolean },
      meta_description: { type: String },
      meta_keywords: { type: String },
      shipping_category_id: { type: Number },
      taxon_ids: {type: Types.Relationship, ref: 'Taxon', index: true},
      total_on_hand: { type: Number },
      has_variants: { type: Boolean },
      master: { type: Types.Relationship, ref: 'Variant', index: true },
      variants: { type: Types.Relationship, ref: 'Variant', index: true },
      option_types: { type: Types.Relationship, ref: 'OptionType', index: true },
      product_properties: { type: Types.Relationship, ref: 'ProductProperty', index: true },
      classifications: { type: Types.Relationship, ref: 'Classification', index: true },
      product_url: { type: String },
      currency: { type: String },
      selling_price: { type: Types.Relationship, ref: 'Price', index: true },
      max_retail_price: { type: Types.Relationship, ref: 'Price', index: true },
      options: { type: Types.Relationship, ref: 'OptionValue', index: true },
      images: { type: Types.Relationship, ref: 'Image', index: true },
      reviews: { type: Types.Relationship, ref: 'Review', index: true },
      rating_summary: { type: Types.Relationship, ref: 'RatingSummary', index: true },
      is_orderable: { type: Boolean },
});


Product.register();
