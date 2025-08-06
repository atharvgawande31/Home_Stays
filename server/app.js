const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")


var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
}

app.get('/listings', cors(corsOptions), (req, res, next) => {
  res.render('/App.jsx')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
