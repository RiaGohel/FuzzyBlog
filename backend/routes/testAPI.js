var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

router.post("/testPost", function (req, res, next) {
  let name = req.body.name;
  if (!name) {
    res.send("Name not found");
    return;
  }
  console.log(name);
  res.send("API is working properly!!!!");
});
module.exports = router;
