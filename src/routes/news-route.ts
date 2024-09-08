import express from "express";
import { NewsController } from "../controllers/news.controller";

const route = express.Router();
const newsController = new NewsController();
route.get("/show", (request, response) =>
  newsController.show(response, request)
);
route.post("/insert", (request, response) =>
  newsController.insert(response, request)
);
route.put("/update/:id", (request, response) =>
  newsController.update(response, request)
);
route.delete("/delete/:id", (request, response) =>
  newsController.delete(response, request)
);
module.exports = route;
