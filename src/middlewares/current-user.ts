import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser: UserPayload | null;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.currentUser = null;

  if (!req.session?.jwt) {
    return next();
  }

  try {
    const verifyed = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;

    req.currentUser = verifyed;
  } catch (err) {
    console.log("Invalid JWT");
  }

  return next();
};
