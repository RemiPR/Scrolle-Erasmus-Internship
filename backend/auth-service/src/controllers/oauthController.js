import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import axios from "axios";
import { OAuth2Client } from "google-auth-library";
import { UserGuest } from "../schema/userGuestSchema.js";

dotenv.config();

const JWT_EXPIRY = process.env.JWT_EXPIRY;

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

// Authentication after succesfull login
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

    // User info from the google account
    const payload = ticket.getPayload(); // Extract user information
    const googleId = payload["sub"];
    const email = payload["email"];
    const name = payload["given_name"];
    const surname = payload["family_name"];

    // check if such user with such email already exists
    const userGuest = await UserGuest.findOne({ email: email });
    if (userGuest) {
      // user with email exists, checks if user already has googleId
      if (userGuest.socialIds.google != googleId) {
        // if user doesn't have googleId, he gets updated with one before logging in
        await UserGuest.findByIdAndUpdate(
          userGuest.id,
          { $set: { "socialIds.google": googleId } },
          { runValidators: true }
        ).catch((error) => {
          response.status(500).send({ message: error.message });
        });
      }
      loginUser(userGuest.id, userGuest.email, userGuest.name);
    } else {
      // if user doesn't exist at all, new account is created
      const newGuestUser = new UserGuest({
        name: name,
        surname: surname,
        email: email,
        socialIds: {
          google: googleId,
        },
      });
      const user = await UserGuest.create(newGuestUser).catch((error) => {
        response.status(500).send({ message: error.message });
      });
      loginUser(user.id, user.email, user.name);
    }

    // Redirect user after successfull log in
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

async function loginUser(userId, email, name) {
  console.log("Logged in with payload:");
  console.log(userId, email, name);

  // TODO: uncomment this:
  // Generate a JWT with the user information
  /*
  const token = jwt.sign(
    { userId, email, name },
    process.env.JWT_SECRET, // JWT secret key
    { expiresIn: JWT_EXPIRY } // Token expiration
  );

  return response
    .status(200)
    .cookie("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      maxAge: COOKIE_AGE,
    })
    .redirect("/");*/
}

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
