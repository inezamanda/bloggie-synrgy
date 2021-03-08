'use strict';
const { nanoid } = require('nanoid')

const { nanoid } = require("nanoid");
const faker = require('faker')

const data = []

for (let index = 0; index < 7; index++) {
  data.push({
    id: nanoid(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.internet.userName(),
    fullName: faker.name.findName(),
    image_profile: faker.image.avatar(),
    image_header: faker.image.nature(),
    about: faker.lorem.lines(),
    occupation: faker.name.jobTitle(),
    role: 'User',
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

module.exports = {
  data,
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', data, {});
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
