import mongoose from "mongoose";
import { UserBaseOrganisation } from "./userBaseOrgSchema.js";

// This schema contains base schema for organisation, adds roles
const userManagementSchema = UserBaseOrganisation.discriminator(
  "UserManagement",
  new mongoose.Schema({})
);

export const UserManagement = userManagementSchema;
