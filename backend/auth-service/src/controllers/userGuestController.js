import { UserGuest } from "../schema/userGuestSchema.js";
import { validationUtils } from "../utils/validationUtils.js";
import { authUtils } from "../utils/authUtils.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_EXPIRY = process.env.JWT_EXPIRY;
const COOKIE_AGE = process.env.COOKIE_AGE;

const validateSession = async (request, response) => {
  try {
  } catch (error) {
    response.status(500).send(error);
  }
};

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

    // Signs JWT token
    const token = jwt.sign(
      { id: userGuest.id, name: userGuest.name, type: userGuest.userType },
      process.env.JWT_SECRET,
      {
        expiresIn: JWT_EXPIRY,
      }
    );

    // Response with a cookie which stores the token
    // httpOnly makes cookie inaccessible to JavaScript running in the browser.
    // set secure to true when using HTTPS
    // sameSite Lax balanced safety vulnerable to phishing but maintains session,
    // sameSite Strict very safe  have to reauthenticate while accessing web from other sources
    // maxAge how long the cookie lasts, 3600000 = 1 hour
    return response
      .status(200)
      .cookie("authToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
        maxAge: COOKIE_AGE,
      })
      .send("Logged in");
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

    authUtils.loginGuestUserOnRegister(
      user.id,
      user.email,
      user.name,
      user.userType,
      response
    );
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const UserGuestController = {
  createUser,
  registerUser,
  loginUser,
  logoutUser,
};
