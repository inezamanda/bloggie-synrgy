const express = require('express')
const CategoriesController = require('../controller/categoriesController')
const { categoryValidation, editCategoryValidation } = require('../validator/validation')
const upload = require('../middleware/multerMiddleware')
const { ValidationError } = require('joi')
const { DatabaseError } = require('sequelize')

const categories = new CategoriesController()
const app = express.Router()

app.post('/', upload.single('icon'), async (req, res, next) => {
  try {
    const result = await categoryValidation.validateAsync(req.body)
    const { name } = result
    const icon = req.file ? req.file.path : undefined;
    const category = await categories.add({
      name,
      icon
    })
    res.status(200).json({
      status: '200 OK',
      message: 'Add categories successful',
      data: category
    })
  } catch (error) {
    if (error instanceof ValidationError) {
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
          message: `Something went wrong, icon can't be empty or file must be .png, .jpg, .jpeg format`
        }
      })
    }
    else {
      next(error)
    }
  }
})

app.get('/', async (req, res, next) => {
  const category = await categories.get(req.query)
  res.status(200).json({
    status: '200 OK',
    message: 'Read all categories successful',
    data: category
  })
})

app.get('/:id', async (req, res, next) => {
  const { params } = req
  const category = await categories.getId(params.id)
  if (category) {
    res.status(200).json({
      status: '200 OK',
      message: 'Read categories successful',
      data: category
    })
  } else {
    res.status(404).json({
      status: '404 Not Found',
      message: 'Categories not found'
    })
  }
})

app.put('/:id', upload.single('icon'), async (req, res, next) => {
  try {
    const { body, params } = req
    const result = await editCategoryValidation.validateAsync(body)
    const { name } = result
    const icon = req.file ? req.file.path : undefined;
    const category = await categories.edit(params.id, {
      name,
      icon
    })
    if (category[0]) {
      res.status(200).json({
        status: '200 OK',
        message: 'Edit categories successful'
      })
    } else {
      res.status(400).json({
        error: {
          status: '400 Bad Request',
          message: `Categories could not be edited. Please check categories id or your input`
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
    } else {
      next(error)
    }
  }
})

app.delete('/:id', async (req, res, next) => {
  const { params } = req
  const category = await categories.remove(params.id)
  if (category) {
    res.status(200).json({
      status: '200 OK',
      message: 'Delete categories successful'
    })
  } else {
    res.status(404).json({
      status: '404 Not Found',
      message: 'Categories not found'
    })
  }
})

module.exports = app