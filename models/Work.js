import { Model } from 'obejction';

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
				rut_admin: { type: 'string', minLength: 1, maxLength: 10 },
				totalPlaces: { type: 'integer' },
				comune: { type: 'string', minLength: 1, maxLength: 20 },
				address: { type: 'string', minLength: 1, maxLength: 255 },
				country: { type: 'string', minLength: 1, maxLength: 20 },
				type: { type: 'string', minLength: 1, maxLength: 20 }
			}
		}
	}
}

module.exports = Work;
