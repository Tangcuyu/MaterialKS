import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * RatingSummary Model
 * ==========
 */
const RatingSummary = new keystone.List('RatingSummary');

RatingSummary.add({
      average_rating: { type: String },
      review_count: { type: Number },
      rating_list: { type: Types.Relationship, ref: 'ReviewList', index: true },
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
RatingSummary.register();