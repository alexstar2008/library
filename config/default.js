module.exports = {
  PORT: 3000,
  baseUrl: '',
  jwtsecret: 'test',
  pagination: {
    booksAmount: 25
  },
  postgres: {
    database: '', 
    username: '',
    password: '',
    options: {
      dialect: 'postgres',
      host: '',
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
