const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

//zakładanie konta
router.post("/signup", async (req, res, next) => {
  try {
    // Generuj hash hasła
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Twórz nowego użytkownika
    const user = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
    });

    // Zapisz użytkownika w bazie danych
    await user.save();

    res.status(201).json({ message: "Użytkownik został zarejestrowany" });
  } catch (error) {
    console.error("Błąd rejestracji:", error);
    res.status(500).json({ message: "Wystąpił błąd podczas rejestracji" });
  }
});
// wersja stara hasła przez hashowaniem  password: req.body.password
module.exports = router;

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
