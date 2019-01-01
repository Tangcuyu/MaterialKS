import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Order Model 订单
 * ==========
 */

const Order = new keystone.List('Order');

Order.add({
      number: { type: String },
      item_total: { type: String },
      ship_total: { type: String },
      state: { type: String },
      adjustment_total: { type: String },
      user_id: { type: String },
      created_at: { type: String },
      updated_at: { type: String },
      completed_at: { type: String },
      payment_total: { type: String },
      shipment_state: { type: String },
      payment_state: { type: String },
      email: { type: String },
      special_instructions: { type: String },
      tax_total: { type: String },
      currency: { type: String },
      total_quantity: { type: String },
      token: { type: String },
      line_items: { type: Types.Relationship, ref: 'LineItem', index: true},
      payments: { type: Types.Relationship, ref: 'Payment', index: true },
      display_total: { type: String },
      item_count: { type: Number },
      order_total_amount: { type: Types.Relationship, ref: 'Price', index: true },
      shipping_address: { type: Types.Relationship, ref: 'Address', index: true },
});


Order.register();
