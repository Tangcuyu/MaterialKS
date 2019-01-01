import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * PaymentMode Model 支付
 * ==========
 */

const PaymentMode = new keystone.List('PaymentMode');

PaymentMode.add({
      name: { type: String, required: true },
      description: { type: String },
      method_type: { type: String },
      code: { type: String },
      active: { type: Boolean },
      live_mode: { type: Boolean },
});


PaymentMode.register();
