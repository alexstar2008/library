const Router = require('koa-router');

const AuthorsController = require('./controller');
const Validation = require('./validation');

const router = new Router({
  prefix: '/authors'
});


router.get('/', Validation.getAuthors, AuthorsController.getAuthors);
router.post('/', Validation.createAuthor, AuthorsController.createAuthor);
router.put('/:id', Validation.updateAuthor, AuthorsController.updateAuthor);
router.del('/:id', Validation.removeAuthor, AuthorsController.removeAuthor);

module.exports = router;

