const Model = require('objection').Model;
const connection = require('../config/database');

Model.knex(connection); 

class AdminWork extends Model {
	static get tableName() {
		return 'adminWork';
	}

	static get jsonSchema() {
		return {
			type: 'object',

			properties: {
				admin_rut: { type: 'string', minLength: 1, maxLength: 10 },
				work_id: { type: 'integer' },
				action: { type: 'string', minLength: 1, maxLength: 255 }
			}
		}
	}

  static get relationMappings() {
    return {
      admin_rut: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Admin',
        join: {
          from: 'adminWork.admin_rut',
          to: 'admin.rut'
        }
      },

      work_id: {
        relation: Model.HasManyRelation,
        modelClass: __dirname+ '/Work',
        join: {
          from: 'adminWork.work_id',
          to: 'work.id'
        }
      }
    }
  }
}

module.export = AdminWork;
