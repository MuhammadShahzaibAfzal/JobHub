import mongoose from "mongoose";

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  currentlyEmployed: {
    type: Boolean,
    required: true,
  },
  cvPath: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "reviewed", "accepted", "rejected"],
    default: "pending",
  },
  applicationDate: { type: Date, default: Date.now },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
