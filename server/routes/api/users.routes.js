const router = require("express").Router();
const { User } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const usersFromDb = await User.findAll({ order: [["id", "ASC"]] });
    const users = usersFromDb.map((user) => delete user.password);
    res.status(200).json({ message: "success", users });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
