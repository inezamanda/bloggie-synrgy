const express = require('express')
const app = express.Router()

app.get('/', async (req, res) => {
  res.send("Welcome to Mini Project Team A")
})

app.post('/', async (req, res) => {
  res.send("Welcome to Mini Project Team A")
})

app.put('/', async (req, res) => {
  res.send("Welcome to Mini Project Team A")
})

app.delete('/', async (req, res) => {
  res.send("Welcome to Mini Project Team A")
})


module.exports = app