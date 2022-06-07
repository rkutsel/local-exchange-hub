const router = require("express").Router();
const { OfferItem } = require("../../models");
const isAuth = require("../../utils/isauth");

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

// router.delete("/:id", withAuth, async (req, res) => {
//   try {
//     const postData = await Post.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!postData) {
//       res.status(404).json({ message: "No project found with this id!" });
//       return;
//     }

//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
