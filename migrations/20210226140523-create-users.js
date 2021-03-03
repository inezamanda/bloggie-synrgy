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
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      fullName: {
        allowNull: false,
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
        allowNull: false,
        type: Sequelize.ENUM('admin', 'user')
      },
      followers: {
        type: Sequelize.STRING
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