const { Posts } = require('../models')
const BaseController = require('./baseController')

class PostsController extends BaseController {
  constructor() {
    super(Posts)
  }
}

module.exports = new PostsController()
