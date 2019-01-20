const Router = require('koa-router');

const AuthorsController = require('./controller');
const Validation = require('./validation');

const router = new Router({
  prefix: '/authors'
});

module.exports = router;

