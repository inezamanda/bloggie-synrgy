'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'followers_id', {
      type: Sequelize.STRING(21),
      references: {
          model: 'Followers',
          key: 'id'
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'followers_id')
  }
};
