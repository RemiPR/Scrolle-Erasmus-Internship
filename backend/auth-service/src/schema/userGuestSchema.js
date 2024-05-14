import mongoose from "mongoose";
import { UserBaseGuest } from "./userBaseGuestSchema.js";

const userGuestSchema = UserBaseGuest.discriminator(
  "UserGuest",
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
  })
);

export const UserGuest = userGuestSchema;
