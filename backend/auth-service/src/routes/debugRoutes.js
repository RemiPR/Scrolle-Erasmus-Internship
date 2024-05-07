import express from "express";
import { DebugController } from "../controllers/debugController.js";
import { authenticateToken } from "../middleware/authentication.js";

const router = express.Router();

router.get("/checkCookies", DebugController.checkCookies);
router.get("/checkAuth", authenticateToken, DebugController.checkAuth);

export default router;
