module.exports = {
  PORT: 3000,
  baseUrl: '',
  jwtsecret: '',
  postgres: {
    url: '',
    options: {
      dialect: 'postgres',
      logging: false,
      operatorsAliases: false,
      timeout: 60000
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
