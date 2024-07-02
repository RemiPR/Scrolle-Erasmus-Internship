import express from "express";
import { ZoomController } from "../controllers/zoomController.js";

const router = express.Router();

router.post("/validate", ZoomController.validate);

export default router;
