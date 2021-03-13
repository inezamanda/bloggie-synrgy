const { Posts_Categories, Posts} = require('../models')
const BaseController = require('./baseController')

class PostsCategoriesController extends BaseController {
  constructor() {
    super(Posts_Categories)
  }
  getPostByCategory(categoryId){
    return Posts_Categories.findAll({
      where: {
        categoryId
      }, 
      include: {
        model: Posts,
        required: true
      }
    })
  }
}

module.exports = PostsCategoriesController
