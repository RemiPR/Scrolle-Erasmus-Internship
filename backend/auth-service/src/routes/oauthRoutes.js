import express from "express";
import { OauthController } from "../controllers/oauthController.js";

const router = express.Router();

// Route to initialize Google OAuth
router.get("/google", OauthController.init);

// Route to handle Google OAuth callback
router.get("/google/callback", OauthController.authenticate);

export default router;
