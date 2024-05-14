import { UserManagement } from "../schema/userManagementSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_EXPIRY = process.env.JWT_EXPIRY;
const COOKIE_AGE = process.env.COOKIE_AGE;

const createUser = async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.surname ||
      !request.body.email ||
      !request.body.password ||
      !request.body.roles
    ) {
      return response.status(400).send({
        message: "Missing required fields",
      });
    }
    const newUser = new UserManagement({
      name: request.body.name,
      surname: request.body.surname,
      email: request.body.email,
      password: request.body.password,
      roles: request.body.roles,
    });

    // Save the new user to the database
    const user = await UserManagement.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: error.message });
  }
};

export const UserManagementController = { createUser };
