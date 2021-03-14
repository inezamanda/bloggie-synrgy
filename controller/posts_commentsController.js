const { Posts_Comments } = require('../models')
const BaseController = require('./baseController')

class PostsCommentsController extends BaseController {
  constructor() {
    super(Posts_Comments)
  }
}

module.exports = PostsCommentsController