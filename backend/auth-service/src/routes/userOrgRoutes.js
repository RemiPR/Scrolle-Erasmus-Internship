import express from "express";
import { UserOrganisationController } from "../controllers/userOrgController.js";
import { authenticateToken } from "../middleware/authentication.js";

const router = express.Router();

//router.post("/loginUser", UserOrganisationController.loginUser);
//router.post("/registerUser", UserOrganisationController.registerUser);
//router.post("/logoutUser", UserOrganisationController.logoutUser);

export default router;
