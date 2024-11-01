import { Router } from "express";
import { register, login } from "../controllers/user.controller";
import { authenticate, authorize } from "../middleware/AuthMiddleware";

const userRoutes = Router();
userRoutes.post("/register", authenticate, authorize('write'), register);
userRoutes.post("/login", login);

export default userRoutes;