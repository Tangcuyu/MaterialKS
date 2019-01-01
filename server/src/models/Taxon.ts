import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Taxon Model  分类
 * ==========
 */
const Taxon = new keystone.List('Taxon');

Taxon.add({
      // id: { type: Number},
      pretty_name: {type: String, unique: true},
      name: { type: String, index: true },
      permalink: { type: String },
      parent_id: { type: Number },
      taxonomy_id: { type: Number },
      checked: { type: Boolean },
      icon: { type: String },
      image_url: { type: String }
});

/**
 * Relationships
 */
// Country.relationship({ ref: 'Address', path: 'address', refPath: 'address' });


/**
 * Registration
 */
// Country.defaultColumns = 'name, email, isAdmin';
Taxon.register();
