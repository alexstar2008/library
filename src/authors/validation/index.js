const {
  default: validator
} = require('koa-context-validator');


const Validation = {
  getBooks: validator({}),
  updateBook: validator({}),
  removeBook: validator({})
};


module.exports = Validation;
