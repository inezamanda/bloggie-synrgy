'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts_categories.hasOne(models.Posts, {foreignKey: 'id'})
      Posts_categories.hasOne(models.Categories, {foreignKey: 'id'})
    }
  };
  Posts_categories.init({
    posts_id: DataTypes.STRING,
    categories_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts_categories',
  });
  return Posts_categories;
};