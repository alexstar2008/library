const Router = require('koa-router');
const passport = require('koa-passport');

const BooksController = require('./controller');
const Validation = require('./validation');

const router = new Router({
  prefix: '/books'
});

router.use(passport.authenticate('jwt', { session: false }));
router.get('/', Validation.getBooks, BooksController.getBooks);
router.post('/:id/take', Validation.takeBook, BooksController.takeBook);
router.post('/:id/return', Validation.returnBook, BooksController.returnBook);

router.use(allowAdmin);
router.post('/', Validation.createBook, BooksController.createBook);
router.put('/:id', Validation.updateBook, BooksController.updateBook);
router.del('/:id', Validation.removeBook, BooksController.removeBook);

async function allowAdmin(ctx, next) {
  if (ctx.state.user.role !== 'admin') {
    ctx.status = 403;
    ctx.message = 'Unauthorized (Only admin allowed)';
    return;
  }
  await next();
}


module.exports = router;
