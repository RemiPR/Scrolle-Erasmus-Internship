import jwt from "jsonwebtoken";

const checkCookies = async (request, response) => {
  try {
    //console.log(request.cookies);
    response.send(request.cookies);
  } catch (error) {
    response.send(error);
  }
};

const checkAuth = async (request, response) => {
  try {
    response.send("Authorized");
  } catch (error) {
    response.send(error);
  }
};

const checkJwtPayload = async (request, response) => {
  try {
    response.send(jwt.decode(request.cookies.authToken));
  } catch (error) {
    response.send(error);
  }
};

const adminOnly = async (request, response) => {
  try {
    response.send("Welcome admin");
  } catch (error) {
    response.send(error);
  }
};

export const DebugController = {
  checkCookies,
  checkAuth,
  adminOnly,
  checkJwtPayload,
};
