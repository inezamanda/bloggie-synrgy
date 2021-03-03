'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(21)
      },
      users_id: { 
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
      files: {
        type: Sequelize.STRING
      },
      filterView: {
        type: Sequelize.ENUM({
          values: ['Anyone', 'Followers']
        })
      },
      filterComment: {
        type: Sequelize.ENUM({
          values: ['Anyone', 'Followers', 'None']
        })
      },
      isReported: {
        type: Sequelize.BOOLEAN
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