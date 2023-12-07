import JobModel from "../models/job-model.js";
import { createJobSchema } from "../validators/index.js";

class JobController {
  async createJob(req, res, next) {
    /* VALIDATE REQUEST */
    const { error } = createJobSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    /* CREATE JOB */
    try {
      const job = await JobModel.create(req.body);
      return res.status(201).json(job);
    } catch (error) {
      next(error);
    }
  }

  async getJobs(req, res, next) {
    res.send("get jobs");
  }

  async getJob(req, res, next) {
    res.send("get job");
  }

  async deleteJob(req, res, next) {
    res.send("delete jobs");
  }

  async updateJob(req, res, next) {
    res.send("update job");
  }
}

export default new JobController();
