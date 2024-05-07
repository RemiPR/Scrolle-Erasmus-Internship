import express from "express";
import { UserController } from "../controllers/userGuestController.js";
import { authenticateToken } from "../middleware/authentication.js";

const router = express.Router();

router.post("/createUser", UserController.createUser);

export default router;
