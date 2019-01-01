import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * RatingCategory Model
 * ==========
 */
const RatingCategory = new keystone.List('RatingCategory');

RatingCategory.add({
      code: { type: String },
      position: { type: Number },
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
RatingCategory.register();