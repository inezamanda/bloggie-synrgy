const express = require('express')
const postController = require('../controller/postController')
const upload = require('../middleware/multerMiddleware')
const restrict = require('../middleware/passportMiddleware')

const app = express.Router()

app.get('/LastWeek', restrict, async (req, res, next) => {
  try {
    const result = await postController.getPostLastWeek()
    res.status(200).json({
      success: true,
      message: 'Success',
      data: result
    })
  } catch (error) {
    next(error)
  }
})

app.get('/active', restrict, async (req, res, next) => {
  try {
    const { id } = req.user
    const result = await postController.get({ userId: id })
    if (!result[0]) {
      res.status(400).json({
        success: false,
        message: 'Data not found',
        data: result
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Success',
        data: result
      })
    }
  } catch (error) {
    next(error)
  }
})

app.get('/', async (req, res, next) => {
  try {
    const result = await postController.get()
    res.status(200).json({
      success: true,
      message: 'Success',
      data: result
    })
  } catch (error) {
    next(error)
  }
})

app.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await postController.get({ id })
    res.status(200).json({
      success: true,
      message: 'Success',
      data: result
    })
  } catch (error) {
    next(error)
  }
})

app.post('/', restrict, upload.single('imagePost'), async (req, res, next) => {
  try {
    const imagePost = req.file ? req.file.path : undefined
    // const file = req.files ? req.files.path : undefined
    const { userId, title, content, filterView, filterComment } = req.body
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
      success: true,
      message: 'Success add data',
      data: result
    })
  } catch (error) {
    next(error)
  }
})

app.put('/:id', restrict, upload.single('imagePost'), async (req, res, next) => {
  try {
    const { id } = req.params
    const imagePost = req.files ? req.files.path : undefined
    // const file = req.file ? req.file.path : undefined
    const { userId, title, content, filterView, filterComment } = req.body
    const result = await postController.edit(id, {
      userId,
      title,
      content,
      imagePost,
      file,
      filterView,
      filterComment
    })
    res.status(201).json({
      success: true,
      message: `Updated id = '${id}' successfully`,
      data: result
    })
  } catch (error) {
    next(error)
  }
})

app.delete('/:id', restrict, async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await postController.remove(id)
    res.status(200).json({
      success: true,
      message: `Deleted id = '${id}' successfully`,
      data: result
    })
  } catch (error) {
    next(error)
  }
})

module.exports = app