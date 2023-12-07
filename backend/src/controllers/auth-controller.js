class AuthController {
  async login(req, res, next) {
    res.send("login");
  }

  async logout(req, res, next) {
    res.send("logout");
  }

  async refreshTokens(req, res, next) {
    res.send("Refresh Token");
  }

  async changePassword(req, res, next) {
    res.send("Change Password");
  }
}

const authController = new AuthController();

export default authController;
