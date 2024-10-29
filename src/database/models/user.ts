import { Model, DataTypes, Association } from "sequelize";
import connection from "../connection";
import Class from "./class";

interface UserAttributes {
  id?:number,
  username:string;
  password:string;
  role:string;
}

class User extends Model {
  public id!: number;
  public username!: string; 
  public password!: string;
  public role!: string;
 
  

  public toJSON(): User | any {
    const values = { ...this.get(), createdAt: undefined, updatedAt: undefined };
    return values;
  }

}
//Yêu cầu validate cho tên người dùng, password và role chỉ giới hạn 3 tài khoản sinh viên, giảng viên, admin
User.init({
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type:DataTypes.STRING,
  },
  role: {
    type: DataTypes.ENUM,
    values: ['student', 'teacher', 'admin', 'customer'],
    defaultValue: 'customer',
  }
}, {
  sequelize: connection,
  modelName: 'User',
});

export default User;