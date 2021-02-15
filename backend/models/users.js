const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email_id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  image: {
    type: Image,
  },
  npb_published: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
