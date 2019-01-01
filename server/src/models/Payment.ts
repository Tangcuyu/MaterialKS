import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Payment Model 支付
 * ==========
 */

const Payment = new keystone.List('Payment');

Payment.add({
      amount: { type: Types.Relationship, ref: 'Price', index: true },
      payment_method_id: { type: String },
      slug: { type: String }
});


Payment.register();
