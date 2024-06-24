import express, { json } from "express";
import { connect } from "mongoose";

import debugRoutes from "./routes/debugRoutes.js";
import validationRoutes from "./routes/validationRoutes.js";

import guestRoutes from "./routes/guest/userGuestRoutes.js";
import oauthRoutes from "./routes/guest/oauthRoutes.js";

import organisationRoutes from "./routes/organisation/userOrgRoutes.js";
import studentRoutes from "./routes/organisation/userStudentRoutes.js";
import managementRoutes from "./routes/organisation/userManagementRoutes.js";
import teacherRoutes from "./routes/organisation/userTeacherRoutes.js";

import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const authRouter = express.Router();

dotenv.config();

const app = express();
const PORT = process.env.PORT_AUTH;
const corsOptions = {
  origin: process.env.FRONTEND_DOMAIN, // Adjust this to match your frontend host
  credentials: true, // This is critical for cookies to be sent and received
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

// routes
authRouter.use("/debug", debugRoutes); // for debugging

authRouter.use("/validation", validationRoutes);
authRouter.use("/guest", guestRoutes); // handles guest auth
authRouter.use("/oauth", oauthRoutes); // handles OAuth facebook and google log in for guests
authRouter.use("/organisation", organisationRoutes); // mainly handles log in for organisation users
authRouter.use("/student", studentRoutes);
authRouter.use("/management", managementRoutes);
authRouter.use("/teacher", teacherRoutes);

app.use("/api/auth", authRouter);

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
