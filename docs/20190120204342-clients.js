const faker = require('faker');
const crypto = require('crypto');
const config = require('config');
const tableName = 'clients';


function hashPassword(password) {
  const salt = crypto.randomBytes(config.crypto.hash.length).toString('base64');
  const passwordHash = crypto.pbkdf2Sync(password, salt, config.crypto.hash.iterations,
    config.crypto.hash.length,
    'sha1'
  ).toString('base64');
  return { salt, passwordHash };
}

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);

    const fakeClients = [];
    for (let i = 0; i < 100; i++) {
      fakeClients.push({
        fullName: faker.name.firstName(),
        // photo: '',
        ...hashPassword(faker.internet.password(6)),
        registered_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    
    return queryInterface.bulkInsert(tableName, [
      {
        fullName: 'Test1',
        // photo: faker.internet.avatar(),
        ...hashPassword('123456'),
        registered_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Test2',
        // photo: faker.internet.avatar(),
        ...hashPassword('123456'),
        registered_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Test3',
        // photo: faker.internet.avatar(),
        ...hashPassword('123456'),
        registered_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ...fakeClients
    ]);
  },

  down: queryInterface => queryInterface.bulkDelete(tableName, null, {})
};

