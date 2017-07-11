const Model = require('../config/knex-to-model');

class Turn extends Model {
  static get tableName() {
    return 'turn';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        user_id: { type: 'string', minLength: 1, maxLength: 14 },
        hour_id: { type: 'integer' },
        day_id: { type: 'integer' },
        work_id: {type: 'integer' }
      }
    }
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'turn.user_id',
          to: 'user.rut'
        }
      },

      hour: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Hour',
        join: {
          from: 'turn.hour_id',
          to: 'hour.id_h'
        }
      },

      day: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Day',
        join: {
          from: 'turn.day_id',
          to: 'day.id_d'
        }
      },

      work: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Work',
        join: {
          from: 'turn.work_id',
          to: 'work.id'
        }
      }
    }
  }
}

module.exports = Turn;
