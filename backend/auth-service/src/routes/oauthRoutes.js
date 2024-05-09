import express from "express";
import { OauthController } from "../controllers/oauthController.js";

const router = express.Router();

// Route to initialize Google OAuth
router.get("/google", OauthController.initGoogle);

// Route to initialize Facebook OAuth
router.get("/facebook", OauthController.initFacebook);

// Route to handle Google OAuth callback
router.get("/google/callback", OauthController.authenticateGoogle);

// Route to handle Facebook OAuth callback
router.get("/facebook/callback", OauthController.authenticateFacebook);

export default router;
