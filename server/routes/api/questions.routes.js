const router = require("express").Router();
const { Question } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const questions = await Question.findAll();
    res
      .status(200)
      .json({ message: "success", questions });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/questionId", async (req, res) => {
  try {
    const { questionId } = res.params;
    const question = await Question.findOne({ where: { id: questionId } });
    res.status(200).json({ message: "success", question });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router
