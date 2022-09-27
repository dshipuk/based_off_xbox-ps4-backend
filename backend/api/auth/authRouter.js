const router = require("express").Router();

const { checkUsernameExists } = require("./auth-middleware.js");

router.get("/", checkUsernameExists, (req, res, next) => {
  if (1 == 1) {
    res.json({ message: "Success" });
  } else {
    next();
  }
});


module.exports = router;
