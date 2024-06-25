import express from "express";
import { CloudinaryController } from "../controllers/cloudinaryController.js";

const router = express.Router();

router.post("/sign", CloudinaryController.signCloudinaryParams);

export default router;
