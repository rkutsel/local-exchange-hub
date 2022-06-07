const router = require("express").Router();
const { Op } = require("sequelize");
const { City } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const cityRaw = await City.findAll({
      attributes: ["city", "state"],
      [Op.like]: req.body,
      limit: 100,
    });

    res.status(200).json(cityRaw);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
