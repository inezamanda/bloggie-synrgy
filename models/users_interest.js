'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Interests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users_Interests.belongsTo(models.Categories, { foreignKey: 'categoryId' })
      Users_Interests.belongsTo(models.Users, { foreignKey: 'userId' })
    }
  };
  Users_Interests.init({
    userId: DataTypes.STRING,
    categoryId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users_Interests',
  });
  return Users_Interests;
};