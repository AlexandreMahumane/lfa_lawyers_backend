import express from "express";
import { UserController } from "../controllers/user.controller";

const route = express.Router();

const userController = new UserController();

route.post("/register", (response, request) =>
  userController.register(response, request)
);
route.put("/update", (response, request) =>
  userController.update(response, request)
);
route.delete("/remove", (response, request) =>
  userController.delete(response, request)
);
route.post("/login", (response, request) =>
  userController.login(response, request)
);
module.exports = route;
