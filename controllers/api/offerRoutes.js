const router = require("express").Router();
const { OfferItem } = require("../../models");
const isAuth = require("../../utils/isauth");

router.post("/", isAuth, async (req, res) => {
  try {
    const offerData = await OfferItem.create({
      offer_name: req.body.offer_name,
      offer_description: req.body.offer_description,
      street_address: req.body.street_address,
      city_id: req.body.city_id,
      city_name: req.body.city_name,
      zipcode: req.body.zipcode,
      url_path: req.body.file,
      user_id: req.session.user_id,
      category_id: req.session.category_id,
    });
    if (!offerData) {
      res.status(404).json({ message: "No offer found with this id!" });
      return;
    }
    res.status(200).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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

    res.status(200).json(offerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
