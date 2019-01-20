
const {
  array,
  default: validator,
  number,
  string,
  date
} = require('koa-context-validator');

const Validation = {
  getBooks: validator({
    query: {
      offset: number().integer().min(0),
      amount: number().integer().positive(),
      type: string().valid('available', 'own')
    }
  }),
  createBook: validator({
    body: {
      title: string().max(255).required(),
      published_at: date(),
      authors: array().items(number().integer().positive())
    }
  }),
  updateBook: validator({
    params: {
      id: number().integer().positive().required()
    },
    body: {
      title: string().max(255).required(),
      published_at: date(),
      authors: array().items(number().integer().positive())
    }
  }),
  removeBook: validator({
    params: {
      id: number().integer().positive().required()
    }
  }),
  takeBook: validator({
    params: {
      id: number().integer().positive().required()
    }
  }),
  returnBook: validator({
    params: {
      id: number().integer().positive().required()
    }
  })
};

module.exports = Validation;
