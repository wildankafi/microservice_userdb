'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
    {
      name: 'John Doe',
      profesion: 'Admin Micro',
      role: "admin",
      email: "wild@mail.com",
      password: await bcrypt.hash("password", 10),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Dark Tool',
      profesion: 'Admin Micro',
      role: "admin",
      email: "wildan@mail.com",
      password: await bcrypt.hash("password", 10),
      created_at: new Date(),
      updated_at: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
