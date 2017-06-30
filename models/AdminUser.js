import { Model } from 'objection';

class AdminUser extends Model {
	static get tableName() {
		return 'adminUser';
	}

	static get jsonSchema() {
		return {
			type: 'object',

			properties: {
				rut_admin: { type: 'string', minLength: 1, maxLength: 10 },
				rut_user: { type: 'string', minLength: 1, maxLength: 10 },
				action: { type: 'string', minLength: 1, maxLength: 255 }
			}
		}
	}

  static get relationMappings() {
    return {
      rut_admin: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/Admin',
        join: {
          from: 'adminUser.rut_admin',
          to: 'admin.rut'
        }
      },

      rut_user: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'adminUser.rut_user',
          to: 'user.rut'
        }
      }
    }
  }
}

module.export = AdminUser;
