import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Country Model
 * ==========
 */
const State = new keystone.List('State');

State.add({
      code: {type: String, unique: true},
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
State.register();
