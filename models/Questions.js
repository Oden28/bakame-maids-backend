const mongoose = require("mongoose");

const QuestionsSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      require: true,
      max: 500,
    },
  },
  { timestamps: true }
);

const Questions = mongoose.model("Questions", QuestionsSchema);
module.exports = Questions;
