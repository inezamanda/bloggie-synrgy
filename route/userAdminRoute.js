const userAdminRoute = require('express').Router()
const UserController = require('../controller/userController');
const user = new UserController()
const upload = require('../middleware/multerMiddleware')
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', { session: false })
const isAdmin = require('../middleware/isAdmin')

userAdminRoute.post('/register/admin', upload.single('uploaded'), async(req, res, next) => {
    try {
        const { email, password, username, fullName, about, interest, location, occupation } = req.body
        const image_profile = req.file ? req.file.path : undefined;
        const image_header = req.file ? req.file.path : undefined;
        const result = await user.register(email, password, username, fullName, image_profile, about, interest, 'admin', image_header, location, occupation);
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

userAdminRoute.get('/list-of-user', restrict, isAdmin, upload.single('uploaded'), async(req, res, next) => {
    try {
        const result = await user.get();
        res.status(200).json({
            status : '200 Found',
            success : true,
            message : `Success`,
            data : result
        });
    } catch (error) {
        next(error)
    };
})

userAdminRoute.get('/user/:username', restrict, isAdmin, upload.single('uploaded'), async(req, res, next) => {
    try {
        const {
            username
        } = req.params;
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
})

userAdminRoute.post('/create/user', restrict, isAdmin, upload.single('uploaded'), async(req, res, next) => {
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

userAdminRoute.post('/create/admin', restrict, isAdmin, upload.single('uploaded'), async(req, res, next) => {
    try {
        const { email, password, username, fullName, about, interest, location, occupation } = req.body
        const image_profile = req.file ? req.file.path : undefined;
        const image_header = req.file ? req.file.path : undefined;
        const result = await user.register(email, password, username, fullName, image_profile, about, interest, 'admin', image_header, location, occupation);
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

userAdminRoute.put('/user/:id', restrict, isAdmin, upload.single('uploaded'), async(req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const {
            fullName, about, email, location
        } = req.body
        const image_profile = req.file ? req.file.path : undefined;
        const image_header = req.file ? req.file.path : undefined;
        const result = await user.edit(id, { image_profile, fullName, username, about, email, location, image_header});
        res.status(201).json({
            status : '201 Update',
            success : true,
            message : `Updated username = '${id}' successfully`,
            data : result
        });
    } catch (error) {
        next(error)
    };
})

userAdminRoute.delete('/user/:id', restrict, isAdmin, upload.single('uploaded'), async(req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const image_profile = req.file ? req.file.path : undefined;
        const image_header = req.file ? req.file.path : undefined;
        await user.remove(id)
        res.status(200).json({
            status : '200 Ok',
            success : true,
            message : `Delete account = '${id}' successfully`,
        });
    } catch (error) {
        next(error)
    };
})

module.exports = userAdminRoute