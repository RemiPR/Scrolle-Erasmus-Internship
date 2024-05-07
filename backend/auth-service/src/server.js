import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import oauthRoutes from "./routes/oauthRoutes.js";
import debugRoutes from "./routes/debugRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT_AUTH;

app.use(cors());
app.use(json());
app.use(cookieParser());

app.use("/api", userRoutes);
app.use("", oauthRoutes);
app.use("/debug", debugRoutes);

// Database connection
connect(process.env.MONGODB_URI_USERS, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! Auth micro service");
});

app.listen(PORT, () => {
  console.log(`users micro-service running on port ${PORT}`);
});
