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
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      fullName: {
        //allowNull: false,
        type: Sequelize.STRING(100)
      },
      image_profile: {
        // allowNull: true,
        type: Sequelize.BLOB

      },
      image_header: {
        // allowNull: true,
        type: Sequelize.BLOB
      },
      about: {
        // allowNull: true,
        type: Sequelize.TEXT
      },
      occupation: {
        // allowNull: true,
        type: Sequelize.STRING
      },
      location: {
        // allowNull: true,
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