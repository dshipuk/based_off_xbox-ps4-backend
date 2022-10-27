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

const validateRegistration = (req, res, next) => {
  if (1 == 1) {
    next();
  } else {
    next({});
  }
};

const validateLogin = (req, res, next) => {
  if (1 == 1) {
    next();
  } else {
    next({});
  }
};

module.exports = {
  validateLogin,
  validateRegistration,
};
