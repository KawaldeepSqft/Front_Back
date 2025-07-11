const mongoose = require("mongoose");

// testing 
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
