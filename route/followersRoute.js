const express = require('express')
const FollowersController = require('../controller/followersController')

const {ForeignKeyConstraintError, DatabaseError} = require('sequelize')
const restrict = require('../middleware/passportMiddleware')
const followers = new FollowersController()
const app = express.Router()

app.post('/', restrict, async (req, res, next) => {
  try {
    const userId = req.user.id
    const {followerId} = req.body
    if (userId == followerId) {
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `Something wrong, userId can't be same as followerId`
        }
      })
    } else {
        const result = await followers.add({userId, followerId})
        res.status(200).json({
        status: '200 OK',
        message: 'Followed successful',
        data: result
      })
    }
  } catch (error) {
    if (error instanceof ForeignKeyConstraintError) {
      res.status(500).json({
        error: {
          status: '500 Internal Server Error',
          message: `Something wrong, foreign key constraint doesn't match`
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

app.get('/', async (req, res, next) => {
  try {
    const result = await followers.get(req.query)
    res.status(200).json({
      status: '200 OK',
      message: 'Read all followers successful',
      data: result
    })
  } catch (error) {
    next (error)
  }
})

app.delete('/:id', async (req, res, next) => {
  const { params } = req
  const result = await followers.remove(params.id)
  if (result) {
    res.status(200).json({
      status: '200 OK',
      message: 'Unfollowed successful'
    })
  } else {
    res.status(404).json({
      error: {
        status: '404 Not Found',
        message: 'Followers not found'
      }
    })
  }
}) 

module.exports = app
