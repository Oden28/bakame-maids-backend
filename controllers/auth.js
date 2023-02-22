const express = require("express");
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Customers = require("../models/Customers");
const router = express.Router();
// Register User

router.post("/", async (req, res) => {
  // const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, location, phoneNumber } =
      req.body;

    // to encrypt our password, so that password is not exposed
    const salt = await bcrpyt.genSalt();
    const passwordHash = await bcrpyt.hash(password, salt);

    const newCustomer = new Customers({
      firstName,
      lastName,
      email,
      password: passwordHash,
      location,
      phoneNumber,
    });

    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
// module.exports = register;
