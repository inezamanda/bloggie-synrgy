const authRoute = require('express').Router();
const UserController = require('../controller/userController');
const user = new UserController()
const upload = require('../middleware/multerMiddleware')

authRoute.post(`/register`, upload.single('uploaded'), async(req, res, next) => {
    try {
        const { email, password, username, fullName, about, interest, location, occupation } = req.body
        const image_profile = req.file ? req.file.path : undefined;
        const image_header = req.file ? req.file.path : undefined;
        const result = await user.register(email, password, username, fullName, image_profile, about, interest, 'User', image_header, location, occupation);
        res.json({
            status : '201 Created',
            success : true,
            message : `Register success`,
            data : {result}
         });
    } catch (error) {
        next(error)
    };
});

authRoute.post(`/login`, async(req, res, next) => {
    try {
        const {
            email, 
            password
        } = req.body;
        const result = await user.login(email, password);
        res.json({
            status : '302 Found',
            success : true,
            message : `Login success`,
            data : {result}
        });
    } catch (error) {
        next(error)
    };
});

module.exports = authRoute;