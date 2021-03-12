const express = require('express')
const PostsLikesController = require('../controller/postsLikesController')

const {ForeignKeyConstraintError} = require('sequelize')
const restrict = require('../middleware/passportMiddleware')
const postsLikes = new PostsLikesController()
const app = express.Router()

app.post('/', restrict, async (req, res, next) => {
  try {
    const userId = req.user.id
    const {postId} = req.body
    const result = await postsLikes.add({userId, postId})
    res.status(200).json({
      status: '200 OK',
      message: 'Add likes successful',
      data: result
    })
  } catch (error) {
    if (error instanceof ForeignKeyConstraintError) {
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `Something wrong, foreign key constraint doesn't match`
        }
      })
    }
    else {
      next(error)
    }
  }
})

app.get('/', async (req, res, next) => {
  try {
    const result = await postsLikes.get(req.query)
    res.status(200).json({
      status: '200 OK',
      message: 'Read all likes successful',
      data: result
    })
  } catch (error) {
    next (error)
  }
})

app.delete('/:id', async (req, res, next) => {
  const { params } = req
  const result = await postsLikes.remove(params.id)
  if (result) {
    res.status(200).json({
      status: '200 OK',
      message: 'Unlike successful'
    })
  } else {
    res.status(404).json({
      error: {
        status: '404 Not Found',
        message: 'Likes not found'
      }
    })
  }
}) 

module.exports = app