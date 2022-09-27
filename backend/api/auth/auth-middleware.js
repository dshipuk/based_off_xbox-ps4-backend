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
