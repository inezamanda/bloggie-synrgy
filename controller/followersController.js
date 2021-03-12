const { Followers } = require('../models')
const BaseController = require('./baseController')

class FollowersController extends BaseController {
  constructor() {
    super(Followers)
  }
}

module.exports = FollowersController