const express = require('express')
const sendMailer = require('../middleware/sendEmail')

const app = express.Router()

app.post('/reset', async (req, res, next) => {
    try {
        const { email } = req.body
        await sendMailer(email)
            .then(result => {
                res.json({
                    message: 'Success',
                    data: result
                })
            })
    } catch (error) {
        next(error)
    }
})

module.exports = app