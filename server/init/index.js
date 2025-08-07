const mongoose = require("mongoose");
const Listings = require("../models/listings");
const Initdata = require("./data");

const MONGO_URL = "mongodb://127.0.0.1:27017/Home_Stays";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to DB");

    await Listings.deleteMany({});
    await Listings.insertMany(Initdata.data);
    console.log("✅ Data added successfully");

    mongoose.connection.close(); // close connection after seed
  } catch (err) {
    console.error("❌ Error seeding DB:", err);
  }
}
module.exports = main()
 




