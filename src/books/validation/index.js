const {
  default: validator
} = require('koa-context-validator');


const Validation = {
  getBooks: validator({}),
  createBook: validator({}),
  updateBook: validator({}),
  removeBook: validator({}),
  takeBook: validator({}),
  returnBook: validator({})
};


module.exports = Validation;
