import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import axios from "axios";
import { OAuth2Client } from "google-auth-library";

dotenv.config();

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_CALLBACK_URL
);

// To initiate google login
const initGoogle = async (request, response) => {
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

// Further authentication after succesfull login
// TODO: Add userGuest to database and perform a check if he already exists.
const authenticateGoogle = async (request, response) => {
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

// To initiate facebook login
const initFacebook = async (request, response) => {
  try {
    const authUrl = `https://www.facebook.com/v15.0/dialog/oauth?client_id=${process.env.FACEBOOK_CLIENT_ID}&redirect_uri=${process.env.FACEBOOK_CALLBACK_URL}&scope=email,public_profile`;
    response.redirect(authUrl);
  } catch (error) {
    response.status(500).send(error);
  }
};

// Further authentication after succesfull login
// TODO: Add userGuest to database and perform a check if he already exists.
const authenticateFacebook = async (request, response) => {
  try {
    const { code } = request.query;
    const accessToken = await getAccessToken(code);
    const userProfile = await getUserProfile(accessToken);
    response.status(200).send(userProfile);
  } catch (error) {
    response.status(500).send("Authentication failed");
  }
};

// ADDITIONAL FUNCTIONS -----------------------------------------------

async function getAccessToken(code) {
  try {
    const response = await axios.get(
      "https://graph.facebook.com/v15.0/oauth/access_token",
      {
        params: {
          client_id: process.env.FACEBOOK_CLIENT_ID,
          client_secret: process.env.FACEBOOK_CLIENT_SECRET,
          redirect_uri: process.env.FACEBOOK_CALLBACK_URL,
          code: code,
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    //console.error("Error fetching access token:", error);
    throw error;
  }
}

async function getUserProfile(accessToken) {
  try {
    const response = await axios.get("https://graph.facebook.com/me", {
      params: {
        fields: "id,name,email",
        access_token: accessToken,
      },
    });
    return response.data;
  } catch (error) {
    //console.error("Error fetching user profile:", error);
    throw error;
  }
}

export const OauthController = {
  initGoogle,
  initFacebook,
  authenticateGoogle,
  authenticateFacebook,
};
