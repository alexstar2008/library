module.exports = {
  development: {
    database: 'library_test',
    username: 'library_user',
    password: 'T3CZovxoBcrzeuhhWeaBsWbqZTwfC3',
    dialect: 'postgres',
    host: 'library-test-app.czif1mgxgdnp.eu-central-1.rds.amazonaws.com'
  },
  test: {
    database: '',
    username: '',
    password: '',
    dialect: 'postgres',
    host: '',
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'postgres',
    host: process.env.DB_HOST
  }
};

