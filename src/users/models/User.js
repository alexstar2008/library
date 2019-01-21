const config = require('config');
const crypto = require('crypto');
const jwt = require('jwt-simple');

const RegisteUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user'
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
    registered_at: {
      type: DataTypes.VIRTUAL,
      get(){
        return this.created_at;
      }
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
    underscored: true,
    updatedAt: false,
    // indexes: [{ unique: true, fields: ['full_name'] }]
  });

  User.sync();

  User.associate = models => {
    models.user.hasMany(models.book, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };

  User.prototype.getAuthData = async function () {
    const payload = {
      id: this.id,
      full_name: this.full_name
    };

    return {
      token: jwt.encode(payload, config.jwtsecret),
      user: {
        photo: this.photo,
        full_name: this.full_name
      }
    };
  };

  User.prototype.checkPassword = function (password) {
    if (!password || !this.passwordHash)
      return false;

    return crypto.pbkdf2Sync(password, this.salt, config.crypto.hash.iterations,
      config.crypto.hash.length, 'sha1').
      toString('base64') === this.passwordHash;
  };


  return User;
};

module.exports = RegisteUserModel;
