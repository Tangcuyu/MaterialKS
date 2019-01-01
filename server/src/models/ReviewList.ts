import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * ReviewList Model
 * ==========
 */
const ReviewList = new keystone.List('ReviewList');

ReviewList.add({
      position: { type: Number },
      value: { type: String },
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
ReviewList.register();