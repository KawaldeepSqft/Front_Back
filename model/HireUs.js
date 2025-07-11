const mongoose = require("mongoose");

const hireUsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("HireUs", hireUsSchema);
