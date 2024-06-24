import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserBaseOrganisation } from "../schema/organisation/userBaseOrgSchema.js";

dotenv.config();

const PRODUCTION = process.env.PRODUCTION;

const JWT_ACCESS_EXPIRY = process.env.JWT_ACCESS_EXPIRY;
const JWT_REFRESH_EXPIRY = process.env.JWT_REFRESH_EXPIRY;
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

const COOKIE_AGE_ACCESS = process.env.COOKIE_AGE_ACCESS;
const COOKIE_AGE_REFRESH = process.env.COOKIE_AGE_REFRESH;

const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN;

const refreshAccessToken = async function (refreshToken) {
  try {
    const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
    const userOrg = await UserBaseOrganisation.findById(decoded.id);

    if (!userOrg) {
      response.status(401).send({ message: "Unauthorized" });
    }

    const accessToken = await generateAccessToken(userOrg);

    return accessToken;
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

const login = async function (userOrg, response) {
  console.log("Logged in with payload:");
  console.log(userOrg.id, userOrg.email, userOrg.name, userOrg.type);

  const accessToken = await generateAccessToken(userOrg);
  const refreshToken = await generateRefreshToken(userOrg);

  response.cookie(
    "auth",
    {
      id: userOrg.id,
      name: userOrg.name,
      type: userOrg.type,
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

const generateRefreshToken = async function (userOrg) {
  const id = userOrg.id;
  const refreshToken = jwt.sign({ id }, JWT_REFRESH_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRY,
  });
  return refreshToken;
};

const generateAccessToken = async function (userOrg) {
  const id = userOrg.id;
  const email = userOrg.email;
  const name = userOrg.name;
  const type = userOrg.type;

  const accessToken = jwt.sign({ id, email, name, type }, JWT_ACCESS_SECRET, {
    expiresIn: JWT_ACCESS_EXPIRY,
  });

  return accessToken;
};

export const authOrgUtils = {
  refreshAccessToken,
  login,
  generateAccessToken,
  generateRefreshToken,
};
