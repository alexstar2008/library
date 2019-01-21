module.exports = {
  PORT: process.env.PORT,
  jwtsecret: process.env.JWT,
  postgres: {
    database: process.env.DB_NAME, 
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    options: {
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      logging: false, 
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
