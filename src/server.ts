import express from "express";
import { connectDB } from "./database/index";
import cookieParser from "cookie-parser";
require("dotenv").config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/user", require("./routes/user-route"));
app.use("/contact", require("./routes/contacts-route"));
app.use("/member", require("./routes/member-route"));
app.use("/news", require("./routes/news-route"));
app.use("/content", require("./routes/content-route"));
app.use("/feedback", require("./routes/feedback-route"));
app.listen(port, () => console.log("server starter at port ", port));
