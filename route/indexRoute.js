const express = require('express')
const app = express.Router()

app.get('/', async (req, res) => {
  res.send("Welcome to Mini Project Team A")
})

app.post('/:path', async (req, res) => {
  res.status(404).json({
    error: {
      status: "404 Not Found",
      message: "Route not found"
    } 
  })
})

app.get('/:path', async (req, res) => {
  res.status(404).json({
    error: {
      status: "404 Not Found",
      message: "Route not found"
    } 
  })
})

app.put('/:path', async (req, res) => {
  res.status(404).json({
    error: {
      status: "404 Not Found",
      message: "Route not found"
    } 
  })
})

app.delete('/:path', async (req, res) => {
  res.status(404).json({
    error: {
      status: "404 Not Found",
      message: "Route not found"
    } 
  })
})

module.exports = app