'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users_interests', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(21)
      },
      users_id: {
        type: Sequelize.STRING(21)
      },
      categories_id: {
        type: Sequelize.STRING(21)
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
    await queryInterface.dropTable('Users_interests');
  }
};