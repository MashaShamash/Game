const router = require("express").Router();
const { Game } = require("../../db/models");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router.get("/", async (req, res) => {
  try {
    const questions = await Game.findAll({ where: req.query });
    res
      .status(200)
      .cookie("cookie", "kek", {
        maxAge: 9000,
        httpOnly: true,
      })
      .json({ message: "success", questions });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/gameId", async (req, res) => {
  try {
    const { gameId } = res.params;
    const question = await Game.findOne({ where: { id: gameId } });
    res.status(200).json({ message: "success", question });
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

