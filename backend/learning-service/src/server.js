import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT_LEARNING;
const corsOptions = {
  origin: process.env.FRONTEND_DOMAIN, // Adjust this to match your frontend host
  credentials: true, // This is critical for cookies to be sent and received
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

// routes

// Database connection
connect(process.env.MONGODB_URI_LEARNING, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/api/learning", (req, res) => {
  res.send("Hello World! Learning micro service");
});

app.listen(PORT, () => {
  console.log(`Learning micro-service running on port ${PORT}`);
});
