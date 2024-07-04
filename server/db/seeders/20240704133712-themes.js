'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Themes",
      [
        {
          title: 'stul',
         
        },
        {
          title: 'styl',
        },
        {
          title: 'pool',
        },
             ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
