import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Price Model
 * ==========
 */
const Price = new keystone.List('Price');

Price.add({
      amount: { type: String, index: true },
      currency: { type: String, index: true },
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
Price.register();
