import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * LineItem Model  细列项目
 * Line items are used to keep track of items within the context of an order.
 * These records provide a link between orders, and Variants.
 * When a variant is added to an order,
 * the price of that item is tracked along with the line item to preserve that data.
 * If the variant’s price were to change,
 * then the line item would still have a record of the price at the time of ordering.
 * ==========
 */
const LineItem = new keystone.List('LineItem');

LineItem.add({

      quantity: { type: Number },
      unit_price: { type: String },
      single_display_amount: {type: Number },
      attachment_height: {type: Number},
      display_amount: { type: Number },
      variant_id: { type: Number },
      total_price: { type: Number },
      variant: { type: Types.Relationship, ref: 'Variant' },
      product: { type: Types.Relationship, ref: 'Product' },
});


/**
 * Relationships
 */
// Address.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */

LineItem.register();
