const express = require("express");
const router = new express.Router();
const User = require('../models/User')
// const auth = require("../middleware/auth");

//create user
router.post("/users/signup", async (req, res) =>{

  try {
    //create a new user based on req.body
    const user = new User(req.body);

    if (await user.addUser() === true)
    {
      res.status(201).send("User created");
      console.log("added user -- success")
    }

    res.status(200).send("This user exists")

  } catch (e) {
    console.log("error -- an error occurred")
    res.status(400).send(e);
  }
});

//login user
router.post("/users/login", async (req, res) => {
  try {
    //find user
    const user = new User(req.body)
     
    if (await user.findUser() === true)
    {
      res.send({auth: true})
    }
    res.send({auth: false})
  } catch (e) {
    res.status(400).send({auth: false});
  }
});

// router.post("/users/signup", async (req, res) => {
//   //create a user based on req.body
//   const user = new Users(req.body);
//   try {
//     //check if user is valid according to schema, make+add token
//     await user.save();
//     const token = await user.generateToken();
//     // res.status(201).send({ user, token });
//     res.status(201).send({ token });
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

//login user
// router.post("/users/login", async (req, res) => {
//   try {
//     //find user
//     const user = await Users.findByCredentials(
//       req.body.email,
//       req.body.password
//     );
//     //make token and add to token arr
//     const token = await user.generateToken();
//     // res.send({ user, token });
//     res.send({ token });
//   } catch (e) {
//     res.status(400).send();
//   }
// });

//get user profile
// router.get("/users/profile", auth, async (req, res) => {
//   //after auth token, returns user profile
//   res.send(req.user);
// });

module.exports = router;
