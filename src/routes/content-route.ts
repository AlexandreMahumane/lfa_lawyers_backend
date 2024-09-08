import express from "express";
import { ContentController } from "../controllers/content.controller";

const route = express.Router();

const contentController = new ContentController();
route.post("/insert", (response, request) =>
  contentController.insert(request, response)
);
route.put("/update", (response, request) =>
  contentController.update(request, response)
);

module.exports = route;
