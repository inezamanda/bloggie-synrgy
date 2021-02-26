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
      // define association here
    }
  };
  Posts_categories.init({
    posts_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts_categories',
  });
  return Posts_categories;
};