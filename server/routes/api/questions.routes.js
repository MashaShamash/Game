const router = require("express").Router();
const { Questions } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const questions = await Questions.findAll({ where: req.query });
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

router.get("/questionId", async (req, res) => {
  try {
    const { questionId } = res.params;
    const question = await Questions.findOne({ where: { id: questionId } });
    res.status(200).json({ message: "success", question });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router
