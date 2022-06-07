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
        {
          model: Comment,
          attributes: ["id", "date_created", "comment", "user_id"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    const offerDetail = offerData.get({ plain: true });
    console.log(offerDetail);
    console.log(sessionUserId);
    res.render("details", {
      ...offerDetail,
      sessionUserId,
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
        {
          model: Comment,
          attributes: ["id", "date_created", "comment", "user_id"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    const offerDetail = offerData.get({ plain: true });

    console.log(oldComment);
    res.render("details", {
      oldComment,
      ...offerDetail,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", isAuth, async (req, res) => {
  console.log("hello", req.session.user_id);
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: OfferItem,
          attributes: [
            "id",
            "free_offer",
            "offer_name",
            "offer_description",
            "offer_condition",
          ],
        },
      ],
    });
    console.log(userData);

    const user = userData.get({ plain: true });

    console.log(user, "hello world");

    res.render("profile", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
