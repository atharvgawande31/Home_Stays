// models/User.js
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, 
    trim: true 
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  age:{
    type:Number,
    required:true
  }
});


module.exports = mongoose.model('User', userSchema);