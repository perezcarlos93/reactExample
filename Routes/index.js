const router = require("express").Router();
const apiRoutes = require("./API");
const path = require("path");

router.use("/api", apiRoutes);
router.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
