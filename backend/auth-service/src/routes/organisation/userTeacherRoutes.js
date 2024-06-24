import express from "express";
import { UserTeacherController } from "../../controllers/organisation/userTeacherController.js";

const router = express.Router();

router.post("/register", UserTeacherController.register);
router.post("/login", UserTeacherController.login);

export default router;
