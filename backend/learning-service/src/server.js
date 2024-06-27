import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import freeCourseRoutes from "./routes/courses/freeCourseRoutes"

dotenv.config();

const courseRouter = express.Router();

const app = express();
const PORT = process.env.PORT_LEARNING;
const corsOptions = {
  origin: process.env.FRONTEND_DOMAIN,
  credentials: true, 
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

courseRouter.use("/courses/free", freeCourseRoutes);

app.use("/api/learning", courseRouter)


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
