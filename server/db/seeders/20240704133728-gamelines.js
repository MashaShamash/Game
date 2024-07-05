'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GameLines",
      [
        {
          gameLineStatus: false,
          questionId: 1,
          gameId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
            ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GameLines", null, {});
  },
};
