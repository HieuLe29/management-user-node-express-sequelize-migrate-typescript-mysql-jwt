import { Router } from "express";
import { createYear, deleteYear, findByYearName, getAllYear, setYear } from "../controllers/year.controller";

const yearRouter = Router();

yearRouter.post("/create", createYear);
yearRouter.get("/all", getAllYear);
yearRouter.get("/search", findByYearName);
yearRouter.put("/:id", setYear);
yearRouter.delete("/:id", deleteYear);

export default yearRouter;