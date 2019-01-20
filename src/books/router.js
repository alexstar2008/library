const Router = require('koa-router');

const BooksController = require('./controller');
const Validation = require('./validation');

const router = new Router({
  prefix: '/authors'
});

module.exports = router;

