'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts_Categories.hasOne(models.Posts, { foreignKey: 'id' })
      Posts_Categories.hasOne(models.Categories, { foreignKey: 'id' })
    }
  };
  Posts_Categories.init({
    postId: DataTypes.STRING,
    categoryId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts_Categories',
  });
  return Posts_Categories;
};