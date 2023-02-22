const mongoose = require("mongoose");

const CustomersSchema = new mongoose.Schema(
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
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 5,
    },
    location: {
      type: String,
      require: true,
      min: 5,
    },
    occupation: {
      type: String,
      require: true,
      min: 5,
    },
    phoneNumber: {
      type: String,
      require: true,
      max: 300,
    },
  },
  { timestamps: true }
);

const Customers = mongoose.model("Customers", CustomersSchema);
module.exports = Customers;
