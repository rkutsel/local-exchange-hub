const router = require("express").Router();
const userRoutes = require("./userRoutes");
const autoComplete = require("./autocompleteRoutes");
const fileRoutes = require("./fileRoutes");

// const detailRoutes = require("./detailRoutes");
router.use("/users", userRoutes);
// router.use("/details", detailRoutes);
router.use("/autocomplete", autoComplete);
router.use("/files", fileRoutes);

module.exports = router;
