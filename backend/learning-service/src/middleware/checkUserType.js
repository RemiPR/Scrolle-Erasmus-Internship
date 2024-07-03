import { jwtUtils } from "../utils/jwtUtils.js";

export const checkUserType = (allowedType) => {
  return async (request, response, next) => {
    // Access the user's roles from the request, which were attached in the authenticateToken middleware
    const token = request.cookies.authToken;
    if (!token) {
      return response.status(401).json({ message: "Unauthorized" });
    }

    const payload = await jwtUtils.getPayload(token);
    if (!payload) {
      return response.status(401).json({ message: "Unauthorized" });
    }

    if (payload.type != allowedType) {
      return response.status(403).json({
        message:
          "Forbidden: You do not have permission to access this resource",
      });
    }
    request.user = payload;
    next(); // User has the required role, proceed to the next middleware or route handler
  };
};
