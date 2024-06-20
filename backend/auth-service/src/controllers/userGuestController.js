import { UserGuest } from "../schema/userGuestSchema.js";
import { validationUtils } from "../utils/validationUtils.js";
import { authGuestUtils } from "../utils/authGuestUtils.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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

const refreshToken = async (request, response) => {
  try {
    const refreshToken = request.cookies.authRefresh;
    if (!refreshToken)
      return response.status(401).send({ message: "Unauthorized" });

    const newAccessToken = await authGuestUtils.refreshAccessToken(
      refreshToken
    );

    response
      .status(200)
      .cookie("authToken", newAccessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
        maxAge: process.env.COOKIE_AGE_ACCESS,
      })
      .send({ message: "Success" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

const logout = async (request, response) => {
  try {
    response.clearCookie("authToken"); // if using HttpOnly cookies to store JWT
    return response.status(200).send("Logged out");
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
};

const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    // Checks if credentials are valid
    const userGuest = await UserGuest.findOne({ email });
    if (!userGuest || !(await userGuest.isValidPassword(password))) {
      return response.status(401).json({ message: "Invalid Credentials" });
    }

    authGuestUtils.login(userGuest, response);
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
};

const register = async (request, response) => {
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

    authGuestUtils.login(user, response);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// Mainly used when user wants to participate in a free course he has to fill these in
const addPersonalInfo = async (request, response) => {
  try {
    const { name, surname, country, phoneNumber, birth, education, reason } =
      request.body;
    if (
      !request.user.id ||
      !name ||
      !surname ||
      !country ||
      !phoneNumber ||
      !birth ||
      !education ||
      !reason
    ) {
      return response.status(400).send({
        message: "Missing info",
      });
    }

    await UserGuest.findByIdAndUpdate(
      request.user.id,
      {
        $set: {
          name: name,
          surname: surname,
          "personalInfo.isFilled": true,
          "personalInfo.birth": birth,
          "personalInfo.country": country,
          "personalInfo.phoneNumber": phoneNumber,
          "personalInfo.education": education,
          "personalInfo.reason": reason,
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
  register,
  login,
  logout,
  addPersonalInfo,
  refreshToken,
};
