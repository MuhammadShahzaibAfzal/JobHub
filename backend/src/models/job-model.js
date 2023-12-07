import mongoose from "mongoose";

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  applications: [
    {
      type: Schema.Types.ObjectId,
      ref: "Application",
    },
  ],
});

const JobModel = mongoose.model("Job", jobSchema);

export default JobModel;
