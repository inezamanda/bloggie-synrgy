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
      // define association here
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