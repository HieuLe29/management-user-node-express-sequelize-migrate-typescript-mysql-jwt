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
     }
   },
   subjectId: {
     allowNull: false,
     type: DataTypes.INTEGER,
     references: {
       model: "Subjects",
       key: "id"
     }
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


Student.hasMany(Score, {as: 'scores', foreignKey: 'studentId'});
Score.belongsTo(Student, {as: 'student', foreignKey: 'studentId'});

Subject.hasMany(Score, {as: 'score', foreignKey: 'subjectId'});
Score.belongsTo(Subject, {as: 'subject', foreignKey: 'subjectId'});

export default Score;
