const Router = require('koa-router');

const AuthorsController = require('./controller');
const Validation = require('./validation');

const router = new Router({
  prefix: '/authors'
});

router.get('/', Validation.getBooks, AuthorsController.getBooks);
router.put('/:id', Validation.updateBook, AuthorsController.updateBook);
router.del('/:id', Validation.removeBook, AuthorsController.removeBook);

module.exports = router;

