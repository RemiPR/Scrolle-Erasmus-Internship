import { FreeCourseController } from "../../controllers/courses/freeCourseController.js";
import express from "express";
import { checkUserType } from "../../middleware/checkUserType.js";

const router = express.Router();

router.post(
  "/create",
  checkUserType("Teacher"),
  FreeCourseController.createCourse
);

export default router;
