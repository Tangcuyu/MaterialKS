import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Country Model
 * ==========
 */
const Country = new keystone.List('Country');

Country.add({
      iso_name: {type: String, unique: true},
      name: { type: String, index: true },
      states: { type: Types.Relationship, ref: 'State', many: true },
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
Country.register();
