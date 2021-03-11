'use strict';

const { nanoid } = require("nanoid");
const faker = require('faker')

const data = [
  {id: nanoid(), name: "Business", icon: "business.ico", createdAt: new Date(), updatedAt: new Date()},
  {id: nanoid(), name: "Entertainment", icon: "entertainment.ico", createdAt: new Date(), updatedAt: new Date()},
  {id: nanoid(), name: "Education", icon: "education.ico", createdAt: new Date(), updatedAt: new Date()},
]

module.exports = {
  data,
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Categories', data, {});
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Categories', null, {});
  }
};
