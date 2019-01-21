module.exports = {
  PORT: 3000,
  baseUrl: '',
  jwtsecret: 'test',
  pagination: {
    booksAmount: 25
  },
  crypto: {
    hash: {
      length: 128,
      iterations: 1
    }
  },
  postgres: {
    database: 'library_test', 
    username: 'library_user',
    password: 'T3CZovxoBcrzeuhhWeaBsWbqZTwfC3',
    options: {
      dialect: 'postgres',
      host: 'library-test-app.czif1mgxgdnp.eu-central-1.rds.amazonaws.com',
      port: 5432,
      logging: false, 
    }
  },
  aws: {
    defaultImg: '',
    accessKeyId: '',
    secretAccessKey: '  ',
    bucketName: '',
  },

  docs: {
    routePrefix: '/docs',
    swaggerOptions: {
      url: 'http://localhost:3000/library.yaml',
    },
    hideTopbar: true
  }
};
