import { User } from "../schema/userSchema.js";

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
    const newUser = new User({
      name: request.body.name,
      surname: request.body.surname,
      email: request.body.email,
      password: request.body.password,
    });

    // Save the new user to the database
    const user = await User.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: error.message });
  }
};

export const UserController = { createUser };
