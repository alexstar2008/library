

const RegisterAuthorModel = (sequelize, DataTypes) => {
  const Author = sequelize.define('author', {
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
  });

  Author.sync();

  Author.associate = models => {
    models.author.belongsToMany(models.book, {
      foreignKey: 'author_id',
      onDelete: 'CASCADE',
      through: models.author_book
    });
  };

  return Author;
};

module.exports = RegisterAuthorModel;

