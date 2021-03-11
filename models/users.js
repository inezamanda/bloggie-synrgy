'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Posts, { foreignKey: 'userId' })
      Users.hasMany(models.Posts_Comments, { foreignKey: 'userId' })
      Users.hasMany(models.Posts_Likes, { foreignKey: 'userId' })
      Users.hasMany(models.Posts_Saves, { foreignKey: 'userId' })
      Users.hasMany(models.Followers, { foreignKey: 'userId' })
      Users.hasMany(models.Followers, { foreignKey: 'followerId' })
      Users.hasMany(models.Users_Interest, { foreignKey: 'userId' })
    }
  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    fullName: DataTypes.STRING,
    imageProfile: DataTypes.STRING,
    about: DataTypes.TEXT,
    occupation: DataTypes.STRING,
    location: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: 'User'
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};