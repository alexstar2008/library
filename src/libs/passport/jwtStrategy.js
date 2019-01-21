const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('config');

const {
  user: User,
  book: Book
} = require('../../libs/sequelize');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtsecret,
};

module.exports = new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const [user, booksAmount] = await Promise.all([
      User.findByPk(jwt_payload.id),
      Book.count({ where: { user_id: jwt_payload.id } })
    ]);

    if (user) {
      user.booksAmount = booksAmount;
      return done(null, user);
    }
    return done(null, false);
  } catch (err) {
    return done(err, false);
  }
});
