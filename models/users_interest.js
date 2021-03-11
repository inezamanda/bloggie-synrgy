'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users_Interest.hasMany(models.Categories, { foreignKey: 'id' })
      Users_Interest.hasMany(models.Users, { foreignKey: 'id' })
    }
  };
  Users_Interest.init({
    userId: DataTypes.STRING,
    categoryId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users_Interest',
  });
  return Users_Interest;
};