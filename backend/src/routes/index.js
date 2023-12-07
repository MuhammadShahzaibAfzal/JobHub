import { Router } from "express";
import authController from "../controllers/auth-controller";

const router = Router();

/* AUTH ROUTES */
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/refresh-tokens", authController.refreshTokens);
router.post("/change-password", authController.changePassword);

export default router;
