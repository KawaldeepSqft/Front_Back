const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./DB/DB');
const Contact = require("./model/Contact"); // ⬅️ Model import
const HireUs = require("./model/HireUs");
const app = express();
const sendEmail = require("./utils/sendEmail");
const path = require('path');
dotenv.config();
connectDB();

app.use(express.json()); // ⬅️ Required for JSON body
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 1313;


app.use(express.static(path.join(__dirname, 'Dev-Front/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Dev-Front/dist/index.html'));
});

// Test route
app.get("/", (req, res) => {
  res.status(200).send("Welcome tera backend setup hogya hoja  tests tes");
});

// ⬇️ POST route for form data
app.post("/contact", async (req, res) => {
  try {
    const { name, phone, subject, message } = req.body;

    // 🧠 Step 1: Save data to DB
    const newContact = new Contact({ name, phone, subject, message });
    await newContact.save();

    // ✅ Step 2: Respond immediately to frontend
    res.status(201).json({ success: true, message: "Form submitted!" });

    // 📤 Step 3: Send email **after** response (non-blocking)
    sendEmail({
      to: process.env.EMAIL_TO,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        
      `
    });

  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});




app.post("/hireus", async (req, res) => {
  try {
    const { name, number, subject, message } = req.body;

    // Step 1: Save to DB
    const response = await HireUs.create({ name, number, subject, message });

    // ✅ Step 2: Send response to frontend immediately
    res.status(201).json({
      message: "HireUs form submitted successfully",
      data: response
    });

    // ✅ Step 3: Email in background
    sendEmail({
      to: "yourreceiver@gmail.com", // 👈 Replace with actual receiver email
      subject: "New HireUs Form Submission",
      html: `
        <h3>New HireUs Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    }).catch(err => {
      console.error("❌ Error sending HireUs email:", err);
    });

  } catch (error) {
    console.error("❌ Error saving HireUs form:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
