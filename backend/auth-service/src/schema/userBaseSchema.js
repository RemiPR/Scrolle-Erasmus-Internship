import mongoose from "mongoose";
import bcrypt from "bcrypt";

// base user schema, to be inherited by other user schemas.
const userBaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { discriminatorKey: "userType", collection: "users", timestamps: true }
);

// Function to check if password is valid for log in
userBaseSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Hashes password before saving it
userBaseSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export const UserBase = mongoose.model("UserBase", userBaseSchema);
