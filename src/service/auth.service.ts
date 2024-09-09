import jwt from "jsonwebtoken";
require("dotenv").config();

class AuthService {
  private secret: string = process.env.JSON_SECRET || "defaultSecret";

  generateToken(userId: any): string {
    return jwt.sign({ id: userId }, this.secret, { expiresIn: "1d" });
  }

  verifyToken(token: string) {
    return jwt.verify(token, this.secret);
  }
}

export default AuthService;
