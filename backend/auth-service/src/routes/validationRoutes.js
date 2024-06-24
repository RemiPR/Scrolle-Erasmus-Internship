import express from "express";
import { ValidationController } from "../controllers/validationController.js";
import { authenticateGuestToken } from "../middleware/authenticationGuest.js";

const router = express.Router();

router.get(
  "/jwt",
  authenticateGuestToken,
  ValidationController.authenticateToken
);

export default router;
