// importuję model fiszki
const Flashcard = require("../models/flashcard");

// EKSPORT WSZYSTKICH FRAGMENTÓW KODU PRZYPOMINAJĄCYCH KONTROLLERY DO TEGO PLIKU
exports.flashcard_add_new = (req, res, next) => {
  const flashcard = new Flashcard({
    nazwaPL: req.body.nazwaPL,
    nazwaENG: req.body.nazwaENG,
  });

  flashcard
    .save()
    .then((result) => {
      res.status(201).json({
        wiadomosc: "Dodanie nowej fiszki",
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.flashcard_get_all = (req, res, next) => {
  Flashcard.find()
    .then((result) => {
      res.status(200).json({
        wiadomosc: "Lista wszystkich fiszek",
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.flashcard_get_by_id = (req, res, next) => {
  const id = req.params.id;
  Flashcard.findById(id)
    .then((result) => {
      res.status(200).json({
        wiadomosc: "Szczegóły fiszki o numerze " + id,
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.flashcard_change = (req, res, next) => {
  const id = req.params.id;
  Flashcard.findByIdAndUpdate(id, {
    nazwaPL: req.body.nazwaPL,
    nazwaENG: req.body.nazwaENG,
  })
    .then(() =>
      res.status(200).json({
        wiadomosc: "Zmiana danych fiszki o numerze " + id,
      })
    )
    .catch((err) => res.status(500).json(err));
};

exports.flashcard_delete = (req, res, next) => {
  const id = req.params.id;
  Flashcard.findByIdAndDelete(id)
    .then(() =>
      res.status(200).json({ wiadomosc: "Usunięto fiszkę o numerze " + id })
    )
    .catch((err) => res.status(500).json(err));
};
