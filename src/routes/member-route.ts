import express from "express";
import { MemberController } from "../controllers/member.controller";
import { VerifyToken } from "../middleware/verify-token";

const route = express.Router();
const memberController = new MemberController();
route.get("/show", (request, response) =>
  memberController.show(response, request)
);
route.post("/insert", VerifyToken, (request, response) =>
  memberController.insert(response, request)
);
route.put("/update/:id", VerifyToken, (request, response) =>
  memberController.update(response, request)
);
route.delete("/delete/:id", VerifyToken, (request, response) =>
  memberController.delete(response, request)
);

module.exports = route;
