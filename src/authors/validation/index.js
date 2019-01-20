const {
  array,
  default: validator,
  number,
  string,
  date
} = require('koa-context-validator');


const Validation = {
  getAuthors: validator({
    query: {
      offset: number().integer().positive(),
      amount: number().integer().positive(),
      type: string().valid('availble', 'own')
    }
  }),
  createAuthor: validator({
    body: {
      title: string().max(255).required(),
      published_at: date(),
      authors: array().items(number().integer().min(1))
    }
  }),
  updateAuthor: validator({
    path: {
      id: number().integer().min(1).required()
    },
    body: {
      title: string().max(255).required(),
      published_at: date(),
      authors: array().items(number().integer().min(1))
    }
  }),
  removeAuthor: validator({
    path: {
      id: number().integer().min(1).required()
    }
  })
};


module.exports = Validation;
