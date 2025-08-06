const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")


var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/api/message', cors(corsOptions), (req, res, next) => {
  res.json({message: "Hello I am server!"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
