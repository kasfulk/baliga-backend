'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'roles', {
      type: Sequelize.ENUM('admin', 'user'),
      defaultValue: 'user',
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'roles');
  },
};
