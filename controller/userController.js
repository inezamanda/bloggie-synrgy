const { Users } = require('../models')
const BaseController = require('./baseController')

class UsersController extends BaseController {
    constructor() {
        super(Users)
    }
}

module.exports = new UsersController()
