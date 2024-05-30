import express from "express";
import { UserGuestController } from "../controllers/userGuestController.js";
import { authenticateToken } from "../middleware/authentication.js";
import { checkUserType } from "../middleware/checkUserType.js";

const router = express.Router();

router.post("/createUser", UserGuestController.createUser);
router.post("/registerUser", UserGuestController.registerUser);
router.post("/loginUser", UserGuestController.loginUser);
router.post("/logoutUser", authenticateToken, UserGuestController.logoutUser);
router.post(
  "/addPersonalInfo",
  authenticateToken,
  checkUserType(["UserGuest"]),
  UserGuestController.addPersonalInfo
);

export default router;
