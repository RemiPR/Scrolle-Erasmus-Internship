import { UserGuest } from "../schema/userGuestSchema.js";
import bcrypt from "bcrypt";

const createUser = async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.surname ||
      !request.body.password ||
      !request.body.email
    ) {
      return response.status(400).send({
        message: "Missing required fields",
      });
    }
    const newUser = new UserGuest({
      name: request.body.name,
      surname: request.body.surname,
      email: request.body.email,
      password: request.body.password,
    });

    // Save the new user to the database
    const user = await UserGuest.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: error.message });
  }
};

const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

const registerUser = async (request, response) => {
  try {
    const { name, surname, email, password } = request.body;

    // Validation if any fields are missing
    if (!name || !surname || !password || !email) {
      return response.status(400).send({
        message: "Missing required fields",
      });
    }

    // Validation if email already exists
    const existingUser = await UserGuest.findOne({ email: email }).exec();
    if (existingUser) {
      return response.status(409).send({ message: "Email already exists" });
    }

    // TODO: add password validation https://www.reddit.com/r/dataisbeautiful/comments/1cb48y6/oc_i_updated_our_password_table_for_2024_with/#lightbox

    // Creates newGuestUser object
    const newGuestUser = new UserGuest({
      name: name,
      surname: surname,
      email: email,
      password: password,
    });

    // Save the new user to the database
    // Hashing done in the userGuestSchema.js
    const user = await UserGuest.create(newGuestUser);

    return response.status(201).send(user);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const UserGuestController = { createUser, registerUser };
