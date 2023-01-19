const express = require("express");

// Create a router, similar to app instance
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

// Create a new user

router.post("/", (req, res) => {
  res.send("Create User");
});

// Access user
router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Sally" }];
// It says anytime you recieve data with param x, execute the function
// Middleware, this is a type of middleware that run's between the req and res
router.param("id", (req, res, next, id) => {
  console.log(id);
  // next() is only executed once the req.user is complete
  req.user = users[id];
  next();
});

module.exports = router;
