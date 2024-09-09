import express from "express";
import { UserController } from "../controllers/user.controller";
import { VerifyToken } from "../middleware/verify-token";

const route = express.Router();

const userController = new UserController();

route.post("/register", VerifyToken, (response, request) =>
  userController.register(response, request)
);
route.put("/update", VerifyToken, (response, request) =>
  userController.update(response, request)
);
route.delete("/remove", VerifyToken, (response, request) =>
  userController.delete(response, request)
);
route.post("/login", (response, request) =>
  userController.login(response, request)
);
route.post("/logout", (response, request) =>
  userController.logout(response, request)
);
module.exports = route;
