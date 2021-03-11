const userRoute = require('express').Router();
const UserController = require('../controller/userController');
const user = new UserController()
const { Users } = require('../models')
const {JWT_SECRET} = process.env
const jwt_decode = require('jwt-decode');
const jwt = require(`jsonwebtoken`);
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', { session: false })
const upload = require('../middleware/multerMiddleware')

// get profile
userRoute.get('/:username', async(req, res, next) => {
    try {
        const { username} = req.params;
        const result = await user.get({ username });
        res.status(200).json({
            status : '200 Found',
            success : true,
            message : `Success`,
            data : result
        });
    } catch (error) {
        next(error)
    };
});

// update profile
userRoute.put(`/edit`, restrict, upload.single('imageProfile'), upload.single('imageHeader'), async(req, res, next) => {
    try {
        const id = req.user.id;
        // const { User } = req
        // var decoded = jwt.verify(req.token, JWT_SECRET);
        // var userId = decoded.id
        const { username, fullName, about, email, location } = req.body
        const imageProfile = req.file ? req.file.path : undefined;
        const imageHeader = req.file ? req.file.path : undefined;
        const result = await user.edit(id, { imageProfile, fullName, username, about, email, location, imageHeader});
        res.status(201).json({
            status : '201 Update',
            success : true,
            message : `Updated account = '${id}' successfully`,
            data : result
        });
    } catch (error) {
        next(error)
    };
});

// delete account
userRoute.delete('/delete', restrict, async (req, res, next) => {
    try {
        const id = req.user.id
        await user.remove(id)
        res.status(200).json({
            status : '200 Ok',
            success : true,
            message : `Delete account = '${id}' successfully`,
        })
    } catch (error) {
        next(error)
    }
})

module.exports = userRoute;
