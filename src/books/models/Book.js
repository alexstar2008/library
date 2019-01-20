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
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },{
    underscored: true
  });

  Book.sync();

  Book.associate = models => {
    models.book.belongsToMany(models.author, {
      foreignKey: 'book_id',
      onDelete: 'CASCADE',
      through: models.author_book
    });
    models.book.belongsTo(models.client, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };

  return Book;
};

module.exports = RegisterBookModel;
