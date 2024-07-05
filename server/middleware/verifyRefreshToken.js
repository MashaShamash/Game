require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User, Game } = require("../db/models");

async function verifyRefreshToken(req, res, next) {
  try {
    const { refresh } = req.cookies;
    let { user } = jwt.verify(refresh, process.env.REFRESH_TOKEN);

    let game = await Game.findOne({
      where: { userId: user.id, gameStatus: false },
    });
    
    if (game) {
      // console.log(game.dataValues);
      // res.locals.user.gameId = game.dataValues.id;
      res.locals.gameId = game.dataValues.id
    }

    // user = await User.findOne({
    //   where: { id: user.id },
    //   attributes: ["id", "name", "email"],
    // });

    res.locals.user = user;

    next();
  } catch (error) {
    console.log("Invalid refresh token");
    console.log(error);
    res.clearCookie("refreshToken").sendStatus(401);
  }
}

module.exports = verifyRefreshToken;
