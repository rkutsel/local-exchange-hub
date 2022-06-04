const router = require("express").Router();
const userRoutes = require("./userRoutes");
const autoComplete = require("./autocompleteRoutes");

// const detailRoutes = require("./detailRoutes");
router.use("/users", userRoutes);
// router.use("/details", detailRoutes);
router.use("/autocomplete", autoComplete);

module.exports = router;
