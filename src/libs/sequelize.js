const Sequelize = require('sequelize');
const { postgres } = require('config');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize(postgres.database, postgres.username, postgres.password, postgres.options);
const db = {};
sequelize.authenticate().then(() => {
  console.log('[PostgreSQL] |> connected successfully');
}).catch(console.error);

const modules = [
  'authors',
  'books',
  'users'
];

modules.forEach(moduleName => {
  fs.readdirSync(path.join(__dirname, '/../', moduleName, '/models'))
    .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const model = sequelize.import(path.join(__dirname, '/../', moduleName, '/models', file));
      db[model.name] = model;
    });
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
