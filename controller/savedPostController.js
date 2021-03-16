const { Posts_Saves } = require('../models')
const BaseController = require('./baseController')

class savedPostsController extends BaseController {
  constructor() {
    super(Posts_Saves)
  }
}

module.exports = new savedPostsController()
