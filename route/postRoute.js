const express = require('express')
const postController = require('../controller/postController')
const app = express.Router()

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

app.post('/', async (req, res, next) => {
  try {
    const { users_id, title, content, files, filterView, filterComment, isReported } = req.body
    const result = await postController.add({
      users_id,
      title,
      content,
      files,
      filterView,
      filterComment,
      isReported
    })
    res.status(201).json({
      success: true,
      message: 'Success',
      data: result
    })
  } catch (error) {
    next(error)
  }
})

app.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const { users_id, title, content, files, filterView, filterComment, isReported } = req.body
    const result = await postController.edit(id, {
      users_id,
      title,
      content,
      files,
      filterView,
      filterComment,
      isReported
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

app.delete('/:id', async (req, res, next) => {
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