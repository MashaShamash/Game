'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "что чувствуешь?",
          answer: "радость на первой фазе от зеленой галочки в тестах",
          img: "https://avatars.mds.yandex.net/i?id=df242790295b36da66e3ccd369dc564f1f769b56-12438744-images-thumbs&n=13",
          themeId: 1, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "что чувствуешь?",
          answer: "радость на второй фазе, когда запустил клиент",
          img: "https://avatars.mds.yandex.net/i?id=0acbe2f15a9bbc81b9fc4c88280a302d1ceeb8d3-11723847-images-thumbs&n=13",
          themeId: 1, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "что чувствуешь?",
          answer: "радость на третей фазе, когда понял rtc",
          img: "https://avatars.mds.yandex.net/i?id=f58d31d2f8b6dff487d97f7289da9ac8a3a130ff-5476469-images-thumbs&n=13",
          themeId: 1, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "что чувствуешь?",
          answer: "гнев на первой фазе, когда не понял рекурсию",
          img: "https://avatars.mds.yandex.net/i?id=9793346ebf8aa316bbca2cf2fc4c8756fb6c1264-10877308-images-thumbs&n=13",
          themeId: 1, 
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          question: "что чувствуешь?",
          answer: "гнев на третей фазе, каждый день после 14 ч",
          img: "https://avatars.mds.yandex.net/i?id=2290984f27917e6ac00c510b9659f68d29a5ee1e93caccba-12421498-images-thumbs&n=13",
          themeId: 1, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "Кто?",
          answer: "опоссум",
          img: "https://avatars.mds.yandex.net/i?id=6035552cd9df69a0c75841a82aa5766648424b69b5647eb4-12422300-images-thumbs&n=13",
          themeId: 2, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "Кто?",
          answer: "бородатая мартышка",
          img: "https://pofoto.club/uploads/posts/2022-09/1664516024_60-pofoto-club-p-borodatie-zhivotnie-80.jpg",
          themeId: 2, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "Кто?",
          answer: "лисица Феникс",
          img: "https://avatars.mds.yandex.net/i?id=12c099be474646a5132dd902a2fe199324ee4755-10878189-images-thumbs&n=13",
          themeId: 2, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "Кто?",
          answer: "Гарпия Южно-Американска",
          img: "https://avatars.mds.yandex.net/i?id=aecc276ba5498820ea807dc67730ce8a261f2a4c-8217704-images-thumbs&n=13",
          themeId: 2, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "Кто?",
          answer: "лягушкорот",
          img: "https://tn.fishki.net/26/upload/post/2022/12/01/4312366/9736cf7c4563af50c00e1e69d65f854f.jpg",
          themeId: 2, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "Фу, что это?",
          answer: "жареный шелкопряд",
          img: "https://avatars.mds.yandex.net/i?id=598c56fc8fc844eaf58c1890e9fe79906ecb77c9-12150810-images-thumbs&n=13",
          themeId: 3, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "Фу, что это?",
          answer: "суп из гнезда ласточки",
          img: "https://avatars.mds.yandex.net/i?id=0741e45f9d08b61727969fa89d6fb64c277482970b93d25a-12471018-images-thumbs&n=13",
          themeId: 3, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "Фу, что это?",
          answer: "глаза тунца",
          img: "https://avatars.mds.yandex.net/i?id=5b0a2f2be7141f081e53d9850290fdccc6865412-10339875-images-thumbs&n=13",
          themeId: 3, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "Фу, что это?",
          answer: "100летнее китайское яйцо",
          img: "https://avatars.mds.yandex.net/i?id=7b7a2821a81b1cdf5bcb82e16b1ae9b161fa1ba3-12715410-images-thumbs&n=13",
          themeId: 3, 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          question: "уже не фу, что это?",
          answer: "жареный кленовый лист",
          img: "https://avatars.mds.yandex.net/i?id=b7691df81c965869d3ceb56654d53ebc4c3ec9ad-8356382-images-thumbs&n=13",
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