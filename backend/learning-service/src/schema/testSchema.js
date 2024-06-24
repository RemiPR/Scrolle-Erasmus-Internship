import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "tests",
  },
  {
    timestamps: true,
    collection: "tests",
  }
);

const Test = mongoose.model("Test", testSchema);

export default Test;
