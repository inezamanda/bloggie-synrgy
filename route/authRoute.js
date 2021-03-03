const authRoute = require('express').Router();
const authController = require('../controller/authController');
const restrict = require('../middleware/restrict');

authRoute.post(`/register`, authController.register);

module.exports = authRoute;