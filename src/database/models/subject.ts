import { Model, DataTypes } from "sequelize";
import connection from "../connection";

interface SubjectAttributes {
  id?: number;
  name: string;
  credit: number;
}

class Subject extends Model<SubjectAttributes> implements SubjectAttributes {
  public id!: number;
  public name!: string;
  public credit!: number;

  static associate() {
    // define association here
  }

  public toJSON(): Subject | any {
    const values = { ...this.get(), createdAt: undefined, updatedAt: undefined };
    return values;
  }
}

Subject.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    credit: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize: connection,
    modelName: "Subject",
  }
);

export default Subject;