import { FreeCourseController } from "../../controllers/courses/freeCourseController";
import express from "express";

const router = express.Router();

router.post("/create", FreeCourseController.createCourse);

export default router;