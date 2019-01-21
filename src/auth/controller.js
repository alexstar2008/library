const passport = require('koa-passport');

const {
  user: User
} = require('../libs/sequelize');

async function auth(ctx, next) {
  await passport.authenticate('local', { session: false }, async function (err, user, info) {
    if (err) {
      ctx.throw(err);
    }
    if (user) {
      ctx.body = await user.getAuthData();
    } else {
      ctx.status = 400;
      ctx.body = { error: info && info.message || 'Invalid credentials' };
    }
  })(ctx, next);
}
async function register(ctx) {
  const { full_name, password, photo } = ctx.request.body;

  const user = await User.create({
    full_name,
    photo,
    password
  });

  ctx.body = await user.getAuthData();
}

module.exports = {
  auth,
  register
};
