'use strict';

const tableName = 'books';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(tableName,{
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      published_at: {
        type: DataTypes.DATE
      },
      user_id: {
        type: DataTypes.INTEGER
      },
      created_at: DataTypes.DATE
    });
  },

  down: queryInterface => queryInterface.dropTable(tableName)
};
