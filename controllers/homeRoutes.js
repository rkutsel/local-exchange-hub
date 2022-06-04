const router = require("express").Router();
const { User, OfferItem, Category, City } = require("../models");
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
    console.log(offerDetail);
    res.render("details", {
      offerDetail,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/profile", isAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: OfferItem }],
    });

    const user = userData.get({ plain: true });

    console.log(user);

    res.render("profile", {
      user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
