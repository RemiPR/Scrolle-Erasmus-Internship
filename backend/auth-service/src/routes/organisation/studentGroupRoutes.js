import { StudentGroupController } from "../../controllers/organisation/studentGroupController.js";
import express from "express";

const router = express.Router();

router.post("/create", StudentGroupController.create);

export default router;
