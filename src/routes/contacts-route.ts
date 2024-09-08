import express from "express";
import { ContactController } from "../controllers/contact.controller";

const route = express.Router();
const contactController = new ContactController();

route.post("/insert", (request, response) =>
  contactController.insert(response, request)
);
route.put("/update/:id", (request, response) =>
  contactController.update(response, request)
);
route.delete("/delete/:id", (request, response) =>
  contactController.delete(response, request)
);
route.get("/show", (request, response) =>
  contactController.show(response, request)
);
module.exports = route;
