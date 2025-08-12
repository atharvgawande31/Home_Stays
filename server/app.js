const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Listings = require("./models/listings");
const cookieParser = require("cookie-parser");
const path = require("path");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken");

const app = express();
const port = 3000;

const MONGO_URL = "mongodb://127.0.0.1:27017/Home_Stays";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.set("view engine", "ejs");
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("Home.jsx");
});

app.get("/listings", async (req, res) => {
  try {
    const listings = await Listings.find({});
    res.status(200).json(listings);
  } catch (err) {
    console.error("❌ Error fetching listings:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/listings/:_id", async (req, res) => {
  try {
    const userId = req.params._id;
    const oneLisitng = await Listings.findById(userId);
    res.json(oneLisitng);
  } catch (err) {
    res.status(404).json({ err: "Listing not found" });
  }
});

//new route

app.get("/new", async (req, res) => {
  console.log("Page rendered");
});

app.post("/new", (req, res) => {
  console.log("Helllo Worls");
});

app.get("/listings/:_id/edit", async (req, res) => {
  try {
    const updateId = req.params._id;
    const listing = await Listings.findById(updateId);
    res.status(200).json(listing);
  } catch (err) {
    res.status(404).json({ err: "Listing not found" });
  }
});

app.put("/listings/:_id", async (req, res) => {
  try {
    const updateId = req.params._id;
    const listing = await Listings.findByIdAndUpdate(updateId);
    res.status(200).json(listing);
  } catch (err) {
    res.status(404).json({ err: "Listing not found" });
  }
});

app.delete("/listings/:_id", async (req, res) => {
  const deleteId = req.params._id;
  await Listings.findByIdAndDelete(deleteId);
  res.redirect("/listings");
});

app.get("/signup", async (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createUser = await User.create({
        username,
        password: hash,
        email,
        age,
      });
      let token = jwt.sign({email})
      res.cookie("token", token)
      console.log(createUser);
      res.send(createUser);

    });
  });
});

app.get("/login", async(req, res) => {
  res.render("login")
})

app.post("/login", async(req, res) => {
let { email, password } = req.body;
await User.findOne({email})
   bcrypt.compare(User.email, req.body.email)
let token = jwt.sign({email})
      res.cookie("token", token)
})

app.post("/logout" , async(req, res) => {
  res.cookie("token", "")
  res.redirect("/")
})
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
