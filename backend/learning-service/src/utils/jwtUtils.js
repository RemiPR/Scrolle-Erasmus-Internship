import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const getPayload = async function (token) {
  try {
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const jwtUtils = { getPayload };
