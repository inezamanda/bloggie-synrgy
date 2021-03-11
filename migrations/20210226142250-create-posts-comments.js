'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts_Comments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(21)
      },
      postId: {
        type: Sequelize.STRING(21),
        references: {
          model: 'Posts',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.STRING(21),
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Posts_Comments');
  }
};