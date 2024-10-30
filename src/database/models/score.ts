import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import Student from "./students";
import Subject from "./subject";

interface ScoreAttributes {
  id?: number;
  studentId: number;
  subjectId: number;
  score: number;
}

class Score extends Model {
  public id!: number;
  public studentId!: number;
  public subjectId!: number;
  public score!: number;  
}

Score.init(
  {
   studentId: {
     allowNull: false,
     type: DataTypes.INTEGER,
     references: {
       model: "Students",
       key: "id"
     },
     onUpdate: 'CASCADE',
     onDelete: 'RESTRICT' // Không cho phép xóa nếu có ràng buộc
   },
   subjectId: {
     allowNull: false,
     type: DataTypes.INTEGER,
     references: {
       model: "Subjects",
       key: "id"
     },
     onUpdate: 'CASCADE',
     onDelete: 'RESTRICT' // Không cho phép xóa nếu có ràng buộc
   },
   score: {
     allowNull: false,
     type: DataTypes.FLOAT,
     defaultValue: 0
   }
  },
  {
    sequelize: connection,
    modelName: "Score",
  }
);


Score.belongsTo(Student, {as: 'student', foreignKey: 'studentId'});
Student.hasMany(Score, {as: 'scores', foreignKey: 'studentId'});

Score.belongsTo(Subject, {as: 'subject', foreignKey: 'subjectId'});
Subject.hasMany(Score, {as: 'score', foreignKey: 'subjectId'});

export default Score;
