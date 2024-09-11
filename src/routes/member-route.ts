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
route.post("/insert", VerifyToken, (request, response) =>
  memberController.insert(response, request)
);
route.post("/i", upload.single("image"), (request, response) =>
  uploadImage(request, response)
);
route.put("/update/:id", VerifyToken, (request, response) =>
  memberController.update(response, request)
);
route.delete("/delete/:id", VerifyToken, (request, response) =>
  memberController.delete(response, request)
);

module.exports = route;
