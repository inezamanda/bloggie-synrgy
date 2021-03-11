const authRoute = require('express').Router();
const UserController = require('../controller/userController');
const user = new UserController()
const upload = require('../middleware/multerMiddleware')

authRoute.post(`/register`, upload.single('imageProfile'), async (req, res, next) => {
    try {
        const { email, password, username, fullName, about, interest, role } = req.body
        const imageProfile = req.file ? req.file.path : undefined;

        const result = await user.register(email, password, username, fullName, imageProfile, about, interest, role);

        res.json({
            status: '201 Created',
            success: true,
            message: `Register success`,
            data: { result }
        });
    } catch (error) {
        next(error)
    };
});

authRoute.post(`/login`, async (req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body;
        const result = await user.login(email, password);
        res.json({
            status: '302 Found',
            success: true,
            message: `Login success`,
            data: { result }
        });
    } catch (error) {
        next(error)
    };
});

module.exports = authRoute;