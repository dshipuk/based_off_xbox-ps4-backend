const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../user/user-model");

const { validateLogin, validateRegistration } = require("./auth-middleware.js");

router.get("/", (req, res, next) => {
  User.all()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      next({ err });
    });
});

router.get("/user", (req, res, next) => {
  User.findByName(req.body.name)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      next({ err });
    });
});
router.get("/id", (req, res, next) => {
  User.findById(req.body.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      next({ err });
    });
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
