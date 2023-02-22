const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema(
  {
    customerId: {
      type: String,
      require: true,
      max: 500,
    },
    partnerId: {
      type: String,
      require: true,
      max: 500,
    },
    review: {
      type: String,
      require: true,
      max: 2000,
    },
  },
  { timestamps: true }
);

const Reviews = mongoose.model("Reviews", ReviewsSchema);
module.exports = Reviews;
