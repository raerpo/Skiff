import { Model } from 'objection';

class AdminWork extends Model {
	static get tableName() {
		return 'admin_work';
	}

	static get jsonSchema() {
		return {
			type: 'object',

			properties: {
				rut_admin: { type: 'string', minLength: 1, maxLength: 10 },
				id_work: { type: 'integer' },
				action: { type: 'string', minLength: 1, maxLength: 255 }
			}
		}
	}

  static get relationMappings() {
    return {
      rut_admin: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Admin',
        join: {
          from: 'adminWork.rut_admin',
          to: 'admin.rut'
        }
      },

      id_work: {
        relation: Model.HasManyRelation,
        modelClass: __dirname+ '/Work',
        join: {
          from: 'adminWork.id_work',
          to: 'work.id'
        }
      }
    }
  }
}

module.export = AdminWork;
