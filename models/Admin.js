const Model = require('objection').Model;
const connection = require('../config/database');

Model.knex(connection);	

class Admin extends Model {
	static get tableName() {
		return 'admin';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['rut', 'name', 'lastName', 'birth', 'avaibleDays'],

			properties: {
				rut: { type: 'string', minLength: 1, maxLength: 10 },
				password: { type: 'string', minLength: 1, maxLength: 15 },
				name: { type: 'string', minLength: 1, maxLength: 15 },
				lastName: { type: 'string', minLength: 1, maxLength: 25 },
				birth: { type: 'string', minLength: 1, maxLength: 14 },
				phone: { type: 'string', minLength: 1, maxLength: 9 },
				email: { type: 'string', minLength: 1, maxLength: 30 },
				comune: { type: 'string', minLength: 1, maxLength: 30 },
				country: { type: 'string', minLength: 1, maxLength: 20 },
				avaibleDays: { type: 'integer' },
				accountPlan: { type: 'string', minLength: 1, maxLength: 20 },
				accountPay: { type: 'integer' },
				accountsAvaibles: { type: 'integer' },
				keygen: { type: 'string', minLength: 1, maxLength: 8 },
				type: { type: 'integer' },
				statusAccount: { type: 'integer'},
				work_id: { type: 'integer' }
			}
		}
	}

	static get relationMappings() {
		return {
			work_id: {
				relation: Model.HasManyRelation,
				modelClass: __dirname + '/Work',
				join: {
					from: 'admin.work_id',
					to: 'work.id'
				}
			}
		}
	}
}

module.exports = Admin;
