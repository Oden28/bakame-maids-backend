const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Joi = require("joi");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const { fileURLToPath } = require("url");
const { register } = require("./controllers/auth.js");

// Configurations (middleware)
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// File storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Routes with files
// app.post("/register", register);
const registerRouter = require("./controllers/auth");

app.use("/register", registerRouter);

// Set-up mongoDB
const mongoose = require("mongoose");
const url = process.env.MONGO_CONNECTION_STRINGS;

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

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listing on port ${port}`));
// // create an express application
// const app = express();

// // configure express to use json and urlencoded middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cors());
// const mongoose = require("mongoose");

// // Connection to database
// // Connection string
// const url = process.env.MONGO_CONNECTION_STRINGS;

// // Connection params
// const connectionParams = {
//   useNewUrlParser: true,
//   //useCreateIndex: true,
//   useUnifiedTopology: true,
// };

// mongoose
//   .connect(url, connectionParams)
//   .then(() => {
//     console.log("Connected to the database");
//   })
//   .catch((err) => {
//     console.error(`Error connecting to the database. n${err}`);
//   });

// // Render static files, middleware
// app.use(express.static("public"));

// // To render views
// app.set("view engine", "ejs");
// //app.use(logger);

// // Request and responses
// // app.get("/", logger, (req, res) => {
// //   console.log("Here");
// //   // Send down data to user, when someone makes a get request
// //   //res.status(500).json({ message: "Error" });
// //   res.render("index", { text: "Hello" });
// //   //res.download("index.js");
// // });

// //Routers
// const userRouter = require("./routes/users");
// const customerRouter = require("./routes/customer");
// app.use("/users", userRouter);

// app.use("/customer", customerRouter);

// // middleware function
// // middleware executes directly after the client hits the endpoint, before anything else
// // takes place
// function logger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }

// //input validation
// // const schema = {
// //   name: Joi.string().min(3).required
// // }
// // const result = Joi.validate(req.body, schema)
// // if(result.error)

// // 404 if item doesn't exist on a search from db
// // 400 if validation reutrns an error, bad request

// const port = process.env.PORT || 3001;
// // Start server
// app.listen(port, () => console.log(`listing on port ${port}`));
