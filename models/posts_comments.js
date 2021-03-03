'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts_comments.hasOne(models.Users, {foreignKey: 'id'})
      Posts_comments.hasOne(models.Posts, {foreignKey: 'id'})
    }
  };
  Posts_comments.init({
    posts_id: DataTypes.STRING,
    users_id: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Posts_comments',
  });
  return Posts_comments;
};