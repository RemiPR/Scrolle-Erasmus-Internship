import { UserGuest } from "../schema/userGuestSchema.js";
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
      return response.status(401).send("Invalid Credentials");
    }

    // Signs JWT token
    const token = jwt.sign({ id: userGuest }, process.env.JWT_SECRET, {
      expiresIn: JWT_EXPIRY,
    });

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

export const AuthController = {
  createUser,
  registerUser,
  loginUser,
  logoutUser,
};
