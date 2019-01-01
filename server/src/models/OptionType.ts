import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * OptionType Model
 * ==========
 */
const OptionType = new keystone.List('OptionType');

OptionType.add({
      name: { type: String, index: true },
      presentation: { type: String },
      position: { type: String },
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
OptionType.register();
