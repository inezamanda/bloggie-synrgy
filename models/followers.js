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
      Followers.hasOne(models.Users, {foreignKey: 'id'})
    }
  };
  Followers.init({
    users_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Followers',
  });
  return Followers;
};