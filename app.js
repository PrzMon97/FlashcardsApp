// 1 import express
const express = require("express");

// 2 tworze instancje express
const app = express();

// 8 zmienne środowiskowe (po podłączeniu bazy i inst env)
require("dotenv").config();

// 7 łącze z bazą
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cus0ppp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

// 5  import morgan - logger
const morgan = require("morgan");
app.use(morgan("combined"));

// 6 parsowanie body
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// 3 routy

const flashcardRoutes = require("./api/routes/flashcards");
const userRoutes = require("./api/routes/users");

// 4 uruchom routy
app.use("/flashcards", flashcardRoutes);
app.use("/users", userRoutes);

app.use((req, res, next) => {
  res.status(200).json({ wiadomosc: "Wszystko śmiga" });
});

module.exports = app;
