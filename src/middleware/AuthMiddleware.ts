import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UserAttributes from '../database/models/user';

export interface RequestWithUser extends Request {
          user?: UserAttributes | any;
}

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