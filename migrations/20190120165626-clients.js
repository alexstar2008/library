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
      salt: {
        type: DataTypes.STRING
      },
      passwordHash: {
        type: DataTypes.STRING
      },
    },{
      underscored: true,
      indexes: [{ unique: true, fields: ['fullName'] }]
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable(tableName);
  }
};
