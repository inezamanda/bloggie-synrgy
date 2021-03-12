const express = require('express')
const postController = require('../controller/postController')
const upload = require('../middleware/multerMiddleware')
const restrict = require('../middleware/passportMiddleware')

const {postValidation, editPostValidation} = require('../validator/validation')
const {ValidationError} = require('joi')
const {DatabaseError, ForeignKeyConstraintError} = require('sequelize')

const app = express.Router()

app.get('/', async (req, res, next) => {
  try {
    const result = await postController.get()
    res.status(200).json({
      status: '200 OK',
      message: 'Read all posts successful',
      data: result
    })
  } catch (error) {
    next(error)
  }
})

app.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await postController.getId({ id })
    if (result) {
      res.status(200).json({
        status: '200 OK',
        message: 'Read posts successful',
        data: result
      })      
    } else{
      res.status(404).json({
        error: {
          status: '404 Not Found',
          message: 'posts not found'
        }
      })
    }    
  } catch (error) {
    next(error)
  }
})

app.post('/', restrict, upload.single('imagePost'), async (req, res, next) => {
  try {
    const imagePost = req.files ? req.files.path : undefined
    const file = req.files ? req.files.path : undefined
    const post = await postValidation.validateAsync(req.body)
    const { userId, title, content, filterView, filterComment } = post
    const result = await postController.add({
      userId,
      title,
      content,
      imagePost,
      file,
      filterView,
      filterComment
    })
    res.status(201).json({
      status: '201 Created',
      message: 'Add posts successful',
      data: result
    })
  } catch (error) {
    if (error instanceof ForeignKeyConstraintError){
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `Something wrong, foreign key constraint doesn't match`
        }
      })
    } else if (error instanceof ValidationError){
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `${error.details.map(err => err.message)}`
        }
      })
    } else if (error instanceof DatabaseError) {
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `Something went wrong, invalid input value`
        }
      })
    } else {
      next(error)
    }    
  }
})

app.put('/:id', restrict, upload.single('imagePost'), async (req, res, next) => {
  try {
    const { id } = req.params
    const imagePost = req.files ? req.files.path : undefined
    const file = req.file ? req.file.path : undefined
    const post = await editPostValidation.validateAsync(req.body)
    const { userId, title, content, filterView, filterComment } = post
    const result = await postController.edit(id, {
      userId,
      title,
      content,
      imagePost,
      file,
      filterView,
      filterComment
    })
    if (result[0]){
      res.status(200).json({
        status: '200 OK',
        message: 'Edit posts successful'
      })     
    } else {
      res.status(400).json({
        error: {
          status: '400 Bad Request',
          message: `Posts could not be edited. Please check posts id or your input`
        }
      })
    }    
  } catch (error) {
    if (error instanceof ValidationError){
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `${error.details.map(err => err.message)}`
        }
      })
    } else if (error instanceof DatabaseError) {
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `Something went wrong, invalid input value`
        }
      })
    } else {
      next(error)
    }
  }
})

app.delete('/:id', restrict, async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await postController.remove(id)
    if (result) {
      res.status(200).json({
        status: '200 OK',
        message: 'Delete posts successful'
      })
    } else {
      res.status(404).json({
        status: '404 Not Found',
        message: 'Posts not found'
      })
    }
  } catch (error) {
    next(error)
  }
})

module.exports = app