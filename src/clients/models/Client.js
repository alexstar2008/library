
const RegisteClientModel = (sequelize, DataTypes) => {
  const Client = sequelize.define('client', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
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

  Client.force();

  Client.associate = models => {
    models.client.hasMany(models.book, {
      foreignKey: 'user_id'
    });
  };

  return Client;
};

module.exports = RegisteClientModel;
