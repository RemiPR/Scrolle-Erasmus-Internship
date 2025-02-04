import express, { json } from "express";
import { connect } from "mongoose";

import debugRoutes from "./routes/debugRoutes.js";
import validationRoutes from "./routes/validationRoutes.js";
import zoomRoutes from "./routes/zoomRoutes.js";

import guestRoutes from "./routes/guest/userGuestRoutes.js";
import oauthRoutes from "./routes/guest/oauthRoutes.js";
import cloudinaryRoutes from "./routes/cloudinaryRoutes.js";

import organisationRoutes from "./routes/organisation/userOrgRoutes.js";
import studentGroupRoutes from "./routes/organisation/studentGroupRoutes.js";
import studentRoutes from "./routes/organisation/userStudentRoutes.js";
import managementRoutes from "./routes/organisation/userManagementRoutes.js";
import teacherRoutes from "./routes/organisation/userTeacherRoutes.js";

import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const authRouter = express.Router();

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const corsOptions = {
  origin: process.env.FRONTEND_DOMAIN,
  credentials: true, // This is critical for cookies to be sent and received
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

// routes
// general purpose routes
authRouter.use("/debug", debugRoutes); // for debugging
authRouter.use("/validation", validationRoutes); // API proxy middleware for validation
authRouter.use("/cloudinary", cloudinaryRoutes); // handles cloudinary operations
authRouter.use("/zoom", zoomRoutes); // handles zoom operations
// guest routes
authRouter.use("/guest", guestRoutes); // handles guest auth
authRouter.use("/oauth", oauthRoutes); // handles OAuth facebook and google log in
// organisation routes
authRouter.use("/studentGroup", studentGroupRoutes); // handles student group operations
authRouter.use("/organisation", organisationRoutes); // mainly handles log in for organisation users
authRouter.use("/student", studentRoutes);
authRouter.use("/management", managementRoutes);
authRouter.use("/teacher", teacherRoutes);

app.use("/api/auth", authRouter); // main router

// Database connection
connect(process.env.MONGODB_URI_AUTH, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/api/auth", (req, res) => {
  res.send("Hello World! Auth micro service");
});

app.listen(PORT, () => {
  console.log(`auth micro-service running on port ${PORT}`);
});
