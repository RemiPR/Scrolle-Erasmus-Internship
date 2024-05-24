import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_EXPIRY = process.env.JWT_EXPIRY;
const COOKIE_AGE = process.env.COOKIE_AGE;
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
  const token = jwt.sign(
    { id, email, name, type, isConfirmed },
    process.env.JWT_SECRET, // JWT secret key
    { expiresIn: JWT_EXPIRY } // Token expiration
  );

  response.cookie(
    "auth",
    {
      id: id,
      name: name,
      type: type,
      isConfirmed: isConfirmed,
    },
    { httpOnly: false, maxAge: COOKIE_AGE }
  );

  response
    .status(200)
    .cookie("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      maxAge: COOKIE_AGE,
    })
    .redirect(`${FRONTEND_DOMAIN}/${localePath}/guest/oauthLogin`);
};

const loginGuestUser = async function (userGuest, response) {
  const id = userGuest.id;
  const email = userGuest.email;
  const name = userGuest.name;
  const type = userGuest.userType;
  const isConfirmed = userGuest.personalInfo.isFilled;

  console.log("Logged in with payload:");
  console.log(id, email, name, type, isConfirmed);

  // Generate a JWT with the user information
  const token = jwt.sign(
    { id, email, name, type, isConfirmed },
    process.env.JWT_SECRET, // JWT secret key
    { expiresIn: JWT_EXPIRY } // Token expiration
  );

  response.cookie(
    "auth",
    {
      id: id,
      name: name,
      type: type,
      isConfirmed: isConfirmed,
    },
    { httpOnly: false, maxAge: COOKIE_AGE }
  );

  return response
    .status(200)
    .cookie("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      maxAge: COOKIE_AGE,
    })
    .send({ message: "Success" });
};

export const authUtils = { oauthLoginGuestUser, loginGuestUser };
