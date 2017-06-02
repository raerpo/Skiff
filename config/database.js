const knex = require('knex');
const dbConfig = require('../knexfile')[process.env.NODE_ENV || 'development'];

module.exports = knex(dbConfig);
