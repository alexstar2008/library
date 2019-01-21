'use strict';

const tableName = 'authors_books';
const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);

    const fakerAuthorBooks = [];

    for (let i = 1; i <= 10; i++) {
      fakerAuthorBooks.push({
        author_id: 1,
        book_id: i
      });
      fakerAuthorBooks.push({
        author_id: 2,
        book_id: i + 10
      });
      fakerAuthorBooks.push({
        author_id: 3,
        book_id: i + 20
      });
    }

    for (let i = 1; i <= 100; i++) {
      fakerAuthorBooks.push({
        author_id: faker.random.number({ min: 4, max: 100 }),
        book_id: faker.random.number({ min: 31, max: 500 })
      });
    }

    return queryInterface.bulkInsert(tableName, fakerAuthorBooks);
  },

  down: queryInterface => queryInterface.bulkDelete(tableName, null, {})
};
