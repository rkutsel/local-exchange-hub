const router = require("express").Router();
const userRoutes = require("./userRoutes");
const autoComplete = require("./autocompleteRoutes");
const offerItemRoutes = require("./offerRoutes");
// const detailRoutes = require("./detailRoutes");

router.use("/users", userRoutes);
// router.use("/details", detailRoutes);
router.use("/autocomplete", autoComplete);

router.use("/offer_items", offerItemRoutes);

module.exports = router;
