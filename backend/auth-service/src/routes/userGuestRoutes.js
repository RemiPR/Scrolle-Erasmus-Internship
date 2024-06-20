import express from "express";
import { UserGuestController } from "../controllers/userGuestController.js";
import { authenticateGuestToken } from "../middleware/authenticationGuest.js";
import { checkUserType } from "../middleware/checkUserType.js";

const router = express.Router();

router.post("/createUser", UserGuestController.createUser);
router.post("/register", UserGuestController.registerUser);
router.post("/login", UserGuestController.loginUser);
router.post("/logout", UserGuestController.logoutUser);
router.post("/refresh", UserGuestController.refreshToken);
router.post(
  "/addPersonalInfo",
  authenticateGuestToken,
  checkUserType(["UserGuest"]),
  UserGuestController.addPersonalInfo
);

export default router;
