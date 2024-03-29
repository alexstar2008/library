'use strict';

const tableName = 'users';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(tableName,{
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
      },
      photo: {
        type: DataTypes.STRING(100),
      },
      salt: {
        type: DataTypes.STRING
      },
      passwordHash: {
        type: DataTypes.STRING
      },
      created_at: DataTypes.DATE
    },{
      indexes: [{ unique: true, fields: ['full_name'] }]
    });
  },

  down: queryInterface => queryInterface.dropTable(tableName)
};
