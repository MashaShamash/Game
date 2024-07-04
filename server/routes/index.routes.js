const router = require("express").Router();

const questionRoutes = require("./api/questions.routes");
const gameRoutes = require("./api/game.routes");
const themesRoutes = require("./api/themes.routes");
const gameLineRoutes = require("./api/gameLine.routes");

router.use("/question", questionRoutes);
router.use("/game", gameRoutes);
router.use("/themes", themesRoutes);
router.use("/gameLineRoutes", gameLineRoutes);
module.exports = router;