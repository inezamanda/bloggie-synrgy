'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts.hasMany(models.Posts_comments, {foreignKey: 'posts_id'})
      Posts.hasMany(models.Posts_likes, {foreignKey: 'posts_id'})
      Posts.hasMany(models.Posts_categories, {foreignKey: 'posts_id'})
      Posts.hasMany(models.Posts_saved, {foreignKey: 'posts_id'})
      Posts.hasOne(models.Users, {foreignKey: 'id'})
    }
  };
  Posts.init({
    users_id: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    files: DataTypes.STRING,
    filterView: DataTypes.STRING,
    filterComment: DataTypes.STRING,
    isReported: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};