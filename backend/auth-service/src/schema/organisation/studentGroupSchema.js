import mongoose from "mongoose";

const studentGroupSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    courses: [
      {
        course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
        start: { type: Date, required: true },
        end: { type: Date, required: true },
        nextLecture: { type: Date, required: false },
      },
    ],
  },
  {
    timestamps: true,
    collection: "studentGroups",
  }
);

export const StudentGroup = mongoose.model("StudentGroup", studentGroupSchema);
