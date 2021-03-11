'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts_Comments.hasOne(models.Users, { foreignKey: 'id' })
      Posts_Comments.hasOne(models.Posts, { foreignKey: 'id' })
    }
  };
  Posts_Comments.init({
    postId: DataTypes.STRING,
    userId: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Posts_Comments',
  });
  return Posts_Comments;
};