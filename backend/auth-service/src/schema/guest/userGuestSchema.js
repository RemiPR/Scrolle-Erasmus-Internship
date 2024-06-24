import mongoose from "mongoose";
import { UserBaseGuest } from "./userBaseGuestSchema.js";

const userGuestSchema = UserBaseGuest.discriminator(
  "Guest",
  new mongoose.Schema({
    surname: {
      type: String,
      required: false,
      default: null, // null if userGuest registers/logs in with google that has no surname
    },
    password: {
      type: String,
      required: false,
      default: null, // null if userGuest registers/logs in with facebook or google
    },
    socialIds: {
      facebook: { type: String, default: null },
      google: { type: String, default: null },
    },
    personalInfo: {
      isFilled: { type: Boolean, default: false },
      birth: { type: Date, default: null },
      country: { type: String, default: null },
      phoneNumber: { type: String, default: null },
      education: { type: String, default: null },
      reason: { type: String, default: null },
    },
    // TODO: Change type to ObjectID once course schema is created
    enrolledCourses: {
      type: [String],
      default: [],
    },
  })
);

export const UserGuest = userGuestSchema;
