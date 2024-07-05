const router = require("express").Router();
const { Game, Question, GameLine } = require("../../db/models");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router.get("/", async (req, res) => {
  try {
    const games = await Game.findAll({ order: [["id", "ASC"]] });

    res.status(200).json({ message: "success", games });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:gameId", async (req, res) => {
  try {
    const { gameId } = res.params;
    const question = await Game.findOne({ where: { id: gameId } });
    res.status(200).json({ message: "success", question });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/findCurrentGame", verifyAccessToken, async (req, res) => {
  try {
    const { game } = res.locals;
    const findGame = await Game.findOne({
      where: { id: game.id },
      include: {
        model: GameLine,
        include: Question,
      },
    });
    res.status(200).json({ message: "success", findGame });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/gameStart", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    console.log(user);
    const game = await Game.create({
      userId: user.id,
      gameStatus: false,
      point: 0,
    });
    if (game) {
      const questions = await Question.findAll();
      questions.forEach((question) => {
        GameLine.create({
          gameId: game.id,
          questionId: question.id,
          gameLineStatus: false,
        });
      });
    }
    const timeOut = setTimeout(async () => {
      const gameLines = await GameLine.findAll({
        where: {
          gameId: game.id,
        },
        include: Question,
      });
      res.locals.game = game;
      res.locals.user = user;
      res.status(200).json({ message: "success", game, gameLines });
    }, 2000);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const { userId, gameStatus, point } = req.body;
    const game = await Game.create({ userId, gameStatus, point });
    if (game) {
      res.status(200).json({ message: "success", game });
      return;
    }
  } catch ({ message }) {
    res.json({ error: message });
  }
});

router.put("/:gameId", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const { gameId } = req.params;
    const { userId, gameStatus, point } = req.body;

    const result = await Game.update(
      { userId, gameStatus, point },
      { where: { id: gameId, userId: user.id } }
    );

    if (result[0] > 0) {
      const game = await Game.findOne({ where: { id: gameId } });

      res.status(200).json({ message: "success", game });
      return;
    }

    res.status(400).json({ message: "Ошибка!" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
