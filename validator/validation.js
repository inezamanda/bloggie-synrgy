const Joi = require("joi");

const commentValidation = Joi.object({
  postId: Joi.string()
    .min(1)
    .max(21)
    .required(),

  userId: Joi.string()
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
    .min(1)
    .max(30)
    .pattern(/^[a-zA-Z]+$/)
    .required()
})

const editCategoryValidation = Joi.object({
  name: Joi.string()
    .trim()
    .min(1)
    .max(30)
    .pattern(/^[a-zA-Z]+$/)
})

const postValidation = Joi.object({
  userId: Joi.string()
    .min(1)
    .max(21)
    .required(),

  title: Joi.string()
    .trim()
    .min(1)
    .max(200)
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
    .required(),
  
  filterView: Joi.string()
    .trim()
    .min(1)
    .max(9)
    .pattern(/^[a-zA-Z]+$/)
    .default('Anyone'),
  
  filterComment: Joi.string()
    .trim()
    .min(1)
    .max(9)
    .pattern(/^[a-zA-Z]+$/)
    .default('Anyone')
    
})

const editPostValidation = Joi.object({
  title: Joi.string()
    .trim()
    .min(1)
    .max(200)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\//g, '&#x2F;')
    .replace(/\\/g, '&#x5C;')
    .replace(/`/g, '&#96;')
    .replace(/\n+/g, '<br>')
    .replace(/\s+/g, '&nbsp;'), 

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
    .replace(/\s+/g, '&nbsp;'),
  
  filterView: Joi.string()
    .trim()
    .min(1)
    .max(9)
    .pattern(/^[a-zA-Z]+$/),
  
  filterComment: Joi.string()
    .trim()
    .min(1)
    .max(9)
    .pattern(/^[a-zA-Z]+$/)
})

const registerValidation = Joi.object({
  email: Joi.string()
    .min(3)
    .max(50)
    .email()
    .required(),

  password: Joi.string()
    .min(3)
    .max(30)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),

  username: Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),

  fullName: Joi.string()
    .min(1)
    .max(100)
    .trim()
    .pattern(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*\s?$/)
    .required(),

  about: Joi.string()
    .min(1)
    .max(400)
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\//g, '&#x2F;')
    .replace(/\\/g, '&#x5C;')
    .replace(/`/g, '&#96;')
    .replace(/\n+/g, '<br>')
    .replace(/\s+/g, '&nbsp;'),

  occupation: Joi.string()
    .min(1)
    .max(50)
    .trim()
    .pattern(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*\s?$/),

  role: Joi.string()
    .trim()
    .min(1)
    .max(5)
    .pattern(/^[a-zA-Z]+$/)
    .default('User')
})

const loginValidation = Joi.object({
  email: Joi.string()
    .min(3)
    .max(50)
    .email()
    .required(),

  password: Joi.string()
    .min(3)
    .max(30)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required()
})

const forgotPasswordValidation = Joi.object({
  email: Joi.string()
    .min(3)
    .max(50)
    .email()
    .required()
})

const resetPasswordValidation = Joi.object({
  password: Joi.string()
    .min(3)
    .max(30)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required()
})



module.exports = {
  commentValidation,
  editCommentValidation,
  categoryValidation,
  editCategoryValidation,
  postValidation,
  editPostValidation,
  registerValidation,
  loginValidation,
  forgotPasswordValidation,
  resetPasswordValidation
}