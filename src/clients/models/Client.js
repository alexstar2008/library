const config = require('config');
const crypto = require('crypto');
const jwt = require('jwt-simple');

const RegisteClientModel = (sequelize, DataTypes) => {
  const Client = sequelize.define('client', {
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
    registered_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        notEmpty: true,
        min: 6
      },
      set(password) {
        const salt = crypto.randomBytes(config.crypto.hash.length).toString('base64');
        this.setDataValue('salt', salt);
        const passHash = crypto.pbkdf2Sync(password, salt, config.crypto.hash.iterations,
          config.crypto.hash.length,
          'sha1'
        ).toString('base64');
        this.setDataValue('passwordHash', passHash);
      }
    }
  },{
    indexes: [{ unique: true, fields: ['fullName'] }]
  });

  Client.sync();

  Client.associate = models => {
    models.client.hasMany(models.book, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };

  Client.prototype.getAuthData = async function () {
    const payload = {
      id: this.id,
      fullName: this.fullName
    };

    return {
      token: jwt.encode(payload, config.jwtsecret),
      user: await this.getUserProfile()
    };
  };

  Client.prototype.checkPassword = function (password) {
    if (!password || !this.passwordHash)
      return false;

    return crypto.pbkdf2Sync(password, this.salt, config.crypto.hash.iterations,
      config.crypto.hash.length, 'sha1').
      toString('base64') === this.passwordHash;
  };


  return Client;
};

module.exports = RegisteClientModel;
