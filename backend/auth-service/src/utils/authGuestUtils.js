import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserGuest } from "../schema/userGuestSchema.js";

dotenv.config();

const PRODUCTION = process.env.PRODUCTION;

const JWT_ACCESS_EXPIRY = process.env.JWT_ACCESS_EXPIRY;
const JWT_REFRESH_EXPIRY = process.env.JWT_REFRESH_EXPIRY;
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

const COOKIE_AGE_ACCESS = process.env.COOKIE_AGE_ACCESS;
const COOKIE_AGE_REFRESH = process.env.COOKIE_AGE_REFRESH;

const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN;

const oauthLogin = async function (userGuest, locale, response) {
  console.log("Logged in with payload:");
  console.log(userGuest.id, userGuest.email, userGuest.name, userGuest.type);
  const localePath = locale;

  const accessToken = await generateAccessToken(userGuest);
  const refreshToken = await generateRefreshToken(userGuest);

  response.cookie(
    "auth",
    {
      id: userGuest.id,
      name: userGuest.name,
      type: userGuest.type,
      isConfirmed: userGuest.isConfirmed,
    },
    {
      httpOnly: false,
      secure: PRODUCTION,
      sameSite: PRODUCTION ? "None" : "Lax",
      maxAge: COOKIE_AGE_ACCESS,
    }
  );

  response.cookie("authRefresh", refreshToken, {
    httpOnly: true,
    secure: PRODUCTION,
    sameSite: PRODUCTION ? "None" : "Lax",
    maxAge: COOKIE_AGE_REFRESH,
  });

  response
    .status(200)
    .cookie("authToken", accessToken, {
      httpOnly: true,
      secure: PRODUCTION,
      sameSite: PRODUCTION ? "None" : "Lax",
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

    const newAccessToken = await generateAccessToken(userGuest);

    return newAccessToken;
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

const login = async function (userGuest, response) {
  console.log("Logged in with payload:");
  console.log(userGuest.id, userGuest.email, userGuest.name, userGuest.type);

  const accessToken = await generateAccessToken(userGuest);
  const refreshToken = await generateRefreshToken(userGuest);

  response.cookie(
    "auth",
    {
      id: userGuest.id,
      name: userGuest.name,
      type: userGuest.type,
      isConfirmed: userGuest.isConfirmed,
    },
    {
      httpOnly: false,
      secure: PRODUCTION,
      maxAge: COOKIE_AGE_ACCESS,
      sameSite: PRODUCTION ? "None" : "Lax",
    }
  );

  response.cookie("authRefresh", refreshToken, {
    httpOnly: true,
    secure: PRODUCTION,
    maxAge: COOKIE_AGE_REFRESH,
    sameSite: PRODUCTION ? "None" : "Lax",
  });

  return response
    .status(200)
    .cookie("authToken", accessToken, {
      httpOnly: true,
      secure: PRODUCTION,
      sameSite: PRODUCTION ? "None" : "Lax",
      maxAge: COOKIE_AGE_ACCESS,
    })
    .send({ message: "Success" });
};

const generateRefreshToken = async function (userGuest) {
  const id = userGuest.id;
  const refreshToken = jwt.sign({ id }, JWT_REFRESH_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRY,
  });
  return refreshToken;
};

const generateAccessToken = async function (userGuest) {
  const id = userGuest.id;
  const email = userGuest.email;
  const name = userGuest.name;
  const type = userGuest.userType;
  const isConfirmed = userGuest.personalInfo.isFilled;

  const accessToken = jwt.sign(
    { id, email, name, type, isConfirmed },
    JWT_ACCESS_SECRET,
    { expiresIn: JWT_ACCESS_EXPIRY }
  );

  return accessToken;
};

export const authGuestUtils = {
  oauthLogin,
  login,
  refreshAccessToken,
};
