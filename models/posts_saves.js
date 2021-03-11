'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_Saves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts_Saves.hasOne(models.Users, { foreignKey: 'id' })
      Posts_Saves.hasOne(models.Posts, { foreignKey: 'id' })
    }
  };
  Posts_Saves.init({
    postId: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts_Saves',
  });
  return Posts_Saves;
};