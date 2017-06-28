const Model = require('objection').Model;
const connection = require('../config/database');

Model.knex(connection);

class Store extends Model {
  static get tableName(){
    return 'store';
  }

  static get jsonSchema(){
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        phoneNumber: { type: 'string' }
      }
    };
  }
}

module.exports = Store;
