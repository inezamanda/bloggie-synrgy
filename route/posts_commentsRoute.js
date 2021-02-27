const express = require('express')
const PostsCommentsController = require('../controller/posts_commentsController')

const postsComments = new PostsCommentsController()
const app = express.Router()

app.post('/', async (req, res) => {
  const result = await postsComments.add(req.body)
  res.send(result)
})

app.get('/', async (req, res) => {
  const comments = await postsComments.get(req.query)
  res.send(comments)
})

app.put('/:id', async (req, res) => {
  const {body, params} = req
  await postsComments.edit(params.id, body)
  res.send('ok')
})

app.delete('/:id', async (req, res) => {
  const {params} = req
  await postsComments.remove(params.id)
  res.send('ok')
})

module.exports = app

