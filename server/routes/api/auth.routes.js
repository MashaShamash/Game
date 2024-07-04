const router = require("express").Router();

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "Заполните все поля" });
      return;
    }

    const userInDb = await UserService.getUserByEmail(email);
    if (userInDb) {
      res
        .status(400)
        .json({ message: "Такой пользователь уже зарегестрирован" });
      return;
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await UserService.createUser({
      name,
      email,
      password: hashPassword,
    });

    const { accessToken, refreshToken } = generateTokens({ user });

    if (user) {
        //delete user.password;
        console.log(user);
      res
        .status(201)
        .cookie("refresh", refreshToken, { httpOnly: true })
        .json({ message: "success", user, accessToken });
      return;
    }

    res.status(400).json({ message: "Что-то пошло не так" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "Заполните все поля" });
      return;
    }
    const user = await UserService.getUserByEmail(email);

    if (user) {
      const isCompare = await bcrypt.compare(password, user.password);
      if (isCompare) {
        delete user.dataValues.password;

        const { accessToken, refreshToken } = generateTokens({ user });
        res
          .status(200)
          .cookie("refresh", refreshToken, { httpOnly: true })
          .json({ message: "success", accessToken, user });
        return;
      }
      res.status(400).json({ message: "Email или пароль не совпадают" });
      return;
    }

    res.status(400).json({ message: "Email или пароль не совпадают" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/logout", (req, res) => {
  res.locals.user = undefined;
  res.status(200).clearCookie("refresh").json({ message: "success" });
});

module.exports = router;
