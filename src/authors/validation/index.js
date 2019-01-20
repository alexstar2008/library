const {
  default: validator,
  number,
  string,
  date
} = require('koa-context-validator');

const Validation = {
  getAuthors: validator({
    query: {
      offset: number().integer().min(0),
      amount: number().integer().positive()
    }
  }),
  createAuthor: validator({
    body: {
      first_name: string().max(100).required(),
      last_name: string().required(),
      birthday: date()
    }
  }),
  updateAuthor: validator({
    params: {
      id: number().integer().positive().required()
    },
    body: {
      first_name: string().max(100).required(),
      last_name: string().required(),
      birthday: date()
    }
  }),
  removeAuthor: validator({
    params: {
      id: number().integer().positive().required()
    }
  })
};

module.exports = Validation;
