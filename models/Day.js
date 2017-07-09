const Model = require('objection').Model;

class Day extends Model {
	static get tableName() {
		return 'day';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				id_d: { type: 'integer'},
				name: { type: 'string', minLength: 1, maxLength: 10 },
				numberDay: { type: 'integer'}
			}
		}
	}
}

module.exports = Day;
