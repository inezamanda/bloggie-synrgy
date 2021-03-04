const authRoute = require('express').Router();
const UserController = require('../controller/userController');
const user = new UserController()
const restrict = require('../middleware/passportMiddleware');
const multer = require(`multer`);

authRoute.post(`/register`, async(req, res, next) => {
    try {
        const {
            email, password, username, fullName, about, interest
         } = req.body;
         const image_profile = req.file ? req.file.path : undefined;
        const result = await user.register(email, password, username, fullName, image_profile, about, interest, 'user');
        res.status(201).json({
            status : '201 Created',
            success : true,
            message : `Register success`,
            data : {result}
         });
    } catch (error) {
        next(error)
    };
});

module.exports = authRoute;