const mongoose = require("mongoose");

const JobDescriptionSchema = new mongoose.Schema(
  {
    partnerId: {
      type: String,
      require: true,
      max: 500,
    },
    questionId: {
      type: String,
      require: true,
      max: 500,
    },
  },
  { timestamps: true }
);

const JobDescription = mongoose.model("JobDescription", JobDescriptionSchema);
module.exports = JobDescription;
