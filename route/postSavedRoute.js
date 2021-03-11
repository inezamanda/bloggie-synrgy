const express = require('express')
const savedPostController = require('../controller/savedPostController')
const restrict = require('../middleware/passportMiddleware')


const app = express.Router()

app.post('/', restrict, async (req, res, next) => {
  try {
    const users_id = req.user.id
    const { posts_id } = req.body
    const result = await savedPostController.add({
      posts_id,
      users_id,
      
    })
    res.status(201).json({
      success: true,
      message: 'Success add data',
      data: result
    })
  } catch (error) {
    next(error)
  }d
})

app.delete('/:id', restrict, async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await savedPostController.remove(id)
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