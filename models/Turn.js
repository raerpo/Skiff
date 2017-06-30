import { Model } from 'objection';

class Turn extends Model {
	static get tableName() {
		return 'turn';
	}

	static get jsonSchema() {
		return {
			type: 'object',

			properties: {
				id_user: { type: 'string', minLength: 1, maxLength: 14 },
				id_hour: { type: 'integer' },
				id_day: { type: 'integer' },
				id_work: {type: 'integer' }
			}
		}
	}

  static get relationMappings() {
    return {
      id_user: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'turn.id_user',
          to: 'user.rut'
        }
      },

      id_hour: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Hour',
        join: {
          from: 'turn.id_hour',
          to: 'hour.id_h'
        }
      },

      id_day: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Day',
        join: {
          from: 'turn.id_day',
          to: 'day.id_d'
        }
      },

      id_work: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Work',
        join: {
          from: 'turn.id_work',
          to: 'work.id'
        }
      }
    }
  }
}

module.exports = Turn;
