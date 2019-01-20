const {
  default: validator,
  string
} = require('koa-context-validator');

module.exports = {
  auth: validator({
    body: {
      fullName: string().required(),
      password: string().required(),
    }
  }),
  register: validator({
    body: {
      fullName: string().required(),
      password: string().required(),
    }
  })
};

