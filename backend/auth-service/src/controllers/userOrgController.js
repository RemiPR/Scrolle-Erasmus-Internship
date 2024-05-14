import jwt from "jsonwebtoken";
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

    // Signs JWT token
    const token = jwt.sign(
      {
        id: userOrganisation.id,
        name: userOrganisation.name,
        surname: userOrganisation.surname,
        type: userOrganisation.userType,
        roles: userOrganisation.roles,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: JWT_EXPIRY,
      }
    );

    // Response with a cookie which stores the token
    // httpOnly makes cookie inaccessible to JavaScript running in the browser.
    // set secure to true when using HTTPS
    // sameSite Lax balanced safety vulnerable to phishing but maintains session,
    // sameSite Strict very safe  have to reauthenticate while accessing web from other sources
    // maxAge how long the cookie lasts, 3600000 = 1 hour
    return response
      .status(200)
      .cookie("authToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
        maxAge: COOKIE_AGE,
      })
      .send("Logged in");
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
};

export const UserOrganisationController = { loginUser };
