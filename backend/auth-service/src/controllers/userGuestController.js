import { UserGuest } from "../schema/userGuestSchema.js";
import { validationUtils } from "../utils/validationUtils.js";
import { authUtils } from "../utils/authUtils.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_EXPIRY = process.env.JWT_EXPIRY;
const COOKIE_AGE = process.env.COOKIE_AGE;

const createUser = async (request, response) => {
  try {
    if (!request.body.name || !request.body.email) {
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

const logoutUser = async (request, response) => {
  try {
    response.clearCookie("authToken"); // if using HttpOnly cookies to store JWT
    return response.status(200).send("Logged out");
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
};

const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;

    // Checks if credentials are valid
    const userGuest = await UserGuest.findOne({ email });
    if (!userGuest || !(await userGuest.isValidPassword(password))) {
      return response.status(401).json({ message: "Invalid Credentials" });
    }

    authUtils.loginGuestUser(userGuest, response);
  } catch (error) {
    return response.status(500).send({ message: error.message });
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

    // Check if email is valid
    if (!(await validationUtils.isValidEmail(email))) {
      return response.status(400).json({ message: "Email is not valid" });
    }

    // Validation if email already exists
    const existingUser = await UserGuest.findOne({ email: email }).exec();
    if (existingUser) {
      return response.status(409).json({ message: "Email already exists" });
    }

    // check if password is strong
    if (!(await validationUtils.isStrongPassword(password))) {
      return response.status(400).json({ message: "Password is too weak" });
    }

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

    authUtils.loginGuestUser(user, response);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// Mainly used when user wants to participate in a free course he has to fill these in
const addPersonalInfo = async (request, response) => {
  try {
    const { name, surname, country, phoneNumber, birth } = request.body;
    if (
      !request.user.id ||
      !name ||
      !surname ||
      !country ||
      !phoneNumber ||
      !birth
    ) {
      return response.status(400).send({
        message: "Missing info",
      });
    }

    const debugUser = await UserGuest.findByIdAndUpdate(
      request.user.id,
      {
        $set: {
          name: name,
          surname: surname,
          "personalInfo.isFilled": true,
          "personalInfo.birth": birth,
          "personalInfo.country": country,
          "personalInfo.phoneNumber": phoneNumber,
        },
      },
      { runValidators: true }
    ).catch((error) => {
      response.status(500).send({ message: error.message });
    });

    return response
      .status(201)
      .send({ message: "User updated with personal info" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: error.message });
  }
};

export const UserGuestController = {
  createUser,
  registerUser,
  loginUser,
  logoutUser,
  addPersonalInfo,
};
