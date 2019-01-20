'use strict';

const tableName = 'clients';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      birthday: {
        type: DataTypes.DATE
      }
    },{
      timestamps: false
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable(tableName);
  }
};
