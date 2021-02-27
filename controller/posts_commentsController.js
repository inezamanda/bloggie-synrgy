const {Posts_comments} =  require('../models')
const BaseController = require('./baseController')

class PostsCommentsController extends BaseController{
  constructor(){
    super(Posts_comments)
  }
}

module.exports = PostsCommentsController