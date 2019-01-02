import * as keystone from 'keystone';
const Types = keystone.Field.Types;

/**
 * ==================================================
 * Address Model 地址模型
 * 地址模型主要用来跟踪地址信息，主要应用于订单。
 * 地址信息也可以用来于用户模型关联
 * 地址具有以下属性：
 *       name: 具有此地址的用户姓名。这个属性使用了Keystone中的Name类型
 *             （有关Name类型参看：https://keystonejs.com/api/field/name）
 *       address1: 地址的第一行。
 *       address2: 地址的第二行。
 *       city: 地址中的城市信息。
 *       zipcode: 地址中的邮编信息。
 *       phone: 地址所属用户的电话号码
 *       state_name: 地址所在省
 *       alternative_phone: 地址所属用户的备用电话号码
 *       company: 地址所属用户所在公司名称
 * 地址信息也需要和国家模型、省模型关联。
 * 一个地址必须包含一个与国家模型的关联。
 * ==================================================
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
