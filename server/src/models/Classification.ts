import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Classification Model  等级
 * ==========
 */
const Classification = new keystone.List('Classification');

Classification.add({
      taxon_id: { type: Number},
      position: { type: Number },
      taxon: { type: Types.Relationship, ref: 'Taxon' }
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
Classification.register();
