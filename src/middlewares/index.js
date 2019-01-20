const BodyParser = require('./bodyParser');
const Cors = require('./cors');
const ErrorsHandler = require('./errorsHandler');
const Koa2SwaggerUi = require('./koa2SwaggerUi');
const Logger = require('./logger');
const Passport = require('./passport-init');
const ServeStatic = require('./serveStatic');

module.exports = function (app) {
  app.use(ErrorsHandler);
  app.use(Cors);
  app.use(BodyParser);
  app.use(ServeStatic);
  app.use(Koa2SwaggerUi);
  app.use(Logger);
  app.use(Passport);
};

