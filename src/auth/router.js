const Router = require('koa-router');

const Validation = require('./validation');
const AuthController = require('./controller');

const router = new Router({
  prefix: '/auth'
});

router.post('/', Validation.auth, AuthController.auth);
router.post('/register', Validation.register, AuthController.register);

module.exports = router;
