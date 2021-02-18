var express = require("express");
var router = express.Router();

const Blog = require("../models/blogs");
const auth = require("../auth/auth.js");

router.post("/createBlog", auth, function (req, res, next) {
  let title = req.body.title;
  let content = req.body.content;
  let user = req.user;
  let username = user.username;
  console.log(username);
  if (!title || !content) {
    res.send("Title or content not provided");
  }
  let blog = new Blog({
    title,
    content,
    created_by: username,
  });
  blog
    .save()
    .then((status) => {
      res.send("Blog saved");
      console.log(status);
    })
    .catch((err) => {
      res.send("Not saved");
      console.log(err);
    });
});

module.exports = router;
