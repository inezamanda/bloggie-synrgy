const { Users_Interests, Categories, Posts_Categories, Posts, Posts_Likes, Posts_Comments } = require('../models')
const BaseController = require('./baseController')

class UserInterestController extends BaseController {
    constructor() {
        super(Users_Interests)
    }

    async getPost(userId) {
        const result = await Users_Interests.findAll({
            where: {
                userId
            },
            include: {
                model: Categories,
                include: {
                    model: Posts_Categories,
                    include: {
                        model: Posts,
                        include: [{
                            model: Posts_Likes
                        },
                        {
                            model: Posts_Comments
                        }]
                    }
                }
            }
        })
        return result
    }
}

module.exports = new UserInterestController()