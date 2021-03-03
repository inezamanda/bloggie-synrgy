const {check} = require('express-validator')

exports.commentsValidation = [
  check('content').trim().isLength({min: 1}).withMessage(`Comments can't be empty, a first character is required.`),
  check('content').trim().isLength({max: 4000}).withMessage(`Comments can't be longer than 4000 characters, please shortening your comment.`)
]

// exports.commentsValidation = [
//   body('content', `Comments can't be empty, a first character is required.`).isLength({min: 1}),
//   body('content', `Comments can't be longer than 4000 characters, please shortening your comment.`).isLength({max: 4000})
// ]