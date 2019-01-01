import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * OptionValue Model
 * ==========
 */
const OptionValue = new keystone.List('OptionValue');

OptionValue.add({
      name: { type: String, index: true },
      presentation: { type: String },
      option_type_name: { type: String },
      option_type_id: { type: Number },
      option_type_presentation: { type: String },
      option_type: { type: String },
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
OptionValue.register();
