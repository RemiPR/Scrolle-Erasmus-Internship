export const checkUserType = (allowedType) => {
  return (request, response, next) => {
    // Access the user's roles from the request, which were attached in the authenticateToken middleware
    const userType = request.user.type;

    // Check if the user has the allowed type
    if (userType != allowedType) {
      return response.status(403).json({
        message:
          "Forbidden: You do not have permission to access this resource",
      });
    }
    next(); // User has the required role, proceed to the next middleware or route handler
  };
};
