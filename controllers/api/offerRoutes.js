const router = require("express").Router();
const { OfferItem } = require("../../models");
const isAuth = require("../../utils/isauth");

router.post("/", isAuth, async (req, res) => {
  try {
    console.log(req.body);
    // console.log(req.params.id, req.session.user_id, req.body);
    // const offerData = await OfferItem.create({
    //   where: {
    //     id: req.params.id,
    //     user_id: req.session.user_id,
    //   },
    // });
    // if (!offerData) {
    //   res.status(404).json({ message: "No offer found with this id!" });
    //   return;
    // }
    // res.status(200).json(offerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", isAuth, async (req, res) => {
  try {
    console.log(req.params.id, req.session.user_id);
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
