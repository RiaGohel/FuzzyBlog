const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TBlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = TBlog = mongoose.model("TBlog", TBlogSchema);
