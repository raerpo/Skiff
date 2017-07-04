const Model = require('objection').Model;
const connection = require('../config/database');

Model.knex(connection); 

class Hour extends Model {
	static get tableName() {
		return 'hour';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				id_h: { type: 'integer' },
				value: { type: 'string', minLength: 1, maxLength: 13 }
			}
		}
	}
}

module.exports = Hour;