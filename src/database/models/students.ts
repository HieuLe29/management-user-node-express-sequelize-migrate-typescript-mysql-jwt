import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import Class from "./class";
import User from './user';

interface StudentAttributes {
  id?:number,
  userId:number;
  name:string;
  age:Date;
  classId:number;
}

class Student extends Model<StudentAttributes> implements StudentAttributes {
  public id!: number;
  public userId!:number;
  public name!: string;
  public age!: Date;
  public classId!:number;
  

  public toJSON(): Student | any {
    const values = { ...this.get(), password: undefined, createdAt: undefined, updatedAt: undefined };
    return values;
  }

}
//Yêu cầu validate cho tên sinh viên
Student.init({
  userId: {
    allowNull: false, 
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  age: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  classId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Classes',
      key: 'id'
    }
  }
}, {
  sequelize: connection,
  modelName: 'Student',
});

// association
Student.belongsTo(User, { as: 'user', foreignKey: {name: 'userId', }})
User.hasOne(Student, { as: 'student', foreignKey: {name: 'userId', }})     


Student.belongsTo(Class, { as: 'class', foreignKey: {name: 'classId'},});
Class.hasMany(Student, {as: 'students', foreignKey: {name: 'classId'},});


export default Student;