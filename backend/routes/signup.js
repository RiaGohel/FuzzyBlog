var express = require("express");
var router = express.Router();

const User = require("../models/users");

router.post("/", (req, res, next) => {
  const { body } = req;
  const { password } = body;
  let { email } = body;
  let { name } = body;
  let { username } = body;
  if (!name) {
    return res.send({
      success: false,
      message: "Error: Name cannot be blank.",
    });
  }

  if (!username) {
    return res.send({
      success: false,
      message: "Incorrect username",
    });
  }

  if (!email) {
    return res.send({
      success: false,
      message: "Error: Email cannot be blank.",
    });
  }

  if (!password) {
    return res.send({
      success: false,
      message: "Error: Password cannot be blank.",
    });
  }

  email = email.toLowerCase();
  email = email.trim();
  User.find(
    {
      email: email,
    },
    (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: cant check previous user",
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: "Error: Account already exist.",
        });
      }

      const newUser = new User();
      newUser.name = name;
      newUser.username = username;
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server error",
          });
        }
        return res.send({
          success: true,
          message: "Signed up",
        });
      });
    }
  );
});

module.exports = router;
