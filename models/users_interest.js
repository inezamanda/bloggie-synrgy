'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users_interest.hasMany(models.Categories, {foreignKey: 'id'})
      Users_interest.hasMany(models.Users, {foreignKey: 'id'})
    }
  };
  Users_interest.init({
    users_id: DataTypes.STRING,
    categories_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users_interest',
  });
  return Users_interest;
};