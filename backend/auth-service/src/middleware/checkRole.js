export const checkRole = (allowedRoles) => {
  return (request, response, next) => {
    // Access the user's roles from the request, which should be attached in the previous middleware
    const userRoles = request.user.roles;
    // Check if the user has any of the allowed roles
    const hasRole = userRoles.some((role) => allowedRoles.includes(role));

    if (!hasRole) {
      return response.status(403).json({
        message:
          "Forbidden: You do not have permission to access this resource",
      });
    }

    next(); // User has the required role, proceed to the next middleware or route handler
  };
};
