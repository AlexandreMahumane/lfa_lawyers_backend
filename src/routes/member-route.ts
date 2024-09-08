import express from "express";
import { MemberController } from "../controllers/member.controller";

const route = express.Router();
const memberController = new MemberController();
route.get("/show", (request, response) =>
  memberController.show(response, request)
);
route.post("/insert", (request, response) =>
  memberController.insert(response, request)
);
route.put("/update/:id", (request, response) =>
  memberController.update(response, request)
);
route.delete("/delete/:id", (request, response) =>
  memberController.delete(response, request)
);

module.exports = route;
