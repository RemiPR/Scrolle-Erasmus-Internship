import express from "express";
import { UserOrganisationController } from "../controllers/userOrgController.js";

const router = express.Router();

router.post("/login", UserOrganisationController.loginUser);
//router.post("/registerUser", UserOrganisationController.registerUser);
//router.post("/logoutUser", UserOrganisationController.logoutUser);

export default router;
