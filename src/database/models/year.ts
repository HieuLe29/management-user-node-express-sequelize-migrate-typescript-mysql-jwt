import connection from "../connection";
import { DataTypes, Model } from "sequelize";
import Enrollment from "./enrollment";

interface YearAttributes { 
  id?: number;
  name: string;
}

class Year extends Model<YearAttributes> implements YearAttributes {
  public id!: number;
  public name!: string;
}

Year.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }

}, 
{
  sequelize: connection,
  modelName: 'Year'
}
)

export default Year;  