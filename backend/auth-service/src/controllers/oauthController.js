import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";

dotenv.config();

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_CALLBACK_URL
);

const init = async (request, response) => {
  try {
    const url = client.generateAuthUrl({
      scope: ["profile", "email"], // Scope for user profile and email
    });
    //console.log("WORKS INIT");
    response.redirect(url); // Redirect user to Google OAuth
  } catch (error) {
    response.status(500).send(error);
  }
};

const authenticate = async (request, response) => {
  const { code } = request.query; // Get the OAuth authorization code

  try {
    // Exchange authorization code for tokens
    const { tokens } = await client.getToken(code);

    // Await to ensure `ticket` resolves correctly
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID, // Verify audience
    });

    // Ensure `ticket` is valid before accessing its payload
    if (!ticket) {
      throw new Error("Invalid ticket");
    }

    const payload = ticket.getPayload(); // Extract user information
    console.log("payload:");
    console.log(payload);
    const userId = payload["sub"]; // Google user ID
    const email = payload["email"];
    const name = payload["name"];

    // Generate a JWT with the user information
    const token = jwt.sign(
      { userId, email, name },
      process.env.JWT_SECRET, // JWT secret key
      { expiresIn: "1h" } // Token expiration
    );

    // Set the JWT in a secure HTTP-only cookie
    response.cookie("authToken", token, { httpOnly: true, secure: true });
    // Redirect to the home page or a specific location
    response.redirect("/");
  } catch (error) {
    console.error("Google OAuth error:", error);
    response.status(500).send("Authentication failed");
  }
};
export const OauthController = { init, authenticate };
