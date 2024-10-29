import { Model, DataTypes, Association } from "sequelize";
import connection from "../connection";
import Class from "./class";
import User from './user';

interface StudentAttributes {
  id?:number,
  userId:number;
  fullname:string;
  dateOfBirth:Date;
  classId:number;
}

class Student extends Model {
  public id!: number;
  public userId!:number;
  public fullname!: string;
  public dateOfBirth!: Date;
  public classId!:number;
  

  public toJSON(): Student | any {
    const values = { ...this.get(), createdAt: undefined, updatedAt: undefined };
    return values;
  }

}
//Yêu cầu validate cho tên sinh viên
Student.init({
  fullname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  dateOfBirth: {
    allowNull: false,
    type:DataTypes.DATE,
  },
  classId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Classes',
      key: 'id'
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  }
}, {
  sequelize: connection,
  modelName: 'User',
});

// association
Student.hasOne(User, { as: 'user', foreignKey: {name: 'userId', }})     
User.belongsTo(Student, { as: 'student', foreignKey: {name: 'userId', }})

Class.hasMany(Student, {as: 'students', foreignKey: {name: 'classId'},  });
Student.belongsTo(Class, { as: 'class', foreignKey: {name: 'classId'},  });

export default Student;