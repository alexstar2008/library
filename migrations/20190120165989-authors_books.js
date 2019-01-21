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
        allowNull: false,
        references: {
          model: 'authors',
          key: 'id',
          onDelete: 'CASCADE'
        }
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'books',
          key: 'id',
          onDelete: 'CASCADE'
        }
      }
    },{
      tableName: 'authors_books'
    });
  },

  down: queryInterface => queryInterface.dropTable(tableName)
};
