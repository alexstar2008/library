'use strict';

const tableName = 'author_books';
const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);

    const fakerAuthorBooks = [];

    for (let i = 1; i <= 10; i++) {
      fakerAuthorBooks.push({
        user_id: 1,
        book_id: i,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      fakerAuthorBooks.push({
        user_id: 2,
        book_id: i + 10,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      fakerAuthorBooks.push({
        user_id: 3,
        book_id: i + 20,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    for (let i = 1; i <= 50; i++) {
      fakerAuthorBooks.push({
        user_id: faker.random.number({ min: 31, max: 100 }),
        conversation_id: faker.random.number({ min: 4, max: 100 }),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert(tableName, fakerAuthorBooks);
  },

  down: queryInterface => queryInterface.bulkDelete(tableName, null, {})
};
