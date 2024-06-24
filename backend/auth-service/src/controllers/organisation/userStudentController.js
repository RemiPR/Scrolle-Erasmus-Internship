import { UserStudent } from "../../schema/organisation/userStudentSchema.js";
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
      !request.body.subject
    ) {
      return response.status(400).send({
        message: "Missing required fields",
      });
    }
    const newUser = new UserStudent({
      name: request.body.name,
      surname: request.body.surname,
      email: request.body.email,
      password: request.body.password,
      subject: request.body.subject,
    });

    // Save the new user to the database
    const user = await UserStudent.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: error.message });
  }
};

export const UserStudentController = { createUser };
