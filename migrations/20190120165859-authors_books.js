'use strict';

const tableName = 'clients';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(tableName,{
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable(tableName);
  }
};
