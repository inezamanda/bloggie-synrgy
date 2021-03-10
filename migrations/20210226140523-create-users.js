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
        type: Sequelize.STRING(50),
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      image_profile: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT
      },
      occupation: {
        type: Sequelize.STRING(50)
      },
      location: {
        type: Sequelize.STRING(100)
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM({
          values: ['User', 'Admin']
        })
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