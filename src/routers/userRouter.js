const express = require("express");
const router = new express.Router();
const Users = require("../models/userModel");
const auth = require("../middleware/auth");

//create user
router.post("/users/signup", async (req, res) => {
  const user = new Users(req.body);
  try {
    await user.save();
    const token = await user.generateToken();
    res.status(201).send({ user, token });
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
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

//get user profile
router.get("/users/profile", auth, async (req, res) => {
  res.send(req.user);
});

module.exports = router;
