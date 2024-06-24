import mongoose from "mongoose";

// base user schema, to be inherited by other user schemas.
const baseCourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: null,
    },
    imageUrlLowRes: {
      type: String,
      default: null,
    },
    videoUrl: {
      type: String,
      default: null,
    },
    language: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    assignments: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Assignment",
      default: [],
    },
    tests: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Test",
      default: [],
    },
  },
  {
    discriminatorKey: "type",
    collection: "courses",
    timestamps: true,
  }
);

export const BaseCourse = mongoose.model("BaseCourse", baseCourseSchema);
