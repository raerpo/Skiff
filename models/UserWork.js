import { Model } from 'objection';

class UserWork extends Model {
	static get tableName() {
		return 'user_work';
	}

	static get jsonSchema() {
		return {
			type: 'object',

			properties: {
				rut_user: { type: 'string', minLength: 1, maxLength: 10 },
				id_work: { type: 'integer' }
			}
		}
	}

  static get relationMappings() {
    return {
      rut_user: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'userWork.rut_user',
          to: 'user.rut'
        }
      },

      id_work: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Work',
        join: {
          from: 'userWork.id_work',
          to: 'work.id'
        }
      }
    }
  }
}

module.exports = UserWork;
