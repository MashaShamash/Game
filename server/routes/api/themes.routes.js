const router = require("express").Router();
const { Theme } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const themes = await Theme.findAll({ order: [["id", "ASC"]] });
    console.log(themes);
    res.status(200).json({ message: "success", themes });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/themeId", async (req, res) => {
  try {
    const { themeId } = res.params;
    const theme = await Theme.findOne({ where: { id: themeId } });
    res.status(200).json({ message: "success", theme });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
