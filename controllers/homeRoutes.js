const router = require("express").Router();
const { User } = require("../models");
const isAuth = require("../utils/isauth");

router.get("/", async (req, res) => {
  try {
    res.render("all", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  res.render("auth");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  const isLogin = true;
  res.render("auth", { isLogin });
});

module.exports = router;
