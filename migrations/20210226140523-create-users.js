'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(21)
      },
      email: {
        type: Sequelize.STRING(30)
      },
      password: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING(30)
      },
      fullName: {
        type: Sequelize.STRING(100)
      },
      image_profile: {
        type: Sequelize.STRING
      },
      image_header: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT
      },
      occupation: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING(5)
      },
      followers: {
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
    await queryInterface.dropTable('Users');
  }
};