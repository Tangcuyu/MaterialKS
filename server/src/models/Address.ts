import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Address Model
 * ==========
 */
const Address = new keystone.List('Address', {
      map: { name: 'name' },
      autokey: { path: 'slug', from: 'name', unique: true },
});

Address.add({
      name: { type: Types.Name },
      address_line_1: { type: String },
      address_line_2: { type: String },
      city: { type: String },
      zip_code: { type: String },
      phone: { type: Number },
      company: { type: String },
      alternative_phone: { type: Number },
      country_id: { type: Types.Relationship, ref: 'Country', many: false},
      state_id: { type: Types.Relationship, ref: 'State', refPath: '_id' },
      state_name: { type: String },
      state_text: { type: String },
      state: {type: String },
      country: {type: String},
});


/**
 * Relationships
 */
// Address.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Address.defaultColumns = 'name, address_line_1, phone';
Address.register();
