// const { Users } = require('../models/users')

//const userAdminRoute = require("../route/userAdminRoute");

const isAdmin = async(req, res, next) => {
    const { user } = req
    if (user.role !== 'admin') {
        res.status(403).json({
            status : '403',
            success : false,
            message : `You don't have access here`
        })
    }
    next();
}

module.exports = isAdmin;