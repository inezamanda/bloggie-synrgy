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
      Posts.hasMany(models.Posts_Comments, { foreignKey: 'postId' })
      Posts.hasMany(models.Posts_Likes, { foreignKey: 'postId' })
      Posts.hasMany(models.Posts_Categories, { foreignKey: 'postId' })
      Posts.hasMany(models.Posts_Saves, { foreignKey: 'postId' })
      Posts.belongsTo(models.Users, { foreignKey: 'userId' })
    }
  };
  Posts.init({
    userId: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    imagePost: DataTypes.STRING,
    file: DataTypes.STRING,
    filterView: DataTypes.STRING,
    filterComment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};