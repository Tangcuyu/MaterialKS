import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Taxonomy Model  类别
 * ==========
 */
const Taxonomy = new keystone.List('Taxonomy');

Taxonomy.add({
      // id: { type: Number},
      name: { type: String, index: true },
      root: { type: Types.Relationship, ref: 'Taxon', many: true },
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
Taxonomy.register();
