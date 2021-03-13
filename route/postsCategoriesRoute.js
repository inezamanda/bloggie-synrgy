const express = require('express')
const PostsCategoriesController = require('../controller/postsCategoriesController')

const {ForeignKeyConstraintError, DatabaseError} = require('sequelize')
const {ValidationError} = require('joi')
const {postCategoryValidation} = require('../validator/validation')
const restrict = require('../middleware/passportMiddleware')
const postsCategories = new PostsCategoriesController()
const app = express.Router()

app.post('/', restrict, async (req, res, next) => {
  try {
    const postCategory = await postCategoryValidation.validateAsync(req.body)
    const {postId, categoryId} = postCategory
    const result = await postsCategories.add({postId, categoryId})
    res.status(200).json({
      status: '200 OK',
      message: 'Add post categories successful',
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
    } else if (error instanceof DatabaseError) {
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `Something went wrong, invalid input value`
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
    const result = await postsCategories.get(req.query)
    res.status(200).json({
      status: '200 OK',
      message: 'Read all posts categories successful',
      data: result
    })
  } catch (error) {
    next (error)
  }
})

app.get('/:id', async (req, res, next) => {
  try {
    const result = await postsCategories.getPostByCategory(req.params.id)
    res.status(200).json({
      status: '200 OK',
      message: 'Read all posts by category successful',
      data: result
    })
  } catch (error) {
    next (error)
  }
})

app.delete('/:id', async (req, res, next) => {
  const { params } = req
  const result = await postsCategories.remove(params.id)
  if (result) {
    res.status(200).json({
      status: '200 OK',
      message: 'Remove posts categories successful'
    })
  } else {
    res.status(404).json({
      error: {
        status: '404 Not Found',
        message: 'Posts categories not found'
      }
    })
  }
}) 

module.exports = app
