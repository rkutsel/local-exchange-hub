const router = require("express").Router();
const userRoutes = require("./userRoutes");
const autoComplete = require("./autocompleteRoutes");
const fileRoutes = require("./fileRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/autocomplete", autoComplete);
router.use("/files", fileRoutes);

module.exports = router;
