const express = require('express')
const UserInterestController = require('../controller/userInterestController')
const restrict = require('../middleware/passportMiddleware')

const app = express.Router()

app.get('/getAllPost', restrict, async (req, res, next) => {
    try {
        const id = req.user.id
        const results = await UserInterestController.getPost(id)
        const post = []
        const data = []
        results.map(result => result.Category)
            .forEach(Category => Category.Posts_Categories
                .map(postCategory => post.push(postCategory.Post)))

        for (let index = 0; index < post.length; index++) {
            const element = post[index]
            const like = element.Posts_Likes.length
            const comment = element.Posts_Comments.length

            const result = {
                id: element.id,
                userId: element.userId,
                title: element.title,
                content: element.content,
                imagePost: element.imagePost,
                file: element.file,
                filterView: element.filterView,
                filterComment: element.filterComment,
                createdAt: element.createdAt,
                updatedAt: element.updatedAt,
                like,
                comment
            }
            data.push(result)
        }

        res.status(200).json({
            success: true,
            message: 'Success',
            data
        })
    } catch (error) {
        next(error)
    }
})

module.exports = app