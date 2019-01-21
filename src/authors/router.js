const Router = require('koa-router');
const passport = require('koa-passport');

const AuthorsController = require('./controller');
const Validation = require('./validation');

const router = new Router({
  prefix: '/authors'
});

router.use(passport.authenticate('jwt', { session: false }));
router.get('/', Validation.getAuthors, AuthorsController.getAuthors);

router.use(allowAdmin);
router.post('/', Validation.createAuthor, AuthorsController.createAuthor);
router.put('/:id', Validation.updateAuthor, AuthorsController.updateAuthor);
router.del('/:id', Validation.removeAuthor, AuthorsController.removeAuthor);

async function allowAdmin(ctx, next) {
  if (ctx.state.user.role !== 'admin') {
    ctx.status = 403;
    ctx.message = 'Unauthorized (Only admin allowed)';
    return;
  }
  await next();
}



module.exports = router;

