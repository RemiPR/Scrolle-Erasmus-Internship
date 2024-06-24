import { UserTeacher } from "../schema/userTeacherSchema.js";
import { validationUtils } from "../utils/validationUtils.js";
import { authOrgUtils } from "../utils/authOrgUtils.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const register = async (request, response) => {
  try {
    const { name, surname, email, password, faculty } = request.body;

    // Validation if any fields are missing
    if (!name || !surname || !password || !email || !faculty) {
      return response.status(400).send({
        message: "Missing required fields",
      });
    }

    // Check if email is valid
    if (!(await validationUtils.isValidEmail(email))) {
      return response.status(400).json({ message: "Email is not valid" });
    }

    // Validation if email already exists
    const existingUser = await UserTeacher.findOne({ email: email }).exec();
    if (existingUser) {
      return response.status(409).json({ message: "Email already exists" });
    }

    // check if password is strong
    if (!(await validationUtils.isStrongPassword(password))) {
      return response.status(400).json({ message: "Password is too weak" });
    }

    // Creates newOrgUser object
    const newOrgUser = new UserTeacher({
      name: name,
      surname: surname,
      email: email,
      password: password,
      faculty: faculty,
    });

    // Save the new user to the database
    // Hashing done in the UserTeacherSchema.js
    const user = await UserTeacher.create(newOrgUser);

    authOrgUtils.loginUser(user, response);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    // Checks if credentials are valid
    const user = await UserTeacher.findOne({ email });
    if (!userGuest || !(await user.isValidPassword(password))) {
      return response.status(401).json({ message: "Invalid Credentials" });
    }

    authGuestUtils.loginUser(user, response);
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
};

export const UserTeacherController = { register, login };
