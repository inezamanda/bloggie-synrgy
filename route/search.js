
const express = require('express')
const UserController = require('../controller/userController')
const user = new UserController()
const restrict = require('../middleware/passportMiddleware')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const app = express.Router()


app.get('/search', restrict, async (req, res, next) => {
    try {
        const { keyword } = req.body
        const result = await user.get({
            fullName: {
                [Op.iLike]: keyword,
            }
        })
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

module.exports = app