const router = require("express").Router();
const { Theme } = require("../../");

router.get("/", async (req, res) => {
  try {
    const themes = await Theme.findAll({ where: req.query });
    res
      .status(200)
      .cookie("cookie", "kek", {
        maxAge: 9000,
        httpOnly: true,
      })
      .json({ message: "success", themes });
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
