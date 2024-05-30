import express from "express";
import { UserStudentController } from "../controllers/userStudentController.js";
import { authenticateToken } from "../middleware/authentication.js";

const router = express.Router();

//router.post("/createUser", UserStudentController.createUser);
//router.post("/registerUser", UserStudentController.registerUser);
//router.post("/loginUser", UserStudentController.loginUser);
//router.post("/logoutUser", UserStudentController.logoutUser);

export default router;
