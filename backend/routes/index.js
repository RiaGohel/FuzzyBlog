var express = require("express");
var router = express.Router();
var auth = require("../auth/auth");
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/protected", auth, (req, res, next) => {
  let user = req.user;
  console.log(user);
  res.render("index", { title: "Express" });
});

module.exports = router;
