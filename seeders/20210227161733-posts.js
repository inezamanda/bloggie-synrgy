'use strict';
const { nanoid } = require('nanoid')
const faker = require('faker')

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
    await queryInterface.bulkInsert('Posts', [
      { id: nanoid(), users_id: nanoid(), title: faker.name.title(), content: faker.lorem.paragraph(), files: './media', filterView: 'any', filterComment: 'any', isReported: false, createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), users_id: nanoid(), title: faker.name.title(), content: faker.lorem.paragraph(), files: './media', filterView: 'any', filterComment: 'any', isReported: false, createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), users_id: nanoid(), title: faker.name.title(), content: faker.lorem.paragraph(), files: './media', filterView: 'any', filterComment: 'any', isReported: false, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
