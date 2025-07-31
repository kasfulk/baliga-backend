'use strict';
import bcrypt from 'bcrypt';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash('password', saltRounds);

    await queryInterface.bulkInsert('Users', [
      {
        username: 'testuser1',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'testuser2',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
