'use strict';
const { nanoid } = require('nanoid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      { id: nanoid(), email: 'chaniatrial@gmail.com', password: 'asdjww22', username: 'chaniaeva', fullName: 'Chania Evangelista', image_profile: './image', image_header: './image', about: 'sadawkjakjsdhwkakbakja', occupation: 'Engineer', location: 'Anywhere', role: 'any', followers: 'Siapa', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
