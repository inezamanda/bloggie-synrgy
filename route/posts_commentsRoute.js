const express = require('express')
const PostsCommentsController = require('../controller/posts_commentsController')

const {validationResult} = require('express-validator')
const {commentsValidation} = require('../validator/posts_commentsValidator')
const seed = require('../seeders/20210302072933-posts_comments')

const postsComments = new PostsCommentsController()
const app = express.Router()

app.post('/',  commentsValidation, async (req, res) => {
  const result = await postsComments.add(req.body)
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    res.status(400).json({
      status: '400 Bad Request',
      message: errors.array().map(value => `${value.msg}`)
    })
  }else{
    res.status(200).json({
      status: '200 OK',
      message: 'Add comments successful',
      data: result
    })
  }
})

app.get('/', async (req, res) => {
  const result = await postsComments.get(req.query)
  res.status(200).json({
    status: '200 OK',
    message: 'Read all comments successful',
    data: result
  })
})

app.get('/:id', async (req, res) => {
  const {params} = req
  const result = await postsComments.getId(params.id)
  if (seed.data.filter(({id}) => id == params.id)){
    res.status(200).json({
      status: '200 OK',
      message: 'Read comments successful',
      data: result
  })
  }else {
    res.status(404).json({
      status: '404 Not Found',
      message: 'Comments not found'
    })
  }  
})

app.put('/:id', async (req, res) => {
  const {body, params} = req
  await postsComments.edit(params.id, body)
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    res.status(400).json({
      status: '400 Bad Request',
      message: errors.array().map(value => `${value.msg}`)
    })
  }else{
    if (seed.data.find(({id}) => id == params.id)){
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
  }
})

app.delete('/:id', async (req, res) => {
  const {params} = req
  await postsComments.remove(params.id)
  if (seed.data.filter(({id}) => id == params.id)){
    res.status(200).json({
      status: '200 OK',
      message: 'Delete comments successful'
    })
  } else {
    res.status(404).json({
      status: '404 Not Found',
      message: 'Comments not found'
    })
  }
})

module.exports = app

