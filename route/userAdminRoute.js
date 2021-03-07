const userAdminRoute = require('express').Router()
const UserController = require('../controller/userController');
const user = new UserController()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', { session: false })
const isAdmin = require('../middleware/isAdmin')

userAdminRoute.get('/', restrict, isAdmin, async(req, res, next) => {
    try {
        const { email, password, username, fullName, about, interest, location, occupation } = req.body
        const image_profile = req.file ? req.file.path : undefined;
        const image_header = req.file ? req.file.path : undefined;
        const result = await user.register(email, password, username, fullName, image_profile, about, interest, 'user', image_header, location, occupation);
        res.json({
            status : '201 Created',
            success : true,
            message : `Register success`,
            data : {result}
         });
    } catch (error) {
        next(error)
    };
})