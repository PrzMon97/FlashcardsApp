//import mongoose
const mongoose = require("mongoose");

// schemat (tak jak w postman )
const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

//eksportuje i baza tu wciskam schemat mealSchema
module.exports = mongoose.model("User", userSchema);
