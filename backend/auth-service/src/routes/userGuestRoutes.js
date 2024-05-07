import express from "express";
import { UserGuestController } from "../controllers/userGuestController.js";
import { authenticateToken } from "../middleware/authentication.js";

const router = express.Router();

router.post("/createUser", UserGuestController.createUser);
router.post("/registerUser", UserGuestController.registerUser);

export default router;
