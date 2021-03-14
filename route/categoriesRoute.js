const express = require('express')
const CategoriesController = require('../controller/categoriesController')
const upload = require('../middleware/multerMiddleware')

const { categoryValidation, editCategoryValidation } = require('../validator/validation')
const { ValidationError } = require('joi')
const { DatabaseError, UniqueConstraintError } = require('sequelize')

const restrict = require('../middleware/passportMiddleware')
const categories = new CategoriesController()
const app = express.Router()

app.post('/', restrict, upload.single('icon'), async (req, res, next) => {
  try {
    const category = await categoryValidation.validateAsync(req.body)
    const { name } = category
    const icon = req.file ? req.file.path : undefined;
    const result = await categories.add({
      name,
      icon
    })
    res.status(201).json({
      status: '201 Created',
      message: 'Add categories successful',
      data: result
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
          message: `Something went wrong, invalid input value`
        }
      })
    } else if (error instanceof UniqueConstraintError) {
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `Something went wrong, category name have been already used`
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
    const result = await categories.get(req.query)
    res.status(200).json({
      status: '200 OK',
      message: 'Read all categories successful',
      data: result
    })
  } catch (error) {
    next(error)
  }
})

app.get('/:id', async (req, res, next) => {
  try {
    const { params } = req
    const result = await categories.getId(params.id)
    if (result) {
      res.status(200).json({
        status: '200 OK',
        message: 'Read categories successful',
        data: result
      })
    } else {
      res.status(404).json({
        status: '404 Not Found',
        message: 'Categories not found'
      })
    }    
  } catch (error) {
    next(error)
  }
})

app.put('/:id', restrict, upload.single('icon'), async (req, res, next) => {
  try {
    const { body, params } = req
    const category = await editCategoryValidation.validateAsync(body)
    const { name } = category
    const icon = req.file ? req.file.path : undefined;
    const result = await categories.edit(params.id, {
      name,
      icon
    })
    if (result[0]) {
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
    }  else if (error instanceof UniqueConstraintError) {
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `Something went wrong, category name have been already used`
        }
      })
    } else if (error instanceof DatabaseError) {
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `Something went wrong, invalid input value`
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
  } catch (error) {
    next(error)
  }
})

module.exports = app