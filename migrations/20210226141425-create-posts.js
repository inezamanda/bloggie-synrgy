'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(21)
      },
      userId: {
        type: Sequelize.STRING(21),
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      imagePost: {
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.STRING
      },
      filterView: {
        allowNull: false,
        type: Sequelize.ENUM('Anyone', 'Followers'),
        defaultValue: 'Anyone'
      },
      filterComment: {
        allowNull: false,
        type: Sequelize.ENUM('Anyone', 'Followers', 'None'),
        defaultValue: 'Anyone'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};