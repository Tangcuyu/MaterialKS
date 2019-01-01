import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Country Model
 * ==========
 */
const Brand = new keystone.List('Brand');

Brand.add({
      image_url: {type: String, unique: true},
      name: { type: String, index: true },
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
Brand.register();
