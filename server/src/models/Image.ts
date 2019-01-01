import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * Image Model
 * ==========
 */
const Image = new keystone.List('Image');

Image.add({
      position: { type: Number },
      attachment_content_type: { type: String },
      attachment_file_name: { type: String },
      type: { type: String },
      attachment_updated_at: { type: String },
      attachment_width: {type: Number },
      attachment_height: {type: Number},
      alt: { type: String },
      viewable_type: { type: String },
      viewable_id: { type: Number },
      mini_url: { type: String },
      small_url: { type: String },
      product_url: { type: String },
      large_url: { type: String },
});


/**
 * Relationships
 */
// Address.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Image.defaultColumns = 'name, address_line_1, phone';
Image.register();
