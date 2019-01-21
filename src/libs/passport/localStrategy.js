const LocalStrategy = require('passport-local');

const { user: User } = require('../../libs/sequelize');

const opts = {
  usernameField: 'fullName',
  passwordField: 'password',
  passReqToCallback: true,
  session: false
};

module.exports = new LocalStrategy(opts, async (req, fullName, password, done) => {
  try {
    const user = await User.findOne({
      where: { fullName }
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
