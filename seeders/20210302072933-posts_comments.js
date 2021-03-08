'use strict';

const { nanoid } = require("nanoid");
const faker = require('faker')

const data = []

for (let index = 0; index < 7; index++) {
  data.push({
    id: nanoid(),
    content: faker.lorem.paragraphs(),
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

module.exports = {
  data,
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Posts_comments', data, {});
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Posts_comments', null, {});
  }
};
