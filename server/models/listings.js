const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String },
    country: { type: String, required: true },
  },
  pricePerNight: {
    type: Number,
    required: true,
    min: 0
  },
  rating: {
    average: { type: Number, min: 0, max: 5, default: 0 },
    count: { type: Number, default: 0 }
  },
  photos: [String], 
  amenities: [String], 
  maxGuests: {
    type: Number,
    default: 1,
    min: 1
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Listing', listingSchema);