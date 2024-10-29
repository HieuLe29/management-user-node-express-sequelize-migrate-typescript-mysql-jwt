import { Request, Response } from "express";
import { Op } from "sequelize";
import Subject from "../database/models/subject";
import { MessageEvent } from "http";


//Chỉ có quyền admin mới tạo được môn học phần
export const createSubject = async (req: Request, res: Response) => {
          const {name, credit} = req.body;
          try {
                    const subject = await Subject.create({name, credit});
                    res.status(201).json(subject);
                    return;
          } catch (error) {
                    res.status(500).json(error);
          }
}

//Quyền Student, Teacher, Admin đều có thể truy cập
export const getAllSubject = async (req: Request, res: Response) => {
          try {
                    const subjects = await Subject.findAll();
                    res.json(subjects);
                    return;
          } catch (err) {
                    console.log(err);
                    res.status(500).json(err);
          }
}

//Cần xét thêm điều kiện if else nếu giá trị truyền đến không có hoặc không tồn tại
export const updateSubject =  async (req: Request, res: Response) => {
          const id = req.params.id;
          const name = req.body.name;
          const credit = parseInt(req.body.credit);
         
          try {
                    const subject = await Subject.findOne({where: {id}});
                    if (subject) {
                            await subject.update({name, credit});
                            res.status(200).json({message: `Update subject ${subject?.name} successfully`});
                            return;
                    } 
                    res.status(404).json({message: "Subject not found"});
          } catch (error) {
                    console.log(error);
                    res.status(500).json(error);
          }
}

//Cần xét thêm điều kiện if else nếu giá trị truyền đến không có hoặc không tồn tại
//Xét điều kiện nếu các giá trị bảng Subject có liên quan đến bảng Score đã tồn tại
export const deleteSubject = async (req: Request, res: Response) => {
          const id = req.params.id;
          try {
                    const subject = await Subject.findOne({where: {id}});
                    if (subject) {
                            await subject.destroy();
                            res.status(200).json({message: `Delete subject ${subject?.name} successfully`});            
                            return;
                    }
                    res.status(404).json({message: "Subject not found"});
          } catch (error) {
                    console.log(error);
                    res.status(500).json(error);
          }
}

//Cần xét thêm điều kiện nếu giá trị truyền đến không có hoặc không tồn tại
export const findBySubjectNameAndCredit = async (req: Request, res: Response) => {
          const name = req.query.name;
          const credit = Number(req.query.credit);
          try {
              const whereClause: any = {};
        
              if (name) {
                  whereClause.name = { [Op.like]: `%${name}%` };
              }
              if (credit) {
                  whereClause.email = credit;
              }
        
              const subjects = await Subject.findAll({ where: whereClause });
        
              subjects.length === 0 
                    ? res.status(404).json({ message: "Subjects not found" }) : res.status(200).json(subjects);
          } catch (error) {
              res.status(500).json({ error });
          }
}

