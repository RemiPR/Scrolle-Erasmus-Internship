import mongoose from "mongoose";
import bcrypt from "bcrypt";

// This schema contains base schema for organisation, adds roles
const userBaseOrgSchema = new mongoose.Schema(
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
    roles: {
      type: [String],
      required: false,
      default: null,
    },
    faculty: {
      type: String,
      required: true,
    },
  },
  {
    discriminatorKey: "type",
    collection: "organisationUsers",
    timestamps: true,
  }
);

// Function to check if password is valid for log in
userBaseOrgSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Hashes password before saving it
userBaseOrgSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export const UserBaseOrganisation = mongoose.model(
  "UserBaseOrganisation",
  userBaseOrgSchema
);
