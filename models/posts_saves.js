'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_saves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts_saves.hasOne(models.Users, {foreignKey: 'id'})
      Posts_saves.hasOne(models.Posts, {foreignKey: 'id'})
    }
  };
  Posts_saves.init({
    posts_id: DataTypes.STRING,
    users_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts_saves',
  });
  return Posts_saves;
};