'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts_Likes.hasOne(models.Users, { foreignKey: 'id' })
      Posts_Likes.hasOne(models.Posts, { foreignKey: 'id' })
    }
  };
  Posts_Likes.init({
    postId: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts_Likes',
  });
  return Posts_Likes;
};