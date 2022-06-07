const router = require("express").Router();
const { OfferItem } = require("../../models");
const isAuth = require("../../utils/auth");

//
router.post("/", isAuth, async (req, res) => {
  try {
    const newOffer = await OfferItem.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newOffer);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", isAuth, async (req, res) => {
  try {
    const offerData = await OfferItem.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!offerData) {
      res.status(404).json({ message: "No offer found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
