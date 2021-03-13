'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Followers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Followers.belongsTo(models.Users, { foreignKey: 'userId' })
      Followers.belongsTo(models.Users, { foreignKey: 'followerId' })
    }
  };
  Followers.init({
    userId: DataTypes.STRING,
    followerId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Followers',
  });
  return Followers;
};