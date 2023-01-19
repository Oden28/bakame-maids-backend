const express = require("express");
//const { modelName } = require("../model/customer")
const Customer = require("../model/customer");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    const newCustomer = new Customer({
      customerFirstName: req.body.customerFirstName,
      customerLastName: req.body.customerLastName,
    });

    // Post to db
    await Customer.create(newCustomer);

    res.send("Customer Added");
  } catch (err) {
    console.log("Error: ", err);
  }
});

router.get("/customerList", async (req, res) => {
  await Customer.find({}, (err, result) => {
    console.log("customer from db: ", result);
    res.send(result);
  });
});

module.exports = router;
