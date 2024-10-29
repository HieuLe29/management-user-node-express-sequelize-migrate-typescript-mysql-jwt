'use strict';

import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('scores', 'student_id');
    await queryInterface.removeColumn('scores', 'subject_id');

    await queryInterface.addColumn('Scores', 'studentId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Students',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT' // Không cho phép xóa nếu có ràng buộc
    });

    // Thêm ràng buộc cho `subjectId`
    await queryInterface.addColumn('Scores', 'subjectId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Subjects',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT' // Không cho phép xóa nếu có ràng buộc
    });
  },

  async down (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
