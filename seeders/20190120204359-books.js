const faker = require('faker');

const tableName = 'books';

module.exports = {
  up: async queryInterface => {
    await queryInterface.sequelize.query(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);

    let fakeBooks = [];
    for (let i = 0; i < 500; i++) {
      fakeBooks.push({
        title: faker.name.title(),
        published_at: faker.date.past(100),
        user_id: Math.ceil(i / 5),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert(tableName, fakeBooks);
  },

  down: queryInterface => queryInterface.bulkDelete(tableName, null, {})
};
