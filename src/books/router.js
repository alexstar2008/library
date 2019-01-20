const Router = require('koa-router');

const BooksController = require('./controller');
const Validation = require('./validation');

const router = new Router({
  prefix: '/books'
});

router.get('/', Validation.getBooks, BooksController.getBooks);
router.post('/', Validation.createBook, BooksController.createBook);
router.post('/take', Validation.takeBook, BooksController.takeBook);
router.post('/return', Validation.returnBook, BooksController.returnBook);
router.put('/:id', Validation.updateBook, BooksController.updateBook);
router.del('/:id', Validation.removeBook, BooksController.removeBook);

module.exports = router;

