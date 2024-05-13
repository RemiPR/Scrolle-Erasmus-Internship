import express from "express";
import { GuestController } from "../controllers/guestController.js";
import { authenticateToken } from "../middleware/authentication.js";

const router = express.Router();

router.post("/createUser", GuestController.createUser);
router.post("/registerUser", GuestController.registerUser);
router.post("/loginUser", GuestController.loginUser);
router.post("/logoutUser", GuestController.logoutUser);

export default router;
