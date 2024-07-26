const router = require("express").Router();

const catRoutes = require("./api/item.routes");
const askRoutes = require("./api/ask.routes");

router.use("/items", catRoutes);
router.use("/game", askRoutes);

module.exports = router;