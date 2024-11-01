import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../database/models/user";
import jwt from "jsonwebtoken";
import Student from "../database/models/students";

export const register = async (req: Request, res: Response) => {
  const { role, email, password, name, age, classId } = req.body;

  try {
    if (!role || !email || !password) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let user;

    if (role === "admin" || role === "teacher") {
      user = await User.create({ email, password: hashedPassword, role });
    } else if (role === "student") {
      if (!name || !age || !classId) {
        res.status(400).json({ message: "Missing required fields" });
        return;
      }

      user = await User.create({ role, email, password: hashedPassword });
      await Student.create({ name, age, classId, userId: user.id });
    } else {
      res.status(400).json({ message: "Invalid role" });
      return 
    }

    //Tạo token xác thực
    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email, password: user.password },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: "1h" }
    );

    res.status(201).json({ message: "User registered successfully", token: token });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user.id, role: user.role, email: user.email, password: user.password },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn: "1h" }
      );
      res.json({ token });
      return;
    }

    res.status(401).json({ message: "Invalid credentials" });
    
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

