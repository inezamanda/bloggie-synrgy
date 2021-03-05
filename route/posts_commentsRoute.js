const express = require('express')
const PostsCommentsController = require('../controller/posts_commentsController')
const {commentValidation} = require('../validator/validation')

const postsComments = new PostsCommentsController()
const app = express.Router()

app.post('/', async (req, res, next) => {
  try {
    const result = await commentValidation.validateAsync(req.body)
    const comment = await postsComments.add(result)
    res.status(200).json({
      status: '200 OK',
      message: 'Add comments successful',
      data: comment
    })
  } catch(error) {
    next(error)
  }
})

app.get('/', async (req, res, next) => {
  const comment =  await postsComments.get(req.query)
  res.status(200).json({
    status: '200 OK',
    message: 'Read all comments successful',
    data: comment
  })
})

app.get('/:id', async (req, res, next) => {
  const {params} = req
  const comment = await postsComments.getId(params.id)
  if (comment) {
    res.status(200).json({
      status: '200 OK',
      message: 'Read comments successful'
    })
  } else{
    res.status(404).json({
      status: '404 Not Found',
      message: 'Comments not found'
    })
  }
})

app.put('/:id', async (req, res, next) => {
  try {
    const {body, params} = req
    const result = await commentValidation.validateAsync(body)
    const comment = await postsComments.edit(params.id, result)
    if(comment[0]){
      res.status(200).json({
        status: '200 OK',
        message: 'Edit comments successful'
      })
    } else {
      res.status(404).json({
        status: '404 Not Found',
        message: 'Comments not found'
      })
    }
  } catch(error) {
    next(error)
  }
})

app.delete('/:id', async (req, res, next) => {
  const {params} = req
  const comment = await postsComments.remove(params.id)
  if (comment) {
    res.status(200).json({
      status: '200 OK',
      message: 'Delete comments successful'
    })
  } else{
    res.status(404).json({
      status: '404 Not Found',
      message: 'Comments not found'
    })
  }
})

module.exports = app