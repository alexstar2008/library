
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
      offset: number().integer().positive(),
      amount: number().integer().positive(),
      type: string().valid('availble', 'own')
    }
  }),
  createBook: validator({
    body: {
      title: string().max(255).required(),
      published_at: date(),
      authors: array().items(number().integer().min(1))
    }
  }),
  updateBook: validator({
    path: {
      id: number().integer().min(1).required()
    },
    body: {
      title: string().max(255).required(),
      published_at: date(),
      authors: array().items(number().integer().min(1))
    }
  }),
  removeBook: validator({
    path: {
      id: number().integer().min(1).required()
    }
  }),
  takeBook: validator({
    path: {
      id: number().integer().min(1).required()
    }
  }),
  returnBook: validator({
    path: {
      id: number().integer().min(1).required()
    }
  })
};


module.exports = Validation;
