import express from "express";
import { MemberController } from "../controllers/member.controller";
import { VerifyToken } from "../middleware/verify-token";
import { uploadImage } from "../controllers/cloudinary";
import upload from "../middleware/multer";

const route = express.Router();
const memberController = new MemberController();
route.get("/show", (request, response) =>
  memberController.show(response, request)
);
route.post(
  "/insert",
  VerifyToken,
  upload.single("image"),
  (request, response) => memberController.insert(response, request)
);

route.put(
  "/update/:id",
  VerifyToken,
  upload.single("image"),
  (request, response) => memberController.update(response, request)
);
route.delete(
  "/delete/:id",
  VerifyToken,
  upload.single("image"),
  (request, response) => memberController.delete(response, request)
);

module.exports = route;
