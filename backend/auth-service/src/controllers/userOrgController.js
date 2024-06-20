import jwt from "jsonwebtoken";
import { authOrgUtils } from "../utils/authOrgUtils.js";
import dotenv from "dotenv";
import { UserBaseOrganisation } from "../schema/userBaseOrgSchema.js";

dotenv.config();

const JWT_EXPIRY = process.env.JWT_EXPIRY;
const COOKIE_AGE = process.env.COOKIE_AGE;

const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;

    // Checks if credentials are valid
    const userOrganisation = await UserBaseOrganisation.findOne({ email });
    if (
      !userOrganisation ||
      !(await userOrganisation.isValidPassword(password))
    ) {
      return response.status(401).send("Invalid Credentials");
    }

    authOrgUtils.login(userOrganisation, response);
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
};

export const UserOrganisationController = { loginUser };
