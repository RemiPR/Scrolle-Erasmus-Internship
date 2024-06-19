const authenticateToken = async (request, response) => {
  response.status(200).send({ message: "Token is valid" });
};

export const ValidationController = {
  authenticateToken,
};
