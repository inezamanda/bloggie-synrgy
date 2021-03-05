'use strict';

const { nanoid } = require("nanoid");
const faker = require('faker')

const data = []

for (let index = 0; index < 7; index++) {
  data.push({
    id: nanoid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    files: faker.system.commonFileName(),
    filterView: 'Anyone',
    filterComment: 'Anyone',
    isReported: false,
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

module.exports = {
  data,
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Posts', data, {});
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Posts', null, {});
  }
};
