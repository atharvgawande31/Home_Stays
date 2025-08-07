const mongoose = require("mongoose")
const Listings = require("../models/listings")
const Initdata = require("./data")

const MONGO_URL = "mongodb://127.0.0.1:27017/Home_Stays"

.main()
.then(() => {
    console.log("Database connected")
})
.catch((err => {
    console.log("Databse connection failed")
})) 

async function main() {
  await mongoose.connect(MONGO_URL)
  console.log("Connected to MongoDB")
}

const initDB = async() => {
    await Listings.deleteMany({})
    await Listings.insertMany(Initdata.data);
    console.log("data added successfully")
}

initDB();