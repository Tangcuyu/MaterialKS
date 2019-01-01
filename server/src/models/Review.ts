import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Review Model
 * ==========
 */
const Review = new keystone.List('Review');

Review.add({
      description: { type: String },
      locale: { type: String },
      title: { type: String },
      name: { type: String },
      rating_option_vote: { type: Types.Relationship, ref: 'RatingOptionVote', index: true },
      updated_at: { type: String },
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
Review.register();
