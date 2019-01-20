
const RegisterBookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('book', {
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
    }
  });

  Book.sync();

  Book.associate = models => {
    models.book.belongsToMany(models.author, {
      foreignKey: 'book_id',
      through: 'author_book'
    });
    models.book.belongsTo(models.client, {
      foreignKey: 'user_id'
    });
  };

  return Book;
};

module.exports = RegisterBookModel;

