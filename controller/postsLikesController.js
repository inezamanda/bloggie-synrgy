const { Posts_Likes } = require('../models')
const BaseController = require('./baseController')

class PostsLikesController extends BaseController {
  constructor() {
    super(Posts_Likes)
  }
}

module.exports = PostsLikesController