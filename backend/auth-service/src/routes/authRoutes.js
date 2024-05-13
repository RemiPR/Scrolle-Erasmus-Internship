import express from "express";
import { AuthController } from "../controllers/authController.js";
import { authenticateToken } from "../middleware/authentication.js";

const router = express.Router();

router.post("/createUser", AuthController.createUser);
router.post("/registerUser", AuthController.registerUser);
router.post("/loginUser", AuthController.loginUser);
router.post("/logoutUser", AuthController.logoutUser);

export default router;
