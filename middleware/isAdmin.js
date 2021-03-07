const isAdmin = async(req, res, next) => {
    const { Users } = req
    if (Users.role !== 'admin') {
        res.status(403).json({
            status : '403',
            success : false,
            message : `You don't have access here`
        })
    }
    next();
}

module.exports = isAdmin;