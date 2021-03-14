const { Posts, Users, Posts_Comments } = require('../models')
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

  async getPostById(id) {
    return await Posts.findOne({
      where: {
        id
      }, include: {
        model: Users,
        required: true
      }
    })
  }
  async getPost(id) {
    const result = await Posts.findOne(
        { where: { id },
        include: [
          { model: Users, 
            require: true },
          { model: Posts_Comments, 
            require: true, 
            order: [['createdAt', 'DESC']],
            include: { 
              model: Users, 
              require: true }
          }
        ]
    })
    return result
  }
}

module.exports = new PostsController()
