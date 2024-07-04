'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Страусиная ферма?",
          answer: "очень страусиная",
          img: "https://avatars.mds.yandex.net/i?id=df8098883dafdf4cd54b7027330b8bd4dfcc1469-10511855-images-thumbs&n=13",
          themeId: 1, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "Ферма Панд?",
          answer: "самы милые медвежата",
          img: "https://avatars.mds.yandex.net/i?id=b905b2a39f26d241af066f7a62968a164ca630eb-12938831-images-thumbs&n=13",
          themeId: 2, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "Куриная ферма?",
          answer: "оченнь куриная ферма",
          img: "https://avatars.mds.yandex.net/i?id=8031c880a90ad67fcf0b4dba134adb4c227133f1-10698550-images-thumbs&n=13",
          themeId: 3, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};