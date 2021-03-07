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
      // define association here
    }
  };
  Users.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING,
    image_profile: DataTypes.STRING,
    image_header: DataTypes.STRING,
    about: DataTypes.TEXT,
    occupation: DataTypes.STRING,
    location: DataTypes.STRING,
    role: DataTypes.ENUM('admin', 'user'),
    followers: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};