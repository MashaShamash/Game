'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: 'Masha',
          email: 'mashane@ru',
          password: 'masha',
        },
        {
          name: 'Dima',
          email: 'dimane@ru',
          password: 'dima',
        },
        {
          name: 'Katya',
          email: 'katyane@ru',
          password: 'katya',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};



