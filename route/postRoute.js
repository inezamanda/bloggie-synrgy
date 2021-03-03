const express = require('express')
const postController = require('../controller/postController')
const app = express.Router()

app.get('/', async (req, res, next) => {
  try {
    const result = await postController.get()
    res.json({
      status: '200 OK',
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
    res.json({
      status: '200 OK',
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
    res.json({
      status: '200 OK',
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
    res.json({
      status: '200 OK',
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
    res.json({
      status: '200 OK',
      message: `Deleted id = '${id}' successfully`,
      data: result
    })
  } catch (error) {
    next(error)
  }
})

module.exports = app