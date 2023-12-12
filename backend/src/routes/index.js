import { Router } from "express";
import authController from "../controllers/auth-controller.js";
import jobController from "../controllers/job-controller.js";
import applicationController from "../controllers/application-controller.js";
import authControllers from "../controllers/auth-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";

const router = Router();

/* JOB ROUTES */

router.post("/jobs", jobController.createJob);
router.get("/jobs", jobController.getJobs);
router.get("/jobs/:_id", jobController.getJob);
router.put("/jobs/:_id", jobController.updateJob);
router.delete("/jobs/:_id", jobController.deleteJob);

/* APPLICATION ROUTES */
router.post("/applications/:jobID", applicationController.submitApplication);

// AUTH ROUTES FOR ADMIN LOGIN
router.post("/login", authControllers.login);
router.get("/refresh-tokens", authControllers.refreshTokens);
/* AUTHENTICATED USER ONLY */
router.post("/change-password", authMiddleware, authControllers.changePassword);
router.get("/logout", authMiddleware, authControllers.logout);

export default router;
