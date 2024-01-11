//import mongoose
const mongoose = require("mongoose");

// schemat (tak jak w postman )
const flashcardSchema = mongoose.Schema({
  nazwaPL: String,
  nazwaENG: String,
});

//eksportuje i baza tu wciskam schemat flashcardSchema
module.exports = mongoose.model("Flashcard", flashcardSchema);
