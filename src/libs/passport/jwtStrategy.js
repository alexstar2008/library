const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('config');

const {
  client: Client,
  book: Book
} = require('../../libs/sequelize');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtsecret,
};

module.exports = new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const [client, booksAmount] = await Promise.all([
      Client.findByPk(jwt_payload.id),
      Book.count({ where: { user_id: jwt_payload.id } })
    ]);

    if (client) {
      client.booksAmount = booksAmount;
      return done(null, client);
    }
    return done(null, false);
  } catch (err) {
    return done(err, false);
  }
});
