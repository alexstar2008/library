const RegisterAuthorBookModel = (sequelize, DataTypes) => {
  const AuthorBook = sequelize.define('author_book', {
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
    timestamps: false,
    tableName: 'authors_books'
  });

  AuthorBook.sync();
  return AuthorBook;
};

module.exports = RegisterAuthorBookModel;

