import jwt from "jsonwebtoken";
import { authOrgUtils } from "../utils/authOrgUtils.js";
import dotenv from "dotenv";

dotenv.config();

// Middleware to verify JWT and extract user info
// It also provides a new access token if current one is expired and refresh token is valid
export const authenticateOrgToken = async (request, response, next) => {
  const accessToken = request.cookies.authToken; // Retrieve the JWT from a cookie
  const refreshToken = request.cookies.authRefresh;

  try {
    if (!accessToken) {
      if (!refreshToken) {
        return response
          .status(401)
          .send({ message: "Unautorized: No token provided" });
      }
      const newAccessToken = await authOrgUtils.refreshAccessToken(
        refreshToken
      );

      response.cookie("authToken", newAccessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: process.env.COOKIE_AGE_ACCESS,
      });

      const decoded = jwt.verify(newAccessToken, process.env.JWT_ACCESS_SECRET);
      request.user = decoded; // Attach user info to the request

      next(); // Proceed to the next middleware or route handler
    } else {
      const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
      request.user = decoded;

      next();
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      try {
        if (!refreshToken) {
          return response
            .status(401)
            .send({ message: "Unauthorized: No token provided" });
        }
        const newAccessToken = authOrgUtils.refreshAccessToken(refreshToken);

        response.cookie("authToken", newAccessToken, {
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          maxAge: process.env.COOKIE_AGE_ACCESS,
        });

        const decoded = jwt.verify(
          newAccessToken,
          process.env.JWT_ACCESS_SECRET
        );
        request.user = decoded;

        next();
      } catch (refreshError) {
        return response.status(401).json({ message: "Unauthorized" });
      }
    } else {
      console.error("JWT verification error:", error);
      return response.status(401).json({ message: "Unauthorized" });
    }
  }
};
