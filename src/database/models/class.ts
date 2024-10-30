import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import Enrollment from "./enrollment";
import Student from "./students";

interface ClassAttributes {
  id?: number;
  name: string;
}

class Class extends Model<ClassAttributes> implements ClassAttributes {
  public id!: number;
  public name!: string;

  static associate() {
    // define association here
  }

  public toJSON(): Class | any {
    const values = { ...this.get(), createdAt: undefined, updatedAt: undefined };
    return values;
  }
}

Class.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: connection,
    modelName: "Class",
  }
);


export default Class;