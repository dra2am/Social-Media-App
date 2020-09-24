const mongoose = require("mongoose");

mongoose.connect('"mongodb://127.0.0.1:27017/social-media-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//in response to a deprecation warning
mongoose.set("useCreateIndex", true);
