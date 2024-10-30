import { Router } from "express";
import { register, login } from "../controllers/user.controller";

const userRoutes = Router();
userRoutes.post("/register", register);
userRoutes.post("/login", login);

export default userRoutes;