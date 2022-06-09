const router = require("express").Router();
const { User, OfferItem, Category, City, Comment } = require("../models");
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

router.get("/details/:id", isAuth, async (req, res) => {
  try {
    const sessionUserId = req.session.user_id;
    const offerData = await OfferItem.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "full_name"],
        },
        {
          model: Category,
          attributes: ["id", "category_name"],
        },
        {
          model: City,
          attributes: ["id", "latitude", "longitude"],
        },
        {
          model: Comment,
          attributes: ["id", "date_created", "comment", "user_id"],
          include: [
            {
              model: User,
              attributes: ["full_name"],
            },
          ],
        },
      ],
    });

    const offerDetail = offerData.get({ plain: true });
    res.render("details", {
      ...offerDetail,
      sessionUserId,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/oldcomment/:id/:eid", isAuth, async (req, res) => {
  try {
    const oldCommentData = await Comment.findByPk(req.params.eid, {
      attributes: ["id", "comment"],
    });

    const oldComment = oldCommentData.get({ plain: true });
    const sessionUserId = req.session.user_id;

    const offerData = await OfferItem.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "full_name"],
        },
        {
          model: Category,
          attributes: ["id", "category_name"],
        },
        {
          model: City,
          attributes: ["id", "latitude", "longitude"],
        },
        {
          model: Comment,
          attributes: ["id", "date_created", "comment", "user_id"],
          include: [
            {
              model: User,
              attributes: ["full_name"],
            },
          ],
        },
      ],
    });

    const offerDetail = offerData.get({ plain: true });

    res.render("details", {
      oldComment,
      ...offerDetail,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", isAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: OfferItem,
          attributes: [
            "id",
            "url_path",
            "offer_name",
            "offer_description",
            "offer_condition",
          ],
        },
      ],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newoffer", isAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      attributes: ["id", "category_name"],
      order: [["category_name", "ASC"]],
    });

    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );

    const cityData = await City.findAll({
      attributes: ["id", "city"],
      order: [["city", "ASC"]],
    });
    const cities = cityData.map((city) => city.get({ plain: true }));

    res.render("offeritem", {
      loggedIn: true,
      categories,
      cities,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/offerposting", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      attributes: ["id", "category_name"],
    });
    const categories = categoryData.map((categoryData) =>
      categoryData.get({ plain: true })
    );

    const cityData = await City.findAll({
      attributes: ["id", "city"],
    });
    const cities = cityData.map((cityData) => cityData.get({ plain: true }));

    res.render("offeritem", {
      categories,
      cities,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
