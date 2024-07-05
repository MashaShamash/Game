const router = require("express").Router();
const { GameLine, Question, Game } = require("../../db/models");

const verifyAccessToken = require("../../middleware/verifyAccessToken");

router.get("/", verifyAccessToken, async (req, res) => {
  try {
    const gameLine = await GameLine.findAll({
      where: { gameId: res.locals.gameId },
      include: Question,
    });
    console.log(gameLine);
    res.status(200).json({ message: "success", gameLine });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/gameLineId", verifyAccessToken, async (req, res) => {
  try {
    const { gameLineId } = res.params;
    const gameLine = await GameLine.findOne({ where: { id: gameLineId } });
    res.status(200).json({ message: "success", gameLine });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/", verifyAccessToken, async (req, res) => {
  try {
    const { user, gameId } = res.locals;

    const { questionId, gameLineStatus } = req.body;

    const gameLine = await GameLine.create({
      gameId,
      questionId,
      gameLineStatus,
    });
    if (gameLine) {
      res.status(200).json({ message: "success", gameLine });
      return;
    }
  } catch ({ message }) {
    res.json({ error: message });
  }
});

router.put("/:gameLineId", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const { gameLineId } = req.params;
    console.log(gameLineId);
    console.log(res.locals.gameId);
    // const { gameId, questionId, gameLineStatus } = req.body;
    const result = await GameLine.update(
      { gameLineStatus: true },
      { where: { questionId: +gameLineId, gameId: res.locals.gameId } }
    );
    if (result[0] > 0) {
      const gameLine = await GameLine.findOne({ where: { id: +gameLineId } });

      res.status(200).json({ message: "success", gameLine });
      return;
    }

    res.status(400).json({ message: "Ошибка!" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
