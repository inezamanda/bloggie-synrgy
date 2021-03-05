'use strict';

const { nanoid } = require("nanoid");
const faker = require('faker')

const data = []

for (let index = 0; index < 7; index++) {
  data.push({
    id: nanoid(),
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

module.exports = {
  data,
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Followers', data, {});
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Followers', null, {});
  }
};
