import express from "express";
import { ContactController } from "../controllers/contact.controller";
import { VerifyToken } from "../middleware/verify-token";

const route = express.Router();
const contactController = new ContactController();

route.post("/insert", VerifyToken, (request, response) =>
  contactController.insert(response, request)
);
route.put("/update/:id", VerifyToken, (request, response) =>
  contactController.update(response, request)
);
route.delete("/delete/:id", VerifyToken, (request, response) =>
  contactController.delete(response, request)
);
route.get("/show", (request, response) =>
  contactController.show(response, request)
);
module.exports = route;
