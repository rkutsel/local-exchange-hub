const router = require("express").Router();
const { User, OfferItem } = require("../models");
const isAuth = require("../utils/isauth");

router.get("/", async (req, res) => {
  try {
    const offferitems = await OfferItem.findAll();
    const results = offferitems.map((offeritem) =>
      offeritem.get({ plain: true })
    );

    res.render("all", {
      results,
      loggedIn: req.session.loggedIn,
    });
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
