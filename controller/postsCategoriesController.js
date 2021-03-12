const { Posts_Categories } = require('../models')
const BaseController = require('./baseController')

class PostsCategoriesController extends BaseController {
  constructor() {
    super(Posts_Categories)
  }
}

module.exports = PostsCategoriesController
