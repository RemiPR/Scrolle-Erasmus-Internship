import express from "express";
import { ValidationController } from "../controllers/validationController.js";
import { authenticateToken } from "../middleware/authentication.js";

const router = express.Router();

router.get("/jwt", authenticateToken, ValidationController.authenticateToken);

export default router;
