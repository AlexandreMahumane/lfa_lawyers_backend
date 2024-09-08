import express from "express";
import { connectDB } from "./database/index";
require("dotenv").config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
connectDB();

app.use("/user", require("./routes/user-route"));
app.use("/contact", require("./routes/contacts-route"));
app.use("/member", require("./routes/member-route"));
app.use("/news", require("./routes/news-route"));
app.listen(port, () => console.log("server starter at port ", port));
