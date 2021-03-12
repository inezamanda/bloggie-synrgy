const authRoute = require('express').Router();
const UserController = require('../controller/userController');
const user = new UserController()
const upload = require('../middleware/multerMiddleware')

const {registerValidation, loginValidation} = require('../validator/validation')
const { ValidationError } = require('joi')
const { UniqueConstraintError } = require('sequelize')

authRoute.post(`/register`, upload.single('imageProfile'), async (req, res, next) => {
    try {
        const register = await registerValidation.validateAsync(req.body)
        const { email, password, username, fullName, about, role } = register
        const imageProfile = req.file ? req.file.path : undefined;

        const result = await user.register(email, password, username, fullName, imageProfile, about, role);

        res.status(201).json({
            status: '201 Created',
            message: 'Register successful',
            data: result
        })
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(500).json({
                error: {
                    status: '500 Internal Server Error',
                    message: `${error.details.map(err => err.message)}`
                }
            })
        } else if (error instanceof UniqueConstraintError) {
            res.status(500).json({
                error: {
                    status: '500 Internal Server Error',
                    message: `Something went wrong, email or username have been already used`
                }
            })
        }
        else {
            next(error)
        }
    }
});

authRoute.post(`/login`, async (req, res, next) => {
    try {
        const login = await loginValidation.validateAsync(req.body)
        const {
            email,
            password
        } = login;
        const result = await user.login(email, password);
        if(result) {
            res.status(200).json({
                status: '200 OK',
                message: `Login success`,
                data: result 
            });
        } else {
            res.status(400).json({
                error : {
                    status: '400 Bad Request',
                    message: `Sorry, your password was incorrect. Please double-check your password.`
                }
            });            
        }
    } catch (error) {
        if (error instanceof TypeError) {
            res.status(400).json({
                error: {
                    status: '400 Bad Request',
                    message: 'Invalid email, user not found'
                }
            })
        } else if (error instanceof ValidationError) {
            res.status(500).json({
                error: {
                    status: '500 Internal Server Error',
                    message: `${error.details.map(err => err.message)}`
                }
            })
        } else {
            next(error)
        }
    };
});

module.exports = authRoute;