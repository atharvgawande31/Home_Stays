const sampleListing = [
    {
  title: "Modern Loft in Downtown",
  description: "A stylish, modern loft in the heart of the city. Perfect for business travelers or couples.",
  location: {
    address: "123 Maple Street",
    city: "San Francisco",
    state: "CA",
    country: "USA"
  },
  pricePerNight: 120,
  rating: {
    average: 4.5,
    count: 38
  },
  photos: [
    "https://example.com/photos/loft1.jpg",
    "https://example.com/photos/loft2.jpg"
  ],
  amenities: [
    "WiFi",
    "Air Conditioning",
    "Washer",
    "Dryer",
    "Kitchen",
    "24/7 Check-in"
  ],
  maxGuests: 2,
  // replace with actual host _id
  createdAt: new Date()
}
]

module.exports = {data: sampleListing}