'use strict';

const tableName = 'authors_books';

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
    },{
      tableName: 'authors_books'
    });
  },

  down: queryInterface => queryInterface.dropTable(tableName)
};
