const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  theme: {
    type: String,
    required: true,
  },
  no_of_likes: {
    type: Number,
    required: true,
  },
  liked_by: {
    type: [String], //array of strings??
    unique: true,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
