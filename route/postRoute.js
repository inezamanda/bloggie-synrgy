const express = require('express')
const postController = require('../controller/postController')
const upload = require('../middleware/multerMiddleware')
const passport = require('passport')
const restrict = passport.authenticate('jwt', { session: false })

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

app.post('/', restrict, upload.single('uploaded'), async (req, res, next) => {
  try {
    const files = req.file.path
    const { users_id, title, content, filterView, filterComment, isReported } = req.body
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
      message: 'Success add data',
      data: result
    })
  } catch (error) {
    next(error)
  }
})

app.put('/:id', restrict, upload.single('uploaded'), async (req, res, next) => {
  try {
    const { id } = req.params
    const files = req.file.path
    const { users_id, title, content, filterView, filterComment, isReported } = req.body
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