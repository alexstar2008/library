const Koa = require('koa');
const Router = require('koa-router');
const config = require('config');

const middlerwares = require('./src/middlewares');
const authRouter = require('./src/auth/router');
const authorsRouter = require('./src/authors/router');
const booksRouter = require('./src/books/router');
require('./src/libs/sequelize');

const app = new Koa();

const router = new Router({ prefix: '/api' });
router.get('/healthz', ctx => ctx.body = 'Hiark API - OK');

router.use(authRouter.routes());
router.use(authorsRouter.routes());
router.use(booksRouter.routes());
app.use(router.routes());
middlerwares(app);

module.exports = app.listen(config.PORT, () => {
  console.log(`[SERVER] |> listening on port:${config.PORT}`);
});
