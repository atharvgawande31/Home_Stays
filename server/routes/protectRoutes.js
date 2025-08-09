// routes/protectedRoute.js

const express = require('express');
const router = express.Router();
const Auth = require("../middlewares/auth")

// A protected route is define here
router.get('/profile', Auth, (req, res) => {
    
  res.json({ message: 'You are authenticated' });
});

module.exports = router;