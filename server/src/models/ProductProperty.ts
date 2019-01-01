import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * ProductProperty Model 产品属性
 * ==========
 */

const ProductProperty = new keystone.List('ProductProperty');

ProductProperty.add({
      product_id: { type: Number },
      property_id: { type: Number },
      value: { type: String },
      property_name: { type: String },
});

/* ProductProperty.schema.virtual('content.full').get(function () {
      return this.content.extended || this.content.brief;
});

ProductProperty.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%'; */
ProductProperty.register();
