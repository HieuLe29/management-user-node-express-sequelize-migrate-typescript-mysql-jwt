'use strict';

import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert('Classes', [
      {
        name: '10A1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '10A2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '10A3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '11B1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '11B2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '11B3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các năm học khác tùy theo nhu cầu
    ]);
  },

  async down (queryInterface: QueryInterface, Sequelize: any) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
