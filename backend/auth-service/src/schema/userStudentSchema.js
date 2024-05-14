import mongoose from "mongoose";
import { UserBaseOrganisation } from "./userBaseOrgSchema.js";

// This schema contains base schema for organisation, adds roles
const userStudentSchema = UserBaseOrganisation.discriminator(
  "UserStudent",
  new mongoose.Schema({
    subject: {
      type: String,
      required: true,
    },
  })
);

export const UserStudent = userStudentSchema;
