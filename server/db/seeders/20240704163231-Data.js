'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Datas', [
      {
        titleId: '1',
        question: "Чем больше из нее берешь, тем больше она становится",
        answer: "яма",
        images: "https://pikuco.ru/upload/test_stable/ffe/ffeecd1b37460f8ce4201ca86704b854.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '1',
        question: "Какая птица яиц не несёт, но сама из яйца вылупилась?",
        answer: "петух",
        images: "https://pikuco.ru/upload/test_stable/c90/c90e30c885097a8fd754cdfb2aa4e06f.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '1',
        question: "Джордж Вашингтон, Шерлок Холмс, Уильям Шекспир, Людвиг ван Бетховен, Наполеон Бонапарт— кто лишний?",
        answer: "Шерлок Холмс",
        images: "https://pikuco.ru/upload/test_stable/a4b/a4b2fbe51445c73da81ad904e646d8c7.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '1',
        question: "Человек хочет, чтобы он включился. А когда он включается, человек злится и старается его выключить",
        answer: "будильник",
        images: "https://pikuco.ru/upload/test_stable/b8c/b8cf117567f8bbd2c08c32ceafeae801.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '1',
        question: "Он чёрный, когда его покупают, он красный, когда его используют, он серый, когда его выбрасывают",
        answer: "уголь",
        images: "https://pikuco.ru/upload/test_stable/06b/06b98b05623222ef5987a2a5430feeb5.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '1',
        question: "В каком слове пять «е» и никаких других гласных?",
        answer: "переселенец",
        images: "https://pikuco.ru/upload/test_stable/773/773cad51afd041918a97f93d4dc0eb38.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '1',
        question: "Это больше самого слона, но ничего не весит. Что это такое?",
        answer: "тень",
        images: "https://pikuco.ru/upload/test_stable/546/546c8960a12fd89128f852a90a1006d3.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '2',
        question: "Какого цвета верхняя половина логотипа PEPSI?",
        answer: "Красная",
        images: "https://pikuco.ru/upload/test_stable/b4f/b4ff3a5febd2a7d109522bf15cf08383.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '2',
        question: "Какие две буквы возглавляют таблицу проверки зрения?",
        answer: "Ш Б",
        images: "https://pikuco.ru/upload/test_stable/a5d/a5d70345185a5541e0fdb6a0aec7f380.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '2',
        question: "Что в кадре из фильма 'Операция 'Ы' и другие приключения Шурика' скрыто на столе?",
        answer: "Горчица",
        images: "https://pikuco.ru/upload/test_stable/e8d/e8dd6478734a5e994b327bd79c6de700.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '2',
        question: "В рекламе какого продукта участвовал данный котик?",
        answer: "Whiskas",
        images: "https://pikuco.ru/upload/test_stable/c52/c5236cba7fbad0d36dca2c935fb56e5e.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '2',
        question: "Какого цвета вторая буква О в логотипе Google?",
        answer: "Желтая",
        images: "https://pikuco.ru/upload/test_stable/cfd/cfd3ad8cbe7e0c38e9b185ed632f6bc2.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '2',
        question: "Кто изображен на стодолларовой банкноте?",
        answer: "Франклин",
        images: "https://pikuco.ru/upload/test_stable/2ff/2ff3114baefae40d5d47e22ea7cc930c.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titleId: '2',
        question: "Вспоминаем классику, кто или что скрывается в красно-синем подарке из 'Ну погоди'?",
        answer: "Волк",
        images: "https://pikuco.ru/upload/test_stable/6c3/6c3972a467a28f21fd614ae6da21cfbe.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    , {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Data', null, {});
     
  }
};
