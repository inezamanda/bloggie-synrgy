const { Posts } = require('../models')
const BaseController = require('./baseController')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));

class PostsController extends BaseController {
  constructor() {
    super(Posts)
  }

  async getPostLastWeek() {
    return await Posts.findAll({
      where: {
        createdAt: {
          [Op.between]: [sevenDaysAgo, new Date()]
        }
      },
      order: [['createdAt', 'ASC']]
    })
  }
}

module.exports = new PostsController()
