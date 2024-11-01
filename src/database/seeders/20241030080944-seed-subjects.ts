'use strict';

import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert('Subjects', [
      {
        name: 'Math',
        credit: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Physics',
        credit: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chemistry',
        credit: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các môn học khác theo nhu cầu
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert('Subjects', [
      {
        name: 'Math',
        credit: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Physics',
        credit: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chemistry',
        credit: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các môn học khác theo nhu cầu
    ]);
  }
};
