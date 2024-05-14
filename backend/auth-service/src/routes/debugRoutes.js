import express from "express";
import { DebugController } from "../controllers/debugController.js";
import { authenticateToken } from "../middleware/authentication.js";
import { checkRole } from "../middleware/checkRole.js";
import { checkUserType } from "../middleware/checkUserType.js";

const router = express.Router();

router.get("/checkCookies", DebugController.checkCookies);
router.get("/checkPayload", DebugController.checkJwtPayload);
router.get("/checkAuth", authenticateToken, DebugController.checkAuth);
router.get(
  "/userManagement",
  authenticateToken,
  checkUserType("UserManagement"),
  checkRole(["admin"]),
  DebugController.adminOnly
);

export default router;
