import tokenService from "../services/token-service.js";
import AdminModel from "../models/admin-model.js";
import { loginValidationSchema } from "../validators/index.js";
import ErrorHandlerService from "../services/error-handler-service.js";
import bcrypt from "bcrypt";

class AuthController {
  async login(req, res, next) {
    const { email, password } = req.body;
    /* REQUEST VALIDATION */
    const { error } = loginValidationSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    /* CHECK ADMIN EXIST OR NOT */
    let admin;
    try {
      admin = await AdminModel.findOne({ email });
      if (!admin) {
        return next(
          ErrorHandlerService.wrongCredentials("Inavalid admin email id.")
        );
      }
    } catch (error) {
      next(error);
    }

    /* COMPARE PASSWORD WIHT STORED HASHED PASSWORD */
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return next(ErrorHandlerService.wrongCredentials("Invalid password."));
    }

    /* GENERAT TOKENS  */
    const { accessToken, refreshToken } = await tokenService.genrateTokens({
      _id: admin._id,
      email: admin.email,
    });

    /* SET COOKIES  */
    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    return res.status(200).json({ isAuth: true, admin: admin });
  }

  /* AUTHENTICATED USER ONLY */
  async logout(req, res, next) {
    // REMOVIE COOKIES
    res.clearCookie("refreshToken");
    res.clearCookie("accessToken");

    res.json({
      admin: null,
      isAuth: false,
    });
  }

  async refreshTokens(req, res, next) {
    // GET REFRESH TOKEN FROM COOKIES
    const { refreshToken: refreshTokenFromCookie } = req.cookies;
    // VERIFY REFRESH TOKEN
    let admin;
    try {
      admin = await tokenService.verifyRefreshToken(refreshTokenFromCookie);
    } catch (error) {
      return next(ErrorHandlerService.unAuthorized());
    }

    // GENRATE NEW REFRESH TOKEN
    const { refreshToken, accessToken } = await tokenService.genrateTokens({
      _id: admin._id,
      email: admin.email,
    });

    // SET NEW COOKIES
    res.cookie("accessToken", accessToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
    });
    res.cookie("refreshToken", refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
    });
    // retrun response
    return res.status(200).json({
      admin,
      isAuth: true,
    });
  }

  /* AUTHENTICATED USER ONLY */
  async changePassword(req, res, next) {
    console.log("Change Password");
    const { currentPassword, newPassword } = req.body;
    /* REQUEST VALIDATION */
    if (!currentPassword || !newPassword) {
      return next(ErrorHandlerService.validationError());
    }

    try {
      /* CHECK USER EXIST OR NOT ? */
      const admin = await AdminModel.findOne({ _id: req.userData._id });
      if (!admin) {
        return next(ErrorHandlerService.notFound());
      }
      /* CONFIRM CURRENT PASSWORD */
      const isMatch = await bcrypt.compare(currentPassword, admin.password);
      if (!isMatch) {
        return next(
          ErrorHandlerService.wrongCredentials("Current password is wrong!")
        );
      }
      /* HASHED NEW PASSWORD BEFORE SAVED INTO DB */
      const hashedPassowrd = await bcrypt.hash(newPassword, 10);
      // UPDAT PASSWORD
      await AdminModel.findByIdAndUpdate(admin._id, {
        password: hashedPassowrd,
      });

      return res.status(200).json({ msg: "Password Changed Successfully !" });
    } catch (error) {
      next(error);
    }
  }
}

const authControllers = new AuthController();

export default authControllers;
