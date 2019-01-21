const LocalStrategy = require('passport-local');

const { user: User } = require('../../libs/sequelize');

const opts = {
  usernameField: 'full_name',
  passwordField: 'password',
  passReqToCallback: true,
  session: false
};

module.exports = new LocalStrategy(opts, async (req, full_name, password, done) => {
  try {
    const user = await User.findOne({
      where: { full_name }
    });
    if (!user) {
      return done(null, false, { message: 'User doesn\'t exist!' });
    }
    if (!user.checkPassword(password)) {
      return done(null, false, { message: 'Incorrect password!' });
    }

    return done(null, user);

  } catch (err) {
    return done(err);
  }
});
