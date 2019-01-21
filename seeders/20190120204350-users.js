const faker = require('faker');
const crypto = require('crypto');
const config = require('config');
const tableName = 'users';


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

    const fakeusers = [];
    for (let i = 0; i < 100; i++) {
      fakeusers.push({
        fullName: faker.name.firstName(),
        role: 'user',
        // photo: '',
        ...hashPassword(faker.internet.password(6)),
        created_at: new Date()
      });
    }

    return queryInterface.bulkInsert(tableName, [
      {
        fullName: 'Admin1',
        role: 'admin',
        // photo: faker.internet.avatar(),
        ...hashPassword('qwerty'),
        created_at: new Date()
      },
      {
        fullName: 'Client1',
        role: 'user',
        // photo: faker.internet.avatar(),
        ...hashPassword('123456'),
        created_at: new Date()
      },
      {
        fullName: 'Client2',
        role: 'user',
        // photo: faker.internet.avatar(),
        ...hashPassword('123456'),
        created_at: new Date()
      },
      ...fakeusers
    ]);
  },

  down: queryInterface => queryInterface.bulkDelete(tableName, null, {})
};

