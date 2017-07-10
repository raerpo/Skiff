const Model = require('objection').Model;

class Work extends Model {
	static get tableName() {
		return 'work';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['id'],

			properties: {
				id: { type: 'integer' },
				admin_rut: { type: 'string', minLength: 1, maxLength: 10 },
				totalPlaces: { type: 'integer' },
				comune: { type: 'string', minLength: 1, maxLength: 20 },
				address: { type: 'string', minLength: 1, maxLength: 255 },
				country: { type: 'string', minLength: 1, maxLength: 20 },
				type: { type: 'string', minLength: 1, maxLength: 20 }
			}
		}
	}

  static get relationMappings() {
    return{
      admin_rut:{
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Admin',
        join: {
          from: 'work.admin_rut',
          to: 'admin.rut'
        }
      }
    }
	}
}

module.exports = Work;
