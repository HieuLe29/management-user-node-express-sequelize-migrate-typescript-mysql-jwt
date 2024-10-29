import { Router } from "express";
import { createClass, deleteClass, findByClassName, setNameClass, getAllClass } from "../controllers/class.controller";
 
const classRoutes = Router();

classRoutes.post("/create", createClass);
classRoutes.get("/all", getAllClass);
classRoutes.get("/search", findByClassName);
classRoutes.put("/:id", setNameClass);
classRoutes.delete("/:id", deleteClass);


export default classRoutes;