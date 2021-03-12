const { Posts } = require('../models')
const BaseController = require('./baseController')

class MainFeedController extends BaseController {
    constructor() {
        super(Posts)
    }

    async getPost() {
        const result = await Posts.findAll({
            include: {
                model: 'Users',
                require: true
            }
        })
        return result
    }
}

module.exports = new MainFeedController()
