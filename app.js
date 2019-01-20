const Koa = require('koa');
const Router = require('koa-router');
const config = require('config');
const middlerwares = require('./src/middlewares');


const app = new Koa();

const router = new Router({ prefix: '/api' });
router.get('/healthz', ctx => ctx.body = 'Hiark API - OK');

app.use(router.routes());
middlerwares(app);

module.exports = app.listen(config.PORT, () => {
  console.log(`[SERVER] |> listening on port:${config.PORT}`);
});
