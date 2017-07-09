const Model = require('objection').Model;

class UserWork extends Model {
	static get tableName() {
		return 'userWork';
	}

	static get jsonSchema() {
		return {
			type: 'object',

			properties: {
				user_rut: { type: 'string', minLength: 1, maxLength: 10 },
				work_id: { type: 'integer' }
			}
		}
	}

  static get relationMappings() {
    return {
      user_rut: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'userWork.user_rut',
          to: 'user.rut'
        }
      },

      work_id: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Work',
        join: {
          from: 'userWork.work_id',
          to: 'work.id'
        }
      }
    }
  }
}

module.exports = UserWork;
