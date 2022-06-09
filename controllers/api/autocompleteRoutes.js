const router = require("express").Router();
const { Op } = require("sequelize");
const { City } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const cityRaw = await City.findAll({
      attributes: ["city"],
      [Op.like]: req.body,
      limit: 100,
    });

    res.status(200).json(cityRaw);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/city/:cityname", async (req, res) => {
  console.log(req.params.cityname);
  try {
    const cityName = req.params.cityname;
    const cityNames = await City.findAll({ where: { city: cityName } });
    const results = cityNames.map((city) => city.get({ plain: true }));

    res.render("all", {
      results,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
