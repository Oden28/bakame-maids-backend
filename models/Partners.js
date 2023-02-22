const mongoose = require("mongoose");

const PartnersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      require: true,
      min: 2,
      max: 50,
    },
    age: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    sex: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    ratings: {
      type: Int,
      require: true,
      min: 5,
    },
    description: {
      type: String,
      require: true,
      max: 500,
    },
    avgSalary: {
      type: String,
      require: true,
      max: 200,
    },
    openNegotiations: {
      type: Boolean,
      require: true,
    },
    location: {
      type: String,
      require: true,
      max: 300,
    },
    phoneNumber: {
      type: String,
      require: true,
      max: 300,
    },
    imageId: {
      type: String,
      require: true,
      max: 300,
    },
  },
  { timestamps: true }
);

const Partners = mongoose.model("Partners", PartnersSchema);
module.exports = Partners;
