import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Stripe Model
 * ==========
 */
const Stripe = new keystone.List('Stripe');

Stripe.add({
      publishable_key: { type: String, index: true }
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
Stripe.register();
