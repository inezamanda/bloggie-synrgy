const userAdminRoute = require('express').Router()
const UserController = require('../controller/userController');
const user = new UserController()
const upload = require('../middleware/multerMiddleware')
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', { session: false })
const isAdmin = require('../middleware/isAdmin')

// To create new admin ( mempermudah buat testing saja)
// userAdminRoute.post('/register/admin', upload.single('image_profile'), upload.single('image_header'), async(req, res, next) => {
//     try {
//         const { email, password, username, fullName, about, interest, location, occupation } = req.body
//         const image_profile = req.file ? req.file.path : undefined;
//         const image_header = req.file ? req.file.path : undefined;
//         const result = await user.register(email, password, username, fullName, image_profile, about, interest, 'Admin', image_header, location, occupation);
//         res.json({
//             status : '201 Created',
//             success : true,
//             message : `Register success`,
//             data : {result}
//          });
//     } catch (error) {
//         next(error)
//     };
// })

userAdminRoute.get('/list-of-user', restrict, isAdmin, async(req, res, next) => {
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

userAdminRoute.get('/user/:username', restrict, isAdmin, async(req, res, next) => {
    try {
        const { username } = req.params;
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

userAdminRoute.post('/create/user', restrict, isAdmin, upload.single('imageProfile'), upload.single('imageHeader'), async(req, res, next) => {
    try {
        const { email, password, username, fullName, about, interest, location, occupation } = req.body
        const imageProfile = req.file ? req.file.path : undefined;
        const imageHeader = req.file ? req.file.path : undefined;
        const result = await user.register(email, password, username, fullName, imageProfile, about, interest, 'User', imageHeader, location, occupation);
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

userAdminRoute.post('/create/admin', restrict, isAdmin, upload.single('imageProfile'), upload.single('imageHeader'), async(req, res, next) => {
    try {
        const { email, password, username, fullName, about, interest, location, occupation } = req.body
        const imageProfile = req.file ? req.file.path : undefined;
        const imageHeader = req.file ? req.file.path : undefined;
        const result = await user.register(email, password, username, fullName, imageProfile, about, interest, 'Admin', imageHeader, location, occupation);
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

userAdminRoute.put('/user/:id', restrict, isAdmin, upload.single('imageProfile'), upload.single('imageHeader'), async(req, res, next) => {
    try {
        const { id } = req.params;
        const { username, fullName, about, email, location, role } = req.body
        const imageProfile = req.file ? req.file.path : undefined;
        const imageHeader = req.file ? req.file.path : undefined;
        const result = await user.edit(id, { username, imageProfile, fullName, username, about, email, location, imageHeader, role });
        res.status(201).json({
            status : '201 Update',
            success : true,
            message : `Updated account with id = '${id}' successfully`,
            data : result
        });
    } catch (error) {
        next(error)
    };
})

userAdminRoute.delete('/user/:id', restrict, isAdmin, upload.single('uploaded'), async(req, res, next) => {
    try {
        const { id } = req.params;
        await user.remove(id)
        res.status(200).json({
            status : '200 Ok',
            success : true,
            message : `Delete account with id = '${id}' successfully`,
        });
    } catch (error) {
        next(error)
    };
})

module.exports = userAdminRoute
