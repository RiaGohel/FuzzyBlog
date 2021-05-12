var express = require("express");
var router = express.Router();

const TBlog = require("../models/testBlog");

router.get("/", (req, res, next) => {
  res.send("API is working properly");
});

router.post("/testPost", (req, res, next) => {
  let name = req.body.name;
  if (!name) {
    res.send("Name not found");
    return;
  }
  console.log(name);
  res.send("API is working properly!!!!");
});

router.post("/createPost", (req, res, next) => {
  let title = req.body.title;
  let content = req.body.content;
  let date = new Date();
  if (!title || !content) {
    res.send("Title or content not provided");
  }
  let blog = new TBlog({
    title,
    content,
    date,
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
