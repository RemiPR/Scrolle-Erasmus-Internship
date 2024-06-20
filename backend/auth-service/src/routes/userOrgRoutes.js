import express from "express";
import { UserOrganisationController } from "../controllers/userOrgController.js";

const router = express.Router();

router.post("/login", UserOrganisationController.login);

export default router;
