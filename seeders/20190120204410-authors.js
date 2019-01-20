const faker = require('faker');

const tableName = 'authors';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);

    const fakeAuthors = [];
    for (let i = 0; i <= 100; i++) {
      fakeAuthors.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        birthday: faker.date.past(50),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert(tableName, fakeAuthors);
  },

  down: queryInterface => queryInterface.bulkDelete(tableName, null, {})
};

