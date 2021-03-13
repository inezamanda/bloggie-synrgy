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
      Posts_Likes.belongsTo(models.Users, { foreignKey: 'userId' })
      Posts_Likes.belongsTo(models.Posts, { foreignKey: 'postId' })
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