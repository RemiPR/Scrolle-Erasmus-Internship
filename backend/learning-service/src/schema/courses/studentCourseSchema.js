import mongoose from "mongoose";
import { BaseCourse } from "./baseCourseSchema.js";

const studentCourseSchema = BaseCourse.discriminator(
  "Student",
  new mongoose.Schema({
    ects: {
      type: Number,
      required: true,
    },
  })
);

export const StudentCourse = studentCourseSchema;
