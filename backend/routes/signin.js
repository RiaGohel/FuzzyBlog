var express = require("express");
var router = express.Router();

const User = require("../models/users");
const UserSession = require("../models/usersession");

router.post("/", (req, res, next) => {
  const { body } = req;
  const { password } = body;
  let { username } = body;
  if (!username) {
    return res.send({
      success: false,
      message: "Error: Username cannot be blank.",
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "Error: Password cannot be blank.",
    });
  }

  User.find({ username }, (err, users) => {
    if (err) {
      console.log("err 2:", err);
      return res.send({
        success: false,
        message: "Error: server error",
      });
    }
    if (users.length != 1) {
      return res.send({
        success: false,
        message: "Error: User not found",
      });
    }
    const user = users[0];
    if (!user.validPassword(password)) {
      return res.send({
        success: false,
        message: "Error: Invalid password",
      });
    }
    // Otherwise correct user
    const userSession = new UserSession();
    userSession.userId = user._id;
    userSession.save((err, doc) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: "Error: server error",
        });
      }
      return res.send({
        success: true,
        message: "Valid sign in",
        token: doc._id,
      });
    });
  });
});

module.exports = router;
