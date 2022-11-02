const { JWT_SECRET } = require("../secrets");
const jwt = require("jsonwebtoken");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next({ status: 401, message: "Token Missing" });
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return next({ status: 401, message: "Token Invalid" });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};

const checkUsernameExists = async (res, req, next) => {
  try {
    // Wip
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = {
  validateLogin,
  validateRegistration,
};
