'use strict';

import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert('Users', [
      {
        role:"admin",
        email:"admin@gmail.com",
        password:"$2a$10$q9ddG4aPl3D/jrTL/NMUHOeaATOmw2/agr69LXQi0tuO.4rjUnCDa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role:"teacher",
        email:"teacher1@gmail.com",
        password:"$2a$10$JfOeMA0frfb5D724ngUyYe3PA2t456OJNEFw5L6A7exK/RIzV0M3i",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role:"teacher",
        email:"teacher2@gmail.com",
        password:"$2a$10$IYLgOcj6J/2tdGYOQ8OoC.A65bBMxOvlB.miK8s0t9gtfR7ZXdKZ6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role:"teacher",
        email:"teacher3@gmail.com",
        password:"$2a$10$E4GhzMlJ2xbQnFGkYyEWb.RLstutyUHOml1an.36S6DQSgO8Wlfj6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role:"student",
        email:"student1@gmail.com",
        password:"$2a$10$uSi9DMSN6lUOS1EBVVV45.IRa7kFcWI6qknhc5c0XRP2SLxXzZYE.",
        name: "Student 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role:"student",
        email:"student2@gmail.com",
        password:"$2a$10$gO/XakyvMisMuJtFNPmxzOR3vK.V4xU5cR0Drbd7KfejjCN5ctLry",
        name: "Student 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role:"student",
        email:"student3@gmail.com",
        password:"$2a$10$ii9bMrCJRlVAukfrk4/5FOUd9oxjXPTGRpWkavpS4cOVq8/T4chSK",
        name: "Student 3",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface: QueryInterface, Sequelize: any) {
  await queryInterface.bulkDelete('User', {});
    
  }
};
