const express = require('express')
const app = express.Router()

app.get('/', async (req, res) => {
  res.send("Welcome to Mini Project Team A")
})

app.get('/:path', async (req, res) => {
  res.status(404).json({
    status: "404 Not Found",
    message: "Route not found"
  })
})

module.exports = app