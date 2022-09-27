const checkUsernameExists = (req, res, next) => {
  if (1 == 1) {
    next();
  } else {
    next({});
  }
};

module.exports = {
  checkUsernameExists,
};
