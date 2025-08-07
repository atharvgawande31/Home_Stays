const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const Listings = require("./models/listings");

const app = express();
const port = 3000;

const MONGO_URL = "mongodb://127.0.0.1:27017/Home_Stays";

mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
};

app.get("/listings", cors(corsOptions), async (req, res) => {
  try {
    const listings = await Listings.find({});
    res.status(200).json(listings);
  } catch (err) {
    console.error("❌ Error fetching listings:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});