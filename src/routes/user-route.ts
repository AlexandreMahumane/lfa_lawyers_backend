import express from "express";
import { UserController } from "../controllers/user.controller";

const route = express.Router();

const userController = new UserController();

route.post("/register", (response, request) =>
  userController.register(request, response)
);
route.put("/update", (response, request) =>
  userController.update(request, response)
);
route.delete("/remove", (response, request) =>
  userController.delete(request, response)
);
route.post("/login", (response, request) =>
  userController.login(request, response)
);
module.exports = route;
