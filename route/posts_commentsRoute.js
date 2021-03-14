const express = require('express')
const PostsCommentsController = require('../controller/posts_commentsController')

const { commentValidation, editCommentValidation } = require('../validator/validation')
const { ValidationError } = require('joi')
const { ForeignKeyConstraintError } = require('sequelize')

const restrict = require('../middleware/passportMiddleware')
const postsComments = new PostsCommentsController()
const app = express.Router()

app.post('/', restrict, async (req, res, next) => {
  try {
    const userId = req.user.id
    const comment = await commentValidation.validateAsync(req.body)
    const {postId, content} = comment
    const result = await postsComments.add({postId, userId, content})
    res.status(201).json({
      status: '201 Created',
      message: 'Add comments successful',
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
    } else if (error instanceof ValidationError) {
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `${error.details.map(err => err.message)}`
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
    const result = await postsComments.get(req.query)
    res.status(200).json({
      status: '200 OK',
      message: 'Read all comments successful',
      data: result
    })
  } catch (error) {
    next(error)
  }
})

app.get('/:id', async (req, res, next) => {
  try {
    const { params } = req
    const result = await postsComments.getId(params.id)
    if (result) {
      res.status(200).json({
        status: '200 OK',
        message: 'Read comments successful',
        data: result
      })
    } else {
      res.status(404).json({
        error: {
          status: '404 Not Found',
          message: 'Comments not found'
        }
      })
    }
  } catch (error) {
    next(error)
  }
})

app.put('/:id', restrict, async (req, res, next) => {
  try {
    const { body, params } = req
    const userId = req.user.id
    const comment = await editCommentValidation.validateAsync(body)
    const {content} = comment
    const result = await postsComments.edit(params.id, {
      userId, 
      content
    })
    if (result[0]) {
      res.status(200).json({
        status: '200 OK',
        message: 'Edit comments successful'
      })
    } else {
      res.status(400).json({
        error: {
          status: '400 Bad Request',
          message: 'Comments could not be edited. Please check comments id or your input'
        }
      })
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `${error.details.map(err => err.message)}`
        }
      })
    }
    else {
      next(error)
    }
  }
})

app.delete('/:id', restrict, async (req, res, next) => {
  try {
    const { params } = req
    const result = await postsComments.remove(params.id)
    if (result) {
      res.status(200).json({
        status: '200 OK',
        message: 'Delete comments successful'
      })
    } else {
      res.status(404).json({
        error: {
          status: '404 Not Found',
          message: 'Comments not found'
        }
      })
    }
  } catch (error){
    next(error)    
  }
})

module.exports = app