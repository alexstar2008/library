const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('config');

const { client: Client } = require('../../libs/sequelize');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtsecret,
};

module.exports = new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const client = await Client.findByPk(jwt_payload.id);
    if (client) {
      return done(null, client);
    }
    return done(null, false);
  } catch (err) {
    return done(err, false);
  }
});
