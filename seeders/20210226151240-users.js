'use strict';

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
    imageProfile: faker.image.avatar(),
    about: faker.lorem.lines(),
    occupation: faker.name.jobTitle(),
    location: faker.address.state(),
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
