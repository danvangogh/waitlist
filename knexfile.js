// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'wait_db',
      user:     'DWhite',
      password: 'fafnir'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'waitlistapp',
      user:     'waitlistapp',
      password: 'claytek'
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
