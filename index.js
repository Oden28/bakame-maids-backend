const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
require("dotenv").config();
// create an express application
const app = express();

// configure express to use json and urlencoded middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");

// Connection to database
// Connection string
const url = process.env.MONGO_CONNECTION_STRINGS;

// Connection params
const connectionParams = {
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

// Render static files
app.use(express.static("public"));

// To render views
app.set("view engine", "ejs");
//app.use(logger);

// Request and responses
// app.get("/", logger, (req, res) => {
//   console.log("Here");
//   // Send down data to user, when someone makes a get request
//   //res.status(500).json({ message: "Error" });
//   res.render("index", { text: "Hello" });
//   //res.download("index.js");
// });

//Routers
const userRouter = require("./routes/users");
const customerRouter = require("./routes/customer");
app.use("/users", userRouter);

app.use("/customer", customerRouter);

// middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// Start server
app.listen(3001, () => console.log("listing on port 3001"));
