const Model = require('../config/knex-to-model');

class AdminUser extends Model {
  static get tableName() {
    return 'adminUser';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        admin_rut: { type: 'string', minLength: 1, maxLength: 10 },
        user_rut: { type: 'string', minLength: 1, maxLength: 10 },
        action: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  }

  static get relationMappings() {
    return {
      admin_rut: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/Admin',
        join: {
          from: 'adminUser.admin_rut',
          to: 'admin.rut'
        }
      },

      user_rut: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'adminUser.user_rut',
          to: 'user.rut'
        }
      }
    }
  }
}

module.export = AdminUser;
