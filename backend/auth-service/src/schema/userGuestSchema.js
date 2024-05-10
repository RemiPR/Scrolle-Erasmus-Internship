import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userGuestSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      default: null, // null if user registers/logs in with google that has no surname
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      default: null, // null if user registers/logs in with facebook or google
    },
    socialIds: {
      facebook: { type: String, default: null },
      google: { type: String, default: null },
    },
  },
  {
    timestamps: true,
  }
);

// Function to check if password is valid for log in
userGuestSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Hashes password before saving it
userGuestSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export const UserGuest = mongoose.model("UserGuest", userGuestSchema);
