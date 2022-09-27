const router = require("express").Router();
const bcrypt = require("bcryptjs");

const { validateLogin, validateRegistration } = require("./auth-middleware.js");

router.get("/", (req, res, next) => {
  if (1 == 1) {
    res.json({ message: "Success" });
  } else {
    next();
  }
});

router.post("/register", validateRegistration, (req, res, next) => {
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  /*
    Need To SetUp database before moving forward
  */

});

router.post("/login", validateLogin, (req, res, next) => {
  if (req.body) {
    res.json({ data: req.body });
  }
});

module.exports = router;
