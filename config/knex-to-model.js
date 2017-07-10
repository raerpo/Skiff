const Model = require('objection').Model;
const connection = require('./database');

Model.knex(connection);

module.exports = Model;
