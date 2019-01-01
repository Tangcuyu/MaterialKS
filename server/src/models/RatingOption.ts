import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * RatingOption Model
 * ==========
 */
const RatingOption = new keystone.List('RatingOption');

RatingOption.add({
      code: { type: String },
      position: { type: Number },
      value: { type: Number },
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
RatingOption.register();
