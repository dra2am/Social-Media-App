const express = require("express");
const router = new express.Router();
const Users = require("../models/userModel");
const auth = require("../middleware/auth");

//create user
router.post("/users/signup", async (req, res) => {
  //create a user based on req.body
  const user = new Users(req.body);
  try {
    //check if user is valid according to schema, make+add token
    await user.save();
    const token = await user.generateToken();
    // res.status(201).send({ user, token });
    res.status(201).send({ token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//login user
router.post("/users/login", async (req, res) => {
  try {
    //find user
    const user = await Users.findByCredentials(
      req.body.email,
      req.body.password
    );
    //make token and add to token arr
    const token = await user.generateToken();
    // res.send({ user, token });
    res.send({ token });
  } catch (e) {
    res.status(400).send();
  }
});

//get user profile
router.get("/users/profile", auth, async (req, res) => {
  //after auth token, returns user profile
  res.send(req.user);
});

module.exports = router;
