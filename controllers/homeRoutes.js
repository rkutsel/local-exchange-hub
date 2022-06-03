const router = require("express").Router();
const { User } = require("../models");
const { OfferItem } = require("../models");
const { Category } = require("../models");
const { City } = require("../models");
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

router.get("/details/:id", async (req, res) => {
  try {
    const offerData = await OfferItem.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Category,
          attributes: ["id", "category_name"],
        },
        {
          model: City,
          attributes: ["id", "latitude", "longitude"],
        },
      ],
    });

    const offerDetail = offerData.get({ plain: true });
    console.log(offerDetail)
    res.render("details", {
      offerDetail,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
