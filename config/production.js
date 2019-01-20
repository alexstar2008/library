module.exports = {
  PORT: process.env.PORT,
  jwtsecret: process.env.JWT,
  postgres: {
    url: process.env.DB_URL,
    options: {
      dialect: 'postgres',
      logging: false,
      operatorsAliases: false,
      timeout: 60000
    }
  },
  aws: {
    defaultImg: '',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY,
    bucketName: process.env.AWS_BUCKET,
  },
  docs: {
    routePrefix: '/docs',
    swaggerOptions: {
      url: process.env.SWAGGER_DOCS,
    },
    hideTopbar: true
  }
};
