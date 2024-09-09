import express from "express";
import { ContentController } from "../controllers/content.controller";
import { VerifyToken } from "../middleware/verify-token";

const route = express.Router();

const contentController = new ContentController();
route.post("/insert", VerifyToken, (response, request) =>
  contentController.insert(request, response)
);
route.put("/update", VerifyToken, (response, request) =>
  contentController.update(request, response)
);

module.exports = route;
