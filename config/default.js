module.exports = {
  PORT: 3000,
  baseUrl: '',
  jwtsecret: '',
  postgres: {
    url: '',
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
    secretAccessKey: '',
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
