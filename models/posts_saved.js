'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_saved extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts_saved.hasOne(models.Users, {foreignKey: 'id'})
      Posts_saved.hasOne(models.Posts, {foreignKey: 'id'})
    }
  };
  Posts_saved.init({
    posts_id: DataTypes.STRING,
    users_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts_saved',
  });
  return Posts_saved;
};