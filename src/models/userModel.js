const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please enter a valid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//hash passwords upon creation:
userSchema.pre("save", async function (next) {
  const user = this;

  //if user.password was modified ever, hash the password
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

//create tokens
//methods for instances (user.generate...)
userSchema.methods.generateToken = async function () {
  const user = this;
  //generate token according to ID
  const token = jwt.sign({ _id: user._id.toString() }, "Cku/s&AS?8e%rb398S");
  //add token to token array
  user.tokens = user.tokens.concat({ token: token });
  //save changes made to user data
  await user.save();

  return token;
};

//find user by credentials:
//statics will be used directly on model (User.findBy...)
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await Users.findOne({ email });

  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};

//set up the model in db
const Users = mongoose.model("users", userSchema);

//instance methods, static functions are for models
module.exports = Users;
