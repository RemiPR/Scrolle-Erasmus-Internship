import express from "express";
import { UserGuestController } from "../../controllers/guest/userGuestController.js";
import { authenticateGuestToken } from "../../middleware/authenticationGuest.js";
import { checkUserType } from "../../middleware/checkUserType.js";

const router = express.Router();

router.post("/createUser", UserGuestController.createUser);
router.post("/register", UserGuestController.register);
router.post("/login", UserGuestController.login);
router.post("/logout", UserGuestController.logout);
router.post("/refresh", UserGuestController.refreshToken);
router.post(
  "/addPersonalInfo",
  authenticateGuestToken,
  checkUserType(["Guest"]),
  UserGuestController.addPersonalInfo
);

export default router;
