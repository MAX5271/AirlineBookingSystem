'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // await queryInterface.bulkInsert('Airports',[
    //   {
    //     name:'Indira Gandhi International Airport',
    //     cityId:4,
    //     createdAt: new Date(),
    //     updatedAt: new Date() 
    //   },
    //   {
    //     name:'Safdarjung Airport',
    //     cityId:4,
    //     createdAt: new Date(),
    //     updatedAt: new Date() 
    //   },
    //   {
    //     name:'Chhatrapati Shivaji Maharaj International Airport Mumbai',
    //     cityId:5,
    //     createdAt: new Date(),
    //     updatedAt: new Date() 
    //   },
    //   {
    //     name:'Juhu Airport',
    //     cityId:4,
    //     createdAt: new Date(),
    //     updatedAt: new Date() 
    //   },
    // ],{});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
