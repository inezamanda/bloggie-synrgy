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
      Users.hasMany(models.Posts, {foreignKey: 'users_id'})
      Users.hasMany(models.Posts_comments, {foreignKey: 'users_id'})
      Users.hasMany(models.Posts_likes, {foreignKey: 'users_id'})
      Users.hasMany(models.Posts_saves, {foreignKey: 'users_id'})
      Users.hasMany(models.Followers, {foreignKey: 'users_id'})
      Users.hasMany(models.Followers, {foreignKey: 'followers_id'})
      Users.belongsToMany(models.Categories, {through: 'Users_interest'})
    }
  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    fullName: DataTypes.STRING,
    image_profile: DataTypes.STRING,
    about: DataTypes.TEXT,
    occupation: DataTypes.STRING,
    location: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.ENUM('User')
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};