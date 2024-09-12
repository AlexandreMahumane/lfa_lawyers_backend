import express from "express";
import { NewsController } from "../controllers/news.controller";
import { VerifyToken } from "../middleware/verify-token";
import upload from "../middleware/multer";

const route = express.Router();
const newsController = new NewsController();
route.get("/show", (request, response) =>
  newsController.show(response, request)
);
route.post(
  "/insert",
  VerifyToken,
  // upload.single("image"),
  (request, response) => newsController.insert(response, request)
);
route.put(
  "/update/:id",
  VerifyToken,
  // upload.single("image"),
  (request, response) => newsController.update(response, request)
);
route.delete(
  "/delete/:id",
  VerifyToken,
  // upload.single("image"),
  (request, response) => newsController.delete(response, request)
);
module.exports = route;
