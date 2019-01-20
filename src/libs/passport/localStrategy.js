const LocalStrategy = require('passport-local');

const { client: Client } = require('../../libs/sequelize');

const opts = {
  usernameField: 'fullName',
  passwordField: 'password',
  passReqToCallback: true,
  session: false
};

module.exports = new LocalStrategy(opts, async (req, fullName, password, done) => {
  try {
    const client = await Client.findOne({
      where: { fullName }
    });
    if (!client) {
      return done(null, false, { message: 'Client doesn\'t exist!' });
    }
    if (!client.checkPassword(password)) {
      return done(null, false, { message: 'Incorrect password!' });
    }

    return done(null, client);

  } catch (err) {
    return done(err);
  }
});
