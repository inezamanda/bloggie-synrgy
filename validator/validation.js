const Joi = require("joi");

const commentValidation = Joi.object({
  posts_id: Joi.required(),

  users_id: Joi.required(),

  content: Joi.string()
    .trim()
    .min(1)
    .max(4000)
    .required()
})

module.exports = {
  commentValidation
}