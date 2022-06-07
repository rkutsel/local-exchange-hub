const router = require("express").Router();
const userRoutes = require("./userRoutes");
const autoComplete = require("./autocompleteRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/autocomplete", autoComplete);

module.exports = router;
