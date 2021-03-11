const { Posts_saved } = require('../models')
const BaseController = require('./baseController')

class savedPostsController extends BaseController {
  constructor() {
    super(Posts_saved)
  }
}

module.exports = new savedPostsController()
