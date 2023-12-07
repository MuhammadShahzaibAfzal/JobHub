import { Router } from "express";
import authController from "../controllers/auth-controller.js";
import jobController from "../controllers/job-controller.js";
import applicationController from "../controllers/application-controller.js";

const router = Router();

/* AUTH ROUTES */
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/refresh-tokens", authController.refreshTokens);
router.post("/change-password", authController.changePassword);

/* JOB ROUTES */

router.post("/jobs", jobController.createJob);
router.get("/jobs", jobController.getJobs);
router.get("/jobs/:_id", jobController.getJob);
router.put("/jobs/:_id", jobController.updateJob);
router.delete("/jobs/:_id", jobController.deleteJob);

/* APPLICATION ROUTES */
router.post("/applications/:jobID", applicationController.submitApplication);

export default router;
