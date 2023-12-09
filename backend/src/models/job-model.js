import mongoose from "mongoose";

const Schema = mongoose.Schema;

const applcationSchema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  currentlyEmployed: {
    type: String,
    required: true,
  },
  cvPath: {
    type: String,
    required: true,
  },
  applicationDate: {
    type: Date,
    default: Date.now,
  },
};

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  minExperience: {
    type: String,
    default: "Fresh Graduate",
  },
  requirements: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  level: {
    type: String,
    enum: ["Entry", "Mid", "Senior", "Intern"],
  },
  status: {
    type: String,
    enum: ["Open", "Closed"],
    default: "Open",
  },
  createdAt: { type: Date, default: Date.now },
  numberOfSeats: {
    type: Number,
    default: 1,
  },
  location: {
    type: String,
  },
  applications: [applcationSchema],
});

const JobModel = mongoose.model("Job", jobSchema);

export default JobModel;
