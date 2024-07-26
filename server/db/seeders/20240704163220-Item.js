'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Items', [{
      title: 'Загадки',
      foto: 'https://ixbt.online/live/images/original/10/48/54/2021/09/22/2d2f7b821d.jpg'
     },
     {
      title: 'Проверка зрительной памяти',
      foto: 'https://v-kurse.ru/wp-content/uploads/2018/11/13a43ba3e4b91831b38e4c5d4712d2e4.jpg'
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Item', null, {});
     
  }
};
