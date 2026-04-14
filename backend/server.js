const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ADD THIS LINE HERE
app.use("/api/auth", require("./routes/auth"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log("Mongo Error:", err));

app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});