import exp from "constants";
import Year from "../database/models/year";
import { Request, Response } from "express";
import { Op } from "sequelize";

export const createYear = async (req: Request, res: Response) => {
          const {name} = req.body;
          try {
                    const year = await Year.create({name});
                    res.status(201).json(year);
          } catch (error) {
                    res.status(500).json(error);
          }
}

export const getAllYear = async (req: Request, res: Response) => {
          try {
                    const years = await Year.findAll();
                    res.json(years);
          } catch (err) {
                    console.log(err);
                    res.status(500).json(err);
          }
}

export const setYear =  async (req: Request, res: Response) => {
          const id = req.params.id;
          const {name} = req.body;
          try {
                    const year = await Year.findOne({where: {id}});
                    !year ? res.status(404).json({message: "Year not found"}) : year.update({name});
                    res.status(200).json(year);
          } catch (error) {
                    console.log(error);
                    res.status(500).json(error);
          }
}

//Cần xét thêm điều kiện if else nếu giá trị truyền đến không có hoặc không tồn tại
//Xét điều kiện nếu các giá trị bảng Year có liên quan đến bảng Score đã tồn tại
export const deleteYear = async (req: Request, res: Response) => {
          const id = req.params.id;
          try {
                    const year = await Year.findOne({where: {id}});
                    !year ? res.status(404).json({message: "Year not found"}) : await year.destroy();
                    res.status(200).json({message: `Delete year ${year?.name} successfully`});
          } catch (error) {
                    console.log(error);
                    res.status(500).json(error);
          }
}

export const findByYearName = async (req: Request, res: Response) => {
          const yearname = req.query.name;
          console.log(yearname);
          
          try {
                    const year = await Year.findAll({where: {name: {[Op.like]: `%${yearname}%`}}});
                    !year ? res.status(404).json({message: "Year not found"}) :
                    res.status(200).json(year);
          } catch (error) {
                    console.log(error);
                    res.status(500).json(error);
          }
}

