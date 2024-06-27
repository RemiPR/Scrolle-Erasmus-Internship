import { StudentGroupController } from "../../controllers/organisation/studentGroupController";
import express from "express";

const router = express.Router();

router.post("/create", StudentGroupController.create);

export default router;
