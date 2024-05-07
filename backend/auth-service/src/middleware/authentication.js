import jwt from "jsonwebtoken";

// Middleware to verify JWT and extract user info
export const authenticateToken = (req, res, next) => {
  const token = req.cookies.authToken; // Retrieve the JWT from a cookie
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the JWT
    req.user = decoded; // Attach user info to the request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};
