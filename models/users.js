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
      Users.hasMany(models.Posts_saved, {foreignKey: 'users_id'})
      Users.hasMany(models.Followers, {foreignKey: 'users_id'})
      Users.hasOne(models.Followers, {foreignKey: 'id'})
      Users.belongsToMany(models.Categories, {through: 'Users_interest'})
    }
  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    fullName: DataTypes.STRING,
    image_profile: DataTypes.STRING,
    image_header: DataTypes.STRING,
    about: DataTypes.TEXT,
    occupation: DataTypes.STRING,
    location: DataTypes.STRING,
    role: DataTypes.STRING,
    followers_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};