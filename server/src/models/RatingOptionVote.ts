import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * RatingOptionVote Model
 * ==========
 */
const RatingOptionVote = new keystone.List('RatingOptionVote');

RatingOptionVote.add({
      rating_option: { type: Types.Relationship, ref: 'RatingOption', index: true },
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
RatingOptionVote.register();
