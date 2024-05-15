import dotenv from "dotenv";
import axios from "axios";
import { authUtils } from "../utils/authUtils.js";
import { OAuth2Client } from "google-auth-library";
import { UserGuest } from "../schema/userGuestSchema.js";

dotenv.config();

const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN;

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
    const userGoogleId = payload["sub"];
    const userEmail = payload["email"];
    const userName = payload["given_name"];
    const userSurname = payload["family_name"];

    // check if such user with such email already exists
    const userGuest = await UserGuest.findOne({ email: userEmail });
    if (userGuest) {
      // user with email exists, checks if user already has googleId
      if (userGuest.socialIds.google != userGoogleId) {
        // if user doesn't have googleId, he gets updated with one before logging in
        await UserGuest.findByIdAndUpdate(
          userGuest.id,
          { $set: { "socialIds.google": userGoogleId } },
          { runValidators: true }
        ).catch((error) => {
          response.status(500).send({ message: error.message });
        });
      }
      authUtils.oauthLoginGuestUser(
        userGuest.id,
        userGuest.email,
        userGuest.name,
        userGuest.userType,
        response
      );
    } else {
      // if user doesn't exist at all, new account is created
      const newGuestUser = new UserGuest({
        name: userName,
        surname: userSurname,
        email: userEmail,
        socialIds: {
          google: userGoogleId,
        },
      });
      const user = await UserGuest.create(newGuestUser).catch((error) => {
        response.status(500).send({ message: error.message });
      });
      authUtils.oauthLoginGuestUser(
        user.id,
        user.email,
        user.name,
        user.userType,
        response
      );
    }
  } catch (error) {
    console.error("Google OAuth error:", error);
    response
      .status(500)
      .send("Authentication failed")
      .redirect(`${FRONTEND_DOMAIN}`);
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
const authenticateFacebook = async (request, response) => {
  try {
    const { code } = request.query;
    const accessToken = await getAccessToken(code);
    const userFacebookProfile = await getUserProfile(accessToken);

    let fullnameSplit = userFacebookProfile.name.split(" ");
    const userName = fullnameSplit[0];
    const userSurname = fullnameSplit[1];

    const userGuest = await UserGuest.findOne({
      email: userFacebookProfile.email,
    });
    if (userGuest) {
      // user with email exists, checks if user already has facebookId
      if (userGuest.socialIds.facebook != userFacebookProfile.id) {
        // if user doesn't have facebookId, he gets updated with one before logging in
        await UserGuest.findByIdAndUpdate(
          userGuest.id,
          { $set: { "socialIds.facebook": userFacebookProfile.id } },
          { runValidators: true }
        ).catch((error) => {
          response.status(500).send({ message: error.message });
        });
      }
      authUtils.oauthLoginGuestUser(
        userGuest.id,
        userGuest.email,
        userGuest.name,
        userGuest.userType,
        response
      );
    } else {
      // if user doesn't exist at all, new account is created
      const newGuestUser = new UserGuest({
        name: userName,
        surname: userSurname,
        email: userFacebookProfile.email,
        socialIds: {
          facebook: userFacebookProfile.id,
        },
      });
      const user = await UserGuest.create(newGuestUser).catch((error) => {
        response.status(500).send({ message: error.message });
      });
      authUtils.oauthLoginGuestUser(
        user.id,
        userFacebookProfile.email,
        userName,
        user.userType,
        response
      );
    }
  } catch (error) {
    response
      .status(500)
      .send("Authentication failed")
      .redirect(`${FRONTEND_DOMAIN}`);
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
