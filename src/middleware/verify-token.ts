import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import AuthService from "../service/auth.service";
dotenv.config();
export const VerifyToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authService = new AuthService();
  const token = request.cookies["auth_token"];
  console.log(token);

  if (!token) {
    return response
      .status(401)
      .json({ message: "Token not found, acess deined" });
  }
  try {
    const decode = authService.verifyToken(token);
    // request.userId = decode.id
    console.log(decode);
    next();
  } catch (error) {
    return response.status(401).json("Token is invalid");
  }
};
