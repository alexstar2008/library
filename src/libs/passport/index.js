const passport = require('koa-passport');

const jwtStrategy = require('./jwtStrategy');
const localStrategy = require('./localStrategy');

passport.use(jwtStrategy);
passport.use(localStrategy);

module.exports = passport;
