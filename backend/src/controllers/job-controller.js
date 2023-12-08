import JobModel from "../models/job-model.js";
import ErrorHandlerService from "../services/error-handler-service.js";
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
    const skip = parseInt(req.query.skip || 0);
    const limit = parseInt(req.query.limit || 4);
    const q = req.query.q || "";
    const titleRegex = new RegExp(q, "i");
    // for (let i = 0; i < 10000000; i++) {
    //   i++;
    // }
    try {
      const jobs = await JobModel.find({ title: titleRegex }, "-__v")
        .skip(skip)
        .limit(limit);
      const totalJobs = await JobModel.countDocuments({ title: titleRegex });
      return res.status(200).json({
        message: "List of Jobs",
        status: 200,
        jobs,
        totalJobs,
        skip,
        limit,
      });
    } catch (error) {
      next(error);
    }
  }

  async getJob(req, res, next) {
    const { _id } = req.params;
    try {
      const job = await JobModel.findById(_id);
      if (!job) {
        return next(ErrorHandlerService.notFoundError());
      }
      return res
        .status(200)
        .json({ status: 200, message: "Single Job", job: job });
    } catch (error) {
      return next(error);
    }
  }

  async deleteJob(req, res, next) {
    const { _id } = req.params;
    try {
      const deletedJob = await JobModel.findByIdAndDelete(_id);
      if (!deletedJob) {
        return next(ErrorHandlerService.notFoundError());
      }
      return res.status(204).json({
        message: " Job Deleted Successfully !",
        status: 204,
        job: deletedJob,
      });
    } catch (error) {
      return next(error);
    }
  }

  async updateJob(req, res, next) {
    const { _id } = req.params;
    try {
      const updateJob = await JobModel.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      if (!updateJob) {
        return next(ErrorHandlerService.notFoundError());
      }
      return res
        .status(200)
        .json({ message: "Updated Job Successfully !", job: updateJob });
    } catch (error) {
      return next(error);
    }
  }
}

export default new JobController();
