import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_EXPIRY = process.env.JWT_EXPIRY;
const COOKIE_AGE = process.env.COOKIE_AGE;
const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN;

const loginGuestUser = async function (
  userId,
  email,
  name,
  userType,
  response
) {
  console.log("Logged in with payload:");
  console.log(userId, email, name, userType);

  // Generate a JWT with the user information
  const token = jwt.sign(
    { userId, email, name, userType },
    process.env.JWT_SECRET, // JWT secret key
    { expiresIn: JWT_EXPIRY } // Token expiration
  );

  return response
    .status(200)
    .cookie("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      maxAge: COOKIE_AGE,
    })
    .redirect(`${FRONTEND_DOMAIN}/guest`);
};

export const authUtils = { loginGuestUser };
