const Joi = require("joi");

const commentValidation = Joi.object({
  posts_id: Joi.string()
    .min(1)
    .max(21)
    .required(),

  users_id: Joi.string()
    .min(1)
    .max(21)
    .required(),

  content: Joi.string()
    .trim()
    .min(1)
    .max(4000)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\//g, '&#x2F;')
    .replace(/\\/g, '&#x5C;')
    .replace(/`/g, '&#96;')
    .replace(/\n+/g, '<br>')
    .replace(/\s+/g, '&nbsp;')
    .required()
})

const editCommentValidation = Joi.object({
  content: Joi.string()
    .trim()
    .min(1)
    .max(4000)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\//g, '&#x2F;')
    .replace(/\\/g, '&#x5C;')
    .replace(/`/g, '&#96;')
    .replace(/\n+/g, '<br>')
    .replace(/\s+/g, '&nbsp;')
    .required()
})

const categoryValidation = Joi.object({
  name: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z]+$/)
})

module.exports = {
  commentValidation,
  editCommentValidation,
  categoryValidation
}