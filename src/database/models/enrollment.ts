import { Model, DataTypes, ForeignKey } from 'sequelize';
import connection from '../connection'; // Đảm bảo đường dẫn đúng đến cấu hình kết nối của bạn
import Student from './students';
import Class from './class';
import  Year  from './year';

export interface EnrollmentAttributes {
  id?: number;
  studentId: number;
  classId: number;
  yearId: number;
}

export class Enrollment extends Model<EnrollmentAttributes> implements EnrollmentAttributes {
  public id!: number;
  public studentId!: number;
  public classId!: number;
  public yearId!: number;
}

// Định nghĩa bảng và các cột cho bảng Enrollment
Enrollment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Students',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Classes',
        key: 'id' 
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    yearId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Years',
        key: 'id'
      }
    },
  },
  {
    sequelize: connection,
    modelName: 'Enrollment',
  }
);

Student.hasMany(Enrollment, {as: 'enrollments', foreignKey: {name: 'studentId'}, });
Enrollment.belongsTo(Student, {as: 'student', foreignKey: 'studentId' });

Class.hasMany(Enrollment, {as: 'enrollments', foreignKey: 'classId'});
Enrollment.belongsTo(Class, {as: 'class', foreignKey: 'classId' });

Year.hasMany(Enrollment, {as: 'enrollments', foreignKey: 'yearId'});
Enrollment.belongsTo(Year, {as: 'year', foreignKey: 'yearId' });

export default Enrollment;
