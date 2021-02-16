var express = require("express");
var router = express.Router();
const UserSession = require("../models/usersession");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/signout", (req, res, next) => {
  const { query } = req;
  const { token } = query;

  UserSession.find(
    {
      _id: token,
    },
    (err, usersessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: cant check previous user",
        });
      }
      if (usersessions.length != 1) {
        return res.send({
          success: false,
          message: "You're not in anyway first",
        });
      }
      let userSession = usersessions[0];
      if (userSession.isDeleted == true) {
        return res.send({
          success: false,
          message: "You're not in anyway",
        });
      }
      UserSession.findOneAndUpdate(
        {
          _id: token,
          isDeleted: false,
        },
        {
          $set: {
            isDeleted: true,
          },
        },
        null,
        (err, sessions) => {
          if (err) {
            console.log(err);
            return res.send({
              success: false,
              message: "Error: Server error",
            });
          }
          return res.send({
            success: true,
            message: "Goodbye",
          });
        }
      );
    }
  );
});

module.exports = router;
