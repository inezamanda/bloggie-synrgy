const Joi = require("joi");

const commentValidation = Joi.object({
  content: Joi.string()
    .trim()
    .min(1)
    .max(4000)
    .required()
})

module.exports = {
  commentValidation
}