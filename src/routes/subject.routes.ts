import { Router } from "express";
import { createSubject, deleteSubject, findBySubjectNameAndCredit, getAllSubject, updateSubject } from "../controllers/subject.controller";

const subjectRouter = Router();

subjectRouter.post("/create", createSubject);
subjectRouter.get("/all", getAllSubject);
subjectRouter.get("/search", findBySubjectNameAndCredit);
subjectRouter.put("/:id", updateSubject);
subjectRouter.delete("/:id", deleteSubject);


export default subjectRouter;