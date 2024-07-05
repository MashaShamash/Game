const router = require("express").Router();

const authRoutes = require('./api/auth.routes');
const tokensRoutes = require('./api/tokens.routes');
const questionRoutes = require("./api/questions.routes");
const gameRoutes = require("./api/game.routes");
const themesRoutes = require("./api/themes.routes");
const gameLineRoutes = require("./api/gameLine.routes");


router.use('/auth', authRoutes);
router.use('/tokens', tokensRoutes);
router.use("/questions", questionRoutes);
router.use("/games", gameRoutes);
router.use("/themes", themesRoutes);
router.use("/gameLineRoutes", gameLineRoutes);
module.exports = router;

