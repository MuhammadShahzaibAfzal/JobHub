import ErrorHandlerService from "../services/error-handler-service.js";
import tokenService from "../services/token-service.js";

const authMiddleware = async (req, res, next) => {
  console.log("called");
  const { accessToken } = req.cookies;
  console.log(accessToken);
  // console.log("AUTH MIDDLEWARE RUN");
  try {
    if (!accessToken) {
      throw new Error();
    }
    /* VERIFY ACCESS TOKEN */
    const userData = await tokenService.verifyAccessToken(accessToken);
    console.log(userData);
    // console.log(userData);
    if (!userData) {
      throw new Error();
    }

    req.userData = userData;
    next();
  } catch (error) {
    next(ErrorHandlerService.unAuthorized());
  }
};

export default authMiddleware;
