'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Posts_likes.init({
    posts_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts_likes',
  });
  return Posts_likes;
};