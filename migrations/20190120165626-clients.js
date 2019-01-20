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
      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      photo: {
        type: DataTypes.STRING(100),
      },
      registered_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable(tableName);
  }
};
