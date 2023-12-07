import JobModel from "../models/job-model.js";
import { ROOT_PATH } from "../server.js";
import ErrorHandlerService from "../services/error-handler-service.js";
import handleMultipartData from "../services/multer-service.js";
import { submitApplicationSchema } from "../validators/index.js";
import fs from "fs";
import path from "path";

class ApplicationController {
  async submitApplication(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      const { jobID } = req.params;
      console.log(jobID);
      if (err) {
        return next(err);
      }
      const filePath = req?.file?.path;
      /* VALIDATE REQUEST */
      const { error } = submitApplicationSchema.validate(req.body);
      if (error) {
        /* IF REQUEST VALIDATION FAILED THEN DELETE UPLOADED CV */
        fs.unlink(path.join(ROOT_PATH, filePath), (err) => {
          if (err) {
            return next();
          }
        });
        return next(error);
      }

      try {
        const job = await JobModel.findById(jobID);
        if (!job) {
          return next(ErrorHandlerService.notFoundError("Job not found !"));
        }
        job.applications.push({ ...req.body, cvPath: filePath });
        await job.save();
        return res.status(201).json({
          message: "Application submitted successfully !",
          status: 201,
        });
      } catch (error) {
        next(error);
      }
    });
  }
}

const applicationController = new ApplicationController();

export default applicationController;
