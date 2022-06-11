const router = require("express").Router();
const userRoutes = require("./userRoutes");
const autoComplete = require("./autocompleteRoutes");
const fileRoutes = require("./fileRoutes");
const commentRoutes = require("./commentRoutes");
const offerRoutes = require("./offerRoutes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/autocomplete", autoComplete);
router.use("/files", fileRoutes);
router.use("/offers", offerRoutes);

module.exports = router;
