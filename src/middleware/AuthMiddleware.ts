import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UserAttributes from '../database/models/user';

export interface RequestWithUser extends Request {
          user?: UserAttributes | any;
}

type Role = 'admin' | 'teacher' | 'student';

const rolesPermissions: Record<Role, string[]> = {
  admin: ['read', 'write', 'update', 'delete'],
  teacher: ['read', 'write', 'update'],
  student: ['read'],
};

export const authenticate = (req: RequestWithUser, res: Response, next: NextFunction): void => {
  const authorizationClient = req.headers.authorization;
  const token = authorizationClient && authorizationClient.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access denied' });
    return; // Đảm bảo dừng hàm tại đây
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
    req.user = decoded as UserAttributes;
    next(); // Chuyển tiếp điều khiển đến middleware tiếp theo
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Invalid token' });
  }
}

export const authorize = (action: string) => (req: RequestWithUser, res: Response, next: NextFunction): void => {
  const userRole = req.user.role as Role; // Ép kiểu userRole thành Role
  const permissions = rolesPermissions[userRole];

  if (!permissions || !permissions.includes(action)) {
    res.status(403).json({ message: 'You do not have permission' });
    return;
  }

  next();
};

