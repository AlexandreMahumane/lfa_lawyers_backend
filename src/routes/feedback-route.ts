import express from "express";
import { FeedbackController } from "../controllers/feedback.controller";

const route = express.Router();
const feedbackController = new FeedbackController();
route.post("/insert/", (response, request) =>
  feedbackController.insert(request, response)
);
route.post("/delete/:id", (response, request) =>
  feedbackController.delete(request, response)
);

module.exports = route;
