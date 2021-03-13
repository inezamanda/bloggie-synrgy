const express = require('express')
const mainFeedController = require('../controller/mainFeedController')

const app = express.Router()

app.get('/', async (req, res, next) => {
    try {
        const result = await mainFeedController.getPost()

        res.status(200).json({
            success: true,
            message: 'Success',
            data: result
        })
    } catch (error) {
        next(error)
    }
})

module.exports = app
