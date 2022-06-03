const router = require("express").Router();
const { Op } = require("sequelize");
const { OfferItem } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const offersRaw = await OfferItem.findAll({
      attributes: ["offer_name"],
      [Op.like]: req.body,
      limit: 5,
    });

    res.status(200).json(offersRaw);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
