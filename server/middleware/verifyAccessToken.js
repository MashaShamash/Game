require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User, Game } = require('../db/models');

async function verifyAccessToken(req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    let { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN);

    let game = await Game.findOne({
      where: { gameStatus: true}
    });

    user = await User.findOne({
      where: { id: user.id },
      attributes: ['id', 'name', 'email'],
    });

    res.locals.user = [user, game];

    next();
  } catch (error) {
    console.log("Invalid access token");
    res.status(403).send("Invalid access token");
  }
}

module.exports = verifyAccessToken;
