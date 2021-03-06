// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: 'dev.sqlite3'
    }
    // ,
    // debug: true
  },
  production: {
    client: 'mysql',
    connection: {
      database: 'marketplace',
      user:     'mp_user',
      password: 'mp_password_123!'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
