import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_EXPIRY = process.env.JWT_EXPIRY;
const COOKIE_AGE = process.env.COOKIE_AGE;

const loginUser = async (request, response) => {
  try {
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const UserOrganisationController = { loginUser };
