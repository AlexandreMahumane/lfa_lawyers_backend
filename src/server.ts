import express from "express";
import { connectDB } from "./database/index";
require("dotenv").config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
connectDB();
console.log("eduhicd");
app.use("/user", require("./routes/user-route"));
app.listen(port, () => console.log("server starter at port ", port));
