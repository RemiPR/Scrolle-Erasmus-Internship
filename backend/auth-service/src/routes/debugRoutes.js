import express from "express";
import { DebugController } from "../controllers/debugController.js";
import { authenticateGuestToken } from "../middleware/authenticationGuest.js";
import { checkRole } from "../middleware/checkRole.js";
import { checkUserType } from "../middleware/checkUserType.js";

const router = express.Router();

router.get("/checkCookies", DebugController.checkCookies);
router.post("/checkData", DebugController.checkData);
router.get("/checkPayload", DebugController.checkJwtPayload);
router.get("/checkAuth", authenticateGuestToken, DebugController.checkAuth);
router.get(
  "/userManagement",
  authenticateGuestToken,
  checkUserType("UserManagement"),
  checkRole(["admin"]),
  DebugController.adminOnly
);

export default router;
