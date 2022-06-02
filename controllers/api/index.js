const router = require("express").Router();
const userRoutes = require("./userRoutes");
const autoComplete = require("./autocompleteRoutes");

router.use("/users", userRoutes);
router.use("/autocomplete", autoComplete);

module.exports = router;
