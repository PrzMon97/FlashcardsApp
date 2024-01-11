const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

//zakładanie konta
router.post("/signup", (req, res, next) => {
  // tu najpierw generuje hash
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then(() => res.status(201).json({ wiadomosc: "Dodano użytkownika" }))
      .catch((err) => res.status(500).json(err));
  });
});
// wersja stara hasła przez hashowaniem  password: req.body.password

// logowanie
router.post("/login", (req, res, next) => {
  // 1 wyszukanie usera o podanym emailu
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) return res.status(401).json({ wiadomosc: "Błąd autoryzacji" });
    // 2 zweryfikuj zahashowane hasło - metoda bcrypt
    bcrypt.compare(req.body.password, user.password).then((result) => {
      if (!result)
        return res.status(401).json({ wiadomosc: "Błąd autoryzacji" });

      // poprawnie zalogowano (zwrócony token)

      const token = jwt.sign({ email: user.email }, process.env.JWT_KEY, {
        expiresIn: "4h",
      });
      return res.status(200).json(token);
    });
  });
});

module.exports = router;
