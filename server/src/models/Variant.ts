import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Variant Model 变体
 * ==========
 */

const Variant = new keystone.List('Variant', {
      map: { name: 'title' },
      autokey: { path: 'slug', from: 'title', unique: true },
});

Variant.add({
      name: { type: String },
      sku: { type: String },
      price: { type: String },
      weight: { type: String },
      height: { type: String },
      width: { type: String },
      depth: { type: String },
      is_master: { type: Boolean },
      slug: { type: String },
      description: { type: String },
      track_inventory: { type: Boolean },
      cost_price: { type: String },
      option_values: { type: Types.Relationship, ref: 'OptionValue', index: true },
      total_on_hand: { type: Number },
      display_price: { type: String },
      options_text: { type: String },
      in_stock: { type: Boolean },
      is_backorderable: { type: Boolean },
      is_destroyed: { type: Boolean },
      is_orderable: { type: Boolean },
      images: { type: Types.Relationship, ref: 'Image', index: true },
      options: { type: String },
      selling_price: { type: Types.Relationship, ref: 'Price', index: true },
      max_retail_price: { type: Types.Relationship, ref: 'Price', index: true },
});

/* Variant.schema.virtual('content.full').get(function () {
      return this.content.extended || this.content.brief;
});

Variant.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%'; */
Variant.register();
