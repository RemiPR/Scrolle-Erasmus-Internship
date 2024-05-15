import express, { json } from "express";
import { connect } from "mongoose";

import debugRoutes from "./routes/debugRoutes.js";
import guestRoutes from "./routes/userGuestRoutes.js";
import oauthRoutes from "./routes/oauthRoutes.js";

import organisationRoutes from "./routes/userOrgRoutes.js";
import studentRoutes from "./routes/userStudentRoutes.js";
import managementRoutes from "./routes/userManagementRoutes.js";

import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

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
app.use("/api/debug", debugRoutes); // for debugging

app.use("/api/auth/guest", guestRoutes); // handles guest auth
app.use("/api/oauth", oauthRoutes); // handles OAuth facebook and google log in for guests

app.use("/api/auth/organisation", organisationRoutes); // mainly handles log in for organisation users
app.use("/api/auth/student", studentRoutes);
app.use("/api/auth/management", managementRoutes);

// Database connection
connect(process.env.MONGODB_URI_USERS, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! Auth micro service");
});

app.listen(PORT, () => {
  console.log(`auth micro-service running on port ${PORT}`);
});
