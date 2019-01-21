const {
  default: validator,
  string
} = require('koa-context-validator');

module.exports = {
  auth: validator({
    body: {
      full_name: string().required(),
      password: string().required(),
    }
  }),
  register: validator({
    body: {
      full_name: string().required(),
      password: string().required(),
    }
  })
};

