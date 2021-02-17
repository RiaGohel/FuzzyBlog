const UserSession = require("../models/usersession");
const User = require("../models/users");

const auth = (req, res, next) => {
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
      User.find({ _id: userSession.userId }, (err, users) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Unknown Error",
          });
        }
        if (users.length != 1) {
          return res.send({
            success: false,
            message: "User not found",
          });
        }
        req.user = users[0];
        next();
      });
    }
  );
};

module.exports = auth;
