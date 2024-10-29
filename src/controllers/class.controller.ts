import Class from "../database/models/class";
import { Request, Response } from "express";
import { Op } from "sequelize";

//Xử lí lỗi định dạng kí tự tên class
export const createClass = async (req: Request, res: Response) => {
          const {name} = req.body;
         try {
               const classroom = await Class.create({name});
               res.status(201).json({message: 'Create class successfully', classroom});
         } catch (error) {
               res.status(500).json(error);
         }
}

export const getAllClass = async (req: Request, res: Response) => {
          try {
                    const classes = await Class.findAll();
                    res.json({NumberOfClass: classes.length, classes});
          } catch (err) {
                    console.log(err);
                    res.status(500).json(err);
          }
}

//Danh sách lớp học mở rộng với mỗi lớp có thể xem danh sách sinh viên và giảng viên chủ nhiệm
export const setNameClass =  async (req: Request, res: Response) => {
          const id = req.params.id;
          const {name} = req.body;
          try {
                    const classroom = await Class.findOne({where: {id}});
                    !classroom ? res.status(404).json({message: "Class not found"}) : classroom.update({name});
                    res.status(200).json({message: `Update class ${classroom?.name} successfully`, classroom});
          } catch (error) {
                    console.log(error);
                    res.status(500).json(error);
          }
}

//Cần xét thêm điều kiện if else nếu giá trị truyền đến không có hoặc không tồn tại
//Xét điều kiện nếu các giá trị bảng Class có liên quan đến bảng Score, Student, User với role Teacher đã tồn tại
export const deleteClass = async (req: Request, res: Response) => {
          const id = req.params.id;
          try {
                    const classroom = await Class.findOne({where: {id}});
                    !classroom ? res.status(404).json({message: "Class not found"}) : await classroom.destroy();
                    res.status(200).json({message: `Delete class ${classroom?.name} successfully`});
          } catch (error) {
                    console.log(error);
                    res.status(500).json(error);
          }
}

//Mở rộng hiển thi danh sách sinh viên và giảng viên chủ nhiệm của lớp
//Chức năng này nếu phát triển chỉ có giảng viên và admin mới có quyền dùng
export const findByClassName = async (req: Request, res: Response) => {
          const classname = req.query.name;
          
          try {
                    const classroom = await Class.findAll({where: {name: {[Op.like]: `%${classname}%`}}});
                    !classroom ? res.status(404).json({message: "Class not found"}) :
                    res.status(200).json(classroom);
          } catch (error) {
                    console.log(error);
                    res.status(500).json(error);
          }
}

