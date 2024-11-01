import { Model, DataTypes } from "sequelize";
import connection from "../connection";

export interface UserAttributes {
  id?:number,
  email:string;
  password:string;
  role:string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public email!: string; 
  public password!: string;
  public role!: string;
 
  

  public toJSON(): User | any {
    const values = { ...this.get(), createdAt: undefined, updatedAt: undefined };
    return values;
  }

}
//Yêu cầu validate cho tên người dùng, password và role chỉ giới hạn 3 tài khoản sinh viên, giảng viên, admin
User.init({
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type:DataTypes.STRING,
  },
  role: {
    type: DataTypes.ENUM,
    values: ['student', 'teacher', 'admin'],
  }
}, {
  sequelize: connection,
  modelName: 'User',
});


export default User;