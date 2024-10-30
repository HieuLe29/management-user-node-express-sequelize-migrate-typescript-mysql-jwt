'use strict';

import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert('Student', [
      {
        name: "Student 1",
        age: 20,
        userId: 5,
        classId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Student 2",
        age: 20,
        userId: 6,
        classId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Student 2",
        age: 20,
        userId: 7,
        classId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface: QueryInterface, Sequelize: any) {
  await queryInterface.bulkDelete('Student', {});
    
  }
};
