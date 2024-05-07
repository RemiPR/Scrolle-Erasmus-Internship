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

export const DebugController = { checkCookies, checkAuth };
