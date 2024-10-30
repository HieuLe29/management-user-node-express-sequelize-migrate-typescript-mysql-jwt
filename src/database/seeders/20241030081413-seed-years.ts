'use strict';

import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert('Years', [
      {
        name: '2022-2023',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2023-2024',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2024-2025',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các năm học khác tùy theo nhu cầu
    ]);
  },

  async down (queryInterface: QueryInterface, Sequelize: any) {
    await queryInterface.bulkDelete('Years', {});
  }
};
