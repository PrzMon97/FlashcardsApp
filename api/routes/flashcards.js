const express = require("express");

// wyciągam z expresa router - docieram do metod
const router = express.Router();

// zabezpieczenie routów
const chechAuth = require("../middleware/checkAuth");

// dodaje import kontrollera żeby metody nowe po zmianie działały
const flashcardController = require("../controller/flashcard");

// PONIŻEJ NOWE WERSJE

// stara wersja przed przeniesieniem do controllera

/*

router.post("/", chechAuth, (req, res, next) => {
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
});

// stara wersja get

router.get("/flashcards", (req, res, next) => {
  res.status(200).json({ wiadomosc: "wyświetl fiszki" });
});

/* stary stary post
router.post("/flashcards", (req, res, next) => {
  res.status(201).json({ wiadomosc: "dodano nową fiszkę o numerze " + id });
});
*/
/*
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({ wiadomosc: "Dane fiszki o nr " + id });
});
*/
/*
router.get("/", (req, res, next) => {
  Flashcard.find()
    .then((result) => {
      res.status(200).json({
        wiadomosc: "Lista wszystkich fiszek",
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
});

// stara wersja get parametrycznego i innych

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Flashcard.findById(id)
    .then((result) => {
      res.status(200).json({
        wiadomosc: "Szczegóły fiszki o numerze " + id,
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
});

/*
router.put("/:id", (req, res, next) => {
    const id = req.params.id
    res.status(200).json({wiadomosc: "Zmiana danych dania o numerze " + id})
})
*/

//powyżej params. i tu nazwa ta co po "/: "
/*
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  Meal.findByIdAndUpdate(id, {
    nazwa: req.body.nazwa,
    kalorie: req.body.kalorie,
    cena: req.body.cena,
  })
    .then(() =>
      res.status(200).json({
        wiadomosc: "Zmiana danych fiszki o numerze " + id,
      })
    )
    .catch((err) => res.status(500).json(err));
});
/*
//nowe delete - poniżej stara wersja przez zrobieniem Meals i schema
router.delete("/:id", (req, res, next) => {
    const id = req.params.id
    Meal.findByIdAndDelete(id)
    .then(() => res.status(200).json({wiadomosc: "Usunięcie dania o numerze " + id}))
    .catch(err=> res.status(500).json(err))     
})
*/
// wyeksportowanie
/*
module.exports = router;

stare stARE 
*/
/*
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({ wiadomosc: "Usunięcie dania o numerze " + id });
});
*/
router.post("/", chechAuth, flashcardController.flashcard_add_new);

router.get("/", flashcardController.flashcard_get_all);

router.get("/:id", flashcardController.flashcard_get_by_id);

router.put("/:id", flashcardController.flashcard_change);

router.delete("/:id", flashcardController.flashcard_delete);

module.exports = router;
