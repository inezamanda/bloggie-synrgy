const express = require('express')
const sendMailer = require('../middleware/sendEmail')
const usersController = require('../controller/userController')
const bcrypt = require(`bcrypt`);

const app = express.Router()

app.post('/forgot', async (req, res, next) => {
    try {
        const { email } = req.body
        const { host } = req.headers
        const user = await usersController.get({ email })
        if (!user) {
            res.send('cant find email')
        }
        sendMailer(email, host, user)
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

app.patch('/reset/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { password } = req.body
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await usersController.edit(id, { password: encryptedPassword })
        res.status(200).json({
            success: true,
            message: `Password change success`,
            data: []
        })
    } catch (error) {
        next(error)
    }
})

module.exports = app