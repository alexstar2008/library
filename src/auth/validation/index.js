const {
  default: validator
} = require('koa-context-validator');

module.exports = {
  auth: validator({}),
  register: validator({})
};

