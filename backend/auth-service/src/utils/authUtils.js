import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserGuest } from "../schema/userGuestSchema.js";

dotenv.config();

const JWT_ACCESS_EXPIRY = process.env.JWT_ACCESS_EXPIRY;
const JWT_REFRESH_EXPIRY = process.env.JWT_REFRESH_EXPIRY;
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

const COOKIE_AGE_ACCESS = process.env.COOKIE_AGE_ACCESS;
const COOKIE_AGE_REFRESH = process.env.COOKIE_AGE_REFRESH;

const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN;

const oauthLoginGuestUser = async function (userGuest, locale, response) {
  const id = userGuest.id;
  const email = userGuest.email;
  const name = userGuest.name;
  const type = userGuest.userType;
  const isConfirmed = userGuest.personalInfo.isFilled;

  console.log("Logged in with payload:");
  console.log(id, email, name, type);
  const localePath = locale;

  // Response with a cookie which stores the token
  // httpOnly makes cookie inaccessible to JavaScript running in the browser.
  // set secure to true when using HTTPS
  // sameSite Lax balanced safety vulnerable to phishing but maintains session,
  // sameSite Strict very safe  have to reauthenticate while accessing web from other sources
  // maxAge how long the cookie lasts, 3600000 = 1 hour

  // "auth" cookie readable by javascript code so that frontend could read its values
  const accessToken = jwt.sign(
    { id, email, name, type, isConfirmed },
    JWT_ACCESS_SECRET, // JWT secret key
    { expiresIn: JWT_ACCESS_EXPIRY } // Token expiration
  );

  const refreshToken = jwt.sign(
    {
      id,
    },
    JWT_REFRESH_SECRET,
    { expiresIn: JWT_REFRESH_EXPIRY }
  );

  response.cookie(
    "auth",
    {
      id: id,
      name: name,
      type: type,
      isConfirmed: isConfirmed,
    },
    { httpOnly: false, secure: true, maxAge: COOKIE_AGE_ACCESS }
  );

  response.cookie("authRefresh", refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: COOKIE_AGE_REFRESH,
  });

  response
    .status(200)
    .cookie("authToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      maxAge: COOKIE_AGE_ACCESS,
    })
    .redirect(`${FRONTEND_DOMAIN}/${localePath}/guest/oauthLogin`);
};

const refreshAccessToken = async function (refreshToken) {
  try {
    const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
    const userGuest = await UserGuest.findById(decoded.id);

    if (!userGuest) {
      response.status(401).send({ message: "Unauthorized" });
    }

    const id = userGuest.id;
    const email = userGuest.email;
    const name = userGuest.name;
    const type = userGuest.userType;
    const isConfirmed = userGuest.personalInfo.isFilled;

    const newAccessToken = jwt.sign(
      { id, email, name, type, isConfirmed },
      JWT_ACCESS_SECRET,
      { expiresIn: JWT_ACCESS_EXPIRY }
    );
    return newAccessToken;
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

const loginGuestUser = async function (userGuest, response) {
  const id = userGuest.id;
  const email = userGuest.email;
  const name = userGuest.name;
  const type = userGuest.userType;
  const isConfirmed = userGuest.personalInfo.isFilled;

  console.log("Logged in with payload:");
  console.log(id, email, name, type, isConfirmed);

  // Generate a JWT access with the user information
  const accessToken = jwt.sign(
    { id, email, name, type, isConfirmed },
    JWT_ACCESS_SECRET, // JWT secret key
    { expiresIn: JWT_ACCESS_EXPIRY } // Token expiration
  );

  const refreshToken = jwt.sign(
    {
      id,
    },
    JWT_REFRESH_SECRET,
    { expiresIn: JWT_REFRESH_EXPIRY }
  );

  response.cookie(
    "auth",
    {
      id: id,
      name: name,
      type: type,
      isConfirmed: isConfirmed,
    },
    {
      httpOnly: false,
      secure: false, // Set to false for local development, true for production
      maxAge: COOKIE_AGE_ACCESS,
      sameSite: "Lax",
    }
  );

  response.cookie("authRefresh", refreshToken, {
    httpOnly: true,
    secure: false, // Set to false for local development, true for production
    maxAge: COOKIE_AGE_REFRESH,
    sameSite: "Lax",
  });

  return response
    .status(200)
    .cookie("authToken", accessToken, {
      httpOnly: true,
      secure: false, // Set to false for local development, true for production
      sameSite: "Lax",
      maxAge: COOKIE_AGE_ACCESS,
    })
    .send({ message: "Success" });
};

export const authUtils = {
  oauthLoginGuestUser,
  loginGuestUser,
  refreshAccessToken,
};
