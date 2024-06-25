import mongoose from "mongoose";
import { BaseCourse } from "./baseCourseSchema";

const freeCourseSchema = BaseCourse.discriminator(
  "Free",
  new mongoose.Schema({
    certificatePrice: {
      type: Number,
      default: 0,
    },
    durationWeeks: {
      type: Number,
      required: true,
    },
    selfLearningMaterial: {
      type: Boolean,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    timeCommmitment: {
      type: String,
      required: true,
    },
    lecturesDuration: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    nextLecture: {
      type: Date,
      required: false,
    },
  })
);

export const FreeCourse = freeCourseSchema;
