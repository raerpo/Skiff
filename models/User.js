import { Model } from 'objection';

class User extends Model {
	static get tableName() {
		return 'user';
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
				email: { type: 'string' , minLength: 1, maxLength: 30 },
				comune: { type: 'string', minLength: 1, maxLength: 14 },
				country: { type: 'string', minLength: 1, maxLength: 20 },
				avaibleDays: { type: 'integer' },
				type: { type: 'integer' },
				statusAccount: { type: 'integer' },
				id_work: { type: 'integer' }
			}
		}
	}

	static get relationMappings() {
    return{
      id_work:{
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Work',
        join: {
          from: 'user.id_work',
          to: 'work.id'
        }
      }
    }
	}
};

module.exports = User;
