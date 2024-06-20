import mongoose, { SchemaType } from "mongoose";
import { UserBaseOrganisation } from "./userBaseOrgSchema.js";

// This schema contains base schema for organisation, adds roles
const userTeacherSchema = UserBaseOrganisation.discriminator(
  "UserTeacher",
  new mongoose.Schema({
    biography: {
      type: String,
      required: false,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",
        required: false,
      },
    ],
  })
);

export const UserTeacher = userTeacherSchema;
