require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User, Game } = require("../db/models");

async function verifyRefreshToken(req, res, next) {
  try {
    const { refresh } = req.cookies;
    let { user } = jwt.verify(refresh, process.env.REFRESH_TOKEN);

    let game = await Game.findOne({
      where: { userId: user.id, gameStatus: true },
    });

    // user = await User.findOne({
    //   where: { id: user.id },
    //   attributes: ["id", "name", "email"],
    // });

    res.locals.user = user;
    res.locals.user.gameId = game.id;
    res.locals.game = game;

    next();
  } catch (error) {
    console.log("Invalid refresh token");
    res.clearCookie("refreshToken").sendStatus(401);
  }
}

module.exports = verifyRefreshToken;
