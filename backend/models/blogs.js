const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
    default: "light",
  },
  no_of_likes: {
    type: Number,
    required: true,
    default: 0,
  },
  liked_by: {
    type: Array, //array of strings??
    //unique: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date(),
  },
  created_by: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
